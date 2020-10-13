    // Create a superclass
    // source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
    function Animal(species, weight, height, diet) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
    }

    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact) {
        Animal.call(this, species, weight, height, diet);
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
    // Create Human Constructor
    function Human(species, weight, height, diet) {
        Animal.call(this, species, weight, height, diet);
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
    }
    // Create Dino Objects
    let dino1 = new Animal('Triceratops',13000,114,'herbavor','North America','Late Cretaceous','First discovered in 1889 by Othniel Charles Marsh');
    let dino2 = new Animal('Tyrannosaurus Rex',11905,114,'carnivor','North America','Late Cretaceous','The largest known skull measures in at 5 feet long.');
    let dino3 = new Animal('Anklyosaurus',10500,55,'herbavor','North America','Late Cretaceous','Anklyosaurus survived for approximately 135 million years.');
    let dino4 = new Animal('Brachiosaurus',70000,372,'herbavor','North America','Late Jurasic','An asteroid was named 9954 Brachiosaurus in 1991.');
    let dino5 = new Animal('Stegosaurus',11600,79,'herbavor','North America, Europe, Asia','Late Jurasic to Early Cretaceous','The Stegosaurus had between 17 and 22 seperate places and flat spines.');
    let dino6 = new Animal('Elasmosaurus',16000,59,'carnivor','North America','Late Cretaceous','Elasmosaurus was a marine reptile first discovered in Kansas.');
    let dino7 = new Animal('Pteranodon',44,20,'carnivor','North America','Late Cretaceous','Actually a flying reptile, the Pteranodon is not a dinosaur.');
    let dino8 = new Animal('Pigeon',0.5,9,'herbavor','World Wide','Holocene','All birds are living dinosaurs.');
    
    let dinoArray = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8]
    console.log(dinoArray)

    // let dinos = [];
   
    // let dinoData = fetch('http://localhost:5000/dino.json')
    //     .then(result => result.json())
    //     .then(data => {
    //         dinos = data.Dinos.map((dino) => new Dino(dino.species, dino.weight, 
    //             dino.height, dino.diet, dino.where, dino.when, dino.fact))
    //             console.log(dinos)
    //     });

    const button = document.getElementById('btn');
    button.addEventListener('click', function(){
        // Create Human Object
        let human = new Human();

        // Use IIFE to get human data from form
        (function getHumanData(){
            human.species = document.getElementById('name').value;
            human.weight = document.getElementById('weight').value;
            human.height = (document.getElementById('feet').value*12) + document.getElementById('inches').value;
            human.diet = document.getElementById('diet').value;
        })();
    console.log(human)
    })

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
