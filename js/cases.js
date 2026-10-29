// MedPulse Educational Portal - Clinical Cases Controller (Fase 2)
// Simulador interactivo de toma de decisiones clínicas por fases

let activeCaseId = null;
let currentStageIndex = 0;
let stageAnswers = [];
let isStageAnswered = false;

/**
 * Open a specific clinical case and display the simulator
 * @param {string} caseId 
 */
function openCase(caseId) {
  if (!CLINICAL_CASES_DATA[caseId]) {
    console.warn(`Caso ${caseId} no encontrado, usando case_142`);
    caseId = 'case_142';
  }

  activeCaseId = caseId;
  const c = CLINICAL_CASES_DATA[caseId];

  // Retrieve saved progress from localStorage
  const savedState = getCaseSavedState(caseId);
  if (savedState && savedState.status === 'in_progress' && savedState.currentStageIndex < c.stages.length) {
    currentStageIndex = savedState.currentStageIndex;
    stageAnswers = savedState.stageAnswers || [];
  } else {
    currentStageIndex = 0;
    stageAnswers = new Array(c.stages.length).fill(null);
  }

  isStageAnswered = false;

  // Make sure we are on the 'casos' screen
  switchTab('casos');

  // Toggle views
  const listView = document.getElementById('cases-list-view');
  const playerView = document.getElementById('case-player-view');
  const summaryView = document.getElementById('case-summary-view');

  if (listView) listView.classList.add('hidden');
  if (summaryView) summaryView.classList.add('hidden');
  if (playerView) playerView.classList.remove('hidden');

  renderCaseStage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Convenience helper to open a case directly from Inicio
 * @param {string} caseId 
 */
function openCaseFromHome(caseId) {
  openCase(caseId);
}

/**
 * Return from case player to the main cases list
 */
function closeCasePlayer() {
  const listView = document.getElementById('cases-list-view');
  const playerView = document.getElementById('case-player-view');
  const summaryView = document.getElementById('case-summary-view');

  if (playerView) playerView.classList.add('hidden');
  if (summaryView) summaryView.classList.add('hidden');
  if (listView) listView.classList.remove('hidden');

  updateCasesListProgressBadges();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render the current stage of the active clinical case
 */
function renderCaseStage() {
  if (!activeCaseId || !CLINICAL_CASES_DATA[activeCaseId]) return;

  const c = CLINICAL_CASES_DATA[activeCaseId];
  const st = c.stages[currentStageIndex];
  const totalStages = c.stages.length;
  const stageNum = currentStageIndex + 1;
  const progressPercent = Math.round((stageNum / totalStages) * 100);

  isStageAnswered = false;

  // Header & Title
  const titleElem = document.getElementById('player-case-title');
  if (titleElem) titleElem.textContent = c.title;

  const specialtyBadge = document.getElementById('player-specialty-badge');
  if (specialtyBadge) specialtyBadge.textContent = c.specialty;

  const stageBadge = document.getElementById('player-stage-badge');
  if (stageBadge) stageBadge.textContent = `Fase ${stageNum} de ${totalStages}`;

  const progressBar = document.getElementById('player-progress-bar');
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  const progressPercentLabel = document.getElementById('player-progress-percent');
  if (progressPercentLabel) progressPercentLabel.textContent = `${progressPercent}% completado`;

  // Patient Card Details
  const patientName = document.getElementById('player-patient-name');
  if (patientName) {
    const ageLabel = c.patient.ageUnit ? `${c.patient.age} ${c.patient.ageUnit}` : `${c.patient.age} años`;
    patientName.textContent = `${c.patient.name} (${ageLabel}, ${c.patient.gender})`;
  }

  const patientBg = document.getElementById('player-patient-background');
  if (patientBg) patientBg.textContent = c.patient.background;

  // Vitals
  const v = c.patient.vitals;
  const fcElem = document.getElementById('player-vital-fc');
  if (fcElem) fcElem.textContent = v.fc || '--';

  const paElem = document.getElementById('player-vital-pa');
  if (paElem) paElem.textContent = v.pa || '--';

  const satElem = document.getElementById('player-vital-sat');
  if (satElem) satElem.textContent = v.sat || '--';

  const tempElem = document.getElementById('player-vital-temp');
  if (tempElem) tempElem.textContent = v.temp || '--';

  // Stage scenario narrative and question
  const stageTitleElem = document.getElementById('player-stage-title');
  if (stageTitleElem) stageTitleElem.textContent = st.stageTitle;

  const scenarioElem = document.getElementById('player-scenario-text');
  if (scenarioElem) scenarioElem.textContent = st.scenario;

  const questionElem = document.getElementById('player-question-text');
  if (questionElem) questionElem.textContent = st.question;

  // Render 4 Multiple Choice Options
  const optionsContainer = document.getElementById('player-options-container');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    st.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'case-option-btn w-full text-left bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between gap-space-sm transition-all hover:bg-surface-container-low active:scale-[0.99] border-2 border-transparent';
      btn.setAttribute('data-option-index', idx);
      btn.onclick = () => handleCaseOptionSelection(idx);

      btn.innerHTML = `
        <div class="flex items-start gap-space-sm min-w-0">
          <span class="case-letter-badge flex-shrink-0 w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-xs font-bold transition-colors">
            ${letters[idx]}
          </span>
          <div class="flex flex-col min-w-0">
            <span class="case-text-label text-on-surface text-sm leading-snug">
              ${optText}
            </span>
            <span class="case-feedback-sublabel text-xs font-bold mt-0.5 hidden"></span>
          </div>
        </div>
        <span class="case-icon-indicator w-5 h-5 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center transition-colors"></span>
      `;
      optionsContainer.appendChild(btn);
    });
  }

  // Hide Feedback Card
  const feedbackCard = document.getElementById('player-feedback-card');
  if (feedbackCard) feedbackCard.classList.add('hidden');

  // Next / Continue button setup
  const nextBtn = document.getElementById('player-next-btn');
  if (nextBtn) {
    const isLast = stageNum === totalStages;
    nextBtn.innerHTML = `
      <span>${isLast ? 'Finalizar Caso y Ver Conclusiones' : 'Continuar a Siguiente Fase'}</span>
      <span class="material-symbols-outlined text-xl">${isLast ? 'task_alt' : 'arrow_forward'}</span>
    `;
    nextBtn.classList.remove('ring-4', 'ring-secondary-container/40');
  }

  // Connect Tutor button to active case question
  const tutorBtn = document.getElementById('player-consult-tutor-btn');
  if (tutorBtn) {
    tutorBtn.onclick = () => {
      switchTab('tutor-ia');
      insertQuery(`Estoy resolviendo el caso clínico de ${c.specialty}: "${st.question}"`);
    };
  }
}

/**
 * Handle student selecting an option in the case stage
 * @param {number} selectedIndex 
 */
function handleCaseOptionSelection(selectedIndex) {
  if (isStageAnswered) return;
  isStageAnswered = true;

  const c = CLINICAL_CASES_DATA[activeCaseId];
  const st = c.stages[currentStageIndex];
  const isCorrect = selectedIndex === st.correctIndex;

  stageAnswers[currentStageIndex] = {
    stageIndex: currentStageIndex,
    stageTitle: st.stageTitle,
    selectedIndex,
    correctIndex: st.correctIndex,
    isCorrect,
    questionText: st.question
  };

  // Update option button styles
  const buttons = document.querySelectorAll('.case-option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove('hover:bg-surface-container-low', 'border-transparent');

    const letterBadge = btn.querySelector('.case-letter-badge');
    const feedbackSub = btn.querySelector('.case-feedback-sublabel');
    const iconIndicator = btn.querySelector('.case-icon-indicator');

    if (idx === st.correctIndex) {
      btn.classList.add('bg-secondary-container/20', 'border-secondary', 'shadow-sm');
      if (letterBadge) {
        letterBadge.className = 'case-letter-badge flex-shrink-0 w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold shadow-sm';
      }
      if (feedbackSub) {
        feedbackSub.textContent = 'Decisión Clínica Correcta';
        feedbackSub.className = 'case-feedback-sublabel text-xs font-bold mt-0.5 text-secondary flex items-center gap-1';
        feedbackSub.innerHTML = `<span class="material-symbols-outlined text-[13px]">check_circle</span> Conducta Correcta de Primera Línea`;
        feedbackSub.classList.remove('hidden');
      }
      if (iconIndicator) {
        iconIndicator.className = 'case-icon-indicator flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center';
        iconIndicator.innerHTML = `<span class="material-symbols-outlined text-[16px] font-bold">check</span>`;
      }
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.add('bg-error-container/30', 'border-error', 'shadow-sm');
      if (letterBadge) {
        letterBadge.className = 'case-letter-badge flex-shrink-0 w-7 h-7 rounded-full bg-error text-on-error flex items-center justify-center text-xs font-bold shadow-sm';
      }
      if (feedbackSub) {
        feedbackSub.textContent = 'Decisión Subóptima (Incorrecta)';
        feedbackSub.className = 'case-feedback-sublabel text-xs font-bold mt-0.5 text-error flex items-center gap-1';
        feedbackSub.innerHTML = `<span class="material-symbols-outlined text-[13px]">cancel</span> Decisión Subóptima`;
        feedbackSub.classList.remove('hidden');
      }
      if (iconIndicator) {
        iconIndicator.className = 'case-icon-indicator flex-shrink-0 w-6 h-6 rounded-full bg-error text-on-error flex items-center justify-center';
        iconIndicator.innerHTML = `<span class="material-symbols-outlined text-[16px] font-bold">close</span>`;
      }
    } else {
      btn.classList.add('opacity-60');
    }
  });

  // Display Clinical Feedback Card
  const feedbackCard = document.getElementById('player-feedback-card');
  if (feedbackCard) {
    const evidenceElem = document.getElementById('player-evidence-badge');
    if (evidenceElem) evidenceElem.textContent = st.evidence || 'Evidencia Clínica';

    const explElem = document.getElementById('player-explanation-text');
    if (explElem) explElem.textContent = st.explanation;

    const pearlElem = document.getElementById('player-pearl-text');
    if (pearlElem) pearlElem.textContent = st.pearl;

    feedbackCard.classList.remove('hidden');
    feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Highlight Next Button
  const nextBtn = document.getElementById('player-next-btn');
  if (nextBtn) {
    nextBtn.classList.add('ring-4', 'ring-secondary-container/40');
  }

  // Save partial progress to localStorage
  saveCaseProgressToStorage(activeCaseId, 'in_progress', currentStageIndex, stageAnswers);
}

/**
 * Advance to next stage or finish case
 */
function handleNextCaseStage() {
  if (!isStageAnswered) {
    const optContainer = document.getElementById('player-options-container');
    if (optContainer) {
      optContainer.classList.add('ring-2', 'ring-primary', 'rounded-2xl', 'p-1');
      setTimeout(() => {
        optContainer.classList.remove('ring-2', 'ring-primary', 'rounded-2xl', 'p-1');
      }, 700);
    }
    return;
  }

  const c = CLINICAL_CASES_DATA[activeCaseId];
  if (currentStageIndex < c.stages.length - 1) {
    currentStageIndex++;
    saveCaseProgressToStorage(activeCaseId, 'in_progress', currentStageIndex, stageAnswers);
    renderCaseStage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    finishCase();
  }
}

/**
 * Conclude case simulation, show debrief and update stats
 */
function finishCase() {
  const c = CLINICAL_CASES_DATA[activeCaseId];
  const totalStages = c.stages.length;
  const correctCount = stageAnswers.filter(a => a && a.isCorrect).length;
  const scorePercent = Math.round((correctCount / totalStages) * 100);

  // Save as completed
  saveCaseProgressToStorage(activeCaseId, 'completed', totalStages - 1, stageAnswers, scorePercent);

  // Switch to Summary View
  const playerView = document.getElementById('case-player-view');
  const summaryView = document.getElementById('case-summary-view');

  if (playerView) playerView.classList.add('hidden');
  if (summaryView) summaryView.classList.remove('hidden');

  // Fill Summary UI
  const summaryTitle = document.getElementById('summary-case-title');
  if (summaryTitle) summaryTitle.textContent = c.title;

  const scoreBadge = document.getElementById('summary-score-percent');
  if (scoreBadge) scoreBadge.textContent = `${scorePercent}%`;

  const circleSvg = document.getElementById('summary-circle-svg');
  if (circleSvg) {
    const offset = 251.32 - (251.32 * (scorePercent / 100));
    circleSvg.style.strokeDashoffset = offset;
  }

  const scoreFraction = document.getElementById('summary-score-fraction');
  if (scoreFraction) scoreFraction.textContent = `${correctCount} de ${totalStages} decisiones acertadas`;

  const feedbackHeader = document.getElementById('summary-feedback-header');
  const feedbackBody = document.getElementById('summary-feedback-body');

  if (feedbackHeader && feedbackBody) {
    if (scorePercent === 100) {
      feedbackHeader.textContent = '¡Resolución Clínica Perfecta! 🌟';
      feedbackBody.textContent = `Has manejado a ${c.patient.name} con rigor diagnóstico y terapéutico absoluto según las guías internacionales.`;
    } else if (scorePercent >= 66) {
      feedbackHeader.textContent = '¡Caso Resuelto con Éxito! 🩺';
      feedbackBody.textContent = `Buen criterio clínico general. El paciente ha sido estabilizado favorablemente. Revisa abajo las decisiones donde hubo oportunidad de mejora.`;
    } else {
      feedbackHeader.textContent = 'Caso Complejo • Requiere Revisión 📚';
      feedbackBody.textContent = `Algunas decisiones críticas no fueron las de primera línea recomendadas. Repasa las perlas clínicas de cada fase para afianzar el algoritmo.`;
    }
  }

  // Breakdown by stages
  const breakdownList = document.getElementById('summary-breakdown-list');
  if (breakdownList) {
    breakdownList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    c.stages.forEach((st, idx) => {
      const ans = stageAnswers[idx];
      const isOk = ans && ans.isCorrect;

      const item = document.createElement('div');
      item.className = `p-3 rounded-xl border flex flex-col gap-1.5 ${isOk ? 'bg-secondary-container/10 border-secondary/30' : 'bg-error-container/15 border-error/30'}`;

      item.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold ${isOk ? 'text-secondary' : 'text-error'} flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">${isOk ? 'check_circle' : 'cancel'}</span>
            Fase ${idx + 1}: ${st.stageTitle}
          </span>
          <span class="text-[10px] px-2 py-0.5 rounded-full ${isOk ? 'bg-secondary-container text-on-secondary-container font-semibold' : 'bg-error-container text-on-error-container font-semibold'}">
            ${isOk ? 'Decisión Óptima' : 'Decisión Fallada'}
          </span>
        </div>
        <p class="text-xs text-on-surface font-medium leading-snug">${st.question}</p>
        <div class="text-[11px] text-on-surface-variant flex flex-col gap-0.5 pt-0.5">
          <span><strong>Conducta correcta:</strong> (${letters[st.correctIndex]}) ${st.options[st.correctIndex]}</span>
          ${!isOk && ans ? `<span class="text-error"><strong>Tu elección:</strong> (${letters[ans.selectedIndex]}) ${st.options[ans.selectedIndex]}</span>` : ''}
        </div>
      `;
      breakdownList.appendChild(item);
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Restart current case from stage 1
 */
function restartCurrentCase() {
  if (!activeCaseId) return;
  // Clear progress
  const progressMap = getAllCasesProgress();
  delete progressMap[activeCaseId];
  localStorage.setItem('medpulse_cases_progress', JSON.stringify(progressMap));

  openCase(activeCaseId);
}

/**
 * Read saved state for a case
 */
function getCaseSavedState(caseId) {
  try {
    const progressMap = getAllCasesProgress();
    return progressMap[caseId] || null;
  } catch (e) {
    return null;
  }
}

/**
 * Get all cases progress map
 */
function getAllCasesProgress() {
  try {
    return JSON.parse(localStorage.getItem('medpulse_cases_progress') || '{}');
  } catch (e) {
    return {};
  }
}

/**
 * Save case progress
 */
function saveCaseProgressToStorage(caseId, status, currentStageIndex, stageAnswers, scorePercent = null) {
  try {
    const progressMap = getAllCasesProgress();
    progressMap[caseId] = {
      caseId,
      status, // 'in_progress' | 'completed'
      currentStageIndex,
      stageAnswers,
      scorePercent,
      updatedAt: Date.now()
    };
    localStorage.setItem('medpulse_cases_progress', JSON.stringify(progressMap));

    // Update global solved cases count in stats
    const stats = JSON.parse(localStorage.getItem('medpulse_quiz_stats') || '{"totalAnswered":0,"totalCorrect":0,"quizzesCompleted":0,"casesCompleted":0}');
    const completedCount = Object.values(progressMap).filter(c => c.status === 'completed').length;
    stats.casesCompleted = completedCount;
    localStorage.setItem('medpulse_quiz_stats', JSON.stringify(stats));

    // Update Repaso screen case counter
    const repasoCasesElem = document.getElementById('repaso-total-cases');
    if (repasoCasesElem) repasoCasesElem.textContent = completedCount;

    updateActiveCaseBannerUI();
  } catch (err) {
    console.warn('Error saving case progress:', err);
  }
}

/**
 * Update UI banners to show real active case stage
 */
function updateActiveCaseBannerUI() {
  const progressMap = getAllCasesProgress();
  const c142 = progressMap['case_142'];

  const stageLabel = document.getElementById('active-case-stage-label');
  const stageBar = document.getElementById('active-case-progress-bar');
  const stagePercent = document.getElementById('active-case-progress-percent');

  const homeStageLabel = document.getElementById('home-active-case-stage-label');

  if (c142 && c142.status === 'completed') {
    if (stageLabel) stageLabel.textContent = 'Caso #142 Completado con Éxito';
    if (stageBar) stageBar.style.width = '100%';
    if (stagePercent) stagePercent.textContent = '100%';
    if (homeStageLabel) homeStageLabel.textContent = 'Completado';
  } else if (c142 && c142.status === 'in_progress') {
    const stNum = (c142.currentStageIndex || 0) + 1;
    const pct = Math.round((stNum / 4) * 100);
    if (stageLabel) stageLabel.textContent = `Fase ${stNum} de 4: En Resolución`;
    if (stageBar) stageBar.style.width = `${pct}%`;
    if (stagePercent) stagePercent.textContent = `${pct}%`;
    if (homeStageLabel) homeStageLabel.textContent = `Fase ${stNum} de 4`;
  }
}

/**
 * Refresh list cards with completed badges
 */
function updateCasesListProgressBadges() {
  const progressMap = getAllCasesProgress();
  const cards = document.querySelectorAll('.case-card');

  cards.forEach(card => {
    const caseId = card.getAttribute('data-case-id');
    if (caseId && progressMap[caseId]) {
      const state = progressMap[caseId];
      const badgeContainer = card.querySelector('.case-status-badge');
      if (badgeContainer) {
        if (state.status === 'completed') {
          badgeContainer.innerHTML = `<span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold"><span class="material-symbols-outlined text-xs">verified</span> Resuelto (${state.scorePercent}%)</span>`;
        } else if (state.status === 'in_progress') {
          badgeContainer.innerHTML = `<span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold"><span class="material-symbols-outlined text-xs">pending</span> En Progreso</span>`;
        }
      }
    }
  });

  const completedCount = Object.values(progressMap).filter(c => c && c.status === 'completed').length;
  const repasoCasesElem = document.getElementById('repaso-total-cases');
  if (repasoCasesElem) repasoCasesElem.textContent = completedCount;

  updateActiveCaseBannerUI();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateCasesListProgressBadges();
});
