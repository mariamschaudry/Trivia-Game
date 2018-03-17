// PseudoCode:
    //Make questions (10 of them)
    //Options (4 of them)
    //Answers (1 answer within the options)
    //User's answers 
    //Need to use objects because they can have many keys/properties 
    //Need to make a start button that is on the main page, once the user clicks it, then the first question appears.
    //Need to make a score with a counter 

    // Example layout for question section: 

    // var questionBank = [
        // {
            //question1: "What's the name of the homework?"
            //options: (an array) ['trivia', 'easy'. 'hopscotch']
            //answer: 'trivia',
            //usersAnswer: '',
            //correct: true <-- after they answer the question, if user matches answer, then its truea and display x (condition),
                            // if else (this will a boolean or a T/F)
        // },
        // {
            //question1: "What's the name of the homework?"
            //options: (an array) ['trivia', 'easy'. 'hopscotch']
            //answer: 'trivia',
            //usersAnswer: '',
            //correct: true <-- after they answer the question, if user matches answer, then its truea and display x (condition),
                            // if else (this will a boolean or a T/F)
        // }
    // ]

        // Question Bank has an array of objects, and you will for loop through the index. For 30 sec display
            // questions and options      
            
 // Functions needed - starting page, clicking to load questions, win, loss, timer, reset, if user runs out of time 
// ========================================================================================================================================================== //

// Code for game begins here: 

// Creating and appending the start button //
$(document).ready(function() {

function startScreen () {
    startScreen = "<h1 class ='text-align: center;'>Welcome to World Food Trivia!</h1><br></br><p class='text-center main-button-container'><a class='btn btn-danger btn-lg btn-block start-button' href='#' role='button'>Start the Quiz!</a></p>";
    
    $(".titleAndStart").html(startScreen);
 }

startScreen();

// Creating the on-click event for the start button which will lead to the 1st question once clicked //

$(document).on('click','.start-button',function(event) {
    loadQuestions(); 


// 30 second timer: starts at 30 seconds; counts down by 1 second; if it gets to zero then clear it out, if above zero then display that time. //

var timerBox = setInterval(decrement, 1000);
var timer = 30; 

function thirtySeconds () {
    if (timer === 0) {
        clearInterval (timerBox);
    }
     
    if (timer > 0) {
        timer --;
    }

    $(".timer").html(timer);
}

// Dynamically loading the questions to the main game play area for user to play //

var gameQuestions;

// function loadQuestions () {
   //gameQuestions =  



var questionArray = [
    { 
        question1: "What is the most popular spice in the world?",
        options: ['a. pepper', 'b. cloves', 'c. paprika', 'd. thyme'],
        answer: "a. pepper",
        correct: ""
    },
    {
        question2: "The Cajun holy trinity of cooking consists of what three vegetables?",
        options: ["a. tomatoes, corn, bell peppers', 'b. bell peppers, carrots, celery', 'c. celery, onions, bell peppers', 'd. onions, tomatoes, corn"],
        answer: "c. celery, onions, bell peppers",
        correct: ""
    },
    {
        question3: "Sriracha is a type of hot sauce named after a city located in which country?",
        options: ['a. Japan', 'b. Mexico', 'c. Italy', 'd. Thailand'],
        answer: "d. Thailand",
        correct: ""
    },
    {
        question4: "Malbec, Sangiovese, and Syrah are all a type of what?",
        options: ['a. cheese', 'b. fruit', 'c. wine', 'd. coffee'],
        answer: "c. wine",
        correct: ""
    },
    {
        question5: "Sushi is a type of cuisine that originated in which country?",
        options: ['a. China', 'b. Korea', 'c. Japan', 'd. Malaysia'],
        answer: "c. Japan",
        correct: ""
    },
    {
        question6: "The first Starbucks was established in 1971 in which U.S. city?",
        options: ['a. New York', 'b. Seattle', 'c. Miami', 'd. Atlanta'],
        answer: "b. Seattle",
        correct: ""
    },
    {
        question7: "A tandoor is a type of what?",
        options: ['a. oven', 'b. bread', 'c. fruit', 'd. coffee'],
        answer: "a. oven",
        correct: ""   
    },
    {
        question8: "Kopi luwak is a very expensive type of what?",
        options: ['a. coffee', 'b. beer', 'c. cake', 'd. vegetable'],
        answer: "a. coffee",
        correct: ""
    },
    {
        question9: "Bubble tea originate in which country?",
        options: ['a. Korea', 'b. Spain', 'c. Antartica', 'd. Vietnam'],
        answer: "d. Vietnam",
        correct: ""
    },
    {
        question10: "What is the main ingredient in a lassi (a popular drink in Pakistan)?",
        options: ['a. yoghurt', 'b. soda', 'c. water', 'd. espresso'],
        answer: "a. yoghurt",
        correct: ""
    }
    
];

    });

});