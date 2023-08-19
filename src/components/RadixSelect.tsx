import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import React from "react";
import { BsCheck2, BsChevronDown, BsChevronUp } from "react-icons/bs";
export const selectClass =
  "rounded-[100px] h-[50px] inline-flex items-center justify-between px-6 overflow-hidden  border outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500";
function RadixSelect({
  children,
  className,
  placeholder,
  hideCheveron,
  defaultVlaue,
  contentWidth = "220px",
}: React.PropsWithChildren<{
  className?: string;
  placeholder?: string;
  hideCheveron?: boolean;
  defaultVlaue?: string;
  contentWidth?: string;
}>) {
  return (
    <Select.Root defaultValue={defaultVlaue}>
      <Select.Trigger className={classnames(className)} aria-label="select">
        <Select.Value placeholder={placeholder} />
        {!hideCheveron && (
          <Select.Icon className="text-violet11">
            <BsChevronDown />
          </Select.Icon>
        )}
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          align="start"
          style={{
            maxWidth: contentWidth,
          }}
          className="overflow-hidden w-screen  bg-white dark:border-nav-dark dark:bg-nav-dark rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <BsChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  Select.SelectItemProps
>(
  (
    { children, className, ...props }: any,
    forwardedRef: React.Ref<HTMLDivElement> | undefined
  ) => {
    return (
      <Select.Item
        className={classnames(
          "text-base leading-none text-grey-main dark:text-white rounded-bl-md rounded-br-md flex items-center py-[14px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <BsCheck2 />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export const SelectSeperator = Select.Separator;
RadixSelect.propTypes = {};

export default RadixSelect;
