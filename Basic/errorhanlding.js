function  checkAge(age){

    if(age<18){
        throw new Error("Not ");
    }

    console.log("yes");
}

try{
    checkAge(15);
}
catch(error){
    console.log(error.message);
}