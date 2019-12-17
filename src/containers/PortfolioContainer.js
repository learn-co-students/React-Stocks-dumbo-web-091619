import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const stockList = this.props.myStocks.map(stock => 
      <Stock stock={stock} key={stock.id} removeStock={this.props.removeStock} />
    )
    return (
      <div>
        <h2>My Portfolio</h2>
          { stockList }
      </div>
    );
  }

}

export default PortfolioContainer;
