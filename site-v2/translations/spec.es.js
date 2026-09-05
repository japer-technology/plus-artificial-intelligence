/*!
 * +AI Specification — Spanish (es)
 * Status: reviewed human translation (migrated from website-v6.html)
 * English remains the normative text. See TRANSLATIONS.md.
 */
(function (registry) {
  registry.register("es", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = La IA ayudó. Yo asumo la responsabilidad.",
      "description": "+AI significa que la inteligencia artificial ayudó materialmente al trabajo y que una persona u organización nombrada acepta la responsabilidad por él.",
      "skip": "Saltar a la explicación",
      "language": "Idioma",
      "languageAria": "Elegir idioma",
      "theme": "Modo oscuro",
      "themeDark": "Modo oscuro",
      "themeLight": "Modo claro",
      "themeDarkAria": "Usar el modo oscuro",
      "themeLightAria": "Usar el modo claro",
      "highlight": "Color",
      "highlightAria": "Elegir un color destacado al azar",
      "followedLink": "Descripción del posnominal +AI",
      "heroTitle": "La IA ayudó. Yo asumo la responsabilidad.",
      "heroLead": "La persona u organización cuyo nombre incluía este enlace hace una declaración sencilla: <strong>la inteligencia artificial contribuyó materialmente al trabajo y dicha parte acepta la responsabilidad de publicarlo.</strong>",
      "readSpec": "Leer la especificación",
      "meansHeading": "Lo que declara la marca",
      "meaningOneTitle": "La IA participó",
      "meaningOneBody": "La IA ayudó de forma material a crear, analizar, transformar o presentar el trabajo.",
      "meaningTwoTitle": "Una persona decidió",
      "meaningTwoBody": "Una persona u organización adoptó y publicó conscientemente el resultado.",
      "meaningThreeTitle": "La responsabilidad sigue siendo humana",
      "meaningThreeBody": "La parte nombrada no transfiere la responsabilidad a un sistema o proveedor de IA.",
      "plainTitle": "Asistencia transparente. Responsabilidad visible.",
      "plainLead": "La marca es una declaración de responsabilidad, no afirma que la IA sea la autora ni garantiza que el trabajo sea correcto.",
      "plainBody": "No indica qué proporción del trabajo procede de la IA. Indica que la IA influyó materialmente en el resultado y que una persona u organización identificable respalda la decisión de utilizarlo.",
      "plainQuote": "Tres caracteres hacen visibles tanto la participación como la responsabilidad.",
      "fullDocument": "Documento completo",
      "specification": "Especificación",
      "statusLabel": "Estado",
      "statusValue": "Borrador",
      "versionLabel": "Versión",
      "markLabel": "Marca canónica",
      "contents": "Contenido",
      "footerLine": "Notación abierta. Responsabilidad humana.",
      "versionFooter": "Especificación v0.1",
      "translationNote": "Traducción informativa. En caso de discrepancia, el texto original en inglés es el documento normativo.",
      "colourChanged": "El color destacado ha cambiado a {colour}."
    },
    untranslatedNotice: {
      "badge": "Sin traducir",
      "headline": "La especificación siguiente se muestra en inglés.",
      "detail": "Este idioma aún no se ha traducido. El texto en inglés es la versión normativa en todos los casos."
    },
    endonym: "Español",
    sections: [
      {
        number: "1",
        title: "Propósito",
        body: `
            <p>La notación <code>+AI</code> ofrece un método compacto para identificar un artefacto como materialmente asistido por inteligencia artificial, a la vez que identifica a una persona u organización que acepta la responsabilidad por el artefacto resultante.</p>
            <p>La expresión canónica es:</p>
            <p class="canonical"><code>&lt;Parte responsable&gt; +AI</code></p>
            <p>Ejemplo:</p><p><strong>Eric Mourant +AI</strong></p>
            <p>El significado fundamental es:</p>
            <p class="canonical">La IA ayudó. Yo asumo la responsabilidad.</p>`
      },
      {
        number: "2",
        title: "Principio de diseño",
        body: `
            <p><code>+AI</code> no intenta determinar si un artefacto ha sido «creado por una persona» o «creado por IA».</p>
            <p>Durante su creación, los artefactos modernos pueden pasar repetidamente entre personas y sistemas de inteligencia artificial.</p>
            <p>En cambio, <code>+AI</code> comunica dos hechos:</p>
            <ol><li>la inteligencia artificial contribuyó materialmente al trabajo; y</li><li>una persona u organización identificable acepta la responsabilidad por el artefacto resultante.</li></ol>
            <p>Por tanto, la norma se refiere a la <strong>participación de la IA y la responsabilidad humana</strong>, no a la autoría exclusiva.</p>`
      },
      {
        number: "3",
        title: "Terminología normativa",
        body: `
            <p>Los términos <strong>DEBE (MUST)</strong>, <strong>NO DEBE (MUST NOT)</strong>, <strong>DEBERÍA (SHOULD)</strong>, <strong>NO DEBERÍA (SHOULD NOT)</strong> y <strong>PUEDE (MAY)</strong> representan requisitos normativos en esta especificación.</p>
            <p><strong>DEBE</strong> indica un requisito absoluto.</p>
            <p><strong>NO DEBE</strong> indica una prohibición absoluta.</p>
            <p><strong>DEBERÍA</strong> indica una recomendación firme de la que puede apartarse cuando exista una razón legítima.</p>
            <p><strong>NO DEBERÍA</strong> indica una práctica normalmente evitada, pero que podría justificarse en circunstancias particulares.</p>
            <p><strong>PUEDE</strong> indica una práctica opcional.</p>`
      },
      {
        number: "4",
        title: "Notación canónica",
        body: `
            <p>La marca canónica es:</p><p class="canonical"><code>+AI</code></p>
            <p>La forma canónica legible por humanos es:</p><p><strong><code>&lt;Parte responsable&gt; +AI</code></strong></p>
            <p>Ejemplos:</p><p><strong>Eric Mourant +AI</strong></p><p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>La marca distingue entre mayúsculas y minúsculas.</p>
            <p>La forma canónica DEBE usar:</p>
            <ul><li>un signo más <code>+</code>;</li><li>seguido inmediatamente de los caracteres latinos en mayúscula <code>AI</code>;</li><li>sin espacios internos.</li></ul>
            <p>Por tanto, <code>+AI</code> es canónica.</p>
            <p>Las siguientes no son formas canónicas equivalentes:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Futuras extensiones de esta especificación PUEDEN definir variantes, pero NO DEBE suponerse que tengan el significado canónico de <code>+AI</code> salvo que se defina expresamente.</p>`
      },
      {
        number: "5",
        title: "Significado de la marca",
        body: `
            <p>Una parte responsable que utiliza <code>+AI</code> declara que:</p>
            <h4>5.1 Participación de la IA</h4><p>La inteligencia artificial contribuyó materialmente a crear, analizar, transformar, generar, evaluar, estructurar o presentar el artefacto asociado.</p>
            <h4>5.2 Conocimiento</h4><p>La parte responsable sabe o cree razonablemente que hubo asistencia material de IA.</p>
            <h4>5.3 Autoridad</h4><p>La parte responsable autorizó, inició, dirigió o adoptó conscientemente el uso pertinente de inteligencia artificial.</p>
            <h4>5.4 Control humano u organizativo</h4><p>La parte responsable conservó la autoridad para decidir si el artefacto se publicaría, transmitiría, desplegaría, entregaría, presentaría o difundiría de otro modo.</p>
            <h4>5.5 Adopción</h4><p>La parte responsable acepta el artefacto en la forma en que se presenta.</p>
            <h4>5.6 Responsabilidad</h4><p>La parte responsable acepta la responsabilidad por la decisión de difundir, utilizar o representar el artefacto.</p>
            <p>Estos elementos constituyen conjuntamente la declaración <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Asistencia material",
        body: `
            <p>La marca DEBERÍA utilizarse cuando la participación de la IA haya afectado materialmente al artefacto resultante.</p>
            <p>La asistencia material puede incluir la contribución de la IA a:</p>
            <ul>
              <li>la escritura;</li><li>el razonamiento;</li><li>el análisis;</li><li>las recomendaciones;</li>
              <li>la síntesis de investigación;</li><li>el código de software;</li><li>la interpretación de datos;</li>
              <li>el diseño;</li><li>las imágenes;</li><li>el audio;</li><li>el vídeo;</li>
              <li>la traducción cuando implique interpretación sustantiva;</li><li>la planificación;</li>
              <li>el apoyo a decisiones;</li><li>el trabajo matemático o técnico;</li>
              <li>la edición que cambie materialmente el significado;</li><li>u otro trabajo intelectual o creativo sustantivo.</li>
            </ul>
            <p>Las funciones de IA incidentales o puramente mecánicas no requieren necesariamente <code>+AI</code>.</p>
            <p>Algunos ejemplos son la corrección ortográfica automática, el autocompletado básico, el formato rutinario u otras funciones que no afecten materialmente al contenido de un artefacto.</p>
            <p>La cuestión decisiva no es el porcentaje de contenido producido por IA.</p>
            <p>La cuestión decisiva es:</p>
            <blockquote><strong>¿Influyó materialmente la IA en el artefacto que se presenta?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Responsabilidad",
        body: `
            <p>La responsabilidad es la propiedad definitoria de <code>+AI</code>.</p>
            <p>Al utilizar la marca, la parte responsable no transfiere la responsabilidad a un sistema, modelo, proveedor, agente o herramienta de inteligencia artificial.</p>
            <p>Una afirmación equivalente a:</p>
            <blockquote>«La IA lo generó; por tanto, yo no soy responsable».</blockquote>
            <p>es incompatible con el significado previsto de <code>+AI</code>.</p>
            <p>La parte responsable PUEDE depender en gran medida de la asistencia de IA.</p>
            <p>La parte responsable PUEDE publicar contenido generado sustancialmente por IA.</p>
            <p>La parte responsable PUEDE aceptar sugerencias que no habría podido producir de forma independiente.</p>
            <p>Ninguna de estas condiciones impide utilizar <code>+AI</code>, siempre que la parte responsable adopte conscientemente el artefacto resultante y acepte la responsabilidad de difundirlo.</p>`
      },
      {
        number: "8",
        title: "Lo que +AI no significa",
        body: `
            <p>Salvo que una declaración adicional indique expresamente lo contrario, <code>+AI</code> NO afirma que:</p>
            <ul>
              <li>el artefacto esté libre de errores;</li><li>todas las afirmaciones de hechos se hayan verificado de forma independiente;</li>
              <li>todas las citas se hayan comprobado de forma independiente;</li><li>el artefacto cumpla una norma profesional concreta;</li>
              <li>el artefacto sea jurídicamente correcto;</li><li>el artefacto sea médicamente correcto;</li>
              <li>el artefacto sea seguro para un fin concreto;</li><li>el artefacto no contenga alucinaciones;</li>
              <li>la parte responsable haya escrito personalmente cada componente;</li><li>la IA haya generado la mayor parte del artefacto;</li>
              <li>la IA haya generado solo una parte minoritaria del artefacto;</li><li>el artefacto sea original;</li>
              <li>no exista propiedad intelectual de terceros;</li><li>no se haya facilitado información confidencial a un sistema de IA;</li>
              <li>se haya utilizado un proveedor, modelo o sistema de IA concreto;</li><li>la parte responsable esté de acuerdo con cada resultado intermedio de la IA;</li>
              <li>o la parte responsable pueda reproducir o explicar el razonamiento interno del sistema de IA.</li>
            </ul>
            <p><code>+AI</code> es una <strong>declaración de responsabilidad</strong>, no una garantía de corrección.</p>`
      },
      {
        number: "9",
        title: "Revisión humana",
        body: `
            <p>La versión 0.1 no exige que cada componente de un artefacto se revise manualmente palabra por palabra o elemento por elemento.</p>
            <p>Sin embargo, la parte responsable DEBE aceptar conscientemente el artefacto que se difunde.</p>
            <p>El reenvío ciego o automático de resultados de IA sin revisar NO DEBERÍA representarse mediante <code>+AI</code> cuando no se haya producido un acto humano significativo de adopción.</p>
            <p>Las versiones futuras de esta especificación PUEDEN definir marcas de garantía más estrictas que representen una revisión completa o una verificación independiente.</p>`
      },
      {
        number: "10",
        title: "Personas",
        body: `
            <p>Una persona PUEDE colocar la notación después de su nombre.</p>
            <p>Ejemplo:</p><p><strong>Eric Mourant +AI</strong></p>
            <p>Esto significa:</p>
            <blockquote>La inteligencia artificial contribuyó materialmente al trabajo asociado, y Eric Mourant acepta la responsabilidad de difundir dicho trabajo.</blockquote>
            <p>La marca se refiere al artefacto o comunicación asociados.</p>
            <p>No significa necesariamente que todas las actividades realizadas por la persona utilicen inteligencia artificial.</p>`
      },
      {
        number: "11",
        title: "Organizaciones",
        body: `
            <p>Una organización PUEDE utilizar <code>+AI</code>.</p>
            <p data-company-example>Ejemplo:</p><p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Esto significa que la organización asume la responsabilidad por el artefacto asociado asistido por IA conforme a sus estructuras de gobierno y autoridad aplicables.</p>
            <p>Cuando sea útil, PUEDEN identificarse tanto una organización como una persona responsable.</p>
            <p data-company-example>Ejemplo:</p><p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Correo electrónico y mensajería",
        body: `
            <p>En una comunicación personal, la presentación preferida es:</p>
            <p><strong>Saludos cordiales,<br>Eric Mourant +AI</strong></p>
            <p>La marca PUEDE incluir un hipervínculo a una explicación canónica de su significado.</p>
            <p>Un hipervínculo NO DEBE alterar la notación visible.</p>
            <p>El texto sin formato DEBE seguir siendo suficiente para expresar la declaración.</p>`
      },
      {
        number: "13",
        title: "Documentos",
        body: `
            <p>La notación PUEDE aparecer en un campo de autor, preparador, revisor o parte responsable.</p>
            <p>Ejemplos:</p>
            <p><strong>Autor: Eric Mourant +AI</strong></p>
            <p><strong>Preparado por: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Emitido por: JAPER Technology +AI</strong></p>
            <p>La ubicación DEBERÍA dejar claro qué persona u organización asume la responsabilidad.</p>`
      },
      {
        number: "14",
        title: "Software",
        body: `
            <p>La notación PUEDE utilizarse en repositorios de software, confirmaciones, cabeceras de código fuente, documentación, notas de versión y artefactos generados.</p>
            <p>Ejemplo:</p><pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Un proyecto PUEDE declarar además:</p><pre><code>This project uses +AI.</code></pre>
            <p>Esta declaración a nivel de proyecto DEBERÍA identificar a la persona u organización responsable cuando resulte práctico.</p>`
      },
      {
        number: "15",
        title: "Artefactos creativos",
        body: `
            <p>La notación PUEDE acompañar a imágenes, audio, vídeo, diseños, ilustraciones, presentaciones y otras obras creativas.</p>
            <p>Ejemplo:</p><p><strong>Creado por Eric Mourant +AI</strong></p>
            <p>La marca no especifica por sí sola qué elementos fueron generados o modificados por IA.</p>
            <p>PUEDEN asociarse por separado metadatos de procedencia más detallados.</p>`
      },
      {
        number: "16",
        title: "Investigación y trabajo técnico",
        body: `
            <p>La marca PUEDE utilizarse en trabajos de investigación, científicos, de ingeniería o técnicos cuando lo permitan los requisitos institucionales, editoriales o profesionales aplicables.</p>
            <p><code>+AI</code> NO DEBE presentarse como sustituto de una divulgación más específica exigida por una editorial, regulador, empleador, organismo profesional o ley.</p>
            <p>La notación PUEDE complementar dicha divulgación.</p>`
      },
      {
        number: "17",
        title: "Representación legible por máquinas",
        body: `
            <p>Los sistemas PUEDEN representar la declaración mediante metadatos estructurados.</p>
            <p>Una representación mínima es:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Una representación más completa es:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Las formas legibles por máquinas DEBERÍAN conservar el mismo significado semántico que la notación visible.</p>`
      },
      {
        number: "18",
        title: "Persistencia",
        body: `
            <p>La notación <code>+AI</code> DEBERÍA sobrevivir a transformaciones razonables de un artefacto cuando se conserve la atribución.</p>
            <p>Algunos ejemplos son la conversión entre formatos de documentos, el archivado, la impresión, la exportación, la reedición y la transmisión.</p>
            <p>Cuando se eliminen los metadatos, la marca visible en texto sin formato DEBERÍA seguir siendo suficiente para comunicar la declaración.</p>`
      },
      {
        number: "19",
        title: "Uso abierto",
        body: `
            <p>La notación <code>+AI</code> está destinada al uso público sin restricciones.</p>
            <p>El uso de la notación NO DEBERÍA requerir:</p>
            <ul><li>registro;</li><li>afiliación;</li><li>pago;</li><li>certificación;</li><li>aprobación;</li><li>ni el uso de un producto o proveedor de IA concreto.</li></ul>
            <p>La utilidad de la notación depende de su capacidad para funcionar como una convención universal.</p>`
      },
      {
        number: "20",
        title: "Neutralidad",
        body: `
            <p><code>+AI</code> no expresa aprobación ni desaprobación de la inteligencia artificial.</p>
            <p>No indica si el uso de la IA era necesario, deseable o superior al trabajo humano sin asistencia.</p>
            <p>Solo registra la participación material de la IA y la responsabilidad humana u organizativa.</p>`
      },
      {
        number: "21",
        title: "Representación engañosa",
        body: `
            <p>Una persona u organización NO DEBERÍA utilizar <code>+AI</code> cuando:</p>
            <ul><li>no exista una parte responsable identificable;</li><li>la parte nombrada no haya adoptado el artefacto;</li><li>el artefacto se emita automáticamente sin una autoridad humana significativa;</li><li>o la notación se utilice para crear una falsa impresión de responsabilidad humana.</li></ul>
            <p>Los resultados autónomos de IA sin adopción humana significativa quedan fuera del alcance canónico de <code>+AI</code>.</p>
            <p>Las especificaciones futuras PUEDEN definir una notación para resultados autónomos de IA.</p>`
      },
      {
        number: "22",
        title: "Relación con la autoría",
        body: `
            <p><code>+AI</code> no asigna deliberadamente un porcentaje de autoría.</p>
            <p>Un artefacto PUEDE contener material predominantemente de origen humano y aun así cumplir los requisitos.</p>
            <p>Un artefacto PUEDE contener material predominantemente originado por IA y aun así cumplir los requisitos.</p>
            <p>La prueba pertinente consiste en determinar si:</p>
            <p><strong>la IA contribuyó materialmente y la parte nombrada asume la responsabilidad por el resultado.</strong></p>`
      },
      {
        number: "23",
        title: "Explicación pública canónica",
        body: `
            <p>Cuando se requiera una explicación breve, la fórmula preferida es:</p>
            <p class="canonical">La IA ayudó. Yo asumo la responsabilidad.</p>
            <p>Cuando se requiera una explicación más amplia:</p>
            <blockquote><strong><code>+AI</code> significa que la inteligencia artificial contribuyó materialmente a este trabajo y que la persona u organización nombrada acepta la responsabilidad por el artefacto resultante.</strong></blockquote>`
      },
      {
        number: "24",
        title: "La prueba +AI",
        body: `
            <p>Antes de aplicar la marca, una persona debería poder responder <strong>sí</strong> a estas dos preguntas:</p>
            <p><strong>¿Ayudó materialmente la IA a producir esto?</strong></p>
            <p><strong>¿Estoy dispuesto a asumir la responsabilidad de difundirlo?</strong></p>
            <p>Si ambas respuestas son afirmativas:</p><p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Extensiones futuras",
        body: `
            <p>Las versiones futuras PUEDEN definir notaciones adicionales relativas a:</p>
            <ul><li>asistencia menor de IA;</li><li>generación principalmente mediante IA;</li><li>revisión humana completa;</li><li>verificación independiente;</li><li>actividad de agentes autónomos;</li><li>procedencia criptográfica;</li><li>identificación del sistema de IA;</li><li>identificación del modelo;</li><li>o cadenas de contribución humana y automática.</li></ul>
            <p>Estas extensiones DEBERÍAN conservar <code>+AI</code> como la marca canónica sencilla para:</p>
            <p class="canonical">Trabajo asistido por IA con responsabilidad humana identificable.</p>`
      },
      {
        number: "26",
        title: "Declaración canónica",
        body: `
            <p>Una persona u organización que aplica <code>+AI</code> realiza la siguiente declaración:</p>
            <blockquote><strong>La inteligencia artificial contribuyó materialmente a este trabajo. He decidido aceptar, publicar, transmitir, desplegar o difundir de otro modo el trabajo resultante, y asumo la responsabilidad por esa decisión y por el trabajo tal como se presenta.</strong></blockquote>
            <p>La forma pública abreviada es:</p>
            <p class="canonical">La IA ayudó. Yo asumo la responsabilidad.</p>
            <p>La marca canónica es:</p><p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Especificación +AI v0.1</p><p>Procedencia humano-IA y responsabilidad</p><strong>La IA ayudó. Yo asumo la responsabilidad.</strong>"
  });
})(window.PlusAISpecTranslations);
