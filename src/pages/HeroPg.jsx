import React from 'react'
// import QuoteGenerator from '../components/hero pg/quote'
// import About from '../components/hero pg/About'
// import Feedback from '../components/hero pg/Feedback'
// import notegif from '../img/notes.gif'
// import quotegif from '../img/quote.gif'
import '../CSS/heropg/hero.css'
import BarNav from '../components/common/BarNav'
import Hero from '../components/hero pg/Hero'
import Quote from '../components/hero pg/quote'
import About from '../components/hero pg/About'
import Feedback from '../components/hero pg/Feedback'

function HeroPg() {
    return (
        <>
            <BarNav />
            <Hero />
            <Quote/>
            <About/>
            <Feedback/>
            {/* <Navbar />
            <div className='heropg'>
                <div className='home' id='home'>
                    <img src={notegif} alt='heroimg' />
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
            </div> */}
        </>
    )
}

export default HeroPg