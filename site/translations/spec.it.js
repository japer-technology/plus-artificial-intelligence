/*!
 * +AI Specification — Italian (it)
 * Status: reviewed translation.
 * Interface chrome: AI-generated, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → DEVE
 *   MUST NOT   → NON DEVE
 *   SHOULD     → DOVREBBE
 *   SHOULD NOT → NON DOVREBBE
 *   MAY        → PUÒ
 *
 * Where the Italian subject is plural the same five terms appear in their
 * regular plural forms (DEVONO, NON DEVONO, DOVREBBERO, NON DOVREBBERO,
 * POSSONO); the requirement strength is unchanged. The canonical slogan is
 * rendered once as "L’IA mi ha aiutato. Me ne assumo la responsabilità." and
 * reused verbatim in sections 1, 23, 26 and the closing panel.
 */
(function (registry) {
  registry.register("it", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = L’IA mi ha aiutato. Me ne assumo la responsabilità.",
      "description": "+AI significa che l’intelligenza artificiale ha assistito in modo sostanziale l’opera e che una persona o un’organizzazione indicata ne accetta la responsabilità.",
      "skip": "Vai alla spiegazione",
      "language": "Lingua",
      "languageAria": "Scegli la lingua",
      "theme": "Modalità scura",
      "themeDark": "Modalità scura",
      "themeLight": "Modalità chiara",
      "themeDarkAria": "Usa la modalità scura",
      "themeLightAria": "Usa la modalità chiara",
      "highlight": "Colore",
      "highlightAria": "Scegli un colore di accento casuale",
      "followedLink": "Descrizione del postnominale +AI",
      "heroTitle": "L’IA mi ha aiutato. Me ne assumo la responsabilità.",
      "heroLead": "La persona o l’organizzazione il cui nome portava questo link fa una semplice dichiarazione: <strong>l’intelligenza artificiale ha assistito in modo sostanziale l’opera, e tale parte accetta la responsabilità di diffonderla.</strong>",
      "readSpec": "Leggi la specifica",
      "meansHeading": "Cosa dichiara il marchio",
      "meaningOneTitle": "L’IA ha partecipato",
      "meaningOneBody": "L’IA ha aiutato in modo sostanziale a creare, analizzare, trasformare o presentare l’opera.",
      "meaningTwoTitle": "Un essere umano ha scelto",
      "meaningTwoBody": "Una persona o un’organizzazione ha adottato e diffuso consapevolmente il risultato.",
      "meaningThreeTitle": "La responsabilità resta umana",
      "meaningThreeBody": "La parte indicata non trasferisce la responsabilità a un sistema o a un fornitore di IA.",
      "plainTitle": "Assistenza trasparente. Responsabilità visibile.",
      "plainLead": "Il marchio è una dichiarazione di responsabilità, non un’affermazione che l’IA sia l’autrice né una garanzia che l’opera sia corretta.",
      "plainBody": "Non indica quanta parte dell’opera provenga dall’IA. Indica che l’IA ha influenzato in modo sostanziale il risultato e che una persona o un’organizzazione identificabile sostiene la decisione di usarlo.",
      "plainQuote": "Tre caratteri rendono visibili sia la partecipazione sia la responsabilità.",
      "fullDocument": "Documento completo",
      "specification": "Specifica",
      "statusLabel": "Stato",
      "statusValue": "Bozza",
      "versionLabel": "Versione",
      "markLabel": "Marchio canonico",
      "contents": "Sommario",
      "footerLine": "Notazione aperta. Responsabilità umana.",
      "versionFooter": "Specifica v0.1",
      "translationNote": "Questa è una traduzione informativa. In caso di divergenze, il testo originale inglese è il documento normativo.",
      "colourChanged": "Il colore di accento è stato impostato su {colour}."
    },
    untranslatedNotice: {
      "badge": "Non tradotto",
      "headline": "La specifica seguente è mostrata in inglese.",
      "detail": "Questa lingua non è ancora stata tradotta. Il testo inglese è in ogni caso la versione normativa."
    },
    endonym: "Italiano",
    sections: [
      {
        number: "1",
        title: "Finalità",
        body: `
            <p>La notazione <code>+AI</code> offre un metodo conciso per indicare che un artefatto è stato assistito in modo sostanziale dall’intelligenza artificiale, identificando al tempo stesso una persona o un’organizzazione che si assume la responsabilità dell’artefatto risultante.</p>
            <p>L’espressione canonica è:</p>
            <p class="canonical"><code>&lt;Parte responsabile&gt; +AI</code></p>
            <p>Esempio:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Il significato fondamentale è:</p>
            <p class="canonical">L’IA mi ha aiutato. Me ne assumo la responsabilità.</p>`
      },
      {
        number: "2",
        title: "Principio di progettazione",
        body: `
            <p><code>+AI</code> non cerca di stabilire se un artefatto sia “creato dall’uomo” o “creato dall’IA”.</p>
            <p>Durante la loro realizzazione, gli artefatti odierni possono passare più volte tra persone e sistemi di intelligenza artificiale.</p>
            <p><code>+AI</code> comunica invece due fatti:</p>
            <ol>
              <li>l’intelligenza artificiale ha assistito in modo sostanziale il lavoro; e</li>
              <li>una persona o un’organizzazione identificabile si assume la responsabilità dell’artefatto risultante.</li>
            </ol>
            <p>Lo standard riguarda pertanto la <strong>partecipazione dell’IA e la responsabilità umana</strong>, e non la paternità esclusiva dell’opera.</p>`
      },
      {
        number: "3",
        title: "Terminologia normativa",
        body: `
            <p>I termini <strong>DEVE (MUST)</strong>, <strong>NON DEVE (MUST NOT)</strong>, <strong>DOVREBBE (SHOULD)</strong>, <strong>NON DOVREBBE (SHOULD NOT)</strong> e <strong>PUÒ (MAY)</strong> esprimono requisiti normativi all’interno della presente specifica.</p>
            <p><strong>DEVE</strong> indica un requisito assoluto.</p>
            <p><strong>NON DEVE</strong> indica un divieto assoluto.</p>
            <p><strong>DOVREBBE</strong> indica una raccomandazione forte, dalla quale è possibile discostarsi in presenza di un motivo legittimo.</p>
            <p><strong>NON DOVREBBE</strong> indica una prassi normalmente evitata, ma potenzialmente giustificata in circostanze particolari.</p>
            <p><strong>PUÒ</strong> indica una prassi facoltativa.</p>`
      },
      {
        number: "4",
        title: "Notazione canonica",
        body: `
            <p>Il marchio canonico è:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>La forma canonica leggibile dall’uomo è:</p>
            <p><strong><code>&lt;Parte responsabile&gt; +AI</code></strong></p>
            <p>Esempi:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Il marchio distingue tra maiuscole e minuscole.</p>
            <p>La forma canonica DEVE utilizzare:</p>
            <ul>
              <li>un segno più <code>+</code>;</li>
              <li>seguito immediatamente dai caratteri latini maiuscoli <code>AI</code>;</li>
              <li>senza spazi interni.</li>
            </ul>
            <p>Pertanto <code>+AI</code> è la forma canonica.</p>
            <p>Le forme seguenti non sono equivalenti canonici:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Eventuali varianti POSSONO essere definite in seguito da estensioni della presente specifica, ma NON DEVONO essere considerate portatrici del significato canonico di <code>+AI</code> se non sono definite esplicitamente.</p>`
      },
      {
        number: "5",
        title: "Significato del marchio",
        body: `
            <p>Una parte responsabile che utilizza <code>+AI</code> dichiara che:</p>
            <h4>5.1 Partecipazione dell’IA</h4>
            <p>L’intelligenza artificiale ha contribuito in modo sostanziale a creare, analizzare, trasformare, generare, valutare, strutturare o presentare l’artefatto associato.</p>
            <h4>5.2 Conoscenza</h4>
            <p>La parte responsabile sa, o ragionevolmente ritiene, che vi sia stata un’assistenza sostanziale dell’IA.</p>
            <h4>5.3 Autorità</h4>
            <p>La parte responsabile ha autorizzato, avviato, diretto o consapevolmente adottato l’uso dell’intelligenza artificiale di cui si tratta.</p>
            <h4>5.4 Controllo umano od organizzativo</h4>
            <p>La parte responsabile ha conservato il potere di decidere se l’artefatto venisse pubblicato, trasmesso, distribuito, depositato, presentato o altrimenti diffuso.</p>
            <h4>5.5 Adozione</h4>
            <p>La parte responsabile accetta l’artefatto nella forma in cui viene presentato.</p>
            <h4>5.6 Responsabilità</h4>
            <p>La parte responsabile si assume la responsabilità della decisione di diffondere, utilizzare o presentare l’artefatto.</p>
            <p>Questi elementi costituiscono nel loro insieme la dichiarazione <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Assistenza sostanziale",
        body: `
            <p>Il marchio DOVREBBE essere usato quando la partecipazione dell’IA ha influito in modo sostanziale sull’artefatto risultante.</p>
            <p>L’assistenza sostanziale può comprendere un contributo dell’IA a:</p>
            <ul>
              <li>la scrittura;</li><li>il ragionamento;</li><li>l’analisi;</li><li>le raccomandazioni;</li>
              <li>la sintesi di ricerche;</li><li>il codice software;</li><li>l’interpretazione dei dati;</li>
              <li>la progettazione;</li><li>le immagini;</li><li>l’audio;</li><li>il video;</li>
              <li>la traduzione quando comporta un’interpretazione sostanziale;</li><li>la pianificazione;</li>
              <li>il supporto alle decisioni;</li><li>i lavori matematici o tecnici;</li>
              <li>la revisione che modifica sostanzialmente il significato;</li>
              <li>oppure altri lavori intellettuali o creativi sostanziali.</li>
            </ul>
            <p>Una funzionalità di IA accessoria o puramente meccanica non richiede necessariamente <code>+AI</code>.</p>
            <p>Possono rientrarvi la correzione ortografica automatica, il completamento automatico elementare, la formattazione ordinaria o altre funzioni che non incidono in modo sostanziale sulla sostanza di un artefatto.</p>
            <p>La domanda decisiva non è quale percentuale del contenuto sia stata prodotta dall’IA.</p>
            <p>La domanda decisiva è:</p>
            <blockquote><strong>L’IA ha influenzato in modo sostanziale l’artefatto che viene presentato?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Responsabilità",
        body: `
            <p>La responsabilità è la proprietà che definisce <code>+AI</code>.</p>
            <p>Usando il marchio, la parte responsabile non trasferisce la propria responsabilità a un sistema, modello, fornitore, agente o strumento di intelligenza artificiale.</p>
            <p>Un’affermazione equivalente a:</p>
            <blockquote>“L’ha generato l’IA, quindi non ne sono responsabile.”</blockquote>
            <p>è incompatibile con il significato inteso di <code>+AI</code>.</p>
            <p>La parte responsabile PUÒ fare ampio ricorso all’assistenza dell’IA.</p>
            <p>La parte responsabile PUÒ pubblicare contenuti generati in misura sostanziale dall’IA.</p>
            <p>La parte responsabile PUÒ accettare suggerimenti che non avrebbe potuto produrre autonomamente.</p>
            <p>Nessuna di queste condizioni impedisce l’uso di <code>+AI</code>, purché la parte responsabile adotti consapevolmente l’artefatto risultante e si assuma la responsabilità della sua diffusione.</p>`
      },
      {
        number: "8",
        title: "Ciò che +AI non significa",
        body: `
            <p>Salvo quanto espressamente dichiarato in una dichiarazione aggiuntiva, <code>+AI</code> NON afferma che:</p>
            <ul>
              <li>l’artefatto sia privo di errori;</li>
              <li>ogni affermazione di fatto sia stata verificata in modo indipendente;</li>
              <li>ogni citazione sia stata controllata in modo indipendente;</li>
              <li>l’artefatto soddisfi un determinato standard professionale;</li>
              <li>l’artefatto sia giuridicamente corretto;</li>
              <li>l’artefatto sia corretto sotto il profilo medico;</li>
              <li>l’artefatto sia sicuro per un determinato scopo;</li>
              <li>l’artefatto non contenga allucinazioni;</li>
              <li>la parte responsabile abbia scritto personalmente ogni componente;</li>
              <li>l’IA abbia generato la maggior parte dell’artefatto;</li>
              <li>l’IA abbia generato solo una parte minoritaria dell’artefatto;</li>
              <li>l’artefatto sia originale;</li>
              <li>non sia presente alcuna proprietà intellettuale di terzi;</li>
              <li>non siano state fornite informazioni riservate a un sistema di IA;</li>
              <li>sia stato usato un determinato fornitore, modello o sistema di IA;</li>
              <li>la parte responsabile concordi con ogni singolo risultato intermedio dell’IA;</li>
              <li>oppure che la parte responsabile sia in grado di riprodurre o spiegare il ragionamento interno del sistema di IA.</li>
            </ul>
            <p><code>+AI</code> è una <strong>dichiarazione di responsabilità</strong>, non una garanzia di correttezza.</p>`
      },
      {
        number: "9",
        title: "Revisione umana",
        body: `
            <p>La versione 0.1 non richiede che ogni componente di un artefatto sia rivisto manualmente parola per parola o elemento per elemento.</p>
            <p>La parte responsabile DEVE tuttavia accettare consapevolmente l’artefatto che viene diffuso.</p>
            <p>L’inoltro cieco o automatico di risultati dell’IA non rivisti NON DOVREBBE essere rappresentato con <code>+AI</code> quando non si è verificato alcun atto umano significativo di adozione.</p>
            <p>Le versioni future della presente specifica POSSONO definire marchi di garanzia più forti, che rappresentino una revisione completa o una verifica indipendente.</p>`
      },
      {
        number: "10",
        title: "Persone fisiche",
        body: `
            <p>Una persona PUÒ apporre la notazione dopo il proprio nome.</p>
            <p>Esempio:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Ciò significa:</p>
            <blockquote>L’intelligenza artificiale ha assistito in modo sostanziale il lavoro associato ed Eric Mourant si assume la responsabilità della diffusione di tale lavoro.</blockquote>
            <p>Il marchio si riferisce all’artefatto o alla comunicazione associati.</p>
            <p>Non significa necessariamente che ogni attività svolta da quella persona faccia uso dell’intelligenza artificiale.</p>`
      },
      {
        number: "11",
        title: "Organizzazioni",
        body: `
            <p>Un’organizzazione PUÒ utilizzare <code>+AI</code>.</p>
            <p data-company-example>Esempio:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Ciò significa che l’organizzazione si assume la responsabilità dell’artefatto associato, assistito dall’IA, secondo le proprie strutture applicabili di governo e di autorità.</p>
            <p>Ove utile, POSSONO essere indicate sia un’organizzazione sia una persona responsabile.</p>
            <p data-company-example>Esempio:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Posta elettronica e messaggistica",
        body: `
            <p>Nella comunicazione personale, la presentazione preferita è:</p>
            <p><strong>Cordiali saluti,<br>Eric Mourant +AI</strong></p>
            <p>Il marchio PUÒ essere collegato, mediante collegamento ipertestuale, a una spiegazione canonica del suo significato.</p>
            <p>Un collegamento ipertestuale NON DEVE alterare la notazione visibile.</p>
            <p>Il testo semplice DEVE restare sufficiente a esprimere la dichiarazione.</p>`
      },
      {
        number: "13",
        title: "Documenti",
        body: `
            <p>La notazione PUÒ comparire in un campo relativo all’autore, a chi ha redatto, a chi ha revisionato o alla parte responsabile.</p>
            <p>Esempi:</p>
            <p><strong>Autore: Eric Mourant +AI</strong></p>
            <p><strong>Redatto da: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Emesso da: JAPER Technology +AI</strong></p>
            <p>La collocazione DOVREBBE rendere chiaro quale persona od organizzazione si assume la responsabilità.</p>`
      },
      {
        number: "14",
        title: "Software",
        body: `
            <p>La notazione PUÒ essere usata in repository di software, commit, intestazioni di codice sorgente, documentazione, note di rilascio e artefatti generati.</p>
            <p>Esempio:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Un progetto PUÒ inoltre dichiarare:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Una simile dichiarazione a livello di progetto DOVREBBE indicare, ove praticabile, la persona od organizzazione responsabile.</p>`
      },
      {
        number: "15",
        title: "Artefatti creativi",
        body: `
            <p>La notazione PUÒ accompagnare immagini, audio, video, progetti, illustrazioni, presentazioni e altre opere creative.</p>
            <p>Esempio:</p>
            <p><strong>Creato da Eric Mourant +AI</strong></p>
            <p>Il marchio di per sé non specifica quali elementi siano stati generati o modificati dall’IA.</p>
            <p>Metadati di provenienza più dettagliati POSSONO essere associati separatamente.</p>`
      },
      {
        number: "16",
        title: "Ricerca e lavori tecnici",
        body: `
            <p>Il marchio PUÒ essere usato in lavori di ricerca, scientifici, ingegneristici o tecnici ove ciò sia consentito dai requisiti istituzionali, editoriali o professionali applicabili.</p>
            <p><code>+AI</code> NON DEVE essere presentato come sostitutivo di una comunicazione più specifica richiesta da un editore, da un’autorità di regolamentazione, da un datore di lavoro, da un ordine professionale o dalla legge.</p>
            <p>La notazione PUÒ integrare tale comunicazione.</p>`
      },
      {
        number: "17",
        title: "Rappresentazione leggibile dalle macchine",
        body: `
            <p>I sistemi POSSONO rappresentare la dichiarazione mediante metadati strutturati.</p>
            <p>Una rappresentazione minima è:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Una rappresentazione più ricca è:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Le forme leggibili dalle macchine DOVREBBERO conservare lo stesso significato semantico della notazione visibile.</p>`
      },
      {
        number: "18",
        title: "Persistenza",
        body: `
            <p>La notazione <code>+AI</code> DOVREBBE sopravvivere alle trasformazioni ragionevoli di un artefatto quando l’attribuzione viene conservata.</p>
            <p>Ne sono esempi la conversione tra formati di documento, l’archiviazione, la stampa, l’esportazione, la ripubblicazione e la trasmissione.</p>
            <p>Quando i metadati vengono rimossi, il marchio visibile in testo semplice DOVREBBE restare sufficiente a comunicare la dichiarazione.</p>`
      },
      {
        number: "19",
        title: "Uso libero",
        body: `
            <p>La notazione <code>+AI</code> è destinata a un uso pubblico senza restrizioni.</p>
            <p>L’uso della notazione NON DOVREBBE richiedere:</p>
            <ul>
              <li>registrazione;</li><li>adesione;</li><li>pagamento;</li><li>certificazione;</li>
              <li>approvazione;</li><li>né l’uso di un determinato prodotto o fornitore di IA.</li>
            </ul>
            <p>L’utilità della notazione dipende dalla sua capacità di funzionare come convenzione universale.</p>`
      },
      {
        number: "20",
        title: "Neutralità",
        body: `
            <p><code>+AI</code> non esprime approvazione né disapprovazione dell’intelligenza artificiale.</p>
            <p>Non indica se l’uso dell’IA fosse necessario, auspicabile o superiore a un lavoro umano senza assistenza.</p>
            <p>Registra soltanto la partecipazione sostanziale dell’IA e la responsabilità umana od organizzativa.</p>`
      },
      {
        number: "21",
        title: "Rappresentazione ingannevole",
        body: `
            <p>Una persona od organizzazione NON DOVREBBE utilizzare <code>+AI</code> quando:</p>
            <ul>
              <li>non esiste una parte responsabile identificabile;</li>
              <li>la parte indicata non ha adottato l’artefatto;</li>
              <li>l’artefatto viene emesso automaticamente senza un’autorità umana significativa;</li>
              <li>oppure la notazione viene usata per creare una falsa impressione di responsabilità umana.</li>
            </ul>
            <p>I risultati autonomi dell’IA privi di un’adozione umana significativa non rientrano nell’ambito canonico di <code>+AI</code>.</p>
            <p>Specifiche future POSSONO definire una notazione per i risultati autonomi dell’IA.</p>`
      },
      {
        number: "22",
        title: "Rapporto con la paternità dell’opera",
        body: `
            <p><code>+AI</code> deliberatamente non attribuisce alcuna percentuale di paternità dell’opera.</p>
            <p>Un artefatto PUÒ contenere materiale prevalentemente di origine umana e rientrare comunque nell’ambito del marchio.</p>
            <p>Un artefatto PUÒ contenere materiale prevalentemente di origine artificiale e rientrare comunque nell’ambito del marchio.</p>
            <p>Il criterio rilevante consiste nello stabilire se:</p>
            <p><strong>l’IA ha assistito in modo sostanziale e la parte indicata si assume la responsabilità del risultato.</strong></p>`
      },
      {
        number: "23",
        title: "Spiegazione pubblica canonica",
        body: `
            <p>Quando è richiesta una spiegazione breve, la formulazione preferita è:</p>
            <p class="canonical">L’IA mi ha aiutato. Me ne assumo la responsabilità.</p>
            <p>Quando è richiesta una spiegazione più ampia:</p>
            <blockquote><strong><code>+AI</code> significa che l’intelligenza artificiale ha assistito in modo sostanziale questo lavoro e che la persona od organizzazione indicata si assume la responsabilità dell’artefatto risultante.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Il test +AI",
        body: `
            <p>Prima di apporre il marchio, una persona dovrebbe poter rispondere <strong>sì</strong> a entrambe le domande:</p>
            <p><strong>L’IA ha contribuito in modo sostanziale a produrre questo risultato?</strong></p>
            <p><strong>Sono disposto ad assumermi la responsabilità della sua diffusione?</strong></p>
            <p>Se entrambe le risposte sono affermative:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Estensioni future",
        body: `
            <p>Le versioni future POSSONO definire notazioni aggiuntive relative a:</p>
            <ul>
              <li>assistenza minore dell’IA;</li><li>generazione prevalentemente affidata all’IA;</li><li>revisione umana completa;</li>
              <li>verifica indipendente;</li><li>attività di agenti autonomi;</li>
              <li>provenienza crittografica;</li><li>identificazione del sistema di IA;</li>
              <li>identificazione del modello;</li><li>oppure catene di contributi umani e automatici.</li>
            </ul>
            <p>Tali estensioni DOVREBBERO preservare <code>+AI</code> come semplice marchio canonico per:</p>
            <p class="canonical">Un lavoro assistito dall’IA con una responsabilità umana identificabile.</p>`
      },
      {
        number: "26",
        title: "Dichiarazione canonica",
        body: `
            <p>Una persona od organizzazione che appone <code>+AI</code> rende la seguente dichiarazione:</p>
            <blockquote><strong>L’intelligenza artificiale ha assistito in modo sostanziale questo lavoro. Ho scelto di accettare, pubblicare, trasmettere, distribuire o altrimenti diffondere il lavoro risultante, e mi assumo la responsabilità di tale decisione e del lavoro così come viene presentato.</strong></blockquote>
            <p>La formula pubblica abbreviata è:</p>
            <p class="canonical">L’IA mi ha aiutato. Me ne assumo la responsabilità.</p>
            <p>Il marchio canonico è:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Specifica +AI v0.1</p><p>Provenienza uomo-IA e responsabilità</p><strong>L’IA mi ha aiutato. Me ne assumo la responsabilità.</strong>"
  });
})(window.PlusAISpecTranslations);
