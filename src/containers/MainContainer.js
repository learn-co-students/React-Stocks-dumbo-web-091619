import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(data => {
      this.setState({
        stocks: data,
        displayStocks: data
      })
    })
  }

  // takes a single 'stock' object as argument
  addToPort = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }
  }
  
  removeFromPort = (stock) => {
    this.setState({ 
      portfolio: [...this.state.portfolio].filter(port => port !== stock)
    })
  }

  sortStocks = (parameter) => {
    let arr = []
    switch(parameter){
      case "Alphabetically":
        arr = this.state.stocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break
      case "Price":
        arr = this.state.stocks.sort((a, b) => a.price > b.price ? 1 : -1)
        break
    }
    this.setState({
      displayStocks: arr
    })
  }

  filterStocks = (paramter) => {
    this.setState({
      displayStocks: this.state.stocks.filter(stock => stock.type === paramter)
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">
              <StockContainer addToPort={this.addToPort} stocks={this.state.displayStocks}/>
            </div>
            <div className="col-4">
              <PortfolioContainer removeFromPort={this.removeFromPort} portfolio={this.state.portfolio}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
