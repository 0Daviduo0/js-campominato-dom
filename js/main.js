// Definisco il contenitore principale
const contenitoreGriglia = document.getElementById("grid_container");
console.log("Contenitore trovato!", contenitoreGriglia)

// Definisco il dropdown della difficoltà
let difficoltaSelezionata = document.getElementById("difficulty");

// Definisco il pulsante per giocare
let playButton = document.getElementById("play_button");

// Aggiungo un azione al click del tasto play
playButton.addEventListener("click", function generaGriglia() {
    console.log(difficoltaSelezionata.value);
    console.log("pulsante premuto")

// Se la difficoltà è facile allora...
    if (difficoltaSelezionata.value == "facile"){
// *se prima si era fatta una partita, riga 19 fino a riga 22 si occupano di rimuovere le caselle*
        const elementiGriglia = document.querySelectorAll('.grid_item');

            elementiGriglia.forEach(grid_item => {
                grid_item.remove(elementiGriglia);
            });
// *Questo si occupa invece di rimuovere la griglia della partita vecchia aggiungendo quella giusta*
            contenitoreGriglia.classList.remove("griglia_normale");
            contenitoreGriglia.classList.remove("griglia_difficile");
            contenitoreGriglia.classList.add("griglia_facile");
// loop per generare 100 caselle
            for (let i = 1; i <= 100; i++){
// per 100 volte creerà l'elemento "div"
                var gridItem = document.createElement('div');
// aggiungo poi un EventListener per il click dell'elemento della griglia, che rende l'elemento selezionato tramite la classe apposita e stampo il suo numero nella console
                gridItem.addEventListener("click", function selezionata(){
                    this.classList.add("selezionata")
                    console.log("cella selezionata:", i)
// Ma, se la cella selezionata risulta avere la classe bomb allora questa "esplode" 
                    if (this.classList.contains("bomb")){
                        this.classList.add("esplosa");
// Vengono poi selezionate tutte le classi bomba e vengono poi successivamente mostrate tramite l'applicazione a tutte della classe "esplosa", vengono inoltre stampate tutte le bombe nella console
                        const bombe = document.querySelectorAll('.bomb');
                        console.log("queste sono le bombe", bombe)
                        
                            for (const bomb of bombe) {
                            bomb.classList.add('esplosa');
                            }
// viene calcolato il punteggio tramite il conteggio delle celle con la classe selezionata, togliendo 1 per la bomba selezionata alla fine, in modo che non venga considerata nel punteggio
                        let punteggio = document.querySelectorAll('.selezionata').length - 1;
                        console.log("hai totalizzato:" + punteggio + "punti");
// Viene mostrato il punteggio e viene applicata una classe a tutte le celle in modo che queste non possano più essere cliccate
                        alert(`hai totalizzato: ${punteggio} punti`);
                        // window.location.reload();
                        let allCells = document.getElementsByClassName('grid_item');
                        console.log(allCells);
                        for (let unselectable of allCells) {
                            unselectable.classList.add('no_click');
                        }
            
                    }

                })
// Questi comandi servono a fare in modo che ai div creati nella riga 31 venga applicata la classe del "grid_item", come testo interno venga stampato il numero i che li sta generando e vengano anche messi come figli del contenitore principale
                gridItem.className = "grid_item";
                gridItem.textContent += i;
                contenitoreGriglia.appendChild(gridItem)

            }
// Questi comandi servono a generare le bombe, il primo prende tutti gli alementi griglia
            let celleArray = document.getElementsByClassName("grid_item");
            console.log(celleArray);
// Questo gli appllica un valore tramite un loop della lunghezza degli elementi della griglia
            for (let j = 1; j <= celleArray.length; j++){
            celleArray.value = [j]
            }
// Questo genera 16 "bombe", prendendo div casualmente, creando un gruppo di elementi e applicando a tutti la classe "bomb"
            for (let i = 1; i <= 16; i++){
            var randomItem = celleArray[Math.floor(Math.random()* celleArray.length)];
            var text  = randomItem.textContent || randomItem.innerText;
            console.log(text);
            randomItem.classList.add("bomb");
// Infine, stampa il gruppo delle bombe
            console.log(randomItem);
            
            }
        

    }       // Se la difficoltà è normale allora...
    else if(difficoltaSelezionata.value == "normale"){
// *se prima si era fatta una partita, riga 89 fino a riga 92 si occupano di rimuovere le caselle*
        const elementiGriglia = document.querySelectorAll('.grid_item');

            elementiGriglia.forEach(grid_item => {
                grid_item.remove(elementiGriglia);
            });
// *Questo si occupa invece di rimuovere la griglia della partita vecchia aggiungendo quella giusta*
            contenitoreGriglia.classList.remove("griglia_facile");
            contenitoreGriglia.classList.remove("griglia_difficile");
            contenitoreGriglia.classList.add("griglia_normale");
// loop per generare 81 caselle
            for (let i = 1; i <= 81; i++){
// per 81 volte creerà l'elemento "div"                
                var gridItem = document.createElement('div');
// aggiungo poi un EventListener per il click dell'elemento della griglia, che rende l'elemento selezionato tramite la classe apposita e stampo il suo numero nella console
                gridItem.addEventListener("click", function selezionata(){
                    this.classList.add("selezionata")
                    console.log("cella selezionata:", i)
// Ma, se la cella selezionata risulta avere la classe bomb allora questa "esplode" 
                    if (this.classList.contains("bomb")){
                        this.classList.add("esplosa");
// Vengono poi selezionate tutte le classi bomba e vengono poi successivamente mostrate tramite l'applicazione a tutte della classe "esplosa", vengono inoltre stampate tutte le bombe nella console
                        const bombe = document.querySelectorAll('.bomb');
                        console.log("queste sono le bombe", bombe)
                        
                            for (const bomb of bombe) {
                            bomb.classList.add('esplosa');
                            }
// viene calcolato il punteggio tramite il conteggio delle celle con la classe selezionata, togliendo 1 per la bomba selezionata alla fine, in modo che non venga considerata nel punteggio
                        let punteggio = document.querySelectorAll('.selezionata').length - 1;
                        console.log("hai totalizzato:" + punteggio + "punti");
// Viene mostrato il punteggio e viene applicata una classe a tutte le celle in modo che queste non possano più essere cliccate
                        alert(`hai totalizzato: ${punteggio} punti`);
                        // window.location.reload();
                        let allCells = document.getElementsByClassName('grid_item');
                        console.log(allCells);
                        for (let unselectable of allCells) {
                            unselectable.classList.add('no_click');
                        }

                    }

                })
// Questi comandi servono a fare in modo che ai div creati nella riga 101 venga applicata la classe del "grid_item", come testo interno venga stampato il numero i che li sta generando e vengano anche messi come figli del contenitore principale                
                gridItem.className = "grid_item";
                gridItem.textContent += i;

                contenitoreGriglia.appendChild(gridItem)

            }
// Questi comandi servono a generare le bombe, il primo prende tutti gli alementi griglia
            let celleArray = document.getElementsByClassName("grid_item");
            console.log(celleArray);
// Questo gli appllica un valore tramite un loop della lunghezza degli elementi della griglia
            for (let j = 1; j <= celleArray.length; j++){
            celleArray.value = [j]
            }
// Questo genera 16 "bombe", prendendo div casualmente, creando un gruppo di elementi e applicando a tutti la classe "bomb"            
            for (let i = 1; i <= 16; i++){
            var randomItem = celleArray[Math.floor(Math.random()* celleArray.length)];
            var text  = randomItem.textContent || randomItem.innerText;
            console.log(text);
// Infine, stampa il gruppo delle bombe
            randomItem.classList.add("bomb");
            console.log(randomItem);
            
            }
        
    }       // Se la difficoltà è normale allora...
    else if(difficoltaSelezionata.value == "difficile"){
// *se prima si era fatta una partita, riga 159 fino a riga 162 si occupano di rimuovere le caselle*
        const elementiGriglia = document.querySelectorAll('.grid_item');

            elementiGriglia.forEach(grid_item => {
                grid_item.remove(elementiGriglia);
            });
// *Questo si occupa invece di rimuovere la griglia della partita vecchia aggiungendo quella giusta*
            contenitoreGriglia.classList.remove("griglia_normale");
            contenitoreGriglia.classList.remove("griglia_facile");
            contenitoreGriglia.classList.add("griglia_difficile");
// loop per generare 49 caselle        
            for (let i = 1; i <= 49; i++){
// per 49 volte creerà l'elemento "div"                 
                var gridItem = document.createElement('div');
// aggiungo poi un EventListener per il click dell'elemento della griglia, che rende l'elemento selezionato tramite la classe apposita e stampo il suo numero nella console
                gridItem.addEventListener("click", function selezionata(){
                    this.classList.add("selezionata")
                    console.log("cella selezionata:", i)
// Ma, se la cella selezionata risulta avere la classe bomb allora questa "esplode" 
                    if (this.classList.contains("bomb")){
                        this.classList.add("esplosa");
// Vengono poi selezionate tutte le classi bomba e vengono poi successivamente mostrate tramite l'applicazione a tutte della classe "esplosa", vengono inoltre stampate tutte le bombe nella console                        
                        const bombe = document.querySelectorAll('.bomb');
                        console.log("queste sono le bombe", bombe)
                        
                            for (const bomb of bombe) {
                            bomb.classList.add('esplosa');
                            }
// viene calcolato il punteggio tramite il conteggio delle celle con la classe selezionata, togliendo 1 per la bomba selezionata alla fine, in modo che non venga considerata nel punteggio
                            let punteggio = document.querySelectorAll('.selezionata').length - 1;
                        console.log("hai totalizzato:" + punteggio + "punti");
// Viene mostrato il punteggio e viene applicata una classe a tutte le celle in modo che queste non possano più essere cliccate
                        alert(`hai totalizzato: ${punteggio} punti`);
                        // window.location.reload();
                        let allCells = document.getElementsByClassName('grid_item');
                        console.log(allCells);
                        for (let unselectable of allCells) {
                            unselectable.classList.add('no_click');
                        }

                    }

                })
// Questi comandi servono a fare in modo che ai div creati nella riga 171 venga applicata la classe del "grid_item", come testo interno venga stampato il numero i che li sta generando e vengano anche messi come figli del contenitore principale
                gridItem.className = "grid_item";
                gridItem.textContent += i;

                contenitoreGriglia.appendChild(gridItem)

            }
// Questi comandi servono a generare le bombe, il primo prende tutti gli alementi griglia
            let celleArray = document.getElementsByClassName("grid_item");
            console.log(celleArray);
// Questo gli appllica un valore tramite un loop della lunghezza degli elementi della griglia
            for (let j = 1; j <= celleArray.length; j++){
            celleArray.value = [j]
            }
// Questo genera 16 "bombe", prendendo div casualmente, creando un gruppo di elementi e applicando a tutti la classe "bomb"                        
            for (let i = 1; i <= 16; i++){
            var randomItem = celleArray[Math.floor(Math.random()* celleArray.length)];
            var text  = randomItem.textContent || randomItem.innerText;
            console.log(text);
// Infine, stampa il gruppo delle bombe
            randomItem.classList.add("bomb");
            console.log(randomItem);
            
            }
            
    }

})