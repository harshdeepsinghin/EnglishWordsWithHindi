// Quiz Engine — Handles quiz flow, scoring, and UI rendering
(function () {
    'use strict';

    // ── State ──
    let currentQuestion = 0;
    let score = 0;
    let answered = false;
    let questions = [];

    // ── DOM Refs ──
    const container = document.getElementById('quiz-container');
    const progressText = document.getElementById('progress-text');
    const scoreText = document.getElementById('score-text');
    const progressFill = document.getElementById('progress-fill');

    // ── Shuffle (Fisher-Yates) ──
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // ── Initialize ──
    function init() {
        if (typeof QUIZ_DATA === 'undefined' || !QUIZ_DATA.length) {
            container.innerHTML = '<p style="text-align:center;color:var(--text-muted);">No quiz data found.</p>';
            return;
        }
        questions = shuffle(QUIZ_DATA);
        currentQuestion = 0;
        score = 0;
        answered = false;
        renderQuestion();
    }

    // ── Update Progress ──
    function updateProgress() {
        const total = questions.length;
        progressText.textContent = `Question ${currentQuestion + 1} of ${total}`;
        scoreText.textContent = `Score: ${score}`;
        progressFill.style.width = `${((currentQuestion) / total) * 100}%`;
    }

    // ── Question Type Labels ──
    const typeLabels = {
        definition: '📖 Definition',
        fill: '✏️ Fill in the Blank',
        synonym: '🔗 Synonym',
        antonym: '🔄 Antonym'
    };

    // ── Render Question ──
    function renderQuestion() {
        answered = false;
        const q = questions[currentQuestion];
        updateProgress();

        const letters = ['A', 'B', 'C', 'D'];

        container.innerHTML = `
            <div class="question-card" id="q-card">
                <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
                <div class="question-type">${typeLabels[q.type] || '📝 Question'}</div>
                <div class="question-text">${q.question}</div>
                <div class="options-list" id="options">
                    ${q.options.map((opt, i) => `
                        <button class="option-btn" data-index="${i}" id="opt-${i}">
                            <span class="option-letter">${letters[i]}</span>
                            <span>${opt}</span>
                        </button>
                    `).join('')}
                </div>
                <div id="feedback"></div>
            </div>
        `;

        // Attach listeners
        const optionBtns = container.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
        });

        // Keyboard shortcut (A, B, C, D or 1, 2, 3, 4)
        document.onkeydown = function (e) {
            if (answered) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    nextQuestion();
                }
                return;
            }
            const keyMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, '1': 0, '2': 1, '3': 2, '4': 3 };
            const idx = keyMap[e.key.toLowerCase()];
            if (idx !== undefined) {
                handleAnswer(idx);
            }
        };
    }

    // ── Handle Answer ──
    function handleAnswer(selectedIndex) {
        if (answered) return;
        answered = true;

        const q = questions[currentQuestion];
        const isCorrect = selectedIndex === q.correct;
        if (isCorrect) score++;

        // Update score display
        scoreText.textContent = `Score: ${score}`;

        // Mark options
        const optionBtns = container.querySelectorAll('.option-btn');
        optionBtns.forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.correct) {
                btn.classList.add('correct');
            } else if (i === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Show explanation
        const feedback = document.getElementById('feedback');
        const resultClass = isCorrect ? 'correct' : 'incorrect';
        const resultIcon = isCorrect ? '✅' : '❌';
        const resultText = isCorrect ? 'Correct!' : 'Incorrect';

        feedback.innerHTML = `
            <div class="explanation ${resultClass}">
                <div class="explanation-header ${resultClass}">
                    ${resultIcon} ${resultText}
                </div>
                <div class="word-info">
                    <strong>${q.word}</strong> <span class="hindi">(${q.hindi})</span>
                </div>
                <div class="meaning">${q.meaning}</div>
            </div>
            ${currentQuestion < questions.length - 1
                ? `<button class="next-btn" id="next-btn" onclick="void(0)">Next Question →</button>`
                : `<button class="next-btn" id="next-btn" onclick="void(0)">See Results 🎉</button>`
            }
        `;

        document.getElementById('next-btn').addEventListener('click', nextQuestion);
    }

    // ── Next Question ──
    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            showResults();
        } else {
            renderQuestion();
            // Scroll to top of question smoothly
            document.querySelector('.progress-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ── Show Results ──
    function showResults() {
        const total = questions.length;
        const pct = Math.round((score / total) * 100);

        progressText.textContent = 'Quiz Complete!';
        scoreText.textContent = `Final: ${score}/${total}`;
        progressFill.style.width = '100%';

        let icon, message;
        if (pct >= 90) {
            icon = '🏆';
            message = 'Outstanding! You have an excellent vocabulary. Keep it up!';
        } else if (pct >= 70) {
            icon = '🌟';
            message = 'Great job! You know most of these words. Review the ones you missed.';
        } else if (pct >= 50) {
            icon = '💪';
            message = 'Good effort! Practice makes perfect — try again to improve your score.';
        } else {
            icon = '📖';
            message = 'Keep learning! Review the word list and take the quiz again. You\'ll get better!';
        }

        container.innerHTML = `
            <div class="results-card">
                <div class="results-icon">${icon}</div>
                <h2>Quiz Complete!</h2>
                <div class="results-score">${pct}%</div>
                <div class="results-detail">${score} correct out of ${total} questions</div>
                <p class="results-message">${message}</p>
                <div class="results-actions">
                    <button class="btn btn-primary" id="retry-btn">🔄 Try Again</button>
                    <a href="../index.html" class="btn btn-secondary">← All Quizzes</a>
                </div>
            </div>
        `;

        document.getElementById('retry-btn').addEventListener('click', () => {
            init();
            document.querySelector('.quiz-header').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // ── Start ──
    init();
})();
