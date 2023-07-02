import React from 'react'
import { Button, Input, Textarea } from '@nextui-org/react'
import '../../CSS/notes/notes.css'

function Notes() {
    return (
        <>
            <h1 className='text-center m-5 notes-text'>Add Your Notes!</h1>
            <div className='text-center'>
                <div className='my-5'>
                    <Input labelPlaceholder="Enter Title" size='lg' color='secondary' bordered className='notes-inp'/>
                </div>
                <div className='my-5'>
                    <Textarea labelPlaceholder='Enter Notes' size='lg' color='secondary' bordered maxRows={8} className='notes-inp'/>
                </div>
                <Button className='mx-auto' color="secondary" shadow bordered>Add</Button>
            </div>
        </>
    )
}

export default Notes