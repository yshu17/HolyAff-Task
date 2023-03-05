// Получаем все элементы с классом "survey_button"
const surveyButtons = document.querySelectorAll('.survey_button');
// Создаем пустой объект для хранения ответов
const answers = [];
// Проходимся по всем кнопкам опросника и добавляем обработчик клика
surveyButtons.forEach(buttonModal => {
  buttonModal.addEventListener('click', () => {
    // Получаем текст выбранного ответа
    const answerText = buttonModal.innerText.trim();
    // Сохраняем ответ в объекте answers
    console.log('answerText :>> ', answerText);
    answers.push(answerText);
  });
});

// Получаем кнопку "Показать ответы"
const showAnswersButton = document.getElementById('p_modal_button3');

// Добавляем обработчик клика на кнопку "Показать ответы"
showAnswersButton.addEventListener('click', () => {
  // Выводим ответы на консоль
  console.log(answers);
});

var id_counter = 10;
function publishComment() {

  // Получаем значение текстового поля с комментарием
  let commentText = document.getElementById("comment-field").value;
  let commentUsername = document.getElementById("comment-username").value;
  // Создаем новый элемент комментария
  let newComment = document.createElement("div");
  newComment.classList.add("comments");
  newComment.setAttribute("id", `comment${++id_counter}`);
  newComment.setAttribute("style", `display:block`)
  

  // Добавляем HTML-разметку для нового комментария
  newComment.innerHTML = `
    <div class="profile">
      <img alt="image" src="./assets/images/1.webp">
    </div>
    <div class="comment-content">
      <p class="name">${commentUsername}</p>
      <p>${commentText}</p>
    </div>
    <div class="clr"></div>
    <div class="comment-status">
      <span>
        Curte·comente
        <img alt="image" src="./assets/images/like.webp" width="15px" height="15px">
        0
      </span>
      <small>·<u>Just now</u></small>
    </div>
  `;

  // Добавляем новый комментарий в список комментариев
  let commentList = document.getElementById("comment-list");
  commentList.prepend(newComment);

  // Очищаем текстовое поле с комментарием
  document.getElementById("comment-field").value = "";
}

