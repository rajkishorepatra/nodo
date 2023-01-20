import React from 'react'
import Navbar from '../common/Navbar'
import QuoteGenerator from './quote'
import About from './About'
import Feedback from './Feedback'
import notegif from '../../img/notes.gif'
import quotegif from '../../img/quote.gif'
import '../../CSS/heropg/hero.css'

function HeroPg() {
    return (
        <>
            <Navbar />
            <div className='heropg'>


                <div className='home' id='home'>
                    <img src={notegif} alt='heroimg'/>
                    <div className='hero-text'>
                        <h1>Welcome to Nodo.</h1>
                        <h3>Your one stop destination for Notes and Todos!</h3>
                    </div>
                </div>




                <h1 className='quoteh' id='quote'>Quote</h1>
                <div className='quote' >
                    <QuoteGenerator />
                    <img src={quotegif} alt='quoteimg' />
                </div>




                <h1 className='quoteh' id='about'>About</h1>
                <About />




                <h1 className='quoteh' id='feedback'>Feedback</h1>
                <Feedback />
            </div>
        </>
    )
}

export default HeroPg