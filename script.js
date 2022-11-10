import data from './data.json' assert { type: 'json' };
let stat = document.getElementById("stat");

const createGraph = (graphData, graphContainer) => {
    let daysArray = [];
    let amountArray = [];
    let amountArray2 = [];
    
    graphData.forEach(spendings => {
        daysArray.push(spendings.day);
        amountArray.push(spendings.amount);
        amountArray2.push(spendings.amount);
    });
    
    const highestSpending = (spendingsArray) => {
        let amountsArray2 = spendingsArray;
        amountsArray2.sort((a, b) => {return a-b});
        return spendingsArray.sort()[spendingsArray.length-1];
    };
    
    let highest = highestSpending(amountArray2);
    
    // gets the percentage of marks with respect to the highest mark
    const getBarPercentage = (amount, highest) => {
        return (amount*100)/highest;
    };
    
    const addBar = (day, percent) => {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${percent}%`
    
        if (bar.style.height === "100%") {
            bar.style.background = "hsl(186, 34%, 60%)"
        } else {
            bar.style.background = "hsl(10, 79%, 65%)"
        };
    
        let dayPara = document.createElement("p")
        dayPara.classList.add("day-para")
        dayPara.innerText = `${day}`
    
    
        let barWrapper = document.createElement("div")
        barWrapper.classList.add("bar-wrapper")
        barWrapper.append(bar, dayPara) 
        
        graphContainer.appendChild(barWrapper)
    };
    
    const displayBars = (day, amount, highest) => {
        for (let i=0; i < day.length; i++) {
            addBar(daysArray[i], getBarPercentage(amount[i], highest));
        };
    };
    
    displayBars(daysArray, amountArray, highest);
}

createGraph(data, stat)