import React, { Component } from 'react'
import Stock from '../components/Stock'
import uuid from 'uuid'

class PortfolioContainer extends Component {
	render() {
		const renderMyStocks = this.props.myStocks.map(stock => {
			return (
				<Stock
					stock={stock}
					key={uuid()}
					handleClick={this.props.removeStocks}
				/>
			)
		})
		return (
			<div>
				<h2>My Portfolio</h2>
				{renderMyStocks}
			</div>
		)
	}
}

export default PortfolioContainer
