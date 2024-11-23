// import React from 'react';
// import { motion } from 'framer-motion';
// import { HardDriveDownload } from 'lucide-react';

// interface InvoiceDownloadPDFButtonProps {
//   onClick: () => void;
//   className?: string;
// }

// const InvoiceDownloadPDFButton: React.FC<InvoiceDownloadPDFButtonProps> = ({ onClick, className }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       className={`
//         flex items-center justify-center
//         bg-gradient-to-r from-red-500 to-red-600
//         text-white font-semibold
//         px-4 py-2 rounded-lg
//         shadow-md
//         transition-all duration-300
//         focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50
//         hover:shadow-lg
//         ${className || ''}
//       `}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       data-html2canvas-ignore
//     >
//       <motion.div
//         className="mr-2"
//         initial={{ y: 0 }}
//         whileHover={{ y: 3 }}
//         transition={{ duration: 0.3 }}
//       >
//         <HardDriveDownload className="h-5 w-5" />
//       </motion.div>
//       <span>تنزيل PDF</span>
//     </motion.button>
//   );
// };

// export default InvoiceDownloadPDFButton;


import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

interface InvoiceDownloadPDFButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const InvoiceDownloadPDFButton: React.FC<InvoiceDownloadPDFButtonProps> = ({ onClick, className, children }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center justify-center
        bg-gradient-to-r from-blue-500 to-blue-600
        text-white font-semibold
        px-6 py-3 rounded-full
        shadow-lg
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        hover:shadow-lg
       
        ${className || ''}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-html2canvas-ignore="true"
    >
      <FileDown className="mr-2 h-5 w-5 " />
      <span>{children}</span>
    </motion.button>
  );
};

export default InvoiceDownloadPDFButton;