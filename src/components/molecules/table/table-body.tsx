import { TableBodyProps } from "./types";
import React from "react";

const TableBody = ({ tableData, columns }: TableBodyProps) => {
  return (
    <tbody>
      {tableData.map((data: any, index: number) => {
        return (
          <tr key={index} className="h-14">
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return (
                <td className={`px-2`} key={accessor}>
                  {tData}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
