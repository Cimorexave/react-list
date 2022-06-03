import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react'

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
            <label htmlFor="">input your note:
                <input type="text" value={note} onChange={e => setNote(e.target.value)}/>
            </label>
            <input type="submit" value= "Add"/>
        </form>
    </>
  )
}

export default Input