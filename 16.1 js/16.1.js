// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//     return 2;
//     }
//     }
//     funcA();

//     // console.log(a); undefind 
//     // return 2;=2

// -------------------------------------

// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

// // console.log(obj.prop.getFullName()); 'Aurelio De Rosa'
// // console.log(test()); undefind

// -------------------------------------

// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//     }
//     funcB();
//     console.log(typeof a);
//     console.log(typeof b);

//     // console.log(typeof a); undefind
//     // console.log(typeof b); number

// ----------------------------------------

// function funcC() {
//     console.log("1");
//     }
//     funcC();
//     function funcC() {
//     console.log("2");
//     }
//     funcC();

//     //     console.log("2"); 2

// -----------------------------------------

// function funcD1() {
//     d = 1;
//     }
//     funcD1();
//     console.log(d);
//     function funcD2() {
//     var e = 1;
//     }
//     funcD2();
//     console.log(e);

//     // console.log(e); e isn't defined 

// ---------------------------------------

// function funcE() {
//     console.log("Value of f in local scope: ", f);
//     }
//     console.log("Value of f in global scope: ", f);
//     var f = 1;
//     funcE();

//     // console.log("Value of f in local scope: ", f); - 1
//     // console.log("Value of f in global scope: ", f); - undefind


