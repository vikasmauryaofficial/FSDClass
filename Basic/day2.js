//array destructuring

let marks=[80,85,90];

let [java,python,js]=marks;

console.log(java);
console.log(python);
console.log(js);


//object destructuring

let employee={
    id:101,
    name:"vikas",
    salary:50000
};


let {id , name , salary}=employee;

console.log(id);
console.log(name);
console.log(salary);

//spread operator(...) in array

let arr1=[1,2,3];
let arr2=[...arr1,4,5,6];

console.log(arr2);
//spread operator(...) in object
let obj1={
    name:"vikas",
    age:28
};

let obj2={
    ...obj1,
    city:"delhi"
};
console.log(obj2)
