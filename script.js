/*async function getAPI(){
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    let data = await res.json();
    console.log(data);
}
getAPI();*/

//DOM objects
document.getElementById("run").addEventListener("click", function(){


const pokeName = document.querySelector(".poke-name");
const pokeId = document.querySelector(".poke-id");
const pokeFrontImage = document.querySelector(".poke-front-image");
const pokeBackImage = document.querySelector(".poke-back-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const searchBar = document.querySelector(".searchBar");
const searchButton = document.getElementById("run");
const move1 = document.getElementById("move1");
const move2 = document.getElementById("move2");
const move3 = document.getElementById("move3");
const move4 = document.getElementById("move4");
const evolution1 = document.getElementById("ev1");
const evolution2 = document.getElementById("ev2");
const evolution3 = document.getElementById("ev3");



fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(res => {   //.then(res => res.json())
        return res.json();
    })
    .then(data => {
        //left-container-main-screen
        pokeName.innerHTML = data["name"];
        pokeId.innerHTML = data["id"];
        pokeFrontImage.innerHTML = data[""];
        console.log(data);
        pokeFrontImage.src = data["sprites"]["front_default"] || " ";
        pokeBackImage.src = data["sprites"]["back_default"] || " ";
       
        //searchBar



        //right-container-moves
        const dataMoves = data["moves"].splice(0, 4);
        const firstMove = dataMoves[0];
        const secondMove = dataMoves[1];
        const thirdMove = dataMoves[2];
        const fourthMove = dataMoves[3];
       
        if(dataMoves.length == 1){
            move1.innerText = firstMove["move"]["name"];
            move2.innerText = "NA";
            move3.innerText = "NA";
            move4.innerText = "NA";
        }
        if(dataMoves.length == 2){
            move1.innerText = firstMove["move"]["name"];
            move2.innerText = secondMove["move"]["name"];
            move3.innerText = "NA";
            move4.innerText = "NA";
        }
        if(dataMoves.length == 3){
            move1.innerText = firstMove["move"]["name"];
            move2.innerText = secondMove["move"]["name"];
            move3.innerText = thirdMove["move"]["name"];
            move4.innerText = "NA";
        }
        if(dataMoves.length == 4){
            move1.innerText = firstMove["move"]["name"];
            move2.innerText = secondMove["move"]["name"];
            move3.innerText = thirdMove["move"]["name"];
            move4.innerText = fourthMove["move"]["name"];
        }
        

       
        
        
    })
})
