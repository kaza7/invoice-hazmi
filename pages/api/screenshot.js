import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { url } = req.body;

      // Launch Puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // Navigate to the URL
      await page.goto(url, { waitUntil: 'networkidle2' });

      // Take a screenshot
      const screenshot = await page.screenshot({ fullPage: true });

      // Close the browser
      await browser.close();

      // Send the screenshot as a response
      res.setHeader('Content-Type', 'image/png');
      res.send(screenshot);
    } catch (error) {
      console.error('Error taking screenshot:', error);
      res.status(500).json({ error: 'Failed to take screenshot' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}