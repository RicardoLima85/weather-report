import { useWeatherStore } from "../../../stores/weather-store";
import { Indeterminated, Progress } from "./styles";

const ProgressBar: React.FC = () => {
  const loading = useWeatherStore((state) => state.loading.state.loading);
  if (!loading) return <></>;
  return (
    <Progress>
      <Indeterminated />
    </Progress>
  );
};

export default ProgressBar;
