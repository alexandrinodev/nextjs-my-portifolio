import styled from "styled-components";

//Primeira Parte

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const Eu = styled.img`
  height: 350px;
  margin-left: 150px;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #808080;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
