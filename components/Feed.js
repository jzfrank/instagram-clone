import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main>
      <section>
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section>
        {/* mini profile */}
        {/* suggestion */}
      </section>
    </main>
  );
};

export default Feed;
