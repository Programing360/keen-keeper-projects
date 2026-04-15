"use client";
import { AuthContext } from "@/component/ContextProvider/AuthProvider";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const TimeLinePage = () => {
  const { selectedFriend } = useContext(AuthContext);
  const [originalData, setOriginalData] = useState([]);
  const date = new Date();
  const time = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    setOriginalData(selectedFriend);
  }, [selectedFriend]);

  const handleSortData = (e) => {
    const type = e.target.value;
    if (type.toLowerCase() === "all") {
      setOriginalData(selectedFriend);
      return;
    }

    const filteredData = selectedFriend.filter(
      (friend) => friend.actiontype.toLowerCase() === type.toLowerCase(),
    );

    setOriginalData(filteredData);
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-4xl font-bold">Timeline </h1>
      <select
        onChange={handleSortData}
        defaultValue="all"
        className="select select-neutral outline-0 mt-4"
      >
        <option disabled={true}>Selected</option>
        <option>All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="Video Call">Video</option>
      </select>
      {originalData.length === 0 && (
        <p className="text-gray-500 mt-24 text-center">
          No activities yet. Add some from friend details page.
        </p>
      )}
      <div>
        {originalData.map((friend, idx) => (
          <div
            key={idx}
            className=" my-6 p-4 shadow-md rounded-2xl flex items-center gap-4"
          >
            <div>
              <Image
                src={friend.image}
                alt={friend.name}
                width={60}
                height={60}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                {friend.actiontype} with {friend.name}
              </h1>
              <p className="text-gray-500">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLinePage;
