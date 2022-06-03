import React from 'react'
import ListItem from './ListItem'
import { uuid } from 'uuidv4'

const List = ({items}) => {
  return (
    <>
        {items.map( (item) => { return (
            <p key={uuid()}>{item}</p>
        )})}
    </>
  )
}

export default List