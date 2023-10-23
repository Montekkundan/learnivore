import Image from "next/image";
import { useState } from "react";

type GifProps = {
    src: string;
    alt: string;
  };
  
  export function GifComponent({ src, alt }: GifProps) {
    const [isPopup, setPopup] = useState(false);
  
    return (
      <>
        <div className="flex justify-center p-5" onClick={() => setPopup(true)}>
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className="rounded-2xl"
            loading="lazy"
          />
        </div>
  
        {isPopup && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setPopup(false)}
          >
            <div className="relative">
              <button
                className="absolute top-0 right-0 p-2 bg-white"
                onClick={() => setPopup(false)}
              >
                X
              </button>
              <Image
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                className="rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </>
    );
  }