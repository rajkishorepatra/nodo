import React from 'react'
import todoimg from '../../img/about-todo.gif'
import notimg from '../../img/about-notes.gif'
import '../../CSS/heropg/about.css'

function About() {
  return (
    <div>
      <div className='about'>
        <img src={notimg} alt='note img'/>
        <h2>Improve your skill of writing important details from book, article or oral discussion as notes using our app.</h2>
      </div>
      <div className='about'>
        <h2>Maintain your day-to-day tasks or list of everything that you have to do using our app. It is helpful in planning our daily schedules.</h2>
        <img src={todoimg} alt='todo-img'/>
      </div>
    </div>
  )
}

export default About