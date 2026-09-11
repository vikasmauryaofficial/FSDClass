//some() and every()


let marks=[80,90,75,95];

//some() check whether at least one element satifies the condition
let lowmarks=marks.some(mark=>mark<40);
console.log(lowmarks);

let highmarks=marks.every(mark=>mark>=40);
console.log(highmarks);