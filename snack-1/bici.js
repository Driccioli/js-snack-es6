//Versione ES5

// var bici = [
//     {
//         nome: "Drift",
//         peso: 7
//     },
//     {
//         nome: "Nitro",
//         peso: 10
//     },
//     {
//         nome: "Turbo",
//         peso: 3
//     }
// ]
// var pesoMinore = bici[0].peso;
// var biciLeggera;
// for(var i=0; i<bici.length; i++){
    
//     if(bici[i].peso < pesoMinore){
//         pesoMinore = bici[i].peso;
//         biciLeggera = bici[i].nome;
//     }
// }

// console.log("Bici più leggera: "+ biciLeggera + "\nPeso: " + pesoMinore);


// Versione ES6

var bici = [
    {
        nome: "Drift",
        peso: 7
    },
    {
        nome: "Nitro",
        peso: 10
    },
    {
        nome: "Turbo",
        peso: 30
    }
]
var {nome,peso} = bici[0];
for(var i=0; i<bici.length; i++){
    
    if(bici[i].peso < peso){
        var {nome, peso} = bici[i];
    }
}

console.log(`Bici più leggera: ${nome} \nPeso: ${peso}`);