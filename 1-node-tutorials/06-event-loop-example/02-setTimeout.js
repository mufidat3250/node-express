

//run the first
console.log('first')
// only run the call back if all code 
setTimeout(() => {
    console.log('second')
}, 0);
console.log('third')