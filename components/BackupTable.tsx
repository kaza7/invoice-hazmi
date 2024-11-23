   // BackupTable.tsx
   import React, { useEffect, useState } from 'react';
   import { db } from "@/lib/firebase";
   import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

   const BackupTable = ({ activeSubcollection }) => {
     const [backupsData, setBackupsData] = useState([]);

     useEffect(() => {
       const fetchBackups = async () => {
         const backupsCollection = collection(db, "inventoryBackups");
         const backupsSnapshot = await getDocs(backupsCollection);
         const backupsList = backupsSnapshot.docs.map(doc => ({
           id: doc.id,
           ...doc.data(),
         }));
         setBackupsData(backupsList);
       };

       fetchBackups();
     }, []);

     const handleRestoreBackup = async (backupData) => {
       try {
         const promises = backupData.map((item) =>
           updateDoc(
             doc(db, "inventoryApp", "defaultDoc", activeSubcollection, item.id),
             {
               inventory: item.inventory,
               quantity: item.quantity,
               difference: item.difference,
               lastUpdated: new Date(),
             }
           )
         );
         await Promise.all(promises);
         alert("تم استرجاع النسخة الاحتياطية بنجاح!");
       } catch (error) {
         console.error("Error restoring backup:", error);
         alert("فشل في استرجاع النسخة الاحتياطية.");
       }
     };

     return (
       <div className="mt-8">
         <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
           النسخ الاحتياطية
         </h2>
         <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
           <table className="w-full text-sm text-right text-gray-700 dark:text-gray-300">
             <thead className="text-xs text-gray-500 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
               <tr>
                 <th className="px-6 py-3">تاريخ النسخة</th>
                 <th className="px-6 py-3">اسم الموظف</th>
                 <th className="px-6 py-3">البيانات</th>
               </tr>
             </thead>
             <tbody>
               {backupsData.map((backup) => (
                 <tr key={backup.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                   <td className="px-6 py-4">
                     {new Date(backup.backupDate).toLocaleString()}
                   </td>
                   <td className="px-6 py-4">
                     {backup.employeeName}
                   </td>
                   <td className="px-6 py-4">
                     <button
                       onClick={() => handleRestoreBackup(backup.backups)}
                       className="text-blue-600 hover:underline"
                     >
                       استرجاع
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
     );
   };

   export default BackupTable;