
"use client";
import { Header2 } from "@/components/header2";
import CompareExcel from "@/components/CompareExcel";
import {
  ChevronUp,
  ChevronDown,
  CheckCircle,
  X,
  Save,
  MoreVertical,
  ChevronLast,
  ChevronFirst,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import ExportDropdown from "@/components/ExportDropdown";
import UserStatus from "@/components/UserStatus";
import { useState, useEffect, createContext, useContext } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import SearchFilter from "@/components/SearchFilter";
import BackupTable from "@/components/BackupTable";
import ToastNotification from "@/components/ToastNotification";
import ExportToPDF from "@/components/ExportToPDF";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios"; // مكتبة لإرسال الطلبات
import * as XLSX from "xlsx"; // مكتبة لإنشاء ملفات XLSX

// Create SidebarContext
const SidebarContext = createContext({ expanded: true });

// Define interfaces
interface InventoryItem {
  id: string;
  itemNumber: string;
  itemName: string;
  inventory: number;
  quantity: number;
  difference: number;
  assignedEmployee?: string;
  lastUpdated?: Date;
}

// Sidebar Component
function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen bg-white dark:bg-gray-900 border-r shadow-sm transition-all">
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

// SidebarItem Component
function SidebarItem({
  iconSrc,
  text,
  active,
  onClick,
  tooltipTitle,
  tooltipDescription,
  tooltipImage,
}) {
  const { expanded } = useContext(SidebarContext);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const handleCloseTooltip = (e) => {
    e.stopPropagation();
    setTooltipVisible(false);
  };

  return (
    <li
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors duration-200 ease-in-out group
        ${
          active
            ? "border-2 border-blue-600 text-gray-700 dark:text-gray-300"
            : "hover:bg-blue-100 dark:hover:bg-blue-800 text-gray-700 dark:text-gray-300"
        }
      `}
    >
      <img src={iconSrc} alt={text} className="w-6 h-6" />
      <span
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm
            invisible opacity-0 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}

      {(tooltipTitle || tooltipDescription) && tooltipVisible && (
        <div
          className="absolute right-full mr-2 p-4 text-sm rounded-xl shadow-lg 
                       bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          style={{
            whiteSpace: "normal",
            zIndex: 10,
            width: "250px",
          }}
        >
          <div className="flex items-start">
            {tooltipImage && (
              <img
                src={tooltipImage}
                alt="Tooltip"
                className="w-12 h-12 mr-3 rounded-md"
              />
            )}
            <div className="flex-1">
              {tooltipTitle && (
                <div className="font-bold mb-1">{tooltipTitle}</div>
              )}
              {tooltipDescription && <div>{tooltipDescription}</div>}
            </div>
            <button
              className="ml-2 text-gray-400 hover:text-gray-600"
              onClick={handleCloseTooltip}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default function InventoryPage() {
  const [itemsData, setItemsData] = useState<InventoryItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [alert, setAlert] = useState({ visible: false, type: "", message: "" });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const [activeSubcollection, setActiveSubcollection] =
    useState("items-items-Gulf1");

  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "asc", // أو "desc" للاتجاه التنازلي
  });

  // دالة الفرز
  const handleSort = (columnKey: string) => {
    let direction = "asc";

    // تبديل الاتجاه إذا كان نفس العمود
    if (sortConfig.key === columnKey && sortConfig.direction === "asc") {
      direction = "desc";
    }

    // فرز البيانات
    const sortedData = [...itemsData].sort((a, b) => {
      const aValue = a[columnKey];
      const bValue = b[columnKey];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return 0; // إذا كان النوع غير مدعوم
    });

    setSortConfig({ key: columnKey, direction });
    setItemsData(sortedData);
  };

  const subcollectionEmployeeMap = {
    "items-items-Gulf1": "عمران",
    "items-items-SN4": "مصنع النور",
    "items-items-heater": "سردار",
    "items-items-gs6": "شير علي",
    "items-items-k-wc-wb": "قربان",
    "items-items-collection5": "فضل ربي 5",
  };

  const assignedEmployee =
    subcollectionEmployeeMap[activeSubcollection] || "غير محدد";

  const handleEditChange = (id: string, field: string, value: string) => {
    const numValue = Number(value);
    const currentItem = itemsData.find((item) => item.id === id);
    const currentEditedData = editedData[id] || {};

    let newInventory =
      field === "inventory"
        ? numValue
        : currentEditedData.inventory ?? currentItem?.inventory ?? 0;
    let newQuantity =
      field === "quantity"
        ? numValue
        : currentEditedData.quantity ?? currentItem?.quantity ?? 0;
    const newDifference = newInventory - newQuantity;

    setEditedData({
      ...editedData,
      [id]: {
        ...currentEditedData,
        [field]: numValue,
        difference: newDifference,
        lastUpdated: new Date(),
      },
    });

    setHasUnsavedChanges(true);
  };

  // Fetch data from Firebase
  useEffect(() => {
    async function fetchInventoryData(subcollectionName) {
      if (!subcollectionName) return;
      setLoading(true);
      const itemsCollectionData: InventoryItem[] = [];

      try {
        const defaultDocRef = doc(db, "inventoryApp", "defaultDoc");
        const subcollectionRef = collection(defaultDocRef, subcollectionName);
        const subcollectionSnapshot = await getDocs(subcollectionRef);

        subcollectionSnapshot.forEach((doc) => {
          const data = doc.data();
          itemsCollectionData.push({
            id: doc.id,
            ...data,
            difference: (data.inventory || 0) - (data.quantity || 0),
          } as InventoryItem);
        });

        setItemsData(itemsCollectionData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchInventoryData(activeSubcollection);
  }, [activeSubcollection]);

  // إضافة ميزة الحفظ التلقائي
  useEffect(() => {
    const autoSave = async () => {
      if (Object.keys(editedData).length === 0) return;
      try {
        const promises = Object.keys(editedData).map((id) =>
          updateDoc(
            doc(db, "inventoryApp", "defaultDoc", activeSubcollection, id),
            editedData[id]
          )
        );
        await Promise.all(promises);

        setItemsData((prevData) =>
          prevData.map((item) =>
            editedData[item.id] ? { ...item, ...editedData[item.id] } : item
          )
        );

        setEditedData({});
        setHasUnsavedChanges(false);
      } catch (error) {
        console.error("Error in auto-saving changes:", error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      autoSave();
    }, 5000); // يحفظ التغييرات بعد 5 ثوانٍ من آخر تعديل

    return () => clearTimeout(delayDebounceFn);
  }, [editedData]);

  // دالة لتصدير البيانات إلى ملف XLSX
  const exportToXLSX = (data, employeeName) => {
    const worksheet = XLSX.utils.json_to_sheet(
      data.map((item) => ({
        "رقم الصنف": item.itemNumber,
        "أسم الصنف": item.itemName,
        الجرد: item.inventory,
        الكمية: item.quantity,
        الفرق: item.difference,
        "التحديث الاخير": item.lastUpdated
          ? new Date(item.lastUpdated).toLocaleString()
          : "لم يتم التحديث",
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "جرد");

    const fileName = `${employeeName}_جرد_${new Date().toLocaleDateString()}_${new Date().toLocaleTimeString()}.xlsx`;

    // تحويل البيانات إلى كائن Blob
    const xlsxData = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([xlsxData], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // حفظ الملف محليًا (اختياري)
    XLSX.writeFile(workbook, fileName);

    return { fileName, blob };
  };

  // دالة لإرسال الملف عبر Telegram
  const sendToTelegram = async ({ fileName, blob }, employeeName) => {
    const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    const message = `جرد: ${employeeName} في ${new Date().toLocaleString()}`;

    // إنشاء كائن File جديد من blob وتمرير اسم الملف
    const file = new File([blob], fileName, { type: blob.type });

    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("caption", message);
    formData.append("document", file);

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${token}/sendDocument`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("تم إرسال الملف بنجاح إلى Telegram:", response.data);
    } catch (error) {
      console.error("فشل في إرسال الملف إلى Telegram:", error);
      if (error.response) {
        console.error("تفاصيل الاستجابة:", error.response.data);
        console.error("حالة الاستجابة:", error.response.status);
      } else {
        console.error("خطأ غير متوقع:", error.message);
      }
    }
  };

  // Handle saving changes
  const handleSaveAllChanges = async () => {
    setIsProcessing(true);
    try {
      const employeeName = assignedEmployee;
      const { fileName, blob } = exportToXLSX(itemsData, employeeName);
      await sendToTelegram({ fileName, blob }, employeeName);

      showAlert("success", "تم حفظ جميع التغييرات وإرسال الملف إلى Telegram بنجاح!");
    } catch (error) {
      console.error("Error saving changes:", error);
      showAlert("error", "فشل في حفظ التغييرات.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Filter function
  const handleFilter = () => {
    return itemsData.filter((item) => {
      const searchTerm = searchQuery.toLowerCase();
      return (
        item.itemNumber?.toString().toLowerCase().includes(searchTerm) ||
        item.itemName?.toLowerCase().includes(searchTerm) ||
        item.inventory?.toString().toLowerCase().includes(searchTerm) ||
        item.quantity?.toString().toLowerCase().includes(searchTerm) ||
        item.difference?.toString().toLowerCase().includes(searchTerm)
      );
    });
  };

  const showAlert = (type, message) => {
    setAlert({ visible: true, type, message });
    setTimeout(() => {
      setAlert({ visible: false, type: "", message: "" });
    }, 3000);
  };

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          iconSrc="/tubespibe.png"
          text="الخليج"
          active={activeSubcollection === "items-items-Gulf1"}
          onClick={() => setActiveSubcollection("items-items-Gulf1")}
          tooltipTitle="الموظف عمران"
          tooltipDescription="إدارة مخزون مستودع المواسير"
          tooltipImage="/tubespibe.png"
        />
        <SidebarItem
          iconSrc="/Logo.png"
          text="مصنع النور"
          active={activeSubcollection === "items-items-SN4"}
          onClick={() => setActiveSubcollection("items-items-SN4")}
          tooltipTitle="الموظف سردار"
          tooltipDescription="إدارة مخزون مصنع النور"
          tooltipImage="/Logo.png"
        />
        <SidebarItem
          iconSrc="/heater2.png"
          text="السخانات"
          active={activeSubcollection === "items-items-heater"}
          onClick={() => setActiveSubcollection("items-items-heater")}
          tooltipTitle="الموظف سردار"
          tooltipDescription="إدارة مخزون السخانات"
          tooltipImage="/heater2.png"
        />
        <SidebarItem
          iconSrc="/gs.png"
          text="محابس GS"
          active={activeSubcollection === "items-items-gs6"}
          onClick={() => setActiveSubcollection("items-items-gs6")}
          tooltipTitle="الموظف شير علي"
          tooltipDescription="قسم محابس GS"
          tooltipImage="/gs.png"
        />
        <SidebarItem
          iconSrc="/logo-icon-scc.png"
          text="كراسي & مغاسل"
          active={activeSubcollection === "items-items-k-wc-wb"}
          onClick={() => setActiveSubcollection("items-items-k-wc-wb")}
          tooltipTitle="الموظف قربان"
          tooltipDescription="إدارة مخزون الكراسي والمغاسل"
          tooltipImage="/logo-icon-scc.png"
        />
        <SidebarItem
          iconSrc="/tube.png"
          text="مستودع 5"
          active={activeSubcollection === "items-items-collection5"}
          onClick={() => setActiveSubcollection("items-items-collection5")}
          tooltipTitle="مستودع 5"
          tooltipDescription="إدارة مخزون المستودع 5"
          tooltipImage="/tube.png"
        />
      </Sidebar>

      <div className="p-6 bg-white dark:bg-gray-900 min-h-screen flex-1">
        <UserStatus />
        <Header2 />
        <Navbar />

        {assignedEmployee !== "غير محدد" && (
          <div className="mb-4 text-center flex justify-center items-center">
            <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
              المسؤول: {assignedEmployee}
            </span>
          </div>
        )}

        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
          إدارة المخزون
        </h1>

        {/* إضافة زر المقارنة هنا */}
        {/* <CompareButton itemsData={itemsData} setItemsData={setItemsData} showAlert={showAlert} /> */}
        <ExportToPDF tableId="table-data" employeeName={assignedEmployee} collectionName="" />
        <div className="App">
          <CompareExcel
            itemsData={itemsData}
            setItemsData={setItemsData}
            showAlert={showAlert}
          />
        </div>

        <ExportDropdown data={itemsData} />
        {/* قمنا بإزالة مكون AutoSave */}

        {activeSubcollection && (
          <>
            <SearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterOption={filterOption}
              setFilterOption={setFilterOption}
            />

            <div id="table-data">
              {/* Table Component */}
              <div className="relative overflow-x-auto shadow-lg sm:rounded-lg mt-4">
                <table className="w-full text-sm text-right text-gray-700 dark:text-gray-300">
                  {/* Table Header */}
                  <thead className="text-xs text-gray-500 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                      <th className="px-6 py-3">#</th>
                      <th
                        className="px-6 py-3 cursor-pointer"
                        onClick={() => handleSort("itemNumber")}
                      >
                        رقم الصنف
                        {sortConfig.key === "itemNumber" && (
                          <>
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp className="inline ml-1" />
                            ) : (
                              <ChevronDown className="inline ml-1" />
                            )}
                          </>
                        )}
                      </th>
                      <th
                        className="px-6 py-3 cursor-pointer"
                        onClick={() => handleSort("itemName")}
                      >
                        أسم الصنف
                        {sortConfig.key === "itemName" && (
                          <>
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp className="inline ml-1" />
                            ) : (
                              <ChevronDown className="inline ml-1" />
                            )}
                          </>
                        )}
                      </th>
                      <th
                        className="px-6 py-3 cursor-pointer"
                        onClick={() => handleSort("inventory")}
                      >
                        الجرد
                        {sortConfig.key === "inventory" && (
                          <>
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp className="inline ml-1" />
                            ) : (
                              <ChevronDown className="inline ml-1" />
                            )}
                          </>
                        )}
                      </th>
                      <th
                        className="px-6 py-3 cursor-pointer"
                        onClick={() => handleSort("quantity")}
                      >
                        الكمية
                        {sortConfig.key === "quantity" && (
                          <>
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp className="inline ml-1" />
                            ) : (
                              <ChevronDown className="inline ml-1" />
                            )}
                          </>
                        )}
                      </th>
                      <th
                        className="px-6 py-3 cursor-pointer"
                        onClick={() => handleSort("difference")}
                      >
                        الفرق
                        {sortConfig.key === "difference" && (
                          <>
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp className="inline ml-1" />
                            ) : (
                              <ChevronDown className="inline ml-1" />
                            )}
                          </>
                        )}
                      </th>
                      <th
                        className="px-6 py-3 cursor-pointer"
                        onClick={() => handleSort("lastUpdated")}
                      >
                        التحديث الاخير
                        {sortConfig.key === "lastUpdated" && (
                          <>
                            {sortConfig.direction === "asc" ? (
                              <ChevronUp className="inline ml-1" />
                            ) : (
                              <ChevronDown className="inline ml-1" />
                            )}
                          </>
                        )}
                      </th>
                    </tr>
                  </thead>
                  {/* Table Body */}
                  <tbody>
                    {handleFilter().map((item, index) => (
                      <tr
                        key={item.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{item.itemNumber}</td>
                        <td className="px-6 py-4">{item.itemName}</td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            value={
                              editedData[item.id]?.inventory ?? item.inventory
                            }
                            onChange={(e) =>
                              handleEditChange(
                                item.id,
                                "inventory",
                                e.target.value
                              )
                            }
                            className="border p-1 rounded w-full dark:bg-gray-700"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            value={
                              editedData[item.id]?.quantity ?? item.quantity
                            }
                            onChange={(e) =>
                              handleEditChange(
                                item.id,
                                "quantity",
                                e.target.value
                              )
                            }
                            className="border p-1 rounded w-full dark:bg-gray-700"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            value={
                              editedData[item.id]?.difference ??
                              item.difference
                            }
                            readOnly
                            className={`
                            border p-1 rounded w-full 
                            ${
                              (editedData[item.id]?.difference ??
                                item.difference) < 0
                                ? "text-red-600 bg-red-50"
                                : "text-green-600 bg-green-50"
                            }
                          `}
                          />
                        </td>
                        <td className="px-6 py-4">
                          {editedData[item.id]?.lastUpdated
                            ? new Date(
                                editedData[item.id].lastUpdated
                              ).toLocaleString()
                            : item.lastUpdated
                            ? new Date(item.lastUpdated).toLocaleString()
                            : "لم يتم التحديث"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSaveAllChanges}
              className="mt-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Save className="w-5 h-5" />
              <span>حفظ التغييرات</span>
            </button>
          </>
        )}

        {/* Alert Messages */}
        <AnimatePresence>
          {alert.visible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg ${
                alert.type === "success" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {alert.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
