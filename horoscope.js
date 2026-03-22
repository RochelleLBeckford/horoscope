/*
& Checkpoint project -> Horoscope

& Horoscope
~ Write a program where the user defines a variable, set to the month they were born in.
~ Then, it should use control flow to randomly print a fortune to the console.

~ Here is a simplified chart of the different signs and their corresponding months:
~ Symbol        Name            Month
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~   ♑️        Capricorn        January
~   ♒️        Aquarius         February
~   ♓️        Pisces           March
~   ♈️        Aries            April
~   ♉️        Taurus           May
~   ♊️        Gemini           June
~   ♋️        Cancer           July
~   ♌️        Leo              August
~   ♍️        Virgo            September
~   ♎️        Libra            October
~   ♏️        Scorpio          November
~   ♐️        Sagittarius      December

~ * Note: Regular horoscopes tend to be more specific to what day of the month one was born.
    ~ This chart is more general and only uses the month. Therefore, the symbol and name printed by this program may not be accurate.
*/
/*
& This problem does not need a for loop since asking to use 'control flow' -> if / else if/ else statements (not loops)
~ This program can depict all 12 months with their own fortune
*/

//~ Define a variable for the horoscope month as a number
// let horoscopeMonth = 6; //~ 6 -> June
// let horoscopeMonth = 12; //~ 12 -> December
//~ Use control flow to find the value for the zodiac sign
// let zodiacSign = '';

// if (horoscopeMonth === 1) {
//     zodiacSign = '♑️ Capricorn for the month of January';
// } else if (horoscopeMonth === 2) {
//     zodiacSign = '♒️ Aquarius for the month of February';
// } else if (horoscopeMonth === 3) {
//     zodiacSign = '♓️ Pisces for the month of March';
// } else if (horoscopeMonth ===4) {
//     zodiacSign = '♈️ Aries for the month of April';
// } else if (horoscopeMonth === 5) {
//     zodiacSign = '♉️ Taurus for the month of May';
// } else if (horoscopeMonth === 6) {
//     zodiacSign = '♊️ Gemini for the month of June';
// } else if (horoscopeMonth === 7) {
//     zodiacSign = '♋️ Cancer for the month of July';
// } else if (horoscopeMonth ===8) {
//     zodiacSign = '♌️ Leo for the month of August';
// } else if (horoscopeMonth === 9) {
//     zodiacSign = '♍️ Virgo for the month of September';
// } else if (horoscopeMonth === 10) {
//     zodiacSign = '♎️ Libra for the month of October';
// } else if (horoscopeMonth === 11) {
//     zodiacSign = '♏️ Scorpio for the month of November';
// } else if (horoscopeMonth === 12) {
//     zodiacSign = '♐️ Sagittarius for the month of December';
// } else {
//     zodiacSign = "Let's not concern yourself with this fortune and wait for your month to arrive";
// }
// console.log(zodiacSign);


//~ Generate a random fortune number (from 1 to 12)
// let randomFortune = Math.floor(Math.random() * 12) + 1;
// console.log(randomFortune);

//~ Print a random fortune message
// let fortune = '';

// if (randomFortune === 1) {
//     fortune = 'A tranquil yet productive day awaits.';
// } else if (randomFortune === 2) {
//     fortune = 'Amazing opportunities are coming your way.';
// } else if (randomFortune === 3) {
//     fortune = 'Great things are just around the corner!';
// } else if (randomFortune === 4) {
//     fortune = 'A peaceful day brings clarity to your mind.';
// } else if (randomFortune === 5) {
//     fortune = 'Success and happiness await you today.';
// } else if (randomFortune === 6) {
//     fortune = 'Your finances are well-managed and daily responsibilities glide along effortlessly.';
// } else if (randomFortune === 7) {
//     fortune = 'Amazing luck awaits you today!';
// } else if (randomFortune === 8) {
//     fortune = 'A peaceful day ahead.';
// } else if (randomFortune === 9) {
//     fortune = 'Take a risk today!';
// } else if (randomFortune === 10) {
//     fortune = 'A wonderfil day is on the horizon for you!';
// } else if (randomFortune === 11) {
//     fortune = 'All your hardwork will bare fruit!';
// } else if (randomFortune === 12) {
//     fortune = 'The will to win begins within';
// } else {
//     fortune = 'Trust your insticnts today';
// }

//~ Print the zodiac sign and fortune message for the month of June
// console.log(zodiacSign + ' -> ' + fortune);


/*
& This program focuses on the Month of June with random fortunes
~ This is nested control flow
*/
//~ Define a variable for the horoscope month as a number
// let horoscopeMonth = 6; //~ 6 -> June
//~ Use control flow to find the value for the zodiac sign and the fortune
// let zodiacSign = '';
// let fortune = '';

// let randomFortune = Math.floor(Math.random() * 6) + 1;

// if (horoscopeMonth === 6) {
//     zodiacSign = '♊️ Gemini';
//     if (randomFortune === 1) {
//         fortune = 'A tranquil yet productive day awaits.';
//     } else if (randomFortune === 2) {
//         fortune = 'Amazing opportunities are coming your way.';
//     } else if (randomFortune === 3) {
//         fortune = 'Your finances are well-managed and daily responsibilities glide along effortlessly.';
//     } else if (randomFortune === 4) {
//         fortune ='All you hardwork will bear fruit.';
//     } else if (randomFortune === 5) {
//         fortune = 'A wonderful day is on the horizon for you.';
//     } else if (randomFortune === 6) {
//         fortune = 'The will to win begins within.';
//     } else {
//         fortune = 'Trust your instincts.';
//     }
// } else {
//     zodiacSign = "Let's not concern yourself with this fortune and wait for your month to arrive.";
// }

//~ Print the zodiac sign and fortune message for the month of June
// console.log(zodiacSign + ' -> ' + fortune);


/*
& This program focuses on the Month of June with random fortunes
~ This project focuses on control flow (which is what the project specifically asks for)
    ~ Meaning if / else if / else statements
*/
//~ Define a variable for tthe horoscope month as a number
let horoscope = 6; //~ 6 -> June
//~ Use control flow to get the value for the zodiac sign
let zodiacSign = '';
// horoscope = 8;

if (horoscope === 6) {
    zodiacSign = '♊️ Gemini';
} else {
    zodiacSign = "Let's not concern yourself with this fortune and wait for your month to arrive.";
}
// console.log(zodiacSign);

//~ Generate a random fortune number (from 1 to 6)
let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);

//~ Use control flow to get a random fortune message
let fortune = '';

//~ Generate a random fortune for the month of June
if (randomNumber === 1) {
    fortune = 'A tranquil yet productive day awaits.';
} else if (randomNumber === 2) {
    fortune = 'Amazing opportunities are coming your way.';
} else if (randomNumber === 3) {
    fortune = 'Your finances are well-managed and daily responsibilities glide along effortlessly.';
} else if (randomNumber === 4) {
    fortune = 'All you hardwork will bear fruit.';
} else if (randomNumber === 5) {
    fortune = 'A wonderful day is on the horizon for you.';
} else if (randomNumber === 6) {
    fortune = 'The will to win begins within.';
} else {
    fortune = 'Trust your instincts.';
}

//~ Print the zodiac sign and a random fortune for the month of June
console.log('For the month of June, the zodiac sign is: ' + zodiacSign + '. \nThis is your fortune message: ' + fortune);
