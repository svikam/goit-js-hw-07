function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesContainer = document.querySelector('#boxes');
function createBoxes(amount) {
    const boxSize = 30;
    boxesContainer.innerHTML = '';
    for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
const inputElement = document.querySelector('#controls input');
const createButton = document.querySelector('#controls [data-create]');
const destroyButton = document.querySelector('#controls [data-destroy]');
createButton.addEventListener('click', () => {
  const amount = Number(inputElement.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = '';
  }
}) 
destroyButton.addEventListener('click', () => {
  destroyBoxes();
})
