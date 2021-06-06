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
  Img
} from "./styles";
//import Video from '../../../public/video.mp4'

function HomeSection() {
  return (
    <HomeContainer>
      <HomeVideo>
        {/*<Video autoPlay loop muted src="/video.mp4" type="video/mp4" />*/}
        <Img src="/home.jpg" />
      </HomeVideo>
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
