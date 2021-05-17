import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Linkedin, GitHub, Mail, FileText } from 'react-feather';
import Resume from '../assets/ResumeRachelWong.pdf';
import '../styles/Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar variant='dark' expand='md' className='bg-transparent' fixed='top'>
      <Navbar.Brand href="/" className="header-logo">rachelwonghw</Navbar.Brand>
      <Navbar.Toggle onClick={onToggle} />
      <Navbar.Collapse isOpen={isOpen} navbar>
        <Nav navbar className='ml-auto'>
          <Nav.Item>
            <Nav.Link href={Resume} target="_blank"><FileText color="white" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://github.com/rachelwonghw'><GitHub color="white" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='mailto:hello@rachelwonghw.com'><Mail color="white" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.linkedin.com/in/rachelwonghw/'><Linkedin color="white" /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;