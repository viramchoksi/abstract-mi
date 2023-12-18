import Image from "next/image";
import React from "react";

const socialLink = [
  {
    icon: "/images/discord.svg",
    title: "discord",
    url: "https://discord.com/invite/uch3Tq3aym",
  },
  {
    icon: "/images/github.svg",
    title: "github",
    url: "https://github.com/AbstractSDK",
  },
  {
    url: "https://twitter.com/i/flow/login?redirect_after_login=%2FAbstractSDK",
    icon: "/images/twitter.svg",
    title: "twitter",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 pb-10 sm:mt-[200px] mt-[100px]">
      {socialLink.map((link, index) => {
        return (
          <a
            target="_blank"
            href={link.url}
            title={link.title}
            key={index}
            className="flex items-center gap-x-3 cursor-pointer hover:scale-125 transition-all duration-150 ease-in"
          >
            <Image
              title={link.title}
              src={link.icon}
              alt={link.title}
              width={24}
              height={24}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
