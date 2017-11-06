import React from 'react';

import './SearchBar.css';

// GET https://api.yelp.com/v3/businesses/search

const sortOptions = {
	'Best match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
	renderSortByOptions() {
		return
			Object.keys(sortOptions)
				.map(sortOption => {
					let sortOptionValue = sortOptions[sortOption];
					return <li key={sortOptionValue}>{sortOptionValue}</li>
				});
	}
	
	render() {
		return (
			<div className='SearchBar'>
				<div className='SearchBar-sort-options'>
					<ul>
						{this.renderSortByOptions()}
					</ul>
				</div>
				<div className='SearchBar-fields'>
					<input placeholder='Search Businesses' />
					<input placeholder='Where?' />
				</div>
				<div className='SearchBar-submit'>
					<a>Let's Go</a>
				</div>
			</div>
		);
	};
}

export default SearchBar;