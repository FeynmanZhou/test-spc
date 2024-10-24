import SectionWrapper from "@/components/SectionWrapper";

import Image from "next/image";

const VisualFeatures = () => {
  const features = [
    {
      title: "Individual Evaluator",
      desc: "The Individual Evaluator for Public Speaking is a module that uses AI technology to provide personalized feedback to individuals seeking to improve their public speaking skills.",
      video: "/video/SPC_Introduce.mp4",
    },
    {
      title: "PPT Speech Evaluator",
      desc: "The able Topic Evaluator for Topic Exercises is a module designed to help individuals improve their impromptu speaking skills. The module allows users to set topics and quantities, and then leverages cutting-edge AI technology to automatically generate questions based on those topics.",
      video: "/video/PPT_Evaluator.mp4",
    },
  ];
  return (
    <SectionWrapper>
      <div id="visualfeatures" className="custom-screen text-gray-600">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
            Elevate Your Speaking Skills with HiTalker
          </h2>
          <p className="mt-3">
            Enhance your public speaking, boost yourconfidence, and engage your audience
            effectively. Transform your presentations into memorable experiences—start your journey
            with HiTalker today!
          </p>
        </div>
        <div className="mt-12">
          <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
            {features.map((item, idx) => (
              <li
                className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl"
                key={idx}
              >
                <div className="p-8">
                  <h3 className="text-gray-900 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 sm:text-sm md:text-base">{item.desc}</p>
                </div>
                <div className="text-center">
                  {/* <Image src={item.img} className="w-full ml-auto" alt={item.title} /> */}

                  <video
                    className="justify-center shadow-lg rounded-2xl"
                    controls
                    src={item.video} // 替换为你的视频路径
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
