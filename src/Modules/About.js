import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  const [svariable, sfunction]= useState("shubham")
  const abc= (b)=>{
    sfunction(b.target.value)
    
   
  }


  return (
    <div>
      <h1 onClick={abc}>{svariable}</h1>
      <input type="text" value={svariable} onInput={abc}/>
     
    <div className='container flex about-section'>
        <div className='left-about'> <img src='images/img_2.png' alt=''></img>
        </div>


        <div className='right-about flex'>

            <div>
                <h2>The Flavor You Need, The Consistency You Want—Ice Cream!</h2>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Possimus Molestias Corporis Inventore Soluta Odio Vero, Dolor Itaque Illo Eos. Velit, Sequi Libero Animi Debitis Provident Odit Perferendis Maxime Repudiandae Illo.</p>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Facere Omnis Fugit Corporis Dignissimos Saepe! Accusamus Accusantium Enim Laudantium Voluptatem Ab?</p>
                <Link className='primary-button btn'>Learn More</Link>
            </div>
        </div>
    </div>

</div>
  )
}

export default About
