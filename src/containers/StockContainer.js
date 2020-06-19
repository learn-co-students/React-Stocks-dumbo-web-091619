import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {

    const allStocks = this.props.stocks.map((stock) => {
      return(
        <Stock stock={stock} buyStock={this.props.buyStock} key={stock.id}/>
      )
    })

    return (
      <div>
        <h2>Stocks</h2>
        {
          allStocks
        }
      </div>
    );
  }

}

export default StockContainer;
