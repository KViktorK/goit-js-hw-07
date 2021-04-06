const categoriesLength = document.querySelector('#categories').children.length
console.log(`У списку ${categoriesLength} категорії.`)
const categoriesArr = document.querySelectorAll('.item')
for (let el of categoriesArr) {
    const title = el.firstElementChild.textContent
    const elLength = el.lastElementChild.children.length
    console.log(`
    Категорія:${title}
    Кількість елементів:${elLength}
    `)
}