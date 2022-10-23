import React from 'react'

export const Average = (props) => {
let total = 0 ||props.good + props.neutral + props.bad
    let avg =  (props.good + props.neutral*0 - props.bad)/(total||1)    
console.log(props)
let positiveFeedback = (props.good/(total||1))*100
  return (

    <div>
        <p>All {total}</p>
        <p>Average {avg}</p>
        <p>Positive {positiveFeedback} %</p>
       </div>
  )
}
