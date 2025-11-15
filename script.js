const submit = document.getElementById("submit");
const species_element = document.getElementById("species");
const age_years_element = document.getElementById("years");
const age_months_element = document.getElementById("months");
const result_div = document.getElementById("result");
const life_expectancy_element = document.getElementById("lifeExpectancy");
const speciesTab = document.getElementById("speciesTab"); //Species tab
const ageTab = document.getElementById("ageTab"); //Age tab
const birthday_element = document.getElementById("birthday");
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
    molly: 3,
    mouse: 3,
    newt: 10,
    parrot: 80,
    pheasant: 10,
    pig: 15,
    pigeon: 10,
    pony: 30,
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
    var life_expectancy = life_expectancy_element.value;
    var age = 0; // age in human years
    var age_decimal = calculateAgeDecimal(birthday_element.value);

    result_div.innerText = "";

    // Sepecies tab checked
    if (speciesTab.checked) {
        // Age tab checked
        if (ageTab.checked) {
            age = Math.floor(100 / animals[species] * (parseFloat(years) + parseFloat(months / 12)));
            if (species in animals) {
            result_div.innerText = age + " years old";
            }
            else {
                result_div.innerHTML = "Select species from list";
            }
        }
        // Birthday tab is checked
        else {
            age = Math.floor(100 / animals[species] * age_decimal);
            if (species in animals) {
            result_div.innerText = age + " years old";
            }
            else {
                result_div.innerHTML = "Select species from list";
            }
        }
    }
    // Life Expectancy tab checked
    else {
        // Age tab checked
        if (ageTab.checked) {
            age = Math.floor(100 / life_expectancy * (parseFloat(years) + parseFloat(months / 12)));
            result_div.innerText = age + " years old";
        }
        // Birthday tab is checked
        else {
            age = Math.floor(100 / life_expectancy * age_decimal);
            result_div.innerText = age + " years old";
        }
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


function calculateAgeDecimal(birthDate) {
    const birth = new Date(birthDate); // Ensure birthDate is a Date object
    const today = new Date();          // Current date

    // Calculate difference in milliseconds
    const diffMs = today - birth;

    // Convert difference to age in years (1 year ≈ 365.2425 days to account for leap years)
    const age = diffMs / (1000 * 60 * 60 * 24 * 365.2425);

    return age;
}
