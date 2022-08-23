const employee = {name,streetAddress};


function updateObjectWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function updateObjectWithKeyAndValue(employee, key, value) {
    const newObj = employee.assign({}, employee, {[key]: value});
    return newObj;
  }

  function destructivelyUpdateObjectWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromObjectByKey(employee, key) {
    const newObj = Object.assign({}, employee;
    delete newObj[key];
    return newObj;
  }

  function destructivelyDeleteFromObjectByKey(employee, key) {
    delete employee[key];
    return employee;
  }