let navItems = Array.from(
    document.querySelectorAll('.nav-items .list .item'));
navItems.forEach(item => {
    item.onclick = () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    }
});

let numbers = document.querySelector('.numbers');
let nums  = document.querySelectorAll('.numbers .title');
console.log(nums);
let started = false;
window.onscroll= function(){
    if ( window.scrollY >= numbers.offsetTop){
        if(!started)
        nums.forEach((num)=> startCount(num));
        started= true
    }
}
function startCount(elem){
    let goal= elem.dataset.goal;
    let count = setInterval(() => {
        elem.textContent++;
        if(elem.textContent == goal){
            clearInterval(count);
        }
    }, 3000/goal);
}
