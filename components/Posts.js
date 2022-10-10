import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImage}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
