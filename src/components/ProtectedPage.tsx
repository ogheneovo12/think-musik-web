"use client";
import { getAccessToken } from "@/common/utils/token.utils";
import { useRouter } from "next/navigation";
import React from "react";
import PageLoader from "./PageLoader";
import dynamic from "next/dynamic";

export const ProtectedPage = (props: React.PropsWithChildren) => {
  const router = useRouter();
  const jwtToken = getAccessToken();

  if (typeof window !== "undefined" && jwtToken === null) router.push("/");

  if (!jwtToken) return <PageLoader />; // a loading component that prevents the page from rendering

  return <>{props.children}</>;
};

export default dynamic(() => Promise.resolve(ProtectedPage), {
  ssr: false,
  loading: PageLoader,
});
