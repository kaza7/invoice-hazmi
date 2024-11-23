

'use client';
import React, { useState } from 'react';
import { parseString } from 'xml2js';
import * as XLSX from 'xlsx';
import { Header } from '@/components/header';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';

// دالة تنسيق الأرقام
const formatNumber = (num: string | number) => {
  if (!num) return '0';
  const number = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(number)) return '0';
  const roundedNum = Math.round(number * 100) / 100;
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(roundedNum);
};

// الواجهات الأساسية
interface BaseItem {
  ItemId: string;
  ItemName: string;
  [key: string]: any;
}

interface SummaryItem extends BaseItem {
  Site?: string;
  OpeningBalance: string;
  Inputs: string;      // Textbox31
  Outputs: string;     // Textbox34
  EndingBalance: string;
  FinancialValue: string; // Textbox40
}

interface DetailedItem extends BaseItem {
  TransactionType: string;
  TransactionDate: string;
  OpeningBalance: string;
  Receiving: string;
  Issue: string;
  EndingBalance: string;
  CostAmount: string;
}

interface MovementItem extends BaseItem {
  Warehouse: string;
  Date: string;
  InvoiceNo: string;
  ReceivedQty: string;
  IssuedQty: string;
  Amount: string;
  Balance: string;
}

// دالة مساعدة للحصول على معرف واسم الصنف
const getItemIdentifiers = (item: any) => {
  const itemId = item.$.ItemId3 || item.$.ItemId2 || item.$.ItemId || item.$.Textbox54 || '';
  const itemName = item.$.itemName3 || item.$.itemName2 || item.$.itemName || item.$.Textbox118 || '';
  return { itemId, itemName };
};

// دالة تحليل ملف الملخص
const parseSummaryXML = (xmlData: any): SummaryItem[] => {
  try {
    const items = xmlData.Report.Tablix1[0].ItemDimension_Collection[0].ItemDimension;
    return items.map((item: any) => {
      const { itemId, itemName } = getItemIdentifiers(item);
      
      return {
        ItemId: itemId,
        ItemName: itemName,
        Site: item.$.Site || '',
        OpeningBalance: item.$.OpeningBalance || '0',
        Inputs: item.$.Textbox31 || '0',
        Outputs: item.$.Textbox34 || '0',
        EndingBalance: item.$.EndingBalance || '0',
        FinancialValue: item.$.Textbox40 || '0'
      };
    });
  } catch (error) {
    console.error('Error parsing summary XML:', error);
    throw new Error('خطأ في تحليل ملف ملخص الحركة');
  }
};

const parseMovementXML = (xmlData: any): MovementItem[] => {
  try {
    const items = xmlData.Report.Table_1[0].ItemId_0_Collection[0].ItemId_0;
    return items.flatMap((item: any) => {
      const details = item.HeaderTxt_0_Collection[0].HeaderTxt_0[0].Detail_Collection[0].Detail;
      return details.map((detail: any) => ({
        ItemId: item.$.Textbox54 || '',
        ItemName: item.$.Textbox118 || '',
        Warehouse: item.$.Textbox118 || '',
        Date: detail.$.Textbox_46 || '',
        InvoiceNo: detail.$.Textbox_47 || '',
        ReceivedQty: detail.$.Textbox_50 || '0',
        IssuedQty: detail.$.Textbox_52 || '0',
        Amount: detail.$.Textbox_54 || '0',
        Balance: detail.$.Textbox_55 || '0'
      }));
    });
  } catch (error) {
    console.error('Error parsing movement XML:', error);
    throw new Error('خطأ في تحليل ملف حركة المخزون');
  }
};

const parseDetailedXML = (xmlData: any): DetailedItem[] => {
  try {
    const details = xmlData.Report.Tablix1[0].ItemDimension_Collection[0].ItemDimension.flatMap(
      (item: any) => item.Details_Collection[0].Details
    );
    return details.map((detail: any) => {
      const { itemId, itemName } = getItemIdentifiers(detail);
      
      return {
        ItemId: itemId,
        ItemName: itemName,
        TransactionType: detail.$.TransactionType1 || '',
        TransactionDate: detail.$.transactionDate || '',
        OpeningBalance: detail.$.OpeningBalance || '0',
        Receiving: detail.$.Recieving || '0',
        Issue: detail.$.Issue || '0',
        EndingBalance: detail.$.EndingBalance || '0',
        CostAmount: detail.$.CostAmount || '0'
      };
    });
  } catch (error) {
    console.error('Error parsing detailed XML:', error);
    throw new Error('خطأ في تحليل ملف الحركة التفصيلي');
  }
};

function App() {
  // State variables
  const [activeTab, setActiveTab] = useState('summary');
  const [data, setData] = useState<Array<SummaryItem | DetailedItem | MovementItem>>([]);
  const [summaryData, setSummaryData] = useState<{ 
    totalInputs: number; 
    totalOutputs: number; 
    totalOpeningBalance: number; 
    totalEndingBalance: number; 
    totalReceiving: number; 
    totalIssue: number; 
    totalEndingBalanceDetailed: number; 
    totalCostAmount: number; 
  }>({
    totalInputs: 0,
    totalOutputs: 0,
    totalOpeningBalance: 0,
    totalEndingBalance: 0,
    totalReceiving: 0,
    totalIssue: 0,
    totalEndingBalanceDetailed: 0,
    totalCostAmount: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Array<SummaryItem | DetailedItem | MovementItem>>([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 60;
  const [transactionDates, setTransactionDates] = useState<string[]>([]);

  const commonClasses = {
    card: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300",
    button: "flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105",
    input: "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent",
    table: "min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700",
    th: "px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 border-b border-gray-200 dark:border-gray-600",
    td: "px-6 py-4 whitespace-nowrap text-sm border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200",
    numberCell: "font-mono text-right",
  };

  // Event Handlers
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files?.[0];
    if (!file) return;
  
    setLoading(true);
    setError(null);
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const xmlContent = e.target?.result as string;
      parseString(xmlContent, (err, result) => {
        if (err) {
          setError('خطأ في قراءة الملف');
          setLoading(false);
          return;
        }
  
        try {
          let parsedData;
          let transactionDates: string[] = []; // مصفوفة لتخزين التواريخ
          switch (type) {
            case 'summary':
              parsedData = parseSummaryXML(result);
              // حسابات الملخص
              const totalInputs = parsedData.reduce((sum, item) => sum + parseFloat(item.Inputs || '0'), 0);
              const totalOutputs = parsedData.reduce((sum, item) => sum + parseFloat(item.Outputs || '0'), 0);
              const totalOpeningBalance = parsedData.reduce((sum, item) => sum + parseFloat(item.OpeningBalance || '0'), 0);
              const totalEndingBalance = parsedData.reduce((sum, item) => sum + parseFloat(item.EndingBalance || '0'), 0);
              setSummaryData({
                totalInputs,
                totalOutputs,
                totalOpeningBalance,
                totalEndingBalance,
                totalReceiving: 0,
                totalIssue: 0,
                totalEndingBalanceDetailed: 0,
                totalCostAmount: 0,
              });
              break;
            case 'detailed':
              parsedData = parseDetailedXML(result);
              transactionDates = parsedData.map(item => item.TransactionDate); // جمع التواريخ
              const totalReceiving = parsedData.reduce((sum, item) => sum + parseFloat(item.Receiving || '0'), 0);
              const totalIssue = parsedData.reduce((sum, item) => sum + parseFloat(item.Issue || '0'), 0);
              const totalEndingBalanceDetailed = parsedData.reduce((sum, item) => sum + parseFloat(item.EndingBalance || '0'), 0);
              const totalCostAmount = parsedData.reduce((sum, item) => sum + parseFloat(item.CostAmount || '0'), 0);
              setSummaryData(prev => ({
                ...prev,
                totalReceiving,
                totalIssue,
                totalEndingBalanceDetailed,
                totalCostAmount,
              }));
              break;
            case 'movement':
              parsedData = parseMovementXML(result);
              break;
            default:
              throw new Error('نوع ملف غير معروف');
          }
          setData(parsedData);
          setActiveTab(type);
          setCurrentPage(1);
          setSearchTerm('');
          setFilteredData([]);
  
          // عرض التواريخ في البطاقات
          const sortedDates = transactionDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
          setTransactionDates(sortedDates); // تخزين التواريخ المرتبة
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      });
    };
  
    reader.onerror = () => {
      setError('خطأ في قراءة الملف');
      setLoading(false);
    };
  
    reader.readAsText(file);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = data.filter((item) => {
      const searchableFields = Object.values(item).join(' ').toLowerCase();
      return searchableFields.includes(value.toLowerCase());
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const exportToExcel = () => {
    const dataToExport = searchTerm ? filteredData : data;
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `تقرير-${activeTab}-${new Date().toLocaleDateString()}.xlsx`);
  };

  const filterByDate = () => {
    if (!dateRange.start || !dateRange.end) return;
    
    const filtered = data.filter((item) => {
      const itemDate = new Date(
        activeTab === 'detailed' 
          ? (item as DetailedItem).TransactionDate 
          : (item as MovementItem).Date
      );
      return itemDate >= new Date(dateRange.start) && itemDate <= new Date(dateRange.end);
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Render Functions
  const renderTableHeaders = () => {
    switch (activeTab) {
      case 'summary':
        return (
          <tr>
            <th className={commonClasses.th}>رقم الصنف</th>
            <th className={commonClasses.th}>اسم الصنف</th>
            <th className={commonClasses.th}>الموقع</th>
            <th className={commonClasses.th}>الرصيد الافتتاحي</th>
            <th className={commonClasses.th}>المدخلات</th>
            <th className={commonClasses.th}>المخرجات</th>
            <th className={commonClasses.th}>الرصيد النهائي</th>
            <th className={commonClasses.th}>القيمة المالية</th>
          </tr>
        );
      case 'detailed':
        return (
          <tr>
            <th className={commonClasses.th}>رقم الصنف</th>
            <th className={commonClasses.th}>اسم الصنف</th>
            <th className={commonClasses.th}>نوع الحركة</th>
            <th className={commonClasses.th}>التاريخ</th>
            <th className={commonClasses.th}>الوارد</th>
            <th className={commonClasses.th}>المنصرف</th>
            <th className={commonClasses.th}>الرصيد النهائي</th>
            <th className={commonClasses.th}>التكلفة</th>
          </tr>
        );
      case 'movement':
        return (
          <tr>
            <th className={commonClasses.th}>رقم الصنف</th>
            <th className={commonClasses.th}>المستودع</th>
            <th className={commonClasses.th}>التاريخ</th>
            <th className={commonClasses.th}>رقم الفاتورة</th>
            <th className={commonClasses.th}>الكمية المستلمة</th>
            <th className={commonClasses.th}>الكمية الصادرة</th>
            <th className={commonClasses.th}>المبلغ</th>
            <th className={commonClasses.th}>الرصيد</th>
          </tr>
        );
      default:
        return null;
    }
  };

  const renderTableRows = () => {
    const dataToRender = searchTerm || dateRange.start ? filteredData : data;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = dataToRender.slice(startIndex, startIndex + itemsPerPage);

    return paginatedData.map((item, index) => {
      switch (activeTab) {
        case 'summary':
          const summaryItem = item as SummaryItem;
          return (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
              <td className={commonClasses.td}>{summaryItem.ItemId}</td>
              <td className={commonClasses.td}>{summaryItem.ItemName}</td>
              <td className={commonClasses.td}>{summaryItem.Site}</td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(summaryItem.OpeningBalance)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(summaryItem.Inputs)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(summaryItem.Outputs)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(summaryItem.EndingBalance)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(summaryItem.FinancialValue)}
              </td>
            </tr>
          );
        case 'detailed':
          const detailedItem = item as DetailedItem;
          return (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
              <td className={commonClasses.td}>{detailedItem.ItemId}</td>
              <td className={commonClasses.td}>{detailedItem.ItemName}</td>
              <td className={commonClasses.td}>{detailedItem.TransactionType}</td>
              <td className={commonClasses.td}>
                {new Date(detailedItem.TransactionDate).toLocaleDateString('en-US')}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(detailedItem.Receiving)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(detailedItem.Issue)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(detailedItem.EndingBalance)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(detailedItem.CostAmount)}
              </td>
            </tr>
          );
        case 'movement':
          const movementItem = item as MovementItem;
          return (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
              <td className={commonClasses.td}>{movementItem.ItemId}</td>
              <td className={commonClasses.td}>{movementItem.Warehouse}</td>
              <td className={commonClasses.td}>{movementItem.Date}</td>
              <td className={commonClasses.td}>{movementItem.InvoiceNo}</td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(movementItem.ReceivedQty)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(movementItem.IssuedQty)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(movementItem.Amount)}
              </td>
              <td className={`${commonClasses.td} ${commonClasses.numberCell}`}>
                {formatNumber(movementItem.Balance)}
              </td>
            </tr>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Navbar />
      <div className="container mx-auto p-6 rtl">
        {/* File Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={commonClasses.card}>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">ملخص حركة الأصناف</h3>
            <input
              type="file"
              accept=".xml"
              onChange={(e) => handleFileUpload(e, 'summary')}
              className="hidden"
              id="summary-file"
            />
            <label
              htmlFor="summary-file"
              className={`${commonClasses.button} bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 hover:border-blue-700`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              اختيار ملف الملخص
            </label>
          </div>

          <div className={commonClasses.card}>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">حركة الأصناف - تفصيلي</h3>
            <input
              type="file"
              accept=".xml"
              onChange={(e) => handleFileUpload(e, 'detailed')}
              className="hidden"
              id="detailed-file"
            />
            <label
              htmlFor="detailed-file"
              className={`${commonClasses.button} bg-green-600 text-white hover:bg-green-700 border border-green-600 hover:border-green-700`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              اختيار ملف التفاصيل
            </label>
          </div>

          <div className={commonClasses.card}>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">حركة المخزون</h3>
            <input
              type="file"
              accept=".xml"
              onChange={(e) => handleFileUpload(e, 'movement')}
              className="hidden"
              id="movement-file"
            />
            <label
              htmlFor="movement-file"
              className={`${commonClasses.button} bg-purple-600 text-white hover:bg-purple-700 border border-purple-600 hover:border-purple-700`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              اختيار ملف الحركة
            </label>
          </div>
        </div>

        {/* ملخص البيانات باستخدام البطاقات */}
        {data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {activeTab === 'summary' && (
              <>
                <Card
                  title="إجمالي المدخلات"
                  value={`${formatNumber(summaryData.totalInputs)}`}
                  dateRange={transactionDates.length > 0 ? `${transactionDates[0]} إلى ${transactionDates[transactionDates.length - 1]}` : 'لا توجد تواريخ'}
                  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
                />
                <Card
                  title="إجمالي المخرجات"
                  value={`${formatNumber(summaryData.totalOutputs)}`}
                  dateRange={transactionDates.length > 0 ? `${transactionDates[0]} إلى ${transactionDates[transactionDates.length - 1]}` : 'لا توجد تواريخ'}
                  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
                />
                <Card
                  title="إجمالي الرصيد الافتتاحي"
                  value={`${formatNumber(summaryData.totalOpeningBalance)}`}
                  dateRange={transactionDates.length > 0 ? `${transactionDates[0]} إلى ${transactionDates[transactionDates.length - 1]}` : 'لا توجد تواريخ'}
                  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
                />
                <Card
                  title="إجمالي الرصيد النهائي"
                  value={`${formatNumber(summaryData.totalEndingBalance)}`}
                  dateRange={transactionDates.length > 0 ? `${transactionDates[0]} إلى ${transactionDates[transactionDates.length - 1]}` : 'لا توجد تواريخ'}
                  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
                />
              </>
            )}
            {activeTab === 'detailed' && (
              <>
<Card
  title="إجمالي الوارد"
  value={`${formatNumber(summaryData.totalReceiving)}`}
  dateRange={transactionDates.length > 0 ? `${new Date(transactionDates[0]).toLocaleDateString('en-US')} إلى ${new Date(transactionDates[transactionDates.length - 1]).toLocaleDateString('en-US')}` : 'لا توجد تواريخ'}
  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
/>
<Card
  title="إجمالي المنصرف"
  value={`${formatNumber(summaryData.totalIssue)}`}
  dateRange={transactionDates.length > 0 ? `${new Date(transactionDates[0]).toLocaleDateString('en-US')} إلى ${new Date(transactionDates[transactionDates.length - 1]).toLocaleDateString('en-US')}` : 'لا توجد تواريخ'}
  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
/>
<Card
  title="إجمالي الرصيد النهائي"
  value={`${formatNumber(summaryData.totalEndingBalanceDetailed)}`}
  dateRange={transactionDates.length > 0 ? `${new Date(transactionDates[0]).toLocaleDateString('en-US')} إلى ${new Date(transactionDates[transactionDates.length - 1]).toLocaleDateString('en-US')}` : 'لا توجد تواريخ'}
  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
/>
<Card
  title="إجمالي التكلفة"
  value={`${formatNumber(summaryData.totalCostAmount)}`}
  dateRange={transactionDates.length > 0 ? `${new Date(transactionDates[0]).toLocaleDateString('en-US')} إلى ${new Date(transactionDates[transactionDates.length - 1]).toLocaleDateString('en-US')}` : 'لا توجد تواريخ'}
  icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>}
/>
              </>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">جاري معالجة الملف...</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 dark:bg-red-800 border-r-4 border-red-500 dark:border-red-600 p-4 mb-6 rounded-lg">
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* Data Table */}
        {data.length > 0 && (
          <div className="overflow-x-auto">
            <table className={commonClasses.table}>
              <thead>{renderTableHeaders()}</thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {renderTableRows()}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {data.length > itemsPerPage && (
          <div className="mt-6 flex justify-center">
            <nav className="flex items-center space-x-2 space-x-reverse">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`${commonClasses.button} ${
                  currentPage === 1
                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                السابق
              </button>
              <span className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                الصفحة {currentPage} من{' '}
                {Math.ceil((searchTerm ? filteredData.length : data.length) / itemsPerPage)}
              </span>
              <button
                onClick={() =>
                  setCurrentPage(
                    Math.min(
                      Math.ceil((searchTerm ? filteredData.length : data.length) / itemsPerPage),
                      currentPage + 1
                    )
                  )
                }
                disabled={
                  currentPage ===
                  Math.ceil((searchTerm ? filteredData.length : data.length) / itemsPerPage)
                }
                className={`${commonClasses.button} ${
                  currentPage ===
                  Math.ceil((searchTerm ? filteredData.length : data.length) / itemsPerPage)
                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                التالي
              </button>
            </nav>
          </div>
        )}

        {/* No Data Message */}
        {!loading && !error && data.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">لا توجد بيانات</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">ابدأ بتحميل ملف XML للعرض.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;