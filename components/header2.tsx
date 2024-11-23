
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



// اكثر جمالية
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



import Image from 'next/image';
import { ModeToggle } from './mode-toggle';

export function Header2() {
  return (
    <header className="bg-background border-b ">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Image and Company Name */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/Logo.png"
            alt="SAUD & NASSER AL HAZMI CO Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-gray-100">شركة سعود وناصر الحازمي</h1>
          <h1 className="font-roboto text-3xl font-extrabold mt-2 text-gray-800  dark:text-gray-100">SAUD & NASSER AL HAZMI CO</h1>
          
          <p className="text-lg mt-2 text-gray-600">وجهتك الشاملة لحلول الأدوات الصحية المتكاملة</p>
        </div>
        <div className="print:hidden">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}