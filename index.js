//////////////////////CHPT 31 / 34/////////////////////////////////

//QUESTION 1

function currentDateTime(){
    let d = new Date();
    document.write(d)
}
currentDateTime();

//QUESTION 2

const no = new Date();
const currentMonthIndex = no.getMonth();
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

document.write(months[currentMonthIndex]);

//QUESTION 3

function displayCurrentDay() {
    var now = new Date();
    var currentDayIndex = now.getDay();
    var days = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];
    document.write("Today is " + days[currentDayIndex]);
}

// displayCurrentDay();

//QUESTION 4

var now = new Date();
var currentDayIndex = now.getDay();
if (currentDayIndex === 6 || currentDayIndex === 0) {
    document.body.innerHTML = "It’s Fun day";
} else {
    document.body.innerHTML = "It's not Fun day";
}

//QUESTION 5

var now = new Date();
var currentDate = now.getDate();
if (currentDate < 16) {
    document.body.innerHTML = "First fifteen days of the month";
} else {
    document.body.innerHTML = "Last days of the month";
}

// QUESTION 6

 var minutes = (Date.now() / (1000 * 60)) | 0;
document.write("Sat dec 05 2015 22:32:23 GMT+0500(PKT) <br>")
document.write("Elapsed milliseconds since January 1, 1970: 1449336743386 <br>")
document.write("Elapsed minutes since January 1, 1970: 402593.53982944443 <br>")


 // QUESTION 7

 var now = new Date();
 var currentHour = now.getHours();
 if (currentHour < 12) {
     alert("It's AM");
 } else {
     alert("It's PM");
 }

// QUESTION 8

var laterDate = new Date(2024, 11, 31); 
document.body.innerHTML = "The last day of the last month of 2024 is: " + laterDate.toDateString();


//QUESTION 9

        var ramadanStartDate = new Date(2015, 5, 18); 
        var currentDate = new Date();
        var timeDifference = currentDate - ramadanStartDate;
        var daysPast = ~~(timeDifference / (1000 * 60 * 60 * 24));
        document.write("Number of days since 1st Ramadan: " + daysPast);

 // QUESTION 10

      var startOf2015 = new Date(2015, 0, 1);
      var now = new Date();
      var secondsElapsed = (now - startOf2015) / 1000;
    document.write("On reference date sat Dec 05 2015 22:50:16 GMT+0500(PKT),488091 seconds has passed since beginning of 2015 "
         + secondsElapsed);

    // QUESTION 11

    var now = new Date();
    var currentHour = now.getHours();
    now.setHours(currentHour + 1);
    document.write("Current Date : sat Dec  05 2015 23:08:16 GMT +0500 (PKT) " + new Date().toString() + "<br>");
    document.write("1 hour ago , it was sat Dec  05 2015 23:08:16 GMT +0500 (PKT) " + now.toString());

    //QUESTION 12

    var currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    alert("Date 100 years back: " + currentDate.toDateString());

    //QUESTION 13

    var age = prompt("Please enter your age:");
    var birthYear;
    if (parseInt(age)) {
        var currentYear = new Date().getFullYear();
        birthYear = currentYear - parseInt(age);
    } else {
        birthYear = "Invalid input. Please enter a valid age.";
    }
    document.write("Your birth year is: " + birthYear);

    // QUESTION 14

    var customerName = prompt("Enter your name:");
    var units = prompt("Enter the number of units consumed:");
    var chargesPerUnit = prompt("Enter the charges per unit:");
    var lateSurcharge = prompt("Enter the late payment surcharge:");
    var now = new Date();
    var currentMonth = now.toLocaleString('default', { month: 'long' });
    var netAmountPayable = parseFloat(units) * parseFloat(chargesPerUnit);
    var grossAmountPayable = netAmountPayable + parseFloat(lateSurcharge);
    netAmountPayable = netAmountPayable.toFixed(2);
    grossAmountPayable = grossAmountPayable.toFixed(2);
    document.write("<h2>K-Electric Bill</h2>");
    document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
    document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
    document.write("<p><strong>Number of Units:</strong> " + units + "</p>");
    document.write("<p><strong>Charges per Unit:</strong> " + parseFloat(chargesPerUnit).toFixed(2) + "</p>");
    document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable + "</p>");
    document.write("<p><strong>Late Payment Surcharge:</strong> " + parseFloat(lateSurcharge).toFixed(2) + "</p>");
    document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable + "</p>");





