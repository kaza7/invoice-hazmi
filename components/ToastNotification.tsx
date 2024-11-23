// components/ToastNotification.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ToastNotification({ message, type, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    visible && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg flex items-center space-x-3 ${
          type === "success" ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"
        }`}
      >
        <div className="text-gray-800 font-medium">{message}</div>
      </motion.div>
    )
  );
}


