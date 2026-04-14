'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FriendsPageDetails =  () => {
  const { id } = useParams();
  const [friendDetails, setFriendDetails] = useState(null);
   useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const friendDetails = data.find(friend => friend.id === parseInt(id));
        setFriendDetails(friendDetails);
      });
  }, [id]);

  return (
    <div>
      <h1>Friend Details {id}</h1>
      {friendDetails && (
        <div>
          <p>Name: {friendDetails.name}</p>
          <p>Email: {friendDetails.email}</p>
        </div>
      )}
    </div>
  );
};

export default FriendsPageDetails;
