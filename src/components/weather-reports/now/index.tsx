import { WeatherModel } from "../../../types/weather-types";
import ReloadButton from "../../ui/button/reload-button";
import { Paper } from "../../ui/card/styles";
import DayNightImage from "../day-night-image";
import Watch from "../watch";
import NowInfo from "./now-info";
import { Top, Bottom, Container, Temperature, InfoHolder } from "./styles";

type Props = {
  data?: WeatherModel;
};

const Now: React.FC<Props> = ({ data }: Props) => {
  if (!data) return <></>;
  return (
    <>
      <Paper.Header className="spacing">
        <Paper.Title>Agora</Paper.Title>
        <ReloadButton />
      </Paper.Header>
      <Container>
        <Top>
          <Temperature>
            <Watch />
            <h1>{data?.temperature2m}°C</h1>
            <div>
              <span>
                <DayNightImage hour={Number(data?.hour)} />
                {data?.isDay ? "Dia" : "Noite"}
              </span>
              <span>
                <img src="/thermostat-icon.svg" alt="Sensação termica" />
                {`${data?.apparentTemperature}°`}
              </span>
            </div>
          </Temperature>
        </Top>
        <Bottom>
          <InfoHolder>
            <NowInfo
              data={{
                title: "Vento",
                value: data?.windSpeed10m,
                image: "/airwave-icon.svg",
              }}
            />
            <NowInfo
              data={{
                title: "Direção",
                value: `${data?.windDirection10m}°`,
                image: "/air-icon.svg",
              }}
            />
            <NowInfo
              data={{
                title: "Visibilidade",
                value: data?.visibility,
                image: "/visibility-icon.svg",
              }}
            />
            <NowInfo
              data={{
                title: "Pressão",
                value: data?.surfacePressure,
                image: "/public-icon.svg",
              }}
            />
            <NowInfo
              data={{
                title: "Cobertura",
                value: data?.cloudCover,
                image: "/cloud-icon.svg",
              }}
            />
            <NowInfo
              data={{
                title: "Umidade",
                value: data?.relativeHumidity2m,
                image: "/humidity-percentage-icon.svg",
              }}
            />
          </InfoHolder>
        </Bottom>
      </Container>
    </>
  );
};

export default Now;
