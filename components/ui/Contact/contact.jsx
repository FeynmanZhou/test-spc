import { useState, useRef } from "react";
import { useLanguage } from "../../../context/LanguageContext";

const initialState = {
  name: "",
  email: "",
  message: "",
  images: [],
};

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(""); // 清除错误信息
  };

  // 处理图片粘贴
  const handlePaste = e => {
    const items = e.clipboardData.items;
    for (let item of items) {
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        handleImageUpload([file]);
      }
    }
  };

  // 处理图片上传
  const handleImageUpload = files => {
    const newImages = [...files].map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  // 删除图片
  const handleRemoveImage = index => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  // 表单验证
  const npm = () => {
    if (!formData.name.trim()) {
      setError(t("errorName"));
      return false;
    }
    if (!formData.email.trim()) {
      setError(t("errorEmail"));
      return false;
    }
    if (!formData.message.trim()) {
      setError(t("errorMessage"));
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // 创建 FormData 对象来发送文件
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);
      formData.images.forEach((image, index) => {
        submitData.append(`image${index}`, image.file);
      });

      // 发送到后端 API
      const response = await fetch("/api/contact", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) throw new Error("提交失败");

      setSubmitted(true);
      setFormData(initialState);
      setTimeout(() => setSubmitted(false), 5000); // 5秒后隐藏成功消息
    } catch (err) {
      setError(t("errorSubmit"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-0">
      {" "}
      {/* 移除上下边距 */}
      <div id="contact" className="bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] text-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <h2 className="text-white text-4xl font-bold text-center mb-6">
                {t("contactTitle")}
              </h2>
              <p className="text-center text-lg text-white opacity-90">{t("contactDesc")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-200"
                    placeholder={t("formName")}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-200"
                    placeholder={t("formEmail")}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-200"
                  rows="6"
                  placeholder={t("formMessage")}
                  onChange={handleChange}
                  onPaste={handlePaste}
                ></textarea>
              </div>

              {/* 图片预览区域 */}
              {formData.images.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image.preview}
                        alt="preview"
                        className="w-24 h-24 object-cover rounded-lg border-2 border-white"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* 错误提示 */}
              {error && (
                <div className="text-red-100 text-center py-2 bg-red-500/20 rounded-lg">
                  {error}
                </div>
              )}

              {/* 提交按钮 */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold transform transition duration-200
                    ${
                      loading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-opacity-90 hover:scale-105"
                    }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t("sending")}
                    </span>
                  ) : (
                    t("sendMessage")
                  )}
                </button>
              </div>
            </form>

            {/* 成功提示 */}
            {submitted && (
              <div className="mt-6 bg-white text-green-600 p-4 rounded-lg text-center animate-fade-in shadow-lg font-medium">
                {t("thanksFeedback")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
