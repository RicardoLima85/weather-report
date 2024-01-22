import { useMemo } from "react";
import { Paper } from "../ui/card/styles";
import { Container, HourlyContainer } from "./styles";
import { DateUtils } from "../../utils/date-utils";
import Hour from "./hour";
import Days from "./days";
import Now from "./now";
import GeoForm from "../geo-form";
import { useWeatherStore } from "../../stores/weather-store";
import { DaysProps } from "../../types/weather-types";
import ReloadButton from "../ui/button/reload-button";

const WeatherReports: React.FC = () => {
  const data = useWeatherStore((state) => state.weather.state.data);
  const now = useMemo(() => {
    const dateNow = new Date();
    const hour = DateUtils.getHour(dateNow);
    const dateNowFormated = DateUtils.formatDate(dateNow);
    return data.find((weather) => {
      const weatherDate = new Date(weather.day);
      return (
        DateUtils.formatDate(weatherDate) === dateNowFormated &&
        DateUtils.getHour(weatherDate) === hour
      );
    });
  }, [data]);

  const days = useMemo(() => {
    let final: DaysProps = {};
    data.forEach((weather) => {
      const day = DateUtils.formatDate(new Date(weather.day));
      if (day in final) {
        const weatherNow = final[day];
        final[day] = {
          ...weatherNow,
          quantity: weatherNow.quantity + 1,
          total: weatherNow.total + weather.temperature2m,
        };
      } else {
        final = {
          ...final,
          [day]: {
            dayOfWeek: DateUtils.getDayOfWeek(new Date(weather.day)),
            quantity: 1,
            total: weather.temperature2m,
          },
        };
      }
    });
    return final;
  }, [data]);

  const today = useMemo(() => {
    const dateNow = new Date();
    const dateNowFormated = DateUtils.formatDate(dateNow);
    return data.filter((weather) => {
      const weatherDate = new Date(weather.day);
      return DateUtils.formatDate(weatherDate) === dateNowFormated;
    });
  }, [data]);

  return (
    <Container>
      <div className="search-form">
        <GeoForm />
      </div>
      {now && (
        <Paper.Holder className="main-card">
          <Now data={now} />
        </Paper.Holder>
      )}
      {Object?.keys(days)?.length > 0 && (
        <Paper.Holder className="secondary-card">
          <Paper.Header className="spacing">
            <Paper.Title>Semana</Paper.Title>
            <ReloadButton />
          </Paper.Header>
          <Paper.Content>
          {Object?.keys(days)?.map((key, index) => {
            const today = key === DateUtils.formatDate(new Date());
            const day = days[key];
            return <Days key={`${index}-${key}`} data={day} today={today} />;
          })}
          </Paper.Content>
        </Paper.Holder>
      )}
      {today?.length > 0 && (
        <Paper.Holder className="hourly-forecast">
          <Paper.Header className="spacing">
            <Paper.Title>Hora</Paper.Title>
            <ReloadButton />
          </Paper.Header>
          <HourlyContainer>
            {today?.map((hour, index) => (
              <Hour key={`${index}-${hour?.day}`} data={hour} />
            ))}
          </HourlyContainer>
        </Paper.Holder>
      )}
    </Container>
  );
};

export default WeatherReports;
