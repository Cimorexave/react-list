import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'

const List = ({notes}) => {
    useEffect(()=> {
        console.log('notes changed: ', notes)
    })
  return (
    <>
        {notes.map((item) => { return (
            <p key={Math.random()*notes.length}> {item} </p>
        )})}
    </>
  )
}

export default List