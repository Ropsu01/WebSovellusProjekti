function openTab(tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and activate the tab link
    document.getElementById(tabName).style.display = "block";
    document.querySelector('button[data-tab="' + tabName + '"]').classList.add("active");
}

window.onload = function () {
    openTab('main');      // Set "main" as the default active main tab
    openEpisodeTab('season1'); // Set "season1" as the default active episode tab
}



function openEpisodeTab(tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("episode-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("episode-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and activate the tab link
    document.getElementById(tabName).style.display = "block";
    document.querySelector('button[data-tab="' + tabName + '"]').classList.add("active");
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imageSlides");
  var thumbnails = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function checkAnswers() {
  let correctAnswers = 0;

  let q1 = document.querySelector('input[name="q1"]:checked').value;
  if (q1 === "b") correctAnswers++;

  // Check other questions similarly...

  let results = document.getElementById("results");
  results.textContent = `You got ${correctAnswers} out of X correct!`;  // Replace X with total number of questions
}


const quizData = [
  {
    question: 'Who is the main character in "Breaking Bad"?',
    options: ['Jesse Pinkman', 'Hank Schrader', 'Walter White', 'Saul Goodman'],
    answer: 'Walter White',
  },
  {
    question: 'What is Walter White’s alias in the drug world?',
    options: ['Heisenberg', 'Ice Man', 'Blue King', 'Meth Master'],
    answer: 'Heisenberg',
  },
  {
    question: 'What color of meth do Walter and Jesse manufacture?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    answer: 'Blue',
  },
  {
    question: 'Which character is a lawyer with colorful advertisements?',
    options: ['Mike Ehrmantraut', 'Saul Goodman', 'Gus Fring', 'Ted Beneke'],
    answer: 'Saul Goodman',
  },
  {
    question: 'Who is the owner of Los Pollos Hermanos?',
    options: [
      'Hank Schrader',
      'Walter White',
      'Gus Fring',
      'Todd Alquist',
    ],
    answer: 'Gus Fring',
  },
  {
    question: 'What does Walter White initially start manufacturing meth for?',
    options: ['For fun', 'Peer pressure', 'To leave money for his family after his death', 'Addiction'],
    answer: 'To leave money for his family after his death',
  },
  {
    question: 'Who shot Gale Boetticher?',
    options: [
      'Mike Ehrmantraut',
      'Saul Goodman',
      'Jesse Pinkman',
      'Walter White',
    ],
    answer: 'Jesse Pinkman',
  },
  {
    question: 'Which character is a former police officer and works for Gus Fring?',
    options: ['Walter Jr.', 'Saul Goodman', 'Mike Ehrmantraut', 'Skinny Pete'],
    answer: 'Mike Ehrmantraut',
  },
  {
    question: 'What is the name of Walter White’s son?',
    options: [
      'Jesse Jr.',
      'Flynn',
      'Bryan',
      'Jack',
    ],
    answer: 'Flynn',
  },
  {
    question: 'Who did Walter White let die by choking on her own vomit?',
    options: ['Lydia Rodarte-Quayle', 'Jane Margolis', 'Skyler White', 'Marie Schrader'],
    answer: 'Jane Margolis',
  },
];


const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function initializeQuiz() {
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  submitButton.style.display = 'inline-block';
  resultContainer.innerHTML = '';
  quizContainer.style.display = 'block';
  displayQuestion();
}


function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

initializeQuiz();

displayQuestion();

function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

function displayDate() {
  document.getElementById("demo2").innerHTML = Date();
}

function myTimer() {
  alert('Hello');
}


function loadDoc() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    if (this.status == 200) {  // Check if request was successful
      document.getElementById("responseContent").innerHTML = this.responseText;
    } else {
      console.error("Request failed with status:", this.status);
    }
  }

  xhttp.onerror = function() {
    console.error("Request failed");
  };

  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}

