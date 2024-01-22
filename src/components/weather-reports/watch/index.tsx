import { DateUtils } from "../../../utils/date-utils";
import { Container, Today, Timer } from "./styles";
import { useWatch } from "../../../hooks/use-watch";

const Watch: React.FC = () => {
  const { date } = useWatch(false)

  return (
    <Container>
      <Timer>{DateUtils.formatTime(date)}</Timer>
      <Today>{DateUtils.formatDate(date)} </Today>
    </Container>
  );
};

export default Watch;
