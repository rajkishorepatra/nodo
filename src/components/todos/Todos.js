import React, { useState, useEffect } from 'react'
import { Button, Input, Text, Grid, Tooltip } from '@nextui-org/react'
import { auth, db } from '../../firebase_config';
import { collection, doc, getDocs, query, setDoc, where, deleteDoc } from "firebase/firestore";
import { SendIcon } from "./SendIcon";
import { SendButton } from './SendButton';



const TodoCard = (props) => {
    
    const deleteTodo = async (documentId) => {
        const docRef = doc(db, 'Todos', documentId);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            console.error('Error deleting document:', error);
        }
        var todoRem = document.getElementById(props.docId);
        todoRem.parentNode.removeChild(todoRem);
    };

    return (
        <>
            <Grid xs={3} id={props.docId}>
                <Tooltip content={props.todo} color='invert'>
                    <Input
                        size='xl'
                        readOnly
                        contentRightStyling={false}
                        placeholder={props.todo}
                        contentRight={
                            <SendButton onClick={() => deleteTodo(props.docId)}>
                                <SendIcon />
                            </SendButton>
                        }
                    />
                </Tooltip>
            </Grid>
        </>
    )
}




function Todos() {

    const [todoList, setTodoList] = useState([]);
    const [todoData, setTodoData] = useState([]);

    function generatePin() {
        return String(Math.floor(Math.random() * 999999) + 100000)
    }

    function storeTodo() {
        var titleTodo = document.getElementById("todoTitle").value;
        var id = auth.currentUser.uid;
        var documentId = generatePin();
        setDoc(doc(db, "Todos", documentId), {
            uid: id,
            todo_name: titleTodo,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        document.getElementById("todoTitle").value = "";
        setTodoList(todoList.concat(<TodoCard todo={titleTodo} docId={documentId} />));
    }

    useEffect(() => {
        const fetchTodoData = async () => {
            var id = JSON.parse(localStorage.user).uid
            const q = query(collection(db, 'Todos'), where('uid', '==', id));
            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data(),
            }));
            setTodoData(newData);
        };
        fetchTodoData();
    }, []);


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
            <div className='m-3 mt-5'>
                <Grid.Container gap={2} justify="center" id='newCard'>
                    {todoList}
                    {todoData && todoData.map && todoData.map((item) => (
                        <TodoCard todo={item.todo_name} docId={item.docId} />
                    ))}
                </Grid.Container>
            </div>
        </>
    )
}

export default Todos