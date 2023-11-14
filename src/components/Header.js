import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full h-14 opacity-95 bg-white bg-opacity-5 rounded-xl border border-white backdrop-blur-3xl mt-[40px]">
        <div className="w-full h-full justify-center flex items-center gap-16 ">
          <div class="text-white text-lg font-normal font-['Poppins']">
            Home
          </div>
          <div className="text-white text-lg font-normal font-['Poppins']">
            Game Guide
          </div>
          <div className="text-white text-lg font-normal font-['Poppins']">
            About Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
