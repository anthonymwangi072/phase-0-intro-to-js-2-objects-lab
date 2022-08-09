// Write your solution in this file!
const employee = {
  name: "Anthony Mwaniki",
  streetAddress: "Mwangi iriika crescent"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  console.log(newEmployee);
  newEmployee[key] = value;
  return newEmployee;


}

console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "Mwangi iriika crescent"));




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value) {
   employee[key] = value;
  return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "mwangi iriika crescent"));

function deleteFromEmployeeByKey(employee, key) {
const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;

}
console.log(deleteFromEmployeeByKey(employee, "streetAddress", "mwangi iriika crescent"));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;

}