"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  require("../public/pexels-1.jpg"),
  require("../public/pexels-2.jpg"),
  require("../public/pexels-3.jpg"),
  require("../public/pexels-4.jpg"),
  require("../public/pexels-5.jpg"),
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <>
      <div className="fixed flex flex-row min-h-screen w-full px-5">
        <div
          className="fixed flex left-0 w-[12%] hover:bg-white/20 min-h-screen cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            className="w-[4rem]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.509 9.509 0 0 0 12 2.5Zm1.71 11.79a1.008 1.008 0 0 1 0 1.42 1.014 1.014 0 0 1-1.42 0l-3-3a1.008 1.008 0 0 1 0-1.42l3-3a1 1 0 0 1 1.42 1.42L11.41 12Z" />
          </svg>
        </div>

        <div
          className="fixed flex justify-end right-0 w-[12%] hover:bg-white/20 min-h-screen pr-4 cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            className="w-[4rem]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.509 9.509 0 0 0 12 2.5Zm2.71 10.21-3 3a1.014 1.014 0 0 1-1.42 0 1.008 1.008 0 0 1 0-1.42l2.3-2.29-2.3-2.29a1 1 0 0 1 1.42-1.42l3 3a1.008 1.008 0 0 1 0 1.42Z" />
          </svg>
        </div>
      </div>

      <div className="flex min-h-screen w-full z-10 overflow-hidden">
        {images.map(
          (image, index) =>
            current === index && (
              <div key={index} className="h-full w-full object-cover">
                <Image
                  width={600}
                  height={400}
                  src={image}
                  alt="images"
                  className="w-full"
                  priority={false}
                />
              </div>
            )
        )}
      </div>
    </>
  );
}
