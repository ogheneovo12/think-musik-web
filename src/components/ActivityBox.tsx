import React from "react";
import Link from "next/link";
import ArrowForward from "@/assets/icons/arrow-forward.svg";
import cx from "classnames";
export interface IActivityBoxProps {
  icon: React.ReactNode;
  title: string;
  actionText: string;
  href: string;
  highlight?: boolean;
}

function ActivityBox({
  icon,
  title,
  actionText,
  href,
  highlight,
}: IActivityBoxProps) {
  return (
    <div
      className={cx(
        "w-full min-h-[166px] p-4 rounded-[10px] border  hover:border-[#4777E1] bg-card-gradient flex flex-col items-center justify-center text-center",
        highlight ? "border-[#4777E1]" : "border-[#4777E14D]"
      )}
    >
      <div className="text-primary-blue">{icon}</div>
      <h3 className="title text-dark-blue-700 my-2">{title}</h3>
      <Link href={href} className="flex items-center pri-text text-dark-blue-700">
        {actionText} <ArrowForward className="ml-2" />
      </Link>
    </div>
  );
}

export default ActivityBox;
