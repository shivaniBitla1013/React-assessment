import React from "react";
import defaultDishImg from "../assets/images/OIP (1).jpg";

const DishCard = ({ dish, onAdd, onRemove, onViewIngredients, selected }) => {
  return (
    <div className="dish-card">
      {/* <img src={dish.image || defaultDishImg} alt={dish.name} /> */}
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <div>
        {selected ? (
          <button onClick={() => onRemove(dish.id)}>Remove</button>
        ) : (
          <button onClick={() => onAdd(dish.id)}>Add</button>
        )}
        <button onClick={() => onViewIngredients(dish)}>Ingredients</button>
      </div>
    </div>
  );
};

export default DishCard;
