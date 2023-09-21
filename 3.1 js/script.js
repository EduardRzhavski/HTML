// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
const welcome = () => 'Welcome to Appleseeds Bootcamp!';
    
console.log(welcome());

// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
//     }
const power = a => Math.pow(a, 2);
    
console.log(power(2));

//     function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
//     }
const add = (a, b = 5) => a + b;
    
console.log(add(10));


//     const hello = () => "Hello!";
function Hello() {
    let Hello = 'Hello!';
    return Hello;
}
console.log(Hello());

//     const squareRoot = a => Math.sqrt(a);
    function squareRoot(a) {
        let myNumber = a;
        let result = Math.sqrt(myNumber);
        return result;
        }
        console.log(power(3));


//     const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers(a, b) {
        let myNumber1 = a;
        let myNumber2 = b;
        let sum = (a - b) + b;
        return sum;
        }

        console.log(randomNumbers(10,5));

