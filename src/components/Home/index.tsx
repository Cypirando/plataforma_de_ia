import {
  Code,
  ImageSquare,
  MagicWand,
  MusicNotesSimple,
  PlayCircle,
} from "@phosphor-icons/react";
import { Card, CardBox, Container, Divider, Texts } from "./styled";
import Title from "../Title";
import Buttons from "../Buttons";
import Inputs from "../Inputs";
import { BorderIcons } from "../Buttons/styled";

const Home = () => {
  return (
    <Container>
      <CardBox>
        <Texts>
          <BorderIcons style={{ backgroundColor: "rgb(1 0 8 / 50%)" }}>
            <MagicWand size={64} />
          </BorderIcons>
          <Title />
        </Texts>
        <Card>
          <Buttons buttonText="Gerador de códigos" icon={<Code size={32} />} />
          <Buttons
            buttonText="Edição de foto"
            icon={<ImageSquare size={32} />}
          />
          <Buttons
            buttonText="Geração de vídeos"
            icon={<PlayCircle size={32} />}
          />
          <Buttons
            buttonText="Criador de áudios e musicas "
            icon={<MusicNotesSimple size={32} />}
          />
        </Card>
      </CardBox>
      <Divider />
      <Inputs />
    </Container>
  );
};

export default Home;
