// InventoryPage.js
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import ToastNotification from "@/components/ToastNotification";
import ExportDropdown from "@/components/ExportDropdown";

const InventoryPage = () => {
  const [userRole, setUserRole] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("info");
  const itemsData = []; // تأكد من إدخال بيانات فعلية هنا عند توافرها

  // دالة لجلب دور المستخدم من Firestore
  const fetchUserRole = async (uid) => {
    try {
      const docRef = doc(db, "userRoles", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data().role; // جلب دور المستخدم
      } else {
        console.error("وثيقة دور المستخدم غير موجودة!");
        return null;
      }
    } catch (error) {
      console.error("خطأ أثناء جلب دور المستخدم:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchRole = async () => {
      if (auth.currentUser) {
        const role = await fetchUserRole(auth.currentUser.uid);
        setUserRole(role);
      }
    };
    fetchRole();
  }, []);

  // دالة لعرض التنبيه المؤقت
  const showAlert = (message, type = "info", duration = 3000) => {
    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, duration);
  };

  return (
    <div>
      <h1>إدارة المخزون</h1>

      {userRole === "admin" ? (
        <div>
          <button onClick={() => showAlert("تمت إضافة البيانات بنجاح!", "success")}>
            رفع البيانات
          </button>
          <ExportDropdown data={itemsData} />
        </div>
      ) : userRole === "employee" ? (
        <p>يمكنك عرض البيانات فقط. ليس لديك صلاحيات لإجراء تعديلات.</p>
      ) : (
        <p>يتم التحقق من الصلاحيات...</p>
      )}

      {alertVisible && (
        <ToastNotification
          message={alertMessage}
          type={alertType}
          duration={3000}
          onClose={() => setAlertVisible(false)}
        />
      )}
    </div>
  );
};

export default InventoryPage;
