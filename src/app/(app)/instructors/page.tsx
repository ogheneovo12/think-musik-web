"use client";

import { instructorList } from "@/assets/data/cardlist.data";
import Breadcrumb from "@/components/BreadCrumb";
import ContentSection from "@/components/ContentSection";
import InstructorCard from "@/components/InstructorCard";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { v4 } from "uuid";
import QuestionMarkIcon from "@/assets/icons/question-mark.svg";

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
              label: "Instructors",
              isActive: true,
            },
          ]}
        />
      </div>
      <PageBanner
        className="mb-[26px] bg-[url(/banner_3.png)]"
        title="Instructors"
        description="Our experienced instructors are passionate music players and educators with years of expertise. They'll guide you on your musical journey."
      />
      <ContentSection title="All Instructors">
        <div className="grid-col3  my-6 gap-[24px]">
          {instructorList?.map((instructor) => (
            <InstructorCard {...instructor} key={v4()} className="max-w-none" />
          ))}
          <div className="h-[490px] w-full  p-4 z-0 relative rounded-lg bg-nav-dark flex flex-col justify-center items-center text-center">
            <QuestionMarkIcon />
            <p className="title text-white mt-4 mb-7"> Want to be the next guitar Instructor</p>
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center p-4 rounded-[40px] max-w-[172px] h-[40px] bg-primary-blue hover:bg-opacity-70 text-white text-sm font-medium"
            >
              Apply Here
            </Link>
          </div>
        </div>
      </ContentSection>
    </section>
  );
}
