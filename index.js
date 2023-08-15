// using nested if-else
 
// Store marks of all the subjects in an array
let marks=[25, 65, 46, 98, 78, 65];
 
// Max marks will be 100 * number of subjects
let max_marks = marks.length * 100;
 
 // Initialize student's total marks to 0
let total = 0;
 
// Initialize student's grade marks to F
        let grade = 'F';
   
        // Traverse though the marks array to find the sum.
        for (let i = 0; i < marks.length; i++) {
            total += marks[i];
        }
   
        // Calculate the percentage.
        // Since all the marks are integer,
        // typecast the calculation to double.
        let percentage
            = ((total) / max_marks) * 100;
   
        // Nested if else
        if (percentage >= 79) {
            grade = 'A';
        }
        else {
            if (percentage >= 60 && percentage <= 79) {
                grade = 'B';
            }
            else {
                if (percentage >= 49 && percentage <= 59) {
                    grade = 'C';
                }
                else {
                    if (percentage >= 40 && percentage <= 49) {
                        grade = 'D';
                    }
                    else {
                        grade = 'E';
                    }
                }
            }
        }
   
        document.write(grade);


// SPEED DETECTOR
  function calculate() {
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;
    //checks if speed is less than 70. If it is, it shows "Ok
    if (speed < 70) {
      document.getElementById('result').textContent = 'Ok';
    } else {
    // if the driver receives 1 point for every 5 km/h over the speed limit of 70 km/h 
      points = Math.floor((speed - 70) / 5);
    }
  }

  // NET SALARY CALCULATOR
// Function to calculate and display net salary
function calculateNetSalary() {
  // Get values
  let basicSalary = parseFloat(document.getElementById("basic-salary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  //Calculate payee (i.e. Tax)
  let payee = Math.floor((basicSalary + benefits) * 0.25);

  //Calculate NHIF deductions
  let NHIFDeductions = Math.floor(basicSalary * 0.02);

  //Calculate NSSF deductions
  let NSSFDeductions = Math.floor(basicSalary * 0.12);

  //Calculate gross salary
  let grossSalary = Math.floor(basicSalary + benefits);

  //Calculate net salary
  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

  //Display the net salary
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Your P.A.Y.E is ${payee}</p>
    <p>Your gross salary is ${grossSalary}</p>
    <p>Your NHIF Deduction is ${NHIFDeductions}</p>
    <p>Your NSSF Deduction is ${NSSFDeductions}</p>
    <p>Your net salary is: Ksh. ${netSalary}</p>
    `;
}

// We should add an event listener to the calculate button
let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateNetSalary);