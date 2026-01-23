/**
console.log('Hello World!') //แสดงค่าที่เว็บบราวเซอร์ แสดงที่ Console

//String - ตัวอักษร
let fname = 'John'
console.log('name', fname)
const idcard = 123  //const ค่าคงที่ ไม่สามารถเปลี่ยนแปลงได้
//var ตัวแปรแบบเก่า ไม่แนะนำให้ใช้ ปัจจุบันใช้ let แทน

// number - ตัวเลข
let age = 30
let height = 150.5
const pi = 3.14
fname = 'Tom'

idcard = '456'

console.log('idcard', idcard)

console.log('name', fname, 'age', age)
//console.log('age', age)

// /*คอมเมนต์แบบหลายบรรทัด*/

/**
+ บวก
- ลบ
* คูณ
/ หาร
% mod หารเอาเศษ

let number1 = 'Arisa' //String
let number2 = 'Ratchanawee'

let number3 = number1 + ' ' + number2
console.log('number3 = ', number3)


//condition statement (if, else, switch)
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    >= มากกว่าหรือเท่ากับ
    < น้อยกว่า
    <= น้อยกว่าหรือเท่ากับ
    && || !
 


let number1 = 5
let number2 = 3
let condition1 = number1 <= number2 //Boolean (true, false)
console.log('condition = ', condition1)


//if - else condition
let number1 = 5
let number2 = 5
if (number1 != number2) {
    console.log('condition true')
} else if (number1 == number2) {
    console.log('this else if')
} else {
    console.log('this else')
}


//Grade
 >=80 A
 >=70 B
 >=60 C
 >=50 D


//let score = prompt('ใส่ตัวเลข')
let score = 55
if (score >= 80) {
    console.log('Grade : A')
} else if (score >= 70) {
    console.log('Grade B')
} else if (score >= 60) {
    console.log('Grade : C')
} else if (score >= 50) {
    console.log('Grade : D')
} else {
    console.log('Grade : F')
}


// && และ
// || หรือ
// ! not ไม่

// T && T = T
// T && F = F
// T || F = T

let number1 = 5
let number2 = 10
let condition = !(number1 >= 3 || number2 >= 11)
console.log('result of condition', condition)

let number = 20
if (number % 2 == 0) {
    console.log('You are event')
}


// for loop

let counter = 0
while (counter <= 9) { //True
    console.log('Hi')
    1. //counter = counter + 1
    counter += 1
    3. //counter ++
}

for (let counter = 0; counter < 10; counter ++) {
    console.log('Hi')
}

let age1 = 20
let age2 = 25
let age3 = 30

let ages = [20, 25, 30]
ages = [200, 100, 50]

console.log('age1 age2 age3', age1, age2, age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array', ages)
//console.log('index', ages[0])
//console.log('index', ages)

//ต่อ array
ages.push(25)
console.log('push array', ages)

//ลบ array ตัวสุดท้าย
ages.pop()
console.log('pop array', ages)

let ages = [20, 25, 30, 35, 40]
if (ages.includes(30)) { //true
    console.log('มีเลข 30 อยู่ใน array')
}
*/

/*
let ages = [50, 20, 25, 30, 35, 40]
ages.sort()
console.log(ages)

let name_list = ['aa', 'bb', 'cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list', name_list)
console.log('name_list', name_list.length)

/*console.log('name_list', name_list[0])
console.log('name_list', name_list[1])
console.log('name_list', name_list[2])
console.log('name_list', name_list[3]) //undefined ไม่มีค่าใน index นั้น */

/*
for (let index = 0; index < name_list.length; index++) {
    console.log('name_list', name_list[index])
}

// object การเก็บประเภทข้อมูลหลายๆ มารวมกัน

let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
    age: 35,
    name: 'bb',
    grade: 'B'
}]
student.push ({
    age: 40,
    name: 'cc',
    grade: 'C'
})

for (let index = 0; index < student.length; index++) {
    console.log('Student Number', (index + 1))
    console.log('age', student[index].age)
    console.log('name', student[index].name)
    console.log('grade', student[index].grade)
}


// function

let score1 = 55
let score = 65

let grade = ''

function calcula_grade(score) {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
}
return grade
}

//เรียกใช้ function
let result1 = calcula_grade(score1)
console.log('Grade', result1)


// array

let score = [20, 30, 40, 50]

for (let index = 0; index < score.length; index++) {
    console.log('score', score[index])
}

let newScore = score.filter((s) => {
    return s >= 30
})

newScore.forEach((ns) => {
    console.log('forEach', ns)
})
*/

// object function

let students = [
    {
        name: 'aa',
        score: 50,
        grade: 'A'
    },{
        name: 'bb',
        score: 80,
        grade: 'B'
    }
]

let student = students.find((s) => {
    if (s.name == 'aa') {
        return true
    }
})

let duble_score = students.map((s) => {
    s.score = s.score * 2
    return s
})

let hightScore = students.filter((s) => {
    if (s.score >= 120) {
        return true
    }
})

console.log(student)
console.log('duble_score', duble_score)
console.log('hightScore', hightScore)