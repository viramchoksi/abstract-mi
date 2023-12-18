import localFont from "next/font/local";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import AppCard from "./components/AppCard";

const monaSans = localFont({ src: "./Mona-Sans.ttf" });
const AllApps = () => {
  const { t } = useTranslation();
  const allApps = t("allApps.applications", { returnObjects: true });

  return (
    <div className={`${monaSans.className}`}>
      <div className="px-5 grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1120px] mx-auto sm:mt-[100px] mt-[54px]">
        {allApps.map((app, index) => {
          return (
            <AppCard
              key={index}
              icon={app.icon}
              title={app.title}
              description={app.description}
            />
          );
        })}
      </div>
      <div className="px-5 sm:px-0">
        <button
          type="button"
          className="flex justify-center cursor-pointer  mx-auto text-black px-5 font-medium py-3 mt-12 gap-x-2 bg-[#68EDAD] hover:bg-[#4DD091] transition-all ease-in duration-150 rounded-md w-fit items-center"
        >
          <Image src="/images/browse.svg" alt="browse" width={18} height={18} />
          {t("allApps.browse-all-apps")}
        </button>
      </div>
    </div>
  );
};

export default AllApps;
