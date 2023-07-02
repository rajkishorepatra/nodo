import React from 'react'
import { Navbar, Link, Text, Modal, Button, Input, Row } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import favicon from '../../img/favicon.png'
import { auth } from '../../firebase_config'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';


function BarNav() {

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const [visibleSignUp, setVisibleSignUp] = React.useState(false);
    const handlerSignUp = () => setVisibleSignUp(true);
    const closeSignUp = () => {
        setVisibleSignUp(false);
        console.log("closed");
    };

    function forgotPass() {
        const email = document.getElementById("email").value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Reset link sent to your email id!")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    function login() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => localStorage.setItem("user", JSON.stringify(user.user)))
            .then(() => window.location = "/dashboard")
            .catch((error) => {
                console.log(error.message);
            })
        closeHandler();
    }

    function signup() {
        const emailCreate = document.getElementById("emailCreate").value;
        const passCreate = document.getElementById("passCreate").value;
        const passCreateCheck = document.getElementById("passCreateCheck").value;
        if (passCreate !== passCreateCheck)
            alert("Enter same Password!");
        createUserWithEmailAndPassword(auth, emailCreate, passCreate)
            .then((user) => localStorage.setItem("user", JSON.stringify(user.user)))
            .then(() => window.location = "/dashboard")
            .catch((error) => {
                console.log(error.message);
            })
        closeSignUp();
    }



    function checkUserAcc() {
        var data = localStorage.user;
        if (data)
            return true;

        return false;
    }

    function logOut() {
        signOut(auth)
            .then(localStorage.removeItem('user'))
            .then(window.location = '/');
    }


    return (
        <>
            <Navbar isBordered isCompact variant="floating">
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    {/* <AcmeLogo /> */}
                    <img src={favicon} alt='icon' width={50} height={50} />
                    <Text b color="inherit" hideIn="xs">
                        NODO
                    </Text>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="sm"
                    variant="highlight-rounded"
                >
                    <Navbar.Link isActive href="#">Home</Navbar.Link>
                    <Navbar.Link href="#">Quotes</Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Feedback</Navbar.Link>
                </Navbar.Content>
                {!checkUserAcc() ?
                    <Navbar.Content
                        enableCursorHighlight
                        activeColor="secondary"
                        hideIn="sm"
                        variant="highlight-rounded"
                    >
                        <Navbar.Link href="#" onPress={handler}>LogIn</Navbar.Link>
                        <Navbar.Link href="#" onPress={handlerSignUp}>SignUp</Navbar.Link>
                    </Navbar.Content>
                    :
                    <>
                        <Navbar.Content
                            enableCursorHighlight
                            activeColor="secondary"
                            hideIn="sm"
                            variant="highlight-rounded"
                        >
                            <Navbar.Link href="#" onPress={logOut}>LogOut</Navbar.Link>
                        </Navbar.Content>
                    </>}

                <Navbar.Toggle showIn="sm" />

                <Navbar.Collapse>
                    <Navbar.CollapseItem activeColor="secondary">
                        <Link color="secondary" href="#">Home</Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem activeColor="secondary">
                        <Link color="secondary" href="#">Quotes</Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem activeColor="secondary">
                        <Link color="secondary" href="#">About</Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem activeColor="secondary">
                        <Link color="secondary" href="#">Feedback</Link>
                    </Navbar.CollapseItem>

                    {!checkUserAcc() ?
                        <>
                            <Navbar.CollapseItem activeColor="secondary">
                                <Link color="secondary" href="#" onPress={handler}>LogIn</Link>
                            </Navbar.CollapseItem>
                            <Navbar.CollapseItem activeColor="secondary">
                                <Link color="secondary" href="#" onPress={handlerSignUp}>SignUp</Link>
                            </Navbar.CollapseItem>
                        </>
                        :
                        <>
                            <Navbar.CollapseItem activeColor="secondary">
                                <Link color="secondary" href="#" onPress={logOut}>LogOut</Link>
                            </Navbar.CollapseItem>
                        </>}
                </Navbar.Collapse>
            </Navbar>






            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                className='m-2'
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            &nbsp;Nodo
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        labelPlaceholder="Email"
                        contentLeft={<Mail fill="currentColor" />}
                        id='email'
                        name='email'
                    />
                    <Input.Password
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor" />}
                        id='password'
                    />
                    <Row justify="space-between">
                        <Text size={14}><Link href='#' onPress={handlerSignUp}>Don't have Account?</Link></Text>
                        <Text size={14}><Link href='#' onPress={forgotPass}>Forgot password?</Link></Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button auto onPress={login}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>






            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={visibleSignUp}
                onClose={closeSignUp}
                className='m-2'
            >
                <Modal.Header>
                    <Text id="modal-title" b size={23}>
                        Create an account
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<Mail fill="currentColor" />}
                        id='emailCreate'
                    />
                    <Input.Password
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor" />}
                        id='passCreate'
                    />
                    <Input.Password
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password Again"
                        contentLeft={<Password fill="currentColor" />}
                        id='passCreateCheck'
                    />
                    <Text size={14}><Link href='#' onPress={handler}>Already have Account?</Link></Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeSignUp}>
                        Close
                    </Button>
                    <Button auto onPress={signup}>
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BarNav