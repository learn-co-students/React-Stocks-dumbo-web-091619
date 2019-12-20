import React, { Component } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
	state = {
		allStocks: [],
		myStocks: [],
		addStock: {},
		isSorted: 'Alphabetically',
		isFiltered: 'All',
	}

	componentDidMount() {
		fetch('http://localhost:3000/stocks')
			.then(response => response.json())
			.then(response => {
				this.setState(previousstate => {
					return {
						allStocks: response,
					}
				})
			})
	}

	addStock = stock => {
		if (!this.state.myStocks.includes(stock)) {
			this.setState(previousstate => {
				return {
					myStocks: [...this.state.myStocks, stock],
				}
			})
		}
	}

	removeStocks = stockObj => {
		const index = this.state.myStocks.indexOf(stockObj)
		const stockPick = [...this.state.myStocks]
		stockPick.splice(index, 1)
		this.setState(previousstate => {
			return {
				myStocks: stockPick,
			}
		})
	}

	toggleIsSorted = str => {
		this.setState(previousstate => {
			return { isSorted: str }
		})
	}

	filteredStocks = str => {
		this.setState(previousstate => {
			return {
				isFiltered: str,
			}
		})
	}

	filtered = () => {
		return this.state.isFiltered === 'All' ? this.state.allStocks : this.state.allStocks.filter(
			stock => stock.type === this.state.isFiltered)
	}

	sortedAlphabetically = () => {
		if (this.state.isSorted === 'Alphabetically') {
			return [...this.filtered()].sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
		} else {
			return [...this.filtered()].sort((stockA, stockB) => stockA.price - stockB.price)
		}
	}

	render() {
		return (
			<div>
				<SearchBar
					toggleIsSorted={this.toggleIsSorted}
					isSorted={this.state.isSorted}
					filteredStocks={this.filteredStocks}
					isFiltered={this.state.isFiltered}
				/>

				<div className='row'>
					<div className='col-8'>
						<StockContainer
							allStocks={this.sortedAlphabetically()}
							addStock={this.addStock}
						/>
					</div>
					<div className='col-4'>
						<PortfolioContainer
							myStocks={this.state.myStocks}
							removeStocks={this.removeStocks}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default MainContainer
