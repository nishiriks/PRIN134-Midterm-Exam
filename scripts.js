document.addEventListener("DOMContentLoaded", function () {
const cards = document.querySelectorAll(".card");
const petButtons = document.querySelectorAll(".btn-full");
const btnSelectAll = document.querySelector("#btn-select-all");
const btnUnselectAll = document.querySelector("#btn-unselect-all");
const btnFirst = document.querySelector("#btn-select-first");
const btnLast = document.querySelector("#btn-select-last");
const btnNext = document.querySelector("#btn-select-next");
const btnPrev = document.querySelector("#btn-select-previous");
const banner = document.querySelector(".banner-content");

let selectedIndex = 0;


function updateSelection(index) {
    if (selectedIndex === index) return;

    cards.forEach((card, i) => {
        card.classList.toggle("card-selected", i === index);
    });
    selectedIndex = index;
}

petButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const icon = this.querySelector("i");
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
    });
});

btnSelectAll.addEventListener("click", function () {
    petButtons.forEach((button) => {
        const icon = button.querySelector("i");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    });
});

btnUnselectAll.addEventListener("click", function () {
    petButtons.forEach((button) => {
        const icon = button.querySelector("i");
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    });
});

btnFirst.addEventListener("click", function () {
    if (selectedIndex === 0) {
        updateSelection(cards.length - 1);
    } else {
        updateSelection(0);
    }
});

btnLast.addEventListener("click", function () {
    if (selectedIndex === cards.length - 1) {
        updateSelection(0);
    } else {
        updateSelection(cards.length - 1);
    }
});

btnNext.addEventListener("click", function () {
    const nextIndex = (selectedIndex + 1) % cards.length;
    updateSelection(nextIndex);
});

btnPrev.addEventListener("click", function () {
    const prevIndex = (selectedIndex - 1 + cards.length) % cards.length;
    updateSelection(prevIndex);
});

banner.addEventListener("click", function () {
    banner.classList.add("animate__animated", "animate__flipInX");
    setTimeout(() => {
        banner.classList.remove("animate__animated", "animate__flipInX");
    }, 1000);
});
});
