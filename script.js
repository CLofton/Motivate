


const quotes = [
    "There is no future other than the one we are creating right now. - Chris Lofton",
    "Identify your problems, but give your power and energy to solutions. - Tony Robins",
    "Cold silence has a tendency to atrophy any sense of compassion - Maynard James Keenan",
    "I'm not here. This isn't happening. I'm not here. - Thom Yorke",
    "Ice age coming, throw him in that fire. We're not scaremongering. This is really happening. - Thom Yorke",
    "There is no future other than the one we are creating right now. - Chris Lofton",
    "Identify your problems, but give your power and energy to solutions. - Tony Robins",
    "Cold silence has a tendency to atrophy any sense of compassion - Maynard James Keenan",
    "I'm not here. This isn't happening. I'm not here. - Thom Yorke",
    "Ice age coming, throw him in that fire. We're not scaremongering. This is really happening. - Thom Yorke"
]

function motivate() {
    let numberQuotes = quotes.length;
    let randomDecimal = Math.random();
    let randomNumberwithDecimal = randomDecimal * numberQuotes;
    let randomInteger = Math.floor(randomNumberwithDecimal);
    document.getElementById("displayText").innerHTML = quotes[randomInteger];
    console.log("button is working");
}




// let numberQuotes = quotes.length;

// console.log("number of quotes: " + numberQuotes);

// let randomDecimal = Math.random();

// console.log("Random Decmical: " + randomDecimal);

// let randomNumberwithDecimal = randomDecimal * numberQuotes;

// console.log("random number with decimal " + randomNumberwithDecimal);

// let randomInteger = Math.floor(randomNumberwithDecimal);

// console.log("random integer with decimal removed using the floor method " + randomInteger);

// console.log(quotes[randomInteger]);

//console.log(Math.random());


//console.log(Math.random() * quotes.length);


// let randomNumber = Math.floor(Math.random()*quotes.length);


// console.log(quotes[randomNumber]);