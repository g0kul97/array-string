
const arr1 = ['amal', 'ajal', 'shine','john','carol','ajal']
const arr2 = [1,2,3,4,5,6,7,8,9,0]
const arr3 = [10,20,30,40,50,60]
const arr4 = ['mango','orange','strawberry','banana']
const arr5 = [1,2,[3,[4,[5]]]]
const arr6 = ['UAE','USA','UK','CANADA','INDIA']
const arr7 = [1,2,3,4,5,6,7]


//1. concat() -

const array = arr1.concat(arr2)
console.log(array);

//2. every ()-

 const positive = arr3.every(function(num){
    return num > 0
 })
console.log(positive);

//3. Fill()-

let fruits = arr4
 fruits.fill('kiwi',3,4)
 console.log(fruits);

//4.  Find()-

let words = arr4
const longWord = words.find(function(word) {
    return word.length > 6;
});
console.log(longWord);

//5. Find Index()-

const search= arr2.findIndex(three);
function three(ser) {
    return ser=== 3;
}
console.log(search);

//6.flat() -

const res = arr5.flat(Infinity);
console.log(res);

//7.forEach()- 

const each = arr4.forEach(function (fruits) {
    console.log("listed fruits in Array 2:",fruits);
})

//8.includes()-

const fruit = arr4.includes('kiwi');
console.log(fruit);

//9.indexOf() -

const name = arr1.indexOf('john');
console.log(name);

//10.join()-

const countries = arr6.join('|');
console.log(countries);


//11.lastIndexOf()-

const user = arr1.lastIndexOf('ajal');
console.log(user);

//12.pop()-

const numb = arr3.pop();
console.log(arr3);

//13.push()-

const psh = arr2.push(10,11);
console.log(arr2);

//14. Reverse()-

const rev = arr3.reverse();
console.log(rev);

//15.unshift()-

const unsh = arr2.unshift(0);
console.log(arr2);

//16.shift()-

const shif = arr2.shift();
console.log(arr2);

//17.slice()-

const number= arr3.slice(1,4);
console.log(number);

//18.some()-

const n = arr2.some(greater);

function greater(item){
    return item >5;
}
console.log(n);

//19.sort()- 

const person = arr1.sort();
console.log(person);

//20.splice() -

const range = arr3.splice(2, 4);
console.log(arr3);

//21.toString()-

const f = arr4.toString();
console.log(f);

//22.Filter()- 

const e = arr2.filter(even);

function even(value){
    return value % 2===0;

}
console.log(e);

//23.Reduce()-

const total = arr7.reduce(sum,0);
function sum(accumulator,val) {
    return accumulator+val;
}
console.log(total);

//24.Map()-

const double = arr7.map(multi);
function multi(fig) {
    return fig *2;
}
console.log(double);

//25.forEach()-

const b = arr6.forEach(function (place) {
    console.log("I want to visit:",place);
})
