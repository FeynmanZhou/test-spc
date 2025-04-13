import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";
import DropdownMenu from "../DropdownMenu";
import { useLanguage } from "../../../context/LanguageContext";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const menuBtnEl = useRef();

  const handleLogin = () => {
    window.location.href = "https://hitalker.com/";
  };

  const navigation = [
    { name: t("products"), href: "/#hero" },
    { name: t("features"), href: "/#visualfeatures" },
    { name: t("pricing"), href: "/#pricing" },
    { name: t("posts"), href: "/blog" },
    // { name: t("contact"), href: "/#contact" },
  ];

  useEffect(() => {
    document.onclick = e => {
      const target = e.target;
      if (!menuBtnEl.current.contains(target)) setState(false);
    };
  }, []);

  return (
    <header className="relative">
      <div className="custom-screen md:hidden">
        <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
      </div>
      <nav
        className={`pb-5 md:text-sm md:static md:block ${
          state
            ? "bg-white absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-white"
            : "hidden"
        }`}
      >
        <div className="custom-screen items-center md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div
            className={`flex-1 items-center mt-8 text-gray-900 md:font-medium md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="hover:text-blue-500"
                    onMouseEnter={() => item.name === t("products") && setDropdownVisible(true)}
                    onMouseLeave={() => item.name === t("products") && setDropdownVisible(false)}
                  >
                    <Link href={item.href} className="block">
                      {item.name}
                    </Link>
                    {item.name === t("products") && dropdownVisible && <DropdownMenu />}
                  </li>
                );
              })}
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              {/* 更新语言切换按钮样式 */}
              <button
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className="flex items-center text-sm"
                aria-label="Toggle language"
              >
                <span
                  className={`px-1 transition-all duration-200 ${
                    language === "zh"
                      ? "text-blue-600 font-medium text-base"
                      : "text-gray-500 hover:text-gray-700 text-sm"
                  }`}
                >
                  中文
                </span>
                <span className="text-gray-300">/</span>
                <span
                  className={`px-1 transition-all duration-200 ${
                    language === "en"
                      ? "text-blue-600 font-medium text-base"
                      : "text-gray-500 hover:text-gray-700 text-sm"
                  }`}
                >
                  EN
                </span>
              </button>
              {/* <NavLink
                href="#"
                onClick={handleLogin}
                className="flex items-center justify-center gap-x-1 text-sm bg-gray-800 text-gray-200 font-medium border hover:bg-gray-900 md:inline-flex"
              >
                {t("signin")}
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
              </NavLink> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
