const parseData = JSON.parse(data);
const container = document.querySelector('div.container');

const template = news__template.content;

parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector('img.item__img').src = element.image;
    newTemplate.querySelector('div.item__title').innerHTML = element.title;
    newTemplate.querySelector('span.item__price-red').innerHTML = element.price;
    const color = newTemplate.querySelector('div.item__color');
    color.innerHTML = color.innerHTML + element.color;
    const size = newTemplate.querySelector('div.item__size');
    size.innerHTML = size.innerHTML + element.size;
    container.appendChild(newTemplate);

});