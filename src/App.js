import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    filteredStocks: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(stocks => {
      this.setState({
        stocks: stocks,
        filteredStocks: stocks
      })
    })
  }

  buyStock = (stock) => {
    if(!this.state.portfolioStocks.includes(stock)){
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    }
   
  }

  sellStock = (stock) => {
    const newStocks = this.state.portfolioStocks.filter((eachStock) => {
      return eachStock !== stock
    })
    this.setState({
      portfolioStocks: newStocks
    })
  }

  sortByValue = (event) => {
    const sortCriterion = event.target.value
    const newStocks = this.state.filteredStocks.sort((stockA, stockB) => {
      return stockA[sortCriterion] > stockB[sortCriterion] ? 1 : -1
    })
    this.setState({
      filteredStocks: newStocks
    })
  }

  filterStocks = (event) => {
    const filterCriterion = event.target.value
    const newStocks = this.state.stocks.filter((stock) => {
      return stock.type === filterCriterion
    })
    this.setState({
      filteredStocks: newStocks
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.filteredStocks} buyStock={this.buyStock} sellStock={this.sellStock} portfolioStocks={this.state.portfolioStocks} sortByValue={this.sortByValue} filterStocks={this.filterStocks}/>
      </div>
    );
  }
}

export default App;
