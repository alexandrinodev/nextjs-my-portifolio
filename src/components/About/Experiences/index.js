import {
  Container,
  CardContainer,
  CardTitle,
  CardCargo,
  CardData,
  DataInicio,
  DataFim,
  DataLabel,
  DataDay,
  CardDescription,
  Img,
} from "./styles";

function Experiences() {
  return (
    <Container>
      <CardContainer>
        <Img src="/work.svg"></Img>
        <CardTitle>SEDECTI</CardTitle>
        <CardCargo>Analista de Suporte</CardCargo>
        <CardData>
          <DataInicio>
            <DataLabel>Inicio</DataLabel>
            <DataDay>09/2018</DataDay>
          </DataInicio>
          <DataFim>
            <DataLabel>Termino</DataLabel>
            <DataDay>06/2021</DataDay>
          </DataFim>
        </CardData>
        <CardDescription>
          Montagem e manutenção de computadores, suporte ao usuário, instalação
          de software, manutenção em redes de computadores, auxiliar nas
          atividades do dia-a-dia, auxiliar no manuseio de sistemas, segmentação
          da rede e Infraestrutura.
        </CardDescription>
      </CardContainer>

      <CardContainer>
        <Img src="/work.svg"></Img>
        <CardTitle>Mundo NetRadio</CardTitle>
        <CardCargo>Analista de Suporte</CardCargo>
        <CardData>
          <DataInicio>
            <DataLabel>Inicio</DataLabel>
            <DataDay>01/2014</DataDay>
          </DataInicio>
          <DataFim>
            <DataLabel>Termino</DataLabel>
            <DataDay>12/2015</DataDay>
          </DataFim>
        </CardData>
        <CardDescription>
          Montagem e manutenção de computadores, suporte ao usuário, instalação
          de software, manutenção em redes de computadores, instalação de
          câmeras.
        </CardDescription>
      </CardContainer>
    </Container>
  );
}

export default Experiences;
