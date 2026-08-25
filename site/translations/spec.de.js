/*!
 * +AI Specification — German (de)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → MUSS
 *   MUST NOT   → DARF NICHT (plural: DÜRFEN NICHT)
 *   SHOULD     → SOLLTE
 *   SHOULD NOT → SOLLTE NICHT
 *   MAY        → KANN
 */
(function (registry) {
  registry.register("de", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = KI hat geholfen. Ich übernehme die Verantwortung.",
      "description": "+AI bedeutet, dass künstliche Intelligenz wesentlich an der Arbeit mitgewirkt hat und eine benannte Person oder Organisation dafür Verantwortung übernimmt.",
      "skip": "Zur Erklärung springen",
      "language": "Sprache",
      "languageAria": "Sprache auswählen",
      "theme": "Dunkelmodus",
      "themeDark": "Dunkelmodus",
      "themeLight": "Hellmodus",
      "themeDarkAria": "Dunkelmodus verwenden",
      "themeLightAria": "Hellmodus verwenden",
      "highlight": "Akzent",
      "highlightAria": "Zufällige Akzentfarbe auswählen",
      "followedLink": "Beschreibung des +AI-Postnominals",
      "heroTitle": "KI hat geholfen. Ich übernehme die Verantwortung.",
      "heroLead": "Die Person oder Organisation, deren Name mit diesem Link versehen war, gibt eine einfache Erklärung ab: <strong>Künstliche Intelligenz hat wesentlich an der Arbeit mitgewirkt, und die genannte Partei übernimmt die Verantwortung für deren Veröffentlichung.</strong>",
      "readSpec": "Spezifikation lesen",
      "meansHeading": "Was das Zeichen aussagt",
      "meaningOneTitle": "KI war beteiligt",
      "meaningOneBody": "KI hat wesentlich dabei geholfen, die Arbeit zu erstellen, zu analysieren, zu verändern oder zu präsentieren.",
      "meaningTwoTitle": "Ein Mensch hat entschieden",
      "meaningTwoBody": "Eine Person oder Organisation hat das Ergebnis bewusst übernommen und veröffentlicht.",
      "meaningThreeTitle": "Die Verantwortung bleibt beim Menschen",
      "meaningThreeBody": "Die benannte Partei überträgt die Rechenschaftspflicht nicht auf ein KI-System oder dessen Anbieter.",
      "plainTitle": "Transparente Unterstützung. Sichtbare Rechenschaftspflicht.",
      "plainLead": "Das Zeichen ist eine Erklärung der Rechenschaftspflicht, keine Behauptung, dass KI der Urheber sei, und keine Garantie für die Richtigkeit der Arbeit.",
      "plainBody": "Es sagt nicht aus, welcher Anteil der Arbeit von KI stammt. Es sagt aus, dass KI das Ergebnis wesentlich beeinflusst hat und eine identifizierbare Person oder Organisation hinter der Entscheidung für den Einsatz von KI steht.",
      "plainQuote": "Drei Zeichen machen sowohl Beteiligung als auch Verantwortung sichtbar.",
      "fullDocument": "Vollständiges Dokument",
      "specification": "Spezifikation",
      "statusLabel": "Status",
      "statusValue": "Entwurf",
      "versionLabel": "Version",
      "markLabel": "Kanonisches Zeichen",
      "contents": "Inhalt",
      "footerLine": "Offene Notation. Menschliche Verantwortung.",
      "versionFooter": "Spezifikation v0.1",
      "translationNote": "Diese Übersetzung dient der Information. Bei Abweichungen ist der englische Originaltext das maßgebliche normative Dokument.",
      "colourChanged": "Die Akzentfarbe wurde auf {colour} geändert."
    },
    untranslatedNotice: {
      "badge": "Nicht übersetzt",
      "headline": "Die nachstehende Spezifikation wird auf Englisch angezeigt.",
      "detail": "Diese Sprache wurde noch nicht übersetzt. Der englische Text ist in allen Fällen die maßgebliche Version."
    },
    endonym: "Deutsch",
    sections: [
      {
        number: "1",
        title: "Zweck",
        body: `
            <p>Die Notation <code>+AI</code> stellt ein kompaktes Verfahren bereit, um ein Artefakt als wesentlich durch künstliche Intelligenz unterstützt zu kennzeichnen und gleichzeitig eine Person oder Organisation zu benennen, die die Verantwortung für das entstandene Artefakt übernimmt.</p>
            <p>Der kanonische Ausdruck lautet:</p>
            <p class="canonical"><code>&lt;Verantwortliche Stelle&gt; +AI</code></p>
            <p>Beispiel:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Die grundlegende Bedeutung lautet:</p>
            <p class="canonical">KI hat geholfen. Ich übernehme die Verantwortung.</p>`
      },
      {
        number: "2",
        title: "Gestaltungsgrundsatz",
        body: `
            <p><code>+AI</code> versucht nicht zu bestimmen, ob ein Artefakt „von Menschen erschaffen“ oder „von KI erschaffen“ ist.</p>
            <p>Moderne Artefakte können während ihrer Entstehung mehrfach zwischen Menschen und Systemen künstlicher Intelligenz hin und her wechseln.</p>
            <p>Stattdessen teilt <code>+AI</code> zwei Tatsachen mit:</p>
            <ol>
              <li>künstliche Intelligenz hat das Werk wesentlich unterstützt; und</li>
              <li>eine identifizierbare Person oder Organisation übernimmt die Verantwortung für das entstandene Artefakt.</li>
            </ol>
            <p>Der Standard betrifft somit die <strong>Beteiligung von KI und die Rechenschaftspflicht des Menschen</strong> und nicht die ausschließliche Urheberschaft.</p>`
      },
      {
        number: "3",
        title: "Normative Terminologie",
        body: `
            <p>Die Begriffe <strong>MUSS (MUST)</strong>, <strong>DARF NICHT (MUST NOT)</strong>, <strong>SOLLTE (SHOULD)</strong>, <strong>SOLLTE NICHT (SHOULD NOT)</strong> und <strong>KANN (MAY)</strong> bezeichnen normative Anforderungen innerhalb dieser Spezifikation.</p>
            <p><strong>MUSS</strong> bezeichnet eine unbedingte Anforderung.</p>
            <p><strong>DARF NICHT</strong> bezeichnet ein unbedingtes Verbot.</p>
            <p><strong>SOLLTE</strong> bezeichnet eine nachdrückliche Empfehlung, von der bei Vorliegen eines berechtigten Grundes abgewichen werden kann.</p>
            <p><strong>SOLLTE NICHT</strong> bezeichnet eine Vorgehensweise, die in der Regel zu vermeiden ist, unter besonderen Umständen jedoch gerechtfertigt sein kann.</p>
            <p><strong>KANN</strong> bezeichnet eine wahlfreie Vorgehensweise.</p>`
      },
      {
        number: "4",
        title: "Kanonische Notation",
        body: `
            <p>Das kanonische Zeichen lautet:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Die kanonische, für Menschen lesbare Form lautet:</p>
            <p><strong><code>&lt;Verantwortliche Stelle&gt; +AI</code></strong></p>
            <p>Beispiele:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Das Zeichen unterscheidet zwischen Groß- und Kleinschreibung.</p>
            <p>Die kanonische Form MUSS verwenden:</p>
            <ul>
              <li>ein Pluszeichen <code>+</code>;</li>
              <li>unmittelbar gefolgt von den lateinischen Großbuchstaben <code>AI</code>;</li>
              <li>ohne dazwischenliegendes Leerzeichen.</li>
            </ul>
            <p>Somit ist <code>+AI</code> kanonisch.</p>
            <p>Die folgenden Formen sind keine kanonischen Entsprechungen:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Varianten KÖNNEN später durch Erweiterungen dieser Spezifikation definiert werden; es DARF NICHT angenommen werden, dass sie die kanonische Bedeutung von <code>+AI</code> tragen, sofern dies nicht ausdrücklich festgelegt ist.</p>`
      },
      {
        number: "5",
        title: "Bedeutung des Zeichens",
        body: `
            <p>Eine verantwortliche Stelle, die <code>+AI</code> verwendet, erklärt Folgendes:</p>
            <h4>5.1 Beteiligung von KI</h4>
            <p>Künstliche Intelligenz hat beim Erstellen, Analysieren, Umformen, Erzeugen, Bewerten, Strukturieren oder Darstellen des zugehörigen Artefakts wesentlich unterstützt.</p>
            <h4>5.2 Kenntnis</h4>
            <p>Die verantwortliche Stelle weiß oder nimmt begründet an, dass eine wesentliche Unterstützung durch KI stattgefunden hat.</p>
            <h4>5.3 Befugnis</h4>
            <p>Die verantwortliche Stelle hat den betreffenden Einsatz künstlicher Intelligenz genehmigt, veranlasst, gesteuert oder bewusst übernommen.</p>
            <h4>5.4 Menschliche oder organisatorische Kontrolle</h4>
            <p>Die verantwortliche Stelle hat die Entscheidungsbefugnis darüber behalten, ob das Artefakt veröffentlicht, übermittelt, bereitgestellt, eingereicht, vorgelegt oder auf andere Weise herausgegeben wird.</p>
            <h4>5.5 Übernahme</h4>
            <p>Die verantwortliche Stelle nimmt das Artefakt in der Form an, in der es vorgelegt wird.</p>
            <h4>5.6 Verantwortung</h4>
            <p>Die verantwortliche Stelle übernimmt die Verantwortung für die Entscheidung, das Artefakt herauszugeben, zu verwenden oder darzustellen.</p>
            <p>Diese Elemente bilden zusammen die Erklärung <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Wesentliche Unterstützung",
        body: `
            <p>Das Zeichen SOLLTE verwendet werden, wenn die Beteiligung von KI das entstandene Artefakt wesentlich beeinflusst hat.</p>
            <p>Eine wesentliche Unterstützung kann einen Beitrag der KI zu Folgendem umfassen:</p>
            <ul>
              <li>Textverfassung;</li><li>Schlussfolgern;</li><li>Analyse;</li><li>Empfehlungen;</li>
              <li>Zusammenführung von Recherchen;</li><li>Softwarecode;</li><li>Dateninterpretation;</li>
              <li>Gestaltung;</li><li>Bilder;</li><li>Audio;</li><li>Video;</li>
              <li>Übersetzung, sofern eine inhaltliche Auslegung erfolgt;</li><li>Planung;</li>
              <li>Entscheidungsunterstützung;</li><li>mathematische oder technische Arbeiten;</li>
              <li>Bearbeitung, die die Bedeutung wesentlich verändert;</li>
              <li>oder sonstige inhaltlich bedeutsame geistige oder schöpferische Arbeit.</li>
            </ul>
            <p>Beiläufige oder rein mechanische KI-Funktionen erfordern nicht zwingend <code>+AI</code>.</p>
            <p>Beispiele können die automatische Rechtschreibkorrektur, die einfache Autovervollständigung, die routinemäßige Formatierung oder andere Funktionen sein, die den Inhalt eines Artefakts nicht wesentlich beeinflussen.</p>
            <p>Maßgeblich ist nicht der prozentuale Anteil der von KI erzeugten Inhalte.</p>
            <p>Maßgeblich ist die Frage:</p>
            <blockquote><strong>Hat KI das vorgelegte Artefakt wesentlich beeinflusst?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Verantwortung",
        body: `
            <p>Die Verantwortung ist das bestimmende Merkmal von <code>+AI</code>.</p>
            <p>Mit der Verwendung des Zeichens überträgt die verantwortliche Stelle die Verantwortung nicht auf ein System, ein Modell, einen Anbieter, einen Agenten oder ein Werkzeug künstlicher Intelligenz.</p>
            <p>Eine Aussage des Inhalts:</p>
            <blockquote>„Die KI hat es erzeugt, folglich bin ich dafür nicht verantwortlich.“</blockquote>
            <p>ist mit der beabsichtigten Bedeutung von <code>+AI</code> unvereinbar.</p>
            <p>Die verantwortliche Stelle KANN sich in erheblichem Umfang auf die Unterstützung durch KI stützen.</p>
            <p>Die verantwortliche Stelle KANN Inhalte veröffentlichen, die weitgehend von KI erzeugt wurden.</p>
            <p>Die verantwortliche Stelle KANN Vorschläge übernehmen, die sie selbst nicht eigenständig hätte erstellen können.</p>
            <p>Keine dieser Gegebenheiten steht der Verwendung von <code>+AI</code> entgegen, sofern die verantwortliche Stelle das entstandene Artefakt bewusst übernimmt und die Verantwortung für dessen Herausgabe übernimmt.</p>`
      },
      {
        number: "8",
        title: "Was +AI nicht bedeutet",
        body: `
            <p>Sofern eine zusätzliche Erklärung nicht ausdrücklich etwas anderes bestimmt, behauptet <code>+AI</code> NICHT, dass:</p>
            <ul>
              <li>das Artefakt fehlerfrei ist;</li>
              <li>jede Tatsachenbehauptung unabhängig überprüft wurde;</li>
              <li>jeder Quellennachweis unabhängig geprüft wurde;</li>
              <li>das Artefakt einem bestimmten Berufsstandard entspricht;</li>
              <li>das Artefakt rechtlich zutreffend ist;</li>
              <li>das Artefakt medizinisch zutreffend ist;</li>
              <li>das Artefakt für einen bestimmten Zweck sicher ist;</li>
              <li>das Artefakt keine Halluzinationen enthält;</li>
              <li>die verantwortliche Stelle jeden Bestandteil persönlich verfasst hat;</li>
              <li>KI den überwiegenden Teil des Artefakts erzeugt hat;</li>
              <li>KI nur einen geringen Teil des Artefakts erzeugt hat;</li>
              <li>das Artefakt originär ist;</li>
              <li>kein geistiges Eigentum Dritter enthalten ist;</li>
              <li>einem KI-System keine vertraulichen Informationen übermittelt wurden;</li>
              <li>ein bestimmter KI-Anbieter, ein bestimmtes Modell oder ein bestimmtes System verwendet wurde;</li>
              <li>die verantwortliche Stelle jedem KI-Zwischenergebnis zustimmt;</li>
              <li>oder die verantwortliche Stelle die internen Schlussfolgerungen des KI-Systems nachbilden oder erklären kann.</li>
            </ul>
            <p><code>+AI</code> ist eine <strong>Erklärung der Rechenschaftspflicht</strong> und keine Zusicherung der Richtigkeit.</p>`
      },
      {
        number: "9",
        title: "Menschliche Prüfung",
        body: `
            <p>Version 0.1 verlangt nicht, dass jeder Bestandteil eines Artefakts Wort für Wort oder Element für Element manuell geprüft wird.</p>
            <p>Die verantwortliche Stelle MUSS das herausgegebene Artefakt jedoch bewusst annehmen.</p>
            <p>Die blinde oder automatische Weitergabe ungeprüfter KI-Ergebnisse SOLLTE NICHT mit <code>+AI</code> ausgewiesen werden, wenn keine bedeutsame menschliche Handlung der Übernahme erfolgt ist.</p>
            <p>Künftige Fassungen dieser Spezifikation KÖNNEN stärkere Gewährleistungszeichen festlegen, die eine vollständige Prüfung oder eine unabhängige Verifizierung ausdrücken.</p>`
      },
      {
        number: "10",
        title: "Natürliche Personen",
        body: `
            <p>Eine natürliche Person KANN die Notation ihrem Namen nachstellen.</p>
            <p>Beispiel:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Dies bedeutet:</p>
            <blockquote>Künstliche Intelligenz hat das zugehörige Werk wesentlich unterstützt, und Eric Mourant übernimmt die Verantwortung für die Herausgabe dieses Werks.</blockquote>
            <p>Das Zeichen bezieht sich auf das zugehörige Artefakt oder die zugehörige Mitteilung.</p>
            <p>Es bedeutet nicht zwangsläufig, dass bei jeder Tätigkeit dieser Person künstliche Intelligenz zum Einsatz kommt.</p>`
      },
      {
        number: "11",
        title: "Organisationen",
        body: `
            <p>Eine Organisation KANN <code>+AI</code> verwenden.</p>
            <p data-company-example>Beispiel:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Dies bedeutet, dass die Organisation die Verantwortung für das zugehörige KI-unterstützte Artefakt nach ihren jeweils geltenden Governance- und Zuständigkeitsstrukturen übernimmt.</p>
            <p>Soweit zweckmäßig, KÖNNEN sowohl eine Organisation als auch eine verantwortliche Person benannt werden.</p>
            <p data-company-example>Beispiel:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "E-Mail und Nachrichtenübermittlung",
        body: `
            <p>In der persönlichen Kommunikation ist folgende Darstellung vorzuziehen:</p>
            <p><strong>Mit freundlichen Grüßen,<br>Eric Mourant +AI</strong></p>
            <p>Das Zeichen KANN mit einer kanonischen Erläuterung seiner Bedeutung verlinkt werden.</p>
            <p>Ein Hyperlink DARF NICHT die sichtbare Notation verändern.</p>
            <p>Reiner Text MUSS zur Wiedergabe der Erklärung ausreichend bleiben.</p>`
      },
      {
        number: "13",
        title: "Dokumente",
        body: `
            <p>Die Notation KANN in einem Feld für Verfasser, Ersteller, Prüfer oder verantwortliche Stelle erscheinen.</p>
            <p>Beispiele:</p>
            <p><strong>Verfasser: Eric Mourant +AI</strong></p>
            <p><strong>Erstellt von: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Herausgegeben von: JAPER Technology +AI</strong></p>
            <p>Die Platzierung SOLLTE klar erkennbar machen, welche Person oder Organisation die Verantwortung übernimmt.</p>`
      },
      {
        number: "14",
        title: "Software",
        body: `
            <p>Die Notation KANN in Software-Repositorien, Commits, Quellcode-Kopfzeilen, Dokumentationen, Versionshinweisen und erzeugten Artefakten verwendet werden.</p>
            <p>Beispiel:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Ein Projekt KANN zusätzlich erklären:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Eine solche Erklärung auf Projektebene SOLLTE, soweit praktikabel, die verantwortliche Person oder Organisation benennen.</p>`
      },
      {
        number: "15",
        title: "Schöpferische Artefakte",
        body: `
            <p>Die Notation KANN Bilder, Audio- und Videoinhalte, Entwürfe, Illustrationen, Präsentationen und andere schöpferische Werke begleiten.</p>
            <p>Beispiel:</p>
            <p><strong>Erstellt von Eric Mourant +AI</strong></p>
            <p>Das Zeichen selbst gibt nicht an, welche Elemente durch KI erzeugt oder verändert wurden.</p>
            <p>Ausführlichere Provenienz-Metadaten KÖNNEN gesondert zugeordnet werden.</p>`
      },
      {
        number: "16",
        title: "Forschung und technische Arbeiten",
        body: `
            <p>Das Zeichen KANN in Forschungs-, wissenschaftlichen, ingenieurtechnischen oder technischen Arbeiten verwendet werden, soweit die geltenden institutionellen, publikationsbezogenen oder berufsrechtlichen Anforderungen dies zulassen.</p>
            <p><code>+AI</code> DARF NICHT als Ersatz für eine genauere Offenlegung dargestellt werden, die von einem Verlag, einer Aufsichtsbehörde, einem Arbeitgeber, einer Berufsorganisation oder durch Gesetz verlangt wird.</p>
            <p>Die Notation KANN eine solche Offenlegung ergänzen.</p>`
      },
      {
        number: "17",
        title: "Maschinenlesbare Darstellung",
        body: `
            <p>Systeme KÖNNEN die Erklärung mittels strukturierter Metadaten darstellen.</p>
            <p>Eine minimale Darstellung lautet:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Eine ausführlichere Darstellung lautet:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Maschinenlesbare Formen SOLLTEN dieselbe semantische Bedeutung wie die sichtbare Notation bewahren.</p>`
      },
      {
        number: "18",
        title: "Fortbestand",
        body: `
            <p>Die Notation <code>+AI</code> SOLLTE angemessene Umformungen eines Artefakts überdauern, sofern die Zuordnung erhalten bleibt.</p>
            <p>Beispiele sind die Umwandlung zwischen Dokumentformaten, die Archivierung, der Druck, der Export, die erneute Veröffentlichung und die Übermittlung.</p>
            <p>Werden die Metadaten entfernt, SOLLTE das sichtbare Zeichen in reinem Text weiterhin ausreichen, um die Erklärung zu vermitteln.</p>`
      },
      {
        number: "19",
        title: "Freie Verwendung",
        body: `
            <p>Die Notation <code>+AI</code> ist für die unbeschränkte öffentliche Verwendung bestimmt.</p>
            <p>Die Verwendung der Notation SOLLTE NICHT Folgendes erfordern:</p>
            <ul>
              <li>eine Registrierung;</li><li>eine Mitgliedschaft;</li><li>eine Zahlung;</li><li>eine Zertifizierung;</li>
              <li>eine Genehmigung;</li><li>oder die Verwendung eines bestimmten KI-Produkts oder KI-Anbieters.</li>
            </ul>
            <p>Der Nutzen der Notation hängt davon ab, dass sie als allgemeingültige Konvention wirken kann.</p>`
      },
      {
        number: "20",
        title: "Neutralität",
        body: `
            <p><code>+AI</code> drückt weder Zustimmung noch Ablehnung gegenüber künstlicher Intelligenz aus.</p>
            <p>Die Notation gibt nicht an, ob der Einsatz von KI notwendig, wünschenswert oder einer unassistierten menschlichen Arbeit überlegen war.</p>
            <p>Sie hält allein die wesentliche Beteiligung von KI und die Rechenschaftspflicht des Menschen oder der Organisation fest.</p>`
      },
      {
        number: "21",
        title: "Irreführende Darstellung",
        body: `
            <p>Eine Person oder Organisation SOLLTE NICHT <code>+AI</code> verwenden, wenn:</p>
            <ul>
              <li>keine identifizierbare verantwortliche Stelle vorhanden ist;</li>
              <li>die benannte Stelle das Artefakt nicht übernommen hat;</li>
              <li>das Artefakt automatisch ohne bedeutsame menschliche Befugnis herausgegeben wird;</li>
              <li>oder die Notation dazu dient, einen falschen Eindruck menschlicher Rechenschaftspflicht zu erzeugen.</li>
            </ul>
            <p>Autonome KI-Ergebnisse ohne bedeutsame menschliche Übernahme liegen außerhalb des kanonischen Anwendungsbereichs von <code>+AI</code>.</p>
            <p>Künftige Spezifikationen KÖNNEN eine Notation für autonome KI-Ergebnisse festlegen.</p>`
      },
      {
        number: "22",
        title: "Verhältnis zur Urheberschaft",
        body: `
            <p><code>+AI</code> weist bewusst keinen prozentualen Anteil an der Urheberschaft zu.</p>
            <p>Ein Artefakt KANN überwiegend Material menschlichen Ursprungs enthalten und dennoch in Betracht kommen.</p>
            <p>Ein Artefakt KANN überwiegend Material aus KI-Erzeugung enthalten und dennoch in Betracht kommen.</p>
            <p>Maßgeblich ist die Prüfung, ob:</p>
            <p><strong>KI wesentlich unterstützt hat und die benannte Stelle die Verantwortung für das Ergebnis übernimmt.</strong></p>`
      },
      {
        number: "23",
        title: "Kanonische öffentliche Erläuterung",
        body: `
            <p>Ist eine kurze Erläuterung erforderlich, so ist folgende Formulierung vorzuziehen:</p>
            <p class="canonical">KI hat geholfen. Ich übernehme die Verantwortung.</p>
            <p>Ist eine längere Erläuterung erforderlich:</p>
            <blockquote><strong><code>+AI</code> bedeutet, dass künstliche Intelligenz dieses Werk wesentlich unterstützt hat und die benannte Person oder Organisation die Verantwortung für das entstandene Artefakt übernimmt.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Der +AI-Test",
        body: `
            <p>Vor dem Anbringen des Zeichens sollte eine Person beide Fragen mit <strong>ja</strong> beantworten können:</p>
            <p><strong>Hat KI wesentlich dazu beigetragen, dies zu erstellen?</strong></p>
            <p><strong>Bin ich bereit, die Verantwortung für die Herausgabe zu übernehmen?</strong></p>
            <p>Lauten beide Antworten ja:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Künftige Erweiterungen",
        body: `
            <p>Künftige Fassungen KÖNNEN zusätzliche Notationen festlegen, die Folgendes betreffen:</p>
            <ul>
              <li>geringfügige Unterstützung durch KI;</li><li>überwiegend durch KI erfolgte Erzeugung;</li><li>vollständige menschliche Prüfung;</li>
              <li>unabhängige Verifizierung;</li><li>Tätigkeit autonomer Agenten;</li>
              <li>kryptografische Provenienz;</li><li>Kennzeichnung des KI-Systems;</li>
              <li>Kennzeichnung des Modells;</li><li>oder Ketten menschlicher und maschineller Beiträge.</li>
            </ul>
            <p>Solche Erweiterungen SOLLTEN <code>+AI</code> als einfaches kanonisches Zeichen für Folgendes bewahren:</p>
            <p class="canonical">KI-unterstützte Arbeit mit identifizierbarer menschlicher Verantwortung.</p>`
      },
      {
        number: "26",
        title: "Kanonische Erklärung",
        body: `
            <p>Eine Person oder Organisation, die <code>+AI</code> anbringt, gibt die folgende Erklärung ab:</p>
            <blockquote><strong>Künstliche Intelligenz hat dieses Werk wesentlich unterstützt. Ich habe mich entschieden, das entstandene Werk anzunehmen, zu veröffentlichen, zu übermitteln, bereitzustellen oder auf andere Weise herauszugeben, und ich übernehme die Verantwortung für diese Entscheidung und für das Werk in der vorgelegten Form.</strong></blockquote>
            <p>Die öffentliche Kurzform lautet:</p>
            <p class="canonical">KI hat geholfen. Ich übernehme die Verantwortung.</p>
            <p>Das kanonische Zeichen lautet:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI Spezifikation v0.1</p><p>Mensch-KI-Provenienz und Rechenschaftspflicht</p><strong>KI hat geholfen. Ich übernehme die Verantwortung.</strong>"
  });
})(window.PlusAISpecTranslations);
