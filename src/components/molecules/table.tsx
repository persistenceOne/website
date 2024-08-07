import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  flexRender,
  useReactTable,
  getPaginationRowModel
} from "@tanstack/react-table";
import {
  TableCaption,
  TableContainer,
  Thead,
  Table,
  Th,
  Tr,
  Td,
  Tbody,
  Tfoot
} from "@chakra-ui/table";
import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import Icon from "@/components/molecules/Icon";
import { SortingTableState } from "@tanstack/table-core/src/features/RowSorting";

interface Props {
  data: any;
  columns: any;
  onRowClick?: (v: any) => void;
  parentClass?: string;
}

const CustomTable = ({ data, columns, onRowClick, parentClass }: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: "tvl", // Must be equal to the accessorKey of the coulmn you want sorted by default
      desc: true
    }
  ]);
  const [rowsCount, setRowsCount] = React.useState<number>(5);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    sortDescFirst: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false
  });

  // table.setPageSize

  const pages = useMemo(() => {
    if (table.getPageCount() == 0 || table.getPageCount() == 1) {
      return null;
    }

    return Array.from(Array(table.getPageCount()).keys());
  }, [table]);

  return (
    <Box className={`${parentClass}`}>
      <TableContainer
        bg={"#FFFFFF"}
        borderRadius={"12px"}
        p={"24px"}
        className={"table-container"}
      >
        <Table
          className={"w-full custom-table"}
          // variant="striped"
          // colorScheme="primary"
        >
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      p={"12px"}
                      fontSize={"20px"}
                      fontWeight={"600"}
                      lineHeight={"30px"}
                      textTransform={"none"}
                      color={"#633C0D"}
                      textAlign={
                        headerGroup.headers.length === index + 1
                          ? "center"
                          : "left"
                      }
                    >
                      {header.isPlaceholder ? null : (
                        <Box
                          display={
                            header.column.getCanSort() ? "flex" : "block"
                          }
                          alignItems={"center"}
                          justifyContent={
                            headerGroup.headers.length === index + 1
                              ? "center"
                              : "start"
                          }
                          cursor={
                            header.column.getCanSort() ? "pointer" : "default"
                          }
                          {...{
                            className: header.column.getCanSort()
                              ? `cursor-pointer select-none flex items-center ${
                                  headerGroup.headers.length === index + 1 //Last column center align
                                    ? "justify-center"
                                    : ""
                                }`
                              : "",
                            onClick: header.column.getToggleSortingHandler()
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: (
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                ml="4px"
                              >
                                <Icon
                                  icon={"sort-up"}
                                  viewClass={`sort-up active fill-[#2b2b2b] !w-[12px] !h-[10px] -mb-[2px]`}
                                />
                                <Icon
                                  icon={"sort-down"}
                                  viewClass={`sort-down fill-[#A6A6A6] !w-[12px] !h-[10px]`}
                                />
                              </Box>
                            ),
                            desc: (
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                ml="4px"
                              >
                                <Icon
                                  icon={"sort-up"}
                                  viewClass={`sort-up fill-[#A6A6A6] !w-[12px] !h-[10px] -mb-[2px]`}
                                />
                                <Icon
                                  icon={"sort-down"}
                                  viewClass={`sort-down active fill-[#2b2b2b] !w-[12px] !h-[10px]`}
                                />
                              </Box>
                            )
                          }[header.column.getIsSorted() as string] ?? (
                            // empty box to avoid box moving
                            <Box
                              className={"sort-icons"}
                              display={"flex"}
                              flexDirection={"column"}
                              ml="4px"
                            >
                              <Icon
                                icon={"sort-up"}
                                viewClass={`sort-up fill-[#A6A6A6] !w-[12px] !h-[10px] -mb-[2px]`}
                              />
                              <Icon
                                icon={"sort-down"}
                                viewClass={`sort-down fill-[#2b2b2b] !w-[12px] !h-[10px]`}
                              />
                            </Box>
                          )}
                        </Box>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table
              .getRowModel()
              .rows // .rows.slice(0, 10)
              .map((row) => {
                return (
                  <Tr
                    key={row.id}
                    className={
                      onRowClick != null
                        ? "hover:bg-white-600 cursor-pointer"
                        : ""
                    }
                    onClick={() => onRowClick?.(row.id)}
                  >
                    {row.getVisibleCells().map((cell, index) => {
                      return (
                        <Td
                          key={cell.id}
                          p={"15px"}
                          mb={"8px"}
                          textAlign={
                            row.getVisibleCells().length === index + 1
                              ? "center"
                              : "left"
                          }
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomTable;
