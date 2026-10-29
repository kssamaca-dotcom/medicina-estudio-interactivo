// MedPulse Educational Portal - Unified Application Controller

// View titles map
const VIEW_TITLES = {
  'inicio': 'Inicio',
  'casos': 'Casos Clínicos',
  'test': 'Cuestionario Test',
  'repaso': 'Progreso y Repaso',
  'tutor-ia': 'Tutor IA Dr. Synapse'
};

/**
 * Switch active view screen
 * @param {string} tabId - Identifier of tab ('inicio' | 'casos' | 'test' | 'repaso' | 'tutor-ia')
 */
function switchTab(tabId) {
  // 1. Hide all screens
  const screens = document.querySelectorAll('.view-screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
    screen.classList.add('hidden');
  });

  // 2. Show active screen
  const targetScreen = document.getElementById(`view-${tabId}`);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
    targetScreen.classList.add('active');
  }

  // 3. Update top header subtitle
  const headerSubtitle = document.getElementById('header-subtitle');
  if (headerSubtitle && VIEW_TITLES[tabId]) {
    headerSubtitle.textContent = VIEW_TITLES[tabId];
  }

  // 4. Update bottom nav indicators
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('data-path');
    const label = link.querySelector('.nav-label');
    const icon = link.querySelector('.material-symbols-outlined');

    if (linkPath === tabId) {
      link.classList.remove('text-on-surface-variant');
      link.classList.add('text-primary-container', 'font-semibold');
      if (icon) icon.style.fontVariationSettings = "'FILL' 1";
    } else {
      link.classList.remove('text-primary-container', 'font-semibold');
      link.classList.add('text-on-surface-variant');
      if (icon) icon.style.fontVariationSettings = "'FILL' 0";
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // If navigating to Test and quiz is not active, initialize quiz
  if (tabId === 'test' && typeof initQuizSession === 'function') {
    if (!userAnswers || userAnswers.length === 0) {
      initQuizSession();
    }
  }

  // If navigating to Inicio or Repaso, refresh metrics
  if ((tabId === 'inicio' || tabId === 'repaso') && typeof updateGlobalMetricsUI === 'function') {
    updateGlobalMetricsUI();
  }
}

// Specialty filter logic for Casos screen
function initCaseFilters() {
  const filters = document.querySelectorAll('.specialty-filter');
  const cards = document.querySelectorAll('.case-card');
  const emptyState = document.getElementById('empty-state');

  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
        b.classList.add('bg-surface-container-high', 'text-on-surface-variant');
      });

      btn.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
      btn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');

      const category = btn.getAttribute('data-filter');
      let visibleCount = 0;

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'flex' : 'none';
      }
    });
  });
}

// Tutor IA Interactive functions
function insertQuery(text) {
  const input = document.getElementById('query-input');
  if (input) {
    input.value = text.trim();
    input.focus();
  }
}

function clearInput() {
  const input = document.getElementById('query-input');
  if (input) {
    input.value = '';
    input.focus();
  }
}

function toggleAudio() {
  const icon = document.getElementById('play-icon');
  if (icon) {
    if (icon.innerText === 'play_arrow') {
      icon.innerText = 'pause';
    } else {
      icon.innerText = 'play_arrow';
    }
  }
}

function toggleVoice() {
  const btn = document.getElementById('voice-btn');
  if (btn) {
    const isListening = btn.classList.contains('bg-error-container');
    if (isListening) {
      btn.classList.remove('bg-error-container', 'text-on-error-container');
      btn.classList.add('bg-surface-container', 'text-on-surface-variant');
    } else {
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      btn.classList.add('bg-error-container', 'text-on-error-container');
      const input = document.getElementById('query-input');
      if (input && !input.value) {
        input.placeholder = "Escuchando dictado clínico...";
      }
    }
  }
}

function respondChoice(choiceText) {
  appendUserBubble(choiceText);
  setTimeout(() => {
    appendCaseSimulation();
  }, 600);
}

function sendMessage(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('query-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  
  appendUserBubble(val);
  input.value = '';

  setTimeout(() => {
    appendTutorFollowup();
  }, 700);
}

function appendUserBubble(text) {
  const chatContainer = document.getElementById('chat-messages');
  if (!chatContainer) return;
  const userDiv = document.createElement('div');
  userDiv.className = 'flex flex-col items-end gap-1 pl-8';
  userDiv.innerHTML = `
    <div class="flex items-center gap-1.5 text-on-surface-variant px-1">
      <span class="text-xs font-semibold">Dra. Sofía R.</span>
      <span class="text-[10px] text-outline">Ahora</span>
    </div>
    <div class="bg-primary-container text-on-primary rounded-2xl rounded-tr-xs p-space-md shadow-sm">
      <p class="text-xs leading-relaxed">${escapeHtml(text)}</p>
    </div>
    <div class="flex items-center gap-1 text-outline text-[10px] pr-1">
      <span>Enviado</span>
      <span class="material-symbols-outlined text-sm text-secondary">check</span>
    </div>
  `;
  chatContainer.appendChild(userDiv);
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function appendCaseSimulation() {
  const chatContainer = document.getElementById('chat-messages');
  if (!chatContainer) return;
  const caseDiv = document.createElement('div');
  caseDiv.className = 'flex flex-col items-start gap-1 pr-4';
  caseDiv.innerHTML = `
    <div class="flex items-center gap-1.5 text-on-surface-variant px-1">
      <span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">neurology</span>
      <span class="text-xs font-semibold text-primary">Dr. Synapse</span>
      <span class="text-[10px] text-outline">Ahora</span>
    </div>
    <div class="bg-surface-container-lowest text-on-surface rounded-2xl rounded-tl-xs p-space-md shadow-sm flex flex-col gap-2 w-full">
      <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold w-fit">
        <span class="material-symbols-outlined text-xs">local_hospital</span> Caso Clínico Rápido
      </div>
      <p class="text-xs text-on-surface leading-relaxed">
        <strong>Paciente varón de 68 años</strong>, con antecedente de infarto previo, acude a urgencias con disnea progresiva y edemas en miembros inferiores. En la auscultación en ápex con campana, escuchas un ruido sordo temprano en diástole que asemeja un galope.
      </p>
      <div class="bg-surface-container-low p-2.5 rounded-xl text-xs font-semibold text-primary">
        ¿Cuál es tu sospecha fisiopatológica inmediata: R3 o R4, y qué refleja en este contexto?
      </div>
    </div>
  `;
  chatContainer.appendChild(caseDiv);
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function appendTutorFollowup() {
  const chatContainer = document.getElementById('chat-messages');
  if (!chatContainer) return;
  const replyDiv = document.createElement('div');
  replyDiv.className = 'flex flex-col items-start gap-1 pr-4';
  replyDiv.innerHTML = `
    <div class="flex items-center gap-1.5 text-on-surface-variant px-1">
      <span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">neurology</span>
      <span class="text-xs font-semibold text-primary">Dr. Synapse</span>
      <span class="text-[10px] text-outline">Ahora</span>
    </div>
    <div class="bg-surface-container-lowest text-on-surface rounded-2xl rounded-tl-xs p-space-md shadow-sm flex flex-col gap-1 w-full">
      <p class="text-xs text-on-surface leading-relaxed">
        Recibido, Sofía. Procesando tu consulta según las últimas directrices de la guía clínica... ¿Deseas correlacionar esto con el electrocardiograma de 12 derivaciones o repasar la perla terapéutica?
      </p>
    </div>
  `;
  chatContainer.appendChild(replyDiv);
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-path');
      if (path) switchTab(path);
    });
  });

  // Cross-screen triggers (buttons with data-target-tab)
  document.querySelectorAll('[data-target-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target-tab');
      if (target) {
        if (target === 'test' && typeof initQuizSession === 'function') {
          // If the quiz is not currently in progress or student came from home CTA, start fresh
          if (!userAnswers || userAnswers.length === 0 || isQuestionAnswered) {
            initQuizSession();
          }
        }
        switchTab(target);
      }
    });
  });

  // Initialize Case filters
  initCaseFilters();

  // Time range selector on Repaso screen
  const timeBtns = document.querySelectorAll('.time-range-btn');
  timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeBtns.forEach(b => {
        b.classList.remove('bg-surface-container-lowest', 'text-primary-container', 'shadow-sm');
        b.classList.add('text-on-surface-variant');
      });
      btn.classList.add('bg-surface-container-lowest', 'text-primary-container', 'shadow-sm');
      btn.classList.remove('text-on-surface-variant');
    });
  });

  // Set default tab
  switchTab('inicio');

  // Load saved metrics from localStorage if available
  if (typeof updateGlobalMetricsUI === 'function') {
    updateGlobalMetricsUI();
  }
});
