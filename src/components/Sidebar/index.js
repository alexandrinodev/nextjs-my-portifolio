import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./styles";

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Inicio" onClick={toggle}>Inicio</SidebarLink>
          <SidebarLink to="Sobre" onClick={toggle}>Sobre</SidebarLink>
          <SidebarLink to="Habilidades" onClick={toggle}>Habilidades</SidebarLink>
          <SidebarLink to="Experiencia" onClick={toggle}>Experiencia</SidebarLink>
          <SidebarLink to="Contato" onClick={toggle}>Contato</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
