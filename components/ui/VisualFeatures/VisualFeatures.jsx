import SectionWrapper from "@/components/SectionWrapper";
import { useLanguage } from '../../../context/LanguageContext';

const VisualFeatures = () => {
  const { t } = useLanguage();
  
  const videos = [
    "https://hitalkerbucket.oss-cn-beijing.aliyuncs.com/welcome/hitalker-intro-ppte.mp4",
    "https://hitalkerbucket.oss-cn-beijing.aliyuncs.com/welcome/hitalker-intro-avatar.mp4"
  ];

  return (
    <SectionWrapper>
      <div id="visualfeatures" className="custom-screen text-gray-600">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
            {t('visualTitle')}
          </h2>
          <p className="mt-3">
            {t('visualDescription')}
          </p>
        </div>
        <div className="mt-12">
          <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
            {videos.map((video, idx) => (
              <li
                className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl"
                key={idx}
              >
                <div className="p-8">
                  <h3 className="text-gray-900 text-xl font-semibold">
                    {t('featuresTitles')[idx]}
                  </h3>
                  <p className="mt-3 sm:text-sm md:text-base">
                    {t('featuresDesc')[idx]}
                  </p>
                </div>
                <div className="text-center">
                  <video
                    className="justify-center shadow-lg rounded-2xl"
                    controls
                    src={video}
                    type="video/mp4"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VisualFeatures;
