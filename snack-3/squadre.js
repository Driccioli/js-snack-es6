const squadre=[
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0
    }
];
var squadraFalli = 0;
for(let i=0; i<squadre.length; i++){
    squadre[i].punti = Math.floor(Math.random()*21);
    squadre[i].falli = Math.floor(Math.random()*21);
    if(squadre[i].falli > squadraFalli){
        squadraFalli = i;
    }
}

console.log(squadre[squadraFalli]);

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
      
      if(data[element] === data[squadraFalli]){
        row.style.backgroundColor= "yellow";
        cell.style.backgroundColor= "yellow";
        text.style.backgroundColor= "yellow";
        }
    }
  }
  let table = document.querySelector("table");
generateTable(table, squadre)