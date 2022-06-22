const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const create = document.getElementById('btnCreate');
const container = document.querySelectorAll('.container');
const body = document.querySelector("body");
const modalWindow = document.querySelector('.modalWindow');
const modal = document.querySelector('.modal');
// BTN
const btncharacteristic = document.querySelector('#btncharacteristic');
const btnusing = document.querySelector('#btnusing');
const btnenviroment = document.querySelector('#btnenviroment');
// HIDDENBLOCKS
const characteristic = document.querySelector('#characteristic');
const using = document.querySelector('#using');
const enviroment = document.querySelector('#enviroment');
// HIDDENLOGIC
btncharacteristic.addEventListener('click', ()=>{
    characteristic.toggleAttribute('active');
})
btnusing.addEventListener('click', ()=>{
    using.toggleAttribute('active');
})
btnenviroment.addEventListener('click', ()=>{
    enviroment.toggleAttribute('active');
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
