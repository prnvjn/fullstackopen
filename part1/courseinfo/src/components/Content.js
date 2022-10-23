import React from 'react'
const Part = (props)=>{

    return (
        <div>
            
        <p>{props.part} {props.exercises}</p>
        </div>
    )
}



export const Content = (props) => {
  return (
    <div>
        <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
        <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
        <Part  part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
        
        
         </div>
  )
}
