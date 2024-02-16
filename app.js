//Цикл должен проходится по массиву и просто выводить среднюю арифметическую
const numbers = [10, 15, 20, 25, 30];
    let average = 0;

for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
}
average = average / numbers.length;
console.log("Среднее значение в массиве:", average);














function averageOfPositiveNumbers(...numbers) {
    let sum = 0;
    let count = 0;

    for (let number of numbers) {
        if (number > 0) {
            sum += number;
            count++;
        }
    }

    if (count === 0) {
        console.log("Нет положительных чисел для вычисления среднего значения.");
        return;
    }

    const average = sum / count;
    console.log("Среднее арифметическое положительных чисел:", average);
}

averageOfPositiveNumbers(2, -78, 45, 4, -7, -6, -10, 26, 30, 8);









function sumOfSquaresOfEvens(numbers) {
    let sum = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            sum += number * number;
        }
    }

    return sum;
}


const nums = [1, 2, 3, 4, 5, 6];
const result = sumOfSquaresOfEvens(nums);
console.log("Сумма квадратов четных чисел:", result);








function isPrime(number) {
    if (number <= 1) {
        console.log(false);
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}


isPrime(7)
isPrime(10)
isPrime(17)

