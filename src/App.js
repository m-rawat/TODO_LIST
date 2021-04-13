import React, { useState } from 'react';
import List from './List';

const App = () => {

  let [name,setName]=useState("");
  let [takename,SetTakeName]=useState([]);

  let getItem=(e)=>{
    setName(e.target.value);
  }
  let takeItem=()=>{
    SetTakeName((oldName)=>{
      return [...oldName,name];
    });
    setName("");
  };

  let deleteItem=(id)=>{
    SetTakeName((oldName)=>{
      return oldName.filter((ele,idx)=>{
        return id!=idx
      })
    })
  }

  return (
    <>
      <div className="main">
        <div className="inner">
        <br/>
          <h1>TODO LIST</h1>
          <br/>
          <input type="text" placeholder="Enter Item" value={name} onChange={getItem}></input>
          <button onClick={takeItem}>+</button>
          <ol>
              {takename.map((ele,idx)=>{
                return <List
                  key={idx}
                  id={idx}
                  text={ele}
                  onSelect={deleteItem}
                />
              })
              }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
