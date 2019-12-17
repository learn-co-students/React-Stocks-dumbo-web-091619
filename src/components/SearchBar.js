import React from 'react';

const SearchBar = (props) => {

  const onChange = (event) => {
    props.changeFilter(event.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.alphaTrue} onChange={props.toggleSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={!props.alphaTrue} onChange={props.toggleSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={onChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
