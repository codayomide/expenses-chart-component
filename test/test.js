// student names
const students = ["James", "Ruth", "John", "Rose", "Jerry", "Chris", "Matthew", "Mark", "Mary", "Linda"];

// grades of students
const marks = [78, 53, 89, 83, 93, 99, 32, 65, 73, 41];

// grades of students for sorting
const marks2 = [78, 53, 89, 83, 93, 99, 32, 65, 73, 41];

// gets the highest mark
const highestMark = (amountsArray) => {
    let amountsArray2 = amountsArray;
    amountsArray2.sort((a, b) => {return a-b});
    return amountsArray.sort()[amountsArray.length-1];
};

// stores the mark in a variable
let highest = highestMark(marks2);

// gets the percentage of marks with respect to the highest mark
const getBarPercentage = (amount, highest) => {
    return (amount*100)/highest;
};

// adds bars to the div element
const addBar = (name, value, percent) => {
    let infoButton = document.createElement('button');
    let infoText = document.createTextNode(`${name} : ${value}`);
    infoButton.classList.add("info");
    infoButton.appendChild(infoText);
    
    let barIn = document.createElement("div");
    barIn.classList.add("bar-in");
    barIn.style.width = `${percent}%`;

    let barOut = document.createElement("div");
    barOut.classList.add("bar-out");
    barOut.appendChild(infoButton);
    barOut.appendChild(barIn);

    document.getElementById("chart-in").appendChild(barOut);
};

// displays all bars
const displayBars = (day, amount, highest) => {
    for (let i=0; i < day.length; i++) {
        addBar(day[i], amount[i], getBarPercentage(amount[i], highest));
    };
};

// displayBars(students, marks, highest);

let daysArray = [];
let amountArray = [];
let amountArray2 = [];

fetch('../data.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(spendings => {
            daysArray.push(spendings.day);
            amountArray.push(spendings.amount);
            amountArray2.push(spendings.amount);
        });

        console.log(daysArray);
        console.log(amountArray);
        console.log(amountArray2);

        let highestSpending = highestMark(amountArray2);
        displayBars(daysArray, amountArray, highestSpending);
    });