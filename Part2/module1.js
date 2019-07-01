const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

//Exporting Method 1 
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;

//Exporting Method 2 
module.exports = {
    sum: sum,
    PI: PI,
    SomeMathObject: SomeMathObject,
}