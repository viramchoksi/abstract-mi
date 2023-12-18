"use client";

import translationEN from "@/locales/en/translation.json";
import i18n from "i18next";
import { Suspense, useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import AbstractSteps from "./AbstractSteps";
import AllApps from "./AllApps";
import Discover from "./Discover";
import FAQ from "./FAQ";
import Header from "./Header";
import SkyWithStarts from "./SkyWithStarts";
import SocialLinks from "./SocialLinks";
import Loader from "./components/Loader";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [overflowClass, setOverflowClass] = useState("");

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        setOverflowClass("hide-overflow");
      }, 300);
    } else {
      setOverflowClass("");
    }
  }, [isMenuOpen]);

  const resources = {
    en: {
      translation: translationEN,
    },
  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "en", // if you're using a language detector, do not define the lng option
      fallbackLng: "en",

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });

  return (
    <main className="h-screen">
      <Suspense fallback={<Loader />}>
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <div
          className={`mt-[70px] -z-10 w-full max-h-[calc(100vh-70px)] ${overflowClass} `}
        >
          <SkyWithStarts />
          <AllApps />
          <Discover />
          <AbstractSteps />
          <FAQ />
          <SocialLinks />
        </div>
      </Suspense>
    </main>
  );
}
