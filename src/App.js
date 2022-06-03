import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import Input from './Input';
const arrayOfNotes = []
const App = () => {
  const [data_from_input, setData_from_input] = useState([])
  const pullData_function = (data) => {
    console.log('pulling data to parent')
    arrayOfNotes.push(data)
    console.log('array of notes: ' , arrayOfNotes)
    setData_from_input(arrayOfNotes)
    console.log('data from input is: ' , data_from_input)
  }
  return (
    <>
      <header className='header'>
      React List Webb app
      </header>
      <Input pullData_function={pullData_function}></Input>
      <List items={data_from_input}></List>
    </>
  )
}

export default App