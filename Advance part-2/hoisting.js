//hoisting 

//console.log(name);
//var name="vikas";
//console.log(age);
//let age=14;
//console.log(age);

//temporal dead zone
{
    //tdz start here

    let x=10;

    //tdz end
    console.log(x);

}

//closures
function outer(){
    let counter=0;

    function inner(){
        //inner() remembers counter
        counter++;

        console.log("counter",counter);

    }
    return inner;
 }

 let increment=outer();
 increment();



//higher-order functions
function calculate(a,b,operation){
    return operation(a,b);
} 
function add(x,y){
    return x+y;
}

function multiply(x,y){
    return x*y;
}

console.log();

//.map 

let numbers=[1,2,3,4,4,5];

let square=numbers.map(function(number){
    return number * number;

});
console.log(numbers);
console.log(square);

//using arrow function
let number1=[1,2,3,4,4,5];
let s=number1.map(number=>  number * number);
console.log(s);



let numbers=[1,2,3,4,4,5];
let total=numbers.reduce((sum,number)=>{
    return sum+number;
});


