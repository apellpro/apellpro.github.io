var answers = document.getElementsByClassName("quiz-btn");

for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', (el) => {
        el.target.style.color = 'white'
        if (el.target.hasAttribute("correct")) {
            el.target.style.background = 'green'
        } else {
            el.target.style.background = 'red'
        }
    })
}