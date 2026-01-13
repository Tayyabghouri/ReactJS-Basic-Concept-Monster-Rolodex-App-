import logo from './logo.svg';
import './App.css';
import { Component, useEffect } from 'react';
import { useState } from "react";
import Practice from './Practice';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
// function App() {
//   const [fruit, setFruit] = useState("Mango"); // first param conatain state  value and 2nd will be fucntion  update value
//   // let fruit = "Mango";


//   const changeFruit = () => {
//     setFruit("Orange");
//   }
//   // const changeFruit = () => {
//   //     fruit = "Orange";
//   //     console.log(fruit); 
//   // }
//   return (
//     <div>
//       <h1> {fruit} </h1>
//       <button onClick={changeFruit}>ChangeFruit Name</button>
//     </div>
//   )
// }

// export default App;



//functional component
const App = () => {
  const [searchField, setSearchField] = useState(''); //give us two vallues bakc array first is state value and second is function to update the state value. [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  // sideeffect is some behavior that happens outside of scope of our component  use e.g effect hook


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users)
      );
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter(
      (monster) => { return monster.name.toLowerCase().includes(searchField); }
    );
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchValues = event.target.value.toLowerCase();
    setSearchField(searchValues);
  }



  return (
    <div className="App">
      <h1 className='app-title'>React First Application</h1>
      <SearchBox className={"monster-search-box"} placeholder={'search monsters'} onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />

    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: {
//         firstName: 'Tayyab',
//         lastName: 'Mehmood'
//       }
//     }
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(
//         () => {
//           return { monsters: users };
//         }
//       )

//       );
//   }
// onSearchChange = (event) => {

//   const searchValues = event.target.value.toLowerCase();
//   this.setState(() => {
//     return {
//       searchField: searchValues
//     };
//   }
//   );
// }
// render() {

//   const { monsters, searchField } = this.state;
//   const { onSearchChange } = this;
//   const filteredMonstres = monsters.filter(

//     (newMonsterArray) => { return newMonsterArray.name.toLowerCase().includes(searchField); }
//   );

//   return (
//     <div className="App">
//       <h1 className='app-title'>React First Application</h1>
//       <SearchBox onChangeHandler={onSearchChange} className={"monster-search-box"} placeholder={'search monsters'} />
//       <CardList monsters={filteredMonstres} />
//     </div>
//   )
//  {
/* <input type='search' className='search-box' placeholder='search mnster based on names' onChange={onSearchChange} /> */
//}

// {
/* {filteredMonstres.map((monster) => {
 
return (
  <div key={monster.id}>
    <h1 > {monster.name} </h1>
  </div>
)
})
 
} */
// }
// {
/* <Practice name="Tayyab" age="260" /> */
//}
//  <SearchBox onChangeHandler={onSearchChange} className={"monster-search-box"} placeholder={'search monsters'} />
//       <CardList monsters={filteredMonstres} />

// </div>
//   );
//   }
// }

export default App;
