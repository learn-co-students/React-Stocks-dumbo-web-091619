import React from 'react'

function Stock (props) {
  const {name, ticker, price} = props.stock
  
  const handleClick = () => {
    (props.addStock ? props.addStock(props.stock) : props.removeStock(props.stock))
  }

  return (
    
  <div>
    <div className="card">
      <div className="card-body" onClick={handleClick}>
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            `${ticker}: ${price}`
          }</p>
      </div>
    </div>
  </div>
  )
 };

export default Stock