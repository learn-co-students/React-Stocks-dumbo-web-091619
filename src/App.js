import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import { ENGINE_METHOD_ALL } from 'constants';

class App extends Component {
  
  state = {
    stocks: [],
    boughtStocks: [],
  
  }

  sellStock = (stockToRemove) => {
    console.log(stockToRemove)
    const removedStockArray = this.state.boughtStocks.filter(stock => stock.id !== stockToRemove.id)
    this.setState({
      boughtStocks: removedStockArray
    })
  }

   buyStock = (stockToBuy) => {
     
    const findStock = this.state.boughtStocks.find(stock => stock.id === stockToBuy.id)
    if (!findStock) {
      this.setState({
        boughtStocks: [...this.state.boughtStocks, stockToBuy]
      })
    }
   } 

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        stocks: data
      })
    })

  }
  
  
  render() {
    return (
      <div>
        <Header/>
        <MainContainer sellStock={this.sellStock} boughtStocks={this.state.boughtStocks} buyStock={this.buyStock}   stocks={this.state.stocks}/>
      </div>
    );
  }
}

export default App;
