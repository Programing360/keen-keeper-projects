import React from "react";

const Banner = () => {
  return (
    <div className="w-full text-center">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="text-[#64748B] py-5">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className=" bg-[#244D3F] text-white py-2 px-4 rounded-md hover:bg-[#1a3d2d]">
        Add a Friend
      </button>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto gap-4 mt-15 lg:w-6xl ">
        <div className="flex flex-col items-center py-6 w-full rounded-md shadow-md" >
            <span className="text-3xl font-bold">10</span>
            <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="flex flex-col items-center rounded-md shadow-md py-6 w-full " >
            <span className="text-3xl font-bold">3</span>
            <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="flex flex-col items-center rounded-md shadow-md py-6 w-full" >
            <span className="text-3xl font-bold">6</span>
            <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="flex flex-col items-center rounded-md shadow-md py-6 w-full" >
            <span className="text-3xl font-bold">12</span>
            <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>
      <hr className="my-10 text-gray-300" />
    </div>
  );
};

export default Banner;
