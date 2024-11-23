'use client';
import React from "react";
import { handleFileUpload } from "@/lib/firebase"; // تأكد من ضبط المسار بشكل صحيح

const ImportExcel = () => {
  return (
    <div>
      <h2>استيراد بيانات من ملف Excel إلى Firebase</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
    </div>
  );
};

export default ImportExcel;
