// components/ExportPDF.js
import React from "react";
import html2pdf from "html2pdf.js";

export default function ExportPDF({ data }) {
  const exportToPDF = () => {
    const element = document.getElementById("table-data");
    const options = {
      margin: 1,
      filename: "exported_data.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <a onClick={exportToPDF} className="cursor-pointer text-blue-500 hover:underline">
      تصدير PDF
    </a>
  );
}
