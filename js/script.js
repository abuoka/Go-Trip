const topList = document.querySelector('.top');
const topBtn = document.querySelector('.top__btn');

topBtn.addEventListener("click" , function () {
    topBtn.classList.toggle("active")
    topList.classList.toggle('active')
})