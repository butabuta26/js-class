// let fruit = [
//     {
//         name: 'banana',
//         quantity: 4,
//         price: 3
//     },
//     {
//         name: 'orange',
//         quantity: 5,
//         price: 4
//     },
//     {
//         name: 'avocado',
//         quantity: 7,
//         price: 5
//     }
// ]

// let my_cart = []

// for (let i = 0; i < fruit.length; i++){
//     fruit[i].price *= fruit[i].quantity
//     let new_item = {name: fruit[i].name, overall_price: fruit[i].price}
//     my_cart.push(new_item)
// }
// console.log(my_cart)

let word = 'hello_world'

let vowels_count = 0
let consonants_count = 0
let other_count = 0

let vowels = 'aeiou'
let consonants = 'bcdfghjklmnpqrstvwxyz'

for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[i])){
        vowels_count++
    }

    if (consonants.includes(word[i])){
        consonants_count++
    }

    else{
        other_count++
    }
}

let newWord = "";
for (let i = word.length - 1; i >= 0; i--){
    newWord += word[i];
}

console.log(newWord)
console.log({whole_length: word.length, vowels: vowels_count, consonants: consonants_count, other: other_count})