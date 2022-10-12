import { useSession, signOut } from "next-auth/react";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between ">
      <img
        src={session?.user.image}
        alt="user-image"
        className="h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="font-semibold text-blue-400 text-sm">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
