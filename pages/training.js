import SectionWrapper from "@/components/SectionWrapper";
import GradientWrapper from "@/components/GradientWrapper";
import Testimonial from "@/components/ui/Testimonial/Testimonial";
import LayoutEffect from "@/components/LayoutEffect";
import Image from "next/image";

const courses = [
  {
    title: "Pilot Project 4",
    desc: "Become a confident and fluent impromptu speaker in 6 weeks.",
    img: "/images/training-bg-0.png",
    price: "RMB 999",
    lessons: 12,
    duration: "20h 30m",
    students: 30,
    teacher: "Samantha",
    period: "2025-07"
  },
  {
    title: "Pilot Project 5",
    desc: "Become a confident and fluent impromptu speaker in 6 weeks.",
    img: "/images/training-bg-2.png",
    price: "RMB 999",
    lessons: 10,
    duration: "18h 00m",
    students: 25,
    teacher: "Charles",
    period: "2025-09"
  },
  {
    title: "Pilot Project 6",
    desc: "Become a confident and fluent impromptu speaker in 6 weeks.",
    img: "/images/training-bg-3.png",
    price: "RMB 999",
    lessons: 15,
    duration: "25h 00m",
    students: 40,
    teacher: "Morgan",
    period: "2025-11"
  }
];

const instructors = [
  {
    name: "Tao Lu",
    img: "/images/tao-mentor.png",
    title: "Impromptu Speaking Mentor"
  },
  {
    name: "Yan Li",
    img: "/images/yan-mentor.png",
    title: "Performance Mentor"
  },
  {
    name: "Bonnie Wang",
    img: "/images/bonnie-mentor.png",
    title: "Public Speaking Mentor"
  },
  {
    name: "Mason Wang",
    img: "/images/mason-mentor.png",
    title: "Public Speaking Mentor"
  }
];

export default function Training() {
  return (
    <div className="bg-white">
      {/* 新增：头图+数据统计（新版样式） */}
      <section className="relative pb-20 pt-12" style={{ background: 'linear-gradient(135deg, #3F71DC 0%, #0a2342 100%)' }}>
        {/* 顶部留白，避免遮挡导航栏 */}
        <div className="h-8 md:h-12" />
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <div className="relative w-[700px] max-w-full h-[320px]">
              <Image src="/images/pp2-group-photo.png" alt="Training Banner" fill className="object-cover" />
            </div>
          </div>
        </div>
        {/* 数据统计新版样式，减少交叉重叠 */}
        <div className="w-full flex justify-center mt-[-20px] md:mt-[-28px]">
          <div className="bg-[#f45b37] bg-opacity-95 rounded-[60px] px-8 py-8 flex flex-col md:flex-row items-center justify-center gap-8 shadow-lg max-w-5xl w-full relative z-10 border-4 border-white">
            {[
              { icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#fff"/><path d="M18 18c2.485 0 4.5-2.015 4.5-4.5S20.485 9 18 9s-4.5 2.015-4.5 4.5S15.515 18 18 18zm0 3c-4.005 0-12 2.005-12 6v3h24v-3c0-3.995-7.995-6-12-6z" fill="#0a2342"/></svg>
              ), value: '3K+', label: 'Successfully Trained' },
              { icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#fff"/><path d="M27 13.5l-9 9-4.5-4.5 2.121-2.121L18 17.757l6.879-6.878L27 13.5z" fill="#0a2342"/></svg>
              ), value: '15K+', label: 'Classes Completed' },
              { icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#fff"/><path d="M18 25.5l-7.5 4.5 1.5-8.25L6 15.75l8.25-1.125L18 7.5l3.75 7.125L30 15.75l-6 6 1.5 8.25z" fill="#0a2342"/></svg>
              ), value: '97K+', label: 'Satisfaction Rate' },
              { icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#fff"/><path d="M27 10.5H9a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5zm0 1.5v.008L18 19.5 9 12.008V12h18zM9 25.5v-9.375l8.25 7.125a1.5 1.5 0 001.5 0L27 16.125V25.5H9z" fill="#0a2342"/></svg>
              ), value: '102K+', label: 'Students Community' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[160px]">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white mb-3 shadow-lg">{item.icon}</div>
                <div className="text-3xl font-extrabold text-[#1a2233]">{item.value}</div>
                <div className="text-base text-[#1a2233] font-medium mt-1 opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 新增：介绍+配图 */}
      <section className="bg-[#f6f8fa] py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
          <div>
            <div className="text-orange-500 font-semibold mb-2 flex items-center gap-2">
              <span className="text-xl">🚗</span> WHY CHOOSE US
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a2342] mb-4">Your Path to Success of Public Speaking</h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            <ul className="mb-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <li className="flex items-center gap-2 text-green-600 font-medium"><span>✔</span>Best Teaching</li>
              <li className="flex items-center gap-2 text-pink-500 font-medium"><span>✔</span>Quality Educators</li>
              <li className="flex items-center gap-2 text-blue-600 font-medium"><span>✔</span>Expert Tutor</li>
              <li className="flex items-center gap-2 text-orange-500 font-medium"><span>✔</span>Affordable</li>
            </ul>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-600 transition">Find Events</button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[340px] h-[220px]">
              <Image src="/images/training-bg-1.png" alt="Why Choose Us" fill className="rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Banner 区域 */}
      <section className="bg-gradient-to-r from-[#f8fafc] to-[#e0e7ff] py-12 mb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Join Our Training Program</h1>
          <div className="text-sm text-gray-500">Pilot Project for Public Speaking</div>
        </div>
      </section>

      {/* 课程列表 */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Training Camp</h2>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition">View More Options</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow border p-5 flex flex-col">
                <Image src={course.img} alt={course.title} width={400} height={220} className="rounded-lg object-cover mb-4" />
                <div className="text-xs text-gray-400 mb-1">{course.period}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{course.title}</h3>
                <p className="text-gray-500 mb-2">{course.desc}</p>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span className="mr-4">Lessons: {course.lessons}</span>
                  <span className="mr-4">Duration: {course.duration}</span>
                  <span>Students: {course.students}+</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-orange-500 font-bold text-xl">{course.price}</span>
                  <span className="text-gray-600 text-sm">Instructor: {course.teacher}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 讲师介绍 */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Meet Our Instructor</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {instructors.map((ins, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow border p-5 flex flex-col items-center">
                <Image src={ins.img} alt={ins.name} width={120} height={120} className="rounded-full object-cover mb-4" />
                <div className="text-lg font-bold text-gray-800">{ins.name}</div>
                <div className="text-gray-500 text-sm mt-1">{ins.title}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 学员评价 */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <Testimonial />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 text-center tracking-tight">Testimonials from graduated mentees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "How I Overcame My Fear of Public Speaking", name: "Alice" },
              { title: "From Nervous to Confident Speaker", name: "Brian" },
              { title: "My Journey to Fluent Communication", name: "Cathy" }
            ].map((student, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
                <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-200 flex items-center justify-center">
                  <video controls width="100%" height="220" poster="/images/video-placeholder.png" className="object-cover w-full h-full">
                    <source src="#" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="font-semibold text-lg text-gray-800 text-center mb-1">{student.title}</div>
                <div className="text-gray-500 text-sm text-center">{student.name}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
} 