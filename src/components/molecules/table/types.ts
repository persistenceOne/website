export interface AssetTableProps {
  id: number;
  assetName: any;
  amount: string;
  daysLest: string;
  status: string;
}

export interface TableColumnsProps {
  label: string;
  accessor: string;
  sortable: boolean;
  sortbyOrder?: "asc" | "desc";
}

export interface TableProps {
  data: any;
  columns: TableColumnsProps[];
}

export interface TableHeadProps {
  handleSorting: any;
  columns: TableColumnsProps[];
}

export interface TableBodyProps {
  tableData: any;
  columns: TableColumnsProps[];
}
