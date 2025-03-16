"use client";
import { useThemeColor } from "@/app/context/ThemeContext";
import TranslucentCard from "@/components/TranslucentCard";

const ContactMe = () => {
  const themeColor = useThemeColor();
  return (
    <div className="bg-[url('/images/contact-me-page-background.webp')] bg-cover bg-center min-h-full pt-[85px]">
      <div
        className="w-[max(80vw,870px)] sm:h-[max(calc(35vw-85px),500px)] overflow-auto scrollbar-thin"
        style={{
          scrollbarColor: `${themeColor} #1F1F1F`, // Set thumb color and track color
        }}
      >
        <div className="h-[165%] flex flex-col justify-evenly items-center">
          <TranslucentCard className="text-[80px] bg-contactMePrimary">
            <p>This page is coming soon</p>
          </TranslucentCard>
          <TranslucentCard className="text-[80px] bg-contactMePrimary">
            <p>This page is coming soon</p>
          </TranslucentCard>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
