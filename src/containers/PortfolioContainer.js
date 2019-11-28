import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.boughtStocks.map(stock => {
              return <div>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{stock.name}</h5>
                  <p className="card-text">{stock.ticker}:{stock.price}</p>
                  <button onClick={() => this.props.sellStock(stock)} >sell me</button>
              </div>
            </div>
            </div>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
