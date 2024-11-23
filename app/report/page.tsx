// pages/upload.tsx
'use client';
import { useState } from 'react';
import { parseStringPromise } from 'xml2js';

import Image from 'next/image';





interface Transaction {
    ItemId2: string;
    itemName2: string;
    TransactionType1: string;
    PackingSlipId1: string;
    transactionDate: string;
    OpeningBalance: number;
    Recieving: number;
    Issue: number;
    EndingBalance: number;
    CostAmount: number;
}

const UploadPage = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            const xml = e.target?.result as string;
            try {
                const result = await parseStringPromise(xml);
                const detailsCollection = result.Report.Tablix1[0].ItemDimension_Collection[0].ItemDimension[0].Details_Collection[0].Details;

                const parsedTransactions: Transaction[] = detailsCollection.map((detail: any) => ({
                    ItemId2: detail.$.ItemId2,
                    itemName2: detail.$.itemName2,
                    TransactionType1: detail.$.TransactionType1,
                    PackingSlipId1: detail.$.PackingSlipId1,
                    transactionDate: detail.$.transactionDate,
                    OpeningBalance: parseFloat(detail.$.OpeningBalance),
                    Recieving: parseFloat(detail.$.Recieving),
                    Issue: parseFloat(detail.$.Issue),
                    EndingBalance: parseFloat(detail.$.EndingBalance),
                    CostAmount: parseFloat(detail.$.CostAmount),
                }));

                setTransactions(parsedTransactions);
                setError(null);
            } catch (err) {
                setError('Failed to parse XML file.');
            }
        };
        reader.readAsText(file);
    };

    return (

        
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload XML File</h1>
            <input type="file" accept=".xml" onChange={handleFileChange} />
            {error && <p className="text-red-500">{error}</p>}
            {transactions.length > 0 && (
                <table className="min-w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Item ID</th>
                            <th className="border border-gray-300 p-2">Item Name</th>
                            <th className="border border-gray-300 p-2">Transaction Type</th>
                            <th className="border border-gray-300 p-2">Packing Slip ID</th>
                            <th className="border border-gray-300 p-2">Transaction Date</th>
                            <th className="border border-gray-300 p-2">Opening Balance</th>
                            <th className="border border-gray-300 p-2">Receiving</th>
                            <th className="border border-gray-300 p-2">Issue</th>
                            <th className="border border-gray-300 p-2">Ending Balance</th>
                            <th className="border border-gray-300 p-2">Cost Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{transaction.ItemId2}</td>
                                <td className="border border-gray-300 p-2">{transaction.itemName2}</td>
                                <td className="border border-gray-300 p-2">{transaction.TransactionType1}</td>
                                <td className="border border-gray-300 p-2">{transaction.PackingSlipId1}</td>
                                <td className="border border-gray-300 p-2">{transaction.transactionDate}</td>
                                <td className="border border-gray-300 p-2">{transaction.OpeningBalance}</td>
                                <td className="border border-gray-300 p-2">{transaction.Recieving}</td>
                                <td className="border border-gray-300 p-2">{transaction.Issue}</td>
                                <td className="border border-gray-300 p-2">{transaction.EndingBalance}</td>
                                <td className="border border-gray-300 p-2">{transaction.CostAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UploadPage;