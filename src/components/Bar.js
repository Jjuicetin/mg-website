import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../images/asa.jpg';
export const Bar = () => {
    return (
        <>
            <Navbar bg='secondary'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            width="45"
                            height="45"
                            className='d-inline-block align-top'
                            alt='website logo'
                        />
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link href='works'>All Works</Nav.Link>
                        <Nav.Link href='contact'>contact</Nav.Link>
                        <Nav.Link href='about'>About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
