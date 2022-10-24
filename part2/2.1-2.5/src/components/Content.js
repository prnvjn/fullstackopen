import React from 'react'
const Part = (props)=>{

    return (
        <div>
            
        <p> {props.name} {props.exercises}</p>
        </div>
    )
}



export const Content = ({parts}) => {

  return (
    <div>
        {
          parts.map((part)=><Part key={part.id} name={part.name} exercises ={part.exercises}   />)
        }
        
        
         </div>
  )
}
