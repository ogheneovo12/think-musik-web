"use client";
import AppContentWrapper from "@/components/AppContentWrapper";
import AppNavbar from "@/components/Navbar/AppNavbar";
import AppSidebar from "@/components/Sidebar/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" flex">
      <AppSidebar />
      <AppContentWrapper>
        <AppNavbar />
        <main className="min-h-screen bg-extra-white dark:bg-dark-blue">
          {children}
        </main>
      </AppContentWrapper>
    </section>
  );
}
