import { InstructorBio } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function InstructorCard({
  first_name,
  last_name,
  breif,
  img,
  id,
}: InstructorBio) {
  return (
    <div className="h-[490px] w-full max-w-[313px] p-4 z-0 relative rounded-lg bg-nav-dark">
      <Link href={`/instructors/${id}`}>
        <Image
          src={img}
          alt={`${first_name} ${last_name}`}
          width={313}
          height={490}
          className="h-full"
        />
        <div className="absolute bottom-0 h-[50%] w-full left-0 right-0 flex text-center flex-col justify-center items-center bg-inst-card">
          <h4 className="title">
            {first_name} {last_name}
          </h4>
          <p className="pri-text text-base">{breif}</p>
        </div>
      </Link>
    </div>
  );
}

export default InstructorCard;
