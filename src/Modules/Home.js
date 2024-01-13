import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <header className='header-section'>
    <div className='container flex contant-section'>
        <div className='left-header'>
          <span className='primary-button premium-button'>Premium Ice Cream</span>
          <h2>RELAX AND TAKE A MOMENT TO ENJOY YOURSELF</h2>
          <p>Lectus Laoreet Fames Elit Ipsum Conubia Mauris Bibendum. Sem Volutpat Natoque Consequat Ut Est Ex Vehicula Fusce Eget.</p>
          <span  >
            <Link className='primary-button btn'>Where To Buy</Link>
          </span>

        </div>
        <div className='right-header'>
          <div>
            <img src='images/1.png' alt=''></img>
          </div>

        </div>

    </div>
   </header>
  )
}

export default Home
