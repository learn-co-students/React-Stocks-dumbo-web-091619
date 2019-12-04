import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {
   

    const renderStocks = () => {
      return this.props.stocks.map( stock => {
        return <Stock stock={stock} 
          key={stock.id} 
          handleClick={this.props.addPortfolio}/> 
      })
    }
    
    return (
      <div>
        <h2>Stocks</h2>
        {renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
