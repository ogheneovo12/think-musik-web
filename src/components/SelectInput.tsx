import { SelectProps, Select, CustomFlowbiteTheme } from "flowbite-react";
import cx from "classnames";

const customSelectTheme: CustomFlowbiteTheme["select"] = {
  field: {
    base: "relative w-full",
    select: {
      base: "rounded-[100px] h-[50px]  overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      colors: {
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
      },
    },
  },
};

function SelectInput({
  containerClassName,
  ...props
}: SelectProps & { containerClassName?: string }) {
  return (
    <div className={cx("overide-round", containerClassName)}>
      <Select theme={customSelectTheme} {...props} />
    </div>
  );
}

SelectInput.propTypes = {};

export default SelectInput;
