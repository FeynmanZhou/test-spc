import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name, email, message);
    setSubmitted(true);

    {
      /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    }

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY").then(
      result => {
        console.log(result.text);
        clearState();
      },
      error => {
        console.log(error.text);
      }
    );
  };
  return (
    <div>
      <div
        id="feedback"
        className="py-24 bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] text-white text-opacity-75"
      >
        <div className="container mx-auto px-4  w-2/3">
          <div className="flex">
            <div className="">
              <div className="mb-10">
                <h2 className="text-white mt-2.5 mb-3.5 pb-3.5 text-3xl font-bold relative">
                  Get In Touch
                  <span className="block absolute bg-white bg-opacity-30 h-1 w-15 bottom-0 left-7"></span>
                </h2>
                <p className="text-base">
                  Please fill out the form below to send us an email and we will get back to you as
                  soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit} className="space-y-6 pt-5">
                <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
                  <div className="md:w-1/2">
                    <div className="">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        className="block w-full px-3 py-1.5 text-base text-gray-700 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-gray-600"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="text-red-600 text-left"></p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email} // 绑定值
                        className="block w-full px-3 py-1.5 text-base text-gray-700 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-gray-600"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger text-red-600 text-left"></p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    className="block w-full px-3 py-1.5 text-base text-gray-700 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-gray-600"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger text-red-600 text-left"></p>
                </div>
                <div className="flex justify-center mt-7 mb-7">
                  <button
                    type="submit"
                    className="px-5 py-2 text-lg border-2 border-white hover:text-[#1f386e] hover:bg-white transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
                {submitted && (
                  <div className="mt-4 p-4 bg-white text-green-700 rounded shadow-md">
                    提交成功！谢谢您的反馈。
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
