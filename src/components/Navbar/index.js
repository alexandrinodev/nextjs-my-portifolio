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
} from "./styles";
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Minha Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='Inicio'>Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Sobre'>Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='habilidades'>Habilidades</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='experiencias'>Experiencias</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contatos'>Contatos</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;