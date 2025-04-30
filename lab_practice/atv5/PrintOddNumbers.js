function printOddNumbers(lower_limit = 1, upper_limit = 50) {
    let even_numbers = []
    for (let i = lower_limit+1; i < upper_limit; i++) {
        if (i%2 !=0 ) even_numbers.push(i);
    }
    console.log("Output (odd): " + even_numbers);
}
//Question 09
printOddNumbers();