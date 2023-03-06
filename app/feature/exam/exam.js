const question = document.querySelector(".question-group");

const scrollTopBtn = document.querySelector(".icon-srtop");
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

var now = new Date();
now.setMinutes(now.getMinutes() + 45);
var countDownDate = now.getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    hours + ":" + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Hết giờ";
  }
}, 1000);

function goToPage(code) {
  console.log(code);
  //   window.location.href = `${link}/app/feature/login-signup/login_signup.html`;
}
let data = [];
for (let i = 1; i < 21; i++) {
  const random = Math.random();
  const result = random < 0.33 ? 1 : random < 0.66 ? 2 : 3;
  let obj = {
    id: i,
    title: `Câu hỏi thứ ${i}`,
    answer1: `Đáp án ${1}`,
    answer2: `Đáp án ${2}`,
    answer3: `Đáp án ${3}`,
    trueAnswer: result,
    isTrueAnswer: false,
  };
  data.push(obj);
}
const miniQuestion = document.querySelector(".list-mini-question");

// miniQuestion.innerHTML = data
//   .map((e) => {
//     return `<div class="col l-2 m-2 c-2">
// <div class="mini-question" style="cursor: pointer;" onclick="scrollToQuestion(${e.id})" id="btn-exam-${e.id}">${e.id}</div>
// </div>`;
//   })
//   .join("");

// question.innerHTML = data
//   .map((e) => {
//     return `<div class="question-item" >
//   <div clss="title  h4" id ="question-${e.id}">Câu ${e.id}: Đây là câu hỏi ${e.id}</div>
//   <div class="answer">
//     <div class="form-check">
//       <input
//         type="radio"
//         class="form-check-input"
//         id="radio${e.id}-answer1"
//         name="optradio${e.id}"
//         onchange="checkBtn(${e.id})"
//         value="radio${e.id}-answer1"
//       />
//       <label class="form-check-label" for="radio${e.id}-answer1"
//         >${e.answer1}</label
//       >
//     </div>
//     <div class="form-check">
//       <input
//         type="radio"
//         class="form-check-input"
//         id="radio${e.id}-answer2"
//         name="optradio${e.id}"
//         value="radio${e.id}-answer2"
//         onchange="checkBtn(${e.id})"

//       />
//       <label class="form-check-label" for="radio${e.id}-answer2"
//         >${e.answer2}</label
//       >
//     </div>
//     <div class="form-check">
//       <input
//         type="radio"
//         class="form-check-input"
//         id="radio${e.id}-answer3"
//         name="optradio${e.id}"
//         value="radio${e.id}-answer3"
//         onchange="checkBtn(${e.id})"

//       />
//       <label class="form-check-label" for="radio${e.id}-answer3"
//         >${e.answer3}</label
//       >
//     </div>
//   </div>
// </div>`;
  // })
  // .join("");

function scrollToQuestion(className) {
  const element = document.getElementById(`question-${className}`);

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

function checkBtn(id){
  const element = document.getElementById(`btn-exam-${id}`);
  element.style.backgroundColor ="aqua"
}