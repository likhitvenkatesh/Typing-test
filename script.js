let timev = prompt("Enter the time");
document.getElementsByClassName("value")[0].innerHTML=timev;
const quotes = [
    "Life is what happens when you're busy making other plans.",
    "In the end, it's not the years in your life that count, it's the life in your years.",
    "The purpose of life is not to be happy, but to be useful, honorable, and compassionate.",
    "Difficulties in life are intended to make us better, not bitter.",
    "You only live once, but if you do it right, once is enough.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    "Don't wait. The time will never be just right.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Life is not about finding yourself. Life is about creating yourself.",
    "The best way to predict the future is to create it.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain.",
    "Your time is limited, don't waste it living someone else's life.",
    "Life is short, and it’s up to you to make it sweet.",
    "Don't count the days, make the days count.",
    "Live in the present and make it so beautiful that it will be worth remembering.",
    "The secret to life is to love who you are.",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
    "Keep your eyes on the stars and your feet on the ground.",
    "The meaning of life is to give life meaning.",
    "A happy life is one spent in learning, earning, and yearning.",
    "Live for each second without hesitation.",
    "Life is too important to be taken seriously.",
    "The good life is one inspired by love and guided by knowledge.",
    "Don't cry because it's over, smile because it happened.",
    "Life itself is the most wonderful fairy tale.",
    "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    "Life is made of ever so many partings welded together."
];

var randomquote = 0;
var selectedquote = "";
var totalquote = 0;
var pointer1 = 0;
var score = 0;
var totalWordsTyped = 0; 

function randomizer() {
    randomquote = Math.floor(Math.random() * quotes.length);
    selectedquote = quotes[randomquote];
    totalquote += selectedquote.length;
    displayQuote(selectedquote);  
    pointer1 = 0;
}

function displayQuote(quote) {
    const textContainer = document.querySelector(".text-area p");
    textContainer.innerHTML = ''; 
    for (let i = 0; i < quote.length; i++) {
        const span = document.createElement('span');
        span.textContent = quote[i];
        textContainer.appendChild(span);
    }
}

function starttest() {
    timekeep();
    keycheck();
    document.getElementById("start").blur();
    randomizer();
}

function timekeep() {
    var i = timev;
    var timeset = setInterval(function () {
        if (i > 0) {
            i--;
            document.querySelector(".timer .value").innerHTML = (i);
        } else {
            clearInterval(timeset);
            let correctWPM = calculateCorrectWPM();
            document.getElementsByClassName("value")[1].innerHTML = correctWPM;
            document.getElementsByClassName("value")[2].innerHTML = (Math.floor((score / totalquote) * 100));
            document.removeEventListener("keypress",keycheckprocess);
            
        }
    }, 1000);
}

function keycheck() {
    document.addEventListener("keypress", keycheckprocess)
}
function keycheckprocess(event){
        var keyused = event.key;
        var spanElements = document.querySelectorAll('.text-area p span');

        if (pointer1 < selectedquote.length) {
            if (keyused === selectedquote[pointer1]) {
                score++;
                spanElements[pointer1].style.color = "blue";  
            } else {
                spanElements[pointer1].style.color = "red";  
            }
            pointer1++;
        }

        if (pointer1 === selectedquote.length) {
            pointer1 = 0;
            randomizer(); 
        }
    };

function calculateCorrectWPM() {
    let timeInMinutes = 60 / 60; 
    let correctWords = score / 5;
    return Math.floor(correctWords / timeInMinutes);
}

document.getElementById("start").addEventListener("click", starttest);

document.getElementById("reset").addEventListener("click", function () {
    location.reload(true);
});