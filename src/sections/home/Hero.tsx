import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative top-[84px] h-[calc(100vh-84px)] bg-white font-default overflow-hidden">
      
      {/* Left Text */}
      <div className="pl-[140px] z-10 relative flex flex-col justify-center h-full">
        <h1 className="text-7xl text-default leading-tight">
          Stop just <span className="text-primary font-bold whitespace-nowrap">watching</span><br />
          Robots.<br />
          Start <span className="text-primary font-bold">making</span> it.
        </h1>
        <span>
        <button className="mt-10 bg-primary text-white text-xl px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
          Join our free demo class &gt;&gt;
        </button>
        </span>

        <p className="mt-16 text-default text-textDefaultColor font-medium">
          Trusted by
          <div className="flex items-center mt-2 space-x-4">
            <img src="src/assets/trustedBy/CIC Logo.png" alt="Logo 1" className="h-14 w-auto object-contain" />
            <img src="src/assets/trustedBy/IEEE Logo.png" alt="Logo 2" className="h-15 w-auto object-contain" />
            <img src="src/assets/trustedBy/KCMIT Logo.png" alt="Logo 3" className="h-15 w-auto object-contain" />
            <img src="src/assets/trustedBy/Pulchowk Logo.png" alt="Logo 4" className="h-13 w-auto object-contain" />
          </div>
        </p>
      </div>

      {/* Blob Video on Right */}
      <div className="absolute top-0 right-0 h-full w-auto group">
        <svg
          viewBox="0 0 570 557"
          className="h-full w-auto pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="blobClip">
              <path
                transform="scale(0.9) translate(30, 20)"
                d="M311.484 28.1784C405.397 23.4893 508.669 -28.4001 582.843 21.5524C659.193 72.9708 666.281 173.498 649.537 255.841C635.1 326.836 559.976 368.458 501.788 420.148C442.126 473.147 396.638 548.588 311.484 556.14C221.808 564.093 137.73 515.763 77.6109 457.765C20.681 402.844 1.60445 329.535 0.201692 255.841C-1.23044 180.604 3.29423 95.8058 69.7952 47.169C133.964 0.238029 227.528 32.3703 311.484 28.1784Z"
              />
            </clipPath>
          </defs>

          {/* Embed video using foreignObject */}
          <foreignObject
            width="570"
            height="557"
            clipPath="url(#blobClip)"
          >
            <video
              className="w-full h-full object-cover"
              src="src/assets/background video.mp4"
              autoPlay
              loop
              muted
            />
          </foreignObject>
        </svg>

        <svg
          className="absolute top-0 left-0 w-full h-full animate-blob-slow pointer-events-none"
          transform="translate(-15, -15)"
          width="597"
          height="573"
          viewBox="0 0 597 573"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="scale(0.95) translate(20, 10)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M323.388 29.8866C420.589 25.0797 527.477 -28.1139 604.247 23.0941C683.27 75.8049 690.606 178.859 673.276 263.271C658.333 336.051 580.579 378.719 520.355 431.708C458.604 486.039 411.524 563.377 323.388 571.118C230.572 579.271 143.552 529.726 81.3279 470.271C22.405 413.969 2.66062 338.818 1.20875 263.271C-0.273515 186.143 4.40955 99.2139 73.2386 49.3546C139.654 1.24401 236.493 34.184 323.388 29.8866Z"
            stroke="#5E07E1"
            stroke-opacity="0.4"
          />
        </svg>

        <img
          src="src/assets/100+ Students.png"
          alt="Decorative"
          className="absolute bottom-[3%] left-[40%] drop-shadow-lg transition-transform duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
        />

        <button
          className="absolute bottom-[50%] left-[-5%] text-primary opacity-90 rounded-md bg-[rgba(250,250,250,0.6)] px-4 py-2 drop-shadow-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
        >
          10 Workshops
        </button>

        <img
          src="src/assets/star.png"
          alt="Decorative"
          className="absolute top-[5%] left-[20%] drop-shadow-lg w-12 h-12 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"
        />
      </div>
    </section>
  );
};

export default Hero;
