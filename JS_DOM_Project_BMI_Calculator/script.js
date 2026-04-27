let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');

let score = document.getElementById('score');
let result = document.querySelector('.result');
let pTag1 = document.querySelector('.pTag1');
let pTag2 = document.querySelector('.pTag2');
let pTag3 = document.querySelector('.pTag3');


button.addEventListener('click', function () {
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight = newHeight / 100;
    let sqrHeight = newHeight * newHeight;

    let bmi = newWeight / sqrHeight;
    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';
    console.log(bmi.toFixed(2));

    if (score.textContent < 18.6) {
        score.style.background = 'rgb(255, 252, 67)';
        pTag1.style.background = 'rgb(255, 252, 67)';
    } else if (score.textContent < 24.9) {
        score.style.background = 'rgb(59, 255, 118)';
        pTag2.style.background = 'rgb(59, 255, 118)';
    } else {
        score.style.background = 'rgb(255, 0, 0)';
        score.style.color = 'white';
        pTag3.style.background = 'rgb(255, 0, 0)';
    }

});

let form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
})