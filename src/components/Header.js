import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
 } from 'reactstrap';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar dark expand='md' className='bg-transparent' fixed='top'>
      <NavbarBrand href="/">rachelwonghw</NavbarBrand>
      <NavbarToggler onClick={onToggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className='ml-auto'>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#employment'>Employment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#contact'>Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;