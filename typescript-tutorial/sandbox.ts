// https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI

/*
* Video #1 and #2
*/

/*
const character = 'luigi';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

/*
* Video #3 Types
*/

/*
let character = 'mario';
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(7.5));
*/

/*
* Video #4 Object and arrays
*/

/*
// Arrays
let names = ['mario', 'luigi', 'yoshi']
names.push('toad')
// names.push(3) // Error: not a string
// names[0] = 3; // Error: not a string

let numbers = [10, 20, 30, 40]
numbers.push(25);
// numbers.push('shaun') // Error: not a number
// numbers[1] = 'shaun'; // Error: not a number

let mixed = ['ken', 4, 'chun-li', 8, 9]
mixed.push('ryu')
mixed.push(10)
mixed[0] = 3 // from string to number is possible

// Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40
ninja.name = 'ryu'
// ninja.age = '30'  // Error: cannot change datatype
// ninja.skills = ['fighting', 'sneaking'] // Error: cannot change object

// possible to update values, but it has to match the object's structure
ninja = {       
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: 'fighting'  // Error: cannot change object
}
*/

/*
* Video #5 Explicit types
*/

/*
// Explicitly give the datatypes
let character: string
let age: number
let isLoggedIn: boolean

// Arrays
let ninjas: string[] = []
ninjas.push('shaun')

// Union types
let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(20)
mixed.push(false)
console.log(mixed)

let uid: string|number
uid = '123'
uid = 123

// Objects
let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 30}

let ninjaTwo: {
    name: string
    age: number
    beltColor: string
}
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black'}
*/

/*
* Video #6 Dynamic (any) types
* Think twice before using 'any'
*/

/*
let age: any = 25
age = true
console.log(age)
age = 'hello'
console.log(age)
age = { name: 'luigi'}
console.log(age)

let mixed: any[] = []
mixed.push(5)
mixed.push('mario')
mixed.push(false)
console.log(mixed)

let ninja: { name: any, age: any }
ninja = { name: 'yoshi', age: 25 }
console.log(ninja)

ninja = { name: 25, age: 'ninja' }
console.log(ninja)
*/

/*
* Video #8 Function basics
*/

/*
let greet: Function

greet = () => {
    console.log('hello again')
}

// Parameters inside functions

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c)      // undefined if not given a value
}

add(5, 10)

// OR give it a default value if not passed in

const add2 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)      // default value 10 if not given a value
}

add2(5, 10)         // 15 och 10
add2(5, 10, 20)     // 15 och 20

// Return in functions

// const minus = (a: number, b: number): number => { // : number means the return data type
    const minus = (a: number, b: number) => {
    return a + b
}

let result = minus(10, 7)
*/

/*
* Video #9 Type aliases
*/

/*
type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} har a uid of ${uid}`)
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello again`)
}
*/

/*
* Video #10 Function Signatures
*/

/*
// let greet: Function

// Example 1
let greet: (a: string, b: string) => void               // return void
greet = (name:string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// Example 2
let calc: (a: number, b: number, c: string) => number   // return number
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo
    }
}

// Example 3
let logDetails: (obj: {name: string, age: number}) => void

type person = {name: string, age: number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
*/

/*
* Video #11 The DOM and type casting
https://www.youtube.com/watch?v=hcuKd-Q_tP8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=11
*/

/*
// const anchor = document.querySelector('a')!

// // if(anchor) {
// //     console.log(anchor.href)
// // }

// console.log(anchor.href)

// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form')as HTMLFormElement
// console.log(form.children)

// Input
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  )
})
*/

/*
* Video #12 Classes
*/

/*
class Invoice {
    client: string
    details: string
    amount: number
  
    constructor(c: string, d: string, a: number) {
      this.client = c
      this.details = d
      this.amount = a
    }
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`
    }
  }
  
  const invOne = new Invoice('mario', 'work on the mario website', 250)
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300)
  
  let invoices: Invoice[] = []
  invoices.push(invOne)
  invoices.push(invTwo)
  
  invOne.client = 'yoshi'
  invTwo.amount = 400
  
  console.log(invOne, invTwo)
  console.log(invoices)
  */

/*
* Video #13 Public, private and readonly
*/

/*
class Invoice {
    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ){}
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`
    }
  }
  
  const invOne = new Invoice('mario', 'work on the mario website', 250)
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300)
  
  let invoices: Invoice[] = []
  invoices.push(invOne)
  invoices.push(invTwo)
  
  invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
  })
  */

/*
* Video #15 Interfaces
*/
/*
// Not sure it works in this file, but see it as notes
interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
  }
  
  const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
      console.log(text)
    },
    spend(amount: number): number {
      console.log('I spent', amount)
      return amount
    }
  }
  
  const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
  }
  
  greetPerson(me)
  */