// Fake authentication system
const correctUsername = "warhammer";
const correctPassword = "40k";

// This tracks the current question
let currentQuestion = 1;
const totalQuestions = 3;

// This is where the login info is verfied
function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        updateQuestionCount();
        updateProgressBar(0);
    } else {
        alert("Incorrect username or password.");
    }
}

// This shows the next question and update progress
function nextQuestion() {
    if (currentQuestion <= totalQuestions) {
        document.getElementById(`question-${currentQuestion}`).style.display = 'none';
        currentQuestion++;  // This moves to next question

        if (currentQuestion <= totalQuestions) {
            document.getElementById(`question-${currentQuestion}`).style.display = 'block';
            updateQuestionCount();
            updateProgressBar(((currentQuestion - 1) / totalQuestions) * 100);
        }

        // On last question, the "Next" button is switched with "Submit"
        if (currentQuestion === totalQuestions) {
            document.getElementById('next-button').style.display = 'none';
            document.getElementById('submit-button').style.display = 'block';
        }
    }
}

// This updates the question count display
function updateQuestionCount() {
    const questionCount = document.getElementById('question-count');
    questionCount.innerHTML = `Question ${currentQuestion} of ${totalQuestions}`;
}

// Submit quiz and show final score
function submitQuiz() {
    let score = 0;

    // This is a loop that loops each question to check answers
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        if (selectedAnswer) {
            if (selectedAnswer.value === 'correct') {
                score++;
                selectedAnswer.parentElement.classList.add('correct');
            } else {
                selectedAnswer.parentElement.classList.add('wrong');
            }
        }
    }

    // This shows the final score
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = `You scored ${score} out of ${totalQuestions}.`;

    // This hides quiz form after submission
    document.getElementById('quiz-form').style.display = 'none';
}
