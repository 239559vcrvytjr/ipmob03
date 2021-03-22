const blockButton = document.getElementById("blockButton");
const blockSource = document.getElementById("blockSource");

function generateBlock() {
  const block = document.createElement("div");
  block.className = "block";
  blockSource.appendChild(block);
}

blockButton.addEventListener("click", generateBlock);
