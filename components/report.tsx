// pages/report.tsx
'use client';
import { useState } from 'react';
import { parseStringPromise } from 'xml2js';
import styles from '../styles/report.module.css';
import FileUpload from '@/components/FileUpload';

interface ItemDimension {
    ItemId2: string; // تغيير الاسم ليتناسب مع XML
    itemName2: string; // تغيير الاسم ليتناسب مع XML
    Site: string;
    OpeningBalance: number;
    EndingBalance: number;
}

const Report = () => {
    const [data, setData] = useState<ItemDimension[]>([]);

    const handleDataLoaded = async (result: any) => {
      console.log(result); // طباعة الهيكل الكامل للنتيجة
      const items = result.Report.Tablix1[0].ItemDimension_Collection[0].ItemDimension.map((item: any) => {
          // تحقق من وجود Details_Collection و Details
          const details = item.Details_Collection && item.Details_Collection[0] && item.Details_Collection[0].Details;
          return {
              ItemId3: details && details[0] ? details[0].ItemId2[0] : '', // استخدم ItemId2
              itemName3: details && details[0] ? details[0].itemName2[0] : '', // استخدم itemName2
              Site: item.Site ? item.Site[0] : '', // تحقق من وجود Site
              OpeningBalance: details && details[0] ? parseFloat(details[0].OpeningBalance[0]) : 0, // استخدم OpeningBalance من Details
              EndingBalance: details && details[0] ? parseFloat(details[0].EndingBalance[0]) : 0, // استخدم EndingBalance من Details
          };
      });
      setData(items);
  };
    return (
        <div>
            <h1>رفع ملف XML وعرض التقارير</h1>
            <FileUpload onDataLoaded={handleDataLoaded} />
            {data.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>رقم الصنف</th>
                            <th>اسم الصنف</th>
                            <th>الموقع</th>
                            <th>الرصيد الافتتاحي</th>
                            <th>الرصيد النهائي</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.ItemId2}>
                                <td>{item.ItemId2}</td>
                                <td>{item.itemName2}</td>
                                <td>{item.Site}</td>
                                <td>{item.OpeningBalance}</td>
                                <td>{item.EndingBalance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Report;