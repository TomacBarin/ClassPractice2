import { Person } from "./Person.js";

const person1 = new Person(
    "Hasse",
    "Ivarsson",
    74,
    true,
    ["äta spenatsoppa", "titta på fåglar"],
    {
        role: "pensionär",
        country: "Sweden",
    }
)

const person2 = new Person(
    "Matilda",
    "Ivaldsson",
    34,
    false,
    ["löpning", "simning"],
    {role: "student", country: "Sweden"}
)

const person3 = new Person(
    "Mikael", 
    "Jansson",
    28,
    true,
    ["fotografi", "skogspromenader"],
    {role: "student", country: "Norge"}
)

const allPeople = [person1, person2, person3];

console.log(person1.getInfo())
console.log(person2.getInfo())
console.log(person3.getInfo())

// Visa i dom:
const outputHtml = document.querySelector("output");

