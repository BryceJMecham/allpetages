const submit = document.getElementById("submit");
const species_element = document.getElementById("species");
const age_years_element = document.getElementById("years");
const age_months_element = document.getElementById("months");
const result_div = document.getElementById("result");
const animals = {
    africanGrey: 60,
    angelfish: 10,
    axolotl: 15,
    ballPython: 30,
    beardedDragon: 15,
    bettaFish: 4,
    boaConstrictor: 40,
    budgerigar: 10,
    canary: 10,
    cat: 18,
    chicken: 10,
    chinchilla: 20,
    cichlid: 15,
    cockatiel: 15,
    cockatoo: 70,
    cornSnake: 15,
    degu: 6,
    dog: 13,
    dove: 10,
    duck: 12,
    ferret: 10,
    finch: 10,
    frog: 10,
    gecko: 20,
    gerbil: 4,
    goat: 12,
    goldfish: 15,
    goose: 20,
    guineaPig: 8,
    guppy: 2,
    hamster: 3,
    hedgehog: 6,
    hermitCrab: 30,
    horse: 30,
    iguana: 20,
    kingSnake: 20,
    koiFish: 35,
    leopardGecko: 20,
    lizard: 20,
    lovebird: 15,
    macaw: 60,
    miniPig: 15,
    molly: 3,
    mouse: 3,
    newt: 10,
    parrot: 80,
    pheasant: 10,
    pigeon: 10,
    pony: 30,
    potbellyPig: 18,
    prayingMantis: 1,
    pythonLarge: 40,
    quail: 5,
    rabbit: 12,
    rat: 3,
    scorpion: 8,
    sheep: 12,
    shrimp: 2,
    snail: 10,
    snake: 20,
    starfish: 10,
    stickInsect: 2,
    sugarGlider: 12,
    tarantula: 20,
    tetra: 5,
    toad: 20,
    tortoise: 100,
    turtle: 40,
    turkey: 10
};

submit.addEventListener("click", function(){
    var species = species_element.value;
    var years= age_years_element.value;
    var months = age_months_element.value;

    result_div.innerText = "";
    const age = Math.floor(100 / animals[species] * (parseFloat(years) + parseFloat(months / 12)));
    console.log(months)
    if (species in animals) {
        result_div.innerText = age + " years old";
    }
    else {
        result_div.innerHTML = "Select species from list";
    }
});

species_element.addEventListener("change", function(){
    result_div.innerText = "";
});
age_years_element.addEventListener("change", function(){
    result_div.innerText = "";
});
age_months_element.addEventListener("change", function(){
    result_div.innerText = "";
});