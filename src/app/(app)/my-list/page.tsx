"use client";
import { courseList } from "@/assets/data/cardlist.data";
import Breadcrumb from "@/components/BreadCrumb";
import ContentSection from "@/components/ContentSection";
import CourseCard, { ICourseCardProps } from "@/components/CourseCard";
import PageBanner from "@/components/PageBanner";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { v4 } from "uuid";
import Trash from "@/assets/icons/trash.svg";
import PromptAlert from "@/components/PromptAlert";
import Link from "next/link";

function MyListPage() {
  const [list, setList] = useState(courseList);
  const [showDeletModal, setShowDeleteModal] = useState(false);

  const handleDelete = (course: ICourseCardProps) => {
    setList((list) => list.filter((l) => l.id !== course.id));
  };
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
              label: "Song Sheets",
              isActive: true,
            },
          ]}
        />
      </div>
      <PageBanner
        className="bg-[url(/banner_5.png)]"
        contentClassName="max-w-[459px]"
        title="My List"
        description="Enhance your learning experience by selecting and adding courses to 'My List.' Tailor your education with a personalized touch by handpicking courses of your choice."
      />
      <ContentSection
        isEmpty={!list?.length}
        className="mt-[48px]"
        title="My List"
        actions={
          list?.length ? (
            <button
              onClick={() => setShowDeleteModal(true)}
              className="pri-text text-sm flex items-center"
            >
              Empty List <Trash className="ml-2" />
            </button>
          ) : null
        }
        emptyTitle="You haven't added any lessons yet"
        emptyDescription="Once you add a lesson to My List, it will show up here for you to access later."
        emptyContent={
          <Link
            href={"/courses"}
            className="text-xs bg-primary-blue text-white flex items-center justify-center rounded-[40px] font-normal h-[40px] w-full max-w-[172px] mt-[30px]"
          >
            Explore Courses
          </Link>
        }
      >
        <div className="grid-col3 mt-[74px] gap-6">
          {list?.map((item) => (
            <CourseCard {...item} key={v4()} inList onDelete={handleDelete} />
          ))}
        </div>
      </ContentSection>
      <PromptAlert
        isOpen={showDeletModal}
        onClose={() => setShowDeleteModal(false)}
        className="min-h-[347px]"
      >
        <p className="title text-primary-blue dark:text-primary-blue mt-[22px]">
          Empty My list
        </p>
        <p className="pri-text text-center text-lg font-semibold mt-5">
          Are you sure you want to empty “My List”?
        </p>
        <div className="flex justify-center space-x-4 items-center w-full mt-[51px]">
          <Button
            onClick={() => {
              setList([]);
              setShowDeleteModal(false);
            }}
            color="blue"
            className="h-[45px] w-full max-w-[209px]"
          >
            Empty List
          </Button>
          <Button
            onClick={() => setShowDeleteModal(false)}
            color="dark"
            className="h-[45px] w-full max-w-[209px] dark:enabled:bg-transparent bg-transparent border-primary-blue"
          >
            Cancel
          </Button>
        </div>
      </PromptAlert>
    </section>
  );
}

export default MyListPage;
