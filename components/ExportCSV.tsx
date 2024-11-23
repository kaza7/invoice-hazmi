// components/ExportCSV.js
import React from "react";

export default function ExportCSV({ data }) {
  const exportToCSV = () => {
    const csvData = data.map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`)
        .join(",")
    );
    const csvContent = "data:text/csv;charset=utf-8," + csvData.join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "exported_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      onClick={exportToCSV}
      className="cursor-pointer text-blue-500 hover:underline"
    >
      تصدير CSV
    </a>
  );
}
