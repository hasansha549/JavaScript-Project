const randomQuotes = [
    {
        quote: 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
        author: 'Pal Woan',
    },
    {
        quote: 'Quality is not an act, it is a habit',
        author: 'Aristole'
    },
    {
        quote: 'Life is 10% what happens to you and 90% how you react to it.',
        author: 'Charles R. Swindoll',
    },
    {
        quote: 'If you are going through hell, keep going.',
        author: 'Winston Churchill',
    },
    {
        quote: 'With the new day comes new strength and new thoughts.',
        author: 'Eleanor Roosevelt',
    },
    {
        quote: 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
        author: 'Samuel Beckett',
    },
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('button');

function autoQuote() {
    const quoteIndex = Math.floor(Math.random() * randomQuotes.length);
    quoteElement.textContent = randomQuotes[quoteIndex].quote;
    authorElement.textContent = randomQuotes[quoteIndex].author;
    // console.log(quoteIndex);
}
autoQuote();

button.addEventListener('click', autoQuote);