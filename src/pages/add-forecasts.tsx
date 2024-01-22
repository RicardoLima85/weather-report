import HistoryTable from "../components/forecasts/history-table";
import { Paper } from "../components/ui/card/styles";
import ProgressBar from "../components/ui/progress-bar";
import { useHistory } from "../hooks/use-history";

const AddForecasts: React.FC = () => {
  const { history } = useHistory();
  return (
    <Paper.Holder>
      <ProgressBar />
      <Paper.Header>
        <Paper.Title>Histórico de buscas</Paper.Title>
      </Paper.Header>
      <Paper.Content>
        <HistoryTable data={history} />
      </Paper.Content>
    </Paper.Holder>
  );
};

export default AddForecasts;
