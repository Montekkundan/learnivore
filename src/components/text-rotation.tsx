import Image from "next/image";
import { assets } from "@/utils/asset-utils";
import { type Emoji, emojis } from "@/utils/emoji-utils";
import { cn } from "@/lib/utils";

export const TextRotation  = ({
  currentEmoji,
}: {
  currentEmoji: Emoji;
}) => {const textMap = {
  "react": "Learn",
  "chrome": "Grow",
  "qwik": "Share",
    
    
  };
  
  return (
    <div className="text-7xl max-w-3xl text-center leading-snug mb-12">
      {textMap[currentEmoji]}
    </div>
  );
};