import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks:[],
    myStocks: [],
    filter: "Tech",
    sortByAlpha: true,
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(stocks => {this.setState({ stocks: stocks })
    })
  }

  addStock = (obj) => {
    if(!this.state.myStocks.includes(obj)){
      this.setState({
        myStocks: [...this.state.myStocks, obj]
      })
    }
  }

  removeStock = (obj) => {
    if(this.state.myStocks.includes(obj)){
      this.setState({
        myStocks: [...this.state.myStocks.filter(stock => stock !== obj)]
      })
    }
  }
  
  changeFilter = (value) => this.setState({ filter: value})
  
  toggleSort = () => this.setState({ sortByAlpha: !this.state.sortByAlpha })
  

  render() {
    const {stocks, filter, myStocks, sortByAlpha} = this.state
    const filteredStocks = stocks.filter(stock => stock.type === filter)
    if (sortByAlpha) filteredStocks.sort((stock1, stock2) => stock1.name.localeCompare(stock2.name))
    else filteredStocks.sort((stock1, stock2) => stock1.price - stock2.price)


    return (
      <div>
        <SearchBar changeFilter={this.changeFilter} toggleSort={this.toggleSort} alphaTrue={this.state.sortByAlpha} />

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={filteredStocks} addStock={this.addStock} filter={filter} />
            </div>
            <div className="col-4">
              <PortfolioContainer myStocks={myStocks} removeStock={this.removeStock} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;