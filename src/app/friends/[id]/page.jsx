"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import callIcon from "../../../../public/assets/call.png";
import textIcon from "../../../../public/assets/text.png";
import videoIcon from "../../../../public/assets/video.png";

const FriendsPageDetails = () => {
  const { id } = useParams();
  const [friendDetails, setFriendDetails] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const friendDetails = data.find((friend) => friend.id === parseInt(id));
        setFriendDetails(friendDetails);
      });
  }, [id]);

  return (
    <div>
      <div className="grid grid-cols-12 container mx-auto gap-6 mt-20">
        <div className=" col-span-4">
          {friendDetails && (
            <div className="card bg-base-100 shadow-sm">
              <figure className="px-10 pt-10">
                <Image
                  src={friendDetails.image}
                  alt={friendDetails.name}
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{friendDetails.name}</h2>
                <p>{friendDetails.days_since_contact} days ago</p>
                <p>
                  {friendDetails.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge rounded-full bg-green-200 mr-1"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
                {friendDetails.status && (
                  <p
                    className={`badge rounded-full ${
                      friendDetails.status === "active"
                        ? "bg-green-400"
                        : friendDetails.status === "Almost Due"
                          ? "bg-yellow-400"
                          : friendDetails.status === "overdue"
                            ? "bg-red-400"
                            : "bg-blue-200"
                    }`}
                  >
                    {friendDetails.status}
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-4 mt-4">
            <button className="btn btn-primary">Contact Friend</button>
            <button className="btn btn-primary">Contact Friend</button>
            <button className="btn btn-primary">Contact Friend</button>
          </div>
        </div>
        <div className="col-span-8 ">
          <div className="flex gap-4">
            <div className="flex flex-col items-center py-10 w-full shadow-md">
              <span className="text-[#244D3F] text-2xl font-semibold">62</span>
              <p className="text-gray-400">Days Since Contact</p>
            </div>
            <div className="flex flex-col items-center py-10 w-full shadow-md">
              <span className="text-[#244D3F] text-2xl font-semibold">62</span>
              <p className="text-gray-400">Goal (Days)</p>
            </div>
            <div className="flex flex-col items-center py-10 w-full shadow-md">
              <span className="text-[#244D3F] text-2xl font-semibold">{friendDetails?.next_due_date}</span>
              <p className="text-gray-400">Next Due</p>
            </div>
          </div>
          <div className="flex flex-col py-6 w-full shadow-md px-4 mt-6">
            <div className="flex justify-between items-center">
              <h1>Relationship Goal Edit</h1>
              <button className="btn ml-4">Edit</button>
            </div>
            <p>
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
          <div className="flex flex-col py-6 w-full shadow-md px-4 mt-6">
            <h1 className="text-[20px] font-medium">Quick Check-In</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center py-6 mt-4 rounded-md cursor-pointer flex justify-center items-center shadow-md">
                <Image src={callIcon} alt="message" width={30} height={30} />
                <span className="ml-2">Call</span>
              </div>
              <div className="text-center py-6 mt-4 rounded-md cursor-pointer flex justify-center items-center shadow-md">
                <Image src={textIcon} alt="message" width={30} height={30} />
                <span className="ml-2">Text</span>
              </div>
              <div className="text-center py-6 mt-4 rounded-md cursor-pointer flex justify-center items-center shadow-md bg-[#ffffff]">
                <Image src={videoIcon} alt="message" width={30} height={30} />
                <span className="ml-2">Video Call</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsPageDetails;
