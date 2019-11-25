import React from 'react';

class SearchBar extends React.Component {


  handleChange = (event) => {
    this.props.sortStocks(event.target.value)
  }

  handleFilter = (event) => {
    this.props.filterStocks(event.target.value)
  }

  render(){
    return (
      <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={this.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={this.handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
    )
  }
}

export default SearchBar;
