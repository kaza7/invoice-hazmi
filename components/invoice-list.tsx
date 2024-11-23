
"use client";
// import UploadPdfButton from "@/components/UploadPdfButton";
import UploadButton from "./UploadButton";

import InvoiceDownloadPDFButton from "./InvoiceDownloadPDFButton";
import InvoiceUploadButton from "./InvoiceUploadButton";
import { useState, useRef, useEffect } from "react";
import InvoicePrintButton from "./InvoicePrintButton";
import axios from "axios";

import { motion, AnimatePresence } from "framer-motion";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  CheckCircle,
  Trash2,
  Send,
  Clock,
  MessageCircleMore,
} from "lucide-react";
import AlertModal from "./AlertModal";

type InvoiceDetails = {
  customerName: string;
  date: string;
  accountNumber: string;
  accountType: string;
  orderId: string;
};

type Product = {
  id: string;
  sequence: string;
  name: string;
  quantity: string;
  unitPrice: string;
  total: string;
};

type OrderSummary = {
  totalOrder: string;
  tax: string;
  finalTotal: string;
  totalInWords: string;
};

type Invoice = {
  details: InvoiceDetails;
  products: Product[];
  summary: OrderSummary;
};

const employees = [
  { name: "ناصر الحازمي", role: "المدير العام" },
  { name: "خالد الحازمي", role: "المدير الإداري" },
  { name: "باسم الحازمي", role: "المدير الإداري" },
  { name: "حسن الزهراني", role: "مندوب مبيعات" },
  { name: "عبدالرحمن الزهراني", role: "مندوب مبيعات" },
  { name: "مازن السفياني", role: "مندوب مبيعات" },
  { name: "ماجد المعلوي", role: "مندوب مبيعات" },
  { name: "محمود عزت", role: "مندوب مبيعات" },
];

export function InvoiceList() {
  const [customerName, setCustomerName] = useState(""); // متغير حالة لاسم العميل
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isPdfDownloading, setIsPdfDownloading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [allInvoices, setAllInvoices] = useState<
    {
      id: string;
      invoiceNumber: string;
      employeeName: string;
      status: string;
    }[]
  >([]);
  const [filteredInvoices, setFilteredInvoices] = useState<
    {
      id: string;
      invoiceNumber: string;
      employeeName: string;
      status: string;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(5); // Change this to adjust the number of invoices per page

  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState(""); // حالة لكلمة السر
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // حالة لفتح نافذة كلمة السر
  const [actionType, setActionType] = useState(""); // لتحديد نوع الإجراء (حذف أو تنفيذ)
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null); // لتخزين معرف الفاتورة المحددة
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false); // حالة لعرض رسالة التأكيد
  const [passwordError, setPasswordError] = useState(""); // حالة لتخزين رسالة الخطأ

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const formatDateTime = (dateTimeString: string | null) => {
    if (!dateTimeString) return "غير متوفر";
    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) {
      const parts = dateTimeString.split("/");
      if (parts.length === 3) {
        const newDate = new Date(
          parseInt(parts[2]),
          parseInt(parts[1]) - 1,
          parseInt(parts[0])
        );
        if (!isNaN(newDate.getTime())) {
          return newDate.toISOString().split("T")[0];
        }
      }
      return dateTimeString;
    }
    return date.toISOString().split("T")[0];
  };

  const handleFileUpload = (file: File) => {
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const xmlContent = e.target?.result as string;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");

        const report = xmlDoc.getElementsByTagName("Report")[0];
        if (report) {
          const invoiceDetails: InvoiceDetails = {
            customerName: report.getAttribute("CustName4") || "غير متوفر",
            date: formatDateTime(report.getAttribute("TransDate")),
            accountNumber: report.getAttribute("CustAccount") || "غير متوفر",
            accountType: report.getAttribute("CustName") || "غير متوفر",
            orderId: report.getAttribute("SalesId") || "غير متوفر",
          };

          const products: Product[] = Array.from(
            xmlDoc.getElementsByTagName("Detail")
          ).map((detail) => ({
            id: detail.getAttribute("ItemId1") || "غير متوفر",
            sequence: detail.getAttribute("NumberSequenceId1") || "غير متوفر",
            name: detail.getAttribute("ItemName1") || "غير متوفر",
            quantity: detail.getAttribute("SalesQty1") || "غير متوفر",
            unitPrice: detail.getAttribute("SalesPrice1") || "غير متوفر",
            total: detail.getAttribute("LineAmount1") || "غير متوفر",
          }));

          const summary: OrderSummary = {
            totalOrder: report.getAttribute("TotalSalesOrder") || "غير متوفر",
            tax: report.getAttribute("TotalTax") || "غير متوفر",
            finalTotal: report.getAttribute("TotalSalesOrder1") || "غير متوفر",
            totalInWords:
              report.getAttribute("TotalSalesOrderTxt") || "غير متوفر",
          };

          setInvoice({ details: invoiceDetails, products, summary });
        } else {
          setError("لم يتم العثور على عنصر التقرير في ملف XML");
        }
      } catch (err) {
        console.error("Error parsing XML:", err);
        setError(
          "حدث خطأ أثناء قراءة الملف. يرجى التأكد من أن الملف بتنسيق XML صحيح."
        );
      }
    };
    reader.onerror = (err) => {
      console.error("FileReader error:", err);
      setError("حدث خطأ أثناء قراءة الملف. يرجى المحاولة مرة أخرى.");
    };
    reader.readAsText(file);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const element = document.querySelector("#invoice-content");
    setIsPdfDownloading(true);
  
    const customerName = invoice?.details.customerName;
    const currentDateTime = new Date()
      .toLocaleString("en-GB")
      .replace(/[/:,]/g, "-");
    const filename = customerName
      ? `invoice_${customerName}.pdf`
      : `فاتورة_${currentDateTime}.pdf`;
  
    if (element) {
      const options = {
        margin: 4, // إزالة الهوامش تماماً
        filename: filename,
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
          x: 0,
          y: 0, // تحديد بدء المحتوى من أعلى الصفحة
          scrollX: 0,
          scrollY: 0,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
          ignoreElements: (element) =>
            element.getAttribute("data-html2canvas-ignore") === "true",
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"],
          before: [
            "#invoice-products-section",
            "#order-summary-section",
            "#bank-account-section",
            "#company-address-section",
          ],
        },
        enableLinks: true,
        windowWidth: element.scrollWidth,
        onBeforeCapture: (element) => {
          const importantElements = element.querySelectorAll(".keep-together");
          importantElements.forEach((el) => {
            el.style.pageBreakInside = "avoid";
            el.style.breakInside = "avoid";
          });
        },
      };
  
      try {
        const pdf = await html2pdf()
          .set(options)
          .from(element)
          .toPdf()
          .get('pdf')
          .then((pdf) => {
            pdf.setPage(1); // لضبط المحتوى في بداية الصفحة
            return pdf;
          })
          .output("blob");
  
        // حفظ ملف PDF محلياً
        const pdfUrl = URL.createObjectURL(pdf);
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(pdfUrl);
  
        // إرسال PDF إلى Telegram
        const formData = new FormData();
        formData.append("document", pdf, filename);
  
        const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;
        await axios.post(telegramApiUrl, formData, {
          params: {
            chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
            caption: "تم إرسال فاتورة جديدة",
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        setAlertMessage("تم تنزيل الفاتورة وإرسالها إلى التلغرام بنجاح");
        setIsAlertOpen(true);
      } catch (err) {
        console.error("Error generating or sending PDF:", err);
        setAlertMessage(
          "حدث خطأ أثناء إنشاء أو إرسال PDF. يرجى المحاولة مرة أخرى."
        );
        setIsAlertOpen(true);
      } finally {
        setIsPdfDownloading(false);
      }
    } else {
      console.error("Invoice content element not found");
      setIsPdfDownloading(false);
      setAlertMessage("لم يتم العثور على محتوى الفاتورة");
      setIsAlertOpen(true);
    }
  };

  const handleSubmit = async () => {
    if (!invoiceNumber || !employeeName) {
      setError("يرجى إدخال رقم الطلب واختيار اسم الموظف");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const docRef = await addDoc(collection(db, "invoice"), {
        invoiceNumber,
        employeeName,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
      console.log("Document written with ID: ", docRef.id);

      const now = new Date();
      const formattedDate = now.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`;
      const message = `طلب عرض سعر جديد\nالموظف: ${employeeName}\nرقم الفاتورة: ${invoiceNumber}\nDate: ${formattedDate}\nTime: ${formattedTime}`;

      await axios.post(telegramApiUrl, {
        chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        text: message,
      });

      setAlertMessage("تم إرسال الطلب بنجاح");
      setIsAlertOpen(true);
      setInvoiceNumber("");
      setEmployeeName("");
      fetchAllInvoices(); // Refresh the list of invoices
    } catch (e) {
      console.error("Error adding document or sending Telegram message: ", e);
      setError("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    }

    setSubmitting(false);
  };

  const fetchAllInvoices = async () => {
    const q = query(
      collection(db, "invoice"),
      where("status", "in", ["pending", "executed"])
    );
    const querySnapshot = await getDocs(q);
    const invoices = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      invoiceNumber: doc.data().invoiceNumber,
      employeeName: doc.data().employeeName,
      status: doc.data().status,
    }));
    setAllInvoices(invoices);
    setFilteredInvoices(invoices); // Initialize filtered invoices
  };

  const markAsExecuted = async (id: string) => {
    try {
      await updateDoc(doc(db, "invoice", id), {
        status: "executed",
      });
      fetchAllInvoices(); // Refresh the list
    } catch (e) {
      console.error("Error updating document: ", e);
      setError("حدث خطأ أثناء تحديث حالة الطلب.");
    }
  };

  const removeInvoice = async (id: string) => {
    try {
      await deleteDoc(doc(db, "invoice", id));
      setShowConfirmationMessage(true); // عرض رسالة التأكيد
      fetchAllInvoices(); // Refresh the list
    } catch (e) {
      console.error("Error removing document: ", e);
      setError("حدث خطأ أثناء حذف الطلب.");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = allInvoices.filter(
      (invoice) =>
        invoice.invoiceNumber.toLowerCase().includes(searchTerm) ||
        invoice.employeeName.toLowerCase().includes(searchTerm)
    );
    setFilteredInvoices(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  const totalPages = Math.ceil(filteredInvoices.length / invoicesPerPage);
  const currentInvoices = filteredInvoices.slice(
    (currentPage - 1) * invoicesPerPage,
    currentPage * invoicesPerPage
  );

  useEffect(() => {
    fetchAllInvoices();
  }, []);

  // دالة لفتح نافذة كلمة السر
  const openPasswordModal = (type: string, id: string) => {
    setActionType(type);
    setSelectedInvoiceId(id);
    setIsPasswordModalOpen(true);
    setPasswordError(""); // إعادة تعيين رسالة الخطأ عند فتح النافذة
  };

  // دالة للتحقق من كلمة السر
  const handlePasswordSubmit = async () => {
    if (password === "1989") { // كلمة السر المطلوبة
      if (actionType === "delete" && selectedInvoiceId) {
        await removeInvoice(selectedInvoiceId);
      } else if (actionType === "execute" && selectedInvoiceId) {
        await markAsExecuted(selectedInvoiceId);
      }
      setIsPasswordModalOpen(false);
      setPassword(""); // إعادة تعيين كلمة السر
      setPasswordError(""); // إعادة تعيين رسالة الخطأ
    } else {
      setPasswordError("كلمة السر غير صحيحة"); // تعيين رسالة الخطأ
    }
  };

  // useEffect لإغلاق رسالة التأكيد تلقائيًا
  useEffect(() => {
    if (showConfirmationMessage) {
      const timer = setTimeout(() => {
        setShowConfirmationMessage(false);
      }, 3000);
      return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء الرسالة
    }
  }, [showConfirmationMessage]);

  return (
    <>
      <div className="space-y-8 rtl" id="invoice-content">
        <div className="flex justify-between items-center print:hidden">
          {!isPdfDownloading && (
            <>
              <InvoiceUploadButton
                onClick={triggerFileInput}
                onFileUpload={handleFileUpload} // تمرير الدالة هنا
                className="no-print"
                data-html2canvas-ignore="true"
                aria-label="Upload Invoice XML File"
              />

              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) =>
                  e.target.files && handleFileUpload(e.target.files[0])
                }
                accept=".xml"
                className="hidden"
              />
            </>
          )}
          {invoice && !isPdfDownloading && (
            <InvoicePrintButton
              onClick={handlePrint}
              className="no-print"
              data-html2canvas-ignore="true"
            />
          )}
          {invoice && (
            <InvoiceDownloadPDFButton
              onClick={handleDownloadPDF}
              className="no-print"
              data-html2canvas-ignore="true"
            >
              تنزيل وإرسال PDF
            </InvoiceDownloadPDFButton>
          )}
          {!isPdfDownloading && (
            <UploadButton className="no-print" data-html2canvas-ignore="true" />
          )}
        </div>
        {error && (
          <div className="text-red-500 text-center font-bold">{error}</div>
        )}
<Card
  dir="rtl"
  className="print:hidden no-print relative bg-white dark:bg-gray-900 shadow-lg rounded-lg transition-all duration-300"
  data-html2canvas-ignore
>
  <CardHeader className="border-b border-gray-200 dark:border-gray-700">
    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">
      طلب عرض سعر
    </CardTitle>
  </CardHeader>
  <CardContent>
    <Tabs defaultValue="new-request" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4 gap-4">
        <TabsTrigger
          value="new-request"
          className="flex items-center justify-center py-3 rounded-full border-2 border-blue-500 dark:border-blue-500 bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-200 shadow-md"
        >
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            طلب جديد
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="existing-request"
          className="flex items-center justify-center py-3 rounded-full border-2 border-blue-500 dark:border-blue-500 bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-700 transition duration-200 shadow-md"
        >
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            الطلبات الحالية
          </span>
          {filteredInvoices.length > 0 && (
            <div className="flex items-center text-blue-500 dark:text-blue-400 mx-2">
              <MessageCircleMore className="mr-1 h-4 w-4" />
              <span className="text-sm font-bold">
                {filteredInvoices.length}
              </span>
            </div>
          )}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="new-request">
        <div className="space-y-6 mt-4">
          <div>
            <label
              htmlFor="invoiceNumber"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-right"
            >
              رقم الفاتورة
            </label>
            <Input
              id="invoiceNumber"
              value={invoiceNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[0-9-]*$/.test(value)) {
                  setInvoiceNumber(value);
                }
              }}
              placeholder="أدخل رقم الفاتورة"
              className="text-right border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-200"
              pattern="[0-9-]*"
              title="يرجى إدخال أرقام فقط وعلامة -"
              required
            />
          </div>
          <div>
            <label
              htmlFor="employeeName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-right"
            >
              اسم الموظف
            </label>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full text-right dark:bg-gray-800 dark:text-gray-200"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                {employeeName || "اختر اسم الموظف"}
              </button>
              {isOpen && (
                <ul
                  dir="rtl"
                  className="absolute z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg w-full mt-1"
                  role="menu"
                  aria-label="Employee Selection"
                >
                  {employees.map((employee) => (
                    <li
                      key={employee.name}
                      onClick={() => {
                        setEmployeeName(employee.name);
                        setIsOpen(false);
                      }}
                      className="flex flex-row-reverse justify-between items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-right"
                      role="menuitem"
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setEmployeeName(employee.name);
                          setIsOpen(false);
                        }
                      }}
                    >
                      <span className="dark:text-gray-200">{employee.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                        ({employee.role})
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full flex items-center justify-center bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out px-4 py-2"
            aria-label="Submit Invoice Request"
          >
            {submitting ? (
              <>
                <Clock className="ml-2" /> جاري الإرسال...
              </>
            ) : (
              <>
                <Send className="ml-2" /> إرسال الطلب
              </>
            )}
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="existing-request">
        <h3 className="text-3xl font-bold text-right mb-8 text-gray-800 dark:text-gray-200">
          بحث عن الفواتير
        </h3>

        <Input
          type="text"
          placeholder="بحث عن رقم الفاتورة أو اسم الموظف"
          onChange={handleSearch}
          className="text-right mb-4 border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-200"
        />
        {currentInvoices.length > 0 ? (
          <div className="space-y-4 mt-4">
            {currentInvoices.map(
              (invoice) => (
                <Card
                  key={invoice.id}
                  className="p-4 hover:shadow-md transition-shadow duration-300 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex flex-col items-start">
                      {invoice.status === "pending" && (
                        <Button
                          onClick={() => openPasswordModal("execute", invoice.id)}
                          className="w-full flex items-center justify-center bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200 ease-in-out px-4 py-2"
                          aria-label={`Mark invoice ${invoice.invoiceNumber} as executed`}
                        >
                          <CheckCircle className="mr-1 h-4 w-4" /> تم التنفيذ
                        </Button>
                      )}
                      <Button
                        onClick={() => openPasswordModal("delete", invoice.id)}
                        variant="destructive"
                        className="w-full flex items-center justify-center bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-200 ease-in-out px-4 py-2"
                        aria-label={`Delete invoice ${invoice.invoiceNumber}`}
                      >
                        <Trash2 className="mr-1 h-4 w-4" /> حذف الطلب
                      </Button>
                    </div>
                    <div className="space-y-1 text-left">
                      <div className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        {invoice.employeeName}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {employees.find(
                          (e) => e.name === invoice.employeeName
                        )?.role || "غير محدد"}
                      </div>
                      <div className="text-sm">
                        <strong>رقم الطلب:</strong> {invoice.invoiceNumber}
                      </div>
                      <div className="text-sm">
                        <strong>الحالة:</strong>{" "}
                        {invoice.status === "pending" ? (
                          <span className="text-yellow-500 flex items-center justify-end">
                            <Clock className="h-4 w-4 ml-2" /> قيد الانتظار
                          </span>
                        ) : (
                          <span className="text-green-500 flex items-center justify-end">
                            <CheckCircle className="h-4 w-4 ml-2" /> تم التنفيذ
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
            لا توجد طلبات حالياً
          </div>
        )}
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            السابق
          </Button>
          <span className="text-gray-800 dark:text-gray-200">
            صفحة {currentPage} من {totalPages}
          </span>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            التالي
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  </CardContent>
</Card>


        {invoice && (
          <div id="invoice-details-section" className="print:p-0 print:m-0 space-y-12">
            {/* قسم التفاصيل */}
            <Card className="print:shadow-none print:border-none">
              <CardHeader>
                <h1 className="text-3xl font-bold text-green-600 mb-6 ">
                  تفاصيل الفاتورة
                </h1>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold ">
                        اسم العميل
                      </TableCell>
                      <TableCell>{invoice.details.customerName}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">التاريخ</TableCell>
                      <TableCell>{invoice.details.date}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">
                        رقم الحساب
                      </TableCell>
                      <TableCell>{invoice.details.accountNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">
                        نوع الحساب
                      </TableCell>
                      <TableCell>{invoice.details.accountType}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">
                        رقم الطلب
                      </TableCell>
                      <TableCell>{invoice.details.orderId}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* قسم المنتجات */}
            <Card className="print:shadow-none print:border-none print:break-before-page">
              <CardHeader>
                <h1 className="text-3xl font-bold text-green-600 mb-6 ">
                  المنتجات
                </h1>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-left">رقم الصنف</TableHead>
                      <TableHead className="text-left">التسلسل</TableHead>
                      <TableHead className="text-left">اسم الصنف</TableHead>
                      <TableHead className="text-left">الكمية</TableHead>
                      <TableHead className="text-left">سعر الوحدة</TableHead>
                      <TableHead className="text-left">الإجمالي</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoice.products.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.sequence}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.unitPrice} ريال</TableCell>
                        <TableCell>{product.total} ريال</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* قسم ملخص الطلب */}
            <Card className="print:shadow-none print:border-none">
              <CardHeader></CardHeader>
              <CardContent className="p-6 rounded-lg shadow-lg transition-all duration-300">
                <h2 className="text-2xl font-bold text-right mb-6 text-green-600 dark:text-green-600">
                  ملخص الطلب
                </h2>
                <Table className="w-full">
                  <TableBody>
                    <TableRow className="border-b dark:border-gray-600">
                      <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                        إجمالي الطلب
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {invoice.summary.totalOrder} ريال
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b dark:border-gray-600">
                      <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                        ضريبة القيمة المضافة
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {invoice.summary.tax} ريال
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b dark:border-gray-600">
                      <TableCell className="font-semibold text-gray-800 dark:text-gray-200">
                        الإجمالي النهائي
                      </TableCell>
                      <TableCell className="text-gray-700 dark:text-gray-300">
                        {invoice.summary.finalTotal} ريال
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 text-gray-600 dark:text-gray-400 text-center">
                  الإجمالي نصياً:{" "}
                  <span className="font-bold">
                    {invoice.summary.totalInWords}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* رسالة التأكيد بعد الحذف */}
        {showConfirmationMessage && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-300 scale-100 animate-fadeIn">
      <div className="flex items-center justify-center mb-4">
        <CheckCircle className="h-8 w-8 text-green-500 mr-3" /> {/* أيقونة الصح بحجم أكبر */}
        <h2 className="text-2xl font-semibold text-gray-800">تم الحذف بنجاح!</h2>
      </div>
      <p className="text-gray-600 text-center mb-6">تم حذف الطلب المحدد بنجاح.</p>
      <Button
        onClick={() => setShowConfirmationMessage(false)}
        className="bg-blue-600 text-white rounded-lg px-6 py-3 mx-auto block hover:bg-blue-700 transition transform hover:scale-105"
      >
        إغلاق
      </Button>
    </div>
  </div>
)}


{isPasswordModalOpen && (
  <div className="modal-backdrop flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">أدخل كلمة السر</h2>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="كلمة السر"
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <AnimatePresence>
        {passwordError && (
          <motion.p
            className="text-red-500 text-center mt-2"
            initial={{ opacity: 0, y: -10 }} // البداية
            animate={{ opacity: 1, y: 0 }} // الحركة عند الظهور
            exit={{ opacity: 0, y: -10 }} // الحركة عند الاختفاء
            transition={{ duration: 0.3 }} // مدة الحركة
          >
            {passwordError}
          </motion.p>
        )}
      </AnimatePresence>
      <div className="mt-6 flex justify-between">
        <Button 
          onClick={() => setIsPasswordModalOpen(false)} 
          className="bg-gray-200 text-gray-700 rounded-lg px-6 py-2 hover:bg-gray-300 transition"
        >
          إلغاء
        </Button>
        <Button 
          onClick={handlePasswordSubmit} 
          className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition"
        >
          تأكيد
        </Button>
      </div>
    </div>
  </div>
)}


        <AlertModal
          isOpen={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          message={alertMessage}
        />
      </div>
    </>
  );
}