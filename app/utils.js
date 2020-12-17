function getTotalAverage(students) {
    let totalGrades = [];
    students.forEach(student => {
        totalGrades = totalGrades.concat(student.grades)
    });
    let sum = totalGrades.reduce((previous, current) => current += previous);
    let average = (sum/totalGrades.length).toFixed(5);
    return average
}
 function getAverage(grades) {
    let sum = grades.reduce((previous, current) => current += previous);
    let average = (sum/grades.length).toFixed(5);
    return average
} 

module.exports.getTotalAverage =  getTotalAverage;
module.exports.getAverage =  getAverage;
