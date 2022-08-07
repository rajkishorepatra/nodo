import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import feedimg from '../../img/Feedback.gif'
import '../../CSS/heropg/feedback.css'


function Feedback() {
    const [state, handleSubmit] = useForm("xzbwpqeb");
    window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
    if (state.succeeded) {
        return <p>Thanks for giving ur valuable time! 😉</p>;
    }
    return (
        <div className='feed'>
            <img src={feedimg} alt='Feedback-img' />
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="email">
                Email Address
            </label> */}
                <input 
                    type="name" 
                    placeholder="Enter Your Name..." 
                    id="name" 
                    Name="name"
                    className='form-ip'
                />
                
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                
                <input
                    id="email"
                    type="email"
                    name="email"
                    className='form-ip'
                    placeholder='Enter your Email here...'
                />

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                
                <textarea
                    id="message"
                    name="message"
                    className='form-ip'
                    placeholder='Enter your valuable feedback here...'
                />

                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Feedback