import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();
  return (
    <main
      className={` 
      p-5 grid ${
        session
          ? "grid-cols-1 lg:grid-cols-3 lg:max-w-6xl mx-auto"
          : "grid-cols-1 lg:grid-cols-2 lg:max-w-3xl mx-auto"
      } `}
    >
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section
        className="hidden 
      md:col-span-1 md:inline-grid ml-10 mt-8"
      >
        <div className="fixed max-w-[380px] bg-white rounded-md p-8">
          {/* mini profile */}
          <MiniProfile />
          {/* suggestion */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
