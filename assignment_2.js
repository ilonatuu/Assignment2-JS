// Задание 8.7.1

// Создайте функцию printInfo, которая будет выводить информацию о человеке в 
// формате "Name: <имя>, Age: <возраст>". Создайте объект person с двумя свойствами: name и age. 
// Используйте метод call, чтобы вызвать функцию printInfo от имени объекта person.



const person = {
    full_name: 'Rishi Sunak',
    age: 43,
}

function printInfo(){
    console.log(`Name: ${this.full_name}, Age: ${this.age}`)
}

printInfo.call(person)




// Задание 8.7.2

// Создайте функцию calculate, которая будет принимать три параметра: a, b и operator. 
// Функция должна производить математическую операцию между a и b в зависимости от значения 
// operator (может быть "+", "-", "*" или "/") и возвращать результат операции. 
// Используйте метод apply, чтобы вызвать функцию calculate с передачей объекта со 
// значениями a, b и operator в качестве первого аргумента и массива с 
// тремя значениями [2, 3, "+"] в качестве второго аргумента.



function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}


let result = calculate.apply(null, [2, 3, "+"]);
console.log(result); 




// Задание 8.7.3

// Есть массив объектов, представляющих собой пользователей, каждый из которых имеет 
// свойство age (возраст). Создайте новый массив, содержащий только тех пользователей, 
// чей возраст больше или равен 18. 
// Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.



const users = [
    {
        name: 'George',
        age: 40
    },
    {
        name: 'Victoria',
        age: 22
    },
    {
        name: 'Maria',
        age: 65
    },
    {
        name: 'Maximus',
        age: 11
    },
    {
        name: 'James',
        age: 39
    },
    {
        name: 'Mari-Liis',
        age: 17
    },
]


// ---> Все кто старше 18

function adults(users){

    let over18 = []
    for (let user of users){
        if (user.age >= 18){
            over18.push(user)
        }
    }
    return over18
}

let printPeople = adults(users)
console.log(printPeople)


// ---> массив с именами 

function namesOnly(users){

    let userNames = []
    for (let user of users){
        userNames.push(user.name)
    }
    
    return userNames

}

let printNames = namesOnly(users)
console.log(printNames)




// Задание 8.7.4

// Создайте функцию setFullName, которая будет устанавливать свойство fullName у 
// переданного ей объекта. Используйте метод bind, чтобы создать новую функцию 
// setPersonFullName, которая будет устанавливать fullName для объекта person из 
// предыдущего примера. Вызовите setPersonFullName с параметром "John Smith" и убедитесь, 
// что свойство fullName объекта person было изменено соответствующим образом.

const person2 = {
    firstName: 'Leonardo',
    lastName: 'Da Vinci'
};

function setFullName(fullName) {
    this.fullName = fullName
}

const setPersonFullName = setFullName.bind(person2)

setPersonFullName("John Smith")

console.log(person2.fullName)




// Задание 8.7.5

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// содержащий только уникальные числа, отсортированные в порядке возрастания.

function sortNumbers(arr) {

    const uniqueSet = new Set(arr)
    const uniqueArr = Array.from(uniqueSet)
    uniqueArr.sort((a, b) => a - b)

    return uniqueArr
}


const arrayOfNumbers = [1, 8, 0 , 10, 55, 3, 80, 100]
const printUniqueArray = sortNumbers(arrayOfNumbers)
console.log(printUniqueArray)