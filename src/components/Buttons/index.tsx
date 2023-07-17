// Buttons.tsx
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";
import { BorderIcons, CardButton, Container } from "./styled";

interface ButtonsProps {
  buttonText: string;
  icon: React.ReactNode;
}

const Buttons: React.FC<ButtonsProps> = ({ buttonText, icon }) => {
  return (
    <Container>
      <CardButton>
        <BorderIcons>{icon}</BorderIcons>
        {buttonText}
      </CardButton>
      <ArrowRight size={32} cursor={"pointer"} />
    </Container>
  );
};

export default Buttons;
