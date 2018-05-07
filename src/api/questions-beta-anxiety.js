// PROTOTYPES

// REMEMBER TO CHECK
// questionCounter -> questionStart
// questionName -> nameQuestion

// TEXT INPUT
// {
//     dialog: "",
//     question: " Hi, I’m Barbara, your personal assistant. What's your name?",
//     answerType: 'TextInput',
//     answers: [{
//         type: 0,
//         content: "Name..."
//     }
//    ],
//     comments:''
// }
//
// BUTTON
// {
//     dialog: "",
//     question: " Let’s start with an easy one. What’s you gender?",
//     answerType: 'Button',
//     answers: [
//         {
//             type: "1",
//             content: "female"
//         },
//         {
//             type: "2",
//             content: "male"
//         }
//     ],
//     comments:''
// }
//
// SPINNER
// {
//     dialog: "",
//     question: "...and your age?",
//     answerType:'Spinner',
//     answers: [ {
//       spinner: [
//         {
//             type: "1",
//             text: '<18',
//             value: '<18',
//             key:1
//         },
//         {
//             type: "2",
//             text: "18-24",
//             value: "18-24",
//             key:2
//         }
//     ],
//   }],
//     comments:' '
// }
//
// SLIDER
// {
//     dialog: "",
//     question: "Thinking about the past week, /name, how many days did you engage in over 30 minutes of vigorous physical activity, e.g.brisk walking or cycling?",
//     answerType:'Slider',
//     answers: [
//         {
//             min: 0,
//             max: 7
//         }
//     ],
//     comments:' '
// }


var questionBetaAnxiety = [

  {
      dialog: " BETA-TEST Feedback",
      question: "Based on the previous landing page, what do you think this website will provide?",
      answerType: 'Feedback',
      answers: [
          {
              type: "1",
              content: "Yes"
          }
      ],
      comments:''
  },
  {
      dialog: "Hi, I’m Barbara! Your personal wellbeing assistant",
      question: "Did you know that by the age of 32, half of people have suffered from anxiety? The good news is there are plenty of things that can help, and I’m keen to find them. ",
      answerType: 'Button',
      answers: [{
              key: 0,
              text: "continue"
          }
         ],
      label:''
  },
{
    dialog: "Firstly, two questions to understand where you’re at, and sorry if the wording feels overly negative.",
    question: "During the past two weeks, how often have you felt nervous, anxious or on edge?",
    answerType:'Button',
    answers: [
        {
            key: 1,
            text: "not at all"
        },
        {
            key: 2,
            text: "several days"
        },
        {
            key: 3,
            text: "over half the days"
        },
        {
            key: 4,
            text: "nearly every day"
        },
        {
            key: 5,
            text: "can't say"
        }
    ],
    label:' '
},
{
    dialog: "These questions help my advice. No need to answer if they’re uncomfortable",
    question: "During the past two weeks, how often have you not been able to stop or control worrying?",
    answerType:'Button',
    answers: [
        {
            key: 1,
            text: "not at all"
        },
        {
            key: 2,
            text: "several days"
        },
        {
            key: 3,
            text: "over half the days"
        },
        {
            key: 4,
            text: "nearly every day"
        },
        {
            key: 5,
            text: "can't say"
        }
    ],
    label:' '
},
{
    dialog: "On to sleep, in the past week...",
    question: "How many nights would you say you’ve had had a good night’s sleep?",
    answerType:'Slider',
    answers: [
        {
          min: 0,
          max: 7,
          key:0
        }
    ],
    label:' '
},

  {
      dialog: "Thinking about the past week...",
      question: "How many days did you do over 30 minutes of vigorous physical activity? (e.g. brisk walking, cycling, sports)",
      answerType:'Slider',
      answers: [
          {
              min: 0,
              max: 7,
              key:0
          }
      ],
      label:' '
  },
{
    dialog: "That food question",
    question: "In general, would you like to eat healthier?",
    answerType:'Button',
    answers: [
        {
            key: 1,
            text: "never"
        },
        {
            key: 2,
            text: "rarely"
        },
        {
            key: 3,
            text: "sometimes"
        },
        {
            key: 4,
            text: "often"
        },
        {
            key: 5,
            text: "all the time"
        }
    ],
    label:' '
},
{
    dialog: "",
    question: "Over the past 7 days, how often have you felt close to other people?",
    answerType:'Button',
    answers: [
        {
            key: 1,
            text: "never"
        },
        {
            key: 2,
            text: "rarely"
        },
        {
            key: 3,
            text: "some of the time"
        },
        {
            key: 4,
            text: "often"
        },
        {
            key: 5,
            text: "all the time"
        }
    ],
    label:' '
}
,{
    dialog: "",
    question: "How satisfied are you with your sense of purpose in your life? Consider work, religion, raising children etc",
    answerType:'Button',
    answers: [
        {
            key: 1,
            text: "extremely dissatisfied"
        },
        {
            key: 2,
            text: "dissatisfied"
        },
        {
            key: 3,
            text: "about OK"
        },
        {
            key: 4,
            text: "satisfied"
        },
        {
            key: 5,
            text: "very satisfied"
        }
    ],
    label:' '
},
{
    dialog: "",
    question: "How often would you describe yourself as feeling relaxed and thinking clearly?",
    answerType:'Button',
    answers: [
        {
            key: 1,
            text: "never"
        },
        {
            key: 2,
            text: "rarely"
        },
        {
            key: 3,
            text: "some of the time"
        },
        {
            key: 4,
            text: "often"
        },
        {
            key: 5,
            text: "all of the time"
        }
    ],
    label:' '
},

{
    dialog: "",
    question: "Which of the following do you find useful or enjoyable?",
    answerType:'Multiple',
    answers: [ {
      multiple: [
        {
            text: 'apps',
            key:1
        },
        {
            text: "meeting new people",
            key:2
        },
        {
            text: "time in nature",
            key:3
        },
        {
            text: "reading books",
            key:4
        },
        {
            text: "social activities",
            key:5
        },
        {
            text: "listening to podcasts",
            key:6
        },
        {
            text: "learning",
            key:7
        },
        {
            text: "exercise",
            key:7
        }
    ],
  }],
    label:' '
},
{
    dialog: "",
    question: "What’s your gender?",
    answerType: 'ButtonGender',
    answers: [
        {
            key: 0,
            text: "female"
        },
        {
            key: 1,
            text: "male"
        },
        {
            key: 2,
            text: "custom"
        },
        {
            key: 3,
            text: "prefer not to say"
        }
    ],
    label:''
},

{
    dialog: "",
    question: "...and your age?",
    answerType:'Spinner',
    answers: [ {
      keySpinner :[1,2,3,4,5,6,7,8,9],
      spinner: [
        {
            text: '<18',
            value: '<18',
            key:1
        },
        {
            text: "18-24",
            value: "18-24",
            key:2
        },
        {
            text: "25-34",
            value: "25-34",
            key:3
        },
        {
            text: "35-44",
            value: "35-44",
            key:4
        },
        {
            text: "45-54",
            value: "45-54",
            key:5
        },
        {
            text: "55-64",
            value: "55-64",
            key:6
        },
        {
          text: "65-74",
          value: "65-74",
            key:7
        },
        {
          value: "75-84",
          text: "75-84",
            key:8
        },
        {
          text: ">85",
          value: ">85",
            key:9
        }
    ],
  }],
    label:' '
},
  {
      dialog: "BETA-TEST Feedback",
      question: " Would you ask:",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Less question",
              text: "Less question",
              value: "Less question",
              key:1
          },
          {
              type: "2",
              content: "Same",
              text: "Same",
              value: "Same",
              key:2
          },
          {
              type: "3",
              content: "More questions",
              text: "More questions",
              value: "More questions",
              key:3
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: " BETA-TEST Feedback",
      question: " Was answering the questions easy?",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Yes",
              text: "Yes",
              value: "Yes",
              key:1
          },
          {
              type: "2",
              content: "Kind of",
              text: "Kind of",
              value: "Kind of",
              key:2
          },
          {
              type: "3",
              content: "No",
              text: "No",
              value: "No",
              key:3
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: " BETA-TEST Feedback",
      question: " Were there any question you did not understand?",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Yes",
              text: "Yes",
              value: "Yes",
              key:1
          },
          {
              type: "2",
              content: "A few",
              text: "A few",
              value: "A few",
              key:2
          },
          {
              type: "3",
              content: "No",
              text: "No",
              value: "No",
              key:3
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: " BETA-TEST Feedback",
      question: " Did you like being called by name?",
      answerType:'FeedbackButton',
      answers: [ {
        multiple: [
          {
              type: "1",
              content: "Yes",
              text: "Yes",
              value: "Yes",
              key:1
          },
          {
              type: "2",
              content: "No",
              text: "No",
              value: "No",
              key:2
          }
        ],
      }],
      comments:' '
  },
  {
      dialog: " BETA-TEST Feedback",
      question: " What do you expect to see after all the questions?",
      answerType: 'Feedback',
      answers: [
          {
              type: "1",
              content: "Yes"
          }
      ],
      comments:''
  }];

export default questionBetaAnxiety;
//
// In the past week, how often have you been thinking clearly? (a five ways to wellbeing question)
// None of the time
// Rarely
// Some of the time
// Often
// All of the time
//
// How often do you wake up feeling positive or energised about the day ahead?
// Most days
// Some days
// Rarely
// Almost never
//
// In the past week, how my times did you feel you were not in control of your stress or anger?
// Most days
// Some days
// Rarely
// Almost never