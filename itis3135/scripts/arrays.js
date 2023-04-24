let person = [];
let salaries = [];

function addSalary() {
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
  
    // Check for empty inputs and non-numeric salaries
    if (name === "" || salary === "" || isNaN(salary)) {
      alert("Please enter a valid name and salary.");
      return;
    }
  
    // Add the name and salary to the arrays
    person.push(name);
    salaries.push(parseInt(salary));
  
    // Clear the inputs
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";
  
    // Move cursor back to name field
    document.getElementById("name").focus();
  
    // Display the updated table
    displaySalary();
  
    // Display the updated results
    displayResults();
}

function displaySalary() {
    let table = document.getElementById("results_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
  
    for (let i = 0; i < person.length; i++) {
      let row = table.insertRow(-1);
      let nameCell = row.insertCell(0);
      let salaryCell = row.insertCell(1);
      nameCell.innerHTML = person[i];
      salaryCell.innerHTML = salaries[i];
    }
}

function displayResults() {
    let totalSalary = 0;
    let maxSalary = 0;
    
    // Calculate total salary and max salary
    for (let i = 0; i < salaries.length; i++) {
      totalSalary += salaries[i];
      if (salaries[i] > maxSalary) {
        maxSalary = salaries[i];
      }
    }
    
    // Calculate average salary
    let avgSalary = totalSalary / salaries.length;
    
    // Display the results
    let results = document.getElementById("results");
    results.innerHTML = "<h2>Results</h2><p>Average salary: $" + avgSalary.toFixed(2) + "</p><p>Highest salary: $" + maxSalary + "</p>";
}

  