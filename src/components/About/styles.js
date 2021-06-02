import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  transition: 0.8s ease-in-out;

  @media screen and (max-width: 768px) {
    transition: 0.8s ease-in-out;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
    margin-right: 10px;
  }
`;

export const Subtitle = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  color: #808080;

  max-width: 1100px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const HabilidadesContainer = styled.div`
  @media screen and (max-width: 768px) {
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 15px;
`;
