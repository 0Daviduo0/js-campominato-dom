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

                    if (this.classList.contains("bomb")){
                        this.classList.add("esplosa");
                        

                        
                        const bombe = document.querySelectorAll('.bomb');
                        console.log("queste sono le bombe", bombe)
                        
                            for (const bomb of bombe) {
                            bomb.classList.add('esplosa');
                            }

                        let punteggio = document.querySelectorAll('.selezionata').length - 1;
                        console.log("hai totalizzato:" + punteggio + "punti");

                        alert(`hai totalizzato: ${punteggio} punti`);
                        window.location.reload();

                    }

                })

                gridItem.className = "grid_item";
                gridItem.textContent += i;

                

                contenitoreGriglia.appendChild(gridItem)

            }

            let celleArray = document.getElementsByClassName("grid_item");
            console.log(celleArray);

            for (let j = 1; j <= celleArray.length; j++){
            celleArray.value = [j]
            }
            
            for (let i = 1; i <= 16; i++){
            var randomItem = celleArray[Math.floor(Math.random()* celleArray.length)];
            var text  = randomItem.textContent || randomItem.innerText;
            console.log(text);

            randomItem.classList.add("bomb");
            console.log(randomItem);
            
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

                    if (this.classList.contains("bomb")){
                        this.classList.add("esplosa");
                        

                        
                        const bombe = document.querySelectorAll('.bomb');
                        console.log("queste sono le bombe", bombe)
                        
                            for (const bomb of bombe) {
                            bomb.classList.add('esplosa');
                            }

                            let punteggio = document.querySelectorAll('.selezionata').length - 1;
                        console.log("hai totalizzato:" + punteggio + "punti");

                        alert(`hai totalizzato: ${punteggio} punti`);
                        window.location.reload();
 
                    }

                })
                
                gridItem.className = "grid_item";
                gridItem.textContent += i;

                

                contenitoreGriglia.appendChild(gridItem)

            }

            let celleArray = document.getElementsByClassName("grid_item");
            console.log(celleArray);

            for (let j = 1; j <= celleArray.length; j++){
            celleArray.value = [j]
            }
            
            for (let i = 1; i <= 16; i++){
            var randomItem = celleArray[Math.floor(Math.random()* celleArray.length)];
            var text  = randomItem.textContent || randomItem.innerText;
            console.log(text);

            randomItem.classList.add("bomb");
            console.log(randomItem);
            
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

                    if (this.classList.contains("bomb")){
                        this.classList.add("esplosa");
                        

                        
                        const bombe = document.querySelectorAll('.bomb');
                        console.log("queste sono le bombe", bombe)
                        
                            for (const bomb of bombe) {
                            bomb.classList.add('esplosa');
                            }

                            let punteggio = document.querySelectorAll('.selezionata').length - 1;
                        console.log("hai totalizzato:" + punteggio + "punti");

                        alert(`hai totalizzato: ${punteggio} punti`);
                        window.location.reload();

                    }

                })

                gridItem.className = "grid_item";
                gridItem.textContent += i;

                contenitoreGriglia.appendChild(gridItem)

            }

            let celleArray = document.getElementsByClassName("grid_item");
            console.log(celleArray);

            for (let j = 1; j <= celleArray.length; j++){
            celleArray.value = [j]
            }
            
            for (let i = 1; i <= 16; i++){
            var randomItem = celleArray[Math.floor(Math.random()* celleArray.length)];
            var text  = randomItem.textContent || randomItem.innerText;
            console.log(text);

            randomItem.classList.add("bomb");
            console.log(randomItem);
            
            }
            
    }

})





