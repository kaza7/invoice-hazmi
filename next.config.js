/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'framerusercontent.com',
      'www.alrajhibank.com.sa',
      'www.alahli.com'
    ],
  },
  // قم بإزالة إعدادات i18n إذا كنت تستخدم next export
  // i18n: {
  //   defaultLocale: 'ar',
  //   locales: ['ar', 'en'],
  // },
};



module.exports = nextConfig;
// "undici": "6.19.7"

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     unoptimized: true,
//     domains: [
//       'framerusercontent.com',
//       'www.alrajhibank.com.sa',
//       'www.alahli.com'
//     ],
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.alias = {
//         ...config.resolve.alias,
//         'undici': false, // تعطيل مكتبة undici تمامًا في بيئة المتصفح
//       };
//     }
//     return config;
//   },
// };

// module.exports = nextConfig;
