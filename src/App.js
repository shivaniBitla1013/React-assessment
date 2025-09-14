import React, { useState } from "react";
import { mockDishes } from "./data/mockDishes";
import CategoryTabs from "./components/CategoryTabs";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT"];
  const [activeCategory, setActiveCategory] = useState("STARTER");
  const [search, setSearch] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [modalDish, setModalDish] = useState(null);

  const filteredDishes = mockDishes.filter((dish) => {
    const matchesCategory = dish.mealType === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase());
    const matchesVeg = vegOnly ? dish.type === "VEG" : true;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const handleAdd = (id) => setSelectedDishes([...selectedDishes, id]);
  const handleRemove = (id) => setSelectedDishes(selectedDishes.filter((d) => d !== id));

  return (
    <div className="App">
      <h1>Party Menu Selection App</h1>
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        search={search}
        setSearch={setSearch}
        vegOnly={vegOnly}
        setVegOnly={setVegOnly}
      />
      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onViewIngredients={setModalDish}
      />
      <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />
    </div>
  );
}

export default App;
