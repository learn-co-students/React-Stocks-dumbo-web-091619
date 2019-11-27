import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    stocks: [],
    portfolioStocks: []

  }

  componentDidMount() {

    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(stocksData => {
      this.setState({
        stocks: stocksData
      }) 
    })

  }

  addPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock) 
    })
  }
  
  
  
  
  render() {
    console.log(this.state.stocks)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
