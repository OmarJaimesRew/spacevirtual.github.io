const puppeteer = require('puppeteer');
const path = require('path');

describe('A-Frame scene', () => {
  test('initializes without console errors', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const errors = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    page.on('pageerror', err => errors.push(err.message));

    const filePath = 'file://' + path.resolve(__dirname, '../aframe_colisiones/index.html');
    await page.goto(filePath);
    await page.waitForSelector('a-scene');
    await page.waitForTimeout(1000);
    await browser.close();

    expect(errors).toEqual([]);
  }, 15000);
});
