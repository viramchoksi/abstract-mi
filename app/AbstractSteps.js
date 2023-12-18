import React from "react";
import Steps from "./components/Steps";
import { useTranslation } from "react-i18next";

const AbstractSteps = () => {
  const { t, i18n } = useTranslation();
  const steps = t("steps", { returnObjects: true });

  return (
    <div className="max-w-[1120px] mx-auto grid md:grid-cols-3 grid-cols-1 justify-between sm:mt-14 mt-8 px-5">
      {steps.map((step, index) => {
        return (
          <Steps
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        );
      })}
    </div>
  );
};

export default AbstractSteps;
