
"use client";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import * as XLSX from "xlsx";

// إعداد Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

import { doc, getDoc } from "firebase/firestore";

// جلب دور المستخدم من Firestore
const fetchUserRole = async (uid) => {
  const docRef = doc(db, "userRoles", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().role; // return role of the user
  } else {
    console.error("No such user role document!");
    return null;
  }
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// تفعيل GoogleAuthProvider
const provider = new GoogleAuthProvider();

// دالة لتسجيل الدخول عبر Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("تسجيل الدخول بنجاح:", result.user);
  } catch (error) {
    console.error("خطأ في تسجيل الدخول عبر Google:", error);
  }
};

// القديم تمام بس بحاول اضيف اسم الموظف
// دالة لرفع البيانات من ملف Excel إلى Firebase
// const uploadExcelToFirebase = async (file) => {
//   const reader = new FileReader();

//   reader.onload = async (e) => {
//     const data = new Uint8Array(e.target.result);
//     const workbook = XLSX.read(data, { type: "array" });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const rows = XLSX.utils.sheet_to_json(worksheet);

//     // استخدام اسم الملف لتحديد اسم المجموعة
//     const collectionName = `items-${file.name.split(".")[0]}`; // استخراج الاسم بدون الامتداد

//     for (const row of rows) {
//       const itemNumber = row["رقم الصنف"] ? String(row["رقم الصنف"]) : "غير محدد";
//       const itemName = row["اسم الصنف"] || "اسم غير متوفر";
//       const inventory = row["الجرد"] ?? 0;
//       const quantity = row["الكمية"] ?? 0;
//       const difference = row["الفرق"] ?? 0;

//       if (itemNumber && itemName) {
//         try {
//           // المسار يصبح ديناميكيًا بناءً على اسم الملف
//           const inventoryDocRef = collection(
//             db,
//             "inventoryApp",
//             "defaultDoc",
//             collectionName
//           );
//           await addDoc(inventoryDocRef, {
//             itemNumber,
//             itemName,
//             inventory,
//             quantity,
//             difference,
//           });
//           console.log("تمت إضافة الصنف:", row);
//         } catch (error) {
//           console.error("خطأ في إضافة الصنف:", error);
//         }
//       } else {
//         console.warn("صف به بيانات ناقصة تم تجاهله:", row);
//       }
//     }
//     alert(`تمت عملية الاستيراد بنجاح في المجموعة ${collectionName}!`);
//   };

//   reader.readAsArrayBuffer(file);
// };

const uploadExcelToFirebase = async (file) => {
  const reader = new FileReader();

  reader.onload = async (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet);

    // استخدام اسم الملف لتحديد اسم المجموعة
    const collectionName = `items-${file.name.split(".")[0]}`; // استخراج الاسم بدون الامتداد

    for (const row of rows) {
      const itemNumber = row["رقم الصنف"]
        ? String(row["رقم الصنف"])
        : "غير محدد";
      const itemName = row["اسم الصنف"] || "اسم غير متوفر";
      const inventory = row["الجرد"] ?? 0;
      const quantity = row["الكمية"] ?? 0;
      const difference = row["الفرق"] ?? 0;
      const assignedEmployee = row["الموظف"] || "غير محدد"; // قراءة حقل "الموظف"

      if (itemNumber && itemName) {
        try {
          // المسار يصبح ديناميكيًا بناءً على اسم الملف
          const inventoryDocRef = collection(
            db,
            "inventoryApp",
            "defaultDoc",
            collectionName
          );
          await addDoc(inventoryDocRef, {
            itemNumber,
            itemName,
            inventory,
            quantity,
            difference,
            assignedEmployee, // إضافة حقل الموظف إلى قاعدة البيانات
          });
          console.log("تمت إضافة الصنف:", row);
        } catch (error) {
          console.error("خطأ في إضافة الصنف:", error);
        }
      } else {
        console.warn("صف به بيانات ناقصة تم تجاهله:", row);
      }
    }
    alert(`تمت عملية الاستيراد بنجاح في المجموعة ${collectionName}!`);
  };

  reader.readAsArrayBuffer(file);
};

// دالة تحميل الملف
export const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    uploadExcelToFirebase(file);
  }
};

// دوال Firebase Authentication
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
