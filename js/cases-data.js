// MedPulse Educational Portal - Banco de Casos Clínicos Simulados (Fase 2)
// Escenarios ficticios con evolución por fases para entrenamiento de razonamiento médico
// IMPORTANTE: Casos simulados exclusivamente educativos. No usar para pacientes reales.

const CLINICAL_CASES_DATA = {
  "case_142": {
    id: "case_142",
    title: "Varón de 45 años con cefalea intensa holocraneal en trueno y rigidez de nuca",
    specialty: "Neurología & Urgencias",
    category: "neurologia",
    estimatedTime: "15 min",
    difficulty: "Avanzada",
    patient: {
      name: "Carlos M.",
      age: 45,
      gender: "Masculino",
      occupation: "Ingeniero civil",
      allergies: "Sin alergias medicamentosas conocidas",
      background: "Fumador de 15 cigarrillos/día desde hace 20 años. Hipertensión arterial en tratamiento irregular con enalapril 10 mg. Sin antecedentes personales de cefaleas previas.",
      vitals: {
        fc: "88 lpm",
        pa: "165/95 mmHg",
        sat: "98% aire amb.",
        temp: "36.8 °C",
        glasgow: "15/15"
      }
    },
    stages: [
      {
        stageNumber: 1,
        stageTitle: "Evaluación Inicial y Sospecha Diagnóstica",
        scenario: "Carlos se encontraba realizando un esfuerzo físico en su domicilio cuando súbitamente experimentó una cefalea explosiva holocraneal de intensidad 10/10 que alcanzó su pico en menos de un minuto («el peor dolor de cabeza de mi vida»). El cuadro se acompañó de náuseas, vómitos repetidos y fotofobia intensa. Al examen físico en urgencias se encuentra consciente y orientado, con moderada rigidez de nuca y signo de Brudzinski positivo, sin déficit motor ni sensitivo focal.",
        question: "¿Cuál es la sospecha diagnóstica prioritaria y cuál es la prueba de neuroimagen de primera línea que debe realizarse de inmediato?",
        options: [
          "Migraña con aura típica • Solicitar Resonancia Magnética cerebral con contraste",
          "Hemorragia Subaracnoidea (HSA) espontánea • Tomografía Computarizada (TC) de cráneo sin contraste urgente",
          "Meningitis bacteriana aguda • Punción lumbar directa sin neuroimagen previa",
          "Arteritis de la temporal • Ecografía doppler de ramas temporales superficiales"
        ],
        correctIndex: 1,
        evidence: "Guías AHA/ASA 2023 sobre Manejo de la Hemorragia Subaracnoidea Aneurismática",
        explanation: "La presentación de una cefalea en trueno (hiperaguda, máxima en segundos) junto con rigidez de nuca y fotofobia en un paciente sin historial de cefaleas previas obliga a sospechar en primer lugar una Hemorragia Subaracnoidea (HSA) espontánea por rotura de aneurisma intracraneal sacular (85% de los casos). La TC craneal simple sin contraste es la prueba de elección inicial debido a su rapidez y alta sensibilidad (>98% en las primeras 6 horas del sangrado).",
        pearl: "Perla de Guardia: Nunca administres contraste intravenoso en la TC inicial cuando sospeches HSA; el contraste en el espacio subaracnoideo puede confundirse con sangre hiperdensa o extravasación activa."
      },
      {
        stageNumber: 2,
        stageTitle: "Interpretación Diagnóstica y Siguiente Paso",
        scenario: "Se realiza la TC de cráneo a las 2 horas del ingreso, demostrando sangre hiperdensa en las cisternas basales, cisura interhemisférica y cisura de Silvio bilateral (clasificación de Fisher grado 3). La angio-TC cerebral de urgencia confirma un aneurisma sacular de 7 mm en la arteria comunicante anterior con cuello favorable.",
        question: "En un escenario clínico donde un paciente presenta cefalea en trueno con alta sospecha de HSA pero la TC de cráneo realizada > 12 horas resulta normal o no concluyente, ¿cuál es el procedimiento diagnóstico mandatorio?",
        options: [
          "Punción lumbar para evaluar presión de apertura y presencia de xantocromía en el LCR mediante espectrofotometría",
          "Dar de alta al paciente con AINEs y triptanes con diagnóstico de cefalea tensional",
          "Realizar un electroencefalograma de 32 canales en vigilia",
          "Suspender todo estudio y realizar control ambulatorio en 30 días"
        ],
        correctIndex: 0,
        evidence: "Consenso Europeo de Neurología de Urgencias (EAN / ESO 2022)",
        explanation: "La sensibilidad de la TC disminuye con el paso del tiempo (cae al 85% al tercer día). Ante una sospecha clínica fundada de HSA con TC negativa o equívoca, la Punción Lumbar (PL) es obligatoria. A partir de las 12 horas del sangrado se produce la lisis de eritrocitos liberando oxihemoglobina y bilirrubina, originando la «xantocromía» (coloración amarillenta sobrenadante) que confirma el sangrado subaracnoideo y descarta una punción traumática.",
        pearl: "Criterio de Punción Traumática vs HSA: En la punción traumática el LCR se aclara en los tubos sucesivos (prueba de los 3 tubos) y el sobrenadante centrifugado es transparente, mientras que en la HSA la coloración hemática es homogénea y el sobrenadante es xantocrómico."
      },
      {
        stageNumber: 3,
        stageTitle: "Conducta Terapéutica y Prevención de Vasoespasmo",
        scenario: "El paciente es ingresado en la Unidad de Cuidados Intensivos Neurológicos. Se programa exclusión del aneurisma mediante embolización endovascular con coils dentro de las primeras 24 horas. La presión arterial se controla estrictamente con labetalol para mantener una PAS < 140 mmHg.",
        question: "¿Qué fármaco neuroprotector debe pautarse de forma rutinaria y precoz para prevenir el deterioro isquémico tardío por vasoespasmo cerebral?",
        options: [
          "Nimodipino 60 mg por vía oral / enteral cada 4 horas durante 21 días",
          "Atenolol 50 mg intravenoso cada 8 horas sin monitorización",
          "Ácido acetilsalicílico 300 mg en bolo seguido de clopidogrel",
          "Infusión de manitol al 20% continuo sin restricción de volumen"
        ],
        correctIndex: 0,
        evidence: "Guías AHA/ASA Nivel de Evidencia I, Clase A",
        explanation: "El Nimodipino es un antagonista del calcio dihidropiridínico con elevada liposolubilidad y tropismo sobre los vasos cerebrales. La administración enteral precoz de 60 mg cada 4 horas durante 21 días es el único fármaco con evidencia concluyente de grado I que reduce significativamente la incidencia de déficits neurológicos isquémicos diferidos por vasoespasmo y mejora la supervivencia funcional.",
        pearl: "Regla mnemotécnica clínica: Nimodipino se da siempre por vía ENTERAL (oral o por sonda nasogástrica). La administración intravenosa accidental se ha asociado a colapso hemodinámico e hipotensión profunda."
      },
      {
        stageNumber: 4,
        stageTitle: "Manejo de Complicaciones y Resolución",
        scenario: "Al 5.º día post-embolización, el paciente evoluciona favorablemente sin resangrado. Sin embargo, en la analítica de rutina se detecta hiponatremia progresiva con sodio plasmático de 128 mEq/L, natriuresis elevada (Na urinario > 40 mEq/L) y volumen circulante eficaz ligeramente depletado (PVC baja y balance negativo).",
        question: "¿Cuál es el diagnóstico más probable de esta alteración electrolítica en el contexto de HSA y cuál es el manejo hídrico correcto?",
        options: [
          "Síndrome Pierde-Sal Cerebral (CSW) • Reposición hídrica y de sodio con suero salino isotónico o hipertónico (evitar restricción de líquidos)",
          "Secreción Inadecuada de ADH (SIADH) • Restricción estricta de líquidos a menos de 500 mL/día",
          "Diabetes Insípida central • Administrar desmopresina intranasal inmediata",
          "Insuficiencia suprarrenal primaria • Bolos de hidrocortisona en dosis de choque"
        ],
        correctIndex: 0,
        evidence: "Neurocritical Care Society Guidelines on Sodium Regulation",
        explanation: "En pacientes con HSA, la causa más frecuente de hiponatremia con hipovolemia o balance negativo es el Síndrome Pierde-Sal Cerebral (Cerebral Salt Wasting), mediado por la liberación central masiva de péptido natriurético cerebral (BNP). A diferencia del SIADH (donde hay euvolemia), en el pierde-sal NUNCA debe restringirse el volumen hídrico, ya que la hipovolemia desencadena vasoespasmo e infarto cerebral. El tratamiento consiste en expandir volumen con suero fisiológico al 0.9% o hipertónico al 3% y reponer sodio.",
        pearl: "Regla de Oro en Neurointensivos: En la HSA, NUNCA restrinjas líquidos para corregir una hiponatremia. Mantener la euvolemia o hipervolemia relativa es el principio fundamental para salvar el tejido cerebral en riesgo de isquemia."
      }
    ]
  },

  "case_pediatria": {
    id: "case_pediatria",
    title: "Lactante de 8 meses con fiebre alta y exantema súbito post-defervescencia",
    specialty: "Pediatría & Enfermedades Infecciosas",
    category: "pediatria",
    estimatedTime: "10 min",
    difficulty: "Media",
    patient: {
      name: "Mateo R.",
      age: 8,
      ageUnit: "meses",
      gender: "Masculino",
      occupation: "Lactante menor",
      allergies: "Sin alergias conocidas",
      background: "Nacido a término por parto eutócico sin complicaciones perinatales. Lactancia materna más alimentación complementaria. Vacunación completa y al día según calendario oficial.",
      vitals: {
        fc: "142 lpm",
        pa: "85/55 mmHg",
        sat: "98% aire amb.",
        temp: "37.4 °C (temperatura actual)",
        glasgow: "15/15"
      }
    },
    stages: [
      {
        stageNumber: 1,
        stageTitle: "Anamnesis y Sospecha Diagnóstica Inicial",
        scenario: "Los padres acuden a urgencias pediátricas sumamente angustiados. Refieren que Mateo presentó fiebre alta súbita de 39.2 °C a 39.8 °C durante los últimos tres días, sin tos, sin rinorrea y sin vómitos. El día de hoy la fiebre desapareció por completo de forma espontánea; sin embargo, al cabo de unas horas apareció una erupción rosada de pequeñas máculas y pápulas tenues en el tronco y cuello. Al examen el lactante sonríe, está reactivo, hidratado y sin signos meníngeos.",
        question: "Considerando la cronología clásica del cuadro febril y la aparición del brote, ¿cuál es el diagnóstico clínico más probable?",
        options: [
          "Sarampión en fase eruptiva precoz",
          "Exantema súbito (Roséola infantil o sexta enfermedad)",
          "Escarlatina estreptocócica aguda con afectación flexural",
          "Eritema infeccioso por Parvovirus B19 (quinta enfermedad)"
        ],
        correctIndex: 1,
        evidence: "Nelson Tratado de Pediatría 21va Edición",
        explanation: "El Exantema Súbito (Roséola infantil o sexta enfermedad) tiene una presentación patognomónica e inconfundible: fiebre muy alta durante 3 a 5 días con un estado general relativamente conservado, la cual cesa de manera abrupta (defervescencia) coincidiendo con la aparición inmediata de un exantema máculo-papular rosado tenue en tronco y cuello que no descama y suele respetar la cara.",
        pearl: "Mnemotecnia clínica: «La fiebre se va y el brote llega». El sarampión brota en el pico más alto de la fiebre (no tras su caída) y tiene triple catarro (tos, coriza, conjuntivitis). La escarlatina presenta lengua aframbuesada y piel en lija."
      },
      {
        stageNumber: 2,
        stageTitle: "Microbiología y Etiopatogenia",
        scenario: "La madre pregunta con insistencia si este cuadro puede deberse a la vacuna administrada el mes pasado o si requiere antibióticos por riesgo de que la infección sea bacteriana.",
        question: "¿Cuál es el agente etiológico responsable de la gran mayoría de casos de esta enfermedad exantemática?",
        options: [
          "Virus Herpes Humano tipo 6 (VHH-6)",
          "Streptococcus pyogenes betahemolítico del grupo A",
          "Virus de la Rubéola (Togavirus)",
          "Coxsackievirus A16 (agente de mano-pie-boca)"
        ],
        correctIndex: 0,
        evidence: "Red Book 2021-2024: Academia Americana de Pediatría (AAP)",
        explanation: "El Virus Herpes Humano tipo 6 (VHH-6, subgrupo B) es el agente causal de más del 90% de los casos de exantema súbito, siendo el VHH-7 responsable de la mayoría de los casos restantes. La infección primaria ocurre casi exclusivamente en lactantes y niños entre los 6 meses y 2 años de edad tras la pérdida de anticuerpos maternos transplacentarios.",
        pearl: "Dato clave de examen: El VHH-6 es la causa infecciosa individual más común de crisis convulsivas febriles en lactantes de 6 a 18 meses, debido a su elevada neurotropía y al rápido ascenso de la temperatura corporal."
      },
      {
        stageNumber: 3,
        stageTitle: "Conducta Diagnóstica y Terapéutica",
        scenario: "El padre solicita que se le realice un análisis de sangre completo, radiografía de tórax y se le prescriba un antibiótico oral preventivo para evitar recaídas.",
        question: "¿Cuál es la conducta médica indicada y la recomendación terapéutica correcta?",
        options: [
          "Iniciar Amoxicilina 80 mg/kg/día por vía oral durante 7 días",
          "Manejo de soporte ambulatorio con hidratación, antipiréticos si reaparece fiebre y tranquilizar a los padres explicando el curso benigno y autolimitado (el exantema remite en 24-48 horas)",
          "Ingreso hospitalario urgente para aislamiento en cámara de presión negativa",
          "Punción lumbar mandatoria para análisis citobioquímico de LCR"
        ],
        correctIndex: 1,
        evidence: "Guías de Práctica Clínica AEPED (Asociación Española de Pediatría)",
        explanation: "El exantema súbito es una entidad benigna y autolimitada. No requiere ningún estudio analítico invasivo cuando el paciente se encuentra afebril y en buen estado general. La administración de antibióticos está absolutamente contraindicada porque no modifica el curso viral y puede provocar reacciones adversas cutáneas que confundan el cuadro clínico. El brote desaparece espontáneamente en 1-2 días.",
        pearl: "Habilidad de comunicación clínica: La mejor prescripción en este caso es la educación sanitaria a los padres, explicando la evolución natural del virus y alertando sobre signos de alarma reales (rechazo de tomas, decaimiento extremo, dificultad respiratoria)."
      }
    ]
  },

  "case_neurologia": {
    id: "case_neurologia",
    title: "Mujer de 34 años con debilidad muscular progresiva y ptosis vespertina",
    specialty: "Neurología & Fisiopatología",
    category: "neurologia",
    estimatedTime: "12 min",
    difficulty: "Media",
    patient: {
      name: "Elena V.",
      age: 34,
      gender: "Femenino",
      occupation: "Abogada",
      allergies: "Alergia a penicilinas",
      background: "Sin enfermedades crónicas conocidas. No toma medicación habitual. No antecedentes de patología tiroidea ni autoinmune familiar.",
      vitals: {
        fc: "76 lpm",
        pa: "118/72 mmHg",
        sat: "99% aire amb.",
        temp: "36.7 °C",
        capVital: "3.2 L (Capacidad vital respiratoria normal)"
      }
    },
    stages: [
      {
        stageNumber: 1,
        stageTitle: "Identificación de Síntomas y Test de Cabecera",
        scenario: "Elena consulta por visión doble (diplopía) y caída de los párpados superiores (ptosis bilateral asimétrica) de 2 meses de evolución. Relata que por las mañanas al despertar sus ojos lucen normales, pero conforme avanza el día y trabaja frente a la pantalla, la visión doble se hace insostenible. En las últimas semanas nota además dificultad para masticar alimentos densos hacia la cena.",
        question: "¿Qué maniobra diagnóstica sencilla, no invasiva y de alta rentabilidad puede realizarse en la consulta para orientar el diagnóstico inmediato de Miastenia Gravis?",
        options: [
          "Prueba de la bolsa de hielo (*Ice-pack test*) sobre el párpado durante 2 minutos",
          "Maniobra de Dix-Hallpike para evaluación de nistagmo posicional",
          "Prueba de hiperventilación voluntaria durante 3 minutos continuos",
          "Test de compresión carotídea bilateral monitorizada"
        ],
        correctIndex: 0,
        evidence: "Neurology Journal / American Academy of Neurology (AAN)",
        explanation: "El test de la bolsa de hielo (*Ice-pack test*) consiste en colocar una bolsa de hielo sobre el ojo con ptosis durante 2 a 3 minutos. La disminución de la temperatura local inhibe la acción de la acetilcolinesterasa en la hendidura sináptica y mejora la conductancia de los canales de acetilcolina. Una elevación de la hendidura palpebral de al menos 2 mm post-hielo tiene una sensibilidad del 89% y especificidad del 100% para Miastenia Gravis.",
        pearl: "Perla Semiología: La fatigabilidad muscular (empeoramiento con la actividad repetida y mejoría tras el reposo) es el sello de la Miastenia Gravis postsináptica. En el Lambert-Eaton presináptico la fuerza mejora inicialmente con las contracciones repetidas."
      },
      {
        stageNumber: 2,
        stageTitle: "Confirmación Inmunológica y Estudio de Extensión",
        scenario: "El test del hielo resulta francamente positivo (apertura palpebral de +4 mm). El electromiograma con estimulación nerviosa repetitiva muestra una respuesta decremental mayor al 10%. Se solicita panel inmunológico que resulta positivo para anticuerpos anti-AChR (8.2 nmol/L).",
        question: "Una vez establecido el diagnóstico de Miastenia Gravis autoinmune, ¿qué estudio de neuroimagen torácica debe solicitarse obligatoriamente en todos los pacientes y con qué propósito?",
        options: [
          "TC o RM de tórax con contraste para evaluar hiperplasia tímica o presencia de timoma",
          "Ecocardiograma transesofágico para descartar endocarditis marántica",
          "Gammagrafía pulmonar V/Q para descartar tromboembolismo subclínico",
          "Mamografía digital bilateral para despistaje de síndrome paraneoplásico"
        ],
        correctIndex: 0,
        evidence: "International Consensus Guidance for Management of Myasthenia Gravis (Neurology 2021)",
        explanation: "El timo juega un papel central en la patogénesis de la Miastenia Gravis con anticuerpos anti-AChR: cerca del 65-75% de los pacientes tienen hiperplasia tímica folicular y un 10-15% presentan un Timoma (neoplasia tímica). La TC de tórax es de rigor para descartar timoma y planificar timectomía, la cual incrementa significativamente las tasas de remisión clínica a largo plazo.",
        pearl: "Punto clave de tratamiento: La timectomía está formalmente indicada en todos los pacientes con timoma y se recomienda con fuerza en pacientes de 18 a 50 años con Miastenia Gravis generalizada y anticuerpos anti-AChR positivos para reducir el requerimiento de inmunosupresores."
      },
      {
        stageNumber: 3,
        stageTitle: "Estrategia Terapéutica y Prevención de Crisis",
        scenario: "La TC de tórax descarta timoma y muestra hiperplasia tímica leve. La paciente pregunta qué medicación puede tomar de inmediato para mejorar su visión y masticación sin generar efectos secundarios graves.",
        question: "¿Cuál es el fármaco sintomático de primera línea para restaurar la fuerza motora en la Miastenia Gravis?",
        options: [
          "Bromuro de Piridostigmina oral (inhibidor de la acetilcolinesterasa)",
          "Metilprednisolona en pulsos intravenosos de 1 gramo diario ambulatorio",
          "Succinilcolina en dosis tituladas orales",
          "Riluzol oral cada 12 horas"
        ],
        correctIndex: 0,
        evidence: "UpToDate / Clinical Practice Guidelines for Myasthenia Gravis",
        explanation: "El bromuro de piridostigmina (habitualmente 60 mg cada 4 a 6 horas) es el tratamiento sintomático de elección. Inhibe reversiblemente a la enzima acetilcolinesterasa, aumentando la concentración y el tiempo de permanencia de la acetilcolina en la hendidura sináptica para interactuar con los receptores postsinápticos aún intactos.",
        pearl: "Alerta Farmacológica Crítica: Múltiples fármacos de uso diario pueden desencadenar una crisis miasténica potencialmente letal (insuficiencia respiratoria aguda). Están contraindicados o deben usarse con extrema cautela: Aminoglucósidos (gentamicina), Macrólidos, Fluoroquinolonas, Betabloqueantes y relajantes musculares."
      }
    ]
  },

  "case_cardiologia": {
    id: "case_cardiologia",
    title: "Hombre de 68 años con disnea progresiva y edemas en miembros inferiores",
    specialty: "Cardiología & Medicina Interna",
    category: "cardiologia",
    estimatedTime: "15 min",
    difficulty: "Media",
    patient: {
      name: "Roberto S.",
      age: 68,
      gender: "Masculino",
      occupation: "Jubilado",
      allergies: "Sin alergias descritas",
      background: "Infarto agudo de miocardio transmural anteroseptal hace 4 años tratado con angioplastia coronaria y stent. Hipertensión arterial y diabetes mellitus tipo 2 de 12 años de evolución. Fumador retirado.",
      vitals: {
        fc: "92 lpm",
        pa: "148/92 mmHg",
        sat: "91% aire amb.",
        temp: "36.6 °C",
        peso: "86 kg (+4 kg respecto a su peso habitual)"
      }
    },
    stages: [
      {
        stageNumber: 1,
        stageTitle: "Evaluación del Perfil Hemodinámico y Biomarcadores",
        scenario: "Roberto acude al hospital por disnea que en dos semanas progresó de moderados esfuerzos a reposo, con ortopnea que le obliga a dormir con 3 almohadas y episodios de disnea paroxística nocturna. En la exploración presenta ingurgitación yugular a 45° con reflujo hepatoyugular positivo, crepitantes húmedos inspiratorios en las dos terceras partes inferiores de ambos campos pulmonares, ritmo cardíaco a 92 lpm con tercer ruido audible (galope R3 en ápex) y edemas con fóvea (+++/++++) simétricos hasta tercio medio de muslos.",
        question: "¿Qué biomarcador plasmático cuantitativo de sobrecarga ventricular es el indicado para confirmar la sospecha de Insuficiencia Cardíaca aguda descompensada?",
        options: [
          "Péptido Natriurético tipo B (BNP o NT-proBNP)",
          "Dímero D plasmático cuantitativo",
          "Troponina T ultrasensible aislada",
          "Velocidad de sedimentación globular (VSG)"
        ],
        correctIndex: 0,
        evidence: "Guías de Insuficiencia Cardíaca ESC 2021 / AHA/ACC/HFSA 2022",
        explanation: "El BNP y su fragmento N-terminal inactivo (NT-proBNP) son hormonas liberadas activamente por los cardiomiocitos ventriculares en respuesta al estrés, estiramiento parietal y sobrecarga de presión o volumen. Presentan una altísima sensibilidad y un valor predictivo negativo cercano al 98% para descartar la etiología cardíaca en pacientes que debutan con disnea aguda.",
        pearl: "Cifras de corte en Urgencias: Para descartar insuficiencia cardíaca aguda en el servicio de urgencias se usan puntos de corte como BNP < 100 pg/mL o NT-proBNP < 300 pg/mL. Cifras superiores respaldan con contundencia el origen hemodinámico de la congestión."
      },
      {
        stageNumber: 2,
        stageTitle: "Manejo Descongestivo de Fase Aguda",
        scenario: "El NT-proBNP reporta 4,820 pg/mL. La radiografía de tórax evidencia cardiomegalia y redistribución vascular hacia los vértices con líneas B de Kerley y derrame pleural bilateral leve. El paciente se encuentra en perfil hemodinámico «caliente y húmedo» (bien perfundido periféricamente pero con severa sobrecarga hidrosalina y congestión pulmonar).",
        question: "¿Cuál es el pilar farmacológico inmediato de primera línea para aliviar la congestión pulmonar y sistémica en este paciente?",
        options: [
          "Furosemida intravenosa en bolo (diurético de asa), restricción hídrica y oxigenoterapia suplementaria para mantener SatO₂ > 94%",
          "Administrar 2,000 mL de suero fisiológico al 0.9% en bolo endovenoso rápido",
          "Iniciar betabloqueantes en dosis plenas máximas orales inmediatas",
          "Digitalización intravenosa con dosis de carga masiva"
        ],
        correctIndex: 0,
        evidence: "ESC Guidelines for Heart Failure Acute Decompensation",
        explanation: "En la descompensación aguda con congestión venocapilar pulmonar y sistémica (perfil húmedo y caliente), el diurético de asa intravenoso (furosemida) es la terapia cardinal. Produce venodilatación temprana que disminuye la precarga cardíaca en minutos, seguido de una natriuresis potente que alivia la congestión pulmonar y el trabajo miocárdico.",
        pearl: "Regla de Seguridad: En la fase aguda inestable descompensada NUNCA se inician o aumentan los betabloqueantes, ya que su efecto inotrópico negativo agudo puede precipitar edema agudo de pulmón o shock cardiogénico. Se optimizan una vez que el paciente ha alcanzado la euvolemia."
      },
      {
        stageNumber: 3,
        stageTitle: "Optimización a Largo Plazo: Los Cuatro Pilares",
        scenario: "Tras 72 horas de tratamiento diurético, el paciente pierde 5 kg de peso, respira en decúbito supino sin ortopnea y los crepitantes y edemas han resuelto. El ecocardiograma confirma una miocardiopatía isquémica dilatada con fracción de eyección reducida (FEVI 30%). Se prepara el plan de alta hospitalaria.",
        question: "¿Cuál es la cuádruple terapia («cuarteto fantástico») con demostrada reducción de hospitalizaciones y mortalidad en pacientes con IC y FEVI reducida?",
        options: [
          "Inhibidor del receptor de angiotensina-neprilisina (ARNI: Sacubitrilo/Valsartán) + Betabloqueante (Bisoprolol/Metoprolol succinato/Carvedilol) + Antagonista de mineralocorticoides (ARM: Espironolactona) + Inhibidor de SGLT2 (Dapagliflozina/Empagliflozina)",
          "Digoxina + Diltiazem + Furosemida oral en dosis altas sin otros fármacos",
          "Ácido acetilsalicílico + Clopidogrel + Amiodarona + Nitroglicerina parche continuo",
          "Corticoides orales + AINEs a demanda + Teofilina de liberación sostenida"
        ],
        correctIndex: 0,
        evidence: "Guías Internacionales ESC/AHA 2022/2023",
        explanation: "El tratamiento de base para la IC con FEVI reducida (< 40%) se asienta obligatoriamente en 4 clases farmacológicas independientes con sinergia pronóstica: 1) ARNI (o en su defecto IECA/ARA-II), 2) Betabloqueante con evidencia (carvedilol, bisoprolol o metoprolol succinato), 3) Antagonista de receptores mineralocorticoides (espironolactona o eplerenona) y 4) Inhibidores del cotransportador SGLT2 (dapagliflozina o empagliflozina, independientemente de que el paciente tenga o no diabetes).",
        pearl: "Impacto clínico: Esta combinación de los cuatro pilares reduce la mortalidad por cualquier causa en más del 60% y previene el remodelado adverso y la muerte súbita arritmogénica."
      }
    ]
  },

  "case_urgencias": {
    id: "case_urgencias",
    title: "Joven de 22 años con dolor en fosa ilíaca derecha y signo de Blumberg positivo",
    specialty: "Cirugía General & Urgencias",
    category: "urgencias",
    estimatedTime: "10 min",
    difficulty: "Básica",
    patient: {
      name: "Lucas F.",
      age: 22,
      gender: "Masculino",
      occupation: "Estudiante de arquitectura",
      allergies: "Sin alergias farmacológicas",
      background: "Previamente sano. Sin intervenciones quirúrgicas previas. No toma fármacos habituales.",
      vitals: {
        fc: "98 lpm",
        pa: "122/78 mmHg",
        sat: "99% aire amb.",
        temp: "38.1 °C",
        glasgow: "15/15"
      }
    },
    stages: [
      {
        stageNumber: 1,
        stageTitle: "Evaluación Semiología y Estratificación",
        scenario: "Lucas consulta en urgencias por dolor abdominal de 16 horas de evolución. El cuadro inició como un dolor sordo y mal delimitado en epigastrio y región periumbilical, acompañado de náuseas, anorexia y dos episodios de vómitos alimentarios. En las últimas 6 horas el dolor migró y se fijó en la fosa ilíaca derecha con aumento progresivo de intensidad. A la exploración física se aprecia dolor marcado a la palpación en el punto de McBurney con defensa muscular involuntaria y signo de Blumberg (rebote peritoneal) positivo.",
        question: "¿Cómo se denomina esta clásica secuencia cronológica y cuál es la sospecha diagnóstica sindrómica de urgencia?",
        options: [
          "Cronología de Murphy • Apendicitis aguda en fase supurativa / perforativa",
          "Tríada de Charcot • Colangitis aguda ascendente",
          "Tríada de Virchow • Trombosis venosa mesentérica",
          "Signo de Cullen y Turner • Pancreatitis aguda necrohemorrágica"
        ],
        correctIndex: 0,
        evidence: "Schwartz Principios de Cirugía 11va Edición",
        explanation: "La cronología apendicular clásica descrita por John Murphy (dolor visceral difuso periumbilical inicial -> náuseas/vómitos -> migración y localización a dolor somático parietal en la fosa ilíaca derecha) refleja la evolución fisiopatológica de la apendicitis: desde la distensión visceral refleja inicial (fibras C simpáticas T10) hasta la irritación directa del peritoneo parietal por la inflamación transmural (fibras somáticas A-delta).",
        pearl: "Cuidado clínico: La ausencia de la cronología de Murphy no descarta apendicitis (está presente de forma clásica en el 50-60% de los casos); sin embargo, su presencia tiene un valor predictivo positivo extremadamente alto."
      },
      {
        stageNumber: 2,
        stageTitle: "Conducta Quirúrgica y Profilaxis Antibiótica",
        scenario: "El hemograma muestra 14,800 leucocitos/mm³ con 82% de neutrófilos. La escala de Alvarado puntúa 9/10 (muy alta probabilidad de apendicitis). El cirujano de guardia confirma la indicación quirúrgica inmediata para apendicectomía laparoscópica.",
        question: "Respecto a la antibioticoterapia previa a la incisión quirúrgica, ¿cuál es la pauta profiláctica recomendada basada en la evidencia?",
        options: [
          "Profilaxis antibiótica preoperatoria de dosis única i.v. dentro de los 30-60 minutos previos a la incisión, cubriendo flora entérica aerobia y anaerobia (Gram negativos y Bacteroides)",
          "Tratamiento antibiótico intravenoso exclusivo durante 7 días postergando la intervención",
          "Omitir cualquier antibiótico para no alterar los cultivos intraoperatorios",
          "Administrar antibióticos únicamente si se confirma peritonitis fecaloidea generalizada"
        ],
        correctIndex: 0,
        evidence: "World Society of Emergency Surgery (WSES) Jerusalem Guidelines 2020",
        explanation: "La profilaxis antibiótica preoperatoria (usando por ejemplo cefazolina o cefoxitina combinada con metronidazol, o amoxicilina/ácido clavulánico) administrada 30-60 minutos antes de la incisión quirúrgica está universalmente indicada en toda apendicectomía. Reduce significativamente la incidencia de infección del sitio quirúrgico y abscesos intraabdominales.",
        pearl: "Concepto de profilaxis: La profilaxis quirúrgica consiste en alcanzar concentraciones tisulares máximas de antibiótico en el momento exacto en que se corta la piel. Si la apendicitis no está perforada, NO se requiere mantener antibióticos en el postoperatorio."
      },
      {
        stageNumber: 3,
        stageTitle: "Hallazgos y Manejo Postoperatorio",
        scenario: "Se lleva a cabo la apendicectomía laparoscópica. Se extrae un apéndice flemoso y turgente con fibrina localizada, sin evidencia de perforación ni líquido libre purulento en cavidad. El muñón apendicular queda adecuadamente ligado e invaginado.",
        question: "Al tratarse de una apendicitis aguda no complicada resuelta quirúrgicamente, ¿cuál es la conducta postoperatoria indicada con los antibióticos y el alta hospitalaria?",
        options: [
          "Suspender los antibióticos tras la dosis preoperatoria, permitir inicio de tolerancia oral temprana y planificar alta hospitalaria en 24 horas si la evolución es favorable",
          "Completar 10 días de antibióticos orales ambulatorios obligatorios",
          "Mantener reposo digestivo estricto absoluto con nutrición parenteral durante 5 días",
          "Colocar drenaje tubular intrabdominal por 2 semanas"
        ],
        correctIndex: 0,
        evidence: "Surgical Infection Society (SIS) Guidelines on Intra-abdominal Infections",
        explanation: "En la apendicitis aguda no complicada (catarral o flemonosa sin perforación ni peritonitis), la dosis profiláctica preoperatoria es suficiente. La continuación de antibióticos en el postoperatorio no ofrece beneficio clínico, aumenta el riesgo de efectos adversos (diarrea por Clostridioides difficile) y promueve resistencias bacterianas. El inicio precoz de la vía oral favorece la recuperación del tránsito intestinal.",
        pearl: "Principio quirúrgico moderno: La fuente de infección ha sido extirpada físicamente. No trates con antibióticos lo que ya curó el bisturí."
      }
    ]
  }
};
