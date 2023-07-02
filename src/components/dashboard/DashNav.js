import React from 'react'
import { Navbar, Text } from "@nextui-org/react";
import favicon from '../../img/favicon.png'


function DashNav() {
    return (
        <>
            <Navbar isBordered variant="floating">
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%"
                        }
                    }}
                >
                    <img src={favicon} alt='icon' width={50} height={50} />
                    <Text b color="inherit" hideIn="xs">
                        NODO
                    </Text>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar>
        </>
    )
}

export default DashNav