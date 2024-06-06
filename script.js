const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let carouselBtn = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnailBtn = document.querySelector(".carousel .thumbnail");

toggleBtn.onclick = function()
{
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

nextBtn.onclick = function() {
    showSlider("next");
}

prevBtn.onclick = function() {
    showSlider("prev");
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if(type == 'next') {
        listItem.appendChild(itemSlider[0]);
        thumbnailBtn.appendChild(itemThumbnail[0]);
        carouselBtn.classList.add("next");
    }

    else {
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnailBtn.prepend(itemThumbnail[positionLastItem]);
        carouselBtn.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselBtn.classList.remove("next");
        carouselBtn.classList.remove("prev");
    }, timeRunning)

  
}