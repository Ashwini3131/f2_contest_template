/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr
    .filter((arr) => arr.profession === 'developer')
    .map((developer) => console.log(developer));

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((arr) => {
    if (arr.profession === 'developer') {
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredEmployees = arr.filter((item) => item.profession != "admin");
  // Find the index of the admin employee
  //const adminIndex = employees.findIndex((employee) => employee.profession === 'admin');

  // Remove the admin employee object from the array
 // if (adminIndex !== -1) {
 //   employees.splice(adminIndex, 1);
 // }

  // Log the updated array without the admin employee
  console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
    { id: 4, name: 'Anvi', age: 25, profession: 'developer' },
    { id: 5, name: 'Arnav', age: 32, profession: 'admin' },
    { id: 6, name: 'Ashwini', age: 27, profession: 'designer' },
  ];

  // Concatenate the newEmployees array with the employees array
  const concatenatedArray = arr.concat(newEmployees);

  // Log the concatenated array
  console.log(concatenatedArray);

}
