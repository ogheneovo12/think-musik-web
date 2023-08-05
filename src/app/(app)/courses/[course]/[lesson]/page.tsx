"use client";
import { lessonList } from "@/assets/data/cardlist.data";
import Breadcrumb from "@/components/BreadCrumb";
import UserInfoBox from "@/components/UserInfoBox";
import { Button } from "flowbite-react";
import { useMemo } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BiChevronLeft,
  BiChevronRight,
  BiDislike,
  BiLike,
} from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";

function ActionButtons() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center  w-full max-w-[450px] sm:space-x-[18px] my-2">
      <Button
        theme={{
          inner: {
            base: "flex items-stretch transition-all duration-200 h-full",
          },
        }}
        className="w-full text-sm  h-10 font-normal max-w-[135px] dark:text-white dark:enabled:bg-dark-blue-700 my-2 mr-2 sm:mr-0 bg-black bg-opacity-5 text-black"
      >
        <span className="flex h-full items-center">
          <span className="flex items-center">
            <BiLike className="mr-2" /> 50
          </span>
          <span className="h-full bg-[#71717A] mx-2 w-[1px]"></span>
          <BiDislike />
        </span>
      </Button>
      <Button className="w-full dark:text-white text-sm font-normal max-w-[135px] dark:enabled:bg-dark-blue-700 my-2 mr-2 sm:mr-0 bg-black bg-opacity-5 text-black">
        <IoMdShareAlt className="mr-3" /> Share
      </Button>
      <Button className="w-full text-sm font-normal dark:text-white max-w-[135px] dark:enabled:bg-dark-blue-700 my-2 bg-black bg-opacity-5 text-black">
        <AiOutlinePlus className="mr-3" /> Add to list
      </Button>
    </div>
  );
}

function LessonPage({ params }: { params: { lesson: string } }) {
  const lessonId = decodeURIComponent(params.lesson);

  const lesson = useMemo(
    () => lessonList.find((l) => l.id === lessonId),
    [lessonId]
  );

  return (
    <section className="section">
      <div className="flex justify-center mb-[30px]">
        <Breadcrumb
          items={[
            {
              url: "/",
              label: "Home",
            },
            {
              label: "Explore Courses",
              url: "/courses",
            },
            {
              label: lesson?.courseTitle,
              url: `/coures/${lesson?.courseTitle}`,
            },
            {
              label: lesson?.title,
              isActive: true,
            },
          ]}
        />
      </div>
      <div className="w-full min-h-[519px] bg-nav-dark mb-8"></div>
      <h3 className=" text-[28px] font-semibold text-gray-600 dark:text-grey-main">
        {lesson?.title}
      </h3>
      <div className="my-6 flex flex-wrap items-center justify-between">
        <UserInfoBox
          first_name="Melanie"
          last_name="Davids"
          breif="Lead Guitarist"
          img="/pfp.png"
        />
        <ActionButtons />
      </div>
      <div className="bg-black bg-opacity-5 dark:bg-dark-blue-700 my-[30px] min-h-[148px] rounded-[15px] py-[27px] px-[20px] sm:px-[51px] dark:text-grey-main">
        <h2 className="text-base font-bold">ABOUT THE LESSON</h2>
        <p className="mt-2">
          In this lesson, Yvette discusses the most important part of being
          creative, getting into a creative space. She&apos;ll show you how to
          set yourself up to be in a creative mindset.
        </p>
      </div>
      <div className="flex justify-between">
        <Button className="bg-primary-blue hover:bg-primary-blue text-white dark:enabled:bg-transparent dark:border-dark-blue-700 text-sm font-medium">
          <BiChevronLeft />
          Previous Lesson
        </Button>
        <Button className=" bg-primary-blue hover:bg-primary-blue text-white dark:enabled:bg-transparent dark:border-primary-blue text-sm font-medium">
          Next Lesson
          <BiChevronRight />
        </Button>
      </div>
    </section>
  );
}

export default LessonPage;
