import React from 'react'
import Navbar from '../components/Navbar'
import Accordian from '../components/Accordian'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-main-wrapper'>
        <Navbar/>
        <div className='contact-accordian-wrapper'>
        <Accordian/>
        </div>
    </div>
  )
}

export default Contact
