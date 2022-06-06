import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './list.css'

const List = ({notes}) => {
  const [keyState, setkeyState] = useState()
  console.log('notes are: ' ,notes)
  return (
    <>
    <p className='title'> Notes </p>
        {notes.map((item) => { if(Object.keys(item).length > 1) return (
            <div className='item' key={item.key}>
              <p className={`${item.isDone? 'isDone': ''}`} > {item.string} </p>
              <button 
              className={` checkBtn ${item.isDone? 'isDoneBtn': ''}`}
              onClick={()=> {item.isDone = !item.isDone; item.key = uuidv4(); setkeyState(Math.random()) ;console.log(item.isDone)}}></button>
            </div>
        )})}
    </>
  )
}

export default List