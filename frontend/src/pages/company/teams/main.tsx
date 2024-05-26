import React from "react";
import { RGL } from "../../../components";
import { layouts, content } from "../../../services/types/company";
const main = () => {
  return (
    <div>
      <RGL content={content} layouts={layouts} />
    </div>
  );
};

export default main;
