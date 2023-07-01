import React from 'react';
import feedimg from '../../img/Feedback.gif'
import { Button, Input, Textarea } from '@nextui-org/react';
import { UserIcon } from '../common/UserIcon';
import { Mail } from '../common/Mail';


function Feedback() {
    return (
        <>
            <h1 className='text-center about-h1 mb-5' id='about'>Contact</h1>
            <div className='feed d-flex justify-content-around align-items-center m-3'>
                <img src={feedimg} alt='Feedback-img' />
                <form>
                    <div className='d-flex justify-content-center align-items-center m-3 mt-4'>
                        <Input
                            clearable
                            bordered
                            color="primary"
                            size="lg"
                            width='20em'
                            labelPlaceholder="Your Name"
                            id="name"
                            contentLeft={<UserIcon fill="currentColor" />}
                        />
                    </div>

                    <div className='d-flex justify-content-center align-items-center m-3 mt-5'>
                        <Input
                            clearable
                            bordered
                            color="primary"
                            size="lg"
                            width='20em'
                            id="email"
                            type="email"
                            labelPlaceholder='Your Email'
                            contentLeft={<Mail fill="currentColor" />}

                        />
                    </div>
                    <div className='d-flex justify-content-center align-items-center m-3 mt-5'>

                        <Textarea
                            bordered
                            color="secondary"
                            labelPlaceholder="Your Query"
                            width='20em'
                        />
                    </div>
                    <Button shadow color="secondary" size="lg" className='mx-auto mt-4'>submit</Button>
                </form>
            </div>
        </>
    )
}

export default Feedback