document.addEventListener('DOMContentLoaded',() => {
    const questions = [
        {
            question: "What is your name?",
            options: ["Aditya","Golu","Bholu","Bheem"],
            answer: "Aditya",
        },
        {
            question: "What is your city?",
            options: ["Begusarai","Mau","Kalyani","Kolkata"],
            answer: "Begusarai",
        },
        {
            question: "What is your city?",
            options: ["Begusarai","Patna","Kalyani","Kolkata"],
            answer: "Begusarai",
        }
    ]

    const startbtn = document.getElementById('start-btn');
    const nextbtn = document.getElementById('next-btn');
    const restartbtn = document.getElementById('restart-btn');
    const questionContainer = document.getElementById('question-container')
    const questionText = document.getElementById('question-text')
    const answerList = document.getElementById("answer-list")
    const result = document.getElementById('result-container')
    const showscore = document.getElementById('score')

    let currentQues = 0;
    let score = 0;

    startbtn.addEventListener('click',startQuiz);

    function startQuiz(){
        startbtn.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        result.classList.add('hidden');
        showQuestion();
    }

    function showQuestion(){
        nextbtn.classList.add('hidden');
        questionText.textContent = questions[currentQues].question;
        answerList.innerHTML = "";
        questions[currentQues].options.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            let click = 0;
            li.addEventListener('click', () => selectAnswer(option, ++click))//dont execute the function just here only reference it
            // using a callback / nameless function to be able to pass a parameter
            answerList.appendChild(li);
        });
        
    }

    function selectAnswer(option, click){
        const correctAns = questions[currentQues].answer;
        if(option === correctAns && click === 1){
            score++
        }
        nextbtn.classList.remove('hidden');
    }

    nextbtn.addEventListener('click',()=>{
        currentQues++;
        if(currentQues < questions.length){
            showQuestion();
        }else{
            showResult()
        }
    })

    function showResult(){
        questionContainer.classList.add('hidden');
        result.classList.remove('hidden')
        showscore.textContent = score
    }

    restartbtn.addEventListener('click',() => {
        currentQues = 0;
        score = 0;
        startQuiz()
    })
})
