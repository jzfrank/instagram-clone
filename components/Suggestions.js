import React, { useEffect, useState } from "react";
import minifaker from "minifaker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((suggestion, index) => (
        <div
          className="flex items-center justify-between mt-3"
          key={suggestion.id}
        >
          <img
            className="h-10 rounded-full border p-[2px] "
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{`user_${index}`}</h2>
            <h3 className="text-sm text-gray-400 truncate max-w-[230px]">
              {`jobTitle_${index}`}
            </h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
