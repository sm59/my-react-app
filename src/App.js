import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const nayoks = ['Sm', 'Mizan', 'Saju', 'Shahriar']
  const products = [
    {name:'photoshop', prise:'$90.99'},
    {name:'Illustrator', prise:'$60.99'},
    {name:'PDF Reader', prise:'$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first React Website</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayoks => <li>{nayoks}</li>)
          }
        </ul>
       
        <Product products={products[0]}></Product>
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        <Person name="SM Shahriar" job="Web developer"></Person>
        <Person name="Mizan" job="PhotoShote"></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count -1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'5px solid red',
    margin:'5px',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h3>{props.products.name}</h3>
      <h5>{props.products.prise}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  return (
    <div style={{border:'5px solid purple', width:'400px', margin:'10px'}}>
      <h2>My Name:{props.name}</h2>
      <p>My Profession:{props.job}</p>
    </div>
  )
}
export default App;
