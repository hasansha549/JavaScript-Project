const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('button');

const urlAPI = 'https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom';
const keyAPI = 'ZFfInDcKk6jQyBW1RnrbYRpWbtEIuOcmyCb19S1L';

const getQuote = () => {
    fetch(urlAPI, {
        headers: {
            'X-Api-Key': keyAPI
        },
    })
        .then(data => data.json())
        .then(item => {
            console.log(item[0]);
            quoteElement.textContent = item[0].quote;
            authorElement.textContent = item[0].author;
            ;

        });
};
getQuote();
button.addEventListener('click', getQuote);
