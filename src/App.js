
import {Component} from 'react';
import './App.css';
import { CardList } from "./component/card-list/card-list.component";

import { Search } from './component/search-component/search.component';
class App extends Component
{
  constructor()
  {
    super();
    this.state = {
          monsters: [],
          searchInput: ''
          
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
    .then(users=>this.setState({monsters: users}));
  }
  render()
  {
    const {monsters, searchInput} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return(
      <div className="App">
      <div ><h1 style = {{fontSize : 72, fontFamily: 'Bigelow Rules',   color: '#0ccac4'}}>Monsters Rolodex</h1></div>
       <Search 
         placeholder ='Enter monster'
         handleChange = {e => this.setState({searchInput: e.target.value}
       )}
       />
    
      <CardList monsters = {filteredMonsters}>
      </CardList>
    </div>
    );
  
}
}
  

export default App;
