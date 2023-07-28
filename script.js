
document.addEventListener("DOMContentLoaded", function() {
  generateChart(numberGridBlocks);
});


let numberGridBlocks = 0;

//Changes the size of the grid according to the options listed
function changeGridSize(size) {
  numberGridBlocks = size;
  clearBoard()
  generateChart(numberGridBlocks);
}

// Remove all existing grid blocks from the board
function clearBoard(){
let gridBlock = document.querySelectorAll("#board > div");

gridBlock.forEach((div) => {
  div.remove();
})};


//Generates a chart/grid inside the main container
function generateChart(size) {
  let board = document.querySelector("#board");

  board.style.background = "rgb(199, 199, 199)";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    board.insertAdjacentElement("beforeend", div);
  }


  
//Selects all of the grid blocks and tracks a mouseover, when activated it changes the color and removes the listener
  let gridBlocks = document.querySelectorAll("#board > div");
  gridBlocks.forEach((div) => {
    div.addEventListener("mouseover", function() {
      this.style.background = "rgb( 0, 0, 0)";
      this.removeEventListener("mouseover", arguments.callee);
    });
  });
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

