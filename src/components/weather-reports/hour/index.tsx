import { WeatherModel } from "../../../types/weather-types";
import DayNightImage from "../day-night-image";
import { HourContainer, HourPeriod } from "./styles";

type Props = {
  data: WeatherModel;
};

const Hour: React.FC<Props> = ({ data }: Props) => {
  return (
    <HourContainer>
      <p>
        {`${data?.hour}:00`}{" "}
        <HourPeriod>{Number(data?.hour) > 12 ? "PM" : "AM"}</HourPeriod>
      </p>
      <DayNightImage hour={Number(data?.hour)} />
      <p>{`${data?.temperature2m}°`}</p>
    </HourContainer>
  );
};

export default Hour;
