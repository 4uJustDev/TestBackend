//Burger
/*-------------=---------------*/
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
burger.addEventListener('click', (e)=>{
    burger.toggleAttribute('active');
    menu.toggleAttribute('active');
});

// BTN
const btnTegs = document.querySelector('#btnTegs');

// HIDDENBLOCKS
const tegs = document.querySelector('.jsTegs');

// HIDDENLOGIC
btnTegs.addEventListener('click', ()=>{
    tegs.toggleAttribute('active');
})
//variables
const jsAuthor = document.querySelector('.jsAuthor')
const jsDate = document.querySelector('.jsDate')
const jsName = document.querySelector('.jsName')
const jsType = document.querySelector('.jsType')
const jsDescription = document.querySelector('.jsDescription')
const jsPrice = document.querySelector('.jsPrice')
const jsPhoto = document.querySelector('.jsPhoto')
const jsTegs = document.querySelector('.jsTegs')
let Oproduct2 ={
    id: "2",
    author: "AlexAlexAlex",
    date: Date.now(),
    name: "Boing",
    type: "1999999999",
    description: "Thisfdsafsafsdadsfdssda i321321321321321sdbjfhsdgf,ahsskdjasdass my text",
    price: "2",
    photo: "/img/11.jpg",
    tegs: "3D,Blender,Model,inventor"
}
jsAuthor.innerHTML = Oproduct2.author;
jsDate.innerHTML = Oproduct2.date;
jsName.innerHTML = Oproduct2.name;
jsType.innerHTML = Oproduct2.type;
jsDescription.innerHTML = Oproduct2.description;
jsPrice.innerHTML = Oproduct2.price;
jsPhoto.src = Oproduct2.photo;
//Adding tegs

let arrayOfStrings = Oproduct2.tegs.split(",")
for(let i=0; i<arrayOfStrings.length; i+=1){
    let tegLi = document.createElement('li');
    tegLi.className = "liClassification";
    tegLi.innerHTML =`<p>${arrayOfStrings[i]}</p>`
    jsTegs.append(tegLi)
}
