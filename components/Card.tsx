// import React from 'react';

// interface CardProps {
//   title: string;
//   value: string;
//   change: string; // التغيير في القيمة
//   percentage: string; // النسبة المئوية للتغيير
//   icon: React.ReactNode; // أيقونة
// }

// const Card: React.FC<CardProps> = ({ title, value, change, percentage, icon }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
//       <div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//         <p className={`text-sm ${parseFloat(percentage) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//           {change} {percentage} من الشهر الماضي
//         </p>
//       </div>
//       <div className="text-purple-600">{icon}</div>
//     </div>
//   );
// };

// export default Card;



// import React from 'react';

// interface CardProps {
//   title: string;
//   value: string;
//   change: string; // التغيير في القيمة
//   percentage: string; // النسبة المئوية للتغيير
//   icon: React.ReactNode; // أيقونة
// }

// const Card: React.FC<CardProps> = ({ title, value, change, percentage, icon }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
//       <div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//         <p className={`text-sm ${parseFloat(percentage) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//           {change} {percentage} {/* إزالة "من الشهر الماضي" */}
//         </p>
//       </div>
//       <div className="text-purple-600">{icon}</div>
//     </div>
//   );
// };

// export default Card;



// import React from 'react';

// interface CardProps {
//   title: string;
//   value: string;
//   dateRange: string; // عرض التاريخ
//   icon: React.ReactNode; // أيقونة
// }

// const Card: React.FC<CardProps> = ({ title, value, dateRange, icon }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
//       <div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//         <p className="text-sm text-gray-500">{dateRange}</p> {/* عرض التاريخ */}
//       </div>
//       <div className="text-purple-600">{icon}</div>
//     </div>
//   );
// };

// export default Card;


// قبل تحسين الوضع الليلي
// import React from 'react';

// interface CardProps {
//   title: string;
//   value: string;
//   dateRange: string; // عرض التاريخ
//   icon: React.ReactNode; // أيقونة
// }

// const Card: React.FC<CardProps> = ({ title, value, dateRange, icon }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
//       <div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//         <p className="text-sm text-gray-500">{dateRange}</p> {/* عرض التاريخ */}
//       </div>
//       <div className="text-purple-600">{icon}</div>
//     </div>
//   );
// };

// export default Card;



import React from 'react';

interface CardProps {
  title: string;
  value: string;
  dateRange: string; // عرض التاريخ
  icon: React.ReactNode; // أيقونة
}

const Card: React.FC<CardProps> = ({ title, value, dateRange, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">{value}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{dateRange}</p> {/* عرض التاريخ */}
      </div>
      <div className="text-purple-600 dark:text-purple-400">{icon}</div>
    </div>
  );
};

export default Card;