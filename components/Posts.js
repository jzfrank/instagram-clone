import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "someone",
      userImg:
        "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
      img: "https://images.unsplash.com/photo-1664440163809-25f00e4065ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      caption: "Nice sunset",
    },
    {
      id: "2",
      username: "p2",
      userImg:
        "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
      img: "https://images.unsplash.com/photo-1664216604699-d37b458f535f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      caption: "Look!",
    },
    // {
    //   id: "3",
    //   username: "someone",
    //   userImg:
    //     "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png",
    //   img: "https://images.unsplash.com/photo-1664216604699-d37b458f535f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    //   caption: "Nice sunset",
    // },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
