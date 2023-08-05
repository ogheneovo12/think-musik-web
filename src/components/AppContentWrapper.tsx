"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectLayoutState } from "@/redux/features";
import cx from "classnames";

function AppContentWrapper(props: React.PropsWithChildren) {
  const { collapseNav } = useSelector(selectLayoutState);

  return (
    <div
      className={cx("flex-grow", collapseNav ? "sm:ml-16" : "sm:ml-[273px]")}
    >
      {props.children}
    </div>
  );
}

export default AppContentWrapper;
