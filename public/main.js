const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const create = document.getElementById('btnCreate');
const container = document.querySelectorAll('.container');
const body = document.querySelector("body");
const modalWindow = document.querySelector('.modalWindow');
const modal = document.querySelector('.modal');
// BTN
const btnTegs = document.querySelector('#btnTegs');

// HIDDENBLOCKS
const tegs = document.querySelector('#tegs');

// HIDDENLOGIC
btnTegs.addEventListener('click', ()=>{
    tegs.toggleAttribute('active');
})

/*-------------=---------------*/
burger.addEventListener('click', (e)=>{
    burger.toggleAttribute('active');
    menu.toggleAttribute('active');
});

modalWindow.addEventListener('click',(e)=>{
    modalWindow.style.display = 'none';
    e.stopPropagation();
})
modal.addEventListener('click', (e)=>{
    e.stopPropagation();
})
create.addEventListener('click',(e)=>{
    modalWindow.style.display = 'flex'
});
