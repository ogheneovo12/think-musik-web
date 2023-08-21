import {
  CartIcon,
  ExploreIcon,
  InstructorIcon,
  LearningIcon,
  MusicIcon,
  MyListIcon,
  OverviewIcon,
  QuickTipsIcon,
} from "./sidebarIcons";

export type SideBarItem = {
  title: string;
  path: string;
  icon: any;
  soon?: boolean;
};

export type SidebarMenuGroup = {
  groupName: string;
  items: SideBarItem[];
};

export const sidebarMenuList: SidebarMenuGroup[] = [
  {
    groupName: "top",
    items: [
      {
        title: "Overview",
        path: "/",
        icon: OverviewIcon,
      },
      {
        title: "Learning Path",
        path: "/learning",
        icon: LearningIcon,
      },
      {
        title: "Explore Courses",
        path: "/courses",
        icon: ExploreIcon,
      },
      {
        title: "Quick Tips",
        path: "/tips",
        icon: QuickTipsIcon,
      },
      {
        title: "Instructors",
        path: "/instructors",
        icon: InstructorIcon,
      },
    ],
  },
  {
    groupName: "bottom",
    items: [
      {
        title: "Songs Sheet",
        path: "/song-sheet",
        icon: MusicIcon,
      },
      {
        title: "My List",
        path: "/my-list",
        icon: MyListIcon,
      },
      {
        title: "Shop",
        path: "/shop",
        icon: CartIcon,
        soon: true,
      },
    ],
  },
];
