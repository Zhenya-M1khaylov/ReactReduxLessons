console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(n1: number) {
    return function (n2: number) {
        return n1 + n2
    }
}

console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0
    return function () {
        return ++count
    }
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounterTask3(n: number) {
    let counter = n
    return {
        increase: () => ++counter,
        decrease: () => --counter,
        reset: () => {
            counter = 0
            return counter
        },
        set: (num: number) => {
            counter = num
            return counter
        },
        getCount: () => counter
    }
}

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(num: number) {
    if (num <= 0) return 0
    if (num === 1) return (n: number) => n

    let acc: number[] = []

    function helper(...args: number[]) {
        acc = [...acc, ...args]
        if (acc.length >= num) {
            acc.length = num
            return acc.reduce((acc, number) => acc + number)
        } else {
            return helper
        }
    }

    return helper
}

//@ts-ignore
superSum(3)(2)(5)(3)
//@ts-ignore
superSum(3)(2, 5, 3)
//@ts-ignore
superSum(3)(2, 5)(3, 9)


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumToByLoop(n: number) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result
}

function sumTo(n: number): number {
    if (n === 1) return n
    return n + sumTo(n - 1)
}

console.log(sumTo(100))

// factorial

function factorial(n: number): number {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))

// fib

function fib(n: number): number {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


console.log(fib(77))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

function flat(arr: any) {
    return arr.reduce((acc: any, cur: any) => acc.concat(Array.isArray(cur) ? flat(cur) : cur), []);
};

console.log(flat([333, [222, [444, [985]]]]));
console.log(flat([298, [855], [22, [[89]]], [10, 69]]));


// just a plug
export default () => {
};

