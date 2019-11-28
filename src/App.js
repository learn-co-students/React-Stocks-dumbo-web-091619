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
     debugger
    const addStockArr = this.state.boughtStocks.filter(stock => stock.id !== stockToBuy.id)
     this.setState({
       boughtStocks: [...addStockArr, stockToBuy]
     })
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
