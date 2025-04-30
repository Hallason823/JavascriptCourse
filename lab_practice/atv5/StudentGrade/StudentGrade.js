function getStudentGrade(lower_limited=0, upper_limited=10) {
    let grade;
    grade = parseFloat(prompt("Type your grade (0-10): "));
    while (grade<lower_limited || grade>upper_limited) {
        grade = parseFloat(prompt("Invalidy input! Try again, please. Type your grade (0-10): "));
    }
    return grade
}

//Question 01
let student_grade = getStudentGrade();
alert("The student grade is " + student_grade + ".");