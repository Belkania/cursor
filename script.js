const mainBox = document.getElementById("container");
const SQUARES = 500;

const createBoard = () => {
  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    mainBox.appendChild(square);
  }
};

mainBox.addEventListener("mousemove", (e) => {
  let squares = mainBox.children;
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  for (let i = 0; i < squares.length; i++) {
    let square = squares[i].getBoundingClientRect();
    const x = square.left;
    const y = square.top;

    if (mouseX > x && mouseX < x + 16 && mouseY > y && mouseY < y + 16) {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);

      squares[i].style.backgroundColor = `rgb(${r},${g},${b})`;

      setTimeout(() => {
        squares[i].style.backgroundColor = `rgb(29,29,29)`;
      }, 500);
    }
  }
});

createBoard();

// const mainBox = document.getElementById("container");
// const SQUARES = 500;

// const createBoard = () => {
//   for (let i = 0; i < SQUARES; i++) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     square.addEventListener("mouseenter", (e) => {
//       let r = Math.floor(Math.random() * 255);
//       let g = Math.floor(Math.random() * 255);
//       let b = Math.floor(Math.random() * 255);

//       square.style.backgroundColor = `rgb(${r},${g},${b})`;

//       setTimeout(() => {
//         square.style.backgroundColor = `rgb(29,29,29)`;
//       }, 500);
//     });

//     mainBox.appendChild(square);
//   }
// };

// createBoard();
