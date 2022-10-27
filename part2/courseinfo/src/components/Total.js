import React from 'react'

const Total = ({parts}) => {


  const total= parts.reduce((previous,current)=>previous+(current.exercises),0 )

  return (
    <div>Number of exercises {total} </div>
  )
}

export default Total