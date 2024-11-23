// // components/ExportXLSX.js
// import * as XLSX from 'xlsx';

// export default function ExportXLSX({ data }) {
//   const exportToXLSX = () => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
//     XLSX.writeFile(workbook, "exported_data.xlsx");
//   };

//   return (
//     <button onClick={exportToXLSX} className="px-4 py-2 bg-green-500 text-white rounded">
//       تصدير XLSX
//     </button>
//   );
// }



// components/ExportXLSX.js
import React from "react";
import * as XLSX from "xlsx";

export default function ExportXLSX({ data }) {
  const exportToXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "exported_data.xlsx");
  };

  return (
    <a
      onClick={exportToXLSX}
      className="cursor-pointer text-blue-500 hover:underline"
    >
      تصدير XLSX
    </a>
  );
}
