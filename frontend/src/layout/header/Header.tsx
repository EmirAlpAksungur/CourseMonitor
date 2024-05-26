import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import { Avatar, Grid, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../../assets/layout/header.scss";
import ThemeSelect from "./ThemeSelect";
import { routeToUrl } from "../../routers/utils";
import Menu from "./Menu";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 26,
  height: 26,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Grid container className="app-header" columnSpacing={2}>
      <Grid item className="app-header__mobile-menu">
        <IconButton className="app-header__mobile-menu__btn">
          <Menu />
        </IconButton>
      </Grid>

      <Grid item className="app-header__left" xs>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            className={`app-header__left__btn ${
              location.pathname.split("/")?.[1] !== "teams"
                ? "app-header__left__btn__active"
                : ""
            }`}
            onClick={() => {
              routeToUrl("/company");
            }}
          >
            Company
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            className={`app-header__left__btn ${
              location.pathname.split("/")?.[1] === "teams"
                ? "app-header__left__btn__active"
                : ""
            }`}
            onClick={() => {
              routeToUrl("/teams");
            }}
          >
            Teams
          </Button>
        </Grid>
      </Grid>
      <Grid item className="app-header__right">
        <ThemeSelect />
        <Button className="app-header__right__btn">
          <SmallAvatar />
          <span className="app-header__right__btn__user-name">JWT User</span>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
