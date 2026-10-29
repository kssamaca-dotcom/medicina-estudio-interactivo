// MedPulse Educational Portal - Banco de Preguntas Clínicas y Básicas
// Diseñado para preparación universitaria de Medicina (MIR / ENARM / USMLE)
// Nota: Escenarios ficticios académicos para fines educativos de estudio.

const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "Cardiología & Urgencias",
    difficulty: "Media",
    caseCode: "CASO CLÍNICO #204 • ARRITMIAS",
    prompt: "Una mujer de 62 años con antecedentes de hipertensión arterial acude al servicio de urgencias refiriendo palpitaciones de inicio súbito y mareo leve. La presión arterial es de 118/76 mmHg y frecuencia cardíaca de 170 lpm. El electrocardiograma revela una taquicardia de complejo estrecho (< 120 ms), rítmica, sin ondas P visibles distinguibles. Las maniobras vagales bien ejecutadas no logran revertir el ritmo.",
    question: "¿Cuál es el tratamiento farmacológico de primera elección en este escenario hemodinámicamente estable?",
    options: [
      "Amiodarona 300 mg i.v. en infusión lenta",
      "Adenosina 6 mg i.v. en bolo rápido seguido de lavado salino",
      "Digoxina 0.5 mg i.v. en bolo directo",
      "Verapamilo 5 mg i.v. en bolo lento"
    ],
    correctIndex: 1,
    evidence: "Guías AHA / ESC 2023",
    justification: "En una taquicardia por reentrada nodal auriculoventricular (TRIN) regular y hemodinámicamente estable refractaria a maniobras vagales, la Adenosina intravenosa es el fármaco de primera línea. Produce un bloqueo transitorio y selectivo del nodo AV (con semivida menor a 10 segundos) que interrumpe el circuito de macro-reentrada de forma segura y altamente eficaz.",
    pearl: "Administrar siempre por vía venosa proximal (fosa antecubital) en bolo ultrarrápido (1-2 s) seguido inmediatamente de un bolo de 20 mL de suero salino y elevación de la extremidad para asegurar su llegada rápida al miocardio antes de su degradación enzimática plasmática."
  },
  {
    id: 2,
    category: "Farmacología Básica & Toxicología",
    difficulty: "Básica",
    caseCode: "CASO CLÍNICO #118 • TOXICOLOGÍA",
    prompt: "Varón de 42 años en sala de recuperación postoperatoria inmediata. La enfermera alerta sobre marcada disminución del nivel de consciencia (estuporoso), frecuencia respiratoria de 6 respiraciones por minuto y pupilas mióticas puntiformes y simétricas bilateralmente. El paciente recibió analgesia intravenosa multimodal con opioides potentes.",
    question: "¿Cuál es el antagonista competitivo específico que debe administrarse de inmediato para revertir este cuadro?",
    options: [
      "Flumazenilo 0.2 mg i.v.",
      "Naloxona 0.4 mg i.v. / s.c.",
      "Fisostigmina 1 mg i.v.",
      "Atropina sulfato 1 mg i.v."
    ],
    correctIndex: 1,
    evidence: "Farmacología Goodman & Gilman 14va Ed.",
    justification: "La tríada clínica clásica de intoxicación aguda por opioides comprende depresión respiratoria, disminución de la consciencia (coma/estupor) y miosis pupilar puntiforme. La Naloxona es un antagonista puro competitivo de los receptores opioides (con máxima afinidad por receptores mu) que desplaza al opioide de sus sitios de unión revirtiendo la depresión respiratoria en 1-2 minutos.",
    pearl: "La semivida de la naloxona (30 a 90 minutos) suele ser significativamente más corta que la de la mayoría de opioides (morfina, metadona, oxicodona). Es mandatorio vigilar al paciente para detectar posible resedación y requerimiento de dosis repetidas o infusión continua."
  },
  {
    id: 3,
    category: "Neurología & Fisiopatología",
    difficulty: "Avanzada",
    caseCode: "CASO CLÍNICO #305 • UNIÓN NEUROMUSCULAR",
    prompt: "Mujer de 32 años acude a consulta externa por ptosis palpebral bilateral asimétrica y visión doble (diplopía) de 3 meses de evolución. Refiere que los síntomas son leves por la mañana al despertar, pero empeoran ostensiblemente en la tarde tras su jornada laboral o al mantener la mirada fija hacia arriba. No presenta alteraciones sensitivas ni afectación de reflejos osteotendinosos.",
    question: "¿Contra qué diana molecular postsináptica están dirigidos con mayor frecuencia los autoanticuerpos patogénicos en esta enfermedad?",
    options: [
      "Receptores nicotínicos de acetilcolina (AChR)",
      "Canales de calcio dependientes de voltaje presinápticos tipo P/Q",
      "Vaina de mielina periférica (proteína básica de la mielina)",
      "Canales de sodio dependientes de voltaje en nódulos de Ranvier"
    ],
    correctIndex: 0,
    evidence: "Neurología de Adams & Victor 11va Ed.",
    justification: "La Miastenia Gravis es una enfermedad autoinmune de la unión neuromuscular. En el 80-85% de los casos se identifican autoanticuerpos dirigidos contra los receptores nicotínicos de acetilcolina (AChR) situados en la membrana postsináptica. Esto provoca endocitosis y destrucción mediada por complemento de los receptores, reduciendo los potenciales de placa terminal y causando fatiga muscular patológica.",
    pearl: "El fenómeno de empeoramiento vespertino con el uso muscular repetido (fatigabilidad) es la clave diagnóstica que la distingue del síndrome miasténico de Lambert-Eaton (asociado a anticuerpos presinápticos anti-VGCC y cáncer microcítico de pulmón), el cual mejora típicamente tras el ejercicio breve."
  },
  {
    id: 4,
    category: "Fisiología Renal & Nefrología",
    difficulty: "Media",
    caseCode: "CASO CLÍNICO #142 • HEMODINÁMICA RENAL",
    prompt: "Un paciente de 58 años presenta deshidratación severa por pérdidas gastrointestinales agudas con descenso de la presión arterial sistémica. En respuesta a la hipoperfusión renal, las células yuxtaglomerulares secretan renina, activando la cascada de la Angiotensina II y Aldosterona para proteger la tasa de filtración glomerular (TFG).",
    question: "¿Cuál es el efecto hemodinámico intrarrenal predominante de la Angiotensina II para preservar la tasa de filtración glomerular?",
    options: [
      "Vasodilatación selectiva y profunda de la arteriola eferente",
      "Vasoconstricción preferencial de la arteriola eferente glomerular",
      "Vasoconstricción intensa y exclusiva de la arteriola aferente",
      "Inhibición directa de la contracción de las células mesangiales"
    ],
    correctIndex: 1,
    evidence: "Fisiología Médica de Guyton & Hall 14va Ed.",
    justification: "La Angiotensina II ejerce un efecto vasoconstrictor preferencial sobre la arteriola eferente glomerular (al tener esta mayor densidad de receptores AT1 y menor calibre basal). Esta constricción eferente genera una resistencia a la salida capilar que eleva la presión hidrostática intraglomerular, manteniendo así la TFG relativamente estable a pesar de la caída en la presión de perfusión renal sistémica.",
    pearl: "Esta es la razón fisiopatológica por la cual los fármacos inhibidores del eje (IECA o ARA-II) pueden precipitar un fracaso renal agudo hemodinámico en pacientes con depleción severa de volumen o estenosis bilateral de arteria renal: bloquean la vasoconstricción eferente protectora."
  },
  {
    id: 5,
    category: "Pediatría & Enfermedades Infecciosas",
    difficulty: "Media",
    caseCode: "CASO CLÍNICO #219 • EXANTEMÁTICAS PEDIÁTRICAS",
    prompt: "Lactante de 10 meses previamente sano es llevado a urgencias pediátricas. Inició hace 3 días con fiebre alta súbita (39.5 °C) con buen estado general intercrítico y sin foco infeccioso evidente al examen físico. En el cuarto día de evolución, la fiebre desciende bruscamente a 36.8 °C y aparece simultáneamente un exantema máculo-papular rosado y tenue, que inicia en el tronco y se extiende discretamente a cuello y raíz de extremidades, respetando cara.",
    question: "¿Cuál es el agente etiológico causal más frecuente de este cuadro clínico (Exantema Súbito / Roséola del lactante)?",
    options: [
      "Virus del Sarampión (Paramixovirus)",
      "Parvovirus humano B19",
      "Virus Herpes Humano tipo 6 (VHH-6)",
      "Streptococcus pyogenes (Estreptococo grupo A)"
    ],
    correctIndex: 2,
    evidence: "Nelson Tratado de Pediatría 21va Ed.",
    justification: "El exantema súbito (también conocido como roséola infantil o sexta enfermedad) es ocasionado en más del 90% de los casos por el Virus Herpes Humano tipo 6 (VHH-6, y menos frecuentemente por el tipo 7). Su característica clínica patognomónica e inequívoca es la defervescencia térmica abrupta que precede inmediatamente a la erupción cutánea morbiliforme.",
    pearl: "Regla mnemotécnica clínica: «La fiebre se va y el brote llega». El Parvovirus B19 causa el eritema infeccioso (quinta enfermedad con signo de la bofetada) y el estreptococo del grupo A causa la escarlatina (erupción en piel de lija con fiebre activa)."
  },
  {
    id: 6,
    category: "Bioquímica & Hematología",
    difficulty: "Avanzada",
    caseCode: "CASO CLÍNICO #412 • ANEMIAS HEMOLÍTICAS",
    prompt: "Varón de 23 años de origen mediterráneo, sin antecedentes patológicos de interés, inicia tratamiento profiláctico con primaquina previo a un viaje a zona endémica de malaria. A los cuatro días consulta por astenia intensa, ictericia escleral y orinas oscuras de color coñac (coluria/hemoglobinuria). El frotis de sangre periférica con tinción de violeta de cresil revela cuerpos de Heinz y células mordidas (degmacitos).",
    question: "¿Qué enzima crítica de la vía de las pentosas fosfato se encuentra deficiente en este paciente?",
    options: [
      "Glucosa-6-Fosfato Deshidrogenasa (G6PD)",
      "Piruvato cinasa eritrocitaria",
      "Glutatión peroxidasa mitocondrial",
      "Hexocinasa eritrocitaria tipo I"
    ],
    correctIndex: 0,
    evidence: "Hematología Clínica de Williams 10ma Ed.",
    justification: "El déficit de G6PD es un trastorno enzimático ligado al cromosoma X. Esta enzima cataliza el primer paso de la vía de las pentosas fosfato, la única vía en el eritrocito maduro para sintetizar NADPH. Sin suficiente NADPH, la célula no puede mantener el glutatión en su estado reducido para neutralizar el estrés oxidativo provocado por fármacos prooxidantes (primaquina, sulfamidas, nitrofurantoína) o la ingestión de habas (favismo).",
    pearl: "Los cuerpos de Heinz corresponden a hemoglobina oxidada y desnaturalizada precipitada en la membrana del hematíe. Al pasar por los cordones esplénicos de Billroth, los macrófagos fagocitan estas inclusiones mecánicamente, dejando las clásicas células mordidas (*bite cells*)."
  },
  {
    id: 7,
    category: "Farmacología Clínica & Cardiología",
    difficulty: "Media",
    caseCode: "CASO CLÍNICO #187 • INSUFICIENCIA CARDÍACA",
    prompt: "Varón de 71 años con insuficiencia cardíaca con fracción de eyección reducida y fibrilación auricular crónica acude a consulta por astenia, náuseas persistentes, vómitos, anorexia y percepción visual anormal de halos amarillentos alrededor de los objetos luminosos (xantopsia). El electrocardiograma muestra bradicardia sinusal a 48 lpm y cubetas digitálicas con extrasístoles ventriculares frecuentes. Toma digoxina y furosemida.",
    question: "¿Cuál es el mecanismo primario de acción molecular de la digoxina a nivel del miocito cardíaco?",
    options: [
      "Activación selectiva de los receptores beta-1 adrenérgicos",
      "Inhibición de la bomba Na+/K+ ATPasa sarcolémica",
      "Bloqueo competitivo de los canales de calcio tipo L",
      "Estimulación de la captación de calcio por la SERCA2a"
    ],
    correctIndex: 1,
    evidence: "Cardiología de Braunwald 12va Ed.",
    justification: "La digoxina inhibe de manera selectiva y reversible la bomba Na+/K+ ATPasa de la membrana de los miocitos cardíacos. Esto produce un aumento intracelular de Na+, lo cual reduce el gradiente de concentración para el intercambiador Na+/Ca2+. Como resultado, se acumula calcio en el citoplasma y retículo sarcoplásmico, incrementando la fuerza contráctil del miocardio (efecto inotrópico positivo) al tiempo que estimula el tono vagal en el nodo AV (efecto dromotrópico negativo).",
    pearl: "Alerta de examen y de guardia: La hipopotasemia (frecuentemente inducida por diuréticos de asa como la furosemida) potencia drásticamente la toxicidad digitálica, ya que el potasio y la digoxina compiten por el mismo sitio de unión en la enzima Na+/K+ ATPasa."
  },
  {
    id: 8,
    category: "Neumología & Fisiología Respiratoria",
    difficulty: "Media",
    caseCode: "CASO CLÍNICO #264 • PATOLOGÍA PULMONAR",
    prompt: "Hombre de 64 años con antecedente de tabaquismo activo de 45 paquetes/año consulta por disnea de esfuerzo progresiva y tos escasa. En la exploración física se aprecia tórax en tonel, murmullo vesicular disminuido globalmente y espiración alargada. La espirometría forzada post-broncodilatador muestra una relación FEV1/FVC de 0.52 (patrón obstructivo no reversible).",
    question: "En el fenotipo enfisematoso de esta enfermedad pulmonar, ¿cuál es el defecto anatomofisiológico primario responsable de la hiperinsuflación y el atrapamiento aéreo?",
    options: [
      "Pérdida del retroceso elástico por degradación enzimática de la elastina alveolar",
      "Hipertrofia aislada de las glándulas secretoras mucosas en bronquios principales",
      "Deficiencia aguda de surfactante con aumento de la tensión superficial alveolar",
      "Fibrosis intersticial subpleural difusa con reducción de la distensibilidad pulmonar"
    ],
    correctIndex: 0,
    evidence: "Principios de Medicina Interna de Harrison 21va Ed.",
    justification: "El enfisema pulmonar se caracteriza por la destrucción de los tabiques alveolares debido a un desbalance entre proteasas (elastasa de neutrófilos) y antiproteasas (alfa-1 antitripsina) estimulado por el humo del tabaco. La pérdida de elastina destruye la fuerza de retracción elástica que mantiene abiertas las pequeñas vías aéreas durante la espiración, produciendo colapso espiratorio prematuro, aumento de la resistencia y atrapamiento de aire (hiperinsuflación).",
    pearl: "La capacidad de difusión pulmonar de monóxido de carbono (DLCO) está disminuida en el enfisema debido a la pérdida irreversible del lecho capilar alveolar, lo cual permite diferenciarlo funcionalmente del asma bronquial, donde la DLCO suele ser normal o incluso elevada."
  },
  {
    id: 9,
    category: "Cirugía General & Abdomen Agudo",
    difficulty: "Básica",
    caseCode: "CASO CLÍNICO #109 • ABDOMEN AGUDO",
    prompt: "Varón de 21 años previamente sano acude a urgencias por dolor abdominal de 14 horas de evolución. El cuadro inició como un dolor sordo y mal delimitado en región periumbilical y epigastrio, acompañado de náuseas y vómitos alimentarios. Posteriormente, el dolor migró y se intensificó en la fosa ilíaca derecha. A la palpación profunda presenta signo de McBurney y signo de Blumberg (rebote peritoneal) positivos.",
    question: "¿Cuál es el factor etiopatogénico inicial más frecuente de obstrucción luminal que desencadena la apendicitis aguda en pacientes jóvenes?",
    options: [
      "Obstrucción luminal por fecalito calcificado (coprolito)",
      "Hiperplasia linfoide folicular submucosa",
      "Trombosis primaria de la arteria apendicular",
      "Infestación parasitaria por Entamoeba histolytica"
    ],
    correctIndex: 1,
    evidence: "Principios de Cirugía de Schwartz 11va Ed.",
    justification: "En niños, adolescentes y adultos jóvenes, la causa desencadenante más habitual de apendicitis aguda es la hiperplasia de los folículos linfoides submucosos (frecuentemente secundaria a una infección vírica respiratoria o gastrointestinal previa). Dicha hiperplasia ocluye la luz apendicular en fondo de saco, desencadenando proliferación bacteriana, aumento de la presión intraluminal, isquemia parietal y necrosis transmural.",
    pearl: "La secuencia cronológica de Murphy clásica (dolor epigástrico/periumbilical visceral inicial -> náuseas/vómitos -> migración y localización a dolor somático parietal en FID) refleja la progresión de la inflamación desde el peritoneo visceral hasta el peritoneo parietal."
  },
  {
    id: 10,
    category: "Infectología & Microbiología Clínica",
    difficulty: "Avanzada",
    caseCode: "CASO CLÍNICO #377 • INFECCIONES INTRAHOSPITALARIAS",
    prompt: "Mujer de 54 años hospitalizada en unidad de cuidados intensivos desarrolla neumonía asociada a ventilación mecánica con infiltrados cavitados en la radiografía de tórax. Los hemocultivos y el aspirado traqueal aíslan Staphylococcus aureus resistente a la meticilina (SAMR). Se confirma la presencia del gen mecA mediador de la resistencia.",
    question: "¿Cuál es el antimicrobiano parenteral de primera línea indicado para el tratamiento dirigido de esta infección?",
    options: [
      "Cefazolina 2 g i.v. cada 8 horas",
      "Amoxicilina con ácido clavulánico 1000/200 mg i.v.",
      "Vancomicina i.v. ajustada por peso y función renal",
      "Ciprofloxacino 400 mg i.v. cada 12 horas"
    ],
    correctIndex: 2,
    evidence: "Guías IDSA 2022 / Sanford Guide",
    justification: "El gen mecA codifica una proteína fijadora de penicilina alterada (PBP2a) con bajísima afinidad por prácticamente todos los antibióticos betalactámicos convencionales (penicilinas, cefalosporinas e inhibidores de betalactamasas). El glucopéptido Vancomicina (o en su defecto el Linezolid) es el antibiótico parenteral de elección para el tratamiento de neumonía y bacteriemia por SAMR, actuando mediante inhibición de la polimerización del peptidoglicano en la pared celular.",
    pearl: "Al administrar vancomicina es imperativo monitorizar los niveles plasmáticos valle (trough levels) buscando concentraciones entre 15-20 mcg/mL para infecciones graves como neumonía o endocarditis, vigilando estrechamente la creatinina sérica por riesgo de nefrotoxicidad sinérgica."
  }
];
