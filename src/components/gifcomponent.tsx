import Image from "next/image";

type GifProps = {
  src: string;
  alt: string;
};

export function GifComponent({ src, alt }: GifProps) {
        return (
        <div className="flex justify-center p-5">
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="rounded-2xl"
            />
        </div>
    );
        }