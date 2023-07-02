import React from 'react'
import notegif from '../../img/notes.gif'
import { Button, Link } from '@nextui-org/react'

function Hero() {
    return (
        <>
            <div className='home d-flex justify-content-around align-items-center m-3 mb-5' id='home'>
                <img src={notegif} alt='heroimg' />
                <div className='hero-text'>
                    <h1>Welcome to Nodo.</h1>
                    <h3>Your one stop destination for Notes and Todos!</h3>
                    <Link href='/dashboard' className='d-flex mx-auto'>
                        <Button
                            size="lg"
                            color="gradient"
                            shadow
                            bordered
                            ghost
                            className='mt-5'
                        >
                            Add Notes/Todos
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hero