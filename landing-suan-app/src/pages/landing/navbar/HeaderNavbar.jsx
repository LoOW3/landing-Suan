import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
// Import images
import LOGO from '../../../assets/SuanLogo.png'
export default function HeaderNavbar() {
    return (
        <Navbar bg="white" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="/"><img src={LOGO} 
                            width="40"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="ATP"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Nav>
                <Nav.Link href='/about_us'>
                        About Us
                    </Nav.Link>

                    <Nav.Link href='/how_it_works'>
                        How it works
                    </Nav.Link>

                    <Nav.Link href='/'>
                        Projects
                    </Nav.Link>
                    <Nav.Link href='/'>
                        Support
                    </Nav.Link>
         
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
