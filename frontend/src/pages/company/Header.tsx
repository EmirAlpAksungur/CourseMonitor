import React from "react";
import companyHeader from "../../assets/Img/company-header.png";
import { Button } from "@mui/material";
import { routeToUrl } from "../../routers/utils";
import { useLocation } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Header: React.FC = () => {
  const location = useLocation();
  return (
    <div className="company-container__body__header">
      <div className="company-container__body__header__content">
        <div className="company-container__body__header__content__header">
          Welcome to App
        </div>
        <div className="company-container__body__header__content__body">
          Easily manage your company, easily update your teams and track course
          statistics, manage the training your employees receive.
        </div>
        <div className="company-container__body__header__content__btn-container">
          <Button
            variant="outlined"
            className="company-container__body__header__content__btn-container__btn"
            onClick={() => {
              if (location.pathname.split("/")?.[2] === "management") {
                routeToUrl("/company");
              } else {
                routeToUrl("/company/management");
              }
            }}
          >
            {location.pathname.split("/")?.[2] === "management" ? (
              <ArrowBackIcon />
            ) : (
              "management"
            )}
          </Button>
        </div>
      </div>
      <div className="company-container__body__header__img">
        <img src={companyHeader} />
      </div>
    </div>
  );
};

export default Header;
