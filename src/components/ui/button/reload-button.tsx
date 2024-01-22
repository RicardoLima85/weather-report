import { useShallow } from "zustand/react/shallow";
import { useWeatherStore } from "../../../stores/weather-store";
import { Button } from "./styles";

const ReloadButton: React.FC = () => {
  const [reload] = useWeatherStore(
    useShallow((state) => [state.weather.action.reload])
  );
  return (
    <Button.Hollow onClick={async () => reload()}>
      <img src="/refresh-icon.svg" alt="Atualizar" />
    </Button.Hollow>
  );
};

export default ReloadButton;
