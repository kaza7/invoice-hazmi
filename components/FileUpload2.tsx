// components/FileUpload.tsx

import { useState } from 'react';

const FileUpload = () => {
    const [data, setData] = useState<any[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const xmlString = e.target?.result as string;
                const parsedData = parseXML(xmlString);
                setData(parsedData);
            };
            reader.readAsText(file);
        }
    };

    const parseXML = (xmlString: string) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const details: any[] = [];

        const detailNodes = xmlDoc.getElementsByTagName("Detail");
        for (let i = 0; i < detailNodes.length; i++) {
            const detailNode = detailNodes[i];
            const detail = {
                date: detailNode.getAttribute("Textbox_46"),
                invoiceNumber: detailNode.getAttribute("Textbox_47"),
                quantityReceived: parseFloat(detailNode.getAttribute("Textbox_50") || "0"),
                costIncurred: parseFloat(detailNode.getAttribute("Textbox_51") || "0"),
                quantityIssued: parseFloat(detailNode.getAttribute("Textbox_52") || "0"),
                costIssued: parseFloat(detailNode.getAttribute("Textbox_53") || "0"),
                balanceQuantity: parseFloat(detailNode.getAttribute("Textbox_54") || "0"),
                balanceCost: parseFloat(detailNode.getAttribute("Textbox_55") || "0"),
            };
            details.push(detail);
        }
        return details;
    };

    return (
        <div>
            <input type="file" accept=".xml" onChange={handleFileChange} />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Invoice Number</th>
                        <th>Quantity Received</th>
                        <th>Cost Incurred</th>
                        <th>Quantity Issued</th>
                        <th>Cost Issued</th>
                        <th>Balance Quantity</th>
                        <th>Balance Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((detail, index) => (
                        <tr key={index}>
                            <td>{detail.date}</td>
                            <td>{detail.invoiceNumber}</td>
                            <td>{detail.quantityReceived}</td>
                            <td>{detail.costIncurred}</td>
                            <td>{detail.quantityIssued}</td>
                            <td>{detail.costIssued}</td>
                            <td>{detail.balanceQuantity}</td>
                            <td>{detail.balanceCost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileUpload;