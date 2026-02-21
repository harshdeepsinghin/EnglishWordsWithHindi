// Quiz 1 — Words: Tranche to Ubiquitous
const QUIZ_DATA = [
    {
        word: "Tranche",
        hindi: "ट्रांश",
        meaning: "a portion or installment of a larger whole, especially money or resources released in stages",
        type: "definition",
        question: 'What does the word <span class="highlight">Tranche</span> mean?',
        options: [
            "A sudden burst of energy",
            "A portion or installment released in stages",
            "A legal contract between parties",
            "A method of communication"
        ],
        correct: 1
    },
    {
        word: "Pertinent",
        hindi: "पर्टिनेंट",
        meaning: "directly relevant and closely connected to the matter at hand",
        type: "fill",
        question: 'Choose the word: "The lawyer raised a very ______ point during the hearing."',
        options: [
            "Superfluous",
            "Ephemeral",
            "Pertinent",
            "Nascent"
        ],
        correct: 2
    },
    {
        word: "Rhetoric",
        hindi: "रेटोरिक",
        meaning: "persuasive or impressive language, often emphasizing style over substance",
        type: "definition",
        question: 'What does <span class="highlight">Rhetoric</span> refer to?',
        options: [
            "Scientific evidence and data",
            "Persuasive language emphasizing style over substance",
            "A type of ancient poetry",
            "A political system of governance"
        ],
        correct: 1
    },
    {
        word: "Coercive",
        hindi: "कोअर्सिव",
        meaning: "using force, threats, or pressure to make someone act against their will",
        type: "synonym",
        question: 'Which word is closest in meaning to <span class="highlight">Coercive</span>?',
        options: [
            "Gentle",
            "Voluntary",
            "Forceful",
            "Indifferent"
        ],
        correct: 2
    },
    {
        word: "Substantive",
        hindi: "सब्स्टैन्टिव",
        meaning: "having real importance, depth, or practical substance",
        type: "fill",
        question: '"The meeting lacked any ______ discussion — it was mostly small talk."',
        options: [
            "Specious",
            "Substantive",
            "Coercive",
            "Nascent"
        ],
        correct: 1
    },
    {
        word: "Compliance",
        hindi: "कम्प्लायंस",
        meaning: "the act of following rules, laws, or standards set by an authority",
        type: "definition",
        question: '<span class="highlight">Compliance</span> in a corporate setting refers to:',
        options: [
            "Ignoring regulations for profit",
            "Following rules, laws, or standards set by authority",
            "Creating new policies from scratch",
            "Competing with rival companies"
        ],
        correct: 1
    },
    {
        word: "Susceptible",
        hindi: "ससेप्टिबल",
        meaning: "easily affected, influenced, or vulnerable to something",
        type: "fill",
        question: '"Children are more ______ to infections during winter."',
        options: [
            "Immune",
            "Resistant",
            "Susceptible",
            "Indifferent"
        ],
        correct: 2
    },
    {
        word: "Nascent",
        hindi: "नैसेंट",
        meaning: "just beginning to exist or develop; in an early stage",
        type: "definition",
        question: 'A <span class="highlight">nascent</span> industry is one that is:',
        options: [
            "Declining rapidly",
            "Fully matured and stable",
            "Just beginning to exist or develop",
            "Controlled by the government"
        ],
        correct: 2
    },
    {
        word: "Specious",
        hindi: "स्पीशस",
        meaning: "seemingly true or attractive but actually false or misleading",
        type: "synonym",
        question: 'Which best describes something <span class="highlight">specious</span>?',
        options: [
            "Genuinely brilliant",
            "Seemingly true but actually false",
            "Extremely rare and valuable",
            "Boring and uninteresting"
        ],
        correct: 1
    },
    {
        word: "Ubiquitous",
        hindi: "यूबिक्विटस",
        meaning: "present everywhere or very common",
        type: "fill",
        question: '"Smartphones have become ______ in modern life — you see them everywhere."',
        options: [
            "Nascent",
            "Ephemeral",
            "Scarce",
            "Ubiquitous"
        ],
        correct: 3
    }
];
