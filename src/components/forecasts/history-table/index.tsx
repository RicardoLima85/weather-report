import { History } from "../../../types/model-types";
import { DateUtils } from "../../../utils/date-utils";
import { Table, TableHolder, Tr } from "./styles";

type Props = {
  data: History[];
};

const HistoryTable: React.FC<Props> = ({ data }: Props) => {
  return (
    <TableHolder>
      <Table>
        <thead>
          <Tr>
            <th>Data</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </Tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((item, index) => (
              <Tr
                key={`${index}-${DateUtils.formatDate(new Date(item?.date))}`}
              >
                <td>{`${DateUtils.formatDate(new Date(item?.date))} ${DateUtils.formatTime(new Date(item?.date))}`}</td>
                <td>{item?.latitude}</td>
                <td>{item?.longitude}</td>
              </Tr>
            ))
          ) : (
            <Tr>
              <td style={{ textAlign: "left" }} colSpan={3}>
                Não há nenhum histórico
              </td>
            </Tr>
          )}
        </tbody>
      </Table>
    </TableHolder>
  );
};

export default HistoryTable;
