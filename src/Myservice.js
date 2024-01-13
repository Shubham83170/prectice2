import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Myservice() {
  return (
    <div className='container-fluid mt-1'>
        <div className='row'>
            <div className='col-2 border'>
               
                <Sidebar/>
            </div>
            <div className='col-10 border'>
                <h1>content page</h1>
               <Outlet></Outlet>
            </div>
        </div>
      
    </div>
  )
}

export default Myservice
