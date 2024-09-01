const list = document.querySelectorAll('.list')
const border = document.querySelector('.border')

function active(event){
    list.forEach((item) => item.classList.remove('active'));
    
    const itemClick = event.currentTarget;
    itemClick.classList.add('active')

    const index = Array.from(list).indexOf(itemClick)
    const set = index * 70;
    border.style.transform = `translateX(${set}px)`
}
list.forEach((item) =>item.addEventListener('click', active));

list.forEach((item) => item.addEventListener('touchstart', active))