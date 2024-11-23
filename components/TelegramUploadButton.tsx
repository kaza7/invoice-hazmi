import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface TelegramUploadButtonProps {
  onClick: () => void;
  uploading: boolean;
  className?: string;
}

const TelegramUploadButton: React.FC<TelegramUploadButtonProps> = ({ onClick, uploading, className }) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={uploading}
      className={`
        
        ${uploading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
        ${className || ''}
      `}
      whileHover={uploading ? {} : { scale: 1.05 }}
      whileTap={uploading ? {} : { scale: 0.95 }}
      data-html2canvas-ignore={true}
    >
      <motion.div
        className="mr-2"
        initial={{ x: 0 }}
        animate={{ x: uploading ? [0, 5, 0] : 0 }}
        transition={{ duration: 0.5, repeat: uploading ? Infinity : 0 }}
      >
        <Send className="h-5 w-5 " />
      </motion.div>
      <span>{uploading ? 'جاري الإرسال...' : 'إرسال إلى التلغرام'}</span>
    </motion.button>
  );
};

export default TelegramUploadButton;