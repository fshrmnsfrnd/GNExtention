console.log("Background.js läuft");






chrome.commands.onCommand.addListener((command) => {
  console.log("Command successful.");

  if (command === "UnSetBold") {
    console.log("Alt + B erfolgreich erkannt.");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: UnSetBold
      });
    });
  }
});

function UnSetBold() {
  const buttonBold = document.getElementById('textToolbarBoldStyle');
  if (buttonBold) {
    buttonBold.click();
    console.log("Bold-Toggle ausgeführt.");
  } else {
    console.log("Button nicht gefunden.");
  }
}

