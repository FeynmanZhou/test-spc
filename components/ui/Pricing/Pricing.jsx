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
    "radial-gradient(100.39% 100.39% at 51.31% -0.71%, #3B82F6 0%, rgba(59, 130, 246, 0) 100%)";

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
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {t('plans').map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 ${
                idx === 1 ? "border border-blue-500" : ""
              }`}
              style={{
                backgroundImage: idx === 1 ? mostPopPricingBg : "",
              }}
            >
              <div className="p-8 space-y-4 border-b border-gray-800 text-center">
                <span className={`font-medium ${idx === 1 ? "text-black" : "text-blue-600"}`}>
                  {item.name}
                </span>
                <div className="text-gray-800 text-3xl font-semibold">
                  ￥{item.price}
                </div>
                <p className="text-gray-500">{item.desc}</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
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
                <div className="pt-8">
                  <Button
                    onClick={handleBuyPlan}
                    className={`w-full rounded-full text-white ring-offset-2 focus:ring ${
                      idx === 1
                        ? "bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 ring-blue-600"
                        : "bg-gray-800 hover:bg-gray-700 ring-gray-800"
                    }`}
                  >
                    {t('selectPlan')}
                  </Button>
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
