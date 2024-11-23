// 'use client'
// import { useState } from 'react';
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
// import {auth} from "@/lib/firebase";

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async () => {
//     try {
//         const res = await createUserWithEmailAndPassword(email, password)
//         console.log({res})
//         sessionStorage.setItem('user', true)
//         setEmail('');
//         setPassword('')

//     } catch(e){
//         console.error(e)
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
//         <h1 className="text-white text-2xl mb-5">Sign Up</h1>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
//         />
//         <button 
//           onClick={handleSignUp}
//           className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




// مزبوط
// 'use client';
// import { useState } from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async () => {
//     try {
//       const res = await createUserWithEmailAndPassword(email, password);
//       console.log({ res });
//       sessionStorage.setItem('user', true);
//       setEmail('');
//       setPassword('');
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
//         <h1 className="text-white text-2xl mb-5">Sign Up</h1>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
//         />
//         <button 
//           onClick={handleSignUp}
//           className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 mb-4"
//         >
//           Sign Up
//         </button>
        
//         {/* زر التسجيل عبر Google */}
//         <button 
//           onClick={signInWithGoogle}
//           className="w-full p-3 bg-red-600 rounded text-white hover:bg-red-500"
//         >
//           Sign Up with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




// 'use client';

// import * as React from 'react';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   surname: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       surname: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

//   // التعامل مع التسجيل بالبريد وكلمة المرور
//   const handleSignUp = async (data: FormData) => {
//     try {
//       const res = await createUserWithEmailAndPassword(data.email, data.password);
//       console.log({ res });
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side - Decorative Background */}
//       <div className="hidden w-1/2 bg-[url('/SNAH.png?height=1080&width=1080')] bg-cover bg-center lg:block" />

//       {/* Right side - Form */}
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold">Create an Account</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full">Create Account</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>Create your account</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>First Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="John" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Last Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Doe" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="surname"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Surname</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Smith" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input placeholder="john.doe@example.com" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <Input placeholder="••••••••" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <Button type="submit" className="w-full">Register</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 Sign up with Google
//               </Button>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import * as React from 'react';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   surname: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const router = useRouter(); // استيراد useRouter
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       surname: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

//   // التعامل مع التسجيل بالبريد وكلمة المرور
//   const handleSignUp = async (data: FormData) => {
//     try {
//       const res = await createUserWithEmailAndPassword(data.email, data.password);
//       console.log({ res });
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/'); // توجيه المستخدم إلى الصفحة الرئيسية بعد التسجيل بنجاح
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side - Decorative Background */}
//       <div className="hidden w-1/2 bg-[url('/SNAH.png?height=1080&width=1080')] bg-cover bg-center lg:block" />

//       {/* Right side - Form */}
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold">إنشاء حساب جديد</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full">إنشاء حساب</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>إنشاء حسابك</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>الاسم الأول</FormLabel>
//                         <FormControl>
//                           <Input placeholder="محمد" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>اسم العائلة</FormLabel>
//                         <FormControl>
//                           <Input placeholder="أحمد" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="surname"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>اللقب</FormLabel>
//                         <FormControl>
//                           <Input placeholder="السيد" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>البريد الإلكتروني</FormLabel>
//                         <FormControl>
//                           <Input placeholder="example@example.com" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>كلمة المرور</FormLabel>
//                         <FormControl>
//                           <Input placeholder="••••••••" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <Button type="submit" className="w-full">تسجيل</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-white px-2 text-muted-foreground">أو تابع باستخدام</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 التسجيل باستخدام جوجل
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm">
//                   لديك حساب بالفعل؟{' '}
//                   <a href="/sign-in" className="text-blue-500 hover:underline">
//                     تسجيل الدخول
//                   </a>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import * as React from 'react';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState<string | null>(null); // حالة لتخزين رسالة الخطأ
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

//   // التعامل مع التسجيل بالبريد وكلمة المرور
//   const handleSignUp = async (data: FormData) => {
//     try {
//       const res = await createUserWithEmailAndPassword(data.email, data.password);
//       console.log({ res });
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/'); // توجيه المستخدم إلى الصفحة الرئيسية بعد التسجيل بنجاح
//     } catch (e: any) {
//       if (e.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. حاول مرة أخرى.');
//       }
//       console.error(e);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side - Decorative Background */}
//       <div className="hidden w-1/2 bg-[url('/SNAH.png?height=1080&width=1080')] bg-cover bg-center lg:block" />

//       {/* Right side - Form */}
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold">إنشاء حساب جديد</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full">إنشاء حساب</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>إنشاء حسابك</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>الاسم الأول</FormLabel>
//                         <FormControl>
//                           <Input placeholder="محمد" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>اسم العائلة</FormLabel>
//                         <FormControl>
//                           <Input placeholder="أحمد" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="username"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>اسم المستخدم</FormLabel>
//                         <FormControl>
//                           <Input placeholder="user123" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>البريد الإلكتروني</FormLabel>
//                         <FormControl>
//                           <Input placeholder="example@example.com" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>كلمة المرور</FormLabel>
//                         <FormControl>
//                           <Input placeholder="••••••••" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {error && <p className="text-red-500 text-sm">{error}</p>} {/* عرض رسالة الخطأ */}
//                   <Button type="submit" className="w-full">تسجيل</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-white px-2 text-muted-foreground">أو تابع باستخدام</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 التسجيل باستخدام جوجل
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm">
//                   لديك حساب بالفعل؟{' '}
//                   <a href="/sign-in" className="text-blue-500 hover:underline">
//                     تسجيل الدخول
//                   </a>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }


// تمام باقي احسنها اكثر
// 'use client';

// import * as React from 'react';

// import { useState, useEffect } from 'react'; // تأكد من استيراد useEffect هنا
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState<string | null>(null); // حالة لتخزين رسالة الخطأ
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   // التعامل مع التسجيل بالبريد وكلمة المرور
//   const handleSignUp = async (data: FormData) => {
//     setError(null); // إعادة تعيين الخطأ قبل محاولة التسجيل
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/'); // توجيه المستخدم إلى الصفحة الرئيسية بعد التسجيل بنجاح
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. حاول مرة أخرى.');
//     }
//   };

//   // التحقق من خطأ Firebase
//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. حاول مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side - Decorative Background */}
//       <div className="hidden w-1/2 bg-[url('/SNAH.png?height=1080&width=1080')] bg-cover bg-center lg:block" />

//       {/* Right side - Form */}
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold">إنشاء حساب جديد</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full">إنشاء حساب</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>إنشاء حسابك</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>الاسم الأول</FormLabel>
//                         <FormControl>
//                           <Input placeholder="محمد" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>اسم العائلة</FormLabel>
//                         <FormControl>
//                           <Input placeholder="أحمد" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="username"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>اسم المستخدم</FormLabel>
//                         <FormControl>
//                           <Input placeholder="user123" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>البريد الإلكتروني</FormLabel>
//                         <FormControl>
//                           <Input placeholder="example@example.com" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>كلمة المرور</FormLabel>
//                         <FormControl>
//                           <Input placeholder="••••••••" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {error && <p className="text-red-500 text-sm">{error}</p>} {/* عرض رسالة الخطأ */}
//                   <Button type="submit" className="w-full">تسجيل</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-white px-2 text-muted-foreground">أو تابع باستخدام</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 التسجيل باستخدام جوجل
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm">
//                   لديك حساب بالفعل؟{' '}
//                   <a href="/sign-in" className="text-blue-500 hover:underline">
//                     تسجيل الدخول
//                   </a>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('An error occurred during registration. Please try again.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('Email is already in use. Please log in.');
//       } else {
//         setError('An error occurred during registration. Please try again.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-black">
//       <div className="hidden w-1/2 bg-cover bg-center rounded-lg lg:block" style={{ backgroundImage: "url('/SNAH.png')" }} />
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold text-white">Create Your Account to Unleash Your Dreams</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md">Start Creating</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] bg-gray-800 rounded-lg shadow-lg">
//               <DialogHeader>
//                 <DialogTitle className="text-white">Create Your Account</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="First Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Last Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Email" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Password" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {error && <p className="text-red-500 text-sm">{error}</p>}
//                   <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md">Start Creating</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-gray-600" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-gray-800 px-2 text-gray-400">or continue with</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full bg-white text-black rounded-lg shadow-md flex items-center justify-center" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 Continue with Google
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-400">
//                   By signing in, you agree to Generative AI's <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }





// ظبابية الصورة
// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('An error occurred during registration. Please try again.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('Email is already in use. Please log in.');
//       } else {
//         setError('An error occurred during registration. Please try again.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-black">
//       <div className="hidden lg:flex w-1/2 items-center justify-center relative">
//         <div className="absolute inset-0 bg-cover bg-center filter blur-lg" style={{ backgroundImage: "url('/SNAH.png')" }} />
//         <div className="relative w-full h-full max-w-md rounded-3xl overflow-hidden shadow-lg">
//           <img
//             src="/SNAH.png"
//             alt="Background"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
//           <div className="absolute top-4 left-4 text-white font-bold text-lg">
//             Gen AI
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold text-white">Create Your Account to Unleash Your Dreams</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md">Start Creating</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] bg-gray-800 rounded-lg shadow-lg">
//               <DialogHeader>
//                 <DialogTitle className="text-white">Create Your Account</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="First Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Last Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Email" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Password" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {error && <p className="text-red-500 text-sm">{error}</p>}
//                   <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md">Start Creating</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-gray-600" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-gray-800 px-2 text-gray-400">or continue with</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full bg-white text-black rounded-lg shadow-md flex items-center justify-center" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 Continue with Google
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-400">
//                   By signing in, you agree to Generative AI's <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }




// تمام بس باقي اعدله

// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('An error occurred during registration. Please try again.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('Email is already in use. Please log in.');
//       } else {
//         setError('An error occurred during registration. Please try again.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-black">
//       <div className="hidden lg:flex w-1/2 items-center justify-center">
//         <div className="relative w-full h-full max-w-md rounded-3xl overflow-hidden shadow-lg">
//           <img
//             src="/SNAH.png"
//             alt="Background"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
//           <div className="absolute top-4 left-4 text-white font-bold text-lg">
//             SNAH
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold text-white">Create Your Account to Unleash Your Dreams</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md">Start Creating</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] bg-gray-800 rounded-lg shadow-lg">
//               <DialogHeader>
//                 <DialogTitle className="text-white">Create Your Account</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="First Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Last Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Email" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Password" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {error && <p className="text-red-500 text-sm">{error}</p>}
//                   <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md">Start Creating</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-gray-600" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-gray-800 px-2 text-gray-400">or continue with</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full bg-white text-black rounded-lg shadow-md flex items-center justify-center" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 Continue with Google
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-400">
//                   By signing in, you agree to Generative AI's <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('An error occurred during registration. Please try again.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('Email is already in use. Please log in.');
//       } else {
//         setError('An error occurred during registration. Please try again.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-black">
//       <div className="hidden lg:flex w-1/2 items-center justify-center">
//         <div className="relative w-full h-full max-w-md rounded-3xl overflow-hidden shadow-lg">
//           <img
//             src="/SNAH.png"
//             alt="Background"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
//           <div className="absolute top-4 left-4 text-white font-bold text-lg">
//             SNAH
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold text-white">Create Your Account to Unleash Your Dreams</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md">Start Creating</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] bg-gray-800 rounded-lg shadow-lg">
//               <DialogHeader>
//                 <DialogTitle className="text-white">Create Your Account</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="First Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Last Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Email" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="Password" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {error && <p className="text-red-500 text-sm">{error}</p>}
//                   <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md">Start Creating</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-gray-600" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-gray-800 px-2 text-gray-400">or continue with</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full bg-white text-black rounded-lg shadow-md flex items-center justify-center" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 Continue with Google
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-400">
//                   By signing in, you agree to Generative AI's <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
//                 </p>
//               </div>
//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-400">
//                   Already have an account? <a href="#" onClick={() => router.push('/sign-in')} className="text-blue-500 hover:underline">Log in</a>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       setOpen(false);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-black">
//       <div className="hidden lg:flex w-1/2 items-center justify-center">
//         <div className="relative w-full h-full max-w-md rounded-3xl overflow-hidden shadow-lg">
//           <img
//             src="/SNAH.png"
//             alt="Background"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
//           <div className="absolute top-4 left-4 text-white font-bold text-lg">
//             SNAH
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <h1 className="text-center text-3xl font-bold text-white">أنشئ حسابك لتحقيق أحلامك</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-md">ابدأ الإنشاء</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] bg-gray-800 rounded-lg shadow-lg">
//               <DialogHeader>
//                 <DialogTitle className="text-white">أنشئ حسابك</DialogTitle>
//               </DialogHeader>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                   <FormField
//                     control={form.control}
//                     name="firstName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="الاسم الأول" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="lastName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="اسم العائلة" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="username"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="اسم المستخدم" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="البريد الإلكتروني" type="email" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="كلمة المرور" type="password" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   {error && <p className="text-red-500 text-sm">{error}</p>}
//                   <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md">ابدأ الإنشاء</Button>
//                 </form>
//               </Form>
//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-gray-600" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-gray-800 px-2 text-gray-400">أو تابع باستخدام</span>
//                 </div>
//               </div>
//               <Button variant="outline" className="w-full bg-white text-black rounded-lg shadow-md flex items-center justify-center" onClick={signInWithGoogle}>
//                 <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                   <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//                 </svg>
//                 تابع باستخدام جوجل
//               </Button>
//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-400">
//                   بتسجيل الدخول، أنت توافق على <a href="#" className="text-blue-500 hover:underline">شروط الخدمة</a> و<a href="#" className="text-blue-500 hover:underline">سياسة الخصوصية</a> الخاصة بالذكاء الاصطناعي التوليدي.
//                 </p>
//               </div>
//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-400">
//                   هل لديك حساب بالفعل؟ <a href="#" onClick={() => router.push('/login')} className="text-blue-500 hover:underline">تسجيل الدخول</a>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// }


// هنا الغيت الزر وجعلته بالواجهه فقط بدون ازرار
// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-black">
//       <div className="hidden lg:flex w-1/2 items-center justify-center">
//         <div className="relative w-full h-full max-w-md rounded-3xl overflow-hidden shadow-lg">
//           <img
//             src="/SNAH.png"
//             alt="Background"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
//           <div className="absolute top-4 left-4 text-white font-bold text-lg">
//             SNAH
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <div className="bg-gray-800 rounded-lg shadow-lg p-8">
//             <h2 className="text-center text-2xl font-bold text-white mb-4">أنشئ حسابك</h2>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="الاسم الأول" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="اسم العائلة" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="username"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="اسم المستخدم" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="البريد الإلكتروني" type="email" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="كلمة المرور" type="password" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 {error && <p className="text-red-500 text-sm">{error}</p>}
//                 <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md">ابدأ الإنشاء</Button>
//               </form>
//             </Form>
//             <div className="relative my-4">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t border-gray-600" />
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-gray-800 px-2 text-gray-400">أو تابع باستخدام</span>
//               </div>
//             </div>
//             <Button variant="outline" className="w-full bg-white text-black rounded-lg shadow-md flex items-center justify-center" onClick={signInWithGoogle}>
//               <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                 <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//               </svg>
//               تابع باستخدام جوجل
//             </Button>
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-400">
//                 بتسجيل الدخول، أنت توافق على <a href="#" className="text-blue-500 hover:underline">شروط الخدمة</a> و<a href="#" className="text-blue-500 hover:underline">سياسة الخصوصية</a> الخاصة بالذكاء الاصطناعي التوليدي.
//               </p>
//             </div>
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-400">
//                 هل لديك حساب بالفعل؟ <a href="#" onClick={() => router.push('/sign-in')} className="text-blue-500 hover:underline">تسجيل الدخول</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">نحن هنا للمساعدة</h2>
//           <p className="text-gray-600 mb-6">نحن وكالة متكاملة الخدمات مع خبراء جاهزين للمساعدة. سنتواصل معك في غضون 24 ساعة.</p>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//               <div className="flex space-x-4">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="الاسم الأول" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="اسم العائلة" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="البريد الإلكتروني" type="email" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="username"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="اسم المستخدم" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="كلمة المرور" type="password" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <Button type="submit" className="w-full bg-black text-white rounded-lg p-3">إرسال</Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//       <div className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/SNAH.png')" }}>
//         <div className="text-white p-8">
//           <p className="text-lg">"نحن وكالة حقيقية. لقد عملنا مع عشرات الوكالات التي لا تقدم ببساطة. العمل مع محترفين ذوي خبرة ومعرفة هو نسمة من الهواء النقي."</p>
//           <p className="mt-4">— إيلي سيمبسون</p>
//           <p>رئيس التصميم، مختبرات سيزيفوس</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// هذا جيد
// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//           <div className="flex items-center mb-6">
//             <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-800">Sign up</h2>
//           </div>
//           <p className="text-gray-600 mb-6">Enter details to create your account</p>
//           <Button className="w-full bg-blue-500 text-white rounded-lg p-3 mb-4 flex items-center justify-center">
//             <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//               <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//             </svg>
//             Sign up with Google
//           </Button>
//           <div className="text-center text-gray-500 mb-4">Or sign up with email</div>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//               <div className="flex space-x-4">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="First name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="Last name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="Email" type="email" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <Input className="w-full p-3 rounded-lg border border-gray-300" placeholder="Password" type="password" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//               <Button type="submit" className="w-full bg-blue-500 text-white rounded-lg p-3">Sign up</Button>
//             </form>
//           </Form>
//           <div className="mt-4 text-center">
//             <p className="text-sm text-gray-400">
//               Already have an account? <a href="#" onClick={() => router.push('/sign-in')} className="text-blue-500 hover:underline">Login now</a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/SNAH.png')" }}>
//         <div className="text-white p-8">
//           </div>
//       </div>
//     </div>
//   );
// }





// هذا اوكيه بس بحسنة 

// 'use client';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       username: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="flex min-h-screen bg-black">
//       <div className="hidden lg:flex w-1/2 items-center justify-center">
//         <div className="relative w-full h-full max-w-md rounded-3xl overflow-hidden shadow-lg">
//           <img
//             src="/SNAH.png"
//             alt="Background"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
//           <div className="absolute top-4 left-4 text-white font-bold text-lg">
//             SNAH
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-8">
//         <div className="mx-auto w-full max-w-md space-y-8">
//           <div className="bg-gray-800 rounded-lg shadow-lg p-8">
//             <h2 className="text-center text-2xl font-bold text-white mb-4">أنشئ حسابك</h2>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="الاسم الأول" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="اسم العائلة" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="username"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="اسم المستخدم" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="البريد الإلكتروني" type="email" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400" placeholder="كلمة المرور" type="password" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 {error && <p className="text-red-500 text-sm">{error}</p>}
//                 <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md">ابدأ الإنشاء</Button>
//               </form>
//             </Form>
//             <div className="relative my-4">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t border-gray-600" />
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-gray-800 px-2 text-gray-400">أو تابع باستخدام</span>
//               </div>
//             </div>
//             <Button variant="outline" className="w-full bg-white text-black rounded-lg shadow-md flex items-center justify-center" onClick={signInWithGoogle}>
//               <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//                 <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
//               </svg>
//               تابع باستخدام جوجل
//             </Button>
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-400">
//                 بتسجيل الدخول، أنت توافق على <a href="#" className="text-blue-500 hover:underline">شروط الخدمة</a> و<a href="#" className="text-blue-500 hover:underline">سياسة الخصوصية</a> الخاصة بالذكاء الاصطناعي التوليدي.
//               </p>
//             </div>
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-400">
//                 هل لديك حساب بالفعل؟ <a href="#" onClick={() => router.push('/sign-in')} className="text-blue-500 hover:underline">تسجيل الدخول</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import { Input } from '@/components/ui/input';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Eye, EyeOff } from 'lucide-react';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="min-h-screen w-full flex">
//       <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
//         <div className="w-full max-w-md space-y-8">
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-primary rounded-full" />
//               <span className="text-xl font-semibold">Orion</span>
//             </div>
//             <h1 className="text-2xl font-bold flex items-center">
//               Sign up <span className="ml-2">🔑</span>
//             </h1>
//             <p className="text-muted-foreground">Enter details to create your account</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full justify-start space-x-2"
//             disabled={loading}
//             onClick={signInWithGoogle}
//           >
//             <Image
//               src="/placeholder.svg"
//               alt="Google logo"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//             Sign up with Google
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-background px-2 text-muted-foreground">
//                 Or sign up with email
//               </span>
//             </div>
//           </div>

//           <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-6">
//             <div className="grid gap-4 grid-cols-2">
//               <div className="space-y-2">
//                 <label htmlFor="firstName">First name</label>
//                 <Input
//                   id="firstName"
//                   placeholder="Sherw"
//                   required
//                   disabled={loading}
//                   {...form.register('firstName')}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="lastName">Last name</label>
//                 <Input
//                   id="lastName"
//                   placeholder="Last name"
//                   required
//                   disabled={loading}
//                   {...form.register('lastName')}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email">Email</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="oriondoc@email.com"
//                 required
//                 disabled={loading}
//                 {...form.register('email')}
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="password">Password</label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Min. 8 characters"
//                   required
//                   disabled={loading}
//                   minLength={8}
//                   {...form.register('password')}
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-2 top-1/2 -translate-y-1/2"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showPassword ? 'Hide password' : 'Show password'}
//                   </span>
//                 </Button>
//               </div>
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? 'Signing up...' : 'Sign up'}
//             </Button>
//           </form>

//           <p className="text-center text-sm text-muted-foreground">
//             Already have an account?{' '}
//             <Link href="/login" className="text-primary hover:underline">
//               Login now
//             </Link>
//           </p>
//         </div>
//       </div>
//       <div className="hidden lg:flex flex-1 bg-muted items-center justify-center p-8">
//         <Image
//           src="/SNAH.png"
//           alt="Decorative illustration"
//           width={600}
//           height={600}
//           className="max-w-[90%] h-auto"
//           priority
//         />
//       </div>
//     </div>
//   );
// }



// افخم شي بالحياة انقلزي
// 'use client';

// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import { Input } from '@/components/ui/input';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Eye, EyeOff } from 'lucide-react';
// import { Checkbox } from '@/components/ui/checkbox'
// import { Label } from '@/components/ui/label'


// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="min-h-screen w-full flex">
//       <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
//         <div className="w-full max-w-md space-y-8">
//           <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//   <Image
//     src="/Logo.png" // ضع مسار الصورة هنا
//     alt="Logo"
//     width={32} // يمكنك تعديل الأبعاد حسب الحاجة
//     height={32}
//     className="rounded-full" // يجعل الصورة دائرية
//   />
//   <span className="text-xl font-semibold">SNAH</span>
// </div>
//             <h1 className="text-2xl font-bold flex items-center">
//               Sign up <span className="ml-2">🔑</span>
//             </h1>
//             <p className="text-muted-foreground">Enter details to create your account</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full justify-start space-x-2"
//             disabled={loading}
//             onClick={signInWithGoogle}
//           >
//             <Image
//               src="/google.png"
//               alt="Google logo"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//             Sign up with Google
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-background px-2 text-muted-foreground">
//                 Or sign up with email
//               </span>
//             </div>
//           </div>

//           <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-6">
//             <div className="grid gap-4 grid-cols-2">
//               <div className="space-y-2">
//                 <label htmlFor="firstName">First name</label>
//                 <Input
//                   id="firstName"
//                   placeholder="Sherw"
//                   required
//                   disabled={loading}
//                   {...form.register('firstName')}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="lastName">Last name</label>
//                 <Input
//                   id="lastName"
//                   placeholder="Last name"
//                   required
//                   disabled={loading}
//                   {...form.register('lastName')}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email">Email</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="khalid@email.com"
//                 required
//                 disabled={loading}
//                 {...form.register('email')}
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="password">Password</label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Min. 8 characters"
//                   required
//                   disabled={loading}
//                   minLength={8}
//                   {...form.register('password')}
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-2 top-1/2 -translate-y-1/2"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showPassword ? 'Hide password' : 'Show password'}
//                   </span>
//                 </Button>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <Checkbox id="remember" />
//               <Label htmlFor="remember">Remember me</Label>
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? 'Signing up...' : 'Sign up'}
//             </Button>
//           </form>

//           <p className="text-center text-sm text-muted-foreground">
//             Already have an account?{' '}
//             <Link href="/sign-in" className="text-primary hover:underline">
//               Login now
//             </Link>
//           </p>
//         </div>
//       </div>
//       <div className="hidden lg:block flex-1 relative overflow-hidden">
//         <div className="absolute inset-0 bg-muted/20 backdrop-blur-xl" />
//         <Image
//           src="/SNAH.png?height=1080&width=1080"
//           alt="Decorative illustration"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-[2rem] m-8"
//           priority
//         />
//       </div>
//     </div>
//   );
// }




// بيست اوف فخم جدا 



// 'use client';

// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import { Input } from '@/components/ui/input';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Eye, EyeOff } from 'lucide-react';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       await createUserWithEmailAndPassword(data.email, data.password);
//       sessionStorage.setItem('user', true);
//       router.push('/');
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="min-h-screen w-full flex">
//       <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
//         <div className="w-full max-w-md space-y-8">
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/Logo.png" // ضع مسار الصورة هنا
//                 alt="Logo"
//                 width={32} // يمكنك تعديل الأبعاد حسب الحاجة
//                 height={32}
//                 className="rounded-full" // يجعل الصورة دائرية
//               />
//               <span className="text-xl font-semibold">SNAH</span>
//             </div>
//             <h1 className="text-2xl font-bold flex items-center">
//               إنشاء حساب <span className="ml-2">🔑</span>
//             </h1>
//             <p className="text-muted-foreground">أدخل التفاصيل لإنشاء حسابك</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full justify-start space-x-2"
//             disabled={loading}
//             onClick={signInWithGoogle}
//           >
//             <Image
//               src="/google.png"
//               alt="Google logo"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//             التسجيل باستخدام جوجل
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-background px-2 text-muted-foreground">
//                 أو التسجيل باستخدام البريد الإلكتروني
//               </span>
//             </div>
//           </div>

//           <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-6">
//             <div className="grid gap-4 grid-cols-2">
//               <div className="space-y-2">
//                 <label htmlFor="firstName">الاسم الأول</label>
//                 <Input
//                   id="firstName"
//                   placeholder="خالد"
//                   required
//                   disabled={loading}
//                   {...form.register('firstName')}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="lastName">اسم العائلة</label>
//                 <Input
//                   id="lastName"
//                   placeholder="أحمد"
//                   required
//                   disabled={loading}
//                   {...form.register('lastName')}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email">البريد الإلكتروني</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="khalid@email.com"
//                 required
//                 disabled={loading}
//                 {...form.register('email')}
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="password">كلمة المرور</label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="8 أحرف على الأقل"
//                   required
//                   disabled={loading}
//                   minLength={8}
//                   {...form.register('password')}
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute left-2 top-1/2 -translate-y-1/2"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
//                   </span>
//                 </Button>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <Checkbox id="remember" />
//               <Label htmlFor="remember">تذكرني</Label>
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? 'جارٍ التسجيل...' : 'إنشاء حساب'}
//             </Button>
//           </form>

//           <p className="text-center text-sm text-muted-foreground">
//             هل لديك حساب بالفعل؟{' '}
//             <Link href="/sign-in" className="text-primary hover:underline">
//               تسجيل الدخول الآن
//             </Link>
//           </p>
//         </div>
//       </div>
//       <div className="hidden lg:block flex-1 relative overflow-hidden">
//         <div className="absolute inset-0 bg-muted/20 backdrop-blur-xl" />
//         <Image
//           src="/SNAH.png?height=1080&width=1080"
//           alt="صورة توضيحية"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-[2rem] m-8"
//           priority
//         />
//       </div>
//     </div>
//   );
// }




// افخم شي بس بعدل فيه
// بحاول اصلح مشكله التسجيل في نفس الايميل 
// 'use client';

// import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from "@/lib/firebase";
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import { Input } from '@/components/ui/input';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Eye, EyeOff } from 'lucide-react';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// export default function SignUp() {
//   const [error, setError] = useState<string | null>(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const form = useForm<FormData>({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//     },
//   });

//   const [createUserWithEmailAndPassword, user, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (data: FormData) => {
//     setError(null);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(data.email, data.password);
//       if (userCredential) {
//         sessionStorage.setItem('user', 'true');
//         router.push('/');
//       }
//     } catch (e: any) {
//       console.error(e);
//       setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//     }
//   };

//   useEffect(() => {
//     if (firebaseError) {
//       if (firebaseError.code === 'auth/email-already-in-use') {
//         setError('البريد الإلكتروني مستخدم بالفعل. يرجى تسجيل الدخول.');
//       } else {
//         setError('حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   }, [firebaseError]);

//   return (
//     <div className="min-h-screen w-full flex">
//       <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
//         <div className="w-full max-w-md space-y-8">
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/Logo.png" // ضع مسار الصورة هنا
//                 alt="Logo"
//                 width={32} // يمكنك تعديل الأبعاد حسب الحاجة
//                 height={32}
//                 className="rounded-full" // يجعل الصورة دائرية
//               />
//               <span className="text-xl font-semibold">SNAH</span>
//             </div>
//             <h1 className="text-2xl font-bold flex items-center">
//               إنشاء حساب <span className="ml-2">🔑</span>
//             </h1>
//             <p className="text-muted-foreground">أدخل التفاصيل لإنشاء حسابك</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full justify-start space-x-2"
//             disabled={loading}
//             onClick={signInWithGoogle}
//           >
//             <Image
//               src="/google.png"
//               alt="Google logo"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//             التسجيل باستخدام جوجل
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-background px-2 text-muted-foreground">
//                 أو التسجيل باستخدام البريد الإلكتروني
//               </span>
//             </div>
//           </div>

//           <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-6">
//             <div className="grid gap-4 grid-cols-2">
//               <div className="space-y-2">
//                 <label htmlFor="firstName">الاسم الأول</label>
//                 <Input
//                   id="firstName"
//                   placeholder="خالد"
//                   required
//                   disabled={loading}
//                   {...form.register('firstName')}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="lastName">اسم العائلة</label>
//                 <Input
//                   id="lastName"
//                   placeholder="أحمد"
//                   required
//                   disabled={loading}
//                   {...form.register('lastName')}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email">البريد الإلكتروني</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="khalid@email.com"
//                 required
//                 disabled={loading}
//                 {...form.register('email')}
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="password">كلمة المرور</label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="8 أحرف على الأقل"
//                   required
//                   disabled={loading}
//                   minLength={8}
//                   {...form.register('password')}
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute left-2 top-1/2 -translate-y-1/2"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
//                   </span>
//                 </Button>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <Checkbox id="remember" />
//               <Label htmlFor="remember">تذكرني</Label>
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? 'جارٍ التسجيل...' : 'إنشاء حساب'}
//             </Button>
//           </form>

//           <p className="text-center text-sm text-muted-foreground">
//             هل لديك حساب بالفعل؟{' '}
//             <Link href="/sign-in" className="text-primary hover:underline">
//               تسجيل الدخول الآن
//             </Link>
//           </p>
//         </div>
//       </div>
//       <div className="hidden lg:block flex-1 relative overflow-hidden">
//         <div className="absolute inset-0 bg-muted/20 backdrop-blur-xl" />
//         <Image
//           src="/SNAH.png?height=1080&width=1080"
//           alt="صورة توضيحية"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-[2rem] m-8"
//           priority
//         />
//       </div>
//     </div>
//   );
// }



'use client';

import { useRouter } from 'next/navigation';
import RegisterUser from '@/components/RegisterUser';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen w-full flex">
      <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-semibold">SNAH</span>
            </div>
            <h1 className="text-2xl font-bold flex items-center">
              إنشاء حساب <span className="ml-2">🔑</span>
            </h1>
            <p className="text-muted-foreground">أدخل التفاصيل لإنشاء حسابك</p>
          </div>

          <Button
            variant="outline"
            className="w-full justify-start space-x-2"
            onClick={() => console.log('Sign in with Google')}
          >
            <Image
              src="/google.png"
              alt="Google logo"
              width={20}
              height={20}
              className="mr-2"
            />
            التسجيل باستخدام جوجل
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                أو التسجيل باستخدام البريد الإلكتروني
              </span>
            </div>
          </div>

          <RegisterUser onSuccess={handleSuccess} />

          <p className="text-center text-sm text-muted-foreground">
            هل لديك حساب بالفعل؟{' '}
            <Link href="/sign-in" className="text-primary hover:underline">
              تسجيل الدخول الآن
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/20 backdrop-blur-xl" />
        <Image
          src="/SNAH.png?height=1080&width=1080"
          alt="صورة توضيحية"
          layout="fill"
          objectFit="cover"
          className="rounded-[2rem] m-8"
          priority
        />
      </div>
    </div>
  );
}