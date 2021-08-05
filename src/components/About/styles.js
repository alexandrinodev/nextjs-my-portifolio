import styled from "styled-components";

//Primeira Parte
export const ContainerAbout = styled.div`
`

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const Eu = styled.img`
  height: 350px;
  margin-left: 150px;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    display: none;
  } 
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
