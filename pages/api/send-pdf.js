// pages/api/send-pdf.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { pdfBlob } = req.body;

    try {
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
      const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;

      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('document', pdfBlob, 'invoice.pdf');

      await axios.post(telegramApiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      res.status(200).json({ message: 'PDF sent to Telegram successfully!' });
    } catch (error) {
      console.error('Error sending PDF to Telegram:', error);
      res.status(500).json({ error: 'Failed to send PDF to Telegram' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}