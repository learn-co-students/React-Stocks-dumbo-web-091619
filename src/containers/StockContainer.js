import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {

    const allStocks = this.props.stocks.map(stock => 
      <Stock key={stock.id} stock={stock} addToPort={this.props.addToPort}/>)

    return (
      <div>
        <h2>Stocks</h2>
        {allStocks}
      </div>
    );
  }

}

export default StockContainer;
