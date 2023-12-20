"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopoverMenu from "./components/Popover";

const Header = ({ isMenuOpen, setMenuOpen }) => {
  const { i18n } = useTranslation();
  const [selectedValue, setSelectedValue] = useState(i18n.language);
  const menuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 780) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }, []); // Empty dependency array means the effect runs once after the initial render

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      style={{}}
      className="flex flex-col   mb-5 pt-[15px] fixed top-0 w-full h-[80px] bg-black z-30"
    >
      <nav id="nav" className="shadow" role="navigation">
        <div className="max-w-[1120px] mx-auto md:p-4 py-4 flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 lg:mr-8 px-4">
            <a href="#" rel="home">
              <span className="text-xl text-white">
                <Image
                  src="images/logo.svg"
                  height={23}
                  width={185}
                  alt="Abstract"
                />
              </span>
            </a>
          </div>
          <div className="ml-auto flex gap-x-1 md:hidden px-4 items-center">
            <select
              value={selectedValue}
              onChange={handleSelectChange}
              className="block sm:hidden"
            >
              <option value="en">🇺🇸</option>
            </select>
            <div
              className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
              onClick={menuToggle}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div
            id="menu"
            className={`w-full z-10  bg-black menu-container ${
              isMenuOpen ? "open" : ""
            } md:w-auto md:flex-grow md:flex md:items-center px-4`}
          >
            <ul
              id="ulMenu"
              className="relative flex gap-y-6 lg:gap-x-3  text-sm flex-col text-center duration-100 ease-out md:transition-none mt-4 pt-4 mx-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0 h-[100dvh] md:h-full outline-none focus:outline-none"
            >
              <li className="min-w-[110px] outline-none focus:outline-none">
                <a
                  className="md:p-2  font-semibold text-gray-400  py-1 items-center flex justify-between hover:text-white  outline-none focus:outline-none"
                  href="#"
                >
                  <PopoverMenu
                    title={"Developers"}
                    content={<Developer />}
                    left={"md:left-[75%] left-1/2"}
                  />
                </a>
              </li>
              <li className="min-w-[135px] outline-none focus:outline-none">
                <a
                  className="md:p-2  font-semibold  text-gray-400  py-1 items-center flex justify-between hover:text-white  outline-none focus:outline-none"
                  href="#"
                >
                  <PopoverMenu
                    title={"Documentation"}
                    content={<Documentation />}
                    left={"left-1/2"}
                  />
                </a>
              </li>
              <li className="min-w-[145px] outline-none focus:outline-none">
                <a
                  className=" md:p-2  font-semibold  text-gray-400  py-1 items-center flex justify-between hover:text-white outline-none focus:outline-none"
                  href="#"
                >
                  <PopoverMenu
                    left={"md:left-0 left-1/2"}
                    title={"Integrations"}
                    haveExtra
                    content={<Integrations />}
                  />
                </a>
              </li>
              <li>
                <div className="min-w-[130px] flex justify-center gap-x-2">
                  <select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    className="md:block hidden"
                  >
                    <option value="en">🇺🇸</option>
                  </select>
                  <button className="md:w-fit w-full flex items-center justify-center gap-x-1 md:p-2 lg:px-4 font-semibold text-black bg-[#68EDAD] hover:bg-[#4DD091]  transition-all ease-in duration-150 px-4 lg:py-1 py-2  rounded">
                    <p>Sign In</p>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Developer = () => {
  const { t } = useTranslation();

  const onChain = t("header.developer.on-chain", { returnObjects: true });
  const offChain = t("header.developer.off-chain", { returnObjects: true });

  return (
    <div>
      <div className="flex justify-between w-full flex-col md:flex-row gap-y-10">
        <div>
          <p className="text-[#F1CE5B] text-start">ON-CHAIN</p>
          <div className="flex flex-col gap-y-5 mt-5">
            {onChain.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-x-5">
                  <Image alt="logo" src={item.icon} width={28} height={24} />
                  <div className="text-start">
                    <Link
                      href={item.url}
                      target="_blank"
                      className="flex gap-x-2 items-center"
                    >
                      <p className="text-white text-sm">{item.title}</p>
                      <Image
                        src={"/images/redirection.svg"}
                        width={15}
                        height={15}
                        alt="arrow"
                        className=""
                      />
                    </Link>
                    <p className="text-xs text-[#959595]">{item.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-[#F1CE5B] text-start">OFF-CHAIN</p>
          <div className="flex flex-col gap-y-5 mt-5">
            {offChain.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-x-5">
                  <Image alt="logo" src={item.icon} width={38} height={24} />
                  <div className="text-start">
                    <a
                      href={item.url}
                      target="_blank"
                      className="flex gap-x-2 items-center"
                    >
                      <o className="text-white text-sm">{item.title}</o>
                      <Image
                        src={"/images/redirection.svg"}
                        width={15}
                        height={15}
                        alt="arrow"
                        className=""
                      />
                    </a>
                    <p className="text-xs text-[#959595]">{item.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Documentation = () => {
  const { t } = useTranslation();

  const data = t("header.documentation", { returnObjects: true });
  return (
    <div>
      <div className="flex items-center gap-x-5">
        <Image src="/images/play.svg" width={44} height={32} alt="play" />
        <div className="text-start">
          <a
            href="https://www.youtube.com/@abstractmoney"
            target="_blank"
            className="flex gap-x-2 items-center"
          >
            <p className="text-white text-sm">
              {t("header.Get started building Abstract apps")}
            </p>
            <Image
              src={"/images/redirection.svg"}
              width={15}
              height={15}
              alt="arrow"
              className=""
            />
          </a>
          <p className="text-xs text-[#959595]">
            {t("header.earn to build with Abstract basics in 10 minutes")}
          </p>
        </div>
      </div>
      <hr className="my-3 " />
      <div className="flex  my-5 md:flex-row flex-col gap-y-5">
        <div className="flex flex-1 items-center gap-x-3">
          <Image
            src={"/images/document.svg"}
            width={35}
            height={35}
            alt="arrow"
            className=""
          />

          <a
            target="_blank"
            href="https://docs.abstract.money"
            className="flex gap-x-3 items-center"
          >
            <p className="text-white text-sm">{t("header.Documentation")}</p>
            <Image
              src={"/images/redirection.svg"}
              width={15}
              height={15}
              alt="arrow"
              className=""
            />
          </a>
        </div>
        <div className="flex flex-1 items-center gap-x-3">
          <Image
            src={"/images/github-yellow.svg"}
            width={35}
            height={35}
            alt="arrow"
            className=""
          />

          <a
            href="https://github.com/abstractsdk"
            target="_blank"
            className="flex gap-x-3"
          >
            <p className="text-white text-sm">{t("header.GitHub")}</p>
            <Image
              src={"/images/redirection.svg"}
              width={15}
              height={15}
              alt="arrow"
              className=""
            />
          </a>
        </div>
      </div>
      <hr className="my-3 " />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-5">
        {data.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            key={index}
            className="flex gap-x-3 items-center"
          >
            <p className="text-white text-sm">{item.title}</p>
            <Image
              src="/images/redirection.svg"
              width={15}
              height={15}
              alt="arrow"
              className=""
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const Integrations = () => {
  const { t } = useTranslation();
  const decentralized = [
    {
      title: "Osmosis",
      icon: "/images/Osmosis.svg",
      url: "https://app.osmosis.zone",
      subTitle: null,
    },
    {
      title: "Kujira",
      icon: "/images/Kujira.svg",
      url: "https://fin.kujira.network",
      subTitle: null,
    },
    {
      title: "Astroport",
      icon: "/images/Astroport.svg",
      url: "https://astroport.fi",
      subTitle: null,
    },
    {
      title: "Astrovault",
      icon: "/images/Astrovault.svg",
      url: "https://astrovault.io",
      subTitle: null,
    },
    {
      title: "WYND",
      icon: "/images/WYND.svg",
      url: "https://dex.wynddao.com/",
      subTitle: null,
    },
  ];
  const chains = [
    {
      title: "Neutron",
      icon: "/images/Neutron.svg",
      url: "https://neutron.org/",
      subTitle: null,
    },
    {
      title: "Terra",
      icon: "/images/Terra.svg",
      url: "https://terra.money",
      subTitle: null,
    },
    {
      title: "Osmosis",
      icon: "/images/Osmosis.svg",
      url: "https://osmosis.zone",
      subTitle: null,
    },
    {
      title: "Kujira",
      icon: "/images/Kujira.svg",
      url: "https://kujira.network",
      subTitle: null,
    },
    {
      title: "Sei",
      icon: "/images/Sei.svg",
      url: "https://sei.io",
      subTitle: null,
    },
    {
      title: "DoraVota",
      icon: "/images/DoraVota.svg",
      url: "https://vota-explorer.dorafactory.org",
      subTitle: null,
    },
    {
      title: "Juno",
      icon: "/images/Juno.svg",
      url: "https://junonetwork.io",
      subTitle: null,
    },
  ];
  return (
    <div className="flex md:flex-row flex-col gap-y-8">
      <div className="text-start flex-1 gap-y-5">
        <p className="text-[#F1CE5B] text-sm">{t("DECENTRALIZED EXCHANGES")}</p>
        <div className="flex flex-col gap-y-5 mt-8">
          {decentralized.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-x-3">
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt={item.title}
                />
                <div className="flex gap-x-3 ">
                  <a
                    target="_blank"
                    href={item.url}
                    className="text-white text-sm"
                  >
                    {item.title}
                  </a>
                  <Image
                    src={"/images/redirection.svg"}
                    width={15}
                    height={15}
                    alt="arrow"
                    className=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-start flex-1 gap-y-5">
        <p className="text-[#F1CE5B] text-sm">{t("CHAINS")}</p>
        <div className="flex flex-col gap-y-5 mt-8">
          {chains.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-x-3">
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt={item.title}
                />
                <div className="flex gap-x-3 ">
                  <a
                    href={item.url}
                    target="_blank"
                    className="text-white text-sm"
                  >
                    {item.title}
                  </a>
                  <Image
                    src={"/images/redirection.svg"}
                    width={15}
                    height={15}
                    alt="arrow"
                    className=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
