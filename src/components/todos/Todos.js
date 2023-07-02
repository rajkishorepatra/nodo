import { Button, Input, Text } from '@nextui-org/react'
import React from 'react'

function Todos() {
    return (
        <>
            <h1 className='text-center m-4   notes-text'>Add Your Todos</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='m-4'>
                    <Input labelPlaceholder='Your Todo' size='lg' color='secondary' bordered className='todo-inp' />
                </div>
                <Button auto><Text h2 color='white'>+</Text></Button>
            </div>
        </>
    )
}

export default Todos