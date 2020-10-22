/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What kind of vegetable does Dwight Schrute grow on his farm?',
      answers: [
        'Carrots',
        'Potatoes',
        'Beets',
        'Asparagus'
      ],
      correctAnswer: 'Beets'
    },
    {
      question: "What is Pam's favorite flavor of Yogurt?",
      answers: [
        'Mixed Berry',
        'Peach',
        'Strawberry Banana',
        'Key Lime'
      ],
      correctAnswer: 'Mixed Berry'
    },
    {
      question: 'How many seasons of The Office are there?',
      answers: [
        '10',
        '9',
        '12',
        '7'
      ],
      correctAnswer: '9'
    },
    {
      question: "Which character on the show is Steve Carell's wife in real life?",
      answers: [
        'Karen Fillippelli',
        'Holly Flax',
        'Donna Newton',
        'Carol Stills'
      ],
      correctAnswer: 'Carol Stills' 
    },
    {
      question: "What does Prison Mike say is the 'very, very worst thing about prison'?",
      answers: [
        'The seekers',
        'The dementors',
        'The gangs',
        'The dragons'
      ],
      correctAnswer: "The dementors"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)