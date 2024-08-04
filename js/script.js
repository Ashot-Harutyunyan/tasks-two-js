// Найти самое длинное слово в строке
// Напишите функцию find_longest_word(str), которая принимает строку
// в качестве параметра и находит самое длинное слово в строке.

function find_longest_word(str){
    let a = str.split(' ')
    let b = a[0].length
    let c = a[0]
    for(let i = 1; i < a.length; i++){
        if(a[i].length > b){
            b = a[i].length
            c = a[i]
        }
    }
    return c
}

console.log(find_longest_word('Lorem ipsum dolor assumenda amet'))

console.log('------------------------------------------------')

// գրել ֆունկցիա, որը որպես արգումենտ ընդունում է ստրինգ, և
// վերադարձնում է, առաջին չկրկնվող սինվոլը։

function firstUnrepeatableSymbol(str){
    if(typeof(str) !== 'string'){
        return 'invalid argument'
    } 
    let arr = str.split(' ').join('')
    let firstSymbol = 'no non-repeating character'
    for(let i = 0; i < arr.length; i++){ 
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            firstSymbol = arr[i]  
            break
        }
    }
    return firstSymbol
}

console.log(firstUnrepeatableSymbol('Lorem ipsum dolor'))
console.log(firstUnrepeatableSymbol('Lorem ipsum Lorem ipsum'))
console.log(firstUnrepeatableSymbol([1, 'a', 2, 'b']))

console.log('------------------------------------------------')

// 6. Տրված է բնական թվերի հաջորդականություն: Արտածել այդ հաջորդականության

// ա) այն տարրերի քանակը, որոնց թվանշանների 
//    գումարը հավասար է տրված c թվին,

let arr = [123, 456, 789, 321, 654, 987, 111, 222]

function sumOfDigits(arr, n){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        let arg = arr[i]

        while(arg > 0){
            let a = arg % 10
            sum += a
            arg = (arg - a) / 10 
        }

        if(sum === n) count++   
    }

    return count
}

console.log(sumOfDigits(arr, 6))

console.log('------------------------------------------------')

// զ) Ֆիբոնաչիի թվերի քանակը,

let arr1 = [1, 200, 5, 8, 144, 66, 233, 88, 610]

function fib(n){
    let fib1 = 1
    let fib2 = 1
    let nxtFib 
    for(let i = 0; i < n; i++){
        nxtFib = fib1 + fib2
        fib1 = fib2
        fib2 = nxtFib
        if(fib1 == n){
            return true
        }else if(fib1 > n){
            return false
        }
    }
}

function fibNumbers(arg){
    let newArr1 = []
    for(let i = 0; i < arg.length; i++){
        if(fib(arg[i])){
            newArr1.push(arg[i])
        }
    }
    return newArr1.length > 0 ? newArr1 : 0
}


console.log(fibNumbers(arr1))

console.log('------------------------------------------------')

// Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝

// ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,

function repeatingElements(arg){
    let arr = []
    arg.forEach((e)=> {
        if(!arr.includes(e)) arr.push(e)
    })
    return arg.length !== arr.length 
}

console.log(repeatingElements([1, 2, 3, 4, 5, 6, 7]))
console.log(repeatingElements([10, 20, 30, 10, 40, 50, 60, 70]))

console.log('-----------------------------------------------------------')

// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:

function uniqueElementsCount(arg){
    count = 0
    arg.forEach((e)=>{
        if(arg.indexOf(e) === arg.lastIndexOf(e)){
          count++  
        } 
    })
    return count
}

console.log(uniqueElementsCount([1, 2, 3, 4, 1, 2, 40, 30]))
console.log(uniqueElementsCount([1, 2, 3, 4, 10, 20, 40, 30]))

console.log('-----------------------------------------------------------')

//!Гипотеза Коллатца 3n+1 проблема
//Берём любое натуральное число n. Если оно чётное, то делим его на 2,
// а если нечётное, то умножаем на 3 и прибавляем 1 (получаем 3n + 1).
// Над полученным числом выполняем те же самые действия, и так далее.
//Гипотеза Коллатца заключается в том, что какое бы начальное число n мы ни взяли,
// рано или поздно мы получим единицу:

function CollatzConjecture(n){
    while(n > 1){
        if(n % 2 == 0){
            n = n / 2
        }else{
            n = (n * 3) + 1
        }
        console.log(n)
    }
}

CollatzConjecture(10)

console.log('---------------------------------------------------------------------')

// Պատահական տարր զանգվածից
// Գեներացնել պատահական տարր տվյալ զանգվածից:

let arr2 = [12, 24, true, 'boo', 56, 'foo', false, 99]

function randomElement(arg){
    const index = Math.ceil(Math.random() * arg.length -1)
    return arg[index]
}

console.log(randomElement(arr2))

console.log('---------------------------------------------------------------------')

// Պատահական տառ
// Գեներացնել պատահական տառ (A-Z):

function randomLetter(){
    const diffOne = 90 - 65 + 1
    const diffTwo = 122 - 97 + 1
    const randomOne =  Math.floor(Math.random() * diffOne + 65)
    const randomTwo =  Math.floor(Math.random() * diffTwo + 97)
    if(Math.ceil(Math.random() * 2) == 1){
        return String.fromCharCode(randomOne)
    }else{
        return String.fromCharCode(randomTwo)
    }  
}

console.log(randomLetter())

console.log('---------------------------------------------------------------------')

// Պատահական  գույն (RGB)
// Գեներացնել պատահական RGB գույնի արժեք:

function randomColor(){
    let color
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return  color = `rgb(${r}, ${g}, ${b})`
}

console.log(randomColor())

console.log('---------------------------------------------------------------------')

// Պատահական գաղտնաբառ
// Գեներացնել պատահական գաղտնաբառ նշված երկարությամբ:

function randomPassword(length){
    let arr = []
    for(let i = 0; i < length; i++){
        let number = Math.ceil(Math.random() * 122)
        if(number >= 65 && number <= 90){
            arr.push(randomLetter())
        }else if(number >= 97 && number <= 122){
            arr.push(randomLetter())
        }else{
            arr.push(number)
        }
    }
    return arr.join('')
}

console.log(randomPassword(5))

console.log('---------------------------------------------------------------------')