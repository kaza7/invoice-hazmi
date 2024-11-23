// app/api/send-pdf/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  const { pdfBlob } = await req.json();

  try {
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    const telegramApiUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendDocument`;

    const formData = new FormData();
    if (chatId) {
      formData.append('chat_id', chatId);
    } else {
      throw new Error('Telegram chat ID is not defined');
    }
    formData.append('document', pdfBlob, 'invoice.pdf');

    await axios.post(telegramApiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return NextResponse.json({ message: 'PDF sent to Telegram successfully!' });
  } catch (error) {
    console.error('Error sending PDF to Telegram:', error);
    return NextResponse.json({ error: 'Failed to send PDF to Telegram' }, { status: 500 });
  }
}