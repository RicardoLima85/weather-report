import { useMemo } from "react";
import {
  DayContainer,
  RangeContainer,
  RangeValue,
  Temperature,
} from "./styles";
import { DaysInnerProps } from "../../../types/weather-types";

type Props = {
  today: boolean;
  data: DaysInnerProps;
};

const Days: React.FC<Props> = ({ today, data }: Props) => {
  const rangeValue = useMemo(() => {
    const min = -10;
    const max = 55;
    const value = Number((data?.total / data?.quantity).toFixed(0));
    return ((value - min) / (max - min)) * 100;
  }, [data]);
  return (
    <DayContainer>
      <p>{today ? "Hoje" : data?.dayOfWeek}</p>
      <div>
        <RangeContainer>
          <RangeValue range={rangeValue}></RangeValue>
        </RangeContainer>
        <Temperature>{`${(data?.total / data?.quantity).toFixed(
          0
        )}°`}</Temperature>
      </div>
    </DayContainer>
  );
};

export default Days;
