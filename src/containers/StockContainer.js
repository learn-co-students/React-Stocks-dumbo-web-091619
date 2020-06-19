import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
     const stockList = this.props.stocks.map(stock => 
      <Stock stock={stock} key={stock.id} addStock={this.props.addStock} />
    )

    return (
      <div>
        <h2>Stocks</h2>
        {stockList}       
      </div>
    );
  }
}


export default StockContainer;