import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { assets } from "@/utils/asset-utils";
import { type Emoji, emojis } from "@/utils/emoji-utils";
import { cn } from "@/lib/utils";

export const EmojiRotation = ({ currentEmoji }: { currentEmoji: Emoji }) => {
  const fixedPositionsForReact = [
    { x: 100, y: 100, rotation: 30, scale: 1 },
    { x: 200, y: 200, rotation: 45, scale: 1.2 },
    { x: 300, y: 300, rotation: 60, scale: 1.4 },
    { x: 400, y: 100, rotation: 90, scale: 1.1 },
    { x: 500, y: 200, rotation: 120, scale: 1.3 }
  ];

  const fixedPositionsForQwik = [
    { x: 400, y: 100, rotation: 90, scale: 1.1 },
    { x: 500, y: 200, rotation: 120, scale: 1.3 },
    { x: 600, y: 300, rotation: 150, scale: 1.5 }
  ];

  const fixedPositionsForChrome = [
    { x: 700, y: 100, rotation: 180, scale: 1 },
    { x: 800, y: 200, rotation: 210, scale: 1.2 },
    { x: 900, y: 300, rotation: 240, scale: 1.4 }
  ];

  const getPositions = () => {
    if (currentEmoji === "react") return fixedPositionsForReact;
    if (currentEmoji === "qwik") return fixedPositionsForQwik;
    if (currentEmoji === "chrome") return fixedPositionsForChrome;
  };

  return (
    <div className="relative w-full h-full">
      {getPositions().map(({ x, y, rotation, scale }, index) => (
        <div 
          key={index} 
          style={{ 
            left: x, 
            top: y,
            transform: `rotate(${rotation}deg) scale(${scale})` 
          }} 
          className="absolute h-[80px] w-[80px]"
        >
          {emojis.map((name) => (
            <Image 
              key={name} 
              src={assets[name]} 
              className={cn(
                "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300",
                currentEmoji === name ? "opacity-100 transform-none" : "opacity-0 -translate-y-2"
              )} 
              alt="Emoji logo" 
              width="80" 
              height="80"
            />
          ))}
        </div>
      ))}
    </div>
  );
};
