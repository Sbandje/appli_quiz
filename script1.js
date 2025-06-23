 const questions = document.querySelectorAll('.question');
  const nextButton = document.getElementById('nextButton');
  let currentQuestionIndex = 0;
  let question20 = document.getElementById('question20')
  let displayTime = 60000; // Temps d'affichage en millisecondes (60 secondes)

  function showQuestion(index) {
    questions.forEach(question => question.style.display = 'none');
    questions[index].style.display = 'block';
   
  }

  function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion(currentQuestionIndex);
  }

  nextButton.addEventListener('click', nextQuestion);

  // Afficher la première question
  showQuestion(currentQuestionIndex);

  // Défilement automatique toutes les 'displayTime' millisecondes
  setInterval(nextQuestion, displayTime);

   // afficher le temps restants quand la première question est affichée
 window.addEventListener('DOMContentLoaded', function() {
    let countdown = 1200; // 20 minutes en secondes
    const countdownElement = document.getElementById('timer');
    function updateCountdownDisplay() {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        countdownElement.textContent = `Temps restant : ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
        countdownElement.style.display = 'block';
    }
    updateCountdownDisplay();
    const interval = setInterval(() => {
        countdown--;
        updateCountdownDisplay();
        if (countdown <= 0 || currentQuestionIndex === 19) {
            clearInterval(interval);
            countdownElement.textContent = "Temps écoulé !";
             window.location.href = "file:///C:/Users/hp/Desktop/appli_quiz/index3.html"
        }
    }, 1000);

});

