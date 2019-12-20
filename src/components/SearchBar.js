import React from 'react'

const SearchBar = props => {
	const onChange = event => {
		props.filteredStocks(event.target.value)
	}

	return (
		<div>
			<strong>Sort by:</strong>
			<label>
				<input
					type='radio'
					value='Alphabetically'
					checked={props.isSorted === 'Alphabetically'}
					onChange={e => props.toggleIsSorted(e.target.value)}
				/>
				Alphabetically
			</label>
			<label>
				<input
					type='radio'
					value='Price'
					checked={props.isSorted === 'Price'}
					onChange={e => props.toggleIsSorted(e.target.value)}
				/>
				Price
			</label>
			<br />

			<label>
				<strong>Filter:</strong>
				<select onChange={onChange} value={props.isFiltered}>
					<option value='All'>All</option>
					<option value='Tech'>Tech</option>
					<option value='Sportswear'>Sportswear</option>
					<option value='Finance'>Finance</option>
				</select>
			</label>
		</div>
	)
}

export default SearchBar
