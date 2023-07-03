import React from 'react'
import notegif from '../../img/notes.gif'
import { Button } from '@nextui-org/react'

function Hero() {
    function checkUser() {
        var data = localStorage.user || null;
        if (data === null) {
            alert("Login to start adding notes");
        }
        else {
            window.location = '/dashboard'
        }
    }
    return (
        <>
            <div className='home d-flex justify-content-around align-items-center m-3 mb-5' id='home'>
                <img src={notegif} alt='heroimg' />
                <div className='hero-text'>
                    <h1>Welcome to Nodo.</h1>
                    <h3>Your one stop destination for Notes and Todos!</h3>
                    <Button
                        size="lg"
                        color="gradient"
                        shadow
                        bordered
                        ghost
                        className='mt-5 mx-auto'
                        onPress={checkUser}
                    >
                        Add Notes/Todos
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Hero