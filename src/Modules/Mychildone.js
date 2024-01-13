import React from 'react'

function Mychildone(props) {
  return (
    <div>
        <h2>My child one</h2>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.code}</p>
    </div>
  )
}

export default Mychildone
