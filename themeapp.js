
function writeSomthingOnPage(tagName){
    let list = document.querySelectorAll(tagName)
    list.forEach(element=> element.classList.add('writed'))
    list.forEach(element=> element.classList.add('light'))

}
let listOfWrited = ['h1','h2','h3','h4','h4','li','span','p','a']
listOfWrited.forEach(element=> writeSomthingOnPage(element))