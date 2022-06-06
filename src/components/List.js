import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './list.css'
let i = 0
const List = ({notes}) => {
  
  console.log('notes are: ' ,notes)
  return (
    <>
    <p className='title'> Notes </p>
        {notes.map((item) => { if(Object.keys(item).length > 1) return (
            <div className='item' key={uuidv4()}>
              <p className= {item.isDone? 'isDone': {}} >{item.string}</p>
              <input className='checkbox' type="checkbox" name="isDone" id="isDoneBtn" value={item.isDone}/>
            </div>
        )})}
    </>
  )
}

export default List