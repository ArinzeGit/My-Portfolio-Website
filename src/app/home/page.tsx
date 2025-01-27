const Home = () => {
  return (
    <div className="bg-[url('/images/home-page-background.webp')] bg-top bg-cover h-full rounded-b-[12px]">
      <div className="max-w-md relative z-0 p-[30px] h-full">
        <h1 className="text-[#C0C0C0] text-4xl sm:text-5xl font-bold mb-4 font-montserrat">
          Hi, I'm Dennings Owoh, a
          <span className="text-[#3498DB]"> Frontend Developer</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-opensans">
          Where imagination meets code and dreams become reality
        </p>
        <div className="absolute inset-0 bg-[#3498DB] bg-opacity-[15%] backdrop-blur-sm z-[-1] rounded-b-[12px]"></div>
      </div>
    </div>
  );
};

export default Home;
