// pages/upload.tsx
'use client';
// pages/index.tsx

import Head from 'next/head';
import FileUpload from '@/components/FileUpload2';

const Home = () => {
    return (
        <div>
            <Head>
                <title>XML File Upload</title>
                <meta name="description" content="Upload and display XML data" />
            </Head>
            <main>
                <h1>Upload XML File</h1>
                <FileUpload />
            </main>
        </div>
    );
};

export default Home;