declare module 'react-table' {
  import { FC } from 'react';

  export interface Column<D extends object = {}> {
    Header: string;
    accessor: keyof D | string;
  }

  export interface UseTableOptions<D extends object = {}> {
    columns: Column<D>[];
    data: D[];
  }

  export function useTable<D extends object>(options: UseTableOptions<D>): {
    getTableProps: () => React.HTMLProps<HTMLTableElement>;
    getTableBodyProps: () => React.HTMLProps<HTMLTableSectionElement>;
    headerGroups: Array<{
      id: Key | null | undefined;
      getHeaderGroupProps: () => React.HTMLProps<HTMLTableRowElement>;
      headers: Array<{
        id: Key | null | undefined;
        getHeaderProps: () => React.HTMLProps<HTMLTableCellElement>;
        render: (type: 'Header') => React.ReactNode;
      }>;
    }>;
    rows: Array<{
      id: Key | null | undefined;
      getRowProps: () => React.HTMLProps<HTMLTableRowElement>;
      cells: Array<{
        column: any;
        getCellProps: () => React.HTMLProps<HTMLTableCellElement>;
        render: (type: 'Cell') => React.ReactNode;
      }>;
    }>;
    prepareRow: (row: any) => void;
  };

  export default useTable;
}