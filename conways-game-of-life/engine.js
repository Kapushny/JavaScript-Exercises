
let body = document.querySelector("body");
let table = document.querySelector("table");
let w = 10;
let h = 10;
function createGrid(){
    while (table.firstChild) {
        table.removeChild(table.lastChild);
      }

    for (let i = 0; i < h; i++){
        let line = document.createElement("tr");
        let cell = document.createElement("td");
        for (let j = 0; j < w; j++){
            let cell = document.createElement("td");
            let  checkbox = document.createElement("input");
            checkbox.type = 'checkbox';
            checkbox.id = i.toString() + j.toString();
            let rn =  Math.random()*10
            if (rn<5) { checkbox.checked = true
            }else{ checkbox.checked = false}
            cell.appendChild(checkbox);         
            line.appendChild(cell);
        }

        table.appendChild(line);
    }

}

function update(){
    let cellsToKill = [];
    let cellsToBreed = [];
    for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
            console.log("eval", i,j)
            if (checkNeighbours(i,j) == true) {
                cellsToBreed.push(i.toString() + j.toString());
                console.log("cells to breed  ", cellsToBreed);
            }else if (checkNeighbours(i,j) == false){
                cellsToKill.push(i.toString() + j.toString());
                console.log("cells to kill  ", cellsToKill);
            }


        }
    }
    //console.log(cellsToKill);
    for (let id of cellsToKill){
    let cell = document.getElementById(id); 
    cell.checked = false;
    }
    for (let id of cellsToBreed){
        let cell = document.getElementById(id); 
        cell.checked = true;  
    }
 
}


function checkNeighbours(i,j){
    let id = i.toString() + j.toString();
    let cell = document.getElementById(id);
    let aliveNei = [];
    for (k = -1; k <= 1; k++){
        for (l = -1; l <= 1; l++){
            let ni = i + k;
            let nj = j + l;
            let neiId = ni.toString() + nj.toString();
            console.log("eval", neiId);
            let neiCell = document.getElementById(neiId);
            if (neiCell != null && id != neiId){
                (neiCell.checked ? aliveNei.push(neiId):console.log ()) 
            }

        }
    }
    console.log("alive neighbors ", aliveNei)
    if (cell.checked){
        if (aliveNei.length > 3 | aliveNei.length < 2 ){
            return false 
        }
        
    }else if (aliveNei.length == 3 && cell.checked == false){ return true}
}

