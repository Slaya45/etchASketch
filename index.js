
document.addEventListener("DOMContentLoaded", function(){
  generateChart(32);
  console.log(test)
})


function generateChart(size) {
    
      let board = document.querySelector("#board")

      board.style.background = "rgb(199, 199, 199)";
      board.style.gridTemplateColumns = `repeat(${size} 1fr)`;
      board.style.gridTemplateRows = `repeat(${size} 1fr)`;

      let numDivs = size * size;

      for (let i = 0; i < numDivs; i++) {

        let div = document.createElement("div");

        board.insertAdjacentElement("beforeend". div);
        
  
      div.addEventListener("mouseover", function(){
        this.style.background = "black";
        this.removeEventListener("mouseover", arguments.callee);
      })
    }
  }
  
  generateChart();

 