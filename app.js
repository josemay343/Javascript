// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, imagesrc) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.imagesrc = imagesrc;
}

// Create Human constructor
function Human(species, weight, height, diet) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.imagesrc = '/images/human.png'
}
// Get Dinosaur properties from json file and store in global variable
// Used npx serve to create a local server to load the json file
fetch('/dino.json')
    .then(result => result.json())
    .then(data => {
        this.dinos = data.Dinos.map((dino) => new Dino(dino.species, dino.weight, 
                        dino.height, dino.diet, dino.where, dino.when, dino.fact, dino.imagesrc));
        dinos = this.dinos
});

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
// Compares the dino weight against the human weight and returns a fact
function getWeightFacts (human, dinoWeight, dinoSpecies) {
    if (human.weight < dinoWeight) {
        let weightDiff = dinoWeight - human.weight
        weightFact =  `${dinoSpecies} is ${weightDiff} lbs heavier than ${human.species}`
        return weightFact;
    } else if (human.weight == dinoWeight) {
        weightFact = `Wow! you're weight equals the ${dinoSpecies}`;
        return weightFact;
    } else {
        let weightDiff = human.weight - dinoWeight
        weightFact = `${human.species} is heavier than ${dinoSpecies} by ${weightDiff} lbs`;
        return weightFact;
    };
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
// Compares the dino height against the human height and returns a fact
function getHeightFact (human, dinoHeight, dinoSpecies) {
    if (human.height < dinoHeight) {
        let heightDiff = dinoHeight - human.height
        heightFact = `${dinoSpecies} is ${heightDiff} inches taller than ${human.species}`
        return heightFact;
    } else if (human.height == dinoHeight) {
        heightFact = `Wow! you're height equals the ${dinoSpecies}`
        return heightFact;
    } else {
        let heightDiff = human.height - dinoHeight
        heightFact = `${human.species} is taller than ${dinoSpecies} by ${heightDiff} inches`
        return heightFact;
    }
};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
// Compares the dino diet against the human diet and returns a fact
function getDietFact(human, dinoDiet, dinoSpecies) {
    if (human.diet == dinoDiet) {
        dietFact = `${human.species} has the same ${dinoDiet} diet as the ${dinoSpecies}`
        return dietFact
    } else if (human.diet != dinoDiet){
        dietFact = `${human.species} does not have the same ${dinoDiet} diet as the ${dinoSpecies}`
        return dietFact
    }
};

// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener('click', function(){
    let human = new Human();
    // Use IIFE to get human data from form
    (function getHumanData(){
        human.species = document.getElementById('name').value;
        human.weight = document.getElementById('weight').value;
        let heightFeet = document.getElementById('feet').value; 
        let heightInches = document.getElementById('inches').value;
        human.height = parseInt(heightFeet * 12) + parseInt(heightInches)
        human.diet = document.getElementById('diet').value.toLowerCase();
    })();

    // compare properties
    compare(human);
    // Remove form after click
    hide();
    // Create the tiles
    createTile(human);
    // Create a new button to compare again with new data
    createNewButton();

})
// Compare the human properties to the dino properties and return a fact based on it
function compare(human) {
    let allFacts = []
    for(let i = 0; i < dinos.length; i++) {
        // retreive the dino properties to compare with human
        let dinoWeight = dinos[i].weight;
        let dinoSpecies = dinos[i].species;
        let dinoHeight = dinos[i].height;
        let dinoDiet = dinos[i].diet;
        let dinoFact = dinos[i].fact;
        
        let dinoHumanComparedFacts = [];
        let weightFact,
            heightFact,
            dietFact

        weightFact = getWeightFacts(human, dinoWeight, dinoSpecies);
        heightFact = getHeightFact(human, dinoHeight, dinoSpecies);
        dietFact = getDietFact(human, dinoDiet, dinoSpecies);

        // Push the dino and human comparison facts to an array
        dinoHumanComparedFacts.push(dinoSpecies, heightFact, weightFact, dietFact, dinoFact);
        allFacts.push(dinoHumanComparedFacts);
        pushDinoFacts(allFacts, dinos[i]);
    };
}   

// Get the facts organized by species and add them to the dino objects
function pushDinoFacts(allFacts, dino) {
    for (let i = 0; i < allFacts.length; i++) {
        switch(allFacts[i][0]) {
            case 'Triceratops':
                dino.fact = allFacts[i];
                break;
            case 'Tyrannosaurus Rex':
                dino.fact = allFacts[i];
                break;
            case 'Anklyosaurus':
                dino.fact = allFacts[i];
                break;
            case 'Brachiosaurus':
                dino.fact = allFacts[i];
                break;
            case 'Stegosaurus':
                dino.fact = allFacts[i];
                break;
            case 'Elasmosaurus':
                dino.fact = allFacts[i];
                break;
            case 'Pteranodon':
                dino.fact = allFacts[i];
                break;
            case 'Pigeon':
                dino.fact = allFacts[i];
        }
    };
}
// Get the random fact from the comparisons and original fact
function randomFact(facts) {
    let speciesIndex = 0
    facts.splice(speciesIndex,1);
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    return randomFact;
}
// filter the Pigeon fact to be the original
function getPigeonFact(facts) {
    let getPigeonFact = facts[4]
    return getPigeonFact;
}

// Generate Tiles for each Dino in Array
function createTile(human){
    // Random order for the dino Tiles using sort() Source: MDN web docs
    dinos.sort(() => Math.random() - 0.5)
    // Add human object to the dinos array
    dinos.splice(4,0, human)
    // Loop through the dinos array to obtain each dino object and append to DOM
    for(i = 0; i < dinos.length; i ++) {
        let titleDiv = document.createElement('div');
        let title = document.createElement('h3');
        let image = document.createElement('img');
        image.src = dinos[i].imagesrc
        let fact = document.createElement('p');

        titleDiv.className = 'grid-item';
        document.querySelector('#grid').appendChild(titleDiv);
        titleDiv.appendChild(title);
        title.innerHTML = dinos[i].species;
        titleDiv.appendChild(image);
        // determine if the fact is for the human, dino, or pigeon
        if(!dinos[i].fact) {
            fact.innerHTML = ""
        } else if(dinos[i].species == 'Pigeon'){
            titleDiv.appendChild(fact)
            fact.innerHTML = getPigeonFact(dinos[i].fact)
        } else {
            titleDiv.appendChild(fact)
            fact.innerHTML = randomFact(dinos[i].fact)
        };
        // Add tiles to DOM
        document.querySelector('#grid').appendChild(titleDiv)
    };
}
// Remove form from screen
function hide() {
    document.getElementById('dino-compare').style.display='none';
}

// Create a new button to compare again, clicking refreshes the page
function createNewButton () {
    const newButton = document.getElementById('newBtn')
    newButton.className = 'btn';
    newButton.innerHTML = 'Compare again';
    newButton.addEventListener('click', function(){
        document.querySelector('#grid').style.display = 'none';
        document.querySelector('#dino-compare').style.display = 'block';
        window.location.reload()
    });
}