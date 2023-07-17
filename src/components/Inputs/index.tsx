import { PaperPlaneRight, PlusCircle } from "@phosphor-icons/react";
import React from "react";
import { Container } from "./styled";
import { BorderIcons } from "../Buttons/styled";

const InputWithIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "auto 1fr",
        width: "100%",
      }}
    >
      {icon}
      <input
        placeholder="Envie uma mensagem ou digite “/” para exibir os comandos "
        style={{
          width: "94%",
          paddingLeft: "10px",
          background: "none",
          border: "none",
          fontSize: "23px",
        }}
      />
    </div>
  );
};

const Inputs = () => {
  return (
    <div
      style={{
        marginBottom:'54px',
        display: "flex",
        width: "80%",
        justifyContent: "space-between",
      }}
    >
      <Container>
        <InputWithIcon icon={<PlusCircle size={32} />} />
      </Container>
      <BorderIcons style={{ backgroundColor: "rgb(1 0 8 / 50%)" }}>
        <PaperPlaneRight size={32} />
      </BorderIcons>
    </div>
  );
};

export default Inputs;
