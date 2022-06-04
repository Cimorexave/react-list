import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './list.css'

const List = ({notes }) => {
  console.log('notes are: ' ,notes)
  return (
    <>
    <p className='title'> Notes </p>
        {notes.map((item) => { return (
            <div className='item' key={uuidv4()}>
              {item}
            </div>
        )})}
    </>
  )
}

export default List