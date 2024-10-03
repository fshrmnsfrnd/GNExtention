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
  }else if (command === "UnSetItalic") {
    console.log("Alt + I erfolgreich erkannt.");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: UnSetItalic
      });
    });
  }else if (command === "UnSetUnderline") {
    console.log("Alt + U erfolgreich erkannt.");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: UnSetUnderline
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

function UnSetItalic() {
  const buttonItalic = document.getElementById('textToolbarItalicStyle');
  if (buttonItalic) {
    buttonItalic.click();
    console.log("Italic-Toggle ausgeführt.");
  } else {
    console.log("Italic nicht gefunden.");
  }
}

function UnSetUnderline() {
  const buttonUnderline = document.getElementById('textToolbarUnderlineStyle');
  if (buttonUnderline) {
    buttonUnderline.click();
    console.log("Underline-Toggle ausgeführt.");
  } else {
    console.log("Underline nicht gefunden.");
  }
}