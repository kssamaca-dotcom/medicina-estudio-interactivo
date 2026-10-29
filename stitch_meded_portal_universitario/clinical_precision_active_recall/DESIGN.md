---
name: Clinical Precision & Active Recall
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#00246b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00389a'
  on-tertiary-container: '#8da9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

El sistema de diseño está concebido para estudiantes y residentes del área de la salud que operan bajo alta carga cognitiva y fatiga mental. La experiencia debe transmitir **rigor clínico, serenidad, alta eficacia y claridad analítica**. 

Se adopta un estilo **Minimalista Clínico y Táctil**, combinando fondos asépticos y luminosos con superficies estratificadas sutiles, microinteracciones táctiles receptivas y señalética visual nítida para la retención mnemotécnica. Se evitan elementos superfluos o distracciones cromáticas; cada tono, contraste o elevación cumple una función de orientación cognitiva inmediata en sesiones de repetición espaciada (*spaced repetition*) y resolución de casos clínicos.

## Colors

La paleta se estructura para equilibrar autoridad médica, enfoque de estudio sostenido y retroalimentación de rendimiento sin saturación:

- **Primario (#1E3A8A - Deep Navy):** Aporta la base institucional y de máxima concentración. Utilizado en tipografía principal, barras de navegación activas, encabezados estructurales y elementos clave de identidad.
- **Terciario / Interactivo (#2563EB - Royal Clinical Blue):** Color de acción principal para botones de confirmación, enlaces clínicos, barras de progreso dinámicas y estados interactivos enfocados.
- **Secundario / Acento Terapéutico (#10B981 - Emerald Mint):** Validación diagnóstica, respuestas correctas, metas de estudio diario y estados de dominio de tarjetas (*mastered status*). Se empareja con fondos de contenedor atenuados (`#ECFDF5`).
- **Neutros y Superficies:**
  - Lienzo base: `#FFFFFF` (blanco puro) para contraste directo de lectura en tarjetas de caso.
  - Fondo de aplicación (*app background*): `#F8FAFC` (Slate Tint) para mitigar el deslumbramiento en sesiones prolongadas.
  - Superficie elevada y divisores: `#F1F5F9` y bordes perimetrales en `#E2E8F0`.
  - Texto secundario y metadatos: `#64748B`.
- **Semántica de Error / Diagnóstico Incorrecto:** Coral clínico tenue (`#EF4444` con fondo `#FEF2F2`) para señalar áreas de repaso sin evocar frustración punitiva.

## Typography

Se utiliza **Plus Jakarta Sans** en toda la interfaz para balancear precisión técnica y calidez visual. La geometría limpia y los contornos amplios aseguran legibilidad inmediata de términos farmacológicos complejos, dosis numéricas y nomenclaturas anatómicas en pantallas móviles de alta o baja densidad.

- **Jerarquía clínica:** Los títulos (`headline-md`, `headline-sm`) destacan diagnósticos y preguntas sin abrumar.
- **Cuerpo de texto (`body-md`, `body-lg`):** Espaciado interlineal optimizado a 1.4-1.5x para fragmentos de viñetas clínicas y explicaciones fisiopatológicas.
- **Etiquetas y Metadatos (`label-sm`, `label-md`):** Letras en mayúsculas sostenidas o seminegrita para subespecialidades (*Cardiología*, *Farmacología*) y temporizadores de sesión.

## Layout & Spacing

El diseño adopta una arquitectura prioritariamente móvil construida sobre una cuadrícula fluida de 4 columnas en dispositivos móviles (360px a 480px) y 8 columnas en tablets de pase de visita médica:

- **Márgenes y gutter:** Margen horizontal perimetral de `1rem` (16px) que maximiza el área táctil útil y evita recortes en bordes redondeados.
- **Ritmo Vertical:** Módulo base de 4px/8px para garantizar consistencia entre tarjetas de preguntas, medidores de retención y barras de acción rápida.
- **Zonas de Interacción Táctil:** Los botones primarios y los selectores de tarjetas diagnósticas implementan alturas mínimas de 48px con espacios de separación de `0.75rem` (`12px`) a `1rem` (`space-md`), previniendo toques accidentales durante respuestas rápidas contrarreloj.

## Elevation & Depth

La jerarquía visual se modela mediante **capas tonales combinadas con sombras ambientales difusas**:

- **Nivel 0 (Fondo base):** Tono `#F8FAFC`, plano y sin sombras.
- **Nivel 1 (Tarjetas de contenido y módulos de casos):** Fondo `#FFFFFF`, borde perimetral sutil (`1px solid #E2E8F0`) y sombra ambiental ligera (`box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.02)`).
- **Nivel 2 (Tarjetas de estudio activas / Flashcards flotantes):** Elevación acentuada durante el arrastre o revelación de respuesta (`box-shadow: 0 12px 24px -6px rgba(30, 58, 138, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.03)`).
- **Nivel 3 (Navegación inferior fija y modales diagnósticos):** Fondo `#FFFFFF` con micro-desenfoque perimetral superior (`0 -4px 16px rgba(15, 23, 42, 0.04)`), anclado permanentemente a la base de la pantalla.

## Shapes

El sistema implementa una escala de bordes suaves y amigables:

- **Estructura base (Cards y Paneles):** `rounded-2xl` (1rem / 16px) para módulos clínicos, tarjetas de preguntas y gráficos de progreso.
- **Elementos interactivos (Botones de acción, inputs):** `rounded-xl` (0.75rem / 12px) que ofrecen un contorno reconocible e intuitivo.
- **Chips, Badges y Filtros:** Forma de píldora completa (`rounded-full`) para denotar especialidades, estados de repetición y etiquetas temáticas.

## Components

### Botones de Acción
- **Primario:** Fondo `#2563EB`, texto `#FFFFFF`, radio `rounded-xl`, altura 48px, peso de fuente semi-bold (`label-lg`). Transición con escala háptica al pulsar (0.98x).
- **Secundario / Contorno:** Fondo `#FFFFFF`, borde de 1.5px `#E2E8F0`, texto `#1E3A8A`.
- **Botones de Evaluación Rápida (Spaced Repetition):** Cuatro botones dispuestos horizontalmente al pie: *Otra vez* (rojo suave), *Difícil* (ámbar), *Bueno* (azul clínico), *Fácil* (verde menta), con fondo al 10% de opacidad y borde tonal al 30%.

### Badges y Tags Médicos
- Altura fija de 24px a 28px, bordes en píldora (`rounded-full`), relleno horizontal de 10px, tipografía `label-sm`.
- **Variantes temáticas:**
  - *Cardiología:* Fondo `#EFF6FF`, texto `#1D4ED8`.
  - *Farmacología:* Fondo `#F5F3FF`, texto `#6D28D9`.
  - *Fisiología:* Fondo `#ECFDF5`, texto `#047857`.
  - *Urgencias:* Fondo `#FEF2F2`, texto `#B91C1C`.

### Tarjetas de Estudio & Viñetas Clínicas
- Fondo `#FFFFFF`, contorno `#E2E8F0` de 1px, radio `rounded-2xl`, espaciado interno `space-lg`.
- Cabecera con selector de especialidad y temporizador o indicador de dificultad.
- Contenedor interactivo para opciones múltiples (A, B, C, D) con estados definidos:
  - Reposo: borde `#E2E8F0`, fondo blanco.
  - Seleccionado: borde `#2563EB`, fondo `#EFF6FF`.
  - Acierto confirmado: borde `#10B981`, fondo `#ECFDF5`, icono de verificación.
  - Fallo confirmado: borde `#EF4444`, fondo `#FEF2F2`, revelación visual de la clave correcta.

### Listas y Registros de Paciente / Temas
- Filas separadas por bordes finos `#F1F5F9` o presentadas como tarjetas apiladas separadas por `space-sm`.
- Icono temático o avatar de patología a la izquierda (36px, `rounded-lg`), título en `body-md` semi-bold y metadatos de repaso espaciado (p. ej. *“Próximo repaso: Mañana”*) en `body-sm`.

### Campos de Entrada (Búsqueda Diagnóstica y Notas)
- Fondo `#F8FAFC`, borde `#E2E8F0`, radio `rounded-xl`, altura 44px. Al enfocar: borde `#2563EB` con halo suave de 2px a color 15% opaco.

### Navegación Inferior Fija (Bottom Nav Bar)
- Altura fija de 64px, fondo `#FFFFFF` con división superior de 1px `#E2E8F0`.
- 4 a 5 destinos (*Hoy / Repaso*, *Casos Clínicos*, *Métricas*, *Tutor IA*, *Perfil*).
- Elemento activo con icono y etiqueta en `#1E3A8A` más un punto indicador central en `#2563EB`; elementos inactivos en `#94A3B8`.