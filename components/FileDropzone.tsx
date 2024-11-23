import { useState } from 'react';

interface FileDropzoneProps {
  onFileDrop: (file: File) => void;  // دالة لاستقبال الملف
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileDrop }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);  // تغيير حالة السحب
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);  // إعادة حالة السحب
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';  // التأكد من أن المستخدم يمكنه نسخ الملف
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];  // استلام أول ملف تم إسقاطه
    if (file) {
      onFileDrop(file);  // إرسال الملف للدالة التي تم تمريرها من المكون الرئيسي
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`p-6 border-2 border-dashed ${isDragging ? 'border-blue-500' : 'border-gray-300'} rounded-md text-center`}
    >
      {isDragging ? (
        <p>أفلت الملف هنا...</p>
      ) : (
        <p>اسحب وأفلت ملفك هنا، أو انقر لاختيار ملف</p>
      )}
    </div>
  );
};

export default FileDropzone;
