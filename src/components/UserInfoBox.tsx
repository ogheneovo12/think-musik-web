import { Avatar } from "flowbite-react";
import React from "react";

function UserInfoBox({
  first_name,
  last_name,
  breif,
  img,
}: {
  first_name: string;
  last_name: string;
  breif: string;
  img: string;
}) {
  return (
    <Avatar
      theme={{
        
        root: {
            base:"flex items-center space-x-4 rounded",
          img: {
            base: " object-cover object-top  border-gradient",
          },
          size: {
            lg: "w-[64px] h-[64px]",
          },
        },
      }}
      img={img}
      rounded
      placeholderInitials={`${first_name?.[0] || ""} ${last_name?.[0] || ""} `}
      size={"lg"}
    >
      <div className="space-y-1 font-medium dark:text-white  ">
        <h4>
          {first_name} {last_name}
        </h4>
        <div className="text-sm text-gray-500 dark:text-gray-400">{breif}</div>
      </div>
    </Avatar>
  );
}

export default UserInfoBox;
