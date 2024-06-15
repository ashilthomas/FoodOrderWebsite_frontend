import React from "react";

function Hero() {
  return (
    <div
      className="bg-cover bg-center h-96 w-full  rounded"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3564599/pexels-photo-3564599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      

       
      <div className="max-w-[1300px] mx-auto px-5  flex flex-col justify-center  h-full padding">
        <h2 className="md:text-5xl text-2xl sm:w-1/2  font-bold text-neutral-50 ">
          Order your favourite food here
        </h2>
        <p className="text-sm mt-5  text-neutral-50 sm:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          quaerat repellat, aspernatur laudantium ex dignissimos voluptatem
          ratione veniam consequuntur eius?
        </p>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 w-48 mt-5 rounded-lg">
          view more
        </button>
      </div> 
     
    </div> 
  );
}

export default Hero;
