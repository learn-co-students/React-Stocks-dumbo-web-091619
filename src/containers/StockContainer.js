import React, { Component } from 'react'
import Stock from '../components/Stock'
import uuid from 'uuid'

class StockContainer extends Component {
	render() {
		const renderStocks = this.props.allStocks.map(stock => {
			return (
				<Stock stock={stock} key={uuid()} handleClick={this.props.addStock} />
			)
		})
		return (
			<div>
				<h2>Stocks</h2>
				{renderStocks}
			</div>
		)
	}
}

export default StockContainer
