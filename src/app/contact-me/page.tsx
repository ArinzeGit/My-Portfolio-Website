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
    <div className="absolute top-[7px] right-[38px] text-[14px] font-[500] text-[#FF3333]">
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
    <div className="bg-[url('/images/contact-me-page-background.webp')] bg-cover bg-center min-h-full pt-[--nav-bar-height]">
      <div
        className="desktop:w-[--main-window-width] h-[100%] desktop:h-[--main-display-height] overflow-auto scrollbar-thin text-secondary"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <div className="flex flex-col desktop:flex-row justify-around desktop:justify-between gap-[40px] items-center desktop:items-start desktop:py-[--page-padding-top] py-[32px] px-[16px] desktop:px-0">
          <TranslucentCard
            position="left"
            className="desktop:w-[min(580px,45%)] bg-contactMePrimary text-center h-fit desktop:sticky desktop:top-[calc(50%-153.5px)] animate-fade-in-up"
          >
            <div className="relative h-24 w-24 desktop:w-48 desktop:h-48 mx-auto overflow-hidden rounded-full border-[4px] border-contactMePrimary shadow-2xl transition-all duration-500 ease-out hover:shadow-contactMePrimary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-contactMePrimary/20 to-transparent rounded-full z-10 pointer-events-none" />
              <Image
                src="/images/game-dev-ari.jpeg"
                alt="Professional image"
                fill
                sizes="(max-width: 640px) 100vw, 128px"
                className="object-cover object-center transition-transform duration-500 ease-out hover:scale-110"
                priority
              />
            </div>
            <Link
              href="mailto:arinzeowoh@gmail.com"
              className="inline-block mt-6 text-lg desktop:text-xl bg-gradient-to-r from-contactMePrimary/20 to-contactMePrimary/10 border border-contactMePrimary/30 hover:from-contactMePrimary/30 hover:to-contactMePrimary/20 hover:border-contactMePrimary/50 rounded-full px-6 py-3 transition-all duration-300 font-semibold hover:scale-105"
            >
              arinzeowoh@gmail.com
            </Link>
            <p className="mt-4 text-base desktop:text-lg text-gray-300">
              Send email or use contact form
            </p>
          </TranslucentCard>
          <TranslucentCard
            position="right"
            className="flex flex-col gap-6 w-full tablet:w-[90%] desktop:w-[min(580px,45%)] h-fit animate-fade-in-up"
          >
            <h2 className="text-4xl font-bold self-center font-montserrat text-secondary mb-2">
              Get in Touch
            </h2>
            <p className="text-center text-gray-400 mb-4">
              Have a project in mind? Let&apos;s work together!
            </p>
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
                  const error = validateName(e.target.value);
                  if (error) {
                    setError((prev) => ({ ...prev, name: error }));
                  } else setError((prev) => ({ ...prev, name: "" }));
                }}
                placeholder="Enter your full name"
                className={`placeholder:text-gray-500 bg-transparent outline-none border-2 border-contactMePrimary/30 hover:border-contactMePrimary/50 focus:border-contactMePrimary focus:ring-2 focus:ring-contactMePrimary/20 px-5 py-3 w-full rounded-lg text-secondary transition-all duration-300 ${
                  error.name &&
                  isErrorOutline &&
                  "border-[#FF3333] hover:border-[#FF3333] focus:border-[#FF3333] focus:ring-[#FF3333]/20"
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
                type="email"
                value={formInput.email}
                onChange={(e) => {
                  setFormInput((prev) => ({ ...prev, email: e.target.value }));
                  const error = validateEmail(e.target.value);
                  if (error) {
                    setError((prev) => ({ ...prev, email: error }));
                  } else setError((prev) => ({ ...prev, email: "" }));
                }}
                placeholder="Enter your email address (example@email.com)"
                className={`placeholder:text-gray-500 bg-transparent outline-none border-2 border-contactMePrimary/30 hover:border-contactMePrimary/50 focus:border-contactMePrimary focus:ring-2 focus:ring-contactMePrimary/20 px-5 py-3 w-full rounded-lg text-secondary transition-all duration-300 ${
                  error.email &&
                  isErrorOutline &&
                  "border-[#FF3333] hover:border-[#FF3333] focus:border-[#FF3333] focus:ring-[#FF3333]/20"
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
                  setFormInput((prev) => ({
                    ...prev,
                    subject: e.target.value,
                  }));
                }}
                placeholder="Enter the subject (Optional)"
                className="placeholder:text-gray-500 bg-transparent outline-none border-2 border-contactMePrimary/30 hover:border-contactMePrimary/50 focus:border-contactMePrimary focus:ring-2 focus:ring-contactMePrimary/20 px-5 py-3 w-full rounded-lg text-secondary transition-all duration-300"
              />
            </TranslucentCard>
            <TranslucentCard className="bg-contactMePrimary relative">
              <ErrorText text={error.message} />
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formInput.message}
                onChange={(e) => {
                  setFormInput((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }));
                  const error = validateMessage(e.target.value);
                  if (error) {
                    setError((prev) => ({ ...prev, message: error }));
                  } else setError((prev) => ({ ...prev, message: "" }));
                }}
                placeholder="Type your message"
                className={`placeholder:text-gray-500 bg-transparent outline-none border-2 border-contactMePrimary/30 hover:border-contactMePrimary/50 focus:border-contactMePrimary focus:ring-2 focus:ring-contactMePrimary/20 px-5 py-3 w-full rounded-lg text-secondary transition-all duration-300 resize-none ${
                  error.message &&
                  isErrorOutline &&
                  "border-[#FF3333] hover:border-[#FF3333] focus:border-[#FF3333] focus:ring-[#FF3333]/20"
                }`}
              />
            </TranslucentCard>
            <div className="flex flex-col gap-3 items-center mt-4">
              <button
                onClick={async () => {
                  setIsErrorOutline(true);
                  const validationErrors = validateFormInput(formInput);
                  setError(validationErrors);
                  const hasError = Object.values(validationErrors).some(
                    (e) => e !== ""
                  );
                  if (hasError) return;
                  if (!navigator.onLine) {
                    alert(
                      "You're offline. Please connect to the internet and try again."
                    );
                    return;
                  }
                  try {
                    const res = await fetch("/api/contact-me", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(formInput),
                    });
                    if (!res.ok) throw new Error("Network response was not ok");
                    const data = await res.json();
                    if (data.success) {
                      alert("Message sent successfully!");
                      setFormInput({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                      setIsErrorOutline(false);
                    } else {
                      alert("Failed to send. Try again later.");
                    }
                  } catch {
                    alert(
                      "Something went wrong. Please check your internet and try again."
                    );
                  }
                }}
                className="bg-gradient-to-r from-contactMePrimary to-purple-600 text-xl sm:text-2xl font-bold tracking-wide py-4 px-8 rounded-xl shadow-lg shadow-contactMePrimary/30 transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-contactMePrimary/50 active:scale-95"
              >
                Send Message
              </button>
              <p className="text-gray-300 text-sm italic text-center flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-contactMePrimary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                I usually reply within 24 hours!
              </p>
            </div>
          </TranslucentCard>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
