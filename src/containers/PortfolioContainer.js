import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    const portStocks = this.props.portfolio.map(stock => 
      <Stock removeFromPort={this.props.removeFromPort} key={stock.id} stock={stock} />)
    
    return (
      <div>
        <h2>My Portfolio</h2>
          {portStocks}
      </div>
    );
  }

}

export default PortfolioContainer;
