"use client";
import AOS from "aos";
import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { useEffect } from "react";
import SearchIcon from "@/assets/icons/search.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import Eguitar from "@/assets/icons/eguitar.svg";
import { FaChevronDown } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { toggleCollapseNav } from "@/redux/features";
import { inputDarkStyles } from "../Flowbite/theme";

export default function AppNavbar() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const dispatch = useAppDispatch();

  return (
    <div className="dark:bg-nav-dark bg-white">
      <Navbar fluid className="container">
        <div className="flex items-center">
          <Navbar.Toggle
            onClick={() => dispatch(toggleCollapseNav())}
            className="mr-2"
          />
          <Dropdown
            label=""
            renderTrigger={() => (
              <div className="flex items-center dark:text-white space-x-3 md:space-x-5">
                <Eguitar /> <span>Bass</span> <FaChevronDown />
              </div>
            )}
          ></Dropdown>
        </div>

        <div className="flex md:order-2 space-x-4 md:space-x-[32px] items-center">
          <TextInput
            className=" hidden md:block"
            placeholder="Search"
            icon={SearchIcon}
            theme={{
              base: "rounded-[5px]",
              field: {
                base: "relative w-full rounded-[5px]",
                input: {
                  colors: {
                    gray: `  focus:border dark:focus:border ${inputDarkStyles}  border border-transparent dark:border-transparent bg-black bg-opacity-5  dark:bg-opacity-100 dark:bg-dark-blue `,
                  },
                },
              },
            }}
          />
          <div className="md:hidden text-white">
            <SearchIcon />
          </div>
          <div className=" dark:text-white">
            <NotificationIcon />
          </div>

          <Dropdown
            className="flex-shrink-0"
            theme={{
              arrowIcon: "dark:text-white ml-2 hidden md:block",
            }}
            inline
            label={
              <Avatar
                theme={{
                  root: {
                    initials: {
                      text: "font-semibold text-gray-600 dark:text-black",
                      base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-[#50B1D1]",
                    },
                  },
                }}
                placeholderInitials="SA"
                alt="User settings"
                // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="flex-shrink-0"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>My Account</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
}
