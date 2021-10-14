/*async function getAPI(){
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    let data = await res.json();
    console.log(data);
}
getAPI();*/

//DOM objects

//(function(){

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
    let id = 1;
    
    
    
    const capitalize = (str) => str[0].toUpperCase() + str.substr(1);


    function pokemon(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {  
            return res.json();
        })
        .then(data => {
            //console.log(data);
            pokeName.innerHTML =capitalize(data["name"]);
            pokeId.innerHTML = data["id"];
            pokeFrontImage.src = data["sprites"]["front_default"] || " ";
            pokeBackImage.src = data["sprites"]["back_default"] || " ";

            const dataMoves = data["moves"].splice(0, 4);
            const firstMove = dataMoves[0];
            const secondMove = dataMoves[1];
            const thirdMove = dataMoves[2];
            const fourthMove = dataMoves[3];
           
            if(dataMoves.length == 1){
                move1.innerText = capitalize(firstMove["move"]["name"]);
                move2.innerText = "NA";
                move3.innerText = "NA";
                move4.innerText = "NA";
            }
            if(dataMoves.length == 2){
                move1.innerText = capitalize(firstMove["move"]["name"]);
                move2.innerText = secondMove["move"]["name"];
                move3.innerText = "NA";
                move4.innerText = "NA";
            }
            if(dataMoves.length == 3){
                move1.innerText = capitalize(firstMove["move"]["name"]);
                move2.innerText = capitalize(secondMove["move"]["name"]);
                move3.innerText = capitalize(thirdMove["move"]["name"]);
                move4.innerText = "NA";
            }
            if(dataMoves.length == 4){
                move1.innerText = capitalize(firstMove["move"]["name"]);
                move2.innerText = capitalize(secondMove["move"]["name"]);
                move3.innerText = capitalize(thirdMove["move"]["name"]);
                move4.innerText = capitalize(fourthMove["move"]["name"]);
            }
        });
    };    
pokemon();
    
searchButton.addEventListener("click", function(){
    id = searchBar.value;
    pokemon();
});

prevButton.addEventListener("click", function(){
    id -= 1;
    if (id < 1){
        id = 898;
    }
    pokemon();
});

nextButton.addEventListener("click", function(){
    id += 1;
    if (id > 898){
        id = 1;
    }
    pokemon();
})


        
        
    
    
    
        
