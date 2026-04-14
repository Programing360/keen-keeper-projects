"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="mt-30">
      <h1 className="text-3xl font-bold">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {friends.map((friend, idx) => (
          <div key={idx} className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src={friend.image}
                alt={friend.name}
                className="rounded-full"
                width={100}
                height={100}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{friend.name}</h2>
              <p>
             {friend.days_since_contact} days ago
              </p>
              <p>{friend.tags.map((tag, idx) => (
                <span key={idx} className="badge rounded-full bg-green-200 mr-1">
                  {tag}
                </span>
              ))}</p>
              {friend.status && (
                <p className={`badge rounded-full ${
                  friend.status === "active" ? "bg-green-400" :
                  friend.status === "Almost Due" ? "bg-yellow-400" :
                  friend.status === "overdue" ? "bg-red-400" :
                  "bg-blue-200"
                }`}>
                  {friend.status}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
