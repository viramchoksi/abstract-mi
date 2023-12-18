import Collapsible from "react-collapsible";
import { useTranslation } from "react-i18next";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const { t } = useTranslation();
  const faqData = t("faq", { returnObjects: true });
  return (
    <div className="">
      <p className="px-5 text-[32px] text-center sm:mt-14 mt-8">
        {faqData.title}
      </p>
      <p className="px-5 sm:block hidden text-center text-[#6A7A7B] ">
        {faqData.subTitle}
      </p>
      <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-between sm:mt-14 mt-8 px-5 gap-x-5 gap-y-8">
        {faqData.questions.map((faqs, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Collapsible
              open={index === 0} // Open the first accordion item by default
              transitionTime={200}
              key={index}
              trigger={
                <div className="flex  items-start justify-between gap-x-2 hover:bg-[#222222] rounded-md px-3 py-2 w-full">
                  <p className="text-lg">{faqs.que}</p>
                  <BsChevronDown className="mt-1" size={15} />
                </div>
              }
              content={faqs.ans}
            >
              <p className="text-[#6A7A7B] text-sm leading-6 px-3">
                {" "}
                {faqs.ans}
              </p>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
