import React, { useState } from 'react'
import plusicon from'../../img/R.png'
import '../../CSS/notes/sidebar.css'

function Sidebar(props) {
  const[listOpen,setlistOpen] = useState(false);
  const colors = ["#fe9b72","#fec971","#00d4fe","#b693fd","#e4ee91"];
  return (
    <div className='sidebar'>
      <img src={plusicon} alt='Add' onClick={()=>setlistOpen(!listOpen)}/>
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`} >
        {colors.map((item,index)=>(
            <li key={index}
                className="sidebar_list_item"
                style={{backgroundColor: item}}
                onClick={()=>props.addNote(item)}
            />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar