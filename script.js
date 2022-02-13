const buttonToCards = document.querySelector('.my-advertising__to-my-works');
const myWorksSection = document.querySelector('.my-works');

buttonToCards.onclick = function (e) {
    e.preventDefault();
    myWorksSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

const showMoreBtn = document.querySelector('.my-works__show-more');
const workCards = document.querySelectorAll('.card-box__hover-wrap')
if (workCards.length >4){
    showMoreBtn.classList.add('my-works__show-more_show');
}
Array.from(workCards).filter((item, index) =>{
    if (index>3){
        item.classList.add('card-box__hover-wrap_invisible')
    }
});
showMoreBtn.onclick = function showCards (event) {
    event.preventDefault();
    workCards.forEach((element)=>element.classList.remove('card-box__hover-wrap_invisible'));
    showMoreBtn.classList.remove('my-works__show-more_show');
};

document.addEventListener("click", navLink);
document.addEventListener("click", lowNavLink);
function selectSection() {
    const linkName = event.target.getAttribute('data-name');
    let sectionName = document.querySelector(`section[data-name='${linkName}']`);
    sectionName.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
function navLink(event) {
    event.preventDefault();
    if(event.target.closest('.header-content__navlink')){
        selectSection();
    }
}
function lowNavLink(event) {
    event.preventDefault();
    if(event.target.closest('.low-menu__item')){
        selectSection();
    }
}