import React, { Component } from 'react';
import PortfolioStock from '../components/PortfolioStock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.props.portfolio.map(stock => {
             return <PortfolioStock stock={stock} removeFromPortfolio={this.props.removeFromPortfolio}/>
           })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
