// fileWorker.js
import * as XLSX from "xlsx";

self.onmessage = async (event) => {
  const fileBuffer = event.data;
  const workbook = XLSX.read(fileBuffer, { type: "array" });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(firstSheet, { defval: "" });
  self.postMessage(jsonData);
};
