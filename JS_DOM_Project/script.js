const body = document.getElementById('body');
const listLi = document.querySelectorAll('li');

/*
? 01____Method:
*/
// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function () {
//     body.style.background = 'rgb(255, 110, 110)'
// });

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function () {
//     body.style.background = 'rgb(161, 255, 160)'
// });

// const blueColor = document.querySelector('.blue');
// blueColor.addEventListener('click', function () {
//     body.style.background = 'rgb(84, 201, 255)'
// });

// const pinkColor = document.querySelector('.pink');
// pinkColor.addEventListener('click', function () {
//     body.style.background = 'pink'
// });

/*
? 02____Method:
*/

// listLi.forEach(function (value) {
//     value.addEventListener('click', function () {
//         let className = this.classList.value;
//         body.style.background = className;
//         console.log(className);
//     })
// });

/*
? 03____Method:
TODO: Modern
*/

listLi.forEach(function (value) {
    value.addEventListener('click', function () {
        let className = this.classList[0];
        let color = '';
        if (className === 'red') {
            color = 'rgb(255, 110, 110)'
        };
        if (className === 'green') {
            color = 'rgb(161, 255, 160)'
        }
        if (className === 'blue') {
            color = 'rgb(84, 201, 255)'
        }
        if (className === 'pink') {
            color = 'pink'
        }
        if (className === 'purple') {
            color = 'rgb(176, 120, 255)'
        }
        body.style.background = color;
        console.log(className);
        console.log(color);
    })
});