import React from 'react'

export const Contact = ({name,number,del}) => {
  return (
   <li>{name} - {number} <button onClick={del} >delete</button></li>
  )
}
