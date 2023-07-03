import React, { useState, useEffect } from 'react'
import { Button, Input, Textarea, Grid, Card, Col, Text, Row } from '@nextui-org/react'
import { auth, db } from '../../firebase_config';
import { collection, doc, getDocs, query, setDoc, where, deleteDoc } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../CSS/notes/notes.css'




const CardNotes = (props) => {
    var urlImg = "https://source.unsplash.com/400x300/?" + props.title;
    const deleteData = async (documentId) => {
        const docRef = doc(db, 'Notes', documentId);

        try {
            await deleteDoc(docRef);
            console.log('Document successfully deleted!');
        } catch (error) {
            console.error('Error deleting document:', error);
        }
        var gfg_down = document.getElementById(props.keyId);
        gfg_down.parentNode.removeChild(gfg_down);
    };
    return (
        <>
            <Grid xs={10} sm={4} id={props.keyId}>
                <Card>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Row>
                                <Text h4 weight="bold" transform="uppercase" color="error">
                                    {props.title}
                                </Text>
                                <Button auto color="error" rounded bordered className='position-absolute end-0' onPress={() => deleteData(props.keyId)}>
                                    <FontAwesomeIcon icon="fas fa-trash" color='white' />
                                </Button>
                            </Row>
                            <Text color="error" b>
                                {props.text}
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Image
                        src={urlImg}
                        objectFit="cover"
                        width="100%"
                        height={340}
                        alt="Card image background"
                        style={{ filter: "blur(2px)" }}
                    />
                </Card>
            </Grid>
        </>
    )
}






function Notes() {
    const [inputList, setInputList] = useState([]);
    const [data, setData] = useState([]);

    function generatePin() {
        return String(Math.floor(Math.random() * 999999) + 100000)
    }

    function store() {
        var title = document.getElementById("title").value;
        var text = document.getElementById("text").value;
        var id = auth.currentUser.uid;
        if (title !== "" && text !== "") {
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
        setInputList(inputList.concat(<CardNotes title={title} text={text} />));
    }


    useEffect(() => {
        const fetchData = async () => {

            var id = JSON.parse(localStorage.user).uid
            const q = query(collection(db, 'Notes'), where('uid', '==', id));
            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map((doc) => ({
                keyId: doc.id,
                ...doc.data(),
            }));
            setData(newData);
        };
        fetchData();
    }, []);



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
            <div className='m-3 mt-5'>
                <Grid.Container gap={2} justify="center" id='newCard'>
                    {inputList}
                    {data && data.map && data.map((item) => (
                        <CardNotes title={item.todo_title} text={item.todo_body} keyId={item.keyId} />
                    ))}
                </Grid.Container>
            </div>
        </>
    )
}

export default Notes