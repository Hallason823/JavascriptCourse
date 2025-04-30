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

//Question 04
let population_A = [80000, 0.03];
let population_B = [200000, 0.015];
console.log("The population of A exceeds the population of B in the year: " + getYeartheMinPopulationExceedsTheMaxOne(population_A, population_B));