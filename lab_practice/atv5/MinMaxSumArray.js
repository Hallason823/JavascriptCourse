function getMinMaxSumArray(nums) {
    let min = nums[0], max = nums[0], sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (min > nums[i]) min = nums[i];
        if (max < nums[i]) max = nums[i];
        sum += nums[i];
    }
    return [min, max, sum];
}
//Testing - Question 20
let nums = [1, 3, 4, 5, 0, 9, 14, 21, 4, 2, 4, 5, 6, 8, 11, 3];
let messages = ["Min: ", "Max: ", "Sum: "];
let result = getMinMaxSumArray(nums);
console.log("Input: " + nums);
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i] + result[i]);
}