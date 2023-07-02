import React from 'react'
import BarNav from '../components/common/BarNav'
import Hero from '../components/hero pg/Hero'
import Quote from '../components/hero pg/quote'
import About from '../components/hero pg/About'
import Feedback from '../components/hero pg/Feedback'
import '../CSS/heropg/hero.css'

function HeroPg() {
    return (
        <>
            <BarNav />
            <Hero />
            <Quote/>
            <About/>
            <Feedback/>
        </>
    )
}

export default HeroPg