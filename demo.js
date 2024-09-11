// const date = new Date().getTime();
// let a = new Date()
// console.log(a);
// let b = new Date(Number(date) + 482000000)
// console.log(b);
// console.log(b-a);
// let data = JSON.parse(localStorage.getItem('followUpVisitMandatory'));

// if(!data){
//     console.log("Hi Vishal");
// }else{
//     console.log("Bye Vishal");
// }

// console.log(cal(5));
// function cal(x){
//     if(x <= 1){
//         return 1
//     }else{
//         return x * arguments.callee(x-1)
//     }
// }

// var d = {
//     i:1,
//     j:2,
//     k:3
// }

// var r1 = Object.keys(d);

// var r2 = Object.values(d);

// console.log(r1, r2);

// var c = ['black','red','green']
// c.push('blue')
// c.shift();
// console.log(c);

// var r1 = Math.ceil(56.7)
// var r2 = Math.round(56.7)
// var r3 = Math.floor(56.7)

// console.log(r1, r2, r3);

// var t = 'usage of string methods'
// console.log(t.slice(3,-4));
// console.log(t.substring(3,-4));
// console.log(t.substr(3,-4));

// let arr = "ranjan kumar"
// let arr2 = []
// let arr3 = []

// for (let i = 0; i < arr.length; i++) {
//     if(!arr2.includes(arr[i])){
//         arr2.push(arr[i]);
//     }else{
//         if(!arr3.includes(arr[i])){
//             arr3.push(arr[i]);
//         }
//     }
// }
// for(let i = 0; i < arr3.length; i++) {
//     console.log(arr3[i]);
// }



// console.log(arr3);

// const readline = require("readline-sync");

// var a = Number(readline.question());
// var arr = []
// for(let i = 0; i < a.length; i++) {
//     var b = Number(readline.question())
//     arr.push(b)
// }
// const arr = [1,1,45,6,4,3]
// let max = -Infinity;
// let secondMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax && arr[i] < max) {
//     secondMax = arr[i];
//   }
// }

// console.log(secondMax); // Output: 8

// const v = [1, 2, 2, 8, 6, 4, 8, 3, 2, 9, 4];
// const l = v.length;
// for (let j = 0; j < 2; j++) {
//   let m = v[0];
//   for (let i of v) {
//     if (m > i) {
//       m = i;
//     }
//   }
//   v.splice(v.indexOf(m), 1);
// }
// console.log(m);


var createCounter = function(init) {
    return {
        increment: function() {
            incrementCount = init
            return incrementCount++
        },

        reset: function() {
            resetCount = init
            return resetCount
        },

        decrement: function() {
            decrementCount = init
            return decrementCount--
        },
    }
};

const counter = createCounter(0);
console.log("output 1", counter.increment()); // 1
console.log("output 2", counter.increment()); // 2
console.log("output 3", counter.decrement()); // 1
console.log("output 4", counter.reset()); // 0
console.log("output 5", counter.reset()); // 0