// "use client";

// import { Button } from "@/components/ui/button";

// export function CompanyAddress() {
//   return (
//     <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold mb-4 tracking-wide">شركة سعود وناصر الحازمي</h2>
//           <h3 className="text-2xl mb-6 font-semibold tracking-wide">Saud and Nasser Al-Hazmi Company</h3>
//           <p className="mb-2 text-lg leading-relaxed">هاتف / Phone: <span className="font-medium">6293333, 6296782</span></p>
//           <p className="mb-6 text-lg leading-relaxed">البريد الإلكتروني / Email: <span className="font-medium">loody.227@gmail.com</span></p>
//           <a
//             href="https://maps.app.goo.gl/S4REDZ2mb1uVoh4y9"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-300 py-2 px-4 rounded-lg text-lg font-semibold shadow-md"
//           >
//             جدة، حي النخيل - Al-Nakheel District, Jeddah
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// الازرق
// export function CompanyAddress() {
//   return (
//     <footer className="bg-gray-100 text-gray-800 py-8 print:bg-white print:text-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           {/* <h2 className="text-3xl font-extrabold mb-4 tracking-wide">شركة سعود وناصر الحازمي</h2> */}
//           <h2 className="text-3xl font-bold mb-4 ">شركة سعود وناصر الحازمي</h2>
//           <h3 className="text-2xl mb-6 font-semibold tracking-wide">Saud and Nasser Al-Hazmi Company</h3>
//           <p className="mb-2 text-lg leading-relaxed">هاتف / Phone: <span className="font-medium">6293333, 6296782</span></p>
//           <p className="mb-6 text-lg leading-relaxed">البريد الإلكتروني / Email: <span className="font-medium">loody.227@gmail.com</span></p>
//           <a
//             href="https://maps.app.goo.gl/S4REDZ2mb1uVoh4y9"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-300 py-2 px-4 rounded-lg text-lg font-semibold shadow-md"
//           >
//             جدة، حي النخيل - Al-Nakheel District, Jeddah
//           </a>
//           <p className="text-center mt-4">موقعنا الإلكتروني: <a href="https://alhazmisw.com" className="text-blue-500 underline">www.alhazmisw.com</a></p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export function CompanyAddress() {
//   return (
//     <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-xl border-gray-500">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md ">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">شركة سعود وناصر الحازمي</h2>
//           <p className="mt-2 text-sm text-gray-600">SAUD & NASSER AL HAZMI CO</p>
//         </div>
//         <div className="mt-8 space-y-6">
//           <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
//             <a href="tel:6293333" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
//               <span className="sr-only">Phone</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//               </svg>
//             </a>
//             <a href="mailto:loody.227@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
//               <span className="sr-only">Email</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//               </svg>
//             </a>
//             <a href="https://maps.app.goo.gl/S4REDZ2mb1uVoh4y9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
//               <span className="sr-only">Location</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//               </svg>
//             </a>
//             <a href="https://alhazmisw.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
//               <span className="sr-only">Website</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
//               </svg>
//             </a>
//           </div>
//           <div className="text-center text-sm text-gray-500">
//             <p>هاتف: 6293333, 6296782</p>
//             <p>البريد الإلكتروني: loody.227@gmail.com</p>
//             <p>العنوان: جدة، حي النخيل</p>
//             <p>Al-Nakheel District, Jeddah</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Phone, MapPin, Globe, Mail } from 'lucide-react';

// export function CompanyAddress() {
//   return (
//     <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 rounded-xl border border-gray-200 dark:border-gray-700">
//       <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-900 p-10 rounded-xl shadow-md">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">شركة سعود وناصر الحازمي</h2>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">SAUD & NASSER AL HAZMI CO</p>
//         </div>
//         <div className="mt-8 space-y-6">
//           <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
//             <a href="tel:6293333" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300">
//               <span className="sr-only">Phone</span>
//               <Phone className="h-6 w-6" />
//             </a>
//             <a href="mailto:loody.227@gmail.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300">
//               <span className="sr-only">Email</span>
//               <Mail className="h-6 w-6" />
//             </a>
//             <a href="https://maps.app.goo.gl/S4REDZ2mb1uVoh4y9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300">
//               <span className="sr-only">Location</span>
//               <MapPin className="h-6 w-6" />
//             </a>
//             <a href="https://alhazmisw.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300">
//               <span className="sr-only">Website</span>
//               <Globe className="h-6 w-6" />
//             </a>
//           </div>
//           <div className="text-center text-sm text-gray-500 dark:text-gray-400">
//             <p>هاتف: 6293333, 6296782</p>
//             <p>البريد الإلكتروني: loody.227@gmail.com</p>
//             <p>العنوان: جدة، حي النخيل</p>
//             <p>Al-Nakheel District, Jeddah</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// حلو بس بعدلة
// import { Phone, MapPin, Globe, Mail } from "lucide-react";

// export function CompanyAddress() {
//   const address = "جدة، حي النخيل"; // العنوان
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     address
//   )}`;

//   return (
//     <div className="flex items-center justify-center bg-gray-100 p-6 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-xl border border-gray-200 dark:border-gray-700">
//       <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-900 p-10 rounded-xl shadow-md print:shadow-none">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
//             شركة سعود وناصر الحازمي
//           </h2>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//             SAUD & NASSER AL HAZMI CO
//           </p>
//         </div>
//         <div className="mt-8 space-y-4 flex flex-col items-center">
//           <div className="flex items-center space-x-3">
//             <Phone className="h-6 w-6 text-gray-600" />
//             <span className="text-gray-900 dark:text-gray-100">
//               هاتف: 6293333, 6296782
//             </span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Mail className="h-6 w-6 text-gray-600" />
//             <span className="text-gray-900 dark:text-gray-100">
//               البريد الإلكتروني: loody.227@gmail.com
//             </span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <MapPin className="h-6 w-6 text-gray-600" />
//             <a
//               href={googleMapsUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-900 dark:text-gray-100  no-underline" // إضافة no-underline
//             >
//               <span>{address}</span>
//             </a>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Globe className="h-6 w-6 text-gray-600" />
//             <span className="text-gray-900 dark:text-gray-100">
//               الموقع الإلكتروني: www.alhazmisw.com
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Phone, MapPin, Globe, Mail } from "lucide-react";

// export function CompanyAddress() {
//   const address = "جدة، حي النخيل"; // العنوان
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     address
//   )}`;

//   return (

//     <div id="invoice-details-section"> {/* قسم معلومات الحساب البنكي */}

// <div className="flex items-center justify-center  p-4 rounded-md print:p-0">
//       <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-md shadow-md print:shadow-none border border-gray-200 dark:border-gray-700">
//         {/* اسم الشركة */}
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-white print:text-black no-underline">
//             شركة سعود وناصر الحازمي
//           </h2>
//           <p className="text-lg font-medium text-gray-600 dark:text-gray-400 print:text-black no-underline">
//             SAUD & NASSER AL HAZMI CO
//           </p>
//         </div>
//         {/* معلومات الاتصال */}
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 print:space-y-0 print:flex-row print:justify-between">
//           <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//             <Phone className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//             <span className="text-sm mt-2">6293333, 6296782</span>
//           </div>
//           <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//             <Mail className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//             <span className="text-sm mt-2">loody.227@gmail.com</span>
//           </div>
//           <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//             <MapPin className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//             <a
//               href={googleMapsUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm mt-2 hover:text-blue-600 dark:hover:text-blue-400 print:no-underline print:text-black"
//             >
//               {address}
//             </a>
//           </div>
//           <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//             <Globe className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//             <span className="text-sm mt-2">www.alhazmisw.com</span>
//           </div>
//         </div>
//       </div>
//     </div>

//      </div>

//   );
// }

// import { Phone, MapPin, Globe, Mail, Clock } from "lucide-react";

// export function CompanyAddress() {
//   const address = "جدة، حي النخيل"; // العنوان
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     address
//   )}`;

//   return (
//     <div id="invoice-details-section"> {/* قسم معلومات الشركة */}

//       <div className="flex items-center justify-center p-4 rounded-md print:p-0">
//         <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-md shadow-md print:shadow-none border border-gray-200 dark:border-gray-700">
//           {/* اسم الشركة */}
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800 dark:text-white print:text-black no-underline">
//               شركة سعود وناصر الحازمي
//             </h2>
//             <p className="text-lg font-medium text-gray-600 dark:text-gray-400 print:text-black no-underline">
//               SAUD & NASSER AL HAZMI CO
//             </p>
//           </div>
//           {/* معلومات الاتصال */}
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 print:space-y-0 print:flex-row print:justify-between">
//             <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//               <Phone className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//               <span className="text-sm mt-2">6293333, 6296782</span>
//             </div>
//             <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//               <Mail className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//               <span className="text-sm mt-2">loody.227@gmail.com</span>
//             </div>
//             <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//               <MapPin className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm mt-2 hover:text-blue-600 dark:hover:text-blue-400 print:no-underline print:text-black"
//               >
//                 {address}
//               </a>
//             </div>
//             <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//               <Globe className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//               <span className="text-sm mt-2">www.alhazmisw.com</span>
//             </div>
//           </div>

//           {/* ساعات العمل وعبارة الشكر */}
//           <div className="text-center mt-6">
//             <div className="flex flex-col items-center text-gray-700 dark:text-gray-200 print:text-black">
//               <Clock className="h-5 w-5 text-gray-500 print:transform print:scale-100 print:overflow-visible" />
//               <p className="text-sm mt-2">
//                 ساعات العمل: من السبت إلى الخميس: 8:00 صباحًا - 8:30 مساءً
//               </p>
//             </div>
//             <p className="text-sm mt-4 text-gray-700 dark:text-gray-200 print:text-black">
//               شكراً لتعاملكم معنا
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// import { Phone, MapPin, Globe, Mail, Clock } from "lucide-react";

// export function CompanyAddress() {
//   const address = "جدة، حي النخيل"; // العنوان
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     address
//   )}`;

//   return (
//     <div id="invoice-details-section">
//       <div className="flex items-center justify-center p-4 rounded-md print:p-0">
//         <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg print:shadow-none border border-gray-300 dark:border-gray-800 space-y-8">

//           {/* اسم الشركة */}
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-semibold text-gray-900 dark:text-white print:text-black">
//               شركة سعود وناصر الحازمي
//             </h2>
//             <p className="text-lg font-medium text-gray-600 dark:text-gray-400 print:text-black">
//               SAUD & NASSER AL HAZMI CO
//             </p>
//           </div>

//           {/* معلومات الاتصال */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 dark:text-gray-200 print:text-black">
//             <div className="flex flex-col items-center">
//               <Phone className="h-5 w-5 text-gray-500" />
//               <span className="text-sm mt-1">6293333, 6296782</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <Mail className="h-5 w-5 text-gray-500" />
//               <span className="text-sm mt-1">loody.227@gmail.com</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <MapPin className="h-5 w-5 text-gray-500" />
//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm mt-1 hover:text-blue-600 dark:hover:text-blue-400 print:no-underline"
//               >
//                 {address}
//               </a>
//             </div>
//             <div className="flex flex-col items-center">
//               <Globe className="h-5 w-5 text-gray-500" />
//               <span className="text-sm mt-1">www.alhazmisw.com</span>
//             </div>
//           </div>

//           {/* ساعات العمل وعبارة الشكر */}
//           <div className="text-center space-y-2">
//             <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
//               <Clock className="h-5 w-5 text-gray-500" />
//               <p className="text-sm">
//                 ساعات العمل: من السبت إلى الخميس: 8:00 صباحًا - 8:30 مساءً
//               </p>
//             </div>
//             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//               شكراً لتعاملكم معنا
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import { Phone, MapPin, Globe, Mail, Clock, Stamp } from "lucide-react";

export function CompanyAddress() {
  const address = "جدة، حي النخيل"; // العنوان
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div id="invoice-details-section">
      <div className="flex items-center justify-center p-4 rounded-md print:p-0">
        <div className="w-full max-w-xl bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg print:shadow-none border border-gray-300 dark:border-gray-800 space-y-8">
          {/* اسم الشركة */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white print:text-black">
              شركة سعود وناصر الحازمي
            </h2>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 print:text-black">
              SAUD & NASSER AL HAZMI CO
            </p>
          </div>

          {/* معلومات الاتصال */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 dark:text-gray-200 print:text-black">
            <div className="flex flex-col items-center">
              <Phone className="h-5 w-5 text-gray-500" />
              <span className="text-sm mt-1">6293333 , 6296782</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-5 w-5 text-gray-500" />
              <span className="text-sm mt-1">snhazmi@snahco.com</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-5 w-5 text-gray-500" />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-1 text-gray-700 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-200 print:no-underline"
              >
                {address}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-5 w-5 text-gray-500" />
              <span className="text-sm mt-1">www.alhazmisw.com</span>
            </div>
          </div>

          {/* الرقم الضريبي للمنشأة */}
          <div className="flex flex-col items-center mt-4">
            <Stamp className="h-5 w-5 text-gray-500" />
            <span className="text-sm mt-1 text-gray-700 dark:text-gray-200 print:text-black">
              الرقم الضريبي للمنشأة:{" "}
              <span className="font-medium">300166273300003</span>
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-200 print:text-black">
              Establishment Tax Number:{" "}
              <span className="font-medium">300166273300003</span>
            </span>
          </div>

          {/* ساعات العمل وعبارة الشكر */}
          <div className="text-center space-y-2">
            <div className="flex flex-col items-center justify-center space-y-2 text-gray-700 dark:text-gray-300">
              <Clock className="h-5 w-5 text-gray-500" />
              <p className="text-sm">
                ساعات العمل: من السبت إلى الخميس: 8:00 صباحًا - 8:30 مساءً
              </p>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              شكراً لتعاملكم معنا
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
