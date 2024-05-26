import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/configureStore";
import { layouts, content } from "../../services/types/teams";
import companyHeader from "../../assets/Img/company-header.png";
import "../../assets/pages/teams/teams.scss";
import "../../assets/pages/company/company.scss";
import { RGL } from "../../components";
import { TEAM_EMPLOYEE_DETAIL } from "../../services/types/RGL";
import LoadingComp from "../../components/loading/LoadingComp";
const Main: React.FC = () => {
  const data = useAppSelector((state: RootState) => state?.teams);
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  if (data.length > 0)
    return (
      <div className="teams-container">
        <div className="teams-container__body">
          <div
            className="company-container__body__header"
            style={{ minHeight: "375px" }}
          >
            <div className="company-container__body__header__content">
              <div className="company-container__body__header__content__body">
                {data?.[value]?.description}
              </div>
            </div>
            <div className="company-container__body__header__img">
              <img src={companyHeader} />
            </div>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            className="teams-container__body__tabs"
          >
            {data.map((e: any, i: number) => (
              <Tab
                key={i}
                label={e.title}
                className={`teams-container__body__tabs__item ${
                  value === i && "teams-container__body__tabs__item__active"
                }`}
              />
            ))}
          </Tabs>
          <RGL
            layouts={layouts}
            content={[
              ...content,
              ...data?.[value]?.employees?.map((e: any, i: number) => {
                return {
                  id: (content?.length + i).toString(),
                  type: TEAM_EMPLOYEE_DETAIL,
                  uuid: i,
                };
              }),
            ]}
            teamKod={value}
            key={value}
          />
        </div>
      </div>
    );
  return <LoadingComp />;
};

export default Main;
