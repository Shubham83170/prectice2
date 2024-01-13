import React from 'react'
import Mychildone from './Mychildone'
import Mychildtwo from './Mychildtwo'

function Props() {
  let a = "right"
  return (
    <div className='container border mt-3'>
        <div className='row'>
            <div className='col-6'> <Mychildone name="shubham singh" age="27" code="1234"/></div>
            <div className='col-6'><Mychildtwo ali={a}/></div>
        </div>
    </div>
  )
}

export default Props
