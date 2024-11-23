// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { Button } from "@/components/ui/button";
// import { Upload } from 'lucide-react';

// const UploadPdfButton = () => {
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === 'application/pdf') {
//       setUploading(true);
//       setError(null);

//       const formData = new FormData();
//       formData.append('document', file);

//       try {
//         // Upload the file to Telegram
//         const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;
//         await axios.post(telegramApiUrl, formData, {
//           params: {
//             chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
//             caption: `تم رفع ملف PDF جديد: ${file.name}`,
//           },
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         alert('تم رفع الملف بنجاح وإرساله إلى التلغرام');
//       } catch (e) {
//         console.error('Error uploading PDF:', e);
//         setError('حدث خطأ أثناء رفع الملف. يرجى المحاولة مرة أخرى.');
//       } finally {
//         setUploading(false);
//       }
//     } else {
//       setError('يرجى اختيار ملف PDF صالح.');
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <div className='pdfupload' data-html2canvas-ignore>
//       <Button
//         onClick={triggerFileInput}
//         disabled={uploading}
//         className="flex items-center"data-html2canvas-ignore
//       >
//         <Upload className="mr-2" data-html2canvas-ignore/>
//         {uploading ? 'جاري الرفع...' : 'رفع ملف PDF إلى التلغرام'}
//       </Button>
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileUpload}
//         accept=".pdf"
//         className="hidden"
//       />
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default UploadPdfButton;


// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { Button } from "@/components/ui/button";
// import { Upload } from 'lucide-react';
// import AlertModal from './AlertModal';

// const UploadPdfButton = () => {
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [showAlert, setShowAlert] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === 'application/pdf') {
//       setUploading(true);
//       setError(null);

//       const formData = new FormData();
//       formData.append('document', file);

//       try {
//         const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;
//         await axios.post(telegramApiUrl, formData, {
//           params: {
//             chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
//             caption: `تم رفع ملف PDF جديد: ${file.name}`,
//           },
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setShowAlert(true);
//       } catch (e) {
//         console.error('Error uploading PDF:', e);
//         setError('حدث خطأ أثناء رفع الملف. يرجى المحاولة مرة أخرى.');
//       } finally {
//         setUploading(false);
//       }
//     } else {
//       setError('يرجى اختيار ملف PDF صالح.');
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <div>
//       <Button
//         onClick={triggerFileInput}
//         disabled={uploading}
//         className="flex items-center"
//       >
//         <Upload className="mr-2" />
//         {uploading ? 'جاري الرفع...' : 'رفع ملف PDF إلى التلغرام'}
//       </Button>
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileUpload}
//         accept=".pdf"
//         className="hidden"
//       />
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       <AlertModal
//         isOpen={showAlert}
//         onClose={() => setShowAlert(false)}
//         message="تم رفع الملف بنجاح وإرساله إلى التلغرام"
//       />
//     </div>
//   );
// };

// export default UploadPdfButton;

// مزبوط بس بحدثه
// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { Button } from "@/components/ui/button";
// import { Upload } from 'lucide-react';
// import AlertModal from './AlertModal';

// const UploadPdfButton = () => {
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [showAlert, setShowAlert] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === 'application/pdf') {
//       setUploading(true);
//       setError(null);

//       const formData = new FormData();
//       formData.append('document', file);

//       try {
//         const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;
//         await axios.post(telegramApiUrl, formData, {
//           params: {
//             chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
//             caption: `تم رفع ملف PDF جديد: ${file.name}`,
//           },
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setShowAlert(true);
//       } catch (e) {
//         console.error('Error uploading PDF:', e);
//         setError('حدث خطأ أثناء رفع الملف. يرجى المحاولة مرة أخرى.');
//       } finally {
//         setUploading(false);
//       }
//     } else {
//       setError('يرجى اختيار ملف PDF صالح.');
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <div>
//       <Button
//         onClick={triggerFileInput}
//         disabled={uploading}
//         className="flex items-center justify-center
//         bg-gradient-to-r from-blue-500 to-blue-600
//         text-white font-semibold
//         px-6 py-3 rounded-full
//         shadow-lg
//         transition-all duration-300
//         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
//         hover:shadow-lg"
//       >
//         <Upload className="mr-2 h-5 w-5" />
//         {uploading ? 'جاري الرفع...' : 'رفع ملف PDF إلى التلغرام'}
//       </Button>
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileUpload}
//         accept=".pdf"
//         className="hidden"
//       />
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       <AlertModal
//         isOpen={showAlert}
//         onClose={() => setShowAlert(false)}
//         message="تم رفع الملف بنجاح وإرساله إلى التلغرام"
//       />
//     </div>
//   );
// };

// export default UploadPdfButton;


// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FileUp } from 'lucide-react';

// const UploadButton = ({ onClick, uploading }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.button
//       onClick={onClick}
//       disabled={uploading}
//       className={`
//         flex items-center justify-center
//         bg-gradient-to-r from-blue-500 to-blue-600
//         text-white font-semibold
//         px-6 py-3 rounded-full
//         shadow-lg
//         transition-all duration-300
//         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
//         ${uploading ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl'}
//       `}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <motion.div
//         className="mr-2"
//         animate={{ rotate: isHovered ? 360 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <FileUp className="h-5 w-5" />
//       </motion.div>
//       <span>{uploading ? 'جاري الرفع...' : 'رفع ملف PDF إلى التلغرام'}</span>
//       {!uploading && (
//         <motion.div
//           className="absolute inset-0 rounded-full"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//           style={{
//             background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
//           }}
//         />
//       )}
//     </motion.button>
//   );
// };

// export default UploadButton;




// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { Button } from "@/components/ui/button";
// import { Upload } from 'lucide-react';
// import AlertModal from './AlertModal';
// import { AnimatePresence } from 'framer-motion'
// const UploadPdfButton = () => {
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [showAlert, setShowAlert] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === 'application/pdf') {
//       setUploading(true);
//       setError(null);

//       const formData = new FormData();
//       formData.append('document', file);

//       try {
//         const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;
//         await axios.post(telegramApiUrl, formData, {
//           params: {
//             chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
//             caption: `تم رفع ملف PDF جديد: ${file.name}`,
//           },
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         setShowAlert(true);
//       } catch (e) {
//         console.error('Error uploading PDF:', e);
//         setError('حدث خطأ أثناء رفع الملف. يرجى المحاولة مرة أخرى.');
//       } finally {
//         setUploading(false);
//       }
//     } else {
//       setError('يرجى اختيار ملف PDF صالح.');
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <div>
//       <Button
//         onClick={triggerFileInput}
//         disabled={uploading}
//         className="flex items-center justify-center
//         bg-gradient-to-r from-blue-500 to-blue-600
//         text-white font-semibold
//         px-6 py-3 rounded-full
//         shadow-lg
//         transition-all duration-300
//         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
//         hover:shadow-lg
//         no-print"
//       >
//         <Upload className="mr-2 h-5 w-5" />
//         {uploading ? 'جاري الرفع...' : 'رفع ملف PDF إلى التلغرام'}
//       </Button>
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileUpload}
//         accept=".pdf"
//         className="hidden"
//       />
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       <AlertModal
//         isOpen={showAlert}
//         onClose={() => setShowAlert(false)}
//         message="تم رفع الملف بنجاح وإرساله إلى التلغرام"
//       />
//     </div>
//   );
// };

// export default UploadPdfButton;