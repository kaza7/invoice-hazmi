// import React from 'react';
// import { motion } from 'framer-motion';
// import { FileUp } from 'lucide-react';

// interface InvoiceUploadButtonProps {
//   onClick: () => void;
//   className?: string;
// }

// const InvoiceUploadButton: React.FC<InvoiceUploadButtonProps> = ({ onClick, className }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       className={`
//         flex items-center justify-center
//         bg-gradient-to-r from-blue-500 to-blue-600
//         text-white font-semibold
//         px-6 py-3 rounded-full
//         shadow-lg
//         transition-all duration-300
//         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
//         hover:shadow-lg
//         ${className || '' }
//       `}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       data-html2canvas-ignore
//     >
//       <motion.div
//         className="mr-2"
//         initial={{ rotate: 0 }}
//         whileHover={{ rotate: 180 }}
//         transition={{ duration: 0.3 }}
//       >
//         <FileUp className="h-5 w-5" />
//       </motion.div>
//       <span>تحميل الفاتورة</span>
//     </motion.button>
//   );
// };

// export default InvoiceUploadButton;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FileUp } from 'lucide-react';

// interface InvoiceUploadButtonProps {
//   onClick: () => void;
//   className?: string;
// }

// const InvoiceUploadButton: React.FC<InvoiceUploadButtonProps> = ({ onClick, className }) => {
//   const [showTooltip, setShowTooltip] = useState(false); // حالة الرسالة
//   const [isDragging, setIsDragging] = useState(false);  // حالة السحب

//   // إظهار الرسالة عند التمرير على الزر
//   const handleMouseEnter = () => {
//     setShowTooltip(true);
//     // إخفاء الرسالة بعد 3 ثوانٍ
//     setTimeout(() => {
//       setShowTooltip(false);
//     }, 3000);
//   };

//   // التعامل مع سحب الملف
//   const handleDragOver = (event: React.DragEvent) => {
//     event.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (event: React.DragEvent) => {
//     event.preventDefault();
//     setIsDragging(false);
//   };

//   const handleDrop = (event: React.DragEvent) => {
//     event.preventDefault();
//     setIsDragging(false);
//     const file = event.dataTransfer.files[0];
//     if (file) {
//       console.log("File dropped:", file.name);
//       // يمكنك هنا تنفيذ عملية تحميل الملف
//     }
//   };

//   return (
//     <div
//       className="relative text-center"
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//     >
//       {/* زر تحميل الفاتورة */}
//       <motion.button
//         onClick={onClick}
//         className={`
//           flex items-center justify-center
//           bg-gradient-to-r ${isDragging ? 'from-green-500 to-green-600' : 'from-blue-500 to-blue-600'}
//           text-white font-semibold
//           px-6 py-3 rounded-full
//           shadow-lg
//           transition-all duration-300
//           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
//           hover:shadow-lg
//           ${className || '' }
//         `}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onMouseEnter={handleMouseEnter} // استدعاء الرسالة عند التمرير
//         data-html2canvas-ignore
//       >
//         <motion.div
//           className="mr-2"
//           initial={{ rotate: 0 }}
//           whileHover={{ rotate: 180 }}
//           transition={{ duration: 0.3 }}
//         >
//           <FileUp className="h-5 w-5" />
//         </motion.div>
//         <span>تحميل الفاتورة</span>
//       </motion.button>

//       {/* الرسالة المنبثقة */}
//       {showTooltip && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           className="absolute left-1/2 transform -trans late-x-1/2 bg-gray-700 text-white text-sm px-4 py-2 rounded shadow-lg"
//           style={{ bottom: "120%" }} // الموقع أعلى الزر تمامًا
//         >
//           اسحب الملف وضعه هنا
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default InvoiceUploadButton;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileUp } from "lucide-react";

interface InvoiceUploadButtonProps {
  onClick: () => void;
  onFileUpload: (file: File) => void; // إضافة خاصية جديدة لمعالجة الملف
  className?: string;
}

const InvoiceUploadButton: React.FC<InvoiceUploadButtonProps> = ({
  onClick,
  onFileUpload, // استقبال خاصية معالجة الملف
  className,
}) => {
  const [showTooltip, setShowTooltip] = useState(false); // حالة الرسالة
  const [isDragging, setIsDragging] = useState(false); // حالة السحب

  // إظهار الرسالة عند التمرير على الزر
  const handleMouseEnter = () => {
    setShowTooltip(true);
    // إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  // التعامل مع سحب الملف
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      console.log("File dropped:", file.name);
      onFileUpload(file); // تمرير الملف إلى الدالة لمعالجته
    }
  };

  return (
    <div
      className="relative text-center"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* زر تحميل الفاتورة */}
      <motion.button
        onClick={onClick}
        className={`
          flex items-center justify-center
          bg-gradient-to-r ${isDragging ? "from-green-500 to-green-600" : "from-blue-500 to-blue-600"}
          text-white font-semibold
          px-6 py-3 rounded-full
          shadow-lg
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
          hover:shadow-lg
          ${className || ""}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={handleMouseEnter} // استدعاء الرسالة عند التمرير
        data-html2canvas-ignore
      >
        <motion.div
          className="mr-2"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <FileUp className="h-5 w-5" />
        </motion.div>
        <span>تحميل الفاتورة</span>
      </motion.button>

      {/* الرسالة المنبثقة */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-4 py-2 rounded shadow-lg"
          style={{ bottom: "120%" }} // الموقع أعلى الزر تمامًا
        >
          اسحب الملف وضعه هنا
        </motion.div>
      )}
    </div>
  );
};

export default InvoiceUploadButton;
