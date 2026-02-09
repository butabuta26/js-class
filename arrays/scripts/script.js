
// // !ერთდონიანი მასივი
// const names = ['ana', 'gio', 'daria'];

// console.log(names);
// console.log(names[1]);


// const mixed = ['apple', '5kg', 3, true];

// console.log(mixed);
// console.log(mixed[2]);

// // !მრავალდონიანი მასივი

// const users = [
//     ['ana', 16, 'tbilisi'],
//     ['gio', 13, 'telavi'],
//     ['daria', 10, 'qutaisi']
// ]

// console.log(users);
// console.log(users[0]);
// console.log(users[0][2]);

// // !exercises

// const data = [
//     ['Zeus', 'lightning', 'greece'],
//     ['Anubis', 'justice', 'egypt'],
//     ['Bacchus', 'wine', 'rome'],
//     ['Loki', 'mischief', 'scandinavia']
// ]

// console.log(data);
// console.log(data[2][1]);
// console.log(data[3][2]);





/*
  !  1. shift() => შლის მასივის პირველ ელემენტს
  ! 2. unshift() => ამატებს მასივის პირველ ელემენტს
  ! 3. pop() => შლის მასივის ბოლო ელემენტს
  ! 4. push() => ამატებს მასივის ბოლო ელემენტს

  ! 5. join() => მასივი გადაჰყავს სტრინგად
  !შეგვიძლია დავამატოთ ასევე ნებისმიერი სახის ინფორმაცია, მათ შორის სიმბოლოები
  ! 6. includes() => ამოწმებს არის თუ არა მასივში ესა თუ კონკრ. ელემენტი
  ! 7. concat() => აერთიანებს მასივს, ნებისმიერ ელემენტს
  ! 8. reverse() => ათვლას იწყებს ბოლოდან

  ! 9. slice() => გამოაქვს კონკრ. მითითებული ინფორმაცია
 ! დას. ინდექსი და დას. ინდექსი
 ! 10. splice() => 
    ? 1. შლის მასივის ელემენტს
    ? 2. შლის და ამატებს
    ? 3. მხოლოდ ამატებს

*/


// const fruits = ['🍉', '🍏', '🍒', '🍇', '🍋']

// const del_first_el = fruits.shift()
// console.log(fruits);

// const add_first_el = fruits.unshift('🥐')
// console.log(fruits);

// const del_last_el = fruits.pop()
// console.log(fruits);



// const names = ['ana', 'luka', 'dato', 'cotne']

// const arr_string = names.join('')
// const check_el = names.includes('ana')

// console.log(names);
// console.log(arr_string);
// console.log(check_el);


// const concart_arr = fruits.concat(names)

// console.log(concart_arr);


const nums = [2, 5, 37, 383, 3746];

console.log(nums);

const take_el = nums.slice(0, 3)
console.log(take_el);

const rem_el = nums.splice(1, 4)
console.log(rem_el);

const edit_el = nums.splice(1, 4, true, '🥐', 700)
console.log(edit_el);
