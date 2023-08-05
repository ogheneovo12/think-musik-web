"use client";
import Breadcrumb from "@/components/BreadCrumb";
import { Button, Progress } from "flowbite-react";
import GradientStar from "@/assets/icons/gradient_star.svg";
import AnimateProgressProvider from "@/components/AnimateProgressProvider";
import { easeQuadInOut } from "d3-ease";
import ContentSection from "@/components/ContentSection";
import padlock from "@/assets/images/padlock.png";
import Image from "next/image";
import { courseList } from "@/assets/data/cardlist.data";
import CourseCard from "@/components/CourseCard";
import { v4 } from "uuid";
import PromptAlert from "@/components/PromptAlert";
import { useState } from "react";
import cx from "classnames";

const modalContent: Record<
  string,
  {
    title: string;
    description: string;
    className: string;
  }
> = {
  intermediate: {
    title: "Looks like you're excited to delve into the Intermediate level.",
    description:
      "Before diving into the Intermediate stage, we recommend completing the Beginners stage first.",
    className: "max-w-[374px]",
  },
  advance: {
    title: "Looks like you're excited to delve into the Advance level.",
    description:
      "Before diving into the Advance stage, we recommend completing the Beginners and Intermediate stage first.",
    className: "max-w-[384px]",
  },
};

export default function LearningPage() {
  const [blockModal, setBlockModal] = useState("");
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
              label: "Learning Path",
              isActive: true,
            },
          ]}
        />
      </div>
      <div className="flex items-center max-w-[861px] space-x-[29px] dark:text-white">
        <div className="flex items-center">
          <GradientStar className="mr-2" />
          Beginner
        </div>

        <div className="w-full">
          <AnimateProgressProvider
            valueStart={0}
            valueEnd={50}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => (
              <Progress
                color="indigo"
                size={"xl"}
                theme={{
                  color: {
                    indigo: "bg-lgbtq-gradient",
                  },
                }}
                progress={value}
              />
            )}
          </AnimateProgressProvider>
        </div>

        <p className="dark:text-grey-main">Advance</p>
      </div>
      <ContentSection className="my-10" title="Categories">
        <div className="flex flex-wrap items-center mt-6">
          <Button
            className="w-full  max-w-[200px] dark:border-primary-blue text-white dark:text-primary-blue my-2 mr-6"
            color="dark"
          >
            Beginner
          </Button>
          <Button
            onClick={() => setBlockModal("intermediate")}
            color="dark"
            className="w-full max-w-[200px] text-white dark:text-light-text dark:border-dark-blue-700 my-2 mr-6"
          >
            Intermediate <Image className="ml-2" src={padlock} alt="" />
          </Button>
          <Button
            onClick={() => setBlockModal("advance")}
            color="dark"
            className="w-full max-w-[200px] text-white dark:text-light-text dark:border-dark-blue-700 my-2 mr-6"
          >
            Advanced <Image className="ml-2" src={padlock} alt="" />
          </Button>
        </div>
        <div className="grid-col3 my-4 gap-6">
          {courseList?.map((course) => (
            <CourseCard
              key={v4()}
              {...course}
              viewLink={`/learning/${course.title}`}
            />
          ))}
        </div>
      </ContentSection>
      <PromptAlert
        isOpen={!!modalContent[blockModal]}
        onClose={() => setBlockModal("")}
      >
        <p className="text-primary-blue text-2xl font-semibold my-6">Oops!!</p>
        <h4
          className={cx(
            "title text-lg font-semibold text-center w-full max-w-[374px]",
            modalContent[blockModal]?.className
          )}
        >
          {modalContent[blockModal]?.title}
        </h4>
        <p
          className={cx(
            "pri-text w-full text-center mt-5",
            modalContent[blockModal]?.className
          )}
        >
          {modalContent[blockModal]?.description}
        </p>
      </PromptAlert>
    </section>
  );
}
