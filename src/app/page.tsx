"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { assets } from "@/utils/asset-utils";
import { type Emoji, emojis } from "@/utils/emoji-utils";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { TextRotation } from "@/components/text-rotation";
import { useRouter } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { MainNav } from "@/components/main-nav";
import { defaultConfig } from "@/config/default";
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const [currentEmoji, setCurrentEmoji] = useState<Emoji>(
    emojis[0]
  );
  const [showBackground, setShowBackground] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const rotateEmojis = () => {
      setCurrentEmoji(emojis[currentIndex]);
      currentIndex = (currentIndex + 1) % emojis.length;
    };
    const intervalId = setInterval(rotateEmojis, 1500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  const navigateTo = () => {
    buttonRef.current?.blur();
    router.push("/learn");
  }

 
  
  return (
    <main>
       <header className="container relative z-40">
       <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={defaultConfig.mainNav} />
        </div>
        </header>
      {/* Background color */}
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentEmoji === "qwik",
            "bg-yellow-300": currentEmoji === "chrome",
            "bg-green-300": currentEmoji === "react",
          }
        )}
      />
       {/* Grid */}
       <div
        style={{
          backgroundSize: "30px",
          backgroundImage: `url(${assets.square})`,
        }}
        className="fixed inset-0 opacity-30"
      />
      {/* Gradient */}
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      {/* Reveal */}
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-1000",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Content */}
      <div className="max-w-7xl  mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[80vh] relative z-10">          {/* Heading */}
      <h1   className={`text-7xl flex gap-2 max-w-3xl text-center leading-snug  ${poppins.className}`}># <TextRotation currentEmoji={currentEmoji} /></h1>
      {/* <EmojiRotation currentEmoji={currentEmoji} /> */}

          {/* Sub heading */}
          <p className="mb-8">
            <span className="text-gray-300">
              Learn....
            </span>
          </p>
          {/* Start button */}
          <div className="mb-8">
            <button
              ref={buttonRef}
              onClick={navigateTo}
              className={cn(
                "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
                {
                  "bg-purple-300": currentEmoji === "qwik",
                  "bg-yellow-300": currentEmoji === "chrome",
                  "bg-green-300": currentEmoji === "react",
                }
              )}
            >
              Start
            </button>
          </div>
        </div>
      </div>
      <SiteFooter className="relative" showModeToggle={false}/>
    </main>
  );
}