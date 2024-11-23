   // components/ItemSummary.tsx
   import React from 'react';

   interface ItemSummaryProps {
       data: {
           itemId: string;
           itemName: string;
           openingBalance: number;
           receiving: number;
           issue: number;
           endingBalance: number;
           costAmount: number;
       }[];
   }

   const ItemSummary: React.FC<ItemSummaryProps> = ({ data }) => {
       return (
           <div>
               <h2>ملخص الأصناف</h2>
               <table>
                   <thead>
                       <tr>
                           <th>رقم الصنف</th>
                           <th>اسم الصنف</th>
                           <th>الرصيد الافتتاحي</th>
                           <th>الكمية المستلمة</th>
                           <th>الكمية الصادرة</th>
                           <th>الرصيد النهائي</th>
                           <th>تكلفة الصنف</th>
                       </tr>
                   </thead>
                   <tbody>
                       {data.map((item) => (
                           <tr key={item.itemId}>
                               <td>{item.itemId}</td>
                               <td>{item.itemName}</td>
                               <td>{item.openingBalance}</td>
                               <td>{item.receiving}</td>
                               <td>{item.issue}</td>
                               <td>{item.endingBalance}</td>
                               <td>{item.costAmount}</td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
       );
   };

   export default ItemSummary;