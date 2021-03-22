const blockButton = document.getElementById("blockButton");
const blockSource = document.getElementById("blockSource");
const blockTarget = document.getElementById("blockTarget");

let block;

blockTarget.addEventListener("drop", (e) => {
  // I haven't found a way to pass DOM elements using DataTransfer
  // so here's the workaround

  e.preventDefault();

  const draggedBlock = document.getElementById("blockCandidate");
  draggedBlock.id = null;

  blockSource.removeChild(draggedBlock);
  blockTarget.appendChild(draggedBlock);

  block = null;
});

blockTarget.addEventListener("dragover", (e) => {
  e.preventDefault();
});

blockButton.addEventListener("click", () => {
  if (block) blockSource.removeChild(block);

  block = document.createElement("div");
  block.className = "block";
  block.draggable = true;
  block.id = "blockCandidate";
  block.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  blockSource.appendChild(block);
});
