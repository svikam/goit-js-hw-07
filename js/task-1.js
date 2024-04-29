const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`);
})
const itemList = document.querySelectorAll('#categories li.item > ul > li');
itemList.forEach(element => {
    element.classList.add('item-element')
})
