
let body = document.querySelector("body");
let table = document.querySelector("table");
function createGrid(){
    while (table.firstChild) {
        table.removeChild(table.lastChild);
      }
    let w = 10;
    let h = 10;
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

