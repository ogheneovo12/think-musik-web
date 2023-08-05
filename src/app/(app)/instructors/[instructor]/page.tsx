"use client";
import { courseList, instructorList } from "@/assets/data/cardlist.data";
import ContentSection from "@/components/ContentSection";
import CourseCard from "@/components/CourseCard";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

function InstructorPage({ params }: { params: { instructor: string } }) {
  const instructorId = decodeURIComponent(params.instructor);
  const instructor = instructorList.find((ins) => ins.id === instructorId);
  return (
    <section className="section">
      <div className="dark:bg-nav-dark dark:bg-opacity-100 bg-black bg-opacity-5 rounded-[10px] min-h-[360px] px-5 py-5 md:px-8 md:py-9  flex flex-col md:flex-row md:space-x-[32px]">
        <div className="w-full max-w-[252px]">
          <div className="bg-lgbtq-gradient rounded-[30px] w-full h-[225px] p-2">
            {instructor && (
              <Image
                src={instructor?.img}
                alt={instructor?.first_name || ""}
                width={242}
                height={225}
                className="h-full w-full object-cover object-top rounded-[30px]"
              />
            )}
          </div>
          <div className="flex items-center mt-5 space-x-2">
            <Button className="w-full max-w-[129px] h-[38px] text-sm font-medium text-gray-600 dark:text-white dark:enabled:bg-dark-blue-700 dark:bg-opacity-100 dark:enabled:hover:bg-dark-blue-700 enabled:hover:bg-opacity-5 enabled:hover:bg-black bg-black bg-opacity-5 ">
              {instructor?.course_count} Courses
            </Button>
            <Button
              color="dark"
              className="w-full max-w-[129px] h-[38px] text-sm font-medium dark:text-white text-gray-600 dark:enabled:bg-dark-blue-700 dark:bg-opacity-100 dark:enabled:hover:bg-dark-blue-700 enabled:hover:bg-opacity-5 enabled:hover:bg-black bg-black bg-opacity-5 "
            >
              {instructor?.likes} Likes
            </Button>
          </div>
        </div>

        <div>
          <h2 className="dark:text-white mt-2 md:mt-0 text-grey-600 text-3xl md:text-[40px] font-extrabold">
            {instructor?.first_name} {instructor?.last_name}
          </h2>
          <p className="text-lg font-meduim text-golden my-4 ">
            {instructor?.detailed_breif}
          </p>
          <p className="dark:text-white text-gray-600 text-sm font-medium max-w-[536px] ">
            {instructor?.bio}
          </p>
        </div>
      </div>
      <ContentSection className="mt-[35px]" title="Courses">
        <div className="grid-col3 my-4">
          {courseList?.map((course) => (
            <CourseCard
              key={v4()}
              {...course}
              viewLink={`/courses/${course?.title}`}
            />
          ))}
        </div>
      </ContentSection>
    </section>
  );
}

export default InstructorPage;
