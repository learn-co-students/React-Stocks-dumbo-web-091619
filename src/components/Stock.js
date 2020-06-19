import React, { Component } from 'react';

export class Stock extends Component {

  handleClick = () => {

    if (this.props.addToPort) {
      this.props.addToPort(this.props.stock)
    } else {
      this.props.removeFromPort(this.props.stock)
    }
  }

  render() {

    const { id, ticker, name, type, price } = this.props.stock

    return (
      <div>
        <div className="card">
          <div onClick={this.handleClick} className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{ticker}: {price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock
