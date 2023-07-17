import {
  Code,
  ImageSquare,
  MagicWand,
  MusicNotesSimple,
  PlayCircle,
} from "@phosphor-icons/react";
import { Card, CardBox, Conatiner, Texts } from "./styled";
import Title from "../Title";
import Buttons from "../Buttons";

const Home = () => {
  return (
    <Conatiner>
      <CardBox>
        <Texts>
          <MagicWand size={64} />
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
    </Conatiner>
  );
};

export default Home;
