import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    isAlphabetical: true,
    selectValue: 'Tech',
    myStocks: []
  }

  changeIsAlphabetical = () => this.setState({isAlphabetical: !this.state.isAlphabetical} )
  changeSelectValue = (event) => this.setState({selectValue: event.target.value}) 
  
  addToMyStocks = (stock) => {
    const { myStocks } = this.state
    if (!myStocks.includes(stock)) this.setState({myStocks: [...myStocks, stock]})
  }

  removeToMyStocks = (stockToRemove) => {
    const {myStocks} = this.state
    this.setState({
      myStocks: myStocks.filter(stock => stock.id !== stockToRemove.id)
    })
  }

  componentDidMount () {
    fetch('http://localhost:3000/stocks') //eslint-disable-line
      .then(response => response.json())
      .then(stocks => this.setState({stocks}))
  }

  render () {
    const { stocks, selectValue, isAlphabetical, myStocks } = this.state
    const filteredStocks = stocks.filter(stock => stock.type === selectValue )
  
    if (isAlphabetical) filteredStocks.sort((s1, s2) => s1.name.localeCompare(s2.name))
    else filteredStocks.sort((s1, s2) => s1.price - s2.price)
    return (
      <div>
        <SearchBar
          isAlphabetical={this.state.isAlphabetical}
          onChangeChecked={this.changeIsAlphabetical}
          defaultSelectValue={this.state.selectValue}
          changeSelectValue={this.changeSelectValue}
        />

        <div className='row'>
          <div className='col-8'>

            <StockContainer addStock={this.addToMyStocks} stocks={filteredStocks}/>

          </div>
          <div className='col-4'>
            <PortfolioContainer removeStock={this.removeToMyStocks} stocks={myStocks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer;
