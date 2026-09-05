/*!
 * +AI Specification — Romanian (ro)
 * Status: reviewed translation.
 * Interface chrome: AI-generated, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → TREBUIE
 *   MUST NOT   → NU TREBUIE
 *   SHOULD     → AR TREBUI
 *   SHOULD NOT → NU AR TREBUI
 *   MAY        → POATE
 *
 * Terminology note: "responsible party" → "partea responsabilă";
 * "artifact" → "artefact"; "material assistance" → "asistență substanțială";
 * "accountability" → "răspundere". The verb forms POATE / POT and
 * TREBUIE / AR TREBUI are inflected for number only, never replaced by a
 * synonym, so requirement strength stays constant across all 26 sections.
 */
(function (registry) {
  registry.register("ro", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = IA a ajutat. Îmi asum răspunderea.",
      "description": "+AI înseamnă că inteligența artificială a asistat substanțial lucrarea, iar o persoană sau organizație numită acceptă responsabilitatea pentru aceasta.",
      "skip": "Salt la explicație",
      "language": "Limbă",
      "languageAria": "Alegeți limba",
      "theme": "Mod întunecat",
      "themeDark": "Mod întunecat",
      "themeLight": "Mod luminos",
      "themeDarkAria": "Utilizați modul întunecat",
      "themeLightAria": "Utilizați modul luminos",
      "highlight": "Culoare accent",
      "highlightAria": "Alegeți o culoare de accent aleatorie",
      "followedLink": "Descrierea postnominalului +AI",
      "heroTitle": "IA a ajutat. Îmi asum răspunderea.",
      "heroLead": "Persoana sau organizația al cărei nume purta acest link face o declarație simplă: <strong>inteligența artificială a asistat substanțial lucrarea, iar partea respectivă acceptă responsabilitatea pentru publicarea acesteia.</strong>",
      "readSpec": "Citiți specificația",
      "meansHeading": "Ce spune marca",
      "meaningOneTitle": "IA a participat",
      "meaningOneBody": "IA a ajutat substanțial la crearea, analizarea, transformarea sau prezentarea lucrării.",
      "meaningTwoTitle": "A ales un om",
      "meaningTwoBody": "O persoană sau organizație a adoptat și publicat conștient rezultatul.",
      "meaningThreeTitle": "Responsabilitatea rămâne umană",
      "meaningThreeBody": "Partea numită nu transferă răspunderea către un sistem sau furnizor de IA.",
      "plainTitle": "Asistență transparentă. Răspundere vizibilă.",
      "plainLead": "Marca este o declarație de răspundere, nu o afirmație că IA este autorul și nici o garanție că lucrarea este corectă.",
      "plainBody": "Nu precizează cât din lucrare a provenit de la IA. Spune că IA a influențat substanțial rezultatul și că o persoană sau organizație identificabilă susține decizia de a utiliza IA.",
      "plainQuote": "Trei caractere fac vizibile atât participarea, cât și responsabilitatea.",
      "fullDocument": "Document complet",
      "specification": "Specificație",
      "statusLabel": "Stare",
      "statusValue": "Proiect",
      "versionLabel": "Versiune",
      "markLabel": "Marcă canonică",
      "contents": "Cuprins",
      "footerLine": "Notație deschisă. Responsabilitate umană.",
      "versionFooter": "Specificație v0.1",
      "translationNote": "Aceasta este o traducere informativă. În caz de divergențe, textul original în limba engleză este documentul normativ.",
      "colourChanged": "Culoarea de accent a fost schimbată în {colour}."
    },
    untranslatedNotice: {
      "badge": "Netradus",
      "headline": "Specificația de mai jos este afișată în limba engleză.",
      "detail": "Această limbă nu a fost încă tradusă. Textul în limba engleză este versiunea normativă în toate cazurile."
    },
    endonym: "Română",
    sections: [
      {
        number: "1",
        title: "Scop",
        body: `
            <p>Notația <code>+AI</code> oferă o metodă compactă de a indica faptul că un artefact a beneficiat de asistență substanțială din partea inteligenței artificiale, identificând totodată o persoană sau o organizație care își asumă răspunderea pentru artefactul rezultat.</p>
            <p>Expresia canonică este:</p>
            <p class="canonical"><code>&lt;Partea responsabilă&gt; +AI</code></p>
            <p>Exemplu:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Sensul fundamental este:</p>
            <p class="canonical">IA a ajutat. Îmi asum răspunderea.</p>`
      },
      {
        number: "2",
        title: "Principiul de concepție",
        body: `
            <p><code>+AI</code> nu încearcă să stabilească dacă un artefact este „creat de om” sau „creat de IA”.</p>
            <p>Artefactele contemporane pot trece în mod repetat, în timpul creării lor, între oameni și sisteme de inteligență artificială.</p>
            <p>În schimb, <code>+AI</code> comunică două fapte:</p>
            <ol>
              <li>inteligența artificială a asistat substanțial lucrarea; și</li>
              <li>o persoană sau o organizație identificabilă își asumă răspunderea pentru artefactul rezultat.</li>
            </ol>
            <p>Prin urmare, standardul privește <strong>participarea IA și răspunderea umană</strong>, nu paternitatea exclusivă.</p>`
      },
      {
        number: "3",
        title: "Terminologie normativă",
        body: `
            <p>Termenii <strong>TREBUIE (MUST)</strong>, <strong>NU TREBUIE (MUST NOT)</strong>, <strong>AR TREBUI (SHOULD)</strong>, <strong>NU AR TREBUI (SHOULD NOT)</strong> și <strong>POATE (MAY)</strong> exprimă cerințe normative în cadrul prezentei specificații.</p>
            <p><strong>TREBUIE</strong> indică o cerință absolută.</p>
            <p><strong>NU TREBUIE</strong> indică o interdicție absolută.</p>
            <p><strong>AR TREBUI</strong> indică o recomandare puternică de la care se poate abate atunci când există un motiv legitim.</p>
            <p><strong>NU AR TREBUI</strong> indică o practică evitată în mod normal, dar posibil justificată în anumite împrejurări.</p>
            <p><strong>POATE</strong> indică o practică opțională.</p>`
      },
      {
        number: "4",
        title: "Notația canonică",
        body: `
            <p>Marca canonică este:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Forma canonică lizibilă de om este:</p>
            <p><strong><code>&lt;Partea responsabilă&gt; +AI</code></strong></p>
            <p>Exemple:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Marca este sensibilă la diferența dintre majuscule și minuscule.</p>
            <p>Forma canonică TREBUIE să folosească:</p>
            <ul>
              <li>un semn plus <code>+</code>;</li>
              <li>urmat imediat de caracterele latine majuscule <code>AI</code>;</li>
              <li>fără spații interioare.</li>
            </ul>
            <p>Prin urmare, <code>+AI</code> este canonică.</p>
            <p>Următoarele nu sunt echivalente canonice:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Variante POT fi definite ulterior prin extensii ale prezentei specificații, însă NU TREBUIE presupus că ele transmit sensul canonic al mărcii <code>+AI</code> decât dacă acest lucru este definit explicit.</p>`
      },
      {
        number: "5",
        title: "Semnificația mărcii",
        body: `
            <p>O parte responsabilă care folosește <code>+AI</code> declară că:</p>
            <h4>5.1 Participarea IA</h4>
            <p>Inteligența artificială a asistat substanțial la crearea, analizarea, transformarea, generarea, evaluarea, structurarea sau prezentarea artefactului asociat.</p>
            <h4>5.2 Cunoașterea</h4>
            <p>Partea responsabilă știe sau consideră în mod rezonabil că a avut loc o asistență substanțială din partea IA.</p>
            <h4>5.3 Autoritatea</h4>
            <p>Partea responsabilă a autorizat, a inițiat, a coordonat sau a adoptat în cunoștință de cauză utilizarea respectivă a inteligenței artificiale.</p>
            <h4>5.4 Controlul uman sau organizațional</h4>
            <p>Partea responsabilă a păstrat autoritatea de a decide dacă artefactul urma să fie publicat, transmis, implementat, depus, prezentat sau difuzat în alt mod.</p>
            <h4>5.5 Însușirea</h4>
            <p>Partea responsabilă acceptă artefactul în forma în care acesta este prezentat.</p>
            <h4>5.6 Răspunderea</h4>
            <p>Partea responsabilă își asumă răspunderea pentru decizia de a difuza, de a folosi sau de a prezenta artefactul.</p>
            <p>Aceste elemente constituie împreună declarația <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Asistență substanțială",
        body: `
            <p>Marca AR TREBUI folosită atunci când participarea IA a influențat substanțial artefactul rezultat.</p>
            <p>Asistența substanțială poate include contribuția IA la:</p>
            <ul>
              <li>redactare;</li><li>raționament;</li><li>analiză;</li><li>recomandări;</li>
              <li>sinteza documentării;</li><li>codul programelor;</li><li>interpretarea datelor;</li>
              <li>proiectare;</li><li>imagini;</li><li>conținut audio;</li><li>conținut video;</li>
              <li>traducere, atunci când intervine o interpretare de fond;</li><li>planificare;</li>
              <li>sprijinirea deciziei;</li><li>lucrări matematice sau tehnice;</li>
              <li>editare care schimbă substanțial sensul;</li>
              <li>sau altă activitate intelectuală ori creativă de fond.</li>
            </ul>
            <p>O funcție de IA incidentală ori pur mecanică nu impune neapărat folosirea mărcii <code>+AI</code>.</p>
            <p>Exemplele pot include corectarea ortografică automată, completarea automată elementară, formatarea de rutină sau alte funcții care nu afectează substanțial fondul unui artefact.</p>
            <p>Întrebarea determinantă nu este ce procent din conținut a fost produs de IA.</p>
            <p>Întrebarea determinantă este:</p>
            <blockquote><strong>A influențat IA în mod substanțial artefactul prezentat?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Responsabilitatea",
        body: `
            <p>Responsabilitatea este trăsătura definitorie a mărcii <code>+AI</code>.</p>
            <p>Prin folosirea mărcii, partea responsabilă nu transferă responsabilitatea către un sistem, model, furnizor, agent sau instrument de inteligență artificială.</p>
            <p>O afirmație echivalentă cu:</p>
            <blockquote>„IA a generat acest lucru, deci eu nu răspund pentru el.”</blockquote>
            <p>este incompatibilă cu sensul urmărit al mărcii <code>+AI</code>.</p>
            <p>Partea responsabilă POATE să se sprijine puternic pe asistența IA.</p>
            <p>Partea responsabilă POATE publica un conținut generat substanțial de IA.</p>
            <p>Partea responsabilă POATE accepta sugestii pe care nu le-ar fi putut produce în mod independent.</p>
            <p>Niciuna dintre aceste situații nu împiedică folosirea mărcii <code>+AI</code>, cu condiția ca partea responsabilă să își însușească în cunoștință de cauză artefactul rezultat și să își asume responsabilitatea pentru difuzarea lui.</p>`
      },
      {
        number: "8",
        title: "Ce nu înseamnă +AI",
        body: `
            <p>Dacă o declarație suplimentară nu prevede explicit altfel, <code>+AI</code> NU afirmă că:</p>
            <ul>
              <li>artefactul este lipsit de erori;</li>
              <li>fiecare afirmație factuală a fost verificată independent;</li>
              <li>fiecare citare a fost controlată independent;</li>
              <li>artefactul îndeplinește un anumit standard profesional;</li>
              <li>artefactul este corect din punct de vedere juridic;</li>
              <li>artefactul este corect din punct de vedere medical;</li>
              <li>artefactul este sigur pentru un anumit scop;</li>
              <li>artefactul nu conține halucinații;</li>
              <li>partea responsabilă a scris personal fiecare componentă;</li>
              <li>IA a generat cea mai mare parte a artefactului;</li>
              <li>IA a generat doar o mică parte a artefactului;</li>
              <li>artefactul este original;</li>
              <li>nu este prezentă nicio proprietate intelectuală a unui terț;</li>
              <li>nu au fost furnizate informații confidențiale unui sistem de IA;</li>
              <li>a fost folosit un anumit furnizor, model sau sistem de IA;</li>
              <li>partea responsabilă este de acord cu fiecare rezultat intermediar al IA;</li>
              <li>sau partea responsabilă poate reproduce ori explica raționamentul interior al sistemului de IA.</li>
            </ul>
            <p><code>+AI</code> este o <strong>declarație de răspundere</strong>, nu o garanție de corectitudine.</p>`
      },
      {
        number: "9",
        title: "Verificarea umană",
        body: `
            <p>Versiunea 0.1 nu cere ca fiecare componentă a unui artefact să fie verificată manual cuvânt cu cuvânt sau element cu element.</p>
            <p>Partea responsabilă TREBUIE însă să accepte în cunoștință de cauză artefactul care este difuzat.</p>
            <p>Transmiterea orbească sau automată a unui rezultat al IA neverificat NU AR TREBUI reprezentată prin <code>+AI</code> atunci când nu a avut loc niciun act uman semnificativ de însușire.</p>
            <p>Versiunile viitoare ale prezentei specificații POT defini mărci de asigurare mai puternice, care să reprezinte o verificare completă sau o validare independentă.</p>`
      },
      {
        number: "10",
        title: "Persoane fizice",
        body: `
            <p>O persoană fizică POATE aplica notația după numele său.</p>
            <p>Exemplu:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Aceasta înseamnă:</p>
            <blockquote>Inteligența artificială a asistat substanțial lucrarea asociată, iar Eric Mourant își asumă răspunderea pentru difuzarea acelei lucrări.</blockquote>
            <p>Marca se referă la artefactul sau la comunicarea asociată.</p>
            <p>Ea nu înseamnă neapărat că fiecare activitate desfășurată de acea persoană folosește inteligență artificială.</p>`
      },
      {
        number: "11",
        title: "Organizații",
        body: `
            <p>O organizație POATE folosi <code>+AI</code>.</p>
            <p data-company-example>Exemplu:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Aceasta înseamnă că organizația își asumă răspunderea pentru artefactul asociat, realizat cu asistența IA, potrivit structurilor sale aplicabile de guvernanță și de autoritate.</p>
            <p>Atunci când este util, POT fi identificate atât organizația, cât și persoana responsabilă.</p>
            <p data-company-example>Exemplu:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "E-mail și mesagerie",
        body: `
            <p>În comunicarea personală, forma de prezentare preferată este:</p>
            <p><strong>Cu cele mai bune gânduri,<br>Eric Mourant +AI</strong></p>
            <p>Marca POATE fi legată printr-un hiperlink către o explicație canonică a semnificației sale.</p>
            <p>Un hiperlink NU TREBUIE să modifice notația vizibilă.</p>
            <p>Textul simplu TREBUIE să rămână suficient pentru a exprima declarația.</p>`
      },
      {
        number: "13",
        title: "Documente",
        body: `
            <p>Notația POATE apărea într-un câmp destinat autorului, celui care a întocmit documentul, celui care l-a verificat sau părții responsabile.</p>
            <p>Exemple:</p>
            <p><strong>Autor: Eric Mourant +AI</strong></p>
            <p><strong>Întocmit de: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Emis de: JAPER Technology +AI</strong></p>
            <p>Amplasarea AR TREBUI să indice clar persoana sau organizația care își asumă răspunderea.</p>`
      },
      {
        number: "14",
        title: "Programe informatice",
        body: `
            <p>Notația POATE fi folosită în depozite de cod, în commituri, în anteturi de cod-sursă, în documentație, în notele de versiune și în artefactele generate.</p>
            <p>Exemplu:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Un proiect POATE declara suplimentar:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>O astfel de declarație la nivel de proiect AR TREBUI să identifice, atunci când este posibil, persoana sau organizația responsabilă.</p>`
      },
      {
        number: "15",
        title: "Artefacte creative",
        body: `
            <p>Notația POATE însoți imagini, conținut audio, conținut video, proiecte, ilustrații, prezentări și alte opere creative.</p>
            <p>Exemplu:</p>
            <p><strong>Creat de Eric Mourant +AI</strong></p>
            <p>Marca nu precizează, în sine, care elemente au fost generate sau modificate de IA.</p>
            <p>Metadate de proveniență mai detaliate POT fi asociate separat.</p>`
      },
      {
        number: "16",
        title: "Cercetare și lucrări tehnice",
        body: `
            <p>Marca POATE fi folosită în lucrări de cercetare, științifice, inginerești sau tehnice, atunci când cerințele instituționale, editoriale ori profesionale aplicabile permit acest lucru.</p>
            <p>Marca <code>+AI</code> NU TREBUIE prezentată ca înlocuind o divulgare mai specifică impusă de un editor, de o autoritate de reglementare, de un angajator, de un organism profesional sau de lege.</p>
            <p>Notația POATE completa o astfel de divulgare.</p>`
      },
      {
        number: "17",
        title: "Reprezentare lizibilă de mașină",
        body: `
            <p>Sistemele POT reprezenta declarația prin metadate structurate.</p>
            <p>O reprezentare minimală este:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>O reprezentare mai bogată este:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Formele lizibile de mașină AR TREBUI să păstreze aceeași semnificație semantică precum notația vizibilă.</p>`
      },
      {
        number: "18",
        title: "Persistență",
        body: `
            <p>Notația <code>+AI</code> AR TREBUI să supraviețuiască transformărilor rezonabile ale unui artefact, atunci când atribuirea este păstrată.</p>
            <p>Exemplele includ conversia între formate de documente, arhivarea, tipărirea, exportul, republicarea și transmiterea.</p>
            <p>Atunci când metadatele sunt înlăturate, marca vizibilă în text simplu AR TREBUI să rămână suficientă pentru a comunica declarația.</p>`
      },
      {
        number: "19",
        title: "Utilizare liberă",
        body: `
            <p>Notația <code>+AI</code> este destinată utilizării publice nerestricționate.</p>
            <p>Folosirea notației NU AR TREBUI să necesite:</p>
            <ul>
              <li>înregistrare;</li><li>calitatea de membru;</li><li>plată;</li><li>certificare;</li>
              <li>aprobare;</li><li>sau folosirea unui anumit produs ori furnizor de IA.</li>
            </ul>
            <p>Utilitatea notației depinde de capacitatea sa de a funcționa ca o convenție universală.</p>`
      },
      {
        number: "20",
        title: "Neutralitate",
        body: `
            <p>Marca <code>+AI</code> nu exprimă aprobarea sau dezaprobarea inteligenței artificiale.</p>
            <p>Ea nu arată dacă folosirea IA a fost necesară, dezirabilă ori superioară unei munci omenești neasistate.</p>
            <p>Ea consemnează numai participarea substanțială a IA și răspunderea umană sau organizațională.</p>`
      },
      {
        number: "21",
        title: "Prezentare înșelătoare",
        body: `
            <p>O persoană sau o organizație NU AR TREBUI să folosească <code>+AI</code> atunci când:</p>
            <ul>
              <li>nu există o parte responsabilă identificabilă;</li>
              <li>partea numită nu și-a însușit artefactul;</li>
              <li>artefactul este emis automat, fără o autoritate umană semnificativă;</li>
              <li>sau notația este folosită pentru a crea o impresie falsă de răspundere umană.</li>
            </ul>
            <p>Rezultatul autonom al IA, fără o însușire umană semnificativă, se află în afara domeniului canonic al mărcii <code>+AI</code>.</p>
            <p>Specificațiile viitoare POT defini o notație pentru rezultatele autonome ale IA.</p>`
      },
      {
        number: "22",
        title: "Raportul cu paternitatea",
        body: `
            <p>Marca <code>+AI</code> nu atribuie în mod deliberat niciun procent de paternitate.</p>
            <p>Un artefact POATE conține preponderent material de origine umană și tot să se încadreze.</p>
            <p>Un artefact POATE conține preponderent material de origine IA și tot să se încadreze.</p>
            <p>Criteriul relevant este dacă:</p>
            <p><strong>IA a asistat substanțial, iar partea numită își asumă răspunderea pentru rezultat.</strong></p>`
      },
      {
        number: "23",
        title: "Explicația publică canonică",
        body: `
            <p>Atunci când este necesară o explicație scurtă, formularea preferată este:</p>
            <p class="canonical">IA a ajutat. Îmi asum răspunderea.</p>
            <p>Atunci când este necesară o explicație mai amplă:</p>
            <blockquote><strong><code>+AI</code> înseamnă că inteligența artificială a asistat substanțial această lucrare și că persoana sau organizația numită își asumă răspunderea pentru artefactul rezultat.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Testul +AI",
        body: `
            <p>Înainte de a aplica marca, o persoană ar trebui să poată răspunde <strong>da</strong> la ambele întrebări:</p>
            <p><strong>A ajutat IA în mod substanțial la realizarea acestui lucru?</strong></p>
            <p><strong>Sunt dispus să îmi asum răspunderea pentru difuzarea lui?</strong></p>
            <p>Dacă ambele răspunsuri sunt afirmative:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Extensii viitoare",
        body: `
            <p>Versiunile viitoare POT defini notații suplimentare care să privească:</p>
            <ul>
              <li>asistența minoră a IA;</li><li>generarea preponderent de către IA;</li><li>verificarea umană completă;</li>
              <li>validarea independentă;</li><li>activitatea agenților autonomi;</li>
              <li>proveniența criptografică;</li><li>identificarea sistemului de IA;</li>
              <li>identificarea modelului;</li><li>sau lanțurile de contribuții umane și automate.</li>
            </ul>
            <p>Astfel de extensii AR TREBUI să păstreze <code>+AI</code> ca marcă canonică simplă pentru:</p>
            <p class="canonical">Lucrare realizată cu asistența IA, cu răspundere umană identificabilă.</p>`
      },
      {
        number: "26",
        title: "Declarația canonică",
        body: `
            <p>O persoană sau o organizație care aplică <code>+AI</code> face următoarea declarație:</p>
            <blockquote><strong>Inteligența artificială a asistat substanțial această lucrare. Am ales să accept, să public, să transmit, să implementez sau să difuzez în alt mod lucrarea rezultată și îmi asum răspunderea pentru această decizie, precum și pentru lucrarea așa cum este prezentată.</strong></blockquote>
            <p>Forma publică prescurtată este:</p>
            <p class="canonical">IA a ajutat. Îmi asum răspunderea.</p>
            <p>Marca canonică este:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Specificația +AI v0.1</p><p>Proveniență om-IA și răspundere</p><strong>IA a ajutat. Îmi asum răspunderea.</strong>"
  });
})(window.PlusAISpecTranslations);
