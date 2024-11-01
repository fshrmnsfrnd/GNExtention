document.addEventListener('DOMContentLoaded', function(){
    // Finde die Eingabebox und den Preview-Bereich
    const markdownInput = document.getElementById('markdownInput');
    const previewArea = document.getElementById('preview');
    const convertbutton = document.getElementById('convert')

    function updatePreview() {
      const markdownText = markdownInput.value;
      const htmlContent = marked(markdownText);  // Verwende die marked.js Bibliothek
      previewArea.innerHTML = htmlContent;
    }
    
    // Event Listener für Eingaben im Textbereich
    markdownInput.addEventListener(convertbutton, updatePreview);
});