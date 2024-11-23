// "use client";
// import Head from 'next/head';
// import { Header } from '@/components/header';
// import { Tajawal } from 'next/font/google';
// import myFont from '@next/font/local';
// import { InvoiceList } from '@/components/invoice-list';
// import { BankInfo } from '@/components/bank-info';
// import { CompanyAddress } from '@/components/company-address';
// import { Component } from 'react';
// // import UploadPdfButton from '@/components/UploadPdfButton';
// import { Roboto } from 'next/font/google';
// import FileDropzone from '@/components/FileDropzone';
// const roboto = Roboto({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   style: ['normal', 'italic'],
// });

// const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] });
// const Amiri = myFont({ 
//   src: '//Amiri-Regular.ttf',

//  })



// export default function Home() {
//   return (

    

    


//     <div dir="rtl" className="min-h-screen bg-background flex flex-col">
//       <main id="invoice-content" className="container mx-auto px-4 py-8 flex-grow">

        
//         <Header />
//         <h2 className=" text-3xl font-bold mb-6 text-center">عرض سعر</h2>
//         <InvoiceList />
//         <BankInfo />
//         <CompanyAddress />
        
        
//       </main>
//       {/* <footer>
//         <CompanyAddress />
//       </footer> */}
//     </div>
    
//   );
// }



// تمام قبل اضافه ميزه تسجيل الدخول
// "use client";
// import Head from 'next/head';
// import { Header } from '@/components/header';
// import { Tajawal } from 'next/font/google';
// // import myFont from '@next/font/local';
// import { InvoiceList } from '@/components/invoice-list';
// import { BankInfo } from '@/components/bank-info';
// import { CompanyAddress } from '@/components/company-address';
// import { Component } from 'react';
// import { Roboto } from 'next/font/google';
// import FileDropzone from '@/components/FileDropzone';
// import Navbar from '@/components/Navbar';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '@/lib/firebase';
// import { useRouter } from 'next/navigation'


// const roboto = Roboto({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   style: ['normal', 'italic'],
// });

// const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] });


// export default function Home() {
//   const [user] = useAuthState(auth);
//   const router = useRouter()
//   const userSession = sessionStorage.getItem('user');

//   console.log({user})
 
//   if (!user && !userSession){
//     router.push('/sign-up')
//   }
  

//   return (
//     <div dir="rtl" className="min-h-screen bg-background flex flex-col">
//       {/* إضافة شريط التنقل هنا */}
//       <Navbar />
      
//       <main id="invoice-content" className="container mx-auto px-4 py-8 flex-grow">
//         <Header />
//         <h2 className="text-3xl font-bold mb-6 text-center">عرض سعر</h2>
//         <InvoiceList />
//         <BankInfo />
//         <CompanyAddress />
//       </main>
//       {/* <footer>
//         <CompanyAddress />
//       </footer> */}
//     </div>
//   );
// }



// "use client";
// import Head from 'next/head';
// import { Header } from '@/components/header';
// import { Tajawal } from 'next/font/google';
// import { InvoiceList } from '@/components/invoice-list';
// import { BankInfo } from '@/components/bank-info';
// import { CompanyAddress } from '@/components/company-address';
// import { Roboto } from 'next/font/google';
// import FileDropzone from '@/components/FileDropzone';
// import Navbar from '@/components/Navbar';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '@/lib/firebase';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const roboto = Roboto({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   style: ['normal', 'italic'],
// });

// const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] });

// export default function Home() {
//   const [user, loading] = useAuthState(auth);
//   const router = useRouter();
//   const userSession = sessionStorage.getItem('user');

//   console.log({ user });

//   // استخدام useEffect لتوجيه المستخدم عند عدم تسجيل الدخول
//   useEffect(() => {
//     if (!loading && !user && !userSession) {
//       router.push('/sign-in');  // توجه إلى صفحة تسجيل الدخول
//     }
//   }, [user, loading, userSession, router]);

//   // عرض رسالة تحميل إذا كان التطبيق ينتظر حالة تسجيل الدخول
//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>;
//   }

//   return (
//     <div dir="rtl" className="min-h-screen bg-background flex flex-col">
//       <Navbar />
      
      
//       <main id="invoice-content" className="container mx-auto px-4 py-8 flex-grow">
//         <Header />
//         <h2 className="text-3xl font-bold mb-6 text-center">عرض سعر</h2>
//         <InvoiceList />
//         <BankInfo />
//         <CompanyAddress />
        
//       </main>
//     </div>
//   );
// }


// كويس بس قلت احتاج احل مشكله تسجيل الخروج وجاري حلها 
"use client";
import Head from 'next/head';
import { Header } from '@/components/header';
import { Tajawal } from 'next/font/google';
import { InvoiceList } from '@/components/invoice-list';
import { BankInfo } from '@/components/bank-info';
import { CompanyAddress } from '@/components/company-address';
import { Roboto } from 'next/font/google';
import FileDropzone from '@/components/FileDropzone';
import Navbar from '@/components/Navbar';
import UserStatus from '@/components/UserStatus'; // استيراد UserStatus
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] });

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem('user');

  console.log({ user });

  // استخدام useEffect لتوجيه المستخدم عند عدم تسجيل الدخول
  // القديم
  // useEffect(() => {
  //   if (!loading && !user && !userSession) {
  //     router.push('/sign-in');  // توجه إلى صفحة تسجيل الدخول
  //   }
  // }, [user, loading, userSession, router]);

  useEffect(() => {
    const userSession = sessionStorage.getItem('user');
    
    if (!loading && !user && !userSession) {
      console.log('Redirecting to sign-in because user is not logged in');
      router.push('/sign-in');  // توجه إلى صفحة تسجيل الدخول
    }
  }, [user, loading, router]);
  // عرض رسالة تحميل إذا كان التطبيق ينتظر حالة تسجيل الدخول
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>;
  }

  return (
    <div dir="rtl" className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      
      {/* إضافة UserStatus تحت Navbar */}
      <div className="container mx-auto px-4 py-4">
        <UserStatus />
        
      </div>
      
      <main id="invoice-content" className="container mx-auto px-4 py-8 flex-grow">
        <Header />
        <h2 className="text-3xl font-bold mb-6 text-center">عرض سعر</h2>
        <InvoiceList />
        <BankInfo />
        <CompanyAddress />
      </main>
    </div>
  );
}



