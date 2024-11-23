
// import React, { useRef } from 'react';
// import html2pdf from 'html2pdf.js';

// const ExportToPDF = ({ data }) => {
// const printRef = useRef();

// const handleExportToPDF = () => {
//   const element = printRef.current;
//   const options = {
//     margin: 1,
//     filename: 'document.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//   };

//   html2pdf().from(element).set(options).save();
// };

// return (
//   <div>
//     <div ref={printRef}>
//       <h1>تقرير المخزون</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>رقم الصنف</th>
//             <th>أسم الصنف</th>
//             <th>الجرد</th>
//             <th>الكمية</th>
//             <th>الفرق</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.itemNumber}</td>
//               <td>{item.itemName}</td>
//               <td>{item.inventory}</td>
//               <td>{item.quantity}</td>
//               <td>{item.difference}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     <button onClick={handleExportToPDF}>تصدير إلى PDF</button>
//   </div>
// );
// };

// export default ExportToPDF;



// import React, { useRef } from 'react';
// import html2pdf from 'html2pdf.js';

// const ExportToPDF = ({ tableId }) => {
// const handleExportToPDF = () => {
//   const element = document.getElementById(tableId);
//   const options = {
//     margin: 1,
//     filename: 'inventory_report.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//   };

//   html2pdf().from(element).set(options).save();
// };

// return (
//   <button
//     onClick={handleExportToPDF}
//     className="mt-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//   >
//     <span>تصدير إلى PDF</span>
//   </button>
// );
// };

// export default ExportToPDF;


import React from 'react';
import html2pdf from 'html2pdf.js';

const ExportToPDF = ({ tableId, employeeName, collectionName }) => {
const handleExportToPDF = () => {
  const element = document.getElementById(tableId);
  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  const formattedTime = date.toLocaleTimeString();

  // إنشاء اسم الملف بناءً على المعلومات المطلوبة
  const fileName = `جرد_${collectionName}_${employeeName}_${formattedDate}.pdf`;

  // إنشاء عنصر جديد يحتوي على معلومات الموظف والتاريخ
  const infoElement = document.createElement('div');
  infoElement.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <h2>تقرير الجرد</h2>
      <p>المسؤول: ${employeeName}</p>
      <p>التاريخ: ${formattedDate}</p>
      <p>الوقت: ${formattedTime}</p>
    </div>
  `;

  // نسخ محتوى الجدول وإضافته إلى عنصر جديد
  const clonedElement = element.cloneNode(true);
  infoElement.appendChild(clonedElement);

  const options = {
    margin: 0,
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'in', format: 'a2', orientation: 'portrait' },
  };

  // تصدير المحتوى الجديد إلى PDF
  html2pdf().from(infoElement).set(options).save();
};

return (
  <button
    onClick={handleExportToPDF}
    className="mt-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    <span>تصدير إلى PDF</span>
  </button>
);
};

export default ExportToPDF;