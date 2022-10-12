import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);
  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8
     border-gray-200 border overflow-x-scroll rounded-md scrollbar-none"
    >
      {session && (
        <Story
          username={session.user.username}
          img={session.user.image}
          isUser={true}
        />
      )}
      {storyUsers.map((user, index) => (
        <Story key={user.id} username={`user_${index}`} img={user.img} />
      ))}
    </div>
  );
};

export default Stories;
