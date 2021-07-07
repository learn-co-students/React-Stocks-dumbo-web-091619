import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    stocks: [],
    portfolioStocks: [],
    filterTerm: 'All',
    sortTerm: ''

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
  this.setState((previousState) => {
    return { portfolioStocks: [...previousState.portfolioStocks, stock]
    }
  })
}

removeStock = (stock) => {
   this.setState((previousState) => {
     return { portfolioStocks: [...previousState.portfolioStocks.filter(s => s !== stock)] }
   })
}

setFilterTerm = (term) => {
  this.setState({
    filterTerm: term
  })
  
}

setSortTerm = (term) => {
  this.setState({
    sortTerm: term
  })
}


filterStocks = () => {
  let copiedStocks = [...this.state.stocks]
  if (this.state.filterTerm === "All") {
    copiedStocks = [...this.state.stocks] 
  }
    else {
      copiedStocks = this.state.stocks.filter(stock => stock.type === this.state.filterTerm)
  }

  if (this.state.sortTerm === 'Price') {
    copiedStocks.sort((stockA, stockB) => {
      return stockA.price - stockB.price 
    })
  } else if (this.state.sortTerm === 'Alphabetically') {
    copiedStocks.sort((stockA, stockB) => {
      return stockA.name.localeCompare(stockB.name)
    })
  }

  return copiedStocks
}




  
  render() {
    // console.log('MAIN CONTAINER', this.state)
    return (
      <div>
        <SearchBar 
         setFilterTerm={this.setFilterTerm} 
         term={this.state.filterTerm} 
         setSortTerm={this.setSortTerm}
         sortTerm={this.state.sortTerm}
         />

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stocks={this.filterStocks()} 
              addPortfolio={this.addPortfolio}
              />

            </div>
            <div className="col-4">
              <PortfolioContainer 
                stocks={this.state.portfolioStocks} 
                removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
