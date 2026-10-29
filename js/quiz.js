// MedPulse Educational Portal - Quiz Controller (Fase 1)
// Cuestionarios interactivos con justificación clínica, retroalimentación y persistencia

let currentQuestionIndex = 0;
let userAnswers = []; // Array of { questionId, selectedIndex, isCorrect, category }
let isQuestionAnswered = false;
let quizTimerSeconds = 0;
let quizTimerInterval = null;

/**
 * Initialize or restart the quiz session
 */
function initQuizSession() {
  currentQuestionIndex = 0;
  userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  isQuestionAnswered = false;
  quizTimerSeconds = 0;

  // Reset timer
  clearInterval(quizTimerInterval);
  quizTimerInterval = setInterval(() => {
    quizTimerSeconds++;
    updateQuizTimerDisplay();
  }, 1000);
  updateQuizTimerDisplay();

  // Show active quiz view and hide results
  const activeView = document.getElementById('quiz-active-view');
  const resultsView = document.getElementById('quiz-results-view');
  if (activeView) activeView.classList.remove('hidden');
  if (resultsView) resultsView.classList.add('hidden');

  renderCurrentQuestion();
}

/**
 * Update timer display (MM:SS format)
 */
function updateQuizTimerDisplay() {
  const timerElem = document.getElementById('quiz-timer');
  if (!timerElem) return;
  const mins = Math.floor(quizTimerSeconds / 60).toString().padStart(2, '0');
  const secs = (quizTimerSeconds % 60).toString().padStart(2, '0');
  timerElem.textContent = `${mins}:${secs}`;
}

/**
 * Render current question based on currentQuestionIndex
 */
function renderCurrentQuestion() {
  if (currentQuestionIndex >= QUIZ_QUESTIONS.length) {
    finishQuizSession();
    return;
  }

  isQuestionAnswered = false;
  const q = QUIZ_QUESTIONS[currentQuestionIndex];
  const total = QUIZ_QUESTIONS.length;
  const currentNum = currentQuestionIndex + 1;
  const percent = Math.round((currentNum / total) * 100);

  // 1. Header & Tracker Info
  const specialtyBadge = document.getElementById('quiz-specialty-badge');
  if (specialtyBadge) specialtyBadge.textContent = q.category;

  const difficultyBadge = document.getElementById('quiz-difficulty-badge');
  if (difficultyBadge) difficultyBadge.textContent = `Dificultad: ${q.difficulty}`;

  const progressText = document.getElementById('quiz-progress-text');
  if (progressText) {
    progressText.innerHTML = `Pregunta ${currentNum} <span class="font-normal text-on-surface-variant">de ${total}</span>`;
  }

  const progressPercent = document.getElementById('quiz-progress-percent');
  if (progressPercent) {
    progressPercent.textContent = `${percent}% completado`;
  }

  const progressBar = document.getElementById('quiz-progress-bar');
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }

  // 2. Clinical Case & Question text
  const caseId = document.getElementById('quiz-case-id');
  if (caseId) caseId.textContent = q.caseCode;

  const promptText = document.getElementById('quiz-prompt-text');
  if (promptText) promptText.textContent = q.prompt;

  const questionText = document.getElementById('quiz-question-text');
  if (questionText) questionText.textContent = q.question;

  // 3. Render 4 Multiple Choice Options
  const optionsContainer = document.getElementById('quiz-options-container');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn w-full text-left bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between gap-space-sm transition-all hover:bg-surface-container-low active:scale-[0.99] border-2 border-transparent';
      btn.setAttribute('data-option-index', idx);
      btn.onclick = () => handleOptionSelection(idx);

      btn.innerHTML = `
        <div class="flex items-start gap-space-sm min-w-0">
          <span class="option-letter-badge flex-shrink-0 w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-xs font-bold transition-colors">
            ${letters[idx]}
          </span>
          <div class="flex flex-col min-w-0">
            <span class="option-text-label text-on-surface text-sm leading-snug">
              ${optText}
            </span>
            <span class="option-feedback-sublabel text-xs font-bold mt-0.5 hidden"></span>
          </div>
        </div>
        <span class="option-icon-indicator w-5 h-5 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center transition-colors"></span>
      `;
      optionsContainer.appendChild(btn);
    });
  }

  // 4. Hide Clinical Justification Card
  const justCard = document.getElementById('quiz-justification-card');
  if (justCard) justCard.classList.add('hidden');

  // 5. Setup Next Button
  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    const isLast = currentNum === total;
    nextBtn.innerHTML = `
      <span>${isLast ? 'Ver Resultados Finales' : 'Siguiente Pregunta'}</span>
      <span class="material-symbols-outlined text-xl">${isLast ? 'grade' : 'arrow_forward'}</span>
    `;
    // Visual hint: subdued until answered
    nextBtn.classList.remove('ring-4', 'ring-secondary-container/40', 'animate-pulse');
  }

  // Connect Tutor Consultation button to this question's theme
  const tutorBtn = document.getElementById('quiz-consult-tutor-btn');
  if (tutorBtn) {
    tutorBtn.onclick = () => {
      switchTab('tutor-ia');
      insertQuery(`Tengo una duda con el caso de arritmias/farmacología: "${q.question}"`);
    };
  }
}

/**
 * Handle student clicking an option
 * @param {number} selectedIndex 
 */
function handleOptionSelection(selectedIndex) {
  if (isQuestionAnswered) return; // Prevent changing answer after evaluation
  isQuestionAnswered = true;

  const q = QUIZ_QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedIndex === q.correctIndex;

  // Record user answer
  userAnswers[currentQuestionIndex] = {
    questionId: q.id,
    selectedIndex,
    correctIndex: q.correctIndex,
    isCorrect,
    category: q.category,
    questionText: q.question
  };

  // Update UI for all options
  const optionButtons = document.querySelectorAll('.quiz-option-btn');
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove('hover:bg-surface-container-low', 'border-transparent');

    const letterBadge = btn.querySelector('.option-letter-badge');
    const feedbackSub = btn.querySelector('.option-feedback-sublabel');
    const iconIndicator = btn.querySelector('.option-icon-indicator');

    if (idx === q.correctIndex) {
      // Highlight correct answer in Emerald Mint
      btn.classList.add('bg-secondary-container/20', 'border-secondary', 'shadow-sm');
      if (letterBadge) {
        letterBadge.className = 'option-letter-badge flex-shrink-0 w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold shadow-sm';
      }
      if (feedbackSub) {
        feedbackSub.textContent = 'Respuesta Correcta';
        feedbackSub.className = 'option-feedback-sublabel text-xs font-bold mt-0.5 text-secondary flex items-center gap-1';
        feedbackSub.innerHTML = `<span class="material-symbols-outlined text-[13px]">check_circle</span> Respuesta Correcta`;
        feedbackSub.classList.remove('hidden');
      }
      if (iconIndicator) {
        iconIndicator.className = 'option-icon-indicator flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center';
        iconIndicator.innerHTML = `<span class="material-symbols-outlined text-[16px] font-bold">check</span>`;
      }
    } else if (idx === selectedIndex && !isCorrect) {
      // Highlight user's incorrect answer in Coral Red
      btn.classList.add('bg-error-container/30', 'border-error', 'shadow-sm');
      if (letterBadge) {
        letterBadge.className = 'option-letter-badge flex-shrink-0 w-7 h-7 rounded-full bg-error text-on-error flex items-center justify-center text-xs font-bold shadow-sm';
      }
      if (feedbackSub) {
        feedbackSub.textContent = 'Tu respuesta (Incorrecta)';
        feedbackSub.className = 'option-feedback-sublabel text-xs font-bold mt-0.5 text-error flex items-center gap-1';
        feedbackSub.innerHTML = `<span class="material-symbols-outlined text-[13px]">cancel</span> Tu respuesta (Incorrecta)`;
        feedbackSub.classList.remove('hidden');
      }
      if (iconIndicator) {
        iconIndicator.className = 'option-icon-indicator flex-shrink-0 w-6 h-6 rounded-full bg-error text-on-error flex items-center justify-center';
        iconIndicator.innerHTML = `<span class="material-symbols-outlined text-[16px] font-bold">close</span>`;
      }
    } else {
      // Neutral unselected options
      btn.classList.add('opacity-60');
    }
  });

  // Display Clinical Justification & Pearl Card
  const justCard = document.getElementById('quiz-justification-card');
  if (justCard) {
    const evidenceBadge = document.getElementById('quiz-evidence-badge');
    if (evidenceBadge) evidenceBadge.textContent = q.evidence;

    const justText = document.getElementById('quiz-justification-text');
    if (justText) justText.textContent = q.justification;

    const pearlText = document.getElementById('quiz-pearl-text');
    if (pearlText) pearlText.textContent = q.pearl;

    justCard.classList.remove('hidden');
    justCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Highlight Next Button
  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.classList.add('ring-4', 'ring-secondary-container/40');
  }
}

/**
 * Advance to next question or finish
 */
function handleNextQuestion() {
  if (!isQuestionAnswered) {
    // Alert student to choose an option before advancing
    const optContainer = document.getElementById('quiz-options-container');
    if (optContainer) {
      optContainer.classList.add('ring-2', 'ring-primary', 'rounded-2xl', 'p-1');
      setTimeout(() => {
        optContainer.classList.remove('ring-2', 'ring-primary', 'rounded-2xl', 'p-1');
      }, 700);
    }
    return;
  }

  if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    finishQuizSession();
  }
}

/**
 * Conclude quiz, compute grade, save to localStorage and show Results
 */
function finishQuizSession() {
  clearInterval(quizTimerInterval);

  const total = QUIZ_QUESTIONS.length;
  const correctCount = userAnswers.filter(a => a && a.isCorrect).length;
  const incorrectCount = total - correctCount;
  const scorePercent = Math.round((correctCount / total) * 100);

  // Time formatting
  const mins = Math.floor(quizTimerSeconds / 60);
  const secs = quizTimerSeconds % 60;
  const timeFormatted = `${mins}m ${secs.toString().padStart(2, '0')}s`;

  // Save session to localStorage
  const sessionResult = {
    id: 'quiz_' + Date.now(),
    date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
    score: correctCount,
    total: total,
    percentage: scorePercent,
    timeSpent: timeFormatted,
    answers: userAnswers
  };

  saveQuizResultToStorage(sessionResult);

  // Render Results Card
  const activeView = document.getElementById('quiz-active-view');
  const resultsView = document.getElementById('quiz-results-view');
  if (activeView) activeView.classList.add('hidden');
  if (resultsView) resultsView.classList.remove('hidden');

  // Fill results elements
  const scoreBadge = document.getElementById('result-score-percent');
  if (scoreBadge) scoreBadge.textContent = `${scorePercent}%`;

  const scoreFraction = document.getElementById('result-score-fraction');
  if (scoreFraction) scoreFraction.textContent = `${correctCount} / ${total} aciertos`;

  const correctDisplay = document.getElementById('result-correct-count');
  if (correctDisplay) correctDisplay.textContent = correctCount;

  const incorrectDisplay = document.getElementById('result-incorrect-count');
  if (incorrectDisplay) incorrectDisplay.textContent = incorrectCount;

  const timeDisplay = document.getElementById('result-time-spent');
  if (timeDisplay) timeDisplay.textContent = timeFormatted;

  // Diagnostic Feedback message
  const feedbackMsg = document.getElementById('result-feedback-message');
  const feedbackTitle = document.getElementById('result-feedback-title');
  if (feedbackMsg && feedbackTitle) {
    if (scorePercent >= 90) {
      feedbackTitle.textContent = '¡Nivel Sobresaliente! 🌟';
      feedbackMsg.textContent = 'Excelente retención fisiopatológica y criterio clínico. Dominio idóneo para simulación MIR/ENARM/USMLE.';
    } else if (scorePercent >= 70) {
      feedbackTitle.textContent = '¡Aprobado con Buen Nivel! 🩺';
      feedbackMsg.textContent = 'Sólido razonamiento clínico. Te recomendamos revisar los temas puntuales con fallo para alcanzar la excelencia.';
    } else {
      feedbackTitle.textContent = 'Refuerzo Recomendado 📚';
      feedbackMsg.textContent = 'Se identificaron conceptos clave que requieren consolidación. Accede a la pestaña de Repaso para fijar estos temas.';
    }
  }

  // Breakdown of questions in results
  const breakdownContainer = document.getElementById('result-breakdown-list');
  if (breakdownContainer) {
    breakdownContainer.innerHTML = '';
    QUIZ_QUESTIONS.forEach((q, idx) => {
      const ans = userAnswers[idx];
      const isOk = ans && ans.isCorrect;
      const letters = ['A', 'B', 'C', 'D'];

      const row = document.createElement('div');
      row.className = `p-3 rounded-xl border flex flex-col gap-1.5 ${isOk ? 'bg-secondary-container/10 border-secondary/30' : 'bg-error-container/15 border-error/30'}`;
      
      row.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold ${isOk ? 'text-secondary' : 'text-error'} flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">${isOk ? 'check_circle' : 'cancel'}</span>
            Pregunta ${idx + 1} • ${q.category}
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded-full ${isOk ? 'bg-secondary-container text-on-secondary-container font-semibold' : 'bg-error-container text-on-error-container font-semibold'}">
            ${isOk ? 'Acertada' : 'Fallada'}
          </span>
        </div>
        <p class="text-xs text-on-surface font-medium leading-snug">${q.question}</p>
        <div class="text-[11px] text-on-surface-variant flex flex-col gap-0.5 pt-0.5">
          <span><strong>Clave correcta:</strong> (${letters[q.correctIndex]}) ${q.options[q.correctIndex]}</span>
          ${!isOk && ans ? `<span class="text-error"><strong>Tu elección:</strong> (${letters[ans.selectedIndex]}) ${q.options[ans.selectedIndex]}</span>` : ''}
        </div>
      `;
      breakdownContainer.appendChild(row);
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Persist quiz result in localStorage
 * @param {Object} result 
 */
function saveQuizResultToStorage(result) {
  try {
    // 1. History
    const history = JSON.parse(localStorage.getItem('medpulse_quiz_history') || '[]');
    history.unshift(result);
    localStorage.setItem('medpulse_quiz_history', JSON.stringify(history.slice(0, 30)));

    // 2. Aggregate stats
    const stats = JSON.parse(localStorage.getItem('medpulse_quiz_stats') || '{"totalAnswered":0,"totalCorrect":0,"quizzesCompleted":0}');
    stats.totalAnswered += result.total;
    stats.totalCorrect += result.score;
    stats.quizzesCompleted += 1;
    stats.accuracy = Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
    localStorage.setItem('medpulse_quiz_stats', JSON.stringify(stats));

    // 3. Update Home & Repaso UI with real stats if available
    updateGlobalMetricsUI(stats);
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }
}

/**
 * Reflect real stats in the Dashboard and Repaso views
 */
function updateGlobalMetricsUI(stats) {
  if (!stats) {
    try {
      stats = JSON.parse(localStorage.getItem('medpulse_quiz_stats') || 'null');
    } catch (e) {
      stats = null;
    }
  }

  // Home Screen Elements
  const homeSolved = document.getElementById('home-daily-solved');
  const homePercent = document.getElementById('home-daily-percent');
  const homeBar = document.getElementById('home-daily-progress-bar');
  const homeAccuracy = document.getElementById('home-global-accuracy');
  const homeStatus = document.getElementById('home-accuracy-status');
  const homeSvgCircle = document.getElementById('home-daily-svg-circle');

  // Repaso Screen Elements
  const repasoRetention = document.getElementById('repaso-global-retention');
  const repasoSolved = document.getElementById('repaso-total-solved');
  const repasoCircle = document.getElementById('repaso-radial-circle');

  if (stats && stats.totalAnswered > 0) {
    if (homeSolved) homeSolved.textContent = stats.totalAnswered;
    if (homePercent) homePercent.textContent = `${stats.accuracy}%`;
    if (homeBar) homeBar.style.width = `${Math.min(stats.accuracy, 100)}%`;
    if (homeAccuracy) homeAccuracy.textContent = `${stats.accuracy}%`;
    if (homeStatus) homeStatus.textContent = `${stats.totalCorrect} de ${stats.totalAnswered} aciertos`;
    if (homeSvgCircle) {
      const offset = 125.6 - (125.6 * (stats.accuracy / 100));
      homeSvgCircle.style.strokeDashoffset = offset;
    }

    if (repasoRetention) repasoRetention.textContent = `${stats.accuracy}%`;
    if (repasoSolved) repasoSolved.textContent = stats.totalAnswered;
    if (repasoCircle) {
      const offset = 251.32 - (251.32 * (stats.accuracy / 100));
      repasoCircle.style.strokeDashoffset = offset;
    }
  } else {
    // Initial state: no fake results!
    if (homeSolved) homeSolved.textContent = '0';
    if (homePercent) homePercent.textContent = '0%';
    if (homeBar) homeBar.style.width = '0%';
    if (homeAccuracy) homeAccuracy.textContent = '--%';
    if (homeStatus) homeStatus.textContent = 'Sin tests completados';
    if (homeSvgCircle) homeSvgCircle.style.strokeDashoffset = '125.6';

    if (repasoRetention) repasoRetention.textContent = '--%';
    if (repasoSolved) repasoSolved.textContent = '0';
    if (repasoCircle) repasoCircle.style.strokeDashoffset = '251.32';
  }
}
