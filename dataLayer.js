let empList = [];

function addEmployee(empId, empName, salary){
    let emp = {}
    emp["id"] = empId;
    emp["name"] = empName;
    emp["salary"] = salary;
    empList.push(emp);
  //  return empList;
}

function isIdDuplicate(empId){
    let isDuplicate = false;
    if(empList.length > 0){
        empList.forEach(employee => {
            alert(empId + "  " + employee.id)
            if(empId == employee.id){
                isDuplicate = true;
            }   
        });
    }
    return isDuplicate;
 }


function deleteEmployee(employee){
    let index = empList.indexOf(employee);
    if (index > -1) {
        empList.splice(index, 1);
    }
   // return empList;
}