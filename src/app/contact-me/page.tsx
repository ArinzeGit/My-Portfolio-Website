"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import TranslucentCard from "@/components/TranslucentCard";
import validateFormInput, {
  validateName,
  validateEmail,
  validateMessage,
} from "@/utils/ValidateFormInput";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ErrorText = ({ text }: { text: string }) => {
  return (
    <div className="absolute top-[10px] right-[30px] text-[14px] font-[500] text-[#FF3333]">
      {text}
    </div>
  );
};

const ContactMe = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isErrorOutline, setIsErrorOutline] = useState(false);
  const themeColor = useThemeColor();
  return (
    <div className="bg-[url('/images/contact-me-page-background.webp')] bg-cover bg-center min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin py-[85px] flex flex-col sm:flex-row justify-center items-start text-secondary"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <TranslucentCard className="max-w-md bg-contactMePrimary text-center sticky top-[0]">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-full border-[4px] border-contactMePrimary shadow-lg transition-all duration-500 ease-out hover:shadow-2xl">
            <Image
              src="/images/cartoon-arinze-in-suit.jpg"
              alt="Professional image"
              fill
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 400px"
              className="object-cover object-top transition-transform duration-500 ease-out hover:scale-110"
              priority
            />
          </div>

          <Link
            href="mailto:arinzeowoh@gmail.com"
            className="inline-block mt-[10px] text-[18px] bg-[rgba(0,0,0,.3)] hover:bg-contactMePrimary rounded-full px-[10px] py-[5px] transition-all"
          >
            arinzeowoh@gmail.com
          </Link>
          <p className="mt-[10px]">Send email or use contact form</p>
        </TranslucentCard>

        <TranslucentCard className="flex flex-col text-[25px] gap-[30px] w-[50%]">
          <h2 className="text-3xl font-bold self-center">Get in Touch</h2>
          <TranslucentCard className="bg-contactMePrimary relative">
            <ErrorText text={error.name} />
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              value={formInput.name}
              onChange={(e) => {
                setFormInput((prev) => ({ ...prev, name: e.target.value }));
                let error = validateName(e.target.value);
                if (error) {
                  setError((prev) => ({ ...prev, name: error }));
                } else setError((prev) => ({ ...prev, name: "" }));
              }}
              placeholder="Enter your full name"
              className={`placeholder:text-gray-400 bg-transparent outline-[1px] hover:outline hover:outline-contactMePrimary focus:outline focus:outline-[2px] focus:outline-white px-[20px] py-[5px] w-full rounded-lg ${
                error.name &&
                isErrorOutline &&
                "outline outline-[#FF3333] hover:outline-[#FF3333]"
              }`}
            />
          </TranslucentCard>
          <TranslucentCard className="bg-contactMePrimary relative">
            <ErrorText text={error.email} />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              value={formInput.email}
              onChange={(e) => {
                setFormInput((prev) => ({ ...prev, email: e.target.value }));
                let error = validateEmail(e.target.value);
                if (error) {
                  setError((prev) => ({ ...prev, email: error }));
                } else setError((prev) => ({ ...prev, email: "" }));
              }}
              placeholder="Enter your email address (example@email.com)"
              className={`placeholder:text-gray-400 bg-transparent outline-[1px] hover:outline hover:outline-contactMePrimary focus:outline focus:outline-[2px] focus:outline-white px-[20px] py-[5px] w-full rounded-lg ${
                error.email &&
                isErrorOutline &&
                "outline outline-[#FF3333] hover:outline-[#FF3333]"
              }`}
            />
          </TranslucentCard>
          <TranslucentCard className="bg-contactMePrimary relative">
            <ErrorText text={error.subject} />
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              value={formInput.subject}
              onChange={(e) => {
                setFormInput((prev) => ({ ...prev, subject: e.target.value }));
              }}
              placeholder="Enter the subject (Optional)"
              className={`placeholder:text-gray-400 bg-transparent outline-[1px] hover:outline hover:outline-contactMePrimary focus:outline focus:outline-[2px] focus:outline-white px-[20px] py-[5px] w-full rounded-lg ${
                error.subject &&
                isErrorOutline &&
                "outline outline-[#FF3333] hover:outline-[#FF3333]"
              }`}
            />
          </TranslucentCard>
          <TranslucentCard className="bg-contactMePrimary relative">
            <ErrorText text={error.message} />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              value={formInput.message}
              onChange={(e) => {
                setFormInput((prev) => ({ ...prev, message: e.target.value }));
                let error = validateMessage(e.target.value);
                if (error) {
                  setError((prev) => ({ ...prev, message: error }));
                } else setError((prev) => ({ ...prev, message: "" }));
              }}
              placeholder="Type your message"
              className={`placeholder:text-gray-400 bg-transparent outline-[1px] hover:outline hover:outline-contactMePrimary focus:outline focus:outline-[2px] focus:outline-white px-[20px] py-[5px] w-full rounded-lg ${
                error.message &&
                isErrorOutline &&
                "outline outline-[#FF3333] hover:outline-[#FF3333]"
              }`}
            />
          </TranslucentCard>
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={() => {
                setIsErrorOutline(true);
                setError(validateFormInput(formInput));
              }}
              className="bg-contactMePrimary text-xl sm:text-2xl font-bold tracking-wide py-3 px-6 rounded-2xl shadow-lg hover:bg-opacity-80 hover:shadow-xl transition-all duration-300"
            >
              Send
            </button>
            <p className="text-white/70 text-sm italic text-center">
              I usually reply within 24 hours!
            </p>
          </div>
        </TranslucentCard>
      </div>
    </div>
  );
};

export default ContactMe;
