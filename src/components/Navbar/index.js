import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Logo,
} from "./styles";

const Navbar = ({ toggle, black }) => {

  return (
    <>
      <Nav className={black ? 'black' : ''} >
        <NavbarContainer >
          <NavLogo>
            <Logo src="/logo.png" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Inicio">Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Sobre">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="habilidades">Habilidades</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experiencias">Experiencias</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contatos">Contatos</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
