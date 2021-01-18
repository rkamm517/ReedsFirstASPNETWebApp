// Function to calculate final grade
function calcGrade() {
    // pull form inputs and assign their values to variables
    var assignments = document.getElementById("assignments").value;
    var project = document.getElementById("project").value;
    var quizzes = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    // assign proper weights to eaach grade category
    var gradeAssignments = parseInt(assignments) * .5;
    var gradeProject = parseInt(project) * .1;
    var gradeQuizzes = parseInt(quizzes) * .1;
    var gradeExams = parseInt(exams) * .2;
    var gradeIntex = parseInt(intex) * .1;

    // calculate final numeric grade
    var finalGrade = gradeAssignments + gradeProject + gradeQuizzes + gradeExams + gradeIntex;

    // determine final letter grade
    if (finalGrade >= 94) {
        letterGrade = "A"
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-"
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+"
    }
    else if (finalGrade >= 84) {
        letterGrade = "B"
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-"
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+"
    }
    else if (finalGrade >= 74) {
        letterGrade = "C"
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-"
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+"
    }
    else if (finalGrade >= 64) {
        letterGrade = "D"
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-"
    }
    else if (finalGrade < 60) {
        letterGrade = "E"
    }
    // output final letter and numeric grade to screen
    alert("Your final grade is " + letterGrade + " (" + finalGrade + "%)");

}