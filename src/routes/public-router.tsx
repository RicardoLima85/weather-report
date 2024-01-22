import { Route, Routes } from "react-router-dom";
import Forecasts from "../pages/forecasts";
import AddForecasts from "../pages/add-forecasts";

const PublicRouter: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" Component={Forecasts} />
      <Route index path="/forecasts" Component={Forecasts} />
      <Route index path="/add-forecasts" Component={AddForecasts} />
    </Routes>
  );
};

export default PublicRouter;
