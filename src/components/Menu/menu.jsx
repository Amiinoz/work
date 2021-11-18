import React from "react";
import MenuButton from "./MenuButton/menuButton";
import MenuContent from "./MenuContent/menuContent";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <MenuButton />
      <MenuContent />
    </div>
  );
}
