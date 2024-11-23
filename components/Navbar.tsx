// import { useState } from 'react';
// import Link from 'next/link';
// import { House, FileText } from 'lucide-react';
// import Image from 'next/image';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40" onClick={toggleSidebar}>
//           <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0">
//             <div className="flex items-center mb-4">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={50}
//                 height={50}
//                 className="rounded-full mr-2"
//               />
//               <h2 className="text-2xl font-bold text-gray-800">SNAH</h2>
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-center">
//                 <House className="w-5 h-5 text-blue-600 mr-2" />
//                 <Link href="/" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <FileText className="w-5 h-5 text-blue-600 mr-2" />
//                 <Link href="/reports" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   التقارير
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from 'react';
// import Link from 'next/link';
// import { House, FileText } from 'lucide-react';
// import Image from 'next/image';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40" onClick={toggleSidebar}>
//           <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-lg">
//             <div className="flex items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={60}
//                 height={60}
//                 className="rounded-full border-4 border-blue-600 shadow-lg mr-3"
//               />
//               <h2 className="text-3xl font-bold text-gray-800">SNAH</h2>
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <House className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <FileText className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/reports" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   التقارير
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from 'react';
// import Link from 'next/link';
// import { House, FileText } from 'lucide-react';
// import Image from 'next/image';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-lg"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={60}
//                 height={60}
//                 className="rounded-full border-4 border-blue-600 shadow-lg mr-3"
//               />
//               <h2 className="text-3xl font-bold text-gray-800">SNAH</h2>
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <House className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <FileText className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/xml" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   التقارير
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from 'react';
// import Link from 'next/link';
// import { House, FileText } from 'lucide-react';
// import Image from 'next/image';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-lg"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={60}
//                 height={60}
//                 className="rounded-full shadow-lg mr-3" // إزالة الدائرة الزرقاء
//               />
//               <h2 className="text-3xl font-bold text-gray-800 tracking-wider">S N A H</h2> {/* تباعد الحروف */}
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <House className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <FileText className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/reports" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   التقارير
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from 'react';
// import Link from 'next/link';
// import { House, FileText } from 'lucide-react';
// import Image from 'next/image';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-gray-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-lg"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex flex-col items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={80}
//                 height={80}
//                 className="rounded-none shadow-lg mb-2"
//               />
//               <h2 className="text-3xl font-bold text-gray-800 tracking-wider">S N A H</h2>
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-300">
//                 <House className="w-6 h-6 text-gray-600 mr-2" />
//                 <Link href="/" className="text-gray-800 hover:text-gray-500 text-lg transition duration-300">
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-300">
//                 <FileText className="w-6 h-6 text-gray-600 mr-2" />
//                 <Link href="/reports" className="text-gray-800 hover:text-gray-500 text-lg transition duration-300">
//                   التقارير
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

// مزبوط مره

// import { useState } from 'react';
// import Link from 'next/link';
// import { House, FileText } from 'lucide-react';
// import Image from 'next/image';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-lg"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex flex-col items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={80} // يمكنك تعديل الحجم حسب الحاجة
//                 height={80}
//                 className="rounded-full shadow-lg mb-2" // إزالة الدائرة الزرقاء
//               />
//               <h2 className="text-3xl font-bold text-gray-800 tracking-wider">S N A H</h2> {/* تباعد الحروف */}
//             </div>
//             <ul className="space-y-4">
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <House className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li className="flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300">
//                 <FileText className="w-6 h-6 text-blue-600 mr-2" />
//                 <Link href="/xml" className="text-gray-800 hover:text-blue-500 text-lg transition duration-300">
//                   التقارير
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from "react";
// import Link from "next/link";
// import { House, FileText } from "lucide-react";
// import Image from "next/image";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-3xl" // تعديل الحواف
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex flex-col items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={80}
//                 height={80}
//                 className="rounded-full shadow-lg mb-2"
//               />
//               <h2 className="text-3xl font-bold text-gray-800 tracking-wider">
//                 S N A H
//               </h2>
//             </div>
//             <ul className="space-y-4">
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <House className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/"
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/")}
//                 >
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/xml" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <FileText className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/xml"
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/xml")}
//                 >
//                   التقارير
//                 </Link>

                
                
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;




// import { useState } from "react";
// import Link from "next/link";
// import { House, FileText } from "lucide-react";
// import Image from "next/image";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-3xl"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex flex-col items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={80}
//                 height={80}
//                 className="rounded-full shadow-lg mb-2"
//               />
//               <h2 className="text-3xl font-bold text-gray-800 tracking-wider">
//                 S N A H
//               </h2>
//             </div>
//             <ul className="space-y-4">
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <House className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/"
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/")}
//                 >
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/xml" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <FileText className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/xml"
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/xml")}
//                 >
//                   التقارير
//                 </Link>
//               </li>
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/items" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <FileText className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/reportx" // رابط الصفحة الجديدة
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/reportx")}
//                 >
//                   الاستعلام عن الأصناف
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


// import { useState } from "react";
// import Link from "next/link";
// import { House, FileText } from "lucide-react";
// import Image from "next/image";
// import UserStatus from "@/components/UserStatus"; // تأكد من أن المسار صحيح

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSidebar}
//         className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
//       >
//         القائمة
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-3xl"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="flex flex-col items-center mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="SAUD & NASSER AL HAZMI CO Logo"
//                 width={80}
//                 height={80}
//                 className="rounded-full shadow-lg mb-2"
//               />
//               <h2 className="text-3xl font-bold text-gray-800 tracking-wider">
//                 S N A H
//               </h2>
//             </div>

//             {/* عرض حالة المستخدم */}
            

//             <ul className="space-y-4 mt-6">
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <House className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/"
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/")}
//                 >
//                   الصفحة الرئيسية
//                 </Link>
//               </li>
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/xml" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <FileText className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/xml"
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/xml")}
//                 >
//                   التقارير
//                 </Link>
//               </li>
//               <li
//                 className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//                   activeLink === "/items" ? "bg-blue-100 text-blue-600" : ""
//                 }`}
//               >
//                 <FileText className="w-6 h-6 mr-2" />
//                 <Link
//                   href="/reportx" // رابط الصفحة الجديدة
//                   className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//                   onClick={() => setActiveLink("/reportx")}
//                 >
//                   الاستعلام عن الأصناف
//                 </Link>
//               </li>
              
//               <li
//   className={`flex items-center p-2 rounded-lg hover:bg-blue-100 transition duration-300 ${
//     activeLink === "/items" ? "bg-blue-100 text-blue-600" : ""
//   }`}
// >
//   <img src="/checklists.png" alt="Checklist Icon" className="w-6 h-6 mr-2" />
//   <Link
//     href="/jard" // رابط الصفحة الجديدة
//     className="text-gray-800 hover:text-blue-500 text-lg transition duration-300"
//     onClick={() => setActiveLink("/reportx")}
//   >
//     الجرد
//   </Link>
// </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;



import { useState } from "react";
import Link from "next/link";
import { House, FileText } from "lucide-react";
import Image from "next/image";
import UserStatus from "@/components/UserStatus"; // تأكد من أن المسار صحيح

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 fixed bottom-10 right-10 z-50"
      >
        القائمة
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute top-0 right-0 w-72 h-full bg-gray-100 dark:bg-gray-800 shadow-lg p-6 transition-transform transform translate-x-0 rounded-l-3xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/Logo.png"
                alt="SAUD & NASSER AL HAZMI CO Logo"
                width={80}
                height={80}
                className="rounded-full shadow-lg mb-2"
              />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-wider">
                S N A H
              </h2>
            </div>

            {/* عرض حالة المستخدم */}
            {/* <UserStatus /> */}

            <ul className="space-y-4 mt-6">
              <li
                className={`flex items-center p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-300 ${
                  activeLink === "/" ? "bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300" : ""
                }`}
              >
                <House className="w-6 h-6 mr-2 text-gray-800 dark:text-gray-300" />
                <Link
                  href="/"
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-lg transition duration-300"
                  onClick={() => setActiveLink("/")}
                >
                  الصفحة الرئيسية
                </Link>
              </li>
              <li
                className={`flex items-center p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-300 ${
                  activeLink === "/xml" ? "bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300" : ""
                }`}
              >
                <FileText className="w-6 h-6 mr-2 text-gray-800 dark:text-gray-300" />
                <Link
                  href="/xml"
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-lg transition duration-300"
                  onClick={() => setActiveLink("/xml")}
                >
                  التقارير
                </Link>
              </li>
              <li
                className={`flex items-center p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-300 ${
                  activeLink === "/items" ? "bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300" : ""
                }`}
              >
                <FileText className="w-6 h-6 mr-2 text-gray-800 dark:text-gray-300" />
                <Link
                  href="/reportx" // رابط الصفحة الجديدة
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-lg transition duration-300"
                  onClick={() => setActiveLink("/reportx")}
                >
                  الاستعلام عن الأصناف
                </Link>
              </li>
              <li
                className={`flex items-center p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-300 ${
                  activeLink === "/jard" ? "bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300" : ""
                }`}
              >
                <img src="/checklists.png" alt="Checklist Icon" className="w-6 h-6 mr-2" />
                <Link
                  href="/jard" // رابط الصفحة الجديدة
                  className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-lg transition duration-300"
                  onClick={() => setActiveLink("/jard")}
                >
                  الجرد
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;