import {
  HomeContainer,
  HomeBackground,
  HomeContent,
  ContentText,
  HomeH1,
  HomeFerramenta,
  HomeParagrafo,
  Img
} from "./styles";
//import Video from '../../../public/video.mp4'

function HomeSection() {
  return (
    <HomeContainer>
      <HomeBackground>
        <Img src="/home.jpg" />
      </HomeBackground>
      <HomeContent>
        <ContentText>
          <HomeH1>Alex Alexandrino</HomeH1>
          <HomeParagrafo>
            <HomeFerramenta>Desenvolvedor Web e Mobile JR</HomeFerramenta>
            <HomeFerramenta>React.JS, React Native e Next.JS</HomeFerramenta>
          </HomeParagrafo>
        </ContentText>
        {/*<ContentImg src="/home2.svg"></ContentImg>*/}
      </HomeContent>
    </HomeContainer>
  );
}

export default HomeSection;
