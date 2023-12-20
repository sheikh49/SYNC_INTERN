const quizDB=[
    {
        question:" Q1:What does the abbreviation HTML stand for?",
        a:"Hello to My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Mark Down Language ",
        d:"Hyper Text Markup Language",
        ans:"ans4"
    },
    {
        question:" Q2:How many sizes of headers are available in HTML by default?",
        a:"2",
        b:"6",
        c:"5 ",
        d:"7",
        ans:"ans2"    
    },
    {
        question:" Q3:What is the correct HTML tag for a paragraph?",
        a:"div",
        b:"span",
        c:"p",
        d:"h1",
        ans:"ans3"
    },
    {
        question:" Q4:HTML files are saved by default with the extension?",
        a:".htm",
        b:".html",
        c:".txt",
        d:".doc",
        ans:"ans2"
        
    },
    {
        question:" Q5:Which of the following tags doesnt require a closing tag?",
        a:"br",
        b:"hr",
        c:"Both A and B",
        d:"None of the above",
        ans:"ans3"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
 const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
   question.innerHTML= questionList.question;
   option1.innerHTML=questionList.a; 
   option2.innerHTML=questionList.b; 
   option3.innerHTML=questionList.c; 
   option4.innerHTML=questionList.d; 
}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
answers.forEach((curAnsEle)=>{
    if(curAnsEle.checked){
        answer=curAnsEle.id;
    }
    
});
return answer;
};
const deselectAll=()=>{
    answers.forEach((curAnsEle)=>{
        curAnsEle.checked=false;
    });
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount< quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h4> You scored  ${score}/${quizDB.length}</h4>
        <button class="btn" onClick="location.reload()"> Play Again</button>
        `;
        showScore.classList.remove('score');
    }

});
