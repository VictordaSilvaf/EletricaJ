import React from "react";
import Bars from "../assets/bars.svg";

interface MenuButtonProps {
  onButtonClick : () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onButtonClick }) => {
  return (
    <button className="lg:hidden text-azul_escuro p-3" onClick={onButtonClick }>
      <img src={Bars} alt="menu button" className="h-5" />
    </button>
  );
};

export default MenuButton;
