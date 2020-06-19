import React from 'react'

const Stock = ({ stock, addStock, removeStock }) => (
  <div onClick={() => addStock === undefined ? removeStock(stock) : addStock(stock)}>
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{stock.name}</h5>
        <p className='card-text'>{stock.price}</p>
      </div>
    </div>
  </div>
)

export default Stock
