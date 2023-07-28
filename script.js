let numberGridBlocks = 0;

document.addEventListener("DOMContentLoaded", function() {
  generateChart(numberGridBlocks);
});

// Changes the size of the grid according to the options listed
function changeGridSize(size) {
  numberGridBlocks = size;
  clearBoard();
  generateChart(numberGridBlocks);
}

// Remove all existing grid blocks from the board
function clearBoard() {
  let gridBlock = document.querySelectorAll("#board > div");
  gridBlock.forEach((div) => {
    div.remove();
  });
}

//Generates a chart/grid inside the main container
function generateChart(size) {
  let board = document.querySelector("#board");

  board.style.background = "rgb(255, 255, 255)";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    board.insertAdjacentElement("beforeend", div);

    // Add mouseover event listener to change color on mouseover
    div.addEventListener("mouseover", function() {
      let colorInput = document.querySelector("#color");
      div.style.background = colorInput.value;
    });
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function gridDropdownList() {
  document.getElementById("myGridDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

