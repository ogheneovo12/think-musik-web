"use client";

import Breadcrumb from "@/components/BreadCrumb";
import ContentSection from "@/components/ContentSection";
import PageBanner from "@/components/PageBanner";
import { Button, Dropdown, TextInput } from "flowbite-react";
import SearchIcon from "@/assets/icons/search.svg";
import { useState } from "react";
import { inputDarkStyles } from "@/components/Flowbite/theme";
import { courseList } from "@/assets/data/cardlist.data";
import { ImageCard } from "@/components/CourseCard";
import { v4 } from "uuid";
import PdfIcon from "@/assets/icons/pdf.svg";

export default function Home() {
  const [filterOption, setFilterOption] = useState("Most Popular");

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
        className="bg-[url(/banner_4.png)]"
        contentClassName="max-w-[459px]"
        title="Song Sheets"
        description="Discover our extensive song library, complete with chord progressions for each song. This feature enables you to play the songs effortlessly on your instrument of choice."
      />
      <ContentSection title="All Songs" className="mt-[51px]">
        <div className="mt-[33px] flex items-center justify-between flex-wrap">
          <TextInput
            color={"gray"}
            className="w-full max-w-[649px]"
            theme={{
              field: {
                input: {
                  withAddon: {
                    off: "rounded-[40px]",
                  },
                  colors: {
                    gray: `bg-black bg-opacity-5 ${inputDarkStyles}`,
                  },
                },
              },
            }}
            rightIcon={SearchIcon}
          />
          <div className="flex items-center my-2">
            <p className="pri-text mr-2">Filter By:</p>
            <Dropdown
              label=""
              renderTrigger={() => (
                <p className="text-primary-blue font-semibold  cursor-pointer">
                  {filterOption}
                </p>
              )}
            >
              <Dropdown.Item onClick={() => setFilterOption("Most Popular")}>
                Most Popular
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterOption("Beginner")}>
                Beginner
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterOption("Advanced")}>
                Advanced
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className="grid-col3 mt-[42px]">
          {courseList?.map((course) => (
            <ImageCard {...course} key={v4()}>
              <p className="dark:text-grey-main text-gray-600 text-sm">Dunsin Oyekan</p>
              <Button className="space-x-2 w-full mt-[10px]" color="blue">
                Download Song Sheet <PdfIcon />
              </Button>
            </ImageCard>
          ))}
        </div>
      </ContentSection>
    </section>
  );
}
