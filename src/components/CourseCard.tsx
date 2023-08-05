import { CourseLevel } from "@/types";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import PlusCircle from "@/assets/icons/plus-circle.svg";
import ParkSolid from "@/assets/icons/park-solid.svg";
import CancelIcon from "@/assets/icons/cancel.svg";
import cx from "classnames";
import Link from "next/link";

export interface ImageCardProps {
  img: StaticImageData | string;
  title: string;
  children?: React.ReactNode;
  titleClassName?: string;
  inList?: boolean;
}

export interface ICourseCardProps
  extends Omit<ImageCardProps, "children" | "titleClassName"> {
  level: CourseLevel;
  lessonCount?: number;
  duration?: string;
  showDuration?: boolean;
  viewLink?: string;
  id?: string;
  getViewLink?: (course: Omit<ICourseCardProps, "getViewLink">) => string;
  onDelete?: (course: Omit<ICourseCardProps, "getViewLink">) => void;
}

const theme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex rounded-lg  bg-white shadow-md  dark:bg-nav-dark w-full",
    children: "flex h-full flex-col justify-center gap-4 p-[19px]",
  },
};

export function ImageCard({
  img,
  title,
  children,
  titleClassName,
}: ImageCardProps) {
  return (
    <Card theme={theme} className="w-full">
      <Image src={img} alt={title} className="w-full object-cover" />
      <div className="w-full">
        <h4 className={cx("title text-base", titleClassName)}>{title}</h4>
        {children}
      </div>
    </Card>
  );
}

function CourseCard({
  getViewLink,
  onDelete = () => {},
  ...rest
}: ICourseCardProps) {
  const {
    img,
    title,
    level,
    lessonCount,
    duration,
    showDuration,
    viewLink = "#",
    inList,
  } = rest;
  return (
    <ImageCard title={title} img={img}>
      <div className="flex items-center justify-between mt-3">
        <p className="pri-text">
          <span className="capitalize">{level}</span> |{" "}
          {showDuration ? duration : <span>{lessonCount} lessons</span>}
        </p>
        <div className="flex items-center space-x-5 text-primary-blue dark:text-grey-main ">
          {inList ? (
            <button onClick={() => onDelete(rest)}>
              <CancelIcon />
            </button>
          ) : (
            <PlusCircle />
          )}
          <Link href={getViewLink ? getViewLink(rest) : viewLink}>
            <ParkSolid />
          </Link>
        </div>
      </div>
    </ImageCard>
  );
}

export default CourseCard;
