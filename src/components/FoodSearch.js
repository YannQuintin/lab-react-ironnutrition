import React from 'react';

const FoodSearch = (props) => {
  const handleSearchInput = (e) => {
    let inputValue = e.target.value;
    props.handleFilterSearch(inputValue);
  };

  return (
    <input
      className="input"
      name="search"
      type="text"
      placeholder="Search for your food..."
      onChange={handleSearchInput}
    />
  );
};

export default FoodSearch;