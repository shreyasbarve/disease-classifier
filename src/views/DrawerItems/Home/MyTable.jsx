// core
import { DataGrid } from "@material-ui/data-grid";

export default function MyTable({ arr }) {
  const cols = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "result",
      headerName: "Result",
      width: 250,
    },
  ];

  const rows = arr.map((data, index) => ({
    id: index + 1,
    date: data.date,
    result: data.result.Prediction,
  }));

  return <DataGrid rows={rows} columns={cols} pageSize={10} />;
}
