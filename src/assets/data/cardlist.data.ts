import courseImage from "@/assets/images/course-sample.png";
import lessonBoxImage from "@/assets/images/lessonList.png";
import songSheetImage from "@/assets/images/song-sheeet-pl.png";
import tipImage from "@/assets/images/tip_pl.png";
import { ICourseCardProps, ImageCardProps } from "@/components/CourseCard";

import { ILesssonBoxProps } from "@/components/LessonBox";
import { CourseLevel, InstructorBio } from "@/types";

export const tipList: ICourseCardProps[] = [
  {
    img: tipImage,
    title: "5 Guitar Hacks To Improve Your Playing",
    duration: "5 mins",
    level: CourseLevel.BEGINNER,
    id: "tip1",
  },
  {
    img: tipImage,
    title: "Build Your Finger Muscles",
    duration: "10 mins",
    level: CourseLevel.INTERMEDIATE,
    id: "tip2",
  },
  {
    img: tipImage,
    title: "Make Your Chords Sound Good",
    duration: "7 mins",
    level: CourseLevel.ADVANCE,
    id: "tip3",
  },
];
export const courseList: ICourseCardProps[] = [
  {
    img: courseImage,
    title: "R & B Tutorial by Melanie",
    lessonCount: 20,
    level: CourseLevel.BEGINNER,
  },
  {
    img: courseImage,
    title: "How to Play Triads by Daniey ",
    lessonCount: 20,
    level: CourseLevel.INTERMEDIATE,
  },
  {
    img: courseImage,
    title: "Jimi Hendrix Licks by Melanie ",
    lessonCount: 10,
    level: CourseLevel.ADVANCE,
  },
];
export const songSheets: ImageCardProps[] = [
  {
    img: songSheetImage,
    title: "R & B Tutorial by Melanie ",
  },
  {
    img: songSheetImage,
    title: "How to Play Triads by Daniey ",
  },
  {
    img: songSheetImage,
    title: "Jimi Hendrix Licks by Melanie ",
  },
];
export const instructorList: InstructorBio[] = [
  {
    first_name: "Melanie",
    last_name: "Davids",
    breif: "Guitar Player",
    detailed_breif: "Lead guitarist, Solo grooves and Creativity",
    bio: "Melanie Johns is a long-time instructor who specializes in advanced rhythms and progressive music. He is the drummer for Third Ion, a Canadian Prog Metal Super Group with members from Devin Townsend Project, Mother ",
    img: "/instructor2.png",
    id: "david",
    likes: 500,
    course_count: 23,
  },
  {
    first_name: "Michael",
    last_name: "Pierce",
    breif: "Guitar Player",
    detailed_breif: "Lead guitarist, Solo grooves and Creativity",
    img: "/instructor1.png",
    id: "michael",
    bio: "Michael Pierce is a long-time instructor who specializes in advanced rhythms and progressive music. He is the drummer for Third Ion, a Canadian Prog Metal Super Group with members from Devin Townsend Project, Mother ",
    likes: 500,
    course_count: 23,
  },
];
export const lessonList: ILesssonBoxProps[] = [
  {
    title: "Introduction to R&B",
    img: lessonBoxImage,
    progress: 70,
    id: "less1",
    courseTitle: "R & B Tutorial by Melanie",
  },
  {
    title: "Introduction to R&B",
    img: lessonBoxImage,
    progress: 0,
    id: "less2",
    courseTitle: "R & B Tutorial by Melanie",
  },
  {
    title: "Introduction to R&B",
    img: lessonBoxImage,
    progress: 100,
    id: "less3",
    courseTitle: "R & B Tutorial by Melanie",
  },
  {
    title: "Introduction to R&B",
    img: lessonBoxImage,
    progress: 50,
    id: "less4",
    courseTitle: "R & B Tutorial by Melanie",
  },
];
