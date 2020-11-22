import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar variant='dark' expand='md' className='bg-transparent' fixed='top'>
      <Navbar.Brand href="/">rachelwonghw</Navbar.Brand>
      <Navbar.Toggle onClick={onToggle} />
      <Navbar.Collapse isOpen={isOpen} navbar>
        <Nav navbar className='ml-auto'>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#about'>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#employment'>Employment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;