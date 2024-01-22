import { Link, useLocation } from "react-router-dom";
import { Navigator } from "./styles";

const NavigatorBar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <Navigator>
        <li>
          <Link
            to="/forecasts"
            className={["/", "/forecasts"].includes(pathname) ? "active" : ""}
          >
            Previsão
          </Link>
        </li>
        <li>
          <Link
            to="/add-forecasts"
            className={["/add-forecasts"].includes(pathname) ? "active" : ""}
          >
            Histórico
          </Link>
        </li>
      </Navigator>
    </nav>
  );
};

export default NavigatorBar;
