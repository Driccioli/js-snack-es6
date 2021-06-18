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

const newArray=[];

for(let i=0; i<squadre.length; i++){
    squadre[i].punti = Math.floor(Math.random()*21);
    squadre[i].falli = Math.floor(Math.random()*21);

    var {nome,falli} = squadre[i];
    newArray.push({nome, falli});
}

console.log(`${newArray}`);