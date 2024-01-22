import { NowInfoProps } from "../../../../types/weather-types";
import { Container, Footer, Header } from "./styles";

type Props = {
  data: NowInfoProps;
};

const NowInfo: React.FC<Props> = ({ data }: Props) => {
  return (
    <Container>
      <Header>
        <img src={data?.image} alt={data?.title} />
        <span>{data?.value}</span>
      </Header>
      <Footer>{data?.title}</Footer>
    </Container>
  );
};

export default NowInfo;
