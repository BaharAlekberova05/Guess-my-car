const btnCheck = document.querySelector('.check');
const inputGuess = document.querySelector('.guess');
const questionMark = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const btnAgain = document.querySelector('.again');

const my_cars = [
    {photo : "./images/car-bmw.jpg", name: 'bmw'},
    {photo : "./images/car-camaro.jpg", name: 'camaro'},
    {photo : "./images/car-chevrolet.jpg", name: 'chevrolet'},
    {photo : "./images/car-lamborghini.jpg", name: 'lamborghini'},
    {photo : "./images/car-porsche.jpg", name: 'porsche'},
    {photo : "./images/car-range rover.jpg", name: 'range rover'}
];

let score = 0;

let randomIndex = Math.floor(Math.random() * my_cars.length);
let secretCar = my_cars[randomIndex].name;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


btnCheck.addEventListener('click', function() {
    const guess = inputGuess.value;
    console.log(secretCar);

    if(!guess){
        displayMessage('⛔ No car!');
    } else if ( guess === secretCar) {
       displayMessage('🎉 Correct car!');
       questionMark.src = my_cars[randomIndex].photo;

       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';

       score++;
       scoreElement.textContent = score;
    } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('body').style.backgroundColor = '#8b0000';
        score--;
        scoreElement.textContent = score;
      }
})


btnAgain.addEventListener('click', function() {
    randomIndex = Math.floor(Math.random() * my_cars.length);
    secretCar = my_cars[randomIndex].name;

    displayMessage('🤔 Start guessing...');
    scoreElement.textContent = score;
    questionMark.src = "./images/question.jpg";
    inputGuess.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})