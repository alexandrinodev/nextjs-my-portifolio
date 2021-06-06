import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 550px;
  position: relative;
  z-index: 1;
`;

export const HomeVideo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const HomeContent = styled.div`
  color: #fff;
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;

export const ContentText = styled.div`
  line-height: 5px;
`;

export const HomeH1 = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 425px) {
    font-size: 2.5rem;
  }
`;

export const HomeParagrafo = styled.p`
  display: flex;
  flex-direction: column;
`;

export const HomeFerramenta = styled.p`
  font-size: 36px;
  color: #20b2aa;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 425px) {
    line-height: 30px;
  }

  @media screen and (max-width: 320px) {
    font-size: 20px;
  }
`;

export const HomeP = styled.p`
  font-size: 24px;
`;

export const ContentImg = styled.img`
  max-width: 300px;
  max-height: 300px;

  @media screen and (max-width: 768px) {
    max-width: 250px;
    max-height: 250px;
  }

  @media screen and (max-width: 320px) {
    max-width: 200px;
    max-height: 200px;
  }
`;
