import {
  HomeContainer,
  HomeVideo,
  Video,
  HomeContent,
  ContentText,
  HomeH1,
  HomeFerramenta,
  HomeP,
  ContentImg,
  HomeParagrafo,
} from "./styles";
//import Video from '../../../public/video.mp4'

function HomeSection() {
  return (
    <HomeContainer>
      <HomeVideo>
        <Video autoPlay loop muted src="/video.mp4" type="video/mp4" />
      </HomeVideo>
      <HomeContent>
        <ContentText>
          <HomeH1>Desenvolvedor</HomeH1>
          <HomeParagrafo>
            <HomeFerramenta>React Js e Node JS</HomeFerramenta>
            <HomeFerramenta>Front-End</HomeFerramenta>
          </HomeParagrafo>
        </ContentText>
        <ContentImg src="/home2.svg"></ContentImg>
      </HomeContent>
    </HomeContainer>
  );
}

export default HomeSection;
