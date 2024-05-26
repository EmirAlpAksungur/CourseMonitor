import React from "react";
import { useAppDispatch } from "./hooks/redux";
import AppRouter from "./routers/appRouter";
import { Notification } from "./components";
import { fetchDashboard } from "./services/actions/dashboard";

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchDashboard());
  }, []);
  return (
    <React.Fragment>
      <AppRouter />
      <Notification />
    </React.Fragment>
  );
}

export default App;
