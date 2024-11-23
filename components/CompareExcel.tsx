// // CompareExcel.js
// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const CompareExcel = ({ itemsData, setItemsData, showAlert }) => {
//   const [file, setFile] = useState(null);

//   // دالة للتعامل مع تغيير الملف
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   // دالة للمقارنة عند الضغط على الزر
//   const handleCompare = async () => {
//     if (!file) {
//       showAlert("error", "يرجى اختيار ملف للتحميل.");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });

//       // قراءة البيانات من أول ورقة
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);

//       // تصفية البيانات المطلوبة
//       const filteredData = jsonData.map(item => ({
//         itemNumber: item['رقم الصنف'], // تأكد من أن هذا هو اسم العمود الصحيح
//         itemName: item['اسم المنتج'],   // تأكد من أن هذا هو اسم العمود الصحيح
//         onHand: item['OnHand']           // تأكد من أن هذا هو اسم العمود الصحيح
//       }));

//       // مقارنة البيانات وتحديث الكمية
//       const updatedItems = itemsData.map(item => {
//         const matchedItem = filteredData.find(f => f.itemNumber === item.itemNumber);
//         if (matchedItem) {
//           return {
//             ...item,
//             quantity: matchedItem.onHand // تحديث الكمية بالقيمة من OnHand
//           };
//         }
//         return item;
//       });

//       // تحديث الحالة في التطبيق
//       setItemsData(updatedItems);
//       showAlert("success", "تم تحديث الكمية بنجاح!");
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div>
      
//       <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
//       <button onClick={handleCompare}>مقارنة</button>
//     </div>
//   );
// };

// export default CompareExcel;


// CompareExcel.js
// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const CompareExcel = ({ itemsData, setItemsData, showAlert }) => {
//   const [file, setFile] = useState(null);

//   // دالة للتعامل مع تغيير الملف
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       handleCompare(selectedFile); // إجراء المقارنة مباشرة بعد تحميل الملف
//     }
//   };

//   // دالة للمقارنة
//   const handleCompare = async (file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });

//       // قراءة البيانات من أول ورقة
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);

//       // تصفية البيانات المطلوبة
//       const filteredData = jsonData.map(item => ({
//         itemNumber: item['رقم الصنف'], // تأكد من أن هذا هو اسم العمود الصحيح
//         itemName: item['اسم المنتج'],   // تأكد من أن هذا هو اسم العمود الصحيح
//         onHand: item['OnHand']           // تأكد من أن هذا هو اسم العمود الصحيح
//       }));

//       // مقارنة البيانات وتحديث الكمية
//       const updatedItems = itemsData.map(item => {
//         const matchedItem = filteredData.find(f => f.itemNumber === item.itemNumber);
//         if (matchedItem) {
//           return {
//             ...item,
//             quantity: matchedItem.onHand // تحديث الكمية بالقيمة من OnHand
//           };
//         }
//         return item;
//       });

//       // تحديث الحالة في التطبيق
//       setItemsData(updatedItems);
//       showAlert("success", "تم تحديث الكمية بنجاح!");
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div>
//       <input 
//         type="file" 
//         accept=".xlsx, .xls" 
//         onChange={handleFileChange} 
//         style={{ display: 'none' }} // إخفاء المدخل الافتراضي
//         id="file-upload" 
//       />
//       <label htmlFor="file-upload" style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px' }}>
//         رفع ملف Excel
//       </label>
//     </div>
//   );
// };

// export default CompareExcel;



// CompareExcel.js
// فخم بس بحسنه اكثر
// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { HardDriveUpload } from 'lucide-react'; // استيراد الأيقونة

// const CompareExcel = ({ itemsData, setItemsData, showAlert }) => {
//   const [file, setFile] = useState(null);

//   // دالة للتعامل مع تغيير الملف
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       handleCompare(selectedFile); // إجراء المقارنة مباشرة بعد تحميل الملف
//     }
//   };

//   // دالة للمقارنة
//   const handleCompare = async (file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });

//       // قراءة البيانات من أول ورقة
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);

//       // تصفية البيانات المطلوبة
//       const filteredData = jsonData.map(item => ({
//         itemNumber: item['رقم الصنف'], // تأكد من أن هذا هو اسم العمود الصحيح
//         itemName: item['اسم المنتج'],   // تأكد من أن هذا هو اسم العمود الصحيح
//         onHand: item['OnHand']           // تأكد من أن هذا هو اسم العمود الصحيح
//       }));

//       // مقارنة البيانات وتحديث الكمية
//       const updatedItems = itemsData.map(item => {
//         const matchedItem = filteredData.find(f => f.itemNumber === item.itemNumber);
//         if (matchedItem) {
//           return {
//             ...item,
//             quantity: matchedItem.onHand // تحديث الكمية بالقيمة من OnHand
//           };
//         }
//         return item;
//       });

//       // تحديث الحالة في التطبيق
//       setItemsData(updatedItems);
//       showAlert("success", "تم تحديث الكمية بنجاح!");
      
//       // إخفاء الزر بعد رفع الملف
//       setFile(null);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div className="flex justify-center">
//       {file ? null : (
//         <>
//           <input 
//             type="file" 
//             accept=".xlsx, .xls" 
//             onChange={handleFileChange} 
//             style={{ display: 'none' }} // إخفاء المدخل الافتراضي
//             id="file-upload" 
//           />
//           <label 
//             htmlFor="file-upload" 
//             className="flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-800"
//           >
//             <HardDriveUpload className="mr-2" />
//             رفع ملف Excel
//           </label>
//         </>
//       )}
//     </div>
//   );
// };

// export default CompareExcel;




// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import { HardDriveUpload, CheckCircle, X } from 'lucide-react'; // استيراد الأيقونات
// import { motion, AnimatePresence } from 'framer-motion'; // استيراد مكتبة motion

// const CompareExcel = ({ itemsData, setItemsData, showAlert }) => {
//   const [file, setFile] = useState(null);
//   const [alertVisible, setAlertVisible] = useState(false);
//   const [alertType, setAlertType] = useState('success'); // 'success' or 'error'
//   const [alertMessage, setAlertMessage] = useState('');

//   // دالة للتعامل مع تغيير الملف
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       handleCompare(selectedFile); // إجراء المقارنة مباشرة بعد تحميل الملف
//     }
//   };

//   // دالة للمقارنة
//   const handleCompare = async (file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });

//       // قراءة البيانات من أول ورقة
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);

//       // تصفية البيانات المطلوبة
//       const filteredData = jsonData.map(item => ({
//         itemNumber: item['رقم الصنف'], // تأكد من أن هذا هو اسم العمود الصحيح
//         itemName: item['اسم المنتج'],   // تأكد من أن هذا هو اسم العمود الصحيح
//         onHand: item['OnHand']           // تأكد من أن هذا هو اسم العمود الصحيح
//       }));

//       // مقارنة البيانات وتحديث الكمية
//       const updatedItems = itemsData.map(item => {
//         const matchedItem = filteredData.find(f => f.itemNumber === item.itemNumber);
//         if (matchedItem) {
//           return {
//             ...item,
//             quantity: matchedItem.onHand // تحديث الكمية بالقيمة من OnHand
//           };
//         }
//         return item;
//       });

//       // تحديث الحالة في التطبيق
//       setItemsData(updatedItems);
//       setAlertType('success');
//       setAlertMessage('تم تحديث الكمية بنجاح!');
//       setAlertVisible(true);
      
//       // إخفاء الزر بعد رفع الملف
//       setFile(null);
      
//       // إخفاء الرسالة القديمة إذا كانت مرئية
//       if (alertVisible) {
//         setAlertVisible(false);
//       }

//       // إظهار الرسالة الجديدة بعد فترة قصيرة
//       setTimeout(() => {
//         setAlertVisible(false);
//       }, 3000);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* الرسالة المتحركة */}
//       <AnimatePresence>
//         {alertVisible && (
//           <motion.div
//             className={`fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center p-4 rounded-lg ${alertType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//           >
//             {alertType === 'success' ? <CheckCircle className="mr-2" /> : <X className="mr-2" />}
//             <span>{alertMessage}</span>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {file ? null : (
//         <>
//           <input 
//             type="file" 
//             accept=".xlsx, .xls" 
//             onChange={handleFileChange} 
//             style={{ display: 'none' }} // إخفاء المدخل الافتراضي
//             id="file-upload" 
//           />
//           <label 
//             htmlFor="file-upload" 
//             className="flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-800"
//           >
//             <HardDriveUpload className="mr-2" />
//             رفع ملف Excel
//           </label>
//         </>
//       )}
//     </div>
//   );
// };

// export default CompareExcel;



import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { HardDriveUpload, CheckCircle, X } from 'lucide-react'; // استيراد الأيقونات
import { motion, AnimatePresence } from 'framer-motion'; // استيراد مكتبة motion

const CompareExcel = ({ itemsData, setItemsData, showAlert }) => {
  const [file, setFile] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'
  const [alertMessage, setAlertMessage] = useState('');

  // دالة للتعامل مع تغيير الملف
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      handleCompare(selectedFile); // إجراء المقارنة مباشرة بعد تحميل الملف
    }
  };

  // دالة للمقارنة
  const handleCompare = async (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // قراءة البيانات من أول ورقة
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // تصفية البيانات المطلوبة
        const filteredData = jsonData.map(item => ({
          itemNumber: item['رقم الصنف'], // تأكد من أن هذا هو اسم العمود الصحيح
          itemName: item['اسم المنتج'],   // تأكد من أن هذا هو اسم العمود الصحيح
          onHand: item['OnHand']           // تأكد من أن هذا هو اسم العمود الصحيح
        }));

        // مقارنة البيانات وتحديث الكمية والفرق
        const updatedItems = itemsData.map(item => {
          const matchedItem = filteredData.find(f => f.itemNumber === item.itemNumber);
          if (matchedItem) {
            const newQuantity = matchedItem.onHand;
            const newDifference = (item.inventory || 0) - newQuantity;
            return {
              ...item,
              quantity: newQuantity,       // تحديث الكمية
              difference: newDifference    // إعادة حساب الفرق
            };
          }
          return item;
        });

        // تحديث الحالة في التطبيق
        setItemsData(updatedItems);
        setAlertType('success');
        setAlertMessage('تم تحديث الكمية والفرق بنجاح!');
        setAlertVisible(true);
        
        // إخفاء الزر بعد رفع الملف
        setFile(null);
        
        // إخفاء الرسالة القديمة إذا كانت مرئية
        if (alertVisible) {
          setAlertVisible(false);
        }

        // إظهار الرسالة الجديدة بعد فترة قصيرة
        setTimeout(() => {
          setAlertVisible(false);
        }, 3000);
      } catch (error) {
        console.error("Error processing the Excel file:", error);
        setAlertType('error');
        setAlertMessage('حدث خطأ أثناء معالجة ملف Excel.');
        setAlertVisible(true);
        
        // إخفاء الرسالة بعد فترة قصيرة
        setTimeout(() => {
          setAlertVisible(false);
        }, 3000);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="flex flex-col items-center">
      {/* الرسالة المتحركة */}
      <AnimatePresence>
        {alertVisible && (
          <motion.div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center p-4 rounded-lg ${alertType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {alertType === 'success' ? <CheckCircle className="mr-2" /> : <X className="mr-2" />}
            <span>{alertMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {file ? null : (
        <>
          <input 
            type="file" 
            accept=".xlsx, .xls" 
            onChange={handleFileChange} 
            style={{ display: 'none' }} // إخفاء المدخل الافتراضي
            id="file-upload" 
          />
          <label 
            htmlFor="file-upload" 
            className="flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-800"
          >
            <HardDriveUpload className="mr-2" />
            رفع ملف Excel
          </label>
        </>
      )}
    </div>
  );
};

export default CompareExcel;
