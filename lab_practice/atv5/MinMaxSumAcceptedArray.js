function isAcceptedArray(nums, lower_limit, upper_limit) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= lower_limit || nums[i] >= upper_limit) return false;
    }
    return true;
}

function getMinMaxSumArray(nums, lower_limit, upper_limit) {
    if (isAcceptedArray(nums, lower_limit, upper_limit)) {
        let min = nums[0], max = nums[0], sum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (min > nums[i]) min = nums[i];
            if (max < nums[i]) max = nums[i];
            sum += nums[i];
        }
        return [min, max, sum];
    }
    else {
        console.log("The array is not accepted!");
        return [];
    }

}
//Testing - Question 21
let nums = [1, 3, 4, 5, 9, 1000, 1001, 0, 14, 21, 4, 2, 4, 5, 6, 8, 11, 3];
let messages = ["Min: ", "Max: ", "Sum: "];
console.log("Input: " + nums);
let result = getMinMaxSumArray(nums, 0, 1000);
nums = [1, 3, 4, 5, 0, 9, 14, 21, 4, 2, 4, 5, 6, 8, 11, 3];
result = getMinMaxSumArray(nums);
console.log("Input: " + nums);
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i] + result[i]);
}