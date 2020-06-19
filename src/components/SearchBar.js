import React from 'react';

const SearchBar = ({ isAlphabetical, onChangeChecked, defaultSelectValue, changeSelectValue }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type='radio' value='Alphabetically' checked={isAlphabetical} onChange={onChangeChecked} />
        Alphabetically
      </label>
      <label>
        <input type='radio' value='Price' checked={!isAlphabetical} onChange={onChangeChecked} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={changeSelectValue} value={defaultSelectValue}>
          <option value='Tech'>Tech</option>
          <option value='Sportswear'>Sportswear</option>
          <option value='Finance'>Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
