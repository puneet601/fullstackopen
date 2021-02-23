import React from 'react'
import ReactDOM from 'react-dom'
import {Form, Button, Navbar, Nav,FormControl } from 'react-bootstrap'
const Header = () => {
    
    return <div>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">MY SPACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                    <Button>
                        LOGIN
                        </Button>
                <Nav.Link to={`/blogs/${blog.id}`}>SIGNUP</Nav.Link>
                
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </div>
}
export default Header