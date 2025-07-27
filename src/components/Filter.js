import React from "react";

function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Grain">Grain</option>
        <option value="Meat">Meat</option>
      </select>
    </div>
  );
}

export default Filter;
