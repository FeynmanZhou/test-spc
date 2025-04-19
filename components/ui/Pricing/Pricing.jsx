import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";
import { useLanguage } from '../../../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const handleBuyPlan = () => {
    window.location.href = "https://hitalker.com/#/user/balance?from=welcome";
  };

  const mostPopPricingBg =
    "radial-gradient(100.39% 100.39% at 51.31% -0.71%, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 100%)";

  return (
    <SectionWrapper id="pricing" className="custom-screen">
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          {t('pricingTitle')}
        </h2>
      </div>
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4">
          {t('plans').map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border mt-6 sm:mt-0 ${
                idx === 3 ? "border-blue-500" : "border-gray-200"
              }`}
              style={{
                backgroundImage: idx === 3 ? mostPopPricingBg : "",
              }}
            >
              {idx === 3 && (
                <div className="absolute -top-3 -right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium transform rotate-12">
                  Best Sale
                </div>
              )}
              <div className="flex flex-col h-full">
                <div className="p-8 space-y-4 border-b border-gray-200">
                  <div className="text-center">
                    <span className={`font-medium ${idx === 3 ? "text-black" : "text-blue-600"}`}>
                      {item.name}
                    </span>
                    <div className="text-gray-800 text-3xl font-semibold mt-2">
                      ￥{item.price}
                      {idx >= 2 && (
                        <span className="ml-2 text-base line-through text-gray-400">
                          ￥{idx === 2 ? "234" : "780"}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 mt-2">{item.desc}</p>
                    {idx >= 2 && (
                      <p className="text-green-600 font-medium mt-2">
                        {idx === 2 ? "58%" : "68%"} off
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {item.features.map((featureItem, fidx) => (
                      <li key={fidx} className="flex items-center gap-5 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {featureItem}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      onClick={handleBuyPlan}
                      className={`w-full rounded-full text-white ring-offset-2 focus:ring ${
                        idx === 3
                          ? "bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 ring-blue-600"
                          : idx === 0
                          ? "bg-gray-600 hover:bg-gray-500 ring-gray-600"
                          : "bg-gray-800 hover:bg-gray-700 ring-gray-800"
                      }`}
                    >
                      {idx === 0 ? "Start Now" : t('selectPlan')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutEffect>
    </SectionWrapper>
  );
};

export default Pricing;
