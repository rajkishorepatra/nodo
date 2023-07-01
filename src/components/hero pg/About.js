import React from 'react'
import todoimg from '../../img/about-todo.gif'
import notimg from '../../img/about-notes.gif'


function About() {
  return (
    <div className='mt-5 m-5'>
      <h1 className='text-center about-h1' id='about'>About Us</h1>
      <div className='about d-flex justify-content-around align-items-center'>
        <img src={notimg} alt='note img' />
        <div className='about-text'>
          <h2>Improve your skill of writing important details from book, article or oral discussion as notes using our app.</h2>
        </div>
      </div>
      <div className='about d-flex justify-content-around align-items-center'>
        <div className='about-text'>
          <h2>Maintain your day-to-day tasks or list of everything that you have to do and get it reminded using our app. It is helpful in planning our daily schedules.</h2>
        </div>
        <img src={todoimg} alt='todo-img' />
      </div>
    </div>
  )
}

export default About