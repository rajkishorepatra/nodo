import { Button, Input, Text } from '@nextui-org/react'
import React from 'react'
import { auth, db } from '../../firebase_config';
import { doc, setDoc } from "firebase/firestore";

function Todos() {
    function generatePin() {
        return String(Math.floor(Math.random() * 999999) + 100000)
    }

    function storeTodo() {
        var titleTodo = document.getElementById("todoTitle").value;
        var id = auth.currentUser.uid;
        setDoc(doc(db, "Todos", generatePin()), {
            uid: id,
            todo_name: titleTodo,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        document.getElementById("todoTitle").value=""
    }
    return (
        <>
            <h1 className='text-center m-4   notes-text'>Add Your Todos</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='m-4'>
                    <Input
                        labelPlaceholder='Your Todo'
                        size='lg'
                        color='secondary'
                        bordered
                        className='todo-inp'
                        id='todoTitle' />
                </div>
                <Button auto onPress={storeTodo}><Text h2 color='white'>+</Text></Button>
            </div>
        </>
    )
}

export default Todos