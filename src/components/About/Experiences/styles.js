import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;  
    align-items: center;
    }
`;

export const CardContainer = styled.div`
  border-radius: 20px;
  background: #eee;
  max-width: 18rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgba(34, 90, 89, 0.2);

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 10px;
    padding-bottom: 10px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 1.8rem;
  line-height: 10px;
`;

export const CardCargo = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 5px;
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 10px;
`;

export const DataInicio = styled.p`
  padding-right: 40px;
`;

export const DataFim = styled.p``;

export const DataLabel = styled.p`
  font-weight: bold;
`;

export const DataDay = styled.p`
  font-size: 1rem;
`;

export const CardDescription = styled.p`
  padding: 0 20px;
  text-align: center;
`;


export const Img = styled.img`
  max-width: 100px;
  height:auto;
  margin-top: 20px;
`;