import React from 'react'
import Note from './note'
import '../../CSS/notes/noteCont.css'

function NoteCont(props) {
    const revArr=(arr)=>{
        const array=[]
        for (let index = arr.length-1; index >= 0; index--) {
            array.push(arr[index]);
        }
        return array
    }
    const notes = revArr(props.notes)
    return (
        <div className='note-cont'>
            <h2>Notes</h2>
            <div className='note-cont_notes custom-scroll'>
                {notes.length>0 ? (
                    notes.map((item)=> <Note key={item.id} note={item} deleteNote={props.deleteNote}/>)
                ) : (
                    <h3>No Notes Present!</h3>
                )}
            </div>
        </div>
    )
}

export default NoteCont;