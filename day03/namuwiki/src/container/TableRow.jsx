import TableData from "../component/TableData";
import TableHeader from "../component/TableHeader";

const TableRow = (props) => {
  const { header, tableData } = props;
  return (
    <tr>
      <TableHeader {...header} />
      <TableData {...tableData} />
    </tr>
  );
};

export default TableRow;
