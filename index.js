
function generateChart() {
    for (let i = 0; i < 1024; i++) {
      let div = document.createElement("div");
      document.getElementById("mainContainer").appendChild(div);

      div.style.width = "2.5vh";
      div.style.height = "2.5vh";
      div.style.background = "rgb(199, 199, 199)";

      div.addEventListener("mouseover", function(){
        this.style.background = "black";
        this.removeEventListener("mouseover", arguments.callee);
      })
    }
  }
  
  generateChart();

 