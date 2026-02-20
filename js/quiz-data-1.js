// Quiz Data for Vocabulary Quiz 1 — 50 Words
// Each word has varied question types for engagement

const QUIZ_DATA = [
    // === Set 1: Tranche to Ubiquitous ===
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
    },

    // === Set 2: Proclaim to Forfeit ===
    {
        word: "Proclaim",
        hindi: "प्रोक्लेम",
        meaning: "to announce something publicly or officially with authority or confidence",
        type: "definition",
        question: 'To <span class="highlight">proclaim</span> something means to:',
        options: [
            "Whisper it secretly",
            "Announce it publicly with authority",
            "Deny it firmly",
            "Consider it privately"
        ],
        correct: 1
    },
    {
        word: "Erodes",
        hindi: "इरोड्स",
        meaning: "gradually wears away, weakens, or destroys something over time",
        type: "fill",
        question: '"Constant criticism ______ a person\'s self-confidence over time."',
        options: [
            "Strengthens",
            "Proclaims",
            "Erodes",
            "Forfeits"
        ],
        correct: 2
    },
    {
        word: "Agitated",
        hindi: "ऐजिटेटेड",
        meaning: "feeling restless, anxious, irritated, or emotionally disturbed",
        type: "antonym",
        question: 'What is the OPPOSITE of <span class="highlight">Agitated</span>?',
        options: [
            "Anxious",
            "Calm",
            "Furious",
            "Excited"
        ],
        correct: 1
    },
    {
        word: "Superfluous",
        hindi: "सुपरफ्लुअस",
        meaning: "more than necessary; unnecessary or excessive",
        type: "fill",
        question: '"The report was filled with ______ details that added no value."',
        options: [
            "Pertinent",
            "Superfluous",
            "Substantive",
            "Crucial"
        ],
        correct: 1
    },
    {
        word: "Ephemeral",
        hindi: "इफ़ेमरल",
        meaning: "lasting for a very short time; temporary or fleeting",
        type: "definition",
        question: 'Something described as <span class="highlight">ephemeral</span> is:',
        options: [
            "Permanent and everlasting",
            "Extremely expensive",
            "Lasting for a very short time",
            "Widely known and recognized"
        ],
        correct: 2
    },
    {
        word: "Despot",
        hindi: "डेस्पॉट",
        meaning: "a ruler who exercises absolute power in a cruel or oppressive way",
        type: "definition",
        question: 'A <span class="highlight">despot</span> is best described as:',
        options: [
            "A democratic leader",
            "A cruel ruler with absolute power",
            "A religious scholar",
            "A military advisor"
        ],
        correct: 1
    },
    {
        word: "Consensus",
        hindi: "कन्सेन्सस",
        meaning: "general agreement reached by a group",
        type: "fill",
        question: '"After hours of debate, the committee finally reached a ______."',
        options: [
            "Strangulation",
            "Rhetoric",
            "Consensus",
            "Vigil"
        ],
        correct: 2
    },
    {
        word: "Vanquishes",
        hindi: "वैनक्विशेज़",
        meaning: "defeats or overcomes completely and decisively",
        type: "synonym",
        question: 'Which word is closest in meaning to <span class="highlight">Vanquishes</span>?',
        options: [
            "Surrenders",
            "Conquers",
            "Retreats",
            "Negotiates"
        ],
        correct: 1
    },
    {
        word: "Vigil",
        hindi: "विजिल",
        meaning: "a period of staying awake to watch, pray, or show respect",
        type: "definition",
        question: 'A <span class="highlight">vigil</span> is:',
        options: [
            "A festive celebration",
            "A period of staying awake to watch or pray",
            "A formal dinner event",
            "A type of meditation technique"
        ],
        correct: 1
    },
    {
        word: "Forfeit",
        hindi: "फॉरफिट",
        meaning: "to lose or give up something as a penalty",
        type: "fill",
        question: '"The team had to ______ the match because they didn\'t have enough players."',
        options: [
            "Proclaim",
            "Vanquish",
            "Forfeit",
            "Erode"
        ],
        correct: 2
    },

    // === Set 3: Alleviate to Deemed ===
    {
        word: "Alleviate",
        hindi: "अलिविएट",
        meaning: "to make something less severe, painful, or intense; to relieve or ease",
        type: "synonym",
        question: 'Which word is closest in meaning to <span class="highlight">Alleviate</span>?',
        options: [
            "Worsen",
            "Ignore",
            "Relieve",
            "Intensify"
        ],
        correct: 2
    },
    {
        word: "Unequivocally",
        hindi: "अनइक्विवोकली",
        meaning: "in a clear, definite, and unambiguous manner",
        type: "fill",
        question: '"The court ______ ruled in favor of the plaintiff — there was no doubt."',
        options: [
            "Vaguely",
            "Unequivocally",
            "Reluctantly",
            "Temporarily"
        ],
        correct: 1
    },
    {
        word: "Beckon",
        hindi: "बेकन",
        meaning: "to signal, call, or attract someone toward something",
        type: "definition",
        question: 'To <span class="highlight">beckon</span> means to:',
        options: [
            "Push someone away forcibly",
            "Signal or attract someone toward something",
            "Speak loudly in a crowd",
            "Write a formal invitation"
        ],
        correct: 1
    },
    {
        word: "Temporal",
        hindi: "टेम्पोरल",
        meaning: "related to time; limited by time and not eternal",
        type: "antonym",
        question: 'What is the OPPOSITE of <span class="highlight">Temporal</span>?',
        options: [
            "Brief",
            "Eternal",
            "Ancient",
            "Immediate"
        ],
        correct: 1
    },
    {
        word: "Personnel",
        hindi: "पर्सनैल",
        meaning: "the employees or staff members of an organization collectively",
        type: "definition",
        question: '<span class="highlight">Personnel</span> refers to:',
        options: [
            "Office furniture and equipment",
            "Personal belongings",
            "Employees or staff of an organization",
            "Company policies and rules"
        ],
        correct: 2
    },
    {
        word: "Probe",
        hindi: "प्रोब",
        meaning: "to investigate or examine deeply and carefully",
        type: "fill",
        question: '"The journalist decided to ______ deeper into the corruption scandal."',
        options: [
            "Forfeit",
            "Beckon",
            "Alleviate",
            "Probe"
        ],
        correct: 3
    },
    {
        word: "Wee Hours",
        hindi: "वी आवर्स",
        meaning: "the very early hours after midnight",
        type: "definition",
        question: '"<span class="highlight">Wee hours</span>" typically refers to:',
        options: [
            "Late afternoon hours",
            "The very early hours after midnight",
            "Lunch break time",
            "Evening twilight"
        ],
        correct: 1
    },
    {
        word: "Fugitive",
        hindi: "फ्यूजिटिव",
        meaning: "a person who escapes from law or danger; fleeing or short-lived",
        type: "fill",
        question: '"The police launched a nationwide search for the ______."',
        options: [
            "Personnel",
            "Despot",
            "Fugitive",
            "Delegate"
        ],
        correct: 2
    },
    {
        word: "Esperanto",
        hindi: "एस्पेरान्तो",
        meaning: "an international auxiliary language created for neutral global communication",
        type: "definition",
        question: '<span class="highlight">Esperanto</span> is best described as:',
        options: [
            "An ancient dead language",
            "A programming language",
            "An international auxiliary language for global communication",
            "A regional dialect of Spanish"
        ],
        correct: 2
    },
    {
        word: "Deemed",
        hindi: "डीम्ड",
        meaning: "considered or judged in a particular way, especially formally",
        type: "fill",
        question: '"The application was ______ incomplete by the review board."',
        options: [
            "Beckoned",
            "Deemed",
            "Probed",
            "Alleviated"
        ],
        correct: 1
    },

    // === Set 4: Pernicious to Psychometric ===
    {
        word: "Pernicious",
        hindi: "पर्निशस",
        meaning: "extremely harmful or destructive, especially in a gradual or hidden way",
        type: "definition",
        question: 'Something <span class="highlight">pernicious</span> is:',
        options: [
            "Immediately obvious and loud",
            "Extremely harmful in a gradual or hidden way",
            "Completely harmless",
            "Mildly annoying"
        ],
        correct: 1
    },
    {
        word: "Vain",
        hindi: "वेन",
        meaning: "excessively proud; or having no result or success",
        type: "fill",
        question: '"All their efforts were in ______ — the project was cancelled anyway."',
        options: [
            "Vain",
            "Compliance",
            "Solidarity",
            "Probe"
        ],
        correct: 0
    },
    {
        word: "Delegates",
        hindi: "डेलिगेट्स",
        meaning: "representatives appointed to act for others; assigns authority to someone",
        type: "definition",
        question: '<span class="highlight">Delegates</span> at a conference are:',
        options: [
            "Security guards",
            "Representatives appointed to act for others",
            "Event organizers and planners",
            "Keynote speakers only"
        ],
        correct: 1
    },
    {
        word: "Exempt",
        hindi: "इग्ज़ेम्प्ट",
        meaning: "free from an obligation or officially relieved from a duty",
        type: "fill",
        question: '"Senior citizens are ______ from paying the entrance fee."',
        options: [
            "Required",
            "Contingent",
            "Exempt",
            "Susceptible"
        ],
        correct: 2
    },
    {
        word: "Irrebuttable",
        hindi: "इरिबटल",
        meaning: "impossible to refute or disprove",
        type: "synonym",
        question: 'Which word is closest in meaning to <span class="highlight">Irrebuttable</span>?',
        options: [
            "Debatable",
            "Questionable",
            "Undeniable",
            "Flexible"
        ],
        correct: 2
    },
    {
        word: "Lassitude",
        hindi: "लैसिट्यूड",
        meaning: "a state of physical or mental weariness and lack of energy",
        type: "antonym",
        question: 'What is the OPPOSITE of <span class="highlight">Lassitude</span>?',
        options: [
            "Fatigue",
            "Vigor",
            "Laziness",
            "Boredom"
        ],
        correct: 1
    },
    {
        word: "Apparently",
        hindi: "अपैरेंटली",
        meaning: "seemingly true based on appearance or available information",
        type: "fill",
        question: '"______, the flight was delayed due to bad weather, but no official announcement was made."',
        options: [
            "Unequivocally",
            "Posthumously",
            "Apparently",
            "Unanimously"
        ],
        correct: 2
    },
    {
        word: "Metamorphic",
        hindi: "मेटामॉर्फिक",
        meaning: "relating to transformation or change in form",
        type: "definition",
        question: '<span class="highlight">Metamorphic</span> rocks are formed through:',
        options: [
            "Volcanic eruption only",
            "Sedimentation at the surface",
            "Transformation due to heat and pressure",
            "Chemical reactions in water"
        ],
        correct: 2
    },
    {
        word: "Eyesore",
        hindi: "आइसोर",
        meaning: "something unpleasant or ugly to look at",
        type: "fill",
        question: '"The abandoned factory is an ______ in the otherwise beautiful neighborhood."',
        options: [
            "Eyewitness",
            "Eyesore",
            "Oversight",
            "Outlook"
        ],
        correct: 1
    },
    {
        word: "Psychometric",
        hindi: "साइकोमेट्रिक",
        meaning: "relating to the measurement of mental abilities or psychological traits",
        type: "definition",
        question: 'A <span class="highlight">psychometric</span> test measures:',
        options: [
            "Physical strength and endurance",
            "Financial literacy levels",
            "Mental abilities or psychological traits",
            "Typing speed and accuracy"
        ],
        correct: 2
    },

    // === Set 5: Contingent to Incommode ===
    {
        word: "Contingent",
        hindi: "कन्टिन्जेन्ट",
        meaning: "dependent on certain conditions; or a group representing a larger body",
        type: "fill",
        question: '"The deal is ______ upon the buyer securing financing within 30 days."',
        options: [
            "Exempt",
            "Contingent",
            "Contentious",
            "Adjourned"
        ],
        correct: 1
    },
    {
        word: "Mulling",
        hindi: "मलिंग",
        meaning: "thinking deeply or carefully about something before deciding",
        type: "definition",
        question: 'When someone is <span class="highlight">mulling</span> over a decision, they are:',
        options: [
            "Immediately making a choice",
            "Thinking deeply and carefully before deciding",
            "Ignoring the decision entirely",
            "Asking others to decide for them"
        ],
        correct: 1
    },
    {
        word: "Unanimously",
        hindi: "यूनैनिमस्ली",
        meaning: "in complete agreement without any dissent",
        type: "fill",
        question: '"The board ______ voted to approve the new policy — not a single objection."',
        options: [
            "Reluctantly",
            "Partially",
            "Unanimously",
            "Apparently"
        ],
        correct: 2
    },
    {
        word: "Strangulation",
        hindi: "स्ट्रैंग्युलेशन",
        meaning: "the act of choking or severely restricting air, blood flow, or freedom",
        type: "definition",
        question: '<span class="highlight">Strangulation</span> can metaphorically refer to:',
        options: [
            "Encouraging free expression",
            "Severely restricting freedom or resources",
            "Celebrating achievements",
            "Expanding opportunities"
        ],
        correct: 1
    },
    {
        word: "Adjourned",
        hindi: "अजर्न्ड",
        meaning: "temporarily suspended or postponed to resume later",
        type: "synonym",
        question: 'Which word is closest in meaning to <span class="highlight">Adjourned</span>?',
        options: [
            "Concluded",
            "Postponed",
            "Accelerated",
            "Initiated"
        ],
        correct: 1
    },
    {
        word: "Contentious",
        hindi: "कन्टेन्शस",
        meaning: "likely to cause argument or disagreement",
        type: "fill",
        question: '"The new tax policy is highly ______ — many citizens disagree with it."',
        options: [
            "Unanimous",
            "Contentious",
            "Trivial",
            "Substantive"
        ],
        correct: 1
    },
    {
        word: "Solidarity",
        hindi: "सॉलिडैरिटी",
        meaning: "unity and mutual support within a group",
        type: "definition",
        question: '<span class="highlight">Solidarity</span> among workers means:',
        options: [
            "Competition for promotions",
            "Unity and mutual support within the group",
            "Individual achievement over teamwork",
            "Strict hierarchy and obedience"
        ],
        correct: 1
    },
    {
        word: "Klutz",
        hindi: "क्लट्स",
        meaning: "a clumsy or awkward person",
        type: "fill",
        question: '"He knocked over three glasses at dinner — he\'s such a ______!"',
        options: [
            "Despot",
            "Fugitive",
            "Klutz",
            "Delegate"
        ],
        correct: 2
    },
    {
        word: "Posthumously",
        hindi: "पोस्टह्यूमस्ली",
        meaning: "occurring or awarded after a person's death",
        type: "definition",
        question: 'An award given <span class="highlight">posthumously</span> is given:',
        options: [
            "Before a person retires",
            "During a ceremony",
            "After a person's death",
            "On a birthday celebration"
        ],
        correct: 2
    },
    {
        word: "Incommode",
        hindi: "इनकमोड",
        meaning: "to cause inconvenience, discomfort, or disturbance",
        type: "synonym",
        question: 'Which word is closest in meaning to <span class="highlight">Incommode</span>?',
        options: [
            "Comfort",
            "Inconvenience",
            "Accommodate",
            "Celebrate"
        ],
        correct: 1
    }
];
