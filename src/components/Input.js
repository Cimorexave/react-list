import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react'
import './input.css'

const Input = ({pullData_function}) => {
    const [note , setNote] = useState("") 
    const handleAdd = (e) => {
        e.preventDefault();
        console.log('note is: ' , note)
        //sending data upwards to parent
        pullData_function(note)
    }
  return (
    <>
        <form onSubmit={handleAdd}>
            <p> Type in your Note... </p>
            <input className='textField' type="text" value={note} onChange={e => setNote(e.target.value)}/>
            <input className='addBtn' type="submit" value= "Add"/>
        </form>
    </>
  )
}

export default Input