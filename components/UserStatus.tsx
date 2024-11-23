// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';

// const UserStatus = () => {
//   const [user] = useAuthState(auth);

//   if (!user) {
//     return null;
//   }

//   return (
//     <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full">
//       {/* صورة المستخدم */}
//       {user.photoURL && (
//         <div className="relative">
//           <img
//             src={user.photoURL}
//             alt="User Profile"
//             className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-sm"
//           />
//           {/* مؤشر الحالة */}
//           <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
//         </div>
//       )}

//       {/* معلومات المستخدم */}
//       <div>
//         <p className="text-lg font-semibold text-gray-800">{user.displayName || user.email}</p>
//         <p className="text-sm text-gray-500">Active</p>
//       </div>

//       {/* زر تسجيل الخروج */}
//       <button
//         onClick={logout}
//         className="ml-auto bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200 text-sm font-medium"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default UserStatus;

// نظيف ومرتب
// 'use client'

// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth, logout } from '@/lib/firebase'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Skeleton } from "@/components/ui/skeleton"
// import { LogOut, User } from "lucide-react"
// import { motion } from "framer-motion"

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth)

//   if (loading) {
//     return <UserStatusSkeleton />
//   }

//   if (!user) {
//     return null
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Card className="w-full max-w-md">
//         <CardContent className="flex items-center space-x-4 p-6">
//           <Avatar className="h-16 w-16 border-2 border-primary">
//             <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//             <AvatarFallback>{user.displayName?.[0] || <User />}</AvatarFallback>
//           </Avatar>
//           <div className="flex-1 space-y-1">
//             <p className="text-lg font-semibold">{user.displayName || user.email}</p>
//             <p className="text-sm text-muted-foreground flex items-center">
//               <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
//               Active
//             </p>
//           </div>
//           <Button
//             variant="destructive"
//             size="sm"
//             className="ml-auto"
//             onClick={logout}
//           >
//             <LogOut className="h-4 w-4 mr-2" />
//             Log Out
//           </Button>
//         </CardContent>
//       </Card>
//     </motion.div>
//   )
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full max-w-md">
//       <CardContent className="flex items-center space-x-4 p-6">
//         <Skeleton className="h-16 w-16 rounded-full" />
//         <div className="flex-1 space-y-2">
//           <Skeleton className="h-5 w-[200px]" />
//           <Skeleton className="h-4 w-[100px]" />
//         </div>
//         <Skeleton className="h-10 w-[100px]" />
//       </CardContent>
//     </Card>
//   )
// }

// 'use client';

// import { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { LogOut, Settings, User, HelpCircle, MoreVertical, Mail, Calendar } from "lucide-react";
// import { motion } from "framer-motion";
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

// export default function UserStatus() {
//   const [user, loading, error] = useAuthState(auth);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (error) {
//     return <UserStatusError error={error} />;
//   }

//   if (!user) {
//     return null;
//   }

//   const handleLogout = async () => {
//     setIsLoggingOut(true);
//     try {
//       await logout();
//       toast.success("You have been securely logged out of your account.");
//     } catch (error) {
//       console.error('Logout error:', error);
//       toast.error("An error occurred while logging out. Please try again.");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="w-full max-w-md"
//     >
//       <Card>
//         <CardContent className="p-6">
//           <div className="flex items-center space-x-4">
//             <Avatar className="h-16 w-16 border-2 border-primary">
//               <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//               <AvatarFallback>{user.displayName?.[0] || <User className="h-6 w-6" />}</AvatarFallback>
//             </Avatar>
//             <div className="flex-1 space-y-1">
//               <p className="text-lg font-semibold">{user.displayName || user.email}</p>
//               <p className="text-sm text-muted-foreground flex items-center">
//                 <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
//                 Active
//               </p>
//               <p className="text-xs text-muted-foreground">{user.email}</p>
//             </div>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" aria-label="Open user menu">
//                   <MoreVertical className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56 z-50 bg-white shadow-lg rounded-lg border">
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Account settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Calendar className="mr-2 h-4 w-4" />
//                   <span>Calendar</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Mail className="mr-2 h-4 w-4" />
//                   <span>Inbox</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <HelpCircle className="mr-2 h-4 w-4" />
//                   <span>Help & Support</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut}>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>{isLoggingOut ? 'Logging out...' : 'Log out'}</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </CardContent>
//       </Card>
//       <ToastContainer />
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full max-w-md">
//       <CardContent className="flex items-center space-x-4 p-6">
//         <Skeleton className="h-16 w-16 rounded-full" />
//         <div className="flex-1 space-y-2">
//           <Skeleton className="h-5 w-[200px]" />
//           <Skeleton className="h-4 w-[100px]" />
//           <Skeleton className="h-3 w-[150px]" />
//         </div>
//         <Skeleton className="h-8 w-8 rounded-full" />
//       </CardContent>
//     </Card>
//   );
// }

// function UserStatusError({ error }: { error: Error }) {
//   return (
//     <Card className="w-full max-w-md bg-destructive/15">
//       <CardContent className="p-6">
//         <p className="text-sm font-medium text-destructive">Error loading user status: {error.message}</p>
//       </CardContent>
//     </Card>
//   );
// }

// 'use client'

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       className="flex justify-right items-center"
//     >
//       <Card className="w-full max-w-md shadow-lg rounded-3xl bg-white overflow-hidden">
//         <CardContent className="p-8">
//           <div className="flex items-center space-x-6">
//             <Avatar className="h-20 w-20 border-2 border-gray-300 shadow-sm">
//               <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//               <AvatarFallback className="text-2xl text-gray-600">
//                 {user.displayName?.[0] || <User className="h-8 w-8" />}
//               </AvatarFallback>
//             </Avatar>
//             <div className="flex-1">
//               <p className="text-xl font-medium text-gray-900">{user.displayName || user.email}</p>
//               <p className="text-sm text-gray-500 flex items-center">
//                 <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
//                 Active
//               </p>
//             </div>
//           </div>
//           <Button
//             variant="ghost"
//             size="lg"
//             className="mt-8 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300 rounded-full py-2 font-medium shadow-sm flex items-center justify-center space-x-2"
//             onClick={logout}
//           >
//             <LogOut className="h-5 w-5 text-gray-600" />
//             <span>Log Out</span>
//           </Button>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       className="flex justify-center items-center min-h-screen bg-gray-100"
//     >
//       <Card className="w-full max-w-md shadow-lg rounded-3xl bg-white overflow-hidden">
//         <CardContent className="p-8 flex items-center space-x-6">
//           <Skeleton className="h-20 w-20 rounded-full" />
//           <div className="flex-1 space-y-4">
//             <Skeleton className="h-6 w-3/4 rounded" />
//             <Skeleton className="h-4 w-1/2 rounded" />
//           </div>
//           <Skeleton className="h-10 w-10 rounded-full" />
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// الفخم جدا
// 'use client'

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//     >
//       <Card className="w-full max-w-md shadow-lg rounded-3xl bg-white overflow-hidden">
//         <CardContent className="p-6">
//           <div className="flex items-center space-x-6">
//             <Avatar className="h-16 w-16 border-2 border-gray-300 shadow-sm">
//               <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//               <AvatarFallback className="text-2xl text-gray-600">
//                 {user.displayName?.[0] || <User className="h-8 w-8" />}
//               </AvatarFallback>
//             </Avatar>
//             <div className="flex-1">
//               <p className="text-xl font-medium text-gray-900">{user.displayName || user.email}</p>
//               <p className="text-sm text-gray-500 flex items-center">
//                 <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
//                 Active
//               </p>
//             </div>
//           </div>
//           <Button
//             variant="ghost"
//             size="lg"
//             className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300 rounded-full py-2 font-medium shadow-sm flex items-center justify-center space-x-2"
//             onClick={logout}
//           >
//             <LogOut className="h-5 w-5 text-gray-600" />
//             <span>Log Out</span>
//           </Button>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//     >
//       <Card className="w-full max-w-md shadow-lg rounded-3xl bg-white overflow-hidden">
//         <CardContent className="p-6 flex items-center space-x-6">
//           <Skeleton className="h-16 w-16 rounded-full" />
//           <div className="flex-1 space-y-4">
//             <Skeleton className="h-6 w-3/4 rounded" />
//             <Skeleton className="h-4 w-1/2 rounded" />
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// حلو بس كبير جدا
// 'use client'

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from 'react';

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   const formattedDate = currentTime.toLocaleDateString(undefined, options);
//   const formattedTime = currentTime.toLocaleTimeString();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       <Card className="w-full bg-white rounded-xl shadow-md border border-gray-200">
//         <CardContent className="p-6 space-y-4">
//           {/* عرض اليوم والتاريخ والساعة */}
//           <div className="text-center mb-4">
//             <p className="text-sm font-semibold text-gray-500">{formattedDate}</p>
//             <p className="text-lg font-bold text-gray-800">{formattedTime}</p>
//           </div>
//           <div className="flex items-center space-x-6">
//             <Avatar className="h-16 w-16 border border-gray-300">
//               <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//               <AvatarFallback className="text-2xl text-gray-600">
//                 {user.displayName?.[0] || <User className="h-8 w-8" />}
//               </AvatarFallback>
//             </Avatar>
//             <div className="flex-1">
//               <p className="text-lg font-medium text-gray-900">{user.displayName || user.email}</p>
//               <p className="text-sm text-gray-500 flex items-center">
//                 <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
//                 Active
//               </p>
//             </div>
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-red-600 hover:text-red-700 transition-colors"
//               onClick={logout}
//             >
//               <LogOut className="h-5 w-5 mr-1" />
//               Log Out
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full bg-white rounded-xl shadow-md border border-gray-200">
//       <CardContent className="p-6 space-y-4">
//         <Skeleton className="h-5 w-1/2 rounded mb-4 mx-auto" />
//         <div className="flex items-center space-x-6">
//           <Skeleton className="h-16 w-16 rounded-full" />
//           <div className="flex-1 space-y-2">
//             <Skeleton className="h-5 w-3/4 rounded" />
//             <Skeleton className="h-4 w-1/2 rounded" />
//           </div>
//           <Skeleton className="h-10 w-10 rounded-full" />
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// "use client";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, logout } from "@/lib/firebase";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   const options = { weekday: "short", month: "short", day: "numeric" };
//   const formattedDate = currentTime.toLocaleDateString(undefined, options);
//   const formattedTime = currentTime.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       <Card className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
//         <CardContent className="flex items-center p-3 space-x-3">
//           <Avatar className="h-10 w-10 border border-gray-300">
//             <AvatarImage
//               src={user.photoURL || undefined}
//               alt={user.displayName || "User"}
//             />
//             <AvatarFallback className="text-sm text-gray-600">
//               {user.displayName?.[0] || <User className="h-4 w-4" />}
//             </AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <p className="text-sm font-medium text-gray-900">
//               {user.displayName || user.email}
//             </p>
//             <p className="text-xs text-gray-500">
//               {formattedDate} - {formattedTime}
//             </p>
//           </div>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-red-500 hover:text-red-600 transition-colors"
//             onClick={logout}
//           >
//             <LogOut className="h-4 w-4" />
//           </Button>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
//       <CardContent className="flex items-center p-3 space-x-3">
//         <Skeleton className="h-10 w-10 rounded-full" />
//         <div className="flex-1 space-y-1">
//           <Skeleton className="h-4 w-3/4 rounded" />
//           <Skeleton className="h-3 w-1/2 rounded" />
//         </div>
//         <Skeleton className="h-4 w-4 rounded-full" />
//       </CardContent>
//     </Card>
//   );
// }



// 'use client';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [showModal, setShowModal] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/sign-up'); // توجيه المستخدم إلى صفحة التسجيل إذا لم يكن مسجل الدخول
//     }
//   }, [user, loading, router]);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   const handleLogout = () => {
//     setShowModal(true);
//   };

//   const confirmLogout = () => {
//     logout();
//     setShowModal(false);
//     router.push('/sign-in'); // توجيه المستخدم إلى صفحة تسجيل الدخول بعد تسجيل الخروج
//   };

//   const cancelLogout = () => {
//     setShowModal(false);
//   };

//   const options = { weekday: 'short', month: 'short', day: 'numeric' };
//   const formattedDate = currentTime.toLocaleDateString(undefined, options);
//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       <Card className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
//         <CardContent className="flex items-center p-3 space-x-3">
//           <Avatar className="h-10 w-10 border border-gray-300">
//             <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//             <AvatarFallback className="text-sm text-gray-600">
//               {user.displayName?.[0] || <User className="h-4 w-4" />}
//             </AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <p className="text-sm font-medium text-gray-900">{user.displayName || user.email}</p>
//             <p className="text-xs text-gray-500">{formattedDate} - {formattedTime}</p>
//           </div>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-red-500 hover:text-red-600 transition-colors"
//             onClick={handleLogout}
//           >
//             <LogOut className="h-4 w-4" />
//           </Button>
//         </CardContent>
//       </Card>

//       {showModal && (
//         <div className="flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="bg-white w-full max-w-md mx-4 rounded-lg shadow-2xl text-center"
//           >
//             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t-lg">
//               <h2 className="text-lg font-semibold text-gray-800">تأكيد تسجيل الخروج</h2>
//               <button onClick={cancelLogout} className="text-gray-400 hover:text-gray-600 transition-colors">
//                 <span className="sr-only">إغلاق</span>
//                 ✕
//               </button>
//             </div>

//             <div className="p-6">
//               <p className="text-gray-700 mb-8">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
//               <div className="flex justify-around space-x-8">
//                 <button 
//                   onClick={confirmLogout} 
//                   className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transform hover:scale-105"
//                 >
//                   نعم
//                 </button>
//                 <button 
//                   onClick={cancelLogout} 
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transform hover:scale-105"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
//       <CardContent className="flex items-center p-3 space-x-3">
//         <Skeleton className="h-10 w-10 rounded-full" />
//         <div className="flex-1 space-y-1">
//           <Skeleton className="h-4 w-3/4 rounded" />
//           <Skeleton className="h-3 w-1/2 rounded" />
//         </div>
//         <Skeleton className="h-4 w-4 rounded-full" />
//       </CardContent>
//     </Card>
//   );
// }




// 'use client';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [showModal, setShowModal] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/sign-up'); // توجيه المستخدم إلى صفحة التسجيل إذا لم يكن مسجل الدخول
//     }
//   }, [user, loading, router]);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   const handleLogout = () => {
//     setShowModal(true);
//   };

//   const confirmLogout = () => {
//     logout();
//     setShowModal(false);
//     router.push('/sign-in'); // توجيه المستخدم إلى صفحة تسجيل الدخول بعد تسجيل الخروج
//   };

//   const cancelLogout = () => {
//     setShowModal(false);
//   };

//   const options = { weekday: 'short', month: 'short', day: 'numeric' };
//   const formattedDate = currentTime.toLocaleDateString(undefined, options);
//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       <Card className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
//         <CardContent className="flex items-center p-3 space-x-3">
//           <Avatar className="h-10 w-10 border border-gray-300">
//             <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//             <AvatarFallback className="text-sm text-gray-600">
//               {user.displayName?.[0] || <User className="h-4 w-4" />}
//             </AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <p className="text-sm font-medium text-gray-900">{user.displayName || user.email}</p>
//             <p className="text-xs text-gray-500">{formattedDate} - {formattedTime}</p>
//           </div>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-red-500 hover:text-red-600 transition-colors"
//             onClick={handleLogout}
//           >
//             <LogOut className="h-4 w-4" />
//           </Button>
//         </CardContent>
//       </Card>

//       {showModal && (
//         <div className="flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="bg-white w-full max-w-md mx-4 rounded-lg shadow-2xl text-center"
//           >
//             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t-lg">
//               <h2 className="text-lg font-semibold text-gray-800">تأكيد تسجيل الخروج</h2>
//               <button onClick={cancelLogout} className="text-gray-400 hover:text-gray-600 transition-colors">
//                 <span className="sr-only">إغلاق</span>
//                 ✕
//               </button>
//             </div>

//             <div className="p-6">
//               <p className="text-gray-700 mb-8">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
//               <div className="flex justify-around space-x-8">
//                 <button 
//                   onClick={confirmLogout} 
//                   className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transform hover:scale-105"
//                 >
//                   نعم
//                 </button>
//                 <button 
//                   onClick={cancelLogout} 
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transform hover:scale-105"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
//       <CardContent className="flex items-center p-3 space-x-3">
//         <Skeleton className="h-10 w-10 rounded-full" />
//         <div className="flex-1 space-y-1">
//           <Skeleton className="h-4 w-3/4 rounded" />
//           <Skeleton className="h-3 w-1/2 rounded" />
//         </div>
//         <Skeleton className="h-4 w-4 rounded-full" />
//       </CardContent>
//     </Card>
//   );
// }



// الكود يعمل بشكل مثالي بس احسنه
// 'use client';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [showModal, setShowModal] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/sign-up');
//     }
//   }, [user, loading, router]);

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   const handleLogout = () => {
//     setShowModal(true);
//   };

//   const confirmLogout = () => {
//     logout();
//     setShowModal(false);
//     router.push('/sign-in');
//   };

//   const cancelLogout = () => {
//     setShowModal(false);
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark', !isDarkMode);
//   };

//   const options = { weekday: 'short', month: 'short', day: 'numeric' };
//   const formattedDate = currentTime.toLocaleDateString(undefined, options);
//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       <Card className="w-full rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//         <CardContent className="flex items-center p-3 space-x-3">
//           <Avatar className="h-10 w-10 border border-gray-300 dark:border-gray-600">
//             <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//             <AvatarFallback className="text-sm text-gray-600 dark:text-gray-300">
//               {user.displayName?.[0] || <User className="h-4 w-4" />}
//             </AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.displayName || user.email}</p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">{formattedDate} - {formattedTime}</p>
//           </div>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 transition-colors"
//             onClick={handleLogout}
//           >
//             <LogOut className="h-4 w-4" />
//           </Button>
//         </CardContent>
//       </Card>

      

//       {showModal && (
//         <div className="flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="w-full max-w-md mx-4 rounded-lg shadow-2xl text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
//           >
//             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
//               <h2 className="text-lg font-semibold">تأكيد تسجيل الخروج</h2>
//               <button onClick={cancelLogout} className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 transition-colors">
//                 <span className="sr-only">إغلاق</span>
//                 ✕
//               </button>
//             </div>

//             <div className="p-6">
//               <p className="text-gray-700 dark:text-gray-300 mb-8">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
//               <div className="flex justify-around space-x-8">
//                 <button 
//                   onClick={confirmLogout} 
//                   className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transform hover:scale-105"
//                 >
//                   نعم
//                 </button>
//                 <button 
//                   onClick={cancelLogout} 
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-200 px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transform hover:scale-105"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//       <CardContent className="flex items-center p-3 space-x-3">
//         <Skeleton className="h-10 w-10 rounded-full" />
//         <div className="flex-1 space-y-1">
//           <Skeleton className="h-4 w-3/4 rounded" />
//           <Skeleton className="h-3 w-1/2 rounded" />
//         </div>
//         <Skeleton className="h-4 w-4 rounded-full" />
//       </CardContent>
//     </Card>
//   );
// }

// يعمل بكل امتياز بس ابي احل مشكله تسجيل الخروج ويوجهني على التسجيل
// import { useCallback, useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, logout  } from '@/lib/firebase';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { LogOut, User } from "lucide-react";
// import { motion } from "framer-motion";

// export default function UserStatus() {
//   const [user, loading] = useAuthState(auth);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [showModal, setShowModal] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     return localStorage.getItem('darkMode') === 'true';
//   });
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/sign-up');
//     }
//   }, [user, loading, router]);




//   const handleLogout = useCallback(() => {
//     setShowModal(true);
    
//   }, []);

  

//   const confirmLogout = useCallback(() => {
//     logout();
//     setShowModal(false);
//     router.push('/sign-in');
//   }, [router]);

//   const cancelLogout = useCallback(() => {
//     setShowModal(false);
//   }, []);




//   const toggleDarkMode = useCallback(() => {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       localStorage.setItem('darkMode', newMode);
//       document.documentElement.classList.toggle('dark', newMode);
//       return newMode;
//     });
//   }, []);

//   const options = { weekday: 'short', month: 'short', day: 'numeric' };
//   const formattedDate = currentTime.toLocaleDateString(undefined, options);
//   const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//   if (loading) {
//     return <UserStatusSkeleton />;
//   }

//   if (!user) {
//     return null;
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       <Card className="w-full rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//         <CardContent className="flex items-center p-3 space-x-3">
//           <Avatar className="h-10 w-10 border border-gray-300 dark:border-gray-600">
//             <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
//             <AvatarFallback className="text-sm text-gray-600 dark:text-gray-300">
//               {user.displayName?.[0] || <User className="h-4 w-4" />}
//             </AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.displayName || user.email}</p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">{formattedDate} - {formattedTime}</p>
//           </div>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 transition-colors"
//             onClick={handleLogout}
//           >
//             <LogOut className="h-4 w-4" />
//           </Button>
//         </CardContent>
//       </Card>

//       {showModal && (
//         <div className="flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="w-full max-w-md mx-4 rounded-lg shadow-2xl text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
//           >
//             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
//               <h2 className="text-lg font-semibold">تأكيد تسجيل الخروج</h2>
//               <button onClick={cancelLogout} className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 transition-colors">
//                 <span className="sr-only">إغلاق</span>
//                 ✕
//               </button>
//             </div>

//             <div className="p-6">
//               <p className="text-gray-700 dark:text-gray-300 mb-8">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
//               <div className="flex justify-around space-x-8">
//                 <button 
//                   onClick={confirmLogout} 
//                   className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transform hover:scale-105"
//                 >
//                   نعم
//                 </button>
//                 <button 
//                   onClick={cancelLogout} 
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-200 px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transform hover:scale-105"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </motion.div>
//   );
// }

// function UserStatusSkeleton() {
//   return (
//     <Card className="w-full rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//       <CardContent className="flex items-center p-3 space-x-3">
//         <Skeleton className="h-10 w-10 rounded-full" />
//         <div className="flex-1 space-y-1">
//           <Skeleton className="h-4 w-3/4 rounded" />
//           <Skeleton className="h-3 w-1/2 rounded" />
//         </div>
//         <Skeleton className="h-4 w-4 rounded-full" />
//       </CardContent>
//     </Card>
//   );
// }


// حلينا المشكله بس جالس اجربها
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '@/lib/firebase';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LogOut, User } from "lucide-react";
import { motion } from "framer-motion";

export default function UserStatus() {
  const [user, loading] = useAuthState(auth);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-up');
    }
  }, [user, loading, router]);

  const handleLogout = useCallback(() => {
    setShowModal(true);
  }, []);

  const confirmLogout = useCallback(async () => {
    try {
      await logout();
      sessionStorage.removeItem('user'); // تأكد من إزالة الجلسة
      router.push('/sign-in'); // التوجيه إلى صفحة تسجيل الدخول بعد تسجيل الخروج
    } catch (error) {
      console.error("خطأ في تسجيل الخروج:", error);
    }
    setShowModal(false);
  }, [router]);

  const cancelLogout = useCallback(() => {
    setShowModal(false);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  }, []);

  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString(undefined, options);
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (loading) {
    return <UserStatusSkeleton />;
  }

  if (!user) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="w-full rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex items-center p-3 space-x-3">
          <Avatar className="h-10 w-10 border border-gray-300 dark:border-gray-600">
            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
            <AvatarFallback className="text-sm text-gray-600 dark:text-gray-300">
              {user.displayName?.[0] || <User className="h-4 w-4" />}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.displayName || user.email}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{formattedDate} - {formattedTime}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 transition-colors"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {showModal && (
        <div className="flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-md mx-4 rounded-lg shadow-2xl text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
              <h2 className="text-lg font-semibold">تأكيد تسجيل الخروج</h2>
              <button onClick={cancelLogout} className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 transition-colors">
                <span className="sr-only">إغلاق</span>
                ✕
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-8">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
              <div className="flex justify-around space-x-8">
                <button 
                  onClick={confirmLogout} 
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transform hover:scale-105"
                >
                  نعم
                </button>
                <button 
                  onClick={cancelLogout} 
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-200 px-8 py-3 rounded-full transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transform hover:scale-105"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

function UserStatusSkeleton() {
  return (
    <Card className="w-full rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="flex items-center p-3 space-x-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-1">
          <Skeleton className="h-4 w-3/4 rounded" />
          <Skeleton className="h-3 w-1/2 rounded" />
        </div>
        <Skeleton className="h-4 w-4 rounded-full" />
      </CardContent>
    </Card>
  );
}