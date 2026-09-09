function add(a,b){
return a+b
}

console.log(add(10,20));

//arrow function

const add=(a,b)=>{
    return a+b;
}
console.log(add(10,20));


//default 
function g(name="vikas"){
    console.log(name);
}

g();
g("amit");

//callback function
function display(result){
    console.log(result);
}

function cal(a,b,callback){
    callback(a+b);

}
cal(10,20,display);

