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
var squadraIndex = 0;
for(let i=0; i<squadre.length; i++){
    squadre[i].punti = Math.floor(Math.random()*21);
    squadre[i].falli = Math.floor(Math.random()*21);
    var{falli} = squadre[i];
    if(falli > squadraFalli){
        squadraFalli = falli;
        squadraIndex = i;
    }
}

console.log(squadre[squadraIndex]);

function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
      
      if(data[element] === data[squadraIndex]){
        row.style.backgroundColor= "yellow";
        cell.style.backgroundColor= "yellow";
        text.style.backgroundColor= "yellow";
        }
    }
  }
  let table = document.querySelector("table");
generateTable(table, squadre)