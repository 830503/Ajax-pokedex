

//DOM objects

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
    var id = 1;

    const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

    function pokemon(){

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {  
            return res.json();
        })
        .then(data => {
  
            pokeName.innerHTML =capitalize(data["name"]);
            pokeId.innerHTML = data["id"];
            pokeFrontImage.src = data["sprites"]["front_default"] || " ";
            pokeBackImage.src = data["sprites"]["back_default"] || " ";

            
           
            //moves
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
    
});


        
        
        
   /* async function getEvoChain(){
            let chainApi = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            let dataChain = await chainApi.json();
            let urlEvo = dataChain["evolution_chain"]["url"];
            
            getEvoApi(urlEvo);
    };

    getEvoChain();

    async function getEvoApi(urlEvo){
            let evoApi = await fetch(urlEvo);
            let dataEvo = await evoApi.json();
            
            let evo1 = dataEvo["chain"]["species"]["url"];
            let evo2 = dataEvo["chain"]["evolves_to"][0]["species"]["url"];
            let evo3 = dataEvo["chain"]["evolves_to"][0]["evolves_to"][0]["species"]["url"];

           
            evoOne(evo1);
            evoOne(evo2);
            evoOne(evo3);

    };

    async function evoOne(evo1){
        let res = await fetch(evo1);
        let evoOne = await res.json();
        

            //console.log(evoOneId);

            console.log(evoOne);
    };
    async function evoOne(evo2){
        let res = await fetch(evo2);
        let evoTwo = await res.json();
            
            //console.log(evoTwo);
    };
    async function evoOne(evo3){
        let res = await fetch(evo3);
        let evoThree = await res.json();
            
            //console.log(evoThree);
    };*/
 
    
    
