// import { user } from './login.js'

// const myData = "data";
// const intitalString = "This is";
// const closingPuncutation = "!";

// console.log(`${intitalString}${user.name}'s${closingPuncutation}`);

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// class CarWithEngine extends Car {
//     constructor(name, year, engine) {
//         super (name, year);
//         this.engine = engine;
//     }
// }

// const jacobsCar = new CarWithEngine("Nissan s15", 2001, "V6");

// const myObj = {
//     argOne: "one",
//     argTwo: "two",
//     argThree: "three",
//     argFour: { test: "test", test2: "test2" }
// };

// function myFunc ({argFour: { test, test2 }}, otherData) {
//     console.log(test, test2, otherData);
// }

// myFunc(myObj, "other");

// const myQuery = new Promise((resolve, reject) => {
//     getData();
// });

// const getData = () => setTimeout(() => {
//     console.log("test");
// }, 5000);

// const fetchMovieData = async () => {
//     await fetch("https://www.omdbapi.com/?s=star%20wars&apikey=b1114fdf")
//     .then((data) => {
//         console.log(data.json());
//     }).catch((err) => {
//         console.log(err);
//     })
// };

// fetchMovieData();

let myMovieList;
let myMovie;

async function fetchMovieDataByName(title) {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=b1114fdf`);
    myMovieList = response.json();
}

async function fetchMovieDataById(id) {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=b1114fdf`);
    myMovie = response.json();
}

await fetchMovieDataByName("star wars");
await fetchMovieDataById("tt0080684");

console.log(await myMovieList);
console.log(await myMovie);