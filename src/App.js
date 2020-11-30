import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Category from './components/pages/Category'
import Search from './components/pages/Search'
import SearchForm from './components/controls/SearchForm'


class App extends Component {
  	render() {
    	return (
      		<BrowserRouter>
        		<div className="App">
          			<Navbar />
          			<SearchForm />
          			<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/page/search" component={Search} />
						<Route path="/:id" component={Category} />
          			</Switch>
					<Footer />
        		</div>
      		</BrowserRouter>
    	);
  	}
  
}

export default App;
