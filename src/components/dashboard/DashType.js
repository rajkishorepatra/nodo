import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function DashType() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{flexWrap:"wrap", marginTop:"8em"}}>
                <h1 className='text-center' style={{color:"purple", fontSize:"5em"}}>Start Adding Your&nbsp;</h1>
                <div style={{color:"purple", fontSize:"5em"}}>
                    <b>
                    <Typewriter
                        words={['Notes', 'Todos']}
                        loop
                        cursor
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                    </b>
                </div>
            </div>
        </>
    )
}

export default DashType