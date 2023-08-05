"use client";
import PageBanner from "@/components/PageBanner";
import { Button, Tabs } from "flowbite-react";
import PlusCircle from "@/assets/icons/plus-circle-16.svg";
import ParkSolid from "@/assets/icons/park-solid-16.svg";
import { ExploreIcon } from "@/components/Sidebar/sidebarIcons";
import { LessonBoxList } from "@/components/LessonBox";
import { lessonList } from "@/assets/data/cardlist.data";
import { AiOutlineFileSync } from "react-icons/ai";
import Breadcrumb from "@/components/BreadCrumb";

export default function Page({ params }: { params: { course: string } }) {
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
              label: decodeURIComponent(params.course),
              isActive: true,
            },
          ]}
        />
      </div>
      <PageBanner
        title="R & B Tutorial by Melanie"
        description="Get ready to take your soloing skills to a completely new level! In this Course, Larnell is going to teach you about the spectrum of R&B with patterns and go-to"
        contentClassName="max-w-[462px]"
      >
        <div className="flex items-center my-4 space-x-2">
          <Button className="w-full max-w-[201px] h-[48px] text-xs font-medium enabled:bg-primary-blue dark:enabled:bg-primary-blue">
            <span className="hidden sm:inline-block">Play Course</span>{" "}
            <ParkSolid className="sm:ml-4 w-4 h-4" />
          </Button>
          <Button className="w-full text-white dark:text-white text-xs font-medium border-white border max-w-[201px] h-[48px] enabled:bg-transparent dark:enabled:bg-transparent">
            <span className="hidden sm:inline-block">Add to My List</span>{" "}
            <PlusCircle className="sm:ml-4 w-4 h-4" />
          </Button>
        </div>
      </PageBanner>
      <Tabs.Group
        className="my-8"
        aria-label="Tabs with underline"
        style="underline"
      >
        <Tabs.Item active icon={ExploreIcon} title="Lesson">
          <LessonBoxList
            items={lessonList}
            getViewLink={(lesson) => `/courses/${params.course}/${lesson.id}`}
          />
        </Tabs.Item>
        <Tabs.Item active icon={AiOutlineFileSync} title="Resources">
          <h3 className="pri-text"> There are no resources for this course</h3>
        </Tabs.Item>
      </Tabs.Group>
    </section>
  );
}
