import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AlertModal from "./AlertModal";
import { motion } from "framer-motion";

const UploadButton = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // حالة السحب
  const [showTooltip, setShowTooltip] = useState(false); // حالة عرض الرسالة
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    if (file.type === "application/pdf") {
      setUploading(true);
      setError(null);

      const formData = new FormData();
      formData.append("document", file);

      try {
        const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;
        await axios.post(telegramApiUrl, formData, {
          params: {
            chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
            caption: `تم رفع ملف PDF جديد: ${file.name}`,
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setShowAlert(true);
      } catch (e) {
        console.error("Error uploading PDF:", e);
        setError("حدث خطأ أثناء رفع الملف. يرجى المحاولة مرة أخرى.");
      } finally {
        setUploading(false);
      }
    } else {
      setError("يرجى اختيار ملف PDF صالح.");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // أحداث السحب والإفلات
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
      handleFileUpload(file); // تحميل الملف المسحوب
    }
  };

  // إظهار الرسالة عند التمرير على الزر
  const handleMouseEnter = () => {
    setShowTooltip(true);
    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="text-center relative" // استخدام position relative لتمكين الرسالة المنبثقة
    >
      {/* زر رفع الملف */}
      <Button
        onClick={triggerFileInput}
        disabled={uploading}
        onMouseEnter={handleMouseEnter} // استدعاء الرسالة عند التمرير
        className="flex items-center justify-center
        bg-gradient-to-r from-blue-500 to-blue-600
        text-white font-semibold
        px-6 py-3 rounded-full
        shadow-lg
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        hover:shadow-lg"
      >
        <Upload className="mr-2 h-5 w-5" />
        {uploading ? "جاري الرفع..." : "رفع ملف PDF"}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        accept=".pdf"
        className="hidden"
      />

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

      {/* عرض الخطأ إذا كان موجودًا */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* الرسالة المنبثقة عند نجاح الرفع */}
      <AlertModal
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        message="تم رفع الملف بنجاح وإرساله إلى التلغرام"
      />
    </div>
  );
};

export default UploadButton;
