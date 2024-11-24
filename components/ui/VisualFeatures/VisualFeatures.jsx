import SectionWrapper from "@/components/SectionWrapper";

import Image from "next/image";

const VisualFeatures = () => {
  const features = [
    {
      title: "Speech Evaluator",
      desc: "Provide an AI avatar with comprehensive report to improve clarity, accuracy, and fluency of your speech. It has been widely used in Toastmasters clubs, Public Speaking Training, and English Training",
      video: "/video/SPC_Introduce.mp4",
    },
    {
      title: "PPT Evaluator",
      desc: "Increase your presentation rehearsal efficiency with AI-generated key message, performance analysis metrics, fine-tuned content.",
      video: "/video/PPT_Evaluator.mp4",
    },
  ];
  return (
    <SectionWrapper>
      <div id="visualfeatures" className="custom-screen text-gray-600">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
           Improve your presentation and public speaking skills with AI
          </h2>
          <p className="mt-3">
          Analyze your performance through pronunciation, filler words, vocabulary, pace, and body language. AI-driven coach provides insights to polish your performance and get tailored guidance to amplify your impact on the stage.
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
