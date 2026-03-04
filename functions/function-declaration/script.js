// function myName(first, last) {
//     return {name: first, lastName: last}
// }

// console.log(myName('Anastasia', 'Tsiklauri'));

// function check_number(num) {
//     if (num % 2 == 0){
//         return 'this number is even'
//     } else {
//         return 'this number is odd'
//     }
// }

// console.log(check_number(10));

// const account = {
//     email: 'ana_tsik@gmail.com',
//     password: 'iAmGod'
// }

// function authorisation(email, password){
//     if (account.email == email && account.password == password){
//         return 'Successfully authorised'
//     } else if (account.email != email && account.password == password){
//         return 'Incorrect email'
//     } else if (account.email == email && account.password != password){
//         return 'Incorrect password'
//     } else {
//         return 'Incorrect email and password'
//     }
// }

// console.log(authorisation('ana_tsik@gmail.com', 'iAmGod'));
// console.log(authorisation('jemala@gmail.com', 'iAmGod'));
// console.log(authorisation('ana_tsik@gmail.com', 'muahaha'));
// console.log(authorisation('jemala@gmail.com', 'muahaha'));

// function findTheBiggest(arr){
//     let biggest_element = arr[0]
//     for (i = 1; i < arr.length; i++){
//         if (arr[i] > biggest_element){
//             biggest_element = arr[i]
//         }
//     }
//     return biggest_element
// }

// console.log(findTheBiggest([1, 5, 3, 99, 88, 0]));

// function sumOfArr(arr){
//     let sum = 0
//     for (i=0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumOfArr([1, 5, 3, 99, 89, 0]));

let vowels = 'aeiou'
let random_arr = [2, 5, true, 'guitars', 8]

function checkVowels(str){
    let vowel_count = 0
    for (j = 0; j < random_arr.length; j++){
        if (typeof random_arr[j] == String){
            for (let i = 0; i < str.length; i++){
                if (vowels.includes(str[i])){
                    vowel_count++
                }
            }
        return vowel_count    
        }
        
        else {
            return 'not a string'
        }   
    }
}

console.log(checkVowels(random_arr));