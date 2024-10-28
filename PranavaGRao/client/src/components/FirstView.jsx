import React, { useState } from 'react'
import pump2 from '../pumpkin_img.png'
import './FirstView.css'
import  {Eyes, MagicalText}from 'react-halloween'
function FirstView() {
  const [isEyes, setIsEyes] = useState(false)
  const [changeText, setChangeText] = useState(false)
  function handleClick(){
    setIsEyes(!isEyes)
  }
  function handleTextClick(){
    setChangeText(!changeText)
  }
  return (
    <div className='first-view-wrapper'>
        <div className='text-info'>
          {!changeText ? (<h1>Trick or Treat !!</h1>) : (<h1><MagicalText text={"Trick or Treat !!"}></MagicalText></h1>)}
            <p>Join us on <span>October 29th at 9 PM</span> for a night of spooky fun! Come in your best costume for music, treats, and games.
                <br/>
                Where: 
                <span>RNSIT</span>

<br/>
When:
<span> October 29th, 9 PM</span>

<br/>
Don't miss out—RSVP if you dare!</p>
<div className='button'>
            <button className='add' onClick={handleClick}>Change Image</button>
            <button className='change-text' onClick={handleTextClick}>Change Text</button>
            </div>
            </div>
            {!isEyes ? (<div className='halloween-img'>
                <img className='pumpkin' alt='A semi scary pumpkin' src={pump2}></img>
            </div>) : (<Eyes eyeLayout={"menacing"}/>)}
           
            
    </div>
  )
}

export default FirstView


