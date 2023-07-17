// Buttons.tsx
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

// Interface para as props do componente
interface ButtonsProps {
  buttonText: string; // Texto para o botão
  icon: React.ReactNode; // Ícone (pode ser um componente React)
}

const Buttons: React.FC<ButtonsProps> = ({ buttonText, icon }) => {
  return (
    <div style={{ width: "100%", display: "flex" , justifyContent:'space-between'}}>
      <div style={{gap:'8px', display:'flex'}}>
        {icon}
        {buttonText}
      </div>
      <ArrowRight size={32} cursor={'pointer'} />
    </div>
  );
};

export default Buttons;
