let daynames = [
    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday"
];
let months = [
    "January"
    "February"
    "March"
    "April"
    "May"
    "June"
    "July"
    "August"
    "September"
    "October"
    "November"
    "December"
];
let d = new Date();
let dayname = daynames[d.getday()];
let monthname = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayname + ", " + monthname + ", " + d.getDate() + ", " + year;

document.getElementById("currentdate").textContent = fulldate;
// *******************************
try {
    let options {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e){
    alert("Error with your code or browser does not support locale");
}