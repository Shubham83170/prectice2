import React from 'react'
import { increment,decrement } from './Myaction'
import { useSelector, useDispatch } from 'react-redux'
function Myreduxpage() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
    <div>
      <button onClick={() => dispatch(increment())}> Increment</button>
      <span><h1>{count}</h1></span>
      <button onClick={() => dispatch(decrement())}> Decrement</button>
    </div>
  </div>
  )
}

export default Myreduxpage
