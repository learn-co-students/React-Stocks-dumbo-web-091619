import React from 'react'

export default function Stock(props) {
	const { stock } = props

	return (
		<div className='card'>
			<div className='card-body' onClick={() => props.handleClick(props.stock)}>
				<h2 className='card-title'>{stock.name}</h2>
				<h5 className='card-title'>{stock.ticker}</h5>
				<p className='card-text'>{stock.price}</p>
				<p className='card-text'>{stock.type}</p>
			</div>
		</div>
	)
}
