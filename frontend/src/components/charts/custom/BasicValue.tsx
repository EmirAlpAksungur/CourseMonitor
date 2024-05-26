import React from "react";
import "../../../assets/components/charts/basicContainer.scss";
interface BasicValueType {
  value: number;
  text: string;
}

const BasicValue: React.FC<BasicValueType> = ({ value, text }) => {
  return (
    <div className="basic-container">
      <div>
        <div className="basic-container__value">{value}</div>
        <div className="basic-container__text">{text}</div>
      </div>
    </div>
  );
};

export default BasicValue;
