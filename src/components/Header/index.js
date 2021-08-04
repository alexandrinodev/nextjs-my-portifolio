import { Container, Content, Info } from "./styles";

function Header() {
  return (
    <Container imgUrl="/home.jpg">

      <Content>
        <Info>
          <div className="info">
            <p>alex alexandrino</p>
            <br />
            <p>react js, react native, Desenvolvedor web</p>
          </div>
        </Info>
      </Content>
    </Container>
  );
}

export default Header;
