// components/FileUpload.tsx
import React, { useState } from 'react';
import { parseStringPromise } from 'xml2js';

const FileUpload: React.FC<{ onDataLoaded: (data: any) => void }> = ({ onDataLoaded }) => {
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const xmlText = e.target?.result as string;
                    const result = await parseStringPromise(xmlText);
                    onDataLoaded(result);
                } catch (err) {
                    setError('Error parsing XML file');
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <input type="file" accept=".xml" onChange={handleFileChange} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default FileUpload;