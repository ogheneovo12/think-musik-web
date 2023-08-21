"use client";

import { v4 } from "uuid";
import { Breadcrumb as FlBreadCrumb } from "flowbite-react";
import Link from "next/link";
import cx from "classnames"

export interface IBreadCrumbItems {
  url?: string;
  label?: string;
  isActive?: boolean;
}

export default function Breadcrumb({
  items,
  className,
}: {
  items: IBreadCrumbItems[];
  className?: string;
}) {
  return (
    <FlBreadCrumb theme={{
      list:"flex items-center flex-wrap justify-center "
    }} aria-label="hamburger" className={cx("flex-wrap",className)}>
      {items?.map((item) => (
        <FlBreadCrumb.Item
          key={v4()}
          className={item?.isActive ? "text-nav-current" : "text-nav-prev"}
          theme={{
            chevron: "hidden",
          }}
        >
          <span className="group-first:hidden mx-2">/</span>
          {item?.isActive ? (
            <span className="dark:text-white">
              {item?.label}
            </span>
          ) : (
            <Link
              className="dark:text-grey-main text-dark-blue"
              href={item?.url || "#"}
            >
              {item?.label}
            </Link>
          )}
        </FlBreadCrumb.Item>
      ))}
    </FlBreadCrumb>
  );
}
