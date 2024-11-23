'use client';
import React from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import * as XLSX from "xlsx";

const CompareButton = ({ itemsData, setItemsData, showAlert }) => {
  const handleCompare = async () => {
    try {
      // 1. تحميل الملف من Firebase Storage
      const storage = getStorage();
      const fileRef = ref(storage, 'الاستعلام عن الاصناف فرع جدة.xlsx');
      const url = await getDownloadURL(fileRef);
  
      // 2. قراءة البيانات من الملف
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  
      // 3. تحويل البيانات إلى JSON
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
  
      // 4. تصفية البيانات المطلوبة
      const filteredData = data.map(item => ({
        itemNumber: item['رقم الصنف'], // تأكد من أن هذا هو اسم العمود الصحيح
        itemName: item['اسم المنتج'],   // تأكد من أن هذا هو اسم العمود الصحيح
        onHand: item['OnHand']           // تأكد من أن هذا هو اسم العمود الصحيح
      }));
  
      // 5. مقارنة البيانات وتحديث الكمية
      const updatedItems = itemsData.map(item => {
        const matchedItem = filteredData.find(f => f.itemNumber === item.itemNumber);
        if (matchedItem) {
          return {
            ...item,
            quantity: matchedItem.onHand // تحديث الكمية بالقيمة من OnHand
          };
        }
        return item;
      });
  
      // 6. تحديث الحالة في التطبيق
      setItemsData(updatedItems);
      showAlert("success", "تم تحديث الكمية بنجاح!");
    } catch (error) {
      console.error("Error comparing data:", error);
      showAlert("error", "فشل في تحديث الكمية.");
    }
  };

  return (
    <button
      onClick={handleCompare}
      className="mt-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      <span>مقارنة</span>
    </button>
  );
};

export default CompareButton;