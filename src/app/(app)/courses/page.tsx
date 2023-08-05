"use client";

import { courseList } from "@/assets/data/cardlist.data";
import Breadcrumb from "@/components/BreadCrumb";
import ContentSection from "@/components/ContentSection";
import CourseCard from "@/components/CourseCard";
import PageBanner from "@/components/PageBanner";
import SelectInput from "@/components/SelectInput";
import { v4 } from "uuid";

export default function Home() {
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
              isActive: true,
            },
          ]}
        />
      </div>
      <PageBanner
        className="mb-[26px]"
        title="Explore Courses"
        description="Great courses available, each with its own focus. Find one that fits your goals and get started today!"
      />
      <ContentSection title="All Courses">
        <div className="flex items-center  my-8 flex-wrap">
          <SelectInput
            defaultValue={""}
            containerClassName="w-full max-w-[221px]  mr-6 my-2"
          >
            <option className="text-black" disabled value={""}>
              Skill Level
            </option>
            <option className="text-black" value={"beginner"}>
              Beginner
            </option>
            <option className="text-black" value={"intermediate"}>
              Intermediate
            </option>
            <option className="text-black" value="advance">
              Advance
            </option>
          </SelectInput>
          <SelectInput
            defaultValue={""}
            containerClassName="w-full max-w-[221px] my-2 mr-6"
          >
            <option className="text-black" disabled value={""}>
              Topic
            </option>
          </SelectInput>
          <SelectInput
            defaultValue={""}
            containerClassName="w-full max-w-[221px] mr-6 my-2"
          >
            <option className="text-black" disabled value={""}>
              Instructors
            </option>
          </SelectInput>{" "}
          <SelectInput
            defaultValue={""}
            containerClassName="w-full max-w-[221px] mr-6 my-2"
          >
            <option className="text-black" disabled value={""}>
              Most Popular
            </option>
          </SelectInput>
        </div>
        <div className="grid-col3 my-4 gap-6">
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
