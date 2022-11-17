const contenitoreGriglia = document.getElementById("grid_container");
console.log("Contenitore trovato!", contenitoreGriglia)

let difficoltaSelezionata = document.getElementById("difficulty");

let playButton = document.getElementById("play_button");
let isPlayButtonClicked = false;

playButton.addEventListener("click", function generaGriglia() {
    console.log(difficoltaSelezionata.value);
    console.log("pulsante premuto")
    isPlayButtonClicked = true;


    if (difficoltaSelezionata.value == "facile"){

        const elementiGriglia = document.querySelectorAll('.grid_item');

            elementiGriglia.forEach(grid_item => {
                grid_item.remove(elementiGriglia);
            });

            contenitoreGriglia.classList.remove("griglia_normale");
            contenitoreGriglia.classList.remove("griglia_difficile");
            contenitoreGriglia.classList.add("griglia_facile");

            for (let i = 1; i <= 100; i++){
                
                var gridItem = document.createElement('div');


                gridItem.addEventListener("click", function selezionata(){
                    this.classList.toggle("selezionata")
                    console.log("cella selezionata:", i)
                })

                gridItem.className = "grid_item";
                gridItem.textContent += i;

                

                contenitoreGriglia.appendChild(gridItem)

            }
        

    }
    else if(difficoltaSelezionata.value == "normale"){
        
        const elementiGriglia = document.querySelectorAll('.grid_item');

            elementiGriglia.forEach(grid_item => {
                grid_item.remove(elementiGriglia);
            });

            contenitoreGriglia.classList.remove("griglia_facile");
            contenitoreGriglia.classList.remove("griglia_difficile");
            contenitoreGriglia.classList.add("griglia_normale");

            for (let i = 1; i <= 81; i++){
                
                var gridItem = document.createElement('div');

                gridItem.addEventListener("click", function selezionata(){
                    this.classList.toggle("selezionata")
                    console.log("cella selezionata:", i)
                })
                
                gridItem.className = "grid_item";
                gridItem.textContent += i;

                

                contenitoreGriglia.appendChild(gridItem)
            }
        
    }
    else if(difficoltaSelezionata.value == "difficile"){

        const elementiGriglia = document.querySelectorAll('.grid_item');

            elementiGriglia.forEach(grid_item => {
                grid_item.remove(elementiGriglia);
            });

            contenitoreGriglia.classList.remove("griglia_normale");
            contenitoreGriglia.classList.remove("griglia_facile");
            contenitoreGriglia.classList.add("griglia_difficile");
        
            for (let i = 1; i <= 49; i++){
                
                var gridItem = document.createElement('div');

                gridItem.addEventListener("click", function selezionata(){
                    this.classList.toggle("selezionata")
                    console.log("cella selezionata:", i)
                })

                gridItem.className = "grid_item";
                gridItem.textContent += i;

                contenitoreGriglia.appendChild(gridItem)

            }
        
    }

})





