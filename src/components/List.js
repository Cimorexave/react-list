import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

const List = ({notes }) => {
  console.log('notes are: ' ,notes)
  return (
    <>
        {notes.map((item) => { return (
            <div key={uuidv4()}>
              {item}
            </div>
        )})}
    </>
  )
}

export default List