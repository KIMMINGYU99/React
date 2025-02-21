import TableRow from "./TableRow";

const TableBody = () => {
  const css = { backgroundColor: "red", color: "white" };
  const arr = [
    {
      tableData: { data: ["2017.05.28"] },
      header: {
        headerName: "창단일",
        backgroundColor: "black",
        color: "white",
      },
    },
    {
      tableData: { data: ["대한민국"] },
      header: {
        headerName: "소재지",
        backgroundColor: "black",
        color: "white",
      },
    },
    {
      tableData: { data: ["LOL", "PUBG", "Valorant"] },
      header: {
        headerName: "종목",
        ...css,
      },
    },
  ];
  return (
    <tbody>
      {arr.map((v) => (
        <TableRow {...v} />
      ))}
    </tbody>
  );
};

export default TableBody;
