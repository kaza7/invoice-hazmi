
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import * as XLSX from "xlsx";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useGroupBy,
  useSortBy,
  usePagination,
  useRowSelect,
} from "react-table";
import UserStatus from "@/components/UserStatus";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/header";
import {
  FileUp,
  Download,
  UserRoundPen,
  UserRoundSearch,
  FileChartColumn,
  Eye,
  Group,
  ChevronLeft,
  ChevronRight,
  CloudDownload,
  // إضافة الأيقونات هنا
} from "lucide-react";
import ErrorBoundary from "@/components/ErrorBoundary";

interface DataRow {
  [key: string]: any;
}

// خطاف useDebounce المخصص
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// تعديل GlobalFilter لاستخدام useDebounce
const GlobalFilter: React.FC<{
  globalFilter: string;
  setGlobalFilter: (filterValue: string | undefined) => void;
}> = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    setGlobalFilter(debouncedValue || undefined);
  }, [debouncedValue, setGlobalFilter]);

  return (
    <div className="relative mb-4">
      <UserRoundSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="ابحث في جميع الأعمدة..."
        className="pl-10 p-2 border border-gray-300 rounded w-full dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
      />
    </div>
  );
};

const DefaultColumnFilter = ({
  column: { filterValue, setFilter },
}: {
  column: {
    filterValue: any;
    setFilter: (filterValue: any) => void;
  };
}) => (
  <input
    value={filterValue || ""}
    onChange={(e) => setFilter(e.target.value || undefined)}
    placeholder="فلتر..."
    className="mt-2 p-1 border rounded w-full dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
  />
);

// مكون IndeterminateCheckbox
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }: any, ref: any) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      if (resolvedRef.current) {
        (resolvedRef.current as any).indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return <input type="checkbox" ref={resolvedRef} {...rest} />;
  }
);

// تعديل مكون DataTable
const DataTable: React.FC<any> = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  rows,
  isEditable,
  editingCell,
  setEditingCell,
}) => {
  return (
    <div className="relative max-h-[500px] bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="overflow-y-auto overflow-x-auto h-full">
        <table
          {...getTableProps()}
          className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700"
        >
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key: headerGroupKey, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr
                  key={headerGroupKey}
                  {...restHeaderGroupProps}
                  className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
                >
                  {headerGroup.headers.map((column) => {
                    const { key: columnKey, ...restColumnProps } =
                      column.getHeaderProps(column.getSortByToggleProps());
                    return (
                      <th
                        key={columnKey}
                        {...restColumnProps}
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider whitespace-nowrap"
                      >
                        <div className="flex items-center gap-2">
                          {column.render("Header")}
                          {column.isSorted && (
                            <span className="text-gray-400 dark:text-gray-500">
                              {column.isSortedDesc ? "↓" : "↑"}
                            </span>
                          )}
                        </div>
                        {column.canFilter && (
                          <div className="mt-2">{column.render("Filter")}</div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"
          >
            {rows.map((row: any, i: number) => {
              prepareRow(row);
              const { key: rowKey, ...restRowProps } = row.getRowProps();
              return (
                <tr
                  key={rowKey}
                  {...restRowProps}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 ease-in-out"
                >
                  {row.cells.map((cell: any) => {
                    const { key: cellKey, ...restCellProps } =
                      cell.getCellProps();
                    return (
                      <td
                        key={cellKey}
                        {...restCellProps}
                        className={`px-4 py-3.5 text-sm text-gray-700 dark:text-gray-200 ${
                          isEditable &&
                          editingCell?.row === row.index &&
                          editingCell.column === cell.column.id
                            ? "ring-2 ring-blue-500 ring-opacity-50"
                            : ""
                        }`}
                        onClick={() =>
                          isEditable &&
                          setEditingCell({
                            row: row.index,
                            column: cell.column.id,
                          })
                        }
                      >
                        <div className="flex items-center">
                          {cell.column.id === "status" ? (
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                                      ${
                                        cell.value === "Active"
                                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                          : cell.value === "Pending"
                                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                          : cell.value === "Cancelled"
                                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                          : cell.value === "Delay"
                                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                      }`}
                            >
                              {cell.render("Cell")}
                            </span>
                          ) : (
                            cell.render("Cell")
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ReportsPage: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<{
    [key: string]: boolean;
  }>({});
  const [isEditable, setIsEditable] = useState(false);
  const [editingCell, setEditingCell] = useState<{
    row: number;
    column: string;
  } | null>(null);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const [showColumnDropdown, setShowColumnDropdown] = useState(false);
  const exportDropdownRef = useRef<HTMLDivElement>(null);
  const columnDropdownRef = useRef<HTMLDivElement>(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<string[]>([]);
  const [groupByColumn, setGroupByColumn] = useState<string | null>(null);
  const [bulkEditValue, setBulkEditValue] = useState("");
  const [bulkEditColumn, setBulkEditColumn] = useState("");

  // إضافة الحالة والمرجع للقائمة المنسدلة للاستيراد
  const [showImportDropdown, setShowImportDropdown] = useState(false);
  const importDropdownRef = useRef<HTMLDivElement>(null);

  const handleFileChange = async (file: File) => {
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const binaryStr = e.target?.result;
        if (typeof binaryStr === "string") {
          const workbook = XLSX.read(binaryStr, { type: "binary" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json<DataRow>(firstSheet, {
            defval: "",
          });

          setData(jsonData);
        }
      };
      reader.readAsBinaryString(file);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  // دالة لاستيراد البيانات من Google Sheets باستخدام API Route
  const handleImportFromGoogleSheets = async (sheetName: string) => {
    setShowImportDropdown(false);
    let url = "";
    if (sheetName === "all") {
      url =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRUpbyEiyaMotm4f3w51ulywyssL76MPkVBkpgrwjPl0Og04olBpVscuZQzPYhyskyZozZkcLsw23YR/pub?output=csv&gid=1693701215";
    } else if (sheetName === "jeddah") {
      url =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdU9KG-c6jTt9PnrZEXhBecWWJEsiCHYk_2fPmNcSObsZnHL_bcdkO486GHddOjMr60XtTNa_-Lf7p/pub?output=csv&gid=182577060";
    }
    try {
      const response = await fetch(url);
      const csvText = await response.text();
      // تحويل النص CSV إلى JSON باستخدام XLSX
      const workbook = XLSX.read(csvText, { type: "string" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json<DataRow>(firstSheet, {
        defval: "",
      });
      setData(jsonData);
      setFileSelected(true);
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    }
  };

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const columns = useMemo(() => {
    if (data.length === 0) return [];
    return [
      {
        id: "selection",
        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: ({ row }: any) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      {
        Header: "#",
        accessor: (row: any, i: number) => i + 1,
        id: "rowNumber",
        disableSortBy: true,
      },
      ...Object.keys(data[0] || {}).map((key) => ({
        Header: key,
        accessor: key,
        id: key,
        Cell: ({
          value,
          row: { index },
          column: { id },
        }: {
          value: any;
          row: { index: number };
          column: { id: string };
        }) =>
          isEditable &&
          editingCell?.row === index &&
          editingCell.column === id ? (
            <input
              type="text"
              value={value || ""}
              onChange={(e) => handleCellChange(index, id, e.target.value)}
              className="w-full p-1 border border-blue-500 bg-transparent focus:ring-2 focus:ring-blue-300 rounded dark:bg-gray-800 dark:text-gray-100 text-sm"
              autoFocus
              onBlur={() => setEditingCell(null)}
              onKeyDown={(e) => handleKeyDown(e, index, id)}
            />
          ) : (
            <span
              className={`block p-1 ${
                isEditable
                  ? "cursor-pointer hover:border hover:border-blue-300"
                  : ""
              }`}
              onClick={() =>
                isEditable && setEditingCell({ row: index, column: id })
              }
            >
              {value || ""}
            </span>
          ),
      })),
    ];
  }, [data, isEditable, editingCell]);

  // تحديث selectedColumns و visibleColumns عندما تتغير الأعمدة
  useEffect(() => {
    const initialSelectedColumns: { [key: string]: boolean } = {};
    const initialVisibleColumns: string[] = [];
    columns.forEach((col) => {
      initialSelectedColumns[col.id] = true;
      initialVisibleColumns.push(col.id);
    });
    setSelectedColumns(initialSelectedColumns);
    setVisibleColumns(initialVisibleColumns);
    // تعيين العمود الافتراضي للتحرير الجماعي
    const bulkEditCols = columns.filter(
      (col) => col.id !== "selection" && col.id !== "rowNumber"
    );
    setBulkEditColumn(bulkEditCols[0]?.id || "");
  }, [columns]);

  const handleCellChange = (rowIndex: number, columnId: string, value: any) => {
    setData((oldData) => {
      const updatedData = [...oldData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        [columnId]: value,
      };
      return updatedData;
    });
  };

  const handleBulkEdit = () => {
    const selectedRowsIndexes = Object.keys(selectedRowIds)
      .filter((id) => selectedRowIds[id])
      .map((id) => Number(id));

    setData((oldData) => {
      const updatedData = oldData.map((row, index) => {
        if (selectedRowsIndexes.includes(index)) {
          return { ...row, [bulkEditColumn]: bulkEditValue };
        }
        return row;
      });
      return updatedData;
    });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    rowIndex: number,
    columnId: string
  ) => {
    if (e.key === "Enter") {
      setEditingCell(null);
    } else if (e.key === "Escape") {
      setEditingCell(null);
    } else if (e.key === "ArrowRight") {
      moveFocus(rowIndex, columnId, "right");
    } else if (e.key === "ArrowLeft") {
      moveFocus(rowIndex, columnId, "left");
    } else if (e.key === "ArrowDown") {
      moveFocus(rowIndex, columnId, "down");
    } else if (e.key === "ArrowUp") {
      moveFocus(rowIndex, columnId, "up");
    }
  };

  const moveFocus = (rowIndex: number, columnId: string, direction: string) => {
    const columnKeys = columns
      .filter((col) => col.id !== "selection" && col.id !== "rowNumber")
      .map((col) => col.id);
    const colIndex = columnKeys.indexOf(columnId);

    if (direction === "right" && colIndex < columnKeys.length - 1) {
      setEditingCell({ row: rowIndex, column: columnKeys[colIndex + 1] });
    } else if (direction === "left" && colIndex > 0) {
      setEditingCell({ row: rowIndex, column: columnKeys[colIndex - 1] });
    } else if (direction === "down" && rowIndex < data.length - 1) {
      setEditingCell({ row: rowIndex + 1, column: columnId });
    } else if (direction === "up" && rowIndex > 0) {
      setEditingCell({ row: rowIndex - 1, column: columnId });
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileChange(file);
      setFileSelected(true);
    }
  };

  const exportData = () => {
    const filteredData = data.map((row, rowIndex) => {
      const newRow: Record<string, any> = {};
      columns.forEach((col) => {
        if (selectedColumns[col.id]) {
          if (typeof col.accessor === "function") {
            newRow[col.Header as string] = col.accessor(row, rowIndex);
          } else if (typeof col.accessor === "string") {
            newRow[col.Header as string] = row[col.accessor];
          }
        }
      });
      return newRow;
    });

    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "exported_data.xlsx");
  };

  // إغلاق القوائم المنسدلة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        exportDropdownRef.current &&
        !exportDropdownRef.current.contains(event.target as Node)
      ) {
        setShowExportDropdown(false);
      }
      if (
        columnDropdownRef.current &&
        !columnDropdownRef.current.contains(event.target as Node)
      ) {
        setShowColumnDropdown(false);
      }
      if (
        importDropdownRef.current &&
        !importDropdownRef.current.contains(event.target as Node)
      ) {
        setShowImportDropdown(false);
      }
    }
    if (showExportDropdown || showColumnDropdown || showImportDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showExportDropdown, showColumnDropdown, showImportDropdown]);

  const tableInstance = useTable<DataRow>(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: 0,
        pageSize: 10, // تعيين حجم الصفحة الافتراضي هنا
        hiddenColumns: columns
          .filter((col) => !visibleColumns.includes(col.id))
          .map((col) => col.id),
        groupBy: groupByColumn ? [groupByColumn] : [],
        sortBy: [],
      },
    },
    useGlobalFilter,
    useFilters,
    useGroupBy,
    useSortBy,
    usePagination,
    useRowSelect
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // استخدمنا page بدلاً من rows
    state: { pageIndex, pageSize, globalFilter, selectedRowIds },
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    selectedFlatRows,
    toggleAllRowsSelected,
    setHiddenColumns,
  } = tableInstance;

  // تحديث الأعمدة المخفية عند تغيير visibleColumns
  useEffect(() => {
    setHiddenColumns(
      columns
        .filter((col) => !visibleColumns.includes(col.id))
        .map((col) => col.id)
    );
  }, [visibleColumns, columns, setHiddenColumns]);

  return (
    <div className="container mx-auto p-6">
      <UserStatus />
      <Navbar />
      <Header />

      <h1 className="text-4xl font-bold mb-6 text-center text-gray-700 dark:text-white bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
        الإستعلام عن الأصناف
      </h1>

      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      {!fileSelected && (
        <div className="flex justify-center mb-6 space-x-4">
          <label
            htmlFor="file-upload"
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              const file = e.dataTransfer.files?.[0];
              if (file) handleFileChange(file);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            className={`cursor-pointer flex items-center space-x-2 px-6 py-3 font-semibold rounded-lg shadow-md transition-colors duration-200 ${
              isDragOver
                ? "bg-blue-700 text-white dark:bg-blue-600"
                : "bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
            }`}
          >
            <FileUp className="text-xl transform transition-transform duration-300 hover:scale-110" />
            <span>{isDragOver ? "أفلت الملف هنا" : "اختر ملف"}</span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileInputChange}
            className="hidden"
          />

          {/* إضافة الزر الجديد بجانب زر رفع الملف */}
          <div className="relative">
            <button
              onClick={() => setShowImportDropdown((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 font-semibold rounded-lg shadow-md transition-colors duration-200 bg-green-600 text-white hover:bg-green-700"
            >
              <CloudDownload className="text-xl transform transition-transform duration-300 hover:scale-110" />
              <span>إختيار فرع</span>
            </button>

            {showImportDropdown && (
              <div
                ref={importDropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 animate-fadeIn"
              >
                <div className="p-2">
                  <button
                    onClick={() => handleImportFromGoogleSheets("all")}
                    className="w-full text-right px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    جميع الفروع
                  </button>
                  <button
                    onClick={() => handleImportFromGoogleSheets("jeddah")}
                    className="w-full text-right px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    جدة
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <ErrorBoundary>
        {data.length > 0 && (
          <>
            <div className="toolbar flex items-center justify-end space-x-4 p-4 border-b border-gray-300 dark:border-gray-700 relative">
              <button
                onClick={() => setIsEditable(!isEditable)}
                className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <UserRoundPen className="text-blue-500" />
                <span>{isEditable ? "إيقاف التعديل" : "تعديل"}</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowColumnDropdown((prev) => !prev)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-sm"
                >
                  <Eye className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span className="text-sm font-medium">التحكم في الأعمدة</span>
                </button>

                {showColumnDropdown && (
                  <div
                    ref={columnDropdownRef}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 animate-fadeIn"
                  >
                    <div className="p-2">
                      <div className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700">
                        إظهار/إخفاء الأعمدة
                      </div>
                      <div className="max-h-64 overflow-y-auto py-1">
                        {columns
                          .filter((col) => col.id !== "selection")
                          .map((column) => (
                            <label
                              key={column.id}
                              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150 ease-in-out"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={visibleColumns.includes(column.id)}
                                  onChange={() => {
                                    setVisibleColumns((prev) =>
                                      prev.includes(column.id)
                                        ? prev.filter((id) => id !== column.id)
                                        : [...prev, column.id]
                                    );
                                  }}
                                  className="w-4 h-4 text-blue-500 dark:text-blue-400 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                />
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-200">
                                {column.Header}
                              </span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="p-2 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg">
                      <div className="flex justify-between gap-2">
                        <button
                          onClick={() =>
                            setVisibleColumns(columns.map((col) => col.id))
                          }
                          className="text-xs px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-150"
                        >
                          تحديد الكل
                        </button>
                        <button
                          onClick={() => setVisibleColumns([])}
                          className="text-xs px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-150"
                        >
                          إلغاء التحديد
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* إضافة الأنيميشن للقائمة المنسدلة */}
              <style jsx global>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(-10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .animate-fadeIn {
                  animation: fadeIn 0.2s ease-out;
                }
              `}</style>

              <div className="relative">
                <button
                  onClick={() => setShowExportDropdown((prev) => !prev)}
                  className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <FileChartColumn className="text-blue-500" />
                  <span>اختر الأعمدة للتصدير</span>
                </button>
                {showExportDropdown && (
                  <div
                    ref={exportDropdownRef}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 animate-fadeIn"
                  >
                    <div className="p-2">
                      <div className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700">
                        اختر الأعمدة للتصدير
                      </div>
                      <div className="max-h-64 overflow-y-auto py-1">
                        {columns
                          .filter((col) => col.id !== "selection")
                          .map((column) => (
                            <label
                              key={column.id}
                              className="flex items-center justify-between gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150 ease-in-out"
                            >
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedColumns[column.id]}
                                  onChange={() => {
                                    setSelectedColumns({
                                      ...selectedColumns,
                                      [column.id]: !selectedColumns[column.id],
                                    });
                                  }}
                                  className="w-4 h-4 text-blue-500 dark:text-blue-400 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                />
                                <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
                                  {column.Header}
                                </span>
                              </div>
                              <div className="text-gray-400 dark:text-gray-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                  />
                                </svg>
                              </div>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div className="p-2 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg">
                      <div className="flex justify-between gap-2">
                        <button
                          onClick={() =>
                            setSelectedColumns(
                              columns.reduce(
                                (acc, col) => ({ ...acc, [col.id]: true }),
                                {}
                              )
                            )
                          }
                          className="text-xs px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-150"
                        >
                          تحديد الكل
                        </button>
                        <button
                          onClick={() =>
                            setSelectedColumns(
                              columns.reduce(
                                (acc, col) => ({ ...acc, [col.id]: false }),
                                {}
                              )
                            )
                          }
                          className="text-xs px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-150"
                        >
                          إلغاء التحديد
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={exportData}
                className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <Download className="text-blue-500" />
                <span>تصدير البيانات</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => {
                    setGroupByColumn(groupByColumn ? null : bulkEditColumn);
                  }}
                  className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <Group className="text-blue-500" />
                  <span>{groupByColumn ? "إلغاء التجميع" : "تجميع"}</span>
                </button>
              </div>
            </div>

            {/* عناصر التحكم في الترقيم */}
            {data.length > 0 && (
              <div className="pagination flex justify-end space-x-2 p-2">
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className="px-3 py-1 border rounded disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 flex items-center"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="ml-1">السابق</span>
                </button>
                <span className="px-3 py-1 text-gray-700 dark:text-gray-200">
                  الصفحة {pageIndex + 1} من {pageOptions.length}
                </span>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="px-3 py-1 border rounded disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 flex items-center"
                >
                  <span className="mr-1">التالي</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="px-3 py-1 border rounded dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                >
                  {[10, 20, 30, 40, 50].map((size) => (
                    <option key={size} value={size}>
                      عرض {size}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* أدوات التحرير الجماعي */}
            {selectedFlatRows.length > 0 && (
              <div className="bulk-edit flex items-center space-x-2 p-4 border-b border-gray-300 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-200">
                  تحرير جماعي:
                </span>
                <select
                  value={bulkEditColumn}
                  onChange={(e) => setBulkEditColumn(e.target.value)}
                  className="px-3 py-1 border rounded dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                >
                  {columns
                    .filter(
                      (col) => col.id !== "selection" && col.id !== "rowNumber"
                    )
                    .map((col) => (
                      <option key={col.id} value={col.id}>
                        {col.Header}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  value={bulkEditValue}
                  onChange={(e) => setBulkEditValue(e.target.value)}
                  className="px-2 py-1 border rounded dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
                <button
                  onClick={handleBulkEdit}
                  className="px-3 py-1 border rounded bg-blue-500 text-white dark:bg-blue-600"
                >
                  تطبيق
                </button>
              </div>
            )}
          </>
        )}

        {data.length > 0 ? (
          <DataTable
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            prepareRow={prepareRow}
            rows={page} // استخدمنا page بدلاً من rows
            isEditable={isEditable}
            editingCell={editingCell}
            setEditingCell={setEditingCell}
          />
        ) : (
          <div className="text-center p-4 text-gray-700 dark:text-gray-100">
            الرجاء تحميل ملف لعرض البيانات
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default ReportsPage;
