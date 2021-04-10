import React from 'react'

function ThankYou() {
    return (
        <div style={{textAlign: 'center', paddingBottom: '200px'}}>
            <div style={{backgroundColor:'black'}}>
                <img style={{width: '40%'}} src='https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif' alt='check'></img>
            </div>
            <h1 style={{marginTop:'50px'}}>Thank You For Your Inquiry!</h1>
            <h2 style={{marginTop:'50px', marginBottom:'50px'}}>You took the first step! Let us do the rest.</h2>
            <h4>One of our company heads will be reaching out to you as soon as possible.</h4>
            <h5 style={{marginTop:'50px'}}><a href="/">Back Home</a></h5>
        </div>
    )
}

export default ThankYou
