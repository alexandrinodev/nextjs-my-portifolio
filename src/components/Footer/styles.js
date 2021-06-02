import styled from "styled-components";
import { SiGmail, SiWhatsapp } from "react-icons/si";

import { MdEmail } from "react-icons/md";

export const Container = styled.div`
  background: #000;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 250px;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    font-size: 0.9rem;
  }
`;

export const LogoContainer = styled.div``;

export const ImgContact = styled.img`
  width: 300px;
  @media screen and (max-width: 425px) {
    width: 200px;
  }
`;

export const ContactContainer = styled.div`
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Whatsapp = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWhat = styled.img`
  height: 30px;
`;

export const WhatsappText = styled.p`
  padding: 0 10px;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
`;

export const IconEmail = styled.img`
  height: 30px;
`;

export const EmailText = styled.p`
  padding: 0 10px;
`;

export const DireitosContainer = styled.div``;

export const TitleDireitos = styled.h1`
  margin: 0;
`;

export const ContentP = styled.p`
  line-height: 25px;
`;

export const LinkSocial = styled.div`
  display: flex;
`;

export const ContentImg = styled.a`
  cursor: pointer;
  padding: 0 10px;
`;

export const Img = styled.img`
  height: 50px;
`;
