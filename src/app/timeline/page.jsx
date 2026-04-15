"use client";
import { AuthContext } from "@/component/ContextProvider/AuthProvider";
import Image from "next/image";
import React, { useContext } from "react";

const TimeLinePage = () => {
  const { selectedFriend } = useContext(AuthContext);
  const date = new Date();
  const time = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-4xl font-bold">Timeline </h1>
      <select defaultValue="Server location" className="select select-neutral outline-0">
        <option disabled={true}>Server location</option>
        <option>North America</option>
        <option>EU west</option>
        <option>South East Asia</option>
      </select>
        {
            selectedFriend.length === 0 && <p className="text-gray-500 mt-24 text-center">No activities yet. Add some from friend details page.</p>
        }
      <div>
        {selectedFriend.map((friend, idx) => (
          <div key={idx} className=" my-6 p-4 shadow-md rounded-2xl flex items-center gap-4">
            <div>
              <Image
                src={friend.image}
                alt={friend.name}
                width={60}
                height={60}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">{friend.actiontype} with {friend.name}</h1>
              <p className="text-gray-500">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLinePage;
