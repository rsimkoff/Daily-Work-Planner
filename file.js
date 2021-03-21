// variable elements for calender date function
var dateYear = document.getElementById("date");
var dateDAY = document.getElementById("currentDay");
var dateHour = document.getElementById("date");
var saveContent = document.getElementsByClassName("hour");
// constants in connections with each time block 

const nineAM = document.getElementById("9am");
const tenAM = document.getElementById("10am");
const elevenAM = document.getElementById("11am");
const twelvePM = document.getElementById("12pm");
const onePM = document.getElementById("1pm");
const twoPM = document.getElementById("2pm");
const threePM = document.getElementById("3pm");
const fourPM = document.getElementById("4pm");
const fivePM = document.getElementById("5pm");

// add event listeners

hourNine.addEventListener("click", hourNineField);
hourTen.addEventListener("click", hourTenField);
hourEleven.addEventListener("click", hourElevenField);
hourTwelve.addEventListener("click", hourTwelveField);
hourOne.addEventListener("click", hourOneField);
hourTwo.addEventListener("click", hourTwoField);
hourThree.addEventListener("click", hourThreeField);
hourFour.addEventListener("click", hourFourField);
hourFive.addEventListener("click", hourFiveField);

// connect each time block to local storage for save function 

const saveNine = document.getElementById('hourNine');
const saveTen = document.getElementById('hourTen');
const saveEleven = document.getElementById('hourEleven');
const saveTwelve = document.getElementById('hourTwelve');
const saveOne = document.getElementById('hourOne');
const saveTwo = document.getElementById('hourTwo');
const saveThree = document.getElementById('hourThree');
const saveFour = document.getElementById('hourFour');
const saveFive = document.getElementById('hourFive');
























