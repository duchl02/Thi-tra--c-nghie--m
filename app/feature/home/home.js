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

function goToPage(code) {
    console.log(code);
    console.log(window.linkGlobal);
  window.location.href = `${window.linkGlobal}/app/feature/join-exam/joinExam.html`;
}
