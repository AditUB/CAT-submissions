import React, { useState } from 'react'
import './Accordian.css'
import axios from 'axios'
function Accordian() {
    const [isopen, setIsopen] = useState(false)
    function handleClick1(){
        console.log("cllicked")
        setIsopen(!isopen)
    }

    
  return (
    <div className='main-accordian-wrapper'>
        <div className='post-accordian-wrapper'>
            <div className='text-btn-accordian'>
                <div className='text-btn'>
                <h1>Contact us</h1>
                <button className='post-btn' onClick={handleClick1}>+</button>
                </div>
                <div className={`input-form ${isopen ? 'open' : ''}`}>
                    <Add/>
                </div>
            </div>
        </div>
    </div>
  )
}

function Add(){
    const [email, SetEmail] = useState("")
    const [query, SetQuery] = useState("")
    const [values, Setvalues] = useState([])
    const [getValueClicked, SetgetValueClicked] = useState(false)
    function emailValue(e){
        SetEmail(e.target.value)
    }
    function queryValue(e){
        SetQuery(e.target.value)
    }
    async function SubmitContact(){
        const response = await axios.post("http://localhost:5000/contact", {email, query})
        alert(response.data.message)
        SetEmail("")
        SetQuery("")
    }

    async function GetValue(e){
        const response = await axios.get("http://localhost:5000/contact")
        Setvalues(response.data)
        SetgetValueClicked(true)
    }


    return(
        <div className='add-contact'>
            <input className='email-input' placeholder='email' onChange={emailValue} value={email}/>
            <input className='query-input' placeholder='query' onChange={queryValue} value={query}/>
            <button className='submit-value' onClick={SubmitContact}>Submit</button>
            <button className='get-value' onClick={GetValue}>FAQs</button>
            <hr className='line-break'></hr>
            {getValueClicked ? (<h1 className='faqs'>FAQs</h1>) : (<></>)}
            {values.map(({email, query}) => {
                return(
                <div className='get-all-values'>
                    <p className='user-email'>{email}</p>
                    <h3 className='user-query'>{query}</h3>
                    <hr></hr>
                </div>
                )
            })}
           
        </div>
    )
}

export default Accordian




/**/


/*<div className='app-accordian-wrapper'>
    <div className='main-accrodian-wrapper'>
        <div className='second-wrapper'>
        <h1>Contact Us</h1>
        <button className='open-accordian-btn' onClick={handleClick}>+</button>
        <div className={`main-accordian-wrapper ${isopen ? 'open':''}`}>
            <Add/>
        </div>
        </div>
    </div>
</div>*/
