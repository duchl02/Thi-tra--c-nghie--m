window.linkGlobal = "http://127.0.0.1:5500"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$(".container__selection-item");
const contents = $$(".container__content");

// CONTAINER-ITEM
items.forEach(function (item, index) {
  item.onclick = function () {
    const content = contents[index];
    // tabActive()
    $(".container__content.active").classList.remove("active");
    $(".container__selection-item.active").classList.remove("active");

    item.classList.add("active");
    content.classList.add("active");
  };
});

function goToExam(code) {
  window.location.href = `${window.linkGlobal}/app/feature/exam/examPage.html`;
}

function goBackHome(code) {
  window.location.href = `${window.linkGlobal}/app/feature/home/homePage.html`;
}

// $(".icon-srtop").on("click", function () {
//     $(window).scrollTop(0);
// });
