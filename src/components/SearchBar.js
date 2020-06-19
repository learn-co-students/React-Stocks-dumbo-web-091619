import React from 'react';

const SearchBar = (props) => {

  const handleAlphabetizeChange = (e) => {
    if(e.target.checked===true){
      props.alphabetizeStocks()
    } else {
      props.resetStocks()
    }
  }

  const handlePriceChange = (e) => {
    if(e.target.checked===true){
      props.priceStocks()
    } else {
      props.resetStocks()
    }
  }

  const handleFilter = (e) => {
    props.filterStocks(e.target.value)
  }
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={handleAlphabetizeChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={handlePriceChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
