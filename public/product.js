// BTN
const btnTegs = document.querySelector('#btnTegs');
const card = document.querySelectorAll(".card")
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


let Oproduct1 ={
    id: "1",
    author: "Alex",
    date: Date.now(),
    name: "Pistol",
    type: "123123123",
    description: "This is my text",
    price: "225",
    photo: "/img/2.jpg",
    tegs: "3D,Blender,Model,inventor,Substruct painter,Airplane"
}
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




function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    console.log('Оригинальная строка: "' + stringToSplit + '"');
    console.log('Разделитель: "' + separator + '"');
    console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
}