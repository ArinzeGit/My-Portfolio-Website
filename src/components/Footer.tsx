"use client";
import { useEffect, useRef, useState } from "react";
import { useThemeColor } from "@/app/context/ThemeContext";
import { hexToRgb } from "@/utils/colorUtils";

const Footer = () => {
  const themeColor = useThemeColor();
  const themeColorRef = useRef(themeColor); // Store latest themeColor
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let animationFrameId: number;

  // Update themeColorRef when themeColor changes
  useEffect(() => {
    themeColorRef.current = themeColor;
  }, [themeColor]);

  useEffect(() => {
    const canvas = canvasRef.current!;

    const ctx = canvas.getContext("2d")!; // To bypass typescript saying ctx may be null because it cannot since `if (!ctx) return;` is there

    canvas.width = 550;
    canvas.height = 38;

    const box1 = {
      x: 10,
      y: 4,
      width: 192,
      height: 30,
      speed: 0.2,
      text: "Designed and built",
    };

    const box2 = {
      x: 250,
      y: 4,
      width: 135,
      height: 30,
      speed: 0.3,
      text: "from scratch,",
    };

    const box3 = {
      x: 420,
      y: 4,
      width: 77,
      height: 30,
      speed: 0.5,
      text: "by me.",
    };

    function drawBox(box: {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
      text: string;
    }) {
      // Add glow effect
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgb(188,182,166)";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Draw rounded rectangle
      ctx.fillStyle = "#191932";
      ctx.lineJoin = "round";
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.roundRect(box.x, box.y, box.width, box.height, 15);
      ctx.fill();

      // Reset shadow for text
      ctx.shadowBlur = 0;
      ctx.fillStyle = themeColorRef.current; // We must use a reference to access the themeColor state within canvas
      ctx.font = "18px Montserrat, sans-serif";
      ctx.fillText(box.text, box.x + 10, box.y + 22);
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      box1.x += box1.speed;
      box2.x += box2.speed;
      box3.x += box3.speed;

      // Collision Detection between box1 and box2
      if (box1.x + box1.width >= box2.x && box1.x <= box2.x + box2.width) {
        if (box1.speed > 0 && box2.speed < 0) {
          box1.speed *= -1;
          box2.speed *= -1;
        } else if (Math.abs(box1.speed) > Math.abs(box2.speed)) {
          box1.speed *= -1;
        } else {
          box2.speed *= -1;
        }
      }

      // Collision Detection between box2 and box3
      if (box2.x + box2.width >= box3.x && box2.x <= box3.x + box3.width) {
        if (box2.speed > 0 && box3.speed < 0) {
          box2.speed *= -1;
          box3.speed *= -1;
        } else if (Math.abs(box2.speed) > Math.abs(box3.speed)) {
          box2.speed *= -1;
        } else {
          box3.speed *= -1;
        }
      }

      // Bouncing at edges
      if (box1.x <= 0 || box1.x + box1.width >= canvas.width) box1.speed *= -1;
      if (box2.x <= 0 || box2.x + box2.width >= canvas.width) box2.speed *= -1;
      if (box3.x <= 0 || box3.x + box3.width >= canvas.width) box3.speed *= -1;

      ctx.fillStyle = bgColorRef.current; // We must use a reference to access the bgColor state within canvas
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawBox(box1);
      drawBox(box2);
      drawBox(box3);

      animationFrameId = requestAnimationFrame(update);
    }

    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  const [bgColor, setBgColor] = useState("rgba(188, 182, 166, 0.1)");
  const bgColorRef = useRef(bgColor); // Store latest bgColor

  // Update bgColorRef when bgColor changes
  useEffect(() => {
    bgColorRef.current = bgColor;
  }, [bgColor]);

  useEffect(() => {
    if (themeColor) {
      const rgbColor = themeColor.startsWith("#")
        ? hexToRgb(themeColor)
        : themeColor;
      setBgColor(`rgba(${rgbColor.replace(/[^\d,]/g, "")}, 0.1)`);
    }
  }, [themeColor]);

  return (
    <canvas
      ref={canvasRef}
      className=" rounded-[20px] backdrop-blur-md border border-[rgb(188,182,166)]"
    />
  );
};

export default Footer;
