"use client";
import { Button } from "flowbite-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { v4 } from "uuid";
import { ListGroup } from "./ListGroup";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import AnimateProgressProvider from "./AnimateProgressProvider";
import { easeQuadInOut } from "d3-ease";
import PlusCircle from "@/assets/icons/plus-circle-16.svg";
import ParkSolid from "@/assets/icons/park-solid-16.svg";
import Link from "next/link";
import { BsFillPlusCircleFill, BsPlayCircleFill } from "react-icons/bs"

export interface ILesssonBoxProps {
  title: string;
  img: StaticImageData | string;
  progress: number;
  courseTitle: string;
  id?: string;
  viewLink?: string;
  getViewLink?: (lesson: Omit<ILesssonBoxProps, "getViewLink">) => string;
}

function LessonBox({ getViewLink, ...rest }: ILesssonBoxProps) {
  const { img, title, progress, viewLink } = rest;
  return (
    <div className="flex lg:items-center lg:justify-between my-4 w-full flex-col lg:flex-row">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-[24px] w-full ">
        <Image
          className="w-full object-cover sm:w-auto"
          src={img}
          alt={title}
        />
        <h2 className="title text-lg my-4 sm:my-0">{title}</h2>
      </div>
      <div className="flex items-center w-full max-w-[430px] space-x-4">
        <Button size="xs" className="w-full text-primary-blue dark:text-white text-xs font-medium border-primary-blue border max-w-[172px] h-[40px] enabled:hover:bg-primary-blue enabled:hover:text-white enabled:bg-transparent dark:enabled:bg-transparent focus:ring-0">
          <span className="hidden sm:inline-block">Add to My List</span>{" "}
          <BsFillPlusCircleFill className="sm:ml-4 w-5 h-5" />
        </Button>
        <Button
          color="blue"
          size="xs"
          as={Link}
          href={getViewLink ? getViewLink(rest) : viewLink}
          className="w-full max-w-[172px] h-[40px] text-xs font-medium"
        >
          <span className="hidden sm:inline-block">Watch</span>{" "}
          <BsPlayCircleFill className="sm:ml-4 w-5 h-5" />
        </Button>
        <div className="flex-shrink-0" style={{ width: 54, height: 54 }}>
          <AnimateProgressProvider
            valueStart={0}
            valueEnd={progress}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={value}
                  text={``}
                  styles={buildStyles({
                    pathColor: "#3375D9",
                    textColor: "#D1D2D6",
                    pathTransition: "none",
                  })}
                >
                  <span className="dark:text-[#D1D2D6] text-nav-dark text-xs">
                    {roundedValue}%
                  </span>
                </CircularProgressbarWithChildren>
              );
            }}
          </AnimateProgressProvider>
        </div>
      </div>
    </div>
  );
}

export function LessonBoxList({
  items,
  getViewLink,
}: {
  items: ILesssonBoxProps[];
  getViewLink?: (lesson: Omit<ILesssonBoxProps, "getViewLink">) => string;
}) {
  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item className="bg-none w-full " key={v4()}>
          <LessonBox {...item} getViewLink={item?.getViewLink || getViewLink} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

LessonBox.propTypes = {};

export default LessonBox;
