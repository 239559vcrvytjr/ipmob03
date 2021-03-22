const blockButton = document.getElementById("blockButton");
const blockSource = document.getElementById("blockSource");

let block;

function generateBlock() {
  if (block) blockSource.removeChild(block);

  block = document.createElement("div");
  block.className = "block";
  block.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  blockSource.appendChild(block);
}

blockButton.addEventListener("click", generateBlock);
