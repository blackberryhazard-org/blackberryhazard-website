const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Desktop Full Screen Screenshot
  await page.screenshot({ path: 'screenshot_desktop.png' });

  // Scroll down to take screenshot of the other components
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.screenshot({ path: 'screenshot_desktop_2.png' });

  await page.evaluate(() => window.scrollBy(0, 800));
  await page.screenshot({ path: 'screenshot_desktop_3.png' });

  await browser.close();
  console.log('Screenshots taken.');
})();
