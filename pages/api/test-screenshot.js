// pages/test-screenshot.js

import { useState } from 'react';

export default function TestScreenshot() {
  const [url, setUrl] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/screenshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const blob = await response.blob();
        setImage(URL.createObjectURL(blob));
      } else {
        console.error('Failed to take screenshot');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Test Puppeteer Screenshot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <button type="submit">Take Screenshot</button>
      </form>
      {image && <img src={image} alt="Screenshot" />}
    </div>
  );
}