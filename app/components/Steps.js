import Image from "next/image";
import React from "react";

const Steps = ({ icon, title, description }) => {
  return (
    <div className="flex gap-x-3 py-5 pr-5">
      <Image
        height={24}
        width={24}
        src={icon}
        className="w-8 h-8"
        alt={title}
      />
      <div>
        <p className="text-lg">{title}</p>
        <p className="text-[#6A7A7B] text-sm leading-6">{description}</p>
      </div>
    </div>
  );
};

export default Steps;
