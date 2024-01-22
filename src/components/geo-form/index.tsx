import { useEffect, useRef } from "react";
import { Button } from "../ui/button/styles";
import { Paper } from "../ui/card/styles";
import { Forms } from "../ui/forms/styles";
import { useWeatherStore } from "../../stores/weather-store";
import { useShallow } from "zustand/react/shallow";
import ProgressBar from "../ui/progress-bar";

const GeoForm: React.FC = () => {
  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitdeRef = useRef<HTMLInputElement>(null);

  const [loading, error, getForecast] = useWeatherStore(
    useShallow((state) => [
      state.loading.state.loading,
      state.error.state.error,
      state.weather.action.forecast,
    ])
  );

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            if (latitudeRef.current) latitudeRef.current.value = latitude.toString();
            if (longitdeRef.current) longitdeRef.current.value = longitude.toString();
          }
        );
      } else {
        console.error('GeolocationError');
      }
    };
    getLocation(); 
  }, []);

  useEffect(() => {
    if (latitudeRef.current) latitudeRef.current.value = "-14.8642243";
    if (longitdeRef.current) longitdeRef.current.value = "-40.8842624";
  }, []);

  return (
    <section>
      <Paper.Holder>
        <Forms.Form
          disabled={loading}
          onSubmit={(event) => {
            event?.preventDefault();
            getForecast({
              latitude: latitudeRef?.current?.value || "",
              longitude: longitdeRef?.current?.value || "",
            });
          }}
        >
          <Forms.InputField>
            <Forms.Label htmlFor="latitude">Latitude</Forms.Label>
            <Forms.Input
              type="text"
              id="latitude"
              data-testid="latitude"
              ref={latitudeRef}
              disabled={loading}
              />
          </Forms.InputField>
          <Forms.InputField>
            <Forms.Label htmlFor="longitude">Longitude</Forms.Label>
            <Forms.Input
              type="text"
              id="longitude"
              data-testid="longitude"
              ref={longitdeRef}
              disabled={loading}
            />
          </Forms.InputField>
          <Button.Primary disabled={loading} type="submit">
            BUSCAR
          </Button.Primary>
        </Forms.Form>
        <ProgressBar />
        {error?.length > 0 && (
          <Paper.Footer>
            <Forms.Error>
              {error === "ValidationError"
                ? "Latitude ou longitude não são números válidos."
                : "Houve algum erro."}
            </Forms.Error>
          </Paper.Footer>
        )}
      </Paper.Holder>
    </section>
  );
};

export default GeoForm;
