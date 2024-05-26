import { instance, unAuthConfig } from "./baseUnit";

const getDashboards = () => {
  return instance.get("/case/dashboard", unAuthConfig);
};

const DashboardService = {
  getDashboards,
};

export default DashboardService;
