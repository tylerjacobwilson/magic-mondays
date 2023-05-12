import React from "react";

const Card = ({ card }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={card.imageUrl} alt={card.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.name}</div>
        <p className="text-gray-700 text-base">{card.text}</p>
      </div>
    </div>
  );
};

export default Card;
