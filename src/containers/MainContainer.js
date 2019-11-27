import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    stocksDisplay: [],
    portfolio: [],
  }

  componentDidMount = async () => {
    let rawStocks = await fetch('http://localhost:3000/stocks')
    let stocks = await rawStocks.json()
    this.setState({
      stocks,
      stocksDisplay: stocks
    })
    console.log(this.state.stocksDisplay)
  }

  addToPortfolio = (selectedStock) => {
    this.setState({
      portfolio: [...this.state.portfolio, selectedStock]
    })

  }

  removeFromPortfolio = (selectedStock) => {
    let currentPortfolio = this.state.portfolio.filter(stock => {
      return stock.id !== selectedStock.id
    })
    this.setState({
      portfolio: currentPortfolio
    }) 
  }

  alphabetizeStocks = () => {
    let alphabetizedStocks = [...this.state.stocks].sort(
      (a, b) => {
        if(a.name < b.name) { return -1 }
        if(a.name > b.name) { return 1 }
        return 0
      }
    )
    this.setState({
      stocksDisplay: alphabetizedStocks
    })
  }

  priceStocks = () => {
    let pricedStocks = [...this.state.stocks].sort(
      (a, b) => {
        if(a.price < b.price) { return -1 }
        if(a.price > b.price) { return 1 }
        return 0
      }
    )
    this.setState({
      stocksDisplay: pricedStocks
    })
  }

  resetStocks = () => {
    this.setState({
      stocksDisplay: this.state.stocks
    })
    console.log(this.state.stocksDisplay)
  }

  filterStocks = (filterValue) => {
    let filteredStocks = this.state.stocks.filter(stock => {
        return stock.type === filterValue
      })
      this.setState({
      stocksDisplay: filteredStocks
    })
  }
 

  render() {
    return (
      <div>
        <SearchBar alphabetizeStocks={this.alphabetizeStocks} priceStocks={this.priceStocks} resetStocks={this.resetStocks} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocksDisplay={this.state.stocksDisplay} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
