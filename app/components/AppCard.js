import Image from "next/image";
import React from "react";

const AppCard = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="bg-[#141414] rounded-md p-5 flex w-full justify-between  items-center gap-x-1 border-[#222222] border-2">
      <div className="flex items-center gap-x-2 ">
        <Image alt="app-logo" src={icon} width={52} height={52} />
        <div className="px-2">
          <p>{title}</p>
          <p className="text-xs text-[#959595]">{description}</p>
        </div>
      </div>
      <button className="bg-[#59665F] hover:bg-[#39433E] rounded-[4px] px-3 py-1 ">
        Add
      </button>
    </div>
  );
};

export default AppCard;
