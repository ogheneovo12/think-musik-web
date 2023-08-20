"use client";
import { Sidebar, DarkThemeToggle } from "flowbite-react";
import logoImg from "@/assets/images/logo.png";
import logoBlueImg from "@/assets/images/logo-blue.png";
import { SidebarMenuGroup, sidebarMenuList } from "./sidebar.data";
import { v4 } from "uuid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectLayoutState, toggleCollapseNav } from "@/redux/features";
import Hamburger from "@/assets/icons/hamburger.svg";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";
import { baseSidbarItemStyle } from "../Flowbite/theme";
import { VscColorMode } from "react-icons/vsc";
import { useTheme } from "flowbite-react";
import { useEffect } from "react";
import Times from "@/assets/icons/times.svg";
import NoSSR from "../Navbar/NoSSR";

export default function AppSidebar() {
  const { collapseNav } = useSelector(selectLayoutState);
  const dispatch = useAppDispatch();
  const { toggleMode, mode } = useTheme();

  const isTabOrBigerr = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (!isTabOrBigerr && !collapseNav) {
      console.log("hey");
      dispatch(toggleCollapseNav());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Sidebar
      collapseBehavior={isTabOrBigerr ? "collapse" : "hide"}
      collapsed={collapseNav}
      aria-label="Sidebar with content separator example"
      className="fixed rounded-none z-10"
    >
      <div
        className={cx(
          "flex space-x-4 mb-8 items-center",
          collapseNav ? "px-[9px]" : "px-[30px]"
        )}
      >
        <button
          className="dark:text-grey-main"
          onClick={() => dispatch(toggleCollapseNav())}
        >
          <NoSSR>
            {isTabOrBigerr ? <Hamburger /> : <Times className="h-6 w-6" />}
          </NoSSR>
        </button>
        {!collapseNav && (
          <Image
            src={mode === "dark" ? logoImg : logoBlueImg}
            alt="thinkmusik image"
          />
        )}
      </div>
      <Sidebar.Items>
        {sidebarMenuList?.map((group) => (
          <SidebarItemGroup key={v4()} {...group} isCollapsed={collapseNav} />
        ))}
        <Sidebar.ItemGroup>
          <Sidebar.Item
            onClick={toggleMode}
            icon={VscColorMode}
            theme={{
              base: cx(
                baseSidbarItemStyle,
                collapseNav ? "px-[12px]" : "px-[30px]"
              ),
            }}
          >
            <div className={"flex items-center"}>
              Dark Mode{" "}
              <DarkThemeToggle
                onClick={() => {
                  if (toggleMode) {
                    toggleMode();
                  }

                  let newMode = mode == "dark" ? "light" : "dark";
                  localStorage.setItem("theme", newMode);
                }}
              />
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

function SidebarItemGroup({
  items,
  groupName,
  isCollapsed,
}: SidebarMenuGroup & { isCollapsed?: boolean }) {
  const pathname = usePathname();
  return (
    <Sidebar.ItemGroup>
      {items?.map((item) => (
        <Sidebar.Item
          as={Link}
          key={`${groupName}_${v4()}`}
          href={item.path}
          icon={item.icon}
          active={pathname === item.path}
          theme={{
            base: cx(
              baseSidbarItemStyle,
              isCollapsed ? "px-[12px]" : "px-[30px]"
            ),
          }}
        >
          <p>{item.title}</p>
        </Sidebar.Item>
      ))}
    </Sidebar.ItemGroup>
  );
}
