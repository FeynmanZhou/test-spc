import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import NavLink from "../NavLink";
import HeroImg from "@/public/images/Speech Copilot.png";
// import HeroVideo from "@/public/video/SPC_Introduce.mp4";
import LayoutEffect from "@/components/LayoutEffect";

const Hero = () => (
  <section>
    <div className="custom-screen py-4">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div id="hero">
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] font-extrabold mx-auto sm:text-6xl">
              Hi Talker: <br />
              <span>Your AI Speech Partner</span>
            </h1>
            <p className="max-w-xl mx-auto text-black">
              Enhance your presentations with Hi Talker, the AI-powered assistant that provides
              insightful feedback and helps you deliver engaging speeches. Elevate your speaking
              skills today!
            </p>
            <div className="flex justify-center font-medium text-sm">
              <NavLink
                href="/login"
                className="flex items-center text-white bg-blue-600 hover:bg-blue-500 active:bg-gray-300 "
              >
                Just it Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
          <GradientWrapper
            className="mt-16 sm:mt-28"
            wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"
          >
            <Image src={HeroImg} className="shadow-lg rounded-2xl" alt="Hi Talker" />
            {/* <video
              className="shadow-lg rounded-2xl"
              controls
              src="/video/SPC_Introduce.mp4" // 替换为你的视频路径
              type="video/mp4"
            /> */}
          </GradientWrapper>
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
