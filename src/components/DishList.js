import React from "react";
import DishCard from "./DishCard";

const DishList = ({ dishes, selectedDishes, onAdd, onRemove, onViewIngredients }) => {
  if (dishes.length === 0) {
    return <p className="no-items">No such item found.</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          selected={selectedDishes.includes(dish.id)}
          onAdd={onAdd}
          onRemove={onRemove}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
};

export default DishList;
