import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

export class App extends Component {
   constructor() {
      super();
      this.state = {
         robots: [],
         searchfield: ''
      };
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({ robots: users }));
   }

   onSearchChange = event => {
      const searchValue = event.target.value;
      this.setState({ searchfield: searchValue });
   };

   render() {
      const filteredRobots = this.state.robots.filter(robot => {
         return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });
      return (
         <div className="tc">
            <h1>Robot Friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
               <CardList robots={filteredRobots} />
            </Scroll>
         </div>
      );
   }
}

export default App;
