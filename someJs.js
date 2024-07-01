const fname = "Niloy";
const lname = "Das";
// console.log(fname + " " + lname);

const fullName = `${fname} ${lname}`;
// console.log(fullName);

const numbers = [10, 345, 45, 5, 3, 2, 6, 6];
function gettotal(numbers) {
  let sum = 0;
  for (const num of numbers) {
    const total = num + sum;
    sum = total;
  }
  return sum;
}
// console.log(gettotal(numbers));

const getLargestNumber = numbers =>{
    let largest = numbers[0];
    for (const num of numbers) {
        if(num > largest){
            largest = num;
        }
    }
    return largest;
}
// console.log(getLargestNumber(numbers));


const getLowest = numbers =>{
    let lowest = numbers[0];
    for (const num of numbers) {
        if(num < lowest){
            lowest = num;
        }
    }
    return lowest
}
// console.log(getLowest(numbers));

const roundNumber = 15.164654564;
// console.log(Math.round(roundNumber));
console.log(Math.ceil(5.3));
console.log(Math.floor(5.6));
console.log(Math.pow(2,4));
console.log(Math.abs(2-3));
console.log(Math.round(Math.random()*10));

const tryString = 12.5464;
console.log(JSON.stringify(tryString));
console.log(JSON.parse(tryString));

const newArray = [...numbers,500]
console.log(newArray);

const concatNumber = numbers.concat(newArray)
console.log(concatNumber);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruits.entries();
console.log(list);

const result = numbers.filter(num => num >= 10)
console.log(result);

const result2 = numbers.find(num => num % 2 == 0)
console.log(result2);


// get the odd names of an array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
function getOddNames(fruits){
    let names = [];
    for (const fruit of fruits) {
        if(fruit.length % 2 != 0){
            names.push(fruit)
        }
    }
    return names;
}
console.log(getOddNames(fruits2));


// search using to lowercase & uppercase
const lyrics = "AMI KNO BARBAR pRaMa PODA JAI. AI JONOMA PAIN NA BA PI PORO JONMA JANO PAI."
console.log(lyrics.toLowerCase().includes(("pRama").toLowerCase()));