// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let array = [111, 555, 666];
array[1] = 10;
console.log(array);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let stringArray = ['Nastya', ' is the', ' best '];
stringArray[3] = 'in the world!!!'
console.log(stringArray);
// Створити скрипт який поверне суму всіх чисел в масиві.
let numberArray = [1, 2, 3];
    let sum = 0
for (let i = 0; i < numberArray.length; i++) {
    sum = sum + numberArray[i];
}
console.log(sum);
// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let newArray = [1, 2, 3, 4, 5];
for (let index = 0; index < newArray.length; index++) {
    document.write (newArray[index] + " ");
}
document.write ("<br /> <br />");
// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
let newStringArray = ["I", "am", "beatiful", "like", "my Mom!"];
for (let i = 0; i < newStringArray.length; i++) {
    if (newStringArray[i].length > 5) {
        document.write (newStringArray[i] + " ");
    }
    else continue;
}
document.write ("<br /> <br />");
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let maxArray = [6, 19, 8, 4, 92, 17, 6, 2, 7, 34];
let max = maxArray[0];
for (let i = 0; i < maxArray.length; i++) {
    if (max < maxArray[i]) {
        max = maxArray[i];
    }
    else continue;
}
document.write (max);
document.write ("<br /> <br />");
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let evenArray = [6, 19, 8, 4, 92, 17, 18, 2, 7, 34];
for (let i = 0; i < evenArray.length; i++) {
    if (evenArray[i] % 2 === 0) {
        document.write (evenArray[i] + " ");
    }
    else continue
}