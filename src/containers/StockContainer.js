import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props.stocks)
    
    return (
      <div>
        <h2>Stocks</h2>
        {
 this.props.toggleIt(this.props.sortIt(this.props.stocks)).map(stock => {return <Stock key={stock.id} buyStock={this.props.buyStock } stock={stock} />})
        }
      </div>
    );
  }

}

export default StockContainer;
