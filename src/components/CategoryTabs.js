import React from "react";

const CategoryTabs = ({ categories, activeCategory, setActiveCategory, search, setSearch, vegOnly, setVegOnly }) => {
  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={activeCategory === cat ? "active" : ""}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={() => setVegOnly(!vegOnly)}
        />
        Veg Only
      </label>
    </div>
  );
};

export default CategoryTabs;
