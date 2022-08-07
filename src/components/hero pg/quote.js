import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../CSS/heropg/quote.css'

function Quote() {
  const [quote, setQuote] = useState([])
  useEffect(() => {
    let data = async () => {
      let res = await axios.get("http://api.quotable.io/random")
      setQuote(res.data)
    }
    data()
  }, [])

  let fetchData = async () =>{
    let res = await axios.get("http://api.quotable.io/random")
    setQuote(res.data)
  }
  return (
    <>
      <div class="container">
        <div class="content">
          <h2>{quote.content}</h2>
          <h3>{quote.author}</h3>
          <button className='button' onClick={fetchData}>Random quote<span></span></button>
        </div>
      </div>
    </>
  )
}

export default Quote