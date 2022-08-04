import React, { useEffect, useState } from'react'
import './App.css';
import Friends from './components/friend/Friend'
import data from './components/data/DATA.json'

function App() {
  const [myFriends , setmyFriends] = useState([])
  const [friends, setfriend] = useState([])
  useEffect(()=>{
    setfriend(data);
  },[])

  const addFriends=(friends)=>{
     const nowFriends =[...myFriends , friends]
     setmyFriends(nowFriends)
  }
  var name ='';
  for (let i = 0; i < myFriends.length; i++) {
    const friendsName = myFriends[i];
    name = name + friendsName.name + ', ';
    
  }
  let totalSalary =0;
  for (let i = 0; i <myFriends.length; i++) {
    const anula_salary = myFriends[i];
    totalSalary = totalSalary +anula_salary.annual_salary;
    
  }

    
  return (
    <div className="App">
      <div className='myfriends'>
      <p>myFriends: {myFriends.length}</p>
      <p>All My Friends Salary: {totalSalary} $</p>
      <p>names of my Friends: {name} &nbsp;  </p>
      </div>
      <h1>Peoples:{friends.length}</h1>
      <div className='friendSection'>
      {
        friends.map(friends => <Friends addFriends={addFriends} friends={friends}></Friends>)
      }
      </div>
    </div>
  );

}

export default App;
