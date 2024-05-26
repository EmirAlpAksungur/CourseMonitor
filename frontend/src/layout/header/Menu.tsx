import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { routeToUrl } from "../../routers/utils";

import { MyMenu } from "../../components";
interface ElementType {
  isOpen: boolean;
}

const Element: React.FC<ElementType> = ({ isOpen }) => {
  return isOpen ? (
    <MenuOpenIcon fontSize="large" />
  ) : (
    <MenuIcon fontSize="large" />
  );
};
export interface MenuItemHelperType {
  //   Icon: React.FC;
  text: string;
  route: string;
}

const MenuItemHelper: React.FC<MenuItemHelperType> = ({ text, route }) => {
  return (
    <MenuItem
      className={"app-header__mobile-menu__menu-item"}
      onClick={() => routeToUrl(route)}
    >
      {text}
    </MenuItem>
  );
};

const Main: React.FC = () => {
  return (
    <MyMenu Element={Element}>
      <MenuItemHelper text={"Company"} route="/company" />
      <MenuItemHelper text={"Teams"} route="/teams" />
    </MyMenu>
  );
};

export default React.memo(Main);
