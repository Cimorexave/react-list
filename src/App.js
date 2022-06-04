import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import Input from './components/Input';
import { v4 as uuidv4 } from 'uuid';

let arrayOfNotes = []
const App = () => {
  const [data_from_input, setData_from_input] = useState([])

  const handleClear = () => {
    setData_from_input([])
    arrayOfNotes = []
    //console.log('data after clear: ' , data_from_input)
  }
  
  const pullData_function = (data) => {
    console.log('pulling data to parent')
    arrayOfNotes.push(data)
    //console.log('array of notes: ' , arrayOfNotes)
    setData_from_input([...arrayOfNotes])
    console.log('data from input is: ' , data_from_input)
  }
  return (
    <div className='container'>
      <header className='header'>
      React List Web app
      </header>
      <div className="inputField">
        <Input pullData_function={pullData_function}></Input>
      </div>
      <div className="listView">
        <List  notes={data_from_input}></List>
      </div>
      <button className='clearBtn' onClick={handleClear}>Clear</button>
    </div>
  )
}

export default App