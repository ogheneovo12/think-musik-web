"use client";
import dynamic from "next/dynamic";
const AppContentWrapper = dynamic(
  () => import("@/components/AppContentWrapper"),
  { ssr: false, loading: AppContentWrapperLoading }
);
const AppSidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
  ssr: false,
  loading: () => (
    <div className="fixed min-h-screen animate-pulse bg-gray-200  border-grey-main border-r top-0 w-[273px]"></div>
  ),
});

import AppNavbar from "@/components/Navbar/AppNavbar";
import { AppContentWrapperLoading } from "@/components/AppContentWrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" flex">
      <AppSidebar />
      <AppContentWrapper>
        <AppNavbar />
        <main className="min-h-screen bg-content-light dark:bg-dark-blue">
          {children}
        </main>
      </AppContentWrapper>
    </section>
  );
}
