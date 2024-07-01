const phones = [
    {name: 'samsung', price: 50, mp: 48, quantity: 2},
    {name: 'nokia', price: 10, mp: 8, quantity: 2},
    {name: 'iphone', price: 45, mp: 13, quantity: 2},
    {name: 'htc', price: 25, mp: 1, quantity: 2}
]

const totalCost = phones =>{
    let sum = 0;
    for (const phone of phones) {
        const {price, quantity} = phone;
        sum = sum + (price*quantity);
    }
    return sum;
}
console.log(totalCost(phones));