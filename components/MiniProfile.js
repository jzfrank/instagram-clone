import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-betwee mt-14 ml-10">
      <img
        src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
        alt="user-image"
        className="h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">userName</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
