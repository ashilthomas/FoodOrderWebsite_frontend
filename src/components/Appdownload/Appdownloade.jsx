import React from "react";

function Appdownloade() {
  return (
    <div className=" mt-10 px-4 bg-orange-500">
        <div className="max-w-[1300px] mx-auto py-14">

       
      <div className="flex flex-col md:flex-row   max-w-[900px] mx-auto  ">
        <img
          className="w-full md:w-1/4 mb-4 md:mb-0"
          src="https://themes.pixelstrap.net/zomo/assets/images/service-phone.png"
          alt="Service Phone"
        />
        <div className="w-full  flex flex-col  justify-center ml-8">
          <h2 className="font-bold text-white md:text-3xl text-2xl">Zomo App : Online & Mobile Ordering</h2>
          <p className="text-sm">Get the app for free and place takeout orders online whenever you want.</p>
          <div className="flex gap-6 my-4">
            <img className="sm:w-40 w-28" src="https://themes.pixelstrap.net/zomo/assets/images/svg/app-store.svg" alt="" />
            <img className="sm:w-40 w-28" src="https://themes.pixelstrap.net/zomo/assets/images/svg/google-play.svg" alt="" />
          </div>
        </div>
      </div> 
      </div>
    </div>
  );
}

export default Appdownloade;

