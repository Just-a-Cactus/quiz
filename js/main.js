;
(function () {
    const questions = [
        ['Сколько областей в Украине', 27],
        ['Сколько население в Украине', 48000000],
        ['Число независимости Украины', 24]
    ];
    let quizForm = document.querySelector('.ba-quiz-form');
    let quizList = document.createElement('ol');

    quizForm.appendChild(quizList);

    //make list of questions
    for (let i = 0; i < questions.length; i++) {
        const task = questions[i][0];
        let li = document.createElement('li');
        li.textContent = task + "?";
        li.classList.add('ba-question');
        quizList.appendChild(li);

        // add input for answer
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'answers-' + i);
        input.setAttribute('required', 'required');
        li.appendChild(input);
    }

    //check answers and show results
    const resultE1 = document.querySelector('.ba-results b');
    resultE1.textContent = 0;

    //Onsubmit form check correct answers
    quizForm.addEventListener('submit', showResults);

    function showResults(params) {
        event.preventDefault();
        let inputs = this.querySelectorAll('input');

        let correct = 0;
        inputs.forEach((element, index) => {
            if (element.value == questions[index][1]) {
                correct++;
            }
        });
        resultE1.textContent = correct;
    }

})();