import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

//const business = {
//	imgSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//	name: 'MarginOtto Pizzeria',
//	address: '1010 Padington Way',
//	city: 'Flavortown',
//	state: 'NY',
//	zipCode: '10101',
//	category: 'Italian',
//	rating: 4.5,
//	reviewCount: 90
//};

//let businesses = [
//	business,
//	business,
//	business,
//	business,
//	business,
//	business
//];

class App extends Component {
	constructor() {
		super();
		this.state = {
			businesses: []
		};
		this.searchYelp = this.searchYelp.bind(this);
	}
	
	searchYelp(term, location, sortBy) {
//		console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
		Yelp.search(term, location, sortBy)
		.then(businesses => {
//			console.log(businesses);
			this.setState({businesses})});
	}
	
  render() {
		console.log()
    return (
      <div className='App'>
				<h1>ravenous</h1>
				<SearchBar searchYelp={this.searchYelp}/>
				<BusinessList businesses={this.state.businesses}/>
			</div>
    );
  }
}

export default App;
