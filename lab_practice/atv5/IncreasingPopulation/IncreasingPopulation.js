function getPopulationSize(population_A, population_B) {
    population_A[0] = parseInt(prompt("Type the population size of A (lower population):"));
    population_B[0] = parseInt(prompt("Type the population size of B (upper population):"));
    if (population_A[0] > population_B[0] || population_A[0] <= 0) {
        alert("Invalidy input! Try again, please.");
        getPopulationSize(population_A, population_B);
    }
}

function getPopulationIncreasingRate(population_A, population_B) {
    population_A[1] = parseFloat(prompt("Type the population increasing rate of A (upper rate):"));
    population_B[1] = parseFloat(prompt("Type the population increasing rate of B (lower rate):"));
    if (population_A[1] <= population_B[1] || population_B[1] < 0) {
        alert("Invalidy input! Try again, please.");
        getPopulationIncreasingRate(population_A, population_B);
    }
}

function increasingPopulationByYear(current_population) {
    current_population[0] *= (1+current_population[1]);
}

function getYeartheMinPopulationExceedsTheMaxOne(population_A, population_B) {
    let year = 0;
    while (population_A[0] <= population_B[0]) {
        increasingPopulationByYear(population_A);
        increasingPopulationByYear(population_B);
        year ++
    }
    return year;
}

let population_A = [], population_B = [];
getPopulationSize(population_A, population_B);
getPopulationIncreasingRate(population_A, population_B);
alert("The population of A exceeds the population of B in the year: " + getYeartheMinPopulationExceedsTheMaxOne(population_A, population_B));