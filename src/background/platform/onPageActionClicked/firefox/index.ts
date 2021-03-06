browser.browserAction.onClicked.addListener(async () => {
  try {
    await browser.tabs.insertCSS({ file: './font.css', allFrames: true, runAt: 'document_start' });
  } catch (e) {
    console.warn('insert css failed', e);
  }
  try {
    await browser.tabs.executeScript({ file: './cssContentScript.js', allFrames: true });
    await browser.tabs.executeScript({ file: './contentScript.js', allFrames: true });
    await browser.tabs.executeScript({ file: './popup.js', allFrames: false });
  } catch (e) {
    console.warn('insert script failed', e);
  }
});
