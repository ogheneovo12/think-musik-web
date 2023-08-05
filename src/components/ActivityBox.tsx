import React from "react";
import Link from "next/link";
import ArrowForward from "@/assets/icons/arrow-forward.svg";

export interface IActivityBoxProps {
  icon: React.ReactNode;
  title: string;
  actionText: string;
  href: string;
}

function ActivityBox({ icon, title, actionText, href }: IActivityBoxProps) {
  return (
    <div className="w-full min-h-[166px] p-4 rounded-[10px] max-w-[332px] bg-card-gradient flex flex-col items-center justify-center text-center">
      <div className="text-primary-blue">{icon}</div>
      <h3 className="title my-2">{title}</h3>
      <Link href={href} className="flex items-center pri-text">
        {actionText} <ArrowForward className="ml-2" />
      </Link>
    </div>
  );
}

export default ActivityBox;
