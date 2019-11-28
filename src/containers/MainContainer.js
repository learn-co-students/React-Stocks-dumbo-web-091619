import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state ={
    filterToggle: " ",
    filterSort: " "
  }

  filterToggle = (value)=>{
    this.setState({
      filterToggle: value
    })
  }

  filterSort = (value) =>{
    // console.log(value)
    this.setState({
      filterSort: value
    })
  }

   toggleIt = (stocks) => {
  if (this.state.filterToggle === "Alphabetically"){
    return [...stocks].sort((a,b) => a.name.localeCompare(b.name))
  } else if (this.state.filterToggle ==="Price"){
    return [...stocks].sort((a,b) => a.price - b.price)
  }
    else {return stocks}
    }

    sortIt = (stocks) => {
    if (this.state.filterSort === "Tech"){
      return [...stocks].filter(stock => stock.type === 'Tech')
    }else if (this.state.filterSort === "Sportswear"){
      return [...stocks].filter(stock => stock.type === "Sportswear")
    } else if (this.state.filterSort === "Finance"){
      return [...stocks].filter(stock => stock.type === "Finance")
    }else {return stocks}

    }

  render() {
  
    return (
      <div>
        <SearchBar filterSort={this.filterSort} filterToggle={this.filterToggle} filterToggleStatus={this.state.filterToggle} />

          <div className="row">
            <div className="col-8">

              <StockContainer sortIt={this.sortIt} toggleIt={this.toggleIt} buyStock={this.props.buyStock}  stocks={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.props.sellStock} boughtStocks={this.props.boughtStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
