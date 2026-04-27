const randomQuote = [
    'Quality is not an act, it is a habit',
    'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
    'Life is 10% what happens to you and 90% how you react to it.',
    'If you are going through hell, keep going.',
    'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
    'With the new day comes new strength and new thoughts.',
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('button');

function autoQuote() {
    const quoteIndex = Math.floor(Math.random() * 6);
    quoteElement.textContent = randomQuote[quoteIndex]
    // console.log(quoteIndex);
}
autoQuote();

button.addEventListener('click', autoQuote);