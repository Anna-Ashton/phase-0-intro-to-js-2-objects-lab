// Write your solution in this file!
const employee = {
    name: "Ann",
    streetAddress: "Machakos",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value,};

    return newEmployee;
}
const newEmployee = {
    employee, key, value
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const deleteEmployee = {...employee};

    delete deleteEmployee[key];

    return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}
