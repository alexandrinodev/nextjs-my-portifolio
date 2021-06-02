import {
  Container,
  LogoContainer,
  ContactContainer,
  ImgContact,
  DireitosContainer,
  TitleDireitos,
  ContentP,
  ContentImg,
  Img,
  Whatsapp,
  Icon,
  Email,
  EmailText,
  WhatsappText,
  IconWhat,
  IconEmail,
  LinkSocial,
} from "./styles";

import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <Container>
      <LogoContainer>
        <ImgContact src="/social-media.svg"></ImgContact>
      </LogoContainer>
      <ContactContainer>
        <Whatsapp>
          <IconWhat src="/whatsapp.svg"></IconWhat>
          <WhatsappText>92 98449 - 4933</WhatsappText>
        </Whatsapp>
        <Email>
          <IconEmail src="/gmail.svg"></IconEmail>
          <EmailText>alexbrunoalexandrino@gmail.com</EmailText>
        </Email>
      </ContactContainer>
      <DireitosContainer>
        <TitleDireitos>Desenvolvedor</TitleDireitos>
        <ContentP>
          Desenvolvido por Alex Alexandrino
          <br /> Todos os Direitos Reservador
        </ContentP>
        <LinkSocial>
          <ContentImg href='https://www.facebook.com/alex.brunoii.5/ ' target="_blank">
            <Img src="/facebook.svg"></Img>
          </ContentImg>
          <ContentImg href='https://github.com/alexandrinodev' target="_blank">
            <Img src="/github.svg"></Img>
          </ContentImg>
          <ContentImg href='https://www.linkedin.com/in/alexandrino-alex/' target="_blank">
            <Img src="/linkedin.svg"></Img>
          </ContentImg>
        </LinkSocial>
      </DireitosContainer>
    </Container>
  );
}

export default Footer;
