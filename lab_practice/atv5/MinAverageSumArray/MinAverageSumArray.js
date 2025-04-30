function getArray(array_length) {
    let nums = [];
    for (let i = 0; i < array_length; i++) {
        nums.push(parseFloat(prompt("Type the array value in the position " + (i+1) +": ")));
    }
    return nums;
}

function getMinMaxSumArray(nums) {
    let min = nums[0], sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (min > nums[i]) min = nums[i];
        sum += nums[i];
    }
    return [min, sum/nums.length, sum];
}

//Questions 07 and 08
let messages = ["Min: ", "Average: ", "Sum: "];
let nums = getArray(5);
let result = getMinMaxSumArray(nums);
alert("Input: " + nums);
for (let i = 0; i < messages.length; i++) {
    alert(messages[i]+result[i]);
}