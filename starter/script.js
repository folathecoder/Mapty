'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//OOP

//TODO: PROTOTYPAL METHOD

// const User = function(firstName, lastName, email, password) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.userName = function() {
//     const name = this.firstName + ' ' + this.lastName;
//     const username = name.toUpperCase().split(' ').map((name) => name[0]).join('');
//     return username;
// }
// User.prototype.info = function() {
//     return `Hey ${this.firstName} ${this.lastName}! You are welcome to Mapty App. Your username is ${this.userName()}, email address is ${this.email}, and your login password is ${this.password}. Please confirm your details!`;
// }

// // Inheritance

// const Admin = function(firstName, lastName, email, password, position) {
//     User.call(this, firstName, lastName, email, password);
//     this.position = position;
// }

// //Inherit the Method
// Admin.prototype = Object.create(User.prototype);

// //Polymorphism
// Admin.prototype.info = function() {
//     return `Hey Admin ${this.firstName} ${this.lastName}! You are welcome to Mapty App. Your username is ${this.userName()}, email address is ${this.email}, and your login password is ${this.password}. Please confirm your details!`;
// }

//TODO: CLASS METHOD

// class User {
//     constructor(firstName, lastName, email, password) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.password = password;
//     }
//     userName() {
//         const name = this.firstName + ' ' + this.lastName;
//         const username = name.toUpperCase().split(' ').map((name) => name[0]).join('');
//         return username;
//     }
//     info() {
//         return `Hey ${this.firstName} ${this.lastName}! You are welcome to Mapty App. Your username is ${this.userName()}, email address is ${this.email}, and your login password is ${this.password}. Please confirm your details!`;
//     }
// }

// //Inheritance

// class Admin extends User {
//     constructor(firstName, lastName, email, password, position) {
//         super(firstName, lastName, email, password);
//         this.position = position;
//     }
//     info() {
//         return `Hey ${this.position} ${this.firstName} ${this.lastName}! You are welcome to Mapty App. Your username is ${this.userName()}, email address is ${this.email}, and your login password is ${this.password}. Please confirm your details!`;
//     }
// }

// const user1 = new User('Folarin', 'Akinloye', 'folathecoder@gmail.com', 12345);
// const user2 = new User('Bola', 'Amusa', 'amusa@gmail.com', 2303290);
// const admin1 = new Admin('David', 'Beckham', 'dave@gmail.com', 29403, 'Supervisor');

// console.log(admin1.info());

//TODO: GEOLOCATION API

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //Success
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}z`);

      const map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    },

    function () {
      //Failure
      alert('Could not get current position');
    }
  );
}
