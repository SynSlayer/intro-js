/* eslint-disable indent */
'use strict';
var today = new Date();
var hourNow = today.getHours();
//console.log('Wade, you entered the number' + hourNow);

var favoriteHobby = prompt('What is your favorite hobby?');
var greeting;

var newHobby = favoriteHobby.toLowerCase();

if(newHobby === 'art'){
    var decisionYN = prompt('Do you like sports');
    if(decisionYN === 'Yes')
        alert('You are correct!');
} else {
    alert('Congratulations, you are wrong!');
}

if(hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');