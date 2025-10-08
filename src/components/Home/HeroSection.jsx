const HeroSection = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-[1500px] mx-5 md:mx-auto pt-8 md:pt-12 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-700 text-center leading-12 md:leading-16">
          We Build <br /> <span className="text-[#8452e9]">Productive </span>{" "}
          Apps
        </h1>
        <p className="text-gray-500 font-medium text-center w-full md:w-2/4 mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center gap-8 justify-center my-8">
          <a
            href="https://play.google.com/"
            target="_blank"
            className="py-2 px-8 rounded-md hover:bg-[#00b2fb] hover:text-white cursor-pointer bg-transparent border border-[#00b2fb] text-[#00b2fb] text-xl font-medium transition-all duration-500 flex items-center gap-2"
          >
            <img src="../assets/fi_16076057.png" alt="" /> Google Play
          </a>

          <a
            href="https://www.apple.com/app-store"
            target="_blank"
            className="py-2 px-8 rounded-md bg-[#00b2fb] text-white cursor-pointer hover:bg-transparent border border-[#00b2fb] hover:text-[#00b2fb] text-xl font-medium transition-all duration-500 flex items-center gap-2"
          >
            <img src="../assets/fi_5977575.png" alt="" /> App Store
          </a>
        </div>
        <div className="flex items-center justify-center mt-8">
          <img src="../assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
