"use client";
import MoneyBagEmoji from "@/assets/icons/emoji-money-bag.svg";
import RocketEmoji from "@/assets/icons/emoji-rocket.svg";
import smileEmoji from "@/assets/images/emoji-smile.png";
import ActivityBox from "@/components/ActivityBox";
import ContentSection from "@/components/ContentSection";
import CourseCard, { ImageCard } from "@/components/CourseCard";
import {
  LearningIcon,
  MusicIcon,
  MyListIcon,
} from "@/components/Sidebar/sidebarIcons";
import { Button, Carousel } from "flowbite-react";
import Image from "next/image";

import { courseList, songSheets } from "@/assets/data/cardlist.data";
import { v4 } from "uuid";
import ReferalModal from "@/components/ReferalModal";
import { useAppDispatch } from "@/redux/hooks";
import { toggleReferralModal, toggleShowFeatureRequest } from "@/redux/features";
import FeatureRequestModal from "@/components/FeatureRequestModal";

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <section className="container py-[37px] min-h-screen">
      <div className="flex items-center space-x-2 mb-1">
        <Image src={smileEmoji} alt="emoji smile" />
        <h3 className="title">Welcome, Samuel!</h3>
      </div>
      <p className="pri-text">
        Take your first steps towards building successful learning habits.
      </p>
      <div className=" my-8 grid-col3 gap-10">
        <ActivityBox
          icon={<LearningIcon />}
          title="Learning Path"
          actionText="start"
          href="/learning"
        />
        <ActivityBox
          icon={<MyListIcon />}
          title="Explore Courses"
          actionText="View all courses"
          href="/courses"
        />
        <ActivityBox
          icon={<MusicIcon />}
          title="Songs Sheet"
          actionText="View all songs"
          href="/song-sheet"
        />
      </div>
      <div className="flex items-center justify-center space-y-5 sm:space-y-0 sm:space-x-5 flex-col sm:flex-row">
        <Button
          onClick={() => dispatch(toggleReferralModal())}
          color="dark"
          className="w-full max-w-[257px]"
        >
          <MoneyBagEmoji className="mr-2" /> Invite a friend
        </Button>
        <Button
          onClick={() => dispatch(toggleShowFeatureRequest())}
          color="dark"
          className="w-full max-w-[257px]"
        >
          <RocketEmoji className="mr-2" />
          Request a feature
        </Button>
      </div>
      <div className="h-[240px] relative my-[60px]">
        <Carousel
          rightControl={<span />}
          leftControl={<span />}
          className="min-h-[240px]"
        >
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </div>
      <ContentSection
        isEmpty
        title="Continue learning"
        emptyDescription="You don't have any active courses"
        emptyTitle="Browse courses to start learning."
      ></ContentSection>
      <ContentSection title="New Courses" className="my-[60px]">
        <div className="grid-col3 gap-6 my-4">
          {courseList?.map((course) => (
            <CourseCard key={v4()} {...course} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="New Song Sheet" className="my-[60px]">
        <div className="grid-col3 my-4">
          {songSheets?.map((course) => (
            <ImageCard key={v4()} {...course} />
          ))}
        </div>
      </ContentSection>
      <ContentSection
        isEmpty
        title="My List"
        emptyDescription="once you add a lesson to My List, it will show up here for you to access later."
        emptyTitle="You haven't added any lessons yet"
      ></ContentSection>
      <ReferalModal />
      <FeatureRequestModal />
    </section>
  );
}

function CarouselItem() {
  return (
    <div className="bg-[url(/carousel1.png)] p-8 bg-cover bg-no-repeat h-[240px] flex items-center">
      <div className="max-w-[400px]">
        <h3 className="title text-xl text-white mb-5">
          Buy Quality Cheap Musical Instrument and get it delivered in 1-2days
        </h3>
        <Button className="dark:enabled:bg-white dark:enabled:text-dark-blue">
          Coming Soon
        </Button>
      </div>
    </div>
  );
}
