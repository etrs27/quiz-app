
const store = {

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
  quizFinished: false,
  questionNumber: 0,
  score: 0,
};

