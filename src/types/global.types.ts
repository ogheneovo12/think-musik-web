import { StaticImageData } from "next/image";

export enum CourseLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCE = "advance",
}

export interface INotification {
  type: "success" | "error" | "info";
  message: string;
  description?: string;
}

export interface IUser {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  username?: string;
}

export interface InstructorBio {
  first_name?: string;
  last_name?: string;
  breif?: string;
  img: string | StaticImageData;
  detailed_breif?: string;
  likes?: number;
  course_count?: number;
  bio?: string;
  id?: string;
}
