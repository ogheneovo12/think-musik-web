import type { CustomFlowbiteTheme } from "flowbite-react";
export const inputDarkStyles =
  "focus:border-primary-blue focus:ring-primary-blue dark:border-dark-blue-700 dark:focus:border-primary-blue dark:bg-transparent dark:text-input-txt dark:placeholder-input-text dark:focus:border-primary-blue dark:focus:ring-primary-blue";
export const baseSidbarItemStyle =
  "flex items-center justify-center  px-2 py-2 h-14 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-grey-main dark:hover:bg-gray-700";
export const theme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      collapsed: {
        on: "w-16",
        off: "w-[273px]",
      },
      inner:
        "h-full overflow-y-auto overflow-x-hidden  bg-white py-4 px-0 dark:bg-nav-dark",
    },
    item: {
      base: "",
      active:
        "bg-nav-gradient border-l-[5px] border-primary-blue dark:text-primary-blue",
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-primary-blue",
      },
    },
  },
  navbar: {
    root: {
      base: "bg-white  py-4 dark:border-gray-700 dark:bg-nav-dark ",
      inner: {
        base: "mx-auto flex items-center justify-between",
      },
    },
  },
  button: {
    inner: {
      base: "flex items-center transition-all duration-200",
    },
    pill: {
      off: "rounded-[40.3px]",
      on: "rounded-full",
    },
    color: {
      blue: "bg-primary-blue enabled:hover:bg-opacity-70 focus:ring-4 focus:ring-cyan-300 text-white",
      dark: "text-white bg-primary-blue border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-nav-dark dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
    },
  },
  modal: {
    root: {
      show: {
        on: "flex bg-gray-900 backdrop-blur-[15px] bg-[rgba(22,27,47,0.60)]",
        off: "hidden",
      },
      sizes: {
        "5xl": "max-w-[1099px]",
      },
    },
    content: {
      inner:
        "relative rounded-[40px] bg-white shadow dark:bg-dark-blue flex flex-col max-h-[90vh]",
    },
  },
  select: {
    field: {
      select: {
        base: "rounded-[100px] block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  },
  textInput: {
    field: {
      input: {
        base: "block w-full border focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
        colors: {
          gray: `bg-gray-50 text-gray-900 ${inputDarkStyles}`,
        },
      },
    },
  },
};