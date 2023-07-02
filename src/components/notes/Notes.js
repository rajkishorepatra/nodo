import React from 'react'
import { Button, Input, Textarea } from '@nextui-org/react'
import { auth, db } from '../../firebase_config';
import { doc, setDoc } from "firebase/firestore";
import '../../CSS/notes/notes.css'

function Notes() {
    function generatePin() {
        return String(Math.floor(Math.random() * 999999) + 100000)
    }

    function store() {
        var title = document.getElementById("title").value;
        var text = document.getElementById("text").value;
        var id = auth.currentUser.uid;
        if (title !== "" || text !== "") {
            setDoc(doc(db, "Notes", generatePin()), {
                uid: id,
                todo_title: title,
                todo_body: text,
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
        document.getElementById("title").value = "";
        document.getElementById("text").value = "";
    }
    return (
        <>
            <h1 className='text-center m-5 notes-text'>Add Your Notes!</h1>
            <div className='text-center'>
                <div className='my-5'>
                    <Input
                        labelPlaceholder="Enter Title"
                        size='lg'
                        color='secondary'
                        bordered
                        className='notes-inp'
                        id='title'
                    />
                </div>
                <div className='my-5'>
                    <Textarea
                        labelPlaceholder='Enter Notes'
                        size='lg'
                        color='secondary'
                        bordered
                        maxRows={8}
                        className='notes-inp'
                        id='text'
                    />
                </div>
                <Button className='mx-auto' color="secondary" shadow bordered onPress={store}>Add</Button>
            </div>
        </>
    )
}

export default Notes