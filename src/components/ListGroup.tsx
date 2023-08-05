import React from "react";
import cx from "classnames";

function ListGroupComponent({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      {...rest}
      className={cx(
        "list-none rounded-lg my-4 bg-white text-sm font-medium text-gray-900  dark:bg-transparent dark:text-white text-left",
        className
      )}
    >
      {children}
    </ul>
  );
}

function ListGroupItem({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      {...rest}
      className={cx(
        "w-full dark:hover:bg-nav-dark px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-white dark:border-opacity-5"
      )}
    >
      {children}
    </li>
  );
}

export const ListGroup = Object.assign(ListGroupComponent, {
  Item: ListGroupItem,
});
