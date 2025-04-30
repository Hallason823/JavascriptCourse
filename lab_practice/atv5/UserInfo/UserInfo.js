function getName(user_info, min_size=3) {
    user_info[0] = prompt("Type your name: ");
    if (user_info[0].length < min_size) {
        alert("Invalidy input! Try again, please.");
        getName(user_info, min_size);
    }
}

function getAge(user_info, limit=[0, 150]) {
    user_info[1] = parseFloat(prompt("Type your age: "));
    if (user_info[1] < limit[0]  || user_info[1] > limit[1]) {
        alert("Invalidy input! Try again, please.");
        getAge(user_info, limit);
    }
}

function getSalary(user_info) {
    user_info[2] = parseFloat(prompt("Type your salary: "));
    if (user_info[2] <= 0) {
        alert("Invalidy input! Try again, please.");
        getSalary(user_info);
    }
}

function getGender(user_info) {
    user_info[3] = prompt("Type your gender (m or f): ").toLowerCase();
    if (!(user_info[3] === 'm' || user_info[3] === 'f')) {
        alert("Invalidy input! Try again, please.");
        getGender(user_info);
    }
}

function getStatus(user_info) {
    user_info[4] = prompt("Type your gender (s, c, v, or d): ").toLowerCase();
    if (user_info[4] != 's' && user_info[4] != 'c' && user_info[4] != 'v' && user_info[4] != 'd') {
        alert("Invalidy input! Try again, please.");
        getStatus(user_info);
    }
}

function getInfo(user_info) {
    getName(user_info);
    getAge(user_info);
    getSalary(user_info);
    getGender(user_info);
    getStatus(user_info);
    alert("Result: " + user_info);
}

//Question 03
let user_info = [];
getInfo(user_info);