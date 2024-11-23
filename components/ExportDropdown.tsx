import React, { useState } from "react";
import ExportPDF from "@/components/ExportPDF";
import ExportXLSX from "@/components/ExportXLSX";
import ExportCSV from "@/components/ExportCSV";

export default function ExportDropdown({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  // تبديل حالة القائمة بين الظهور والإخفاء
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* زر القائمة المنسدلة */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        تصدير البيانات
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>



      {/* القائمة المنسدلة */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <ExportPDF data={data} />
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <ExportXLSX data={data} />
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <ExportCSV data={data} />
            </li>

            
          
          </ul>

          
        </div>
      )}
    </div>
  );
}


// import React, { useState } from "react";
// import ExportPDF from "@/components/ExportPDF";
// import ExportXLSX from "@/components/ExportXLSX";
// import ExportCSV from "@/components/ExportCSV";
// import ExportToPDF from "@/components/ExportToPDF"; // تأكد من استيراد المكون

// export default function ExportDropdown({ data, assignedEmployee }) {
// const [isOpen, setIsOpen] = useState(false);

// // تبديل حالة القائمة بين الظهور والإخفاء
// const toggleDropdown = () => {
//   setIsOpen(!isOpen);
// };

// return (
//   <div className="relative inline-block text-left">
//     {/* زر القائمة المنسدلة */}
//     <button
//       id="dropdownDefaultButton"
//       onClick={toggleDropdown}
//       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       type="button"
//     >
//       تصدير البيانات
//       <svg
//         className="w-2.5 h-2.5 ms-3"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 10 6"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="m1 1 4 4 4-4"
//         />
//       </svg>
//     </button>

//     {/* القائمة المنسدلة */}
//     {isOpen && (
//       <div
//         id="dropdown"
//         className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//       >
//         <ul
//           className="py-2 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownDefaultButton"
//         >
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//             <ExportPDF data={data} />
//           </li>
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//             <ExportXLSX data={data} />
//           </li>
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//             <ExportCSV data={data} />
//           </li>
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//             <ExportToPDF
//               tableId="table-data"
//               employeeName={assignedEmployee}
//               collectionName=""
//             />
//           </li>
//         </ul>
//       </div>
//     )}
//   </div>
// );
// }