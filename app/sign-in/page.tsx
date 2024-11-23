// 'use client'
// import { useState } from 'react';
// import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
// import {auth} from '@/lib/firebase'
// import { useRouter } from 'next/navigation';
// import { signInWithGoogle, logout } from "@/lib/firebase";

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter()

//   const handleSignIn = async () => {
//     try {
//         const res = await signInWithEmailAndPassword(email, password);
//         console.log({res});
//         sessionStorage.setItem('user', true)
//         setEmail('');
//         setPassword('');
//         router.push('/')
//     }catch(e){
//         console.error(e)
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
//         <h1 className="text-white text-2xl mb-5">Sign In</h1>
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
//           onClick={handleSignIn}
//           className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
//         >
//           Sign In
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// تمام وبعدله
// 'use client';
// import { useState } from 'react';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from '@/lib/firebase';
// import { useRouter } from 'next/navigation';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter();

//   const handleSignIn = async () => {
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       console.log({ res });
//       sessionStorage.setItem('user', true);
//       setEmail('');
//       setPassword('');
//       router.push('/');
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
//         <h1 className="text-white text-2xl mb-5">Sign In</h1>

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
//           onClick={handleSignIn}
//           className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500 mb-4"
//         >
//           Sign In
//         </button>

//         {/* زر تسجيل الدخول عبر Google */}
//         <button
//           onClick={signInWithGoogle}
//           className="w-full p-3 bg-red-600 rounded text-white hover:bg-red-500"
//         >
//           Sign In with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from '@/lib/firebase';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Icons } from '@/components/ui/icons';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signInWithEmailAndPassword, isLoading] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       sessionStorage.setItem('user', true);
//       setEmail('');
//       setPassword('');
//       router.push('/');
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-sm space-y-8">
//         <div className="flex justify-center">
//           <Image src="/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
//         </div>

//         <div className="bg-zinc-900 rounded-lg px-6 py-8 shadow-xl space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold tracking-tight text-white">Sign in to Your Account</h1>
//             <p className="text-sm text-zinc-400">Please sign in to your account</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
//             onClick={signInWithGoogle}
//           >
//             <Icons.google className="mr-2 h-4 w-4" />
//             Sign in with Google
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-zinc-700" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-zinc-900 px-2 text-zinc-400">or</span>
//             </div>
//           </div>

//           <form onSubmit={handleSignIn} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-zinc-200">Email address</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-zinc-200">Password</label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 'Sign in'
//               )}
//             </Button>
//           </form>
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-zinc-400">
//             Don&apos;t have an account?{' '}
//             <Link href="/signup" className="font-semibold text-indigo-400 hover:text-indigo-300">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 flex justify-center space-x-4 text-sm text-zinc-400">
//         <Link href="/support" className="hover:text-zinc-300">Support</Link>
//         <Link href="/privacy" className="hover:text-zinc-300">Privacy</Link>
//         <Link href="/terms" className="hover:text-zinc-300">Terms</Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from '@/lib/firebase';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Icons } from '@/components/ui/icons';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(''); // حالة جديدة لتخزين الأخطاء
//   const [signInWithEmailAndPassword, isLoading] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setError(''); // إعادة تعيين حالة الخطأ عند المحاولة الجديدة
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       if (res) {
//         sessionStorage.setItem('user', true);
//         setEmail('');
//         setPassword('');
//         router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
//       }
//     } catch (e) {
//       setError('كلمة المرور خطأ، الرجاء المحاولة مرة أخرى'); // تعيين رسالة الخطأ
//       console.error("Sign-in error:", e);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       sessionStorage.setItem('user', true);
//       router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول عبر Google
//     } catch (error) {
//       setError('حدث خطأ أثناء تسجيل الدخول عبر Google');
//       console.error("Google Sign-In error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-sm space-y-8">
//         <div className="flex justify-center">
//           <Image src="/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
//         </div>

//         <div className="bg-zinc-900 rounded-lg px-6 py-8 shadow-xl space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold tracking-tight text-white">Sign in to Your Account</h1>
//             <p className="text-sm text-zinc-400">Please sign in to your account</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
//             onClick={handleGoogleSignIn}
//           >
//             <Icons.google className="mr-2 h-4 w-4" />
//             Sign in with Google
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-zinc-700" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-zinc-900 px-2 text-zinc-400">or</span>
//             </div>
//           </div>

//           <form onSubmit={handleSignIn} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-zinc-200">Email address</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-zinc-200">Password</label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             {error && (
//               <p className="text-sm text-red-500">{error}</p> // عرض رسالة الخطأ
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 'Sign in'
//               )}
//             </Button>
//           </form>
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-zinc-400">
//             Don&apos;t have an account?{' '}
//             <Link href="/sign-up" className="font-semibold text-indigo-400 hover:text-indigo-300">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 flex justify-center space-x-4 text-sm text-zinc-400">
//         <Link href="/support" className="hover:text-zinc-300">Support</Link>
//         <Link href="/privacy" className="hover:text-zinc-300">Privacy</Link>
//         <Link href="/terms" className="hover:text-zinc-300">Terms</Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


// افضل شي بس بحسنة
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from '@/lib/firebase';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Icons } from '@/components/ui/icons';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(''); // حالة جديدة لتخزين الأخطاء
//   const [signInWithEmailAndPassword, isLoading] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setError(''); // إعادة تعيين حالة الخطأ عند المحاولة الجديدة
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       if (res) {
//         sessionStorage.setItem('user', true);
//         setEmail('');
//         setPassword('');
//         router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
//       }
//     } catch (e) {
//       setError('كلمة المرور خطأ، الرجاء المحاولة مرة أخرى'); // تعيين رسالة الخطأ
//       console.error("Sign-in error:", e);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       sessionStorage.setItem('user', true);
//       router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول عبر Google
//     } catch (error) {
//       setError('حدث خطأ أثناء تسجيل الدخول عبر Google');
//       console.error("Google Sign-In error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-sm space-y-8">
//         <div className="flex justify-center">
//           <Image src="/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
//         </div>

//         <div className="bg-zinc-900 rounded-lg px-6 py-8 shadow-xl space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold tracking-tight text-white">تسجيل الدخول إلى حسابك</h1>
//             <p className="text-sm text-zinc-400">يرجى تسجيل الدخول إلى حسابك</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
//             onClick={handleGoogleSignIn}
//           >
//             <Icons.google className="mr-2 h-4 w-4" />
//             تسجيل الدخول باستخدام Google
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-zinc-700" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-zinc-900 px-2 text-zinc-400">أو</span>
//             </div>
//           </div>

//           <form onSubmit={handleSignIn} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-zinc-200">عنوان البريد الإلكتروني</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-zinc-200">كلمة المرور</label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="أدخل كلمة المرور الخاصة بك"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             {error && (
//               <p className="text-sm text-red-500">{error}</p> // عرض رسالة الخطأ
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                   يرجى الانتظار
//                 </>
//               ) : (
//                 'تسجيل الدخول'
//               )}
//             </Button>
//           </form>
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-zinc-400">
//             ليس لديك حساب؟{' '}
//             <Link href="/sign-up" className="font-semibold text-indigo-400 hover:text-indigo-300">
//               سجل الآن
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 flex justify-center space-x-4 text-sm text-zinc-400">
//         <Link href="/support" className="hover:text-zinc-300">الدعم</Link>
//         <Link href="/privacy" className="hover:text-zinc-300">الخصوصية</Link>
//         <Link href="/terms" className="hover:text-zinc-300">الشروط</Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



// بحاول احسنه اكثر


// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from '@/lib/firebase';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Icons } from '@/components/ui/icons';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(''); // حالة جديدة لتخزين الأخطاء
//   const [signInWithEmailAndPassword, isLoading] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setError(''); // إعادة تعيين حالة الخطأ عند المحاولة الجديدة
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       if (res) {
//         sessionStorage.setItem('user', 'true');
//         setEmail('');
//         setPassword('');
//         router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
//       }
//     } catch (e) {
//       setError('كلمة المرور خطأ، الرجاء المحاولة مرة أخرى'); // تعيين رسالة الخطأ
//       console.error("Sign-in error:", e);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       sessionStorage.setItem('user', true);
//       router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول عبر Google
//     } catch (error) {
//       setError('حدث خطأ أثناء تسجيل الدخول عبر Google');
//       console.error("Google Sign-In error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-sm space-y-8">
//         <div className="flex justify-center">
//           <Image src="/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
//         </div>

//         <div className="bg-zinc-900 rounded-lg px-6 py-8 shadow-xl space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold tracking-tight text-white">تسجيل الدخول إلى حسابك</h1>
//             <p className="text-sm text-zinc-400">يرجى تسجيل الدخول إلى حسابك</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
//             onClick={handleGoogleSignIn}
//           >
//             <Icons.google className="mr-2 h-4 w-4" />
//             تسجيل الدخول باستخدام Google
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-zinc-700" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-zinc-900 px-2 text-zinc-400">أو</span>
//             </div>
//           </div>

//           <form onSubmit={handleSignIn} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-zinc-200">عنوان البريد الإلكتروني</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-zinc-200">كلمة المرور</label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="أدخل كلمة المرور الخاصة بك"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             {error && (
//               <p className="text-sm text-red-500">{error}</p> // عرض رسالة الخطأ
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                   يرجى الانتظار
//                 </>
//               ) : (
//                 'تسجيل الدخول'
//               )}
//             </Button>
//           </form>
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-zinc-400">
//             ليس لديك حساب؟{' '}
//             <Link href="/sign-up" className="font-semibold text-indigo-400 hover:text-indigo-300">
//               سجل الآن
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 flex justify-center space-x-4 text-sm text-zinc-400">
//         <Link href="/support" className="hover:text-zinc-300">الدعم</Link>
//         <Link href="/privacy" className="hover:text-zinc-300">الخصوصية</Link>
//         <Link href="/terms" className="hover:text-zinc-300">الشروط</Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;




// بحاول احل مشكله طلب كلمه المرور واسويها 

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, signInWithGoogle } from '@/lib/firebase';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Icons } from '@/components/ui/icons';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(''); // حالة جديدة لتخزين الأخطاء
//   const [signInWithEmailAndPassword, isLoading] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setError(''); // إعادة تعيين حالة الخطأ عند المحاولة الجديدة
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       if (res) {
//         sessionStorage.setItem('user', 'true');
//         setEmail('');
//         setPassword('');
//         router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
//       }
//     } catch (e) {
//       setError('كلمة المرور خطأ، الرجاء المحاولة مرة أخرى'); // تعيين رسالة الخطأ
//       console.error("Sign-in error:", e);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       sessionStorage.setItem('user', true);
//       router.push('/'); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول عبر Google
//     } catch (error) {
//       setError('حدث خطأ أثناء تسجيل الدخول عبر Google');
//       console.error("Google Sign-In error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-sm space-y-8">
//         <div className="flex justify-center">
//           <Image src="/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
//         </div>

//         <div className="bg-zinc-900 rounded-lg px-6 py-8 shadow-xl space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-semibold tracking-tight text-white">تسجيل الدخول إلى حسابك</h1>
//             <p className="text-sm text-zinc-400">يرجى تسجيل الدخول إلى حسابك</p>
//           </div>

//           <Button
//             variant="outline"
//             className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
//             onClick={handleGoogleSignIn}
//           >
//             <Icons.google className="mr-2 h-4 w-4" />
//             تسجيل الدخول باستخدام Google
//           </Button>

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-zinc-700" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-zinc-900 px-2 text-zinc-400">أو</span>
//             </div>
//           </div>

//           <form onSubmit={handleSignIn} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-zinc-200">عنوان البريد الإلكتروني</label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="block text-sm font-medium text-zinc-200">كلمة المرور</label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="أدخل كلمة المرور الخاصة بك"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
//               />
//             </div>
//             {error && (
//               <p className="text-sm text-red-500">{error}</p> // عرض رسالة الخطأ
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                   يرجى الانتظار
//                 </>
//               ) : (
//                 'تسجيل الدخول'
//               )}
//             </Button>
//           </form>
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-zinc-400">
//             ليس لديك حساب؟{' '}
//             <Link href="/sign-up" className="font-semibold text-indigo-400 hover:text-indigo-300">
//               سجل الآن
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 flex justify-center space-x-4 text-sm text-zinc-400">
//         <Link href="/support" className="hover:text-zinc-300">الدعم</Link>
//         <Link href="/privacy" className="hover:text-zinc-300">الخصوصية</Link>
//         <Link href="/terms" className="hover:text-zinc-300">الشروط</Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



// احاول اعادة كلمه المرور ووضعها في الكود 


'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';
import PasswordResetRequest from '@/components/PasswordResetRequest'; // استيراد المكون الجديد

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signInWithEmailAndPassword, isLoading] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', 'true');
        setEmail('');
        setPassword('');
        router.push('/');
      }
    } catch (e) {
      setError('كلمة المرور خطأ، الرجاء المحاولة مرة أخرى');
      console.error("Sign-in error:", e);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      sessionStorage.setItem('user', true);
      router.push('/');
    } catch (error) {
      setError('حدث خطأ أثناء تسجيل الدخول عبر Google');
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="flex justify-center">
          <Image src="/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
        </div>

        <div className="bg-zinc-900 rounded-lg px-6 py-8 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-white">تسجيل الدخول إلى حسابك</h1>
            <p className="text-sm text-zinc-400">يرجى تسجيل الدخول إلى حسابك</p>
          </div>

          <Button
            variant="outline"
            className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
            onClick={handleGoogleSignIn}
          >
            <Icons.google className="mr-2 h-4 w-4" />
            تسجيل الدخول باستخدام Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900 px-2 text-zinc-400">أو</span>
            </div>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-200">عنوان البريد الإلكتروني</label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-200">كلمة المرور</label>
              <Input
                id="password"
                type="password"
                placeholder="أدخل كلمة المرور الخاصة بك"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
              />
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  يرجى الانتظار
                </>
              ) : (
                'تسجيل الدخول'
              )}
            </Button>
          </form>

          <div className="text-center mt-4">
            <Link href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
              نسيت كلمة المرور؟
            </Link>
            <PasswordResetRequest /> {/* إضافة مكون طلب إعادة تعيين كلمة المرور هنا */}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-zinc-400">
            ليس لديك حساب؟{' '}
            <Link href="/sign-up" className="font-semibold text-indigo-400 hover:text-indigo-300">
              سجل الآن
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4 text-sm text-zinc-400">
        <Link href="/support" className="hover:text-zinc-300">الدعم</Link>
        <Link href="/privacy" className="hover:text-zinc-300">الخصوصية</Link>
        <Link href="/terms" className="hover:text-zinc-300">الشروط</Link>
      </div>
    </div>
  );
};

export default SignIn;