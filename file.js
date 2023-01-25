const editor = document.getElementById("editor");

editor.addEventListener("keydown", function() {
  console.log("Key pressed in editor");
});

function saveContent() {
    localStorage.setItem("content", editor.value);
  }
  
  function loadContent() {
    editor.value = localStorage.getItem("content");
  }
  