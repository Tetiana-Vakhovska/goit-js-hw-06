const allitem = document.querySelectorAll('ul#categories li.item');
const sumitem = allitem.length;
console.log(`Number of categories: ${sumitem}`);
for (let i = 0; i < sumitem; i += 1){
    const categoryEL = allitem[i].firstElementChild.textContent;
    console.log(`Category: ${categoryEL}`);
    const elementsItem = allitem[i].lastElementChild;
    const sumElements = elementsItem.querySelectorAll(`li`);
    console.log(`Elements: ${sumElements.length}`);
}