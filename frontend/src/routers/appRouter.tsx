import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Loadable } from "../components";
import history from "./history";
import Header from "../layout/header/Main";
const Company = Loadable(lazy(() => import("../pages/company/Main")));
const Teams = Loadable(lazy(() => import("../pages/teams/Main")));
const Management = Loadable(
  lazy(() => import("../pages/company/management/Main"))
);
const CompanyTeam = Loadable(lazy(() => import("../pages/company/teams/main")));
const AppRouter: React.FC = () => {
  return (
    <HistoryRouter history={history}>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route
            path="/"
            element={
              <Header>
                <Outlet />
              </Header>
            }
          >
            <Route
              path="/"
              element={
                <Company>
                  <Outlet />
                </Company>
              }
            >
              <Route path="" element={<CompanyTeam />} />
              <Route path="/company" element={<CompanyTeam />} />
              <Route path="/company/management" element={<Management />} />
            </Route>

            <Route path="teams" element={<Teams />} />
          </Route>
        </Routes>
      </Suspense>
    </HistoryRouter>
  );
};

export default React.memo(AppRouter);
