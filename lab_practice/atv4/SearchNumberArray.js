function searchForIndicesOfNumberInArray(numbers, number) {
    var indices_found = []
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == number) indices_found.push(i);
    }
    return indices_found;
}

let nums = [1, 6, 5, 6, 3, 6, 4, 3, 1, 2, 3, 9, 10, 45, 5, 7, 6];
let searched_num = 6;
let indices_found = searchForIndicesOfNumberInArray(nums, searched_num);
console.log("Input: " + nums);
console.log("Searched number: " + searched_num);
console.log("Resulf of searched: " + indices_found);