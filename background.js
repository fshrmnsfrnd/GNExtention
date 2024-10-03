console.log("Background . js läuft");

function UnSetBold() {
  document.getElementById('textToolbarBoldStyle').click();
}

chrome.commands.onCommand.addListener((command) => {
    if (command === "UnSetBold") {
      console.log("Alt + B successful.");
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: UnSetBold()
        });
      });
    }
  });
  

  