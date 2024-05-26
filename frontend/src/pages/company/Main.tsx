import React, { ReactNode } from "react";
import "../../assets/pages/company/company.scss";
import Header from "./Header";

interface MainProps {
  children: ReactNode;
}
const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="company-container">
      <div className="company-container__body">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Main;
