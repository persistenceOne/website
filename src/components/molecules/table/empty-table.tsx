import React from "react";
import { TableColumnsProps } from "./types";
interface Props {
  columns: TableColumnsProps[];
  loader: boolean;
  text?: React.ReactNode | any;
}
export const EmptyTable = ({ columns, loader, text }: Props) => {
  return (
    <>
      <table className="table custom-table w-full h-[200px]">
        <thead>
          <tr className="h-14">
            {columns.map(({ label, accessor, sortable }) => (
              <th key={accessor}>
                <div className="cursor-pointer">{label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="text-center p-4 text-white-100 !text-center"
              colSpan={columns.length}
            >
              {text}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
