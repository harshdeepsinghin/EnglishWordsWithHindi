// Central quiz configuration — add new quizzes here
// The homepage and quiz page both read from this config.
//
// HOW TO ADD A NEW QUIZ:
//   1. Create js/quizzes/quiz-N.js with a QUIZ_DATA array (10 words)
//   2. Add an entry to QUIZ_LIST below
//   That's it! The homepage and quiz page handle the rest.

const QUIZ_LIST = [
    {
        id: 1,
        title: "Quiz 1",
        description: "Tranche · Pertinent · Rhetoric · Coercive · Substantive · Compliance · Susceptible · Nascent · Specious · Ubiquitous",
        words: 10,
        level: "Advanced"
    },
    {
        id: 2,
        title: "Quiz 2",
        description: "Proclaim · Erodes · Agitated · Superfluous · Ephemeral · Despot · Consensus · Vanquishes · Vigil · Forfeit",
        words: 10,
        level: "Advanced"
    },
    {
        id: 3,
        title: "Quiz 3",
        description: "Alleviate · Unequivocally · Beckon · Temporal · Personnel · Probe · Wee Hours · Fugitive · Esperanto · Deemed",
        words: 10,
        level: "Intermediate"
    },
    {
        id: 4,
        title: "Quiz 4",
        description: "Pernicious · Vain · Delegates · Exempt · Irrebuttable · Lassitude · Apparently · Metamorphic · Eyesore · Psychometric",
        words: 10,
        level: "Advanced"
    },
    {
        id: 5,
        title: "Quiz 5",
        description: "Contingent · Mulling · Unanimously · Strangulation · Adjourned · Contentious · Solidarity · Klutz · Posthumously · Incommode",
        words: 10,
        level: "Advanced"
    }
];
