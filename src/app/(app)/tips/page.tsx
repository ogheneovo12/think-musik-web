"use client";

import { courseList, tipList } from "@/assets/data/cardlist.data";
import Breadcrumb from "@/components/BreadCrumb";
import ContentSection from "@/components/ContentSection";
import CourseCard from "@/components/CourseCard";
import PageBanner from "@/components/PageBanner";
import RadixSelect, {
  SelectItem,
  SelectSeperator,
  selectClass,
} from "@/components/RadixSelect";
import { useState } from "react";
import { v4 } from "uuid";

export default function TipPage() {
  const [selected, setSelected] = useState<string[]>([]);
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
              label: "Quick Tips",
              isActive: true,
            },
          ]}
        />
      </div>
      <PageBanner
        contentClassName="max-w-[379px]"
        className="mb-[26px] bg-[url(/banner_2.png)]"
        title="Quick Tips"
        description="Only have 10 minutes? These short lessons are designed to inspire you with quick tips and exercises"
      />
      <ContentSection title="All Quick Tips">
        <div className="flex items-center  my-8 flex-wrap">
          <RadixSelect
            placeholder="Skill Level"
            className={`${selectClass} w-full max-w-[221px] my-2 mr-6`}
          >
            <SelectItem className="text-black" value={"beginner"}>
              Beginner
            </SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem className="text-black" value={"intermediate"}>
              Intermediate
            </SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem className="text-black" value="advance">
              Advance
            </SelectItem>
          </RadixSelect>
          <RadixSelect
            placeholder="Topic"
            className={`${selectClass} w-full max-w-[221px] my-2 mr-6`}
          >
            <SelectItem value="beats">Beats</SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem value="solos">Solos</SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem value="styles">Styles</SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem value="techniques">Techniques</SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem value="theory">Theory</SelectItem>
          </RadixSelect>
          <RadixSelect
            placeholder="Instructors"
            className={`${selectClass} w-full max-w-[221px] my-2 mr-6`}
          >
            <SelectItem className="text-black" value={"Anika Niles"}>
              Anika Niles
            </SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem className="text-black" value={"Harry Miles"}>
              Harry Miles
            </SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem className="text-black" value={" Olumide Adenike"}>
              Olumide Adenike
            </SelectItem>
          </RadixSelect>
          <RadixSelect
            placeholder="Sort"
            className={`${selectClass} w-full max-w-[221px] my-2 mr-6`}
          >
            <SelectItem className="text-black" value={"Most Popular"}>
              Most Popular
            </SelectItem>
            <SelectSeperator className=" bg-gray-300 dark:bg-gray-600 h-[1px]" />
            <SelectItem className="text-black" value={"Newest First"}>
              Newest First
            </SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem className="text-black" value={"Oldest First"}>
              Oldest First
            </SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem className="text-black" value={"Name: A-Z"}>
              Name: A-Z
            </SelectItem>
            <SelectSeperator className="dark:bg-gray-600 h-[1px] bg-gray-300" />
            <SelectItem className="text-black" value={"Name: Z-A"}>
              Name: Z-A
            </SelectItem>
          </RadixSelect>
        </div>
        <div className="grid-col3 my-4 gap-6">
          {tipList?.map((course) => (
            <CourseCard
              key={v4()}
              {...course}
              onDelete={() => {
                setSelected((prev) => prev?.filter((it) => it !== course?.id));
              }}
              onAddToList={() => {
                if (course?.id) {
                  console.log("ey");
                  setSelected((prev) => [...prev, course?.id as string]);
                }
              }}
              inList={selected?.includes(course?.id || "")}
              showDuration
              viewLink={`/tips/${course.id}`}
            />
          ))}
        </div>
      </ContentSection>
    </section>
  );
}
