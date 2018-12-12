
function readData(){
    resetErrorText();
    
    let empId = document.getElementById("empId");
    let empName = document.getElementById("empName");
    let salary = document.getElementById("salary");

    var canAddEmp = true;

    if(empId.value == ""){
        canAddEmp = validateField("err1", "Id can't be empty");
    }
    else if(! Number.isInteger(parseInt(empId.value))){
        canAddEmp = validateField("err1", "Enter Numeric Value Only");
    }
    else{
        if (isIdDuplicate(empId.value)){
            canAddEmp = validateField("err1", "Id already exist, Enter another Id");
        }         
    }
    if(empName.value == ""){
        canAddEmp = validateField("err2", "Name can't be empty");
    } 
    else if(Number.isInteger(parseInt(empName.value))){
        canAddEmp = validateField("err2", "Enter String Value Only");
    }
    if(salary.value == ""){
        canAddEmp = validateField("err3", "Salary can't be empty");
    } 
    else if(! Number.isInteger(parseInt(salary.value))){
        canAddEmp = validateField("err3", "Enter Numeric Value Only");
    }

    if(canAddEmp){
        addEmployee(empId.value, empName.value, salary.value);
        resetFields(empId, empName, salary);
        renderEmployees(empList);
    }
}

function renderEmployees(empList){
    var table = document.getElementById("Table");
    while (table.lastChild.id !== 'Heading') {
        table.removeChild(table.lastChild);
    }
    
    empList.forEach(employee => {        
        var row = document.createElement('div');
        row.className = 'Row';
        var cell1 = document.createElement('div');
        var cell2 = document.createElement('div');
        var cell3 = document.createElement('div');
        var cell4 = document.createElement('div');
        cell1.className = cell2.className = cell3.className = cell4.className= "Cell";
        cell4.id = employee.id;
        cell1.innerHTML = '<p>' + employee.id + '</p>';
        cell2.innerHTML = '<p>' + employee.name + '</p>';
        cell3.innerHTML = '<p>' + employee.salary + '</p>';
        cell4.innerHTML = '<p>' + "Delete" + '</p>';

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        table.appendChild(row);               
        document.getElementById("empDetails").style.display = 'block';
        
        document.getElementById(employee.id).addEventListener("click", function(){
            deleteEmployee(employee);
            renderEmployees (empList);
        });
    });
}

function validateField(element, message){ 
    document.getElementById(element).innerHTML = message;
    document.getElementById(element).style.display = "inline";
    return false;
}

function resetFields(empId, empName, salary){
    empId.value = "";
    empName.value = "";
    salary.value = "";

}

function resetErrorText(){
    document.getElementById("err1").style.display = "none";
    document.getElementById("err2").style.display = "none";
    document.getElementById("err3").style.display = "none";

}