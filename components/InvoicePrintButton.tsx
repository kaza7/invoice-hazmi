import React from 'react';
import { motion } from 'framer-motion';
import { Printer } from 'lucide-react';

interface InvoicePrintButtonProps {
  onClick: () => void;
  className?: string;
}

const InvoicePrintButton: React.FC<InvoicePrintButtonProps> = ({ onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        flex items-center justify-center
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
      data-html2canvas-ignore
    >
      <motion.div
        className="mr-2"
        initial={{ y: 0 }}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
      >
        <Printer className="h-5 w-5" />
      </motion.div>
      <span>طباعة الفاتورة</span>
    </motion.button>
  );
};

export default InvoicePrintButton;