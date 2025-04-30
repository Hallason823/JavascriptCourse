function getUserInfo() {
    user_name =  prompt("Type your name: ");
    user_password = prompt("Type your password: ");
    while (user_password == user_name) {
        user_password = prompt("Invalidy input! The password should be different from the user name. Try again, please: ");
    }
    return [user_name, user_password];
}

user_info = getUserInfo();