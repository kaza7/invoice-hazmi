
// import Image from 'next/image';
// import { ModeToggle } from './mode-toggle';

// import { Component } from 'lucide-react';



// export function Header() {
//   return (
//     <header className="bg-background border-b ">
//       <div className="container mx-auto px-4 py-8 flex flex-col items-center">
//         {/* Image and Company Name */}
//         <div className="flex flex-col items-center mb-4">
//           <Image
//             src="/Logo.png"
            
//             // src="https://framerusercontent.com/images/WMRxA8ILikYsnAeCQ6qTbyfitTo.png"
//             alt="SAUD & NASSER AL HAZMI CO Logo"
//             width={100}  // Increased size
//             height={100} // Increased size
//             className="rounded-full"
//           />
//           <h1 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">شركة سعود وناصر الحازمي</h1>
//           <h1 className="font-roboto text-3xl font-extrabold mt-4">SAUD & NASSER AL HAZMI CO</h1>
          
//           <p className="text-lg mt-2">وجهتك الشاملة لحلول الأدوات الصحية المتكاملة</p>
//         </div>
//         <div className="print:hidden">
//         <ModeToggle />
//         </div>
//       </div>

    
      
//     </header>
//   );
// }



// تصميم ثاني زق
// import Image from 'next/image';
// import { ModeToggle } from './mode-toggle';

// export function Header() {
//   return (
//     <header className="bg-background border-b ">
//       <div className="container mx-auto px-4 py-8 flex flex-col items-center">
//         {/* Image and Company Name */}
//         <div className="flex flex-col items-center mb-4">
//           <Image
//             src="/Logo.png"
//             alt="SAUD & NASSER AL HAZMI CO Logo"
//             width={100}
//             height={100}
//             className="rounded-full"
//           />
          
//           {/* Arabic and English Company Name */}
//           <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
//             <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:mr-4">
//               شركة سعود وناصر الحازمي
//             </h1>
//             <h1 className="font-roboto text-3xl font-extrabold mt-4 sm:mt-0">
//               SAUD & NASSER AL HAZMI CO
//             </h1>
//           </div>

//           <p className="text-lg mt-2 text-center">
//             وجهتك الشاملة لحلول الأدوات الصحية المتكاملة
//           </p>
//         </div>
//         <div className="print:hidden">
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }



// اكثر جمالية وبحاول اعدل عليه وهو المعتمد حاليا 
// import Image from 'next/image';
// import { ModeToggle } from './mode-toggle';

// export function Header() {
//   return (
//     <header className="bg-background border-b ">
//       <div className="container mx-auto px-4 py-8 flex flex-col items-center">
//         {/* Image and Company Name */}
//         <div className="flex flex-col items-center mb-4">
//           <Image
//             src="/Logo.png"
//             alt="SAUD & NASSER AL HAZMI CO Logo"
//             width={100}  // Increased size
//             height={100} // Increased size
//             className="rounded-full"
//           />
//           <h1 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">شركة سعود وناصر الحازمي</h1>
//           <h1 className="font-roboto text-2xl font-extrabold mt-2">SAUD & NASSER AL HAZMI CO</h1>
          
//           <p className="text-lg mt-2">وجهتك الشاملة لحلول الأدوات الصحية المتكاملة</p>
//         </div>
//         <div className="print:hidden">
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }

// هنا نهايته الكود اللي كان ينعرض حاليا



// import Image from 'next/image';
// import { ModeToggle } from './mode-toggle';

// export function Header() {
//   return (
//     <header className="bg-background border-b ">
//       <div className="container mx-auto px-4 py-8 flex flex-col items-center">
//         {/* Image and Company Name */}
//         <div className="flex flex-col items-center mb-4">
//           <Image
//             src="/Logo.png"
//             alt="SAUD & NASSER AL HAZMI CO Logo"
//             width={100}
//             height={100}
//             className="rounded-full"
//           />
//           <h1 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-gray-100">شركة سعود وناصر الحازمي</h1>
//           <h1 className="font-roboto text-3xl font-extrabold mt-2 text-gray-800  dark:text-gray-100">SAUD & NASSER AL HAZMI CO</h1>
          
//           <p className="text-lg mt-2 text-gray-600">وجهتك الشاملة لحلول الأدوات الصحية المتكاملة</p>
//         </div>
//         <div className="print:hidden">
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }


// import Image from 'next/image';
// import { ModeToggle } from './mode-toggle';
// import { Stamp } from 'lucide-react'// تأكد من استيراد الأيقونة من المسار الصحيح

// export function Header() {
//   return (
//     <header className="bg-background border-b ">
//       {/* Top Bar with Tax Number */}
//       <div className="bg-gray-100 dark:bg-gray-800 w-full py-2">
//         <div className="container mx-auto px-4 flex justify-center items-center">
//           <Stamp className="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2" />
//           <p className="text-xs text-gray-700 dark:text-gray-300">
//             الرقم الضريبي للمنشأة: <span className="font-medium">300166273300003</span>
//           </p>
//           <span className="mx-2 text-gray-700 dark:text-gray-300">|</span>
//           <p className="text-xs text-gray-700 dark:text-gray-300">
//             Establishment Tax Number: <span className="font-medium">300166273300003</span>
//           </p>
//         </div>
//       </div>
//       {/* Main Header Content */}
//       <div className="container mx-auto px-4 py-6 flex flex-col items-center">
//         {/* Image and Company Name */}
//         <div className="flex flex-col items-center mb-4">
//           <Image
//             src="/Logo.png"
//             alt="SAUD & NASSER AL HAZMI CO Logo"
//             width={100}
//             height={100}
//             className="rounded-full"
//           />
//           <h1 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
//             شركة سعود وناصر الحازمي
//           </h1>
//           <h1 className="font-roboto text-3xl font-extrabold mt-2 text-gray-800 dark:text-gray-100">
//             SAUD & NASSER AL HAZMI CO
//           </h1>
//           <p className="text-lg mt-2 text-gray-600">
//             وجهتك الشاملة لحلول الأدوات الصحية المتكاملة
//           </p>
//         </div>
//         <div className="print:hidden">
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }


// اللي عدلته اخر شي ومتجاوب مع الجوال بس بحاول احسنه اكثر
// import Image from "next/image";
// import { ModeToggle } from "./mode-toggle";

// export function Header() {
//   return (
//     <header className="bg-background border-b">
//       <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
//         {/* Logo Section */}
//         <div>
//           <Image
//             src="/Logo.png"
//             alt="SAUD & NASSER AL HAZMI CO Logo"
//             width={100}
//             height={100}
//             className="rounded-full"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="mt-6">
//           <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
//             شركة سعود وناصر الحازمي
//           </h1>
//           <h2 className="font-roboto text-lg font-extrabold mt-2">
//             SAUD & NASSER AL HAZMI CO
//           </h2>
//           <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
//             وجهتك الشاملة لحلول الأدوات الصحية المتكاملة
//           </p>
//         </div>

//         {/* Mode Toggle */}
//         <div className="mt-6 print:hidden">
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }



// import Image from "next/image";
// import { ModeToggle } from "./mode-toggle";

// export function Header() {
//   return (
//     <header className="bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 border-b">
//       <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
//         {/* Logo Section */}
//         <div className="flex flex-col items-center">
//           <Image
//             src="/Logo.png"
//             alt="SAUD & NASSER AL HAZMI CO Logo"
//             width={120}
//             height={120}
//             className="rounded-full shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="mt-8">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 ">
//             شركة سعود وناصر الحازمي
//           </h1>
//           <h2 className=" text-xl font-medium text-gray-700 dark:text-gray-300 mt-2">
//             SAUD & NASSER AL HAZMI CO
//           </h2>

//           <div className="mt-6 border-t-2 border-gray-300 dark:border-gray-700 w-20 mx-auto"></div>

//           <p className="text-lg mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md mx-auto">
//             وجهتك الشاملة لحلول الأدوات الصحية المتكاملة
//           </p>
//         </div>

//         {/* Mode Toggle */}
//         <div className="mt-8 print:hidden">
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }


import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 border-b">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/Logo.png"
            alt="SAUD & NASSER AL HAZMI CO Logo"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            شركة سعود وناصر الحازمي
          </h1>
          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mt-2 font-english">
            SAUD & NASSER AL HAZMI CO
          </h2>

          <div className="mt-6 border-t-2 border-gray-300 dark:border-gray-700 w-20 mx-auto"></div>

          <p className="text-lg mt-4 text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md mx-auto">
            وجهتك الشاملة لحلول الأدوات الصحية المتكاملة
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="mt-8 print:hidden">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
