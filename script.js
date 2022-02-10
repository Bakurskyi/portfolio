const buttonToCards = document.querySelector('.my-advertising__to-my-works');
const myWorksSection = document.querySelector('.my-works');

buttonToCards.onclick = function (e) {
    e.preventDefault();
    myWorksSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}