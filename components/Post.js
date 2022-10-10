import React from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

const Post = ({ id, username, img, userImg, caption }) => {
  const { data: session } = useSession();
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="h-12 rounded-full object-cover border p-1"
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img src={img} alt="" className="object-cover w-full" />

      {/* Post Buttons */}
      {session && (
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleLeftEllipsisIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Post Comment */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        <span>{caption}</span>
      </p>

      {/* Post Input Box */}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7 cursor-pointer" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment"
          />
          <button className="text-blue-400 font-bold">Post</button>
        </form>
      )}
    </div>
  );
};

export default Post;
