import { useState } from "react";
import { TableHeadProps } from "./types";
import { emptyFunc } from "../../../utils/helpers";
import Icon from "../Icon";

const TableHead = ({ columns, handleSorting }: TableHeadProps) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("desc");

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr className="h-14">
        {columns.map(({ label, accessor, sortable, sortbyOrder }) => {
          const activeColumn: any = columns.find(
            (column) => column.sortbyOrder !== undefined
          );
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "down"
              : sortField === accessor && order === "desc"
              ? "up"
              : accessor === activeColumn.accessor && sortField === ""
              ? "up"
              : "default"
            : "";

          return (
            <th
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : emptyFunc
              }
              className={`${cl} z-10`}
            >
              <div className="cursor-pointer">
                {label}
                {sortable ? (
                  cl === "up" ? (
                    <Icon
                      icon={"sort-arrow"}
                      viewClass={`fill-[#787878] ml-1 inline !w-[11px] !h-[11px] mb-[2px]`}
                    />
                  ) : cl === "down" ? (
                    <Icon
                      icon={"sort-arrow"}
                      viewClass={` -rotate-180 fill-[#787878] ml-1 inline !w-[11px] !h-[11px] mb-[2px]`}
                    />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
