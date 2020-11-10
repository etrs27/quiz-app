
/* This function will create the HTML for the initial start screen of the quiz*/

function startScreen() {
    return `
        <div class="starter">
            <p>This quiz will determine whether or not you are a true fan of The Office.</p>
            <p>There will be 5 questions total.</p>
            <p>If you can get every question right, you may label yourself a Super Fan!</p>
            <button type="button" id="start">Start The Quiz</button>
            <img class= "intro" src = "images/intro/theOfficeLogo.jpg" alt= "The Office logo" />
        </div>
    `;
}

/*This function is creating the HTML that will reflect on the end of the quiz*/

function endPage() {
    return `
        <div class="results-container">
                <fieldset>
                    <legend>Final Score: ${store.score} out of ${store.questions.length}</legend>
                    <button type="button" id="redo"> Try Again </button>
                </fieldset>
                <img class= "finished" src = "images/end/gretzky.jpg" alt= "Michael Scott infront of a white board with a quote" />

        </div>
    `
}

/*This function is creating the HTML that will reflect on the user's response*/

function answerResponseCorrect(){
    return `
    <div class="correct-response"><p>You answered correctly!</p>
    <br>
    <button type="button" id="next-question-button">Next Question</button>
    <img class= "correct" src="images/correct/correct-answer.jpg" alt="Michael Scott anouncing who got the Dundie Award" />
    </div>
    `
}

function answerResponseIncorrect(rightAnswer){
   
    return `
    <div class="wrong-response"><p>You answered incorrectly. The correct answer is ${rightAnswer}.</p>
    <br>
    <button type="button" id="next-question-button">Next Question</button>
    <img class= "false" src="images/false/dwight-false.jpg" alt="Animated picture of Dwight Shrute with his hands on his hips. Labeled as 'FALSE.'" />
    </div>
    `
}

/*This function is creating the HTML that will reflect on that the quiz results*/

function showResultsPageCorrect(){
    return `
    <div class="correct-response"><p>You answered correctly!</p>
    <br>
    <button type="button" id="show-results" >Show Results</button>
    <img class= "correct" src = "images/correct/correct-answer.jpg" alt= "Michael Scott anouncing who got the Dundie Award" />
    </div>
    `
    }

function showResultsPageIncorrect(rightAnswer){
   
    return `
    <div class="wrong-response"><p>You answered incorrectly. The correct answer is ${rightAnswer}.</p>
    <br>
    <button type="button" id="show-results" >Show Results</button>
    <img class= "false" src = "images/false/dwight-false.jpg" alt= "Animated picture of Dwight Shrute with his hands on his hips. Labeled as 'FALSE.' " />
    </div>
    `
}



/* -------- Counters ------ */

/* This function is creating the HTML that displays which question # the user is on */

function questionNumbers() {   
    return `
        <div class="current-question">
            <p id="question-number">
                Question Number: ${store.questionNumber + 1} out of ${store.questions.length}
            </p>
        </div>
    `;
}

/* This function is creating the HTML that displays the score for the user at whichever question they are currently on */

function overallScore() {
    return `
        <div class="current-score">
            <p id="score">
                Current Score: ${store.score} out of ${store.questions.length}
            </p>
        </div>
    `;  
}



/* This function is creating the HTML that displays the list of answers to a given question */

function showAnswers() {
    const answersArray = store.questions[store.questionNumber].answers;
    let answersHtml = '';

    answersArray.forEach(answer => {
        answersHtml += `
        <div class="choice-container">
            <input type="radio" name="choices" id="choices" value="${answer}" required>
            <label for "choices"  aria-checked="false"> ${answer} </label>
        </div>
        `;
    });
    return answersHtml;
}

/*This function is creating the HTML that displays a given question.  Also note that the showAnswers() function will need to be called here in order to get the answers to reflect */

function showQuestion() {
    let questionNumber = store.questions[store.questionNumber];
    let thisQuestion = ''
        thisQuestion += `
        <div class="question-display">
            <div class="current-question">
                ${questionNumbers()}
            </div>

            <form id="questions-form">
                <fieldset>
                    <div class="question">
                        <legend> ${questionNumber.question}</legend>
                    </div>
                    <div class="choices">
                        <div class="answers">
                            ${showAnswers()}
                        </div>
                    </div>
                    <button type="submit" id="answer-submit-button" >Submit Answer</button>
                </fieldset>
            </form>

            <div class="current-score">
                ${overallScore()}
            </div>
        </div>
    `;
    return thisQuestion;
}


    




/* This function renders all of the functions onto the screen for the user */

function render(){
    if (store.quizFinished === true){
        $('main').html(endPage());
    }
    else if (store.quizStarted === false && store.questionNumber === 0){
        $('main').html(startScreen());
    }
    else {
        $('main').html(showQuestion());
    }
}

function renderShowResults(selectedAnswer, rightAnswer){
    if (store.quizStarted === true && selectedAnswer === rightAnswer){
        $('main').html(showResultsPageCorrect());
    } 
    else if (store.quizStarted === true) {
        $('main').html(showResultsPageIncorrect(rightAnswer));
    }
}
  
function renderNextQuestion(selectedAnswer, rightAnswer){
    if (store.quizStarted === true && selectedAnswer === rightAnswer){
        $('main').html(answerResponseCorrect());
    }
    else if (store.quizStarted === true) {
        $('main').html(answerResponseIncorrect(rightAnswer));
    }
}



/* This function handles when a user clicks 'Start The Quiz' */ 

function handleStartQuiz() {
    $('main').on('click', '#start', function(evt){
        evt.preventDefault();
        store.quizStarted = true;
        render();
    })
}

/*This function handles when a user clicks on "Next Button" */

function handleNextQuestion() {
    $('main').on('click', '#next-question-button', function(evt){
        evt.preventDefault();
        render();
    })
}

function handleAnswerSubmission() {
    $('main').submit('#question-form', function(evt){
        evt.preventDefault();
        let rightAnswer = store.questions[store.questionNumber].correctAnswer;
        let selectedAnswer = $('input[name=choices]:checked').val();
        if (selectedAnswer === rightAnswer){
            if (rightAnswer === store.questions[store.questions.length - 1].correctAnswer){
                store.score++;
                renderShowResults(selectedAnswer, rightAnswer);
            } else {
                store.score++;
                store.questionNumber++
                renderNextQuestion(selectedAnswer, rightAnswer);
            }
        }
        else {
            if (rightAnswer === store.questions[store.questions.length - 1].correctAnswer){
                renderShowResults(selectedAnswer, rightAnswer);
            } else {
                store.questionNumber++
                renderNextQuestion(selectedAnswer, rightAnswer);
            }
            
        }
    })
}

function handleShowResults(){
    $('main').on('click', '#show-results', function (evt){
        evt.preventDefault();
        store.quizFinished = true;
        render();
    })
}



/* ------ Restarts ----- */

function handleRestartQuiz() {
    $('main').on('click', '#redo', function(evt){
        evt.preventDefault();
        restartTheQuiz();
        render();
    })
}

function restartTheQuiz() {
    store.quizStarted = false;
    store.quizFinished = false;
    store.questionNumber = 0;
    store.score = 0;
}



/*This function will effectively show everything on the screen by linking to the main HTML div */

function main() {
    render();
    handleStartQuiz();
    handleAnswerSubmission();
    handleNextQuestion();
    handleShowResults();
    handleRestartQuiz();
    renderShowResults();
    renderNextQuestion();
}


$(main);