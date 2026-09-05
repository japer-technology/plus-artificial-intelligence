/*!
 * +AI Specification — Polish (pl)
 * Status: reviewed translation.
 * Interface chrome: AI-generated, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → MUSI
 *   MUST NOT   → NIE MOŻE
 *   SHOULD     → POWINIEN
 *   SHOULD NOT → NIE POWINIEN
 *   MAY        → MOŻE
 *
 * The Polish renderings are inflected for grammatical agreement only
 * (e.g. MUSI / MUSZĄ, MOŻE / MOGĄ, POWINIEN / POWINNA / POWINNO / POWINNY);
 * the lexical choice above is never varied for stylistic reasons.
 *
 * Canonical slogan: "SI pomogła. Biorę odpowiedzialność." (used verbatim in
 * sections 1, 23, 26 and the closing panel). "sztuczna inteligencja" is
 * abbreviated "SI" only in that slogan and the closing panel.
 */
(function (registry) {
  registry.register("pl", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = SI pomogła. Biorę odpowiedzialność.",
      "description": "+AI oznacza, że sztuczna inteligencja w istotny sposób wspomogła pracę, a wskazana osoba lub organizacja przyjmuje za nią odpowiedzialność.",
      "skip": "Przejdź do wyjaśnienia",
      "language": "Język",
      "languageAria": "Wybierz język",
      "theme": "Tryb ciemny",
      "themeDark": "Tryb ciemny",
      "themeLight": "Tryb jasny",
      "themeDarkAria": "Użyj trybu ciemnego",
      "themeLightAria": "Użyj trybu jasnego",
      "highlight": "Kolor akcentu",
      "highlightAria": "Wybierz losowy kolor akcentu",
      "followedLink": "Opis postnominalu +AI",
      "heroTitle": "SI pomogła. Biorę odpowiedzialność.",
      "heroLead": "Osoba lub organizacja, której imię opatrzono tym linkiem, składa proste oświadczenie: <strong>sztuczna inteligencja w istotny sposób wspomogła pracę, a strona ta przyjmuje odpowiedzialność za jej opublikowanie.</strong>",
      "readSpec": "Przeczytaj specyfikację",
      "meansHeading": "Co mówi ten znak",
      "meaningOneTitle": "SI brała udział",
      "meaningOneBody": "SI w istotny sposób pomogła stworzyć, przeanalizować, przekształcić lub zaprezentować pracę.",
      "meaningTwoTitle": "Wybrał człowiek",
      "meaningTwoBody": "Osoba lub organizacja świadomie przyjęła i opublikowała wynik.",
      "meaningThreeTitle": "Odpowiedzialność pozostaje po stronie człowieka",
      "meaningThreeBody": "Wskazana strona nie przenosi rozliczalności na system SI ani jego dostawcę.",
      "plainTitle": "Przejrzysta pomoc. Widoczna rozliczalność.",
      "plainLead": "Znak jest deklaracją rozliczalności, a nie twierdzeniem, że SI jest autorem, ani gwarancją, że praca jest poprawna.",
      "plainBody": "Nie mówi, jaka część pracy pochodzi od SI. Mówi, że SI istotnie wpłynęła na wynik i że identyfikowalna osoba lub organizacja stoi za decyzją o jej użyciu.",
      "plainQuote": "Trzy znaki czynią widocznymi zarówno udział, jak i odpowiedzialność.",
      "fullDocument": "Pełny dokument",
      "specification": "Specyfikacja",
      "statusLabel": "Status",
      "statusValue": "Projekt",
      "versionLabel": "Wersja",
      "markLabel": "Znak kanoniczny",
      "contents": "Spis treści",
      "footerLine": "Otwarta notacja. Ludzka odpowiedzialność.",
      "versionFooter": "Specyfikacja v0.1",
      "translationNote": "To tłumaczenie ma charakter informacyjny. W razie rozbieżności dokumentem normatywnym jest oryginalny tekst angielski.",
      "colourChanged": "Kolor akcentu zmieniono na {colour}."
    },
    untranslatedNotice: {
      "badge": "Nieprzetłumaczone",
      "headline": "Poniższa specyfikacja jest wyświetlana w języku angielskim.",
      "detail": "Ten język nie został jeszcze przetłumaczony. We wszystkich przypadkach wersją normatywną jest tekst angielski."
    },
    endonym: "Polski",
    sections: [
      {
        number: "1",
        title: "Cel",
        body: `
            <p>Notacja <code>+AI</code> stanowi zwięzłą metodę oznaczania, że dany wytwór powstał przy istotnym udziale sztucznej inteligencji, a jednocześnie wskazania osoby lub organizacji, która przyjmuje odpowiedzialność za powstały wytwór.</p>
            <p>Wyrażenie kanoniczne ma postać:</p>
            <p class="canonical"><code>&lt;Strona odpowiedzialna&gt; +AI</code></p>
            <p>Przykład:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Znaczenie podstawowe jest następujące:</p>
            <p class="canonical">SI pomogła. Biorę odpowiedzialność.</p>`
      },
      {
        number: "2",
        title: "Założenie projektowe",
        body: `
            <p>Notacja <code>+AI</code> nie służy do ustalania, czy wytwór został „stworzony przez człowieka”, czy „stworzony przez sztuczną inteligencję”.</p>
            <p>Współczesne wytwory mogą w trakcie powstawania wielokrotnie przechodzić między człowiekiem a systemami sztucznej inteligencji.</p>
            <p>Zamiast tego <code>+AI</code> komunikuje dwa fakty:</p>
            <ol>
              <li>sztuczna inteligencja w istotny sposób wspomogła powstanie pracy; oraz</li>
              <li>możliwa do zidentyfikowania osoba lub organizacja przyjmuje odpowiedzialność za powstały wytwór.</li>
            </ol>
            <p>Niniejszy standard dotyczy zatem <strong>udziału sztucznej inteligencji i rozliczalności człowieka</strong>, a nie wyłącznego autorstwa.</p>`
      },
      {
        number: "3",
        title: "Terminologia normatywna",
        body: `
            <p>Terminy <strong>MUSI (MUST)</strong>, <strong>NIE MOŻE (MUST NOT)</strong>, <strong>POWINIEN (SHOULD)</strong>, <strong>NIE POWINIEN (SHOULD NOT)</strong> oraz <strong>MOŻE (MAY)</strong> wyrażają wymagania normatywne niniejszej specyfikacji.</p>
            <p><strong>MUSI</strong> oznacza wymóg bezwzględny.</p>
            <p><strong>NIE MOŻE</strong> oznacza zakaz bezwzględny.</p>
            <p><strong>POWINIEN</strong> oznacza zdecydowane zalecenie, od którego wolno odstąpić, gdy istnieje uzasadniony powód.</p>
            <p><strong>NIE POWINIEN</strong> oznacza praktykę, której zwykle się unika, lecz która w szczególnych okolicznościach może być uzasadniona.</p>
            <p><strong>MOŻE</strong> oznacza praktykę fakultatywną.</p>`
      },
      {
        number: "4",
        title: "Notacja kanoniczna",
        body: `
            <p>Znak kanoniczny ma postać:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Kanoniczna postać czytelna dla człowieka ma brzmienie:</p>
            <p><strong><code>&lt;Strona odpowiedzialna&gt; +AI</code></strong></p>
            <p>Przykłady:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Znak jest wrażliwy na wielkość liter.</p>
            <p>Postać kanoniczna MUSI zawierać:</p>
            <ul>
              <li>znak plus <code>+</code>;</li>
              <li>bezpośrednio po nim wielkie litery łacińskie <code>AI</code>;</li>
              <li>bez żadnych znaków odstępu wewnątrz.</li>
            </ul>
            <p>Kanoniczny jest zatem zapis <code>+AI</code>.</p>
            <p>Poniższe zapisy nie są kanonicznymi odpowiednikami:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Warianty MOGĄ zostać w przyszłości zdefiniowane w rozszerzeniach niniejszej specyfikacji, jednak NIE MOGĄ być uznawane za noszące kanoniczne znaczenie <code>+AI</code>, o ile nie zostanie to wyraźnie określone.</p>`
      },
      {
        number: "5",
        title: "Znaczenie znaku",
        body: `
            <p>Strona odpowiedzialna, która stosuje <code>+AI</code>, oświadcza, że:</p>
            <h4>5.1 Udział sztucznej inteligencji</h4>
            <p>Sztuczna inteligencja w istotny sposób wspomogła tworzenie, analizowanie, przekształcanie, generowanie, ocenianie, strukturyzowanie lub prezentowanie powiązanego wytworu.</p>
            <h4>5.2 Wiedza</h4>
            <p>Strona odpowiedzialna wie lub ma uzasadnione podstawy sądzić, że doszło do istotnego udziału sztucznej inteligencji.</p>
            <h4>5.3 Umocowanie</h4>
            <p>Strona odpowiedzialna zezwoliła na dane wykorzystanie sztucznej inteligencji, zainicjowała je, kierowała nim lub świadomie je przyjęła.</p>
            <h4>5.4 Kontrola człowieka lub organizacji</h4>
            <p>Strona odpowiedzialna zachowała władzę rozstrzygania o tym, czy wytwór zostanie opublikowany, przekazany, wdrożony, złożony, przedstawiony lub w inny sposób udostępniony.</p>
            <h4>5.5 Przyjęcie</h4>
            <p>Strona odpowiedzialna przyjmuje wytwór w postaci, w jakiej jest on przedstawiany.</p>
            <h4>5.6 Odpowiedzialność</h4>
            <p>Strona odpowiedzialna przyjmuje odpowiedzialność za decyzję o udostępnieniu, wykorzystaniu lub przedstawieniu wytworu.</p>
            <p>Elementy te łącznie stanowią oświadczenie <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Istotne wspomożenie",
        body: `
            <p>Znak POWINIEN być stosowany wtedy, gdy udział sztucznej inteligencji w istotny sposób wpłynął na powstały wytwór.</p>
            <p>Istotne wspomożenie może obejmować wkład sztucznej inteligencji w:</p>
            <ul>
              <li>pisanie;</li><li>rozumowanie;</li><li>analizę;</li><li>zalecenia;</li>
              <li>syntezę wyników badań;</li><li>kod oprogramowania;</li><li>interpretację danych;</li>
              <li>projektowanie;</li><li>obrazy;</li><li>dźwięk;</li><li>materiały wideo;</li>
              <li>tłumaczenie, w którym dochodzi do merytorycznej interpretacji;</li><li>planowanie;</li>
              <li>wspieranie decyzji;</li><li>pracę matematyczną lub techniczną;</li>
              <li>redakcję, która w istotny sposób zmienia znaczenie;</li>
              <li>lub inną merytoryczną pracę intelektualną albo twórczą.</li>
            </ul>
            <p>Uboczne lub czysto mechaniczne funkcje sztucznej inteligencji nie wymagają koniecznie zastosowania <code>+AI</code>.</p>
            <p>Do przykładów mogą należeć automatyczna korekta pisowni, proste uzupełnianie tekstu, rutynowe formatowanie oraz inne funkcje, które nie wpływają w istotny sposób na treść wytworu.</p>
            <p>Rozstrzygające nie jest to, jaki odsetek treści wytworzyła sztuczna inteligencja.</p>
            <p>Rozstrzygające jest pytanie:</p>
            <blockquote><strong>Czy sztuczna inteligencja w istotny sposób wpłynęła na przedstawiany wytwór?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Odpowiedzialność",
        body: `
            <p>Odpowiedzialność jest właściwością rozstrzygającą o istocie <code>+AI</code>.</p>
            <p>Stosując znak, strona odpowiedzialna nie przenosi odpowiedzialności na system, model, dostawcę, agenta ani narzędzie sztucznej inteligencji.</p>
            <p>Twierdzenie równoznaczne ze zdaniem:</p>
            <blockquote>„To wygenerowała sztuczna inteligencja, więc ja za to nie odpowiadam”.</blockquote>
            <p>jest niezgodne z zamierzonym znaczeniem <code>+AI</code>.</p>
            <p>Strona odpowiedzialna MOŻE w znacznym stopniu opierać się na wspomożeniu przez sztuczną inteligencję.</p>
            <p>Strona odpowiedzialna MOŻE publikować treści wygenerowane w istotnej części przez sztuczną inteligencję.</p>
            <p>Strona odpowiedzialna MOŻE przyjmować propozycje, których nie byłaby w stanie wytworzyć samodzielnie.</p>
            <p>Żadna z tych okoliczności nie wyłącza możliwości zastosowania <code>+AI</code>, pod warunkiem że strona odpowiedzialna świadomie przyjmuje powstały wytwór i przyjmuje odpowiedzialność za jego udostępnienie.</p>`
      },
      {
        number: "8",
        title: "Czego +AI nie oznacza",
        body: `
            <p>O ile dodatkowe oświadczenie wyraźnie nie stanowi inaczej, <code>+AI</code> NIE stwierdza, że:</p>
            <ul>
              <li>wytwór jest wolny od błędów;</li>
              <li>każde twierdzenie o faktach zostało niezależnie zweryfikowane;</li>
              <li>każdy przypis źródłowy został niezależnie sprawdzony;</li>
              <li>wytwór spełnia jakikolwiek określony standard zawodowy;</li>
              <li>wytwór jest poprawny pod względem prawnym;</li>
              <li>wytwór jest poprawny pod względem medycznym;</li>
              <li>wytwór jest bezpieczny dla jakiegokolwiek określonego celu;</li>
              <li>wytwór nie zawiera konfabulacji;</li>
              <li>strona odpowiedzialna osobiście napisała każdy jego element;</li>
              <li>sztuczna inteligencja wytworzyła większą część wytworu;</li>
              <li>sztuczna inteligencja wytworzyła jedynie mniejszą część wytworu;</li>
              <li>wytwór jest oryginalny;</li>
              <li>nie występuje w nim własność intelektualna osób trzecich;</li>
              <li>informacje poufne nie zostały przekazane systemowi sztucznej inteligencji;</li>
              <li>wykorzystano określonego dostawcę, model lub system sztucznej inteligencji;</li>
              <li>strona odpowiedzialna zgadza się z każdym pośrednim wynikiem pracy sztucznej inteligencji;</li>
              <li>lub że strona odpowiedzialna jest w stanie odtworzyć albo wyjaśnić wewnętrzne rozumowanie systemu sztucznej inteligencji.</li>
            </ul>
            <p>Notacja <code>+AI</code> jest <strong>oświadczeniem o rozliczalności</strong>, a nie gwarancją poprawności.</p>`
      },
      {
        number: "9",
        title: "Weryfikacja przez człowieka",
        body: `
            <p>Wersja 0.1 nie wymaga, aby każdy element wytworu został ręcznie sprawdzony słowo po słowie ani element po elemencie.</p>
            <p>Strona odpowiedzialna MUSI jednak świadomie przyjąć udostępniany wytwór.</p>
            <p>Bezrefleksyjne lub automatyczne przekazywanie niesprawdzonych wyników pracy sztucznej inteligencji NIE POWINNO być oznaczane za pomocą <code>+AI</code>, jeżeli nie doszło do rzeczywistego aktu przyjęcia przez człowieka.</p>
            <p>Przyszłe wersje niniejszej specyfikacji MOGĄ zdefiniować mocniejsze znaki poświadczające, wyrażające pełną weryfikację lub niezależne sprawdzenie.</p>`
      },
      {
        number: "10",
        title: "Osoby fizyczne",
        body: `
            <p>Osoba fizyczna MOŻE umieścić notację po swoim imieniu i nazwisku.</p>
            <p>Przykład:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Oznacza to, że:</p>
            <blockquote>Sztuczna inteligencja w istotny sposób wspomogła powiązaną pracę, a Eric Mourant przyjmuje odpowiedzialność za jej udostępnienie.</blockquote>
            <p>Znak odnosi się do powiązanego wytworu lub przekazu.</p>
            <p>Nie oznacza on koniecznie, że każde działanie podejmowane przez tę osobę wykorzystuje sztuczną inteligencję.</p>`
      },
      {
        number: "11",
        title: "Organizacje",
        body: `
            <p>Organizacja MOŻE stosować <code>+AI</code>.</p>
            <p data-company-example>Przykład:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Oznacza to, że organizacja przyjmuje odpowiedzialność za powiązany wytwór powstały przy udziale sztucznej inteligencji, zgodnie z właściwymi dla niej strukturami zarządczymi i zakresami umocowania.</p>
            <p>Gdy jest to przydatne, MOGĄ zostać wskazane zarówno organizacja, jak i odpowiedzialna osoba fizyczna.</p>
            <p data-company-example>Przykład:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Poczta elektroniczna i komunikatory",
        body: `
            <p>W korespondencji osobistej zalecana jest następująca postać:</p>
            <p><strong>Z serdecznymi pozdrowieniami,<br>Eric Mourant +AI</strong></p>
            <p>Znak MOŻE być powiązany hiperłączem z kanonicznym wyjaśnieniem jego znaczenia.</p>
            <p>Hiperłącze NIE MOŻE zmieniać widocznego zapisu notacji.</p>
            <p>Zwykły tekst MUSI pozostać wystarczający do wyrażenia oświadczenia.</p>`
      },
      {
        number: "13",
        title: "Dokumenty",
        body: `
            <p>Notacja MOŻE występować w polu autora, sporządzającego, sprawdzającego lub strony odpowiedzialnej.</p>
            <p>Przykłady:</p>
            <p><strong>Autor: Eric Mourant +AI</strong></p>
            <p><strong>Sporządził: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Wydał: JAPER Technology +AI</strong></p>
            <p>Umiejscowienie notacji POWINNO jasno wskazywać, która osoba lub organizacja przyjmuje odpowiedzialność.</p>`
      },
      {
        number: "14",
        title: "Oprogramowanie",
        body: `
            <p>Notacja MOŻE być stosowana w repozytoriach oprogramowania, commitach, nagłówkach kodu źródłowego, dokumentacji, informacjach o wydaniu oraz w wytworach generowanych.</p>
            <p>Przykład:</p>
            <pre><code>Autor: Eric Mourant +AI</code></pre>
            <p>Projekt MOŻE dodatkowo zadeklarować:</p>
            <pre><code>Ten projekt korzysta z +AI.</code></pre>
            <p>Takie oświadczenie na poziomie projektu POWINNO wskazywać odpowiedzialną osobę lub organizację, jeżeli jest to praktycznie możliwe.</p>`
      },
      {
        number: "15",
        title: "Wytwory twórcze",
        body: `
            <p>Notacja MOŻE towarzyszyć obrazom, nagraniom dźwiękowym, materiałom wideo, projektom, ilustracjom, prezentacjom oraz innym utworom twórczym.</p>
            <p>Przykład:</p>
            <p><strong>Wykonał: Eric Mourant +AI</strong></p>
            <p>Sam znak nie określa, które elementy zostały wygenerowane lub zmienione przez sztuczną inteligencję.</p>
            <p>Bardziej szczegółowe metadane o pochodzeniu MOGĄ być dołączone oddzielnie.</p>`
      },
      {
        number: "16",
        title: "Praca badawcza i techniczna",
        body: `
            <p>Znak MOŻE być stosowany w pracy badawczej, naukowej, inżynierskiej lub technicznej w zakresie dopuszczonym przez właściwe wymagania instytucjonalne, wydawnicze lub zawodowe.</p>
            <p>Notacja <code>+AI</code> NIE MOŻE być przedstawiana jako zastępująca jakiekolwiek bardziej szczegółowe ujawnienie wymagane przez wydawcę, organ regulacyjny, pracodawcę, samorząd zawodowy lub przepisy prawa.</p>
            <p>Notacja MOŻE uzupełniać takie ujawnienie.</p>`
      },
      {
        number: "17",
        title: "Reprezentacja odczytywalna maszynowo",
        body: `
            <p>Systemy MOGĄ przedstawiać oświadczenie przy użyciu ustrukturyzowanych metadanych.</p>
            <p>Reprezentacja minimalna ma postać:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Reprezentacja bogatsza ma postać:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Postacie odczytywalne maszynowo POWINNY zachowywać to samo znaczenie semantyczne co widoczna notacja.</p>`
      },
      {
        number: "18",
        title: "Trwałość",
        body: `
            <p>Notacja <code>+AI</code> POWINNA przetrwać rozsądne przekształcenia wytworu, przy których zachowane jest oznaczenie autorstwa.</p>
            <p>Do przykładów należą konwersja między formatami dokumentów, archiwizacja, druk, eksport, ponowna publikacja i przekazywanie.</p>
            <p>Gdy metadane zostaną usunięte, widoczny znak w zwykłym tekście POWINIEN pozostać wystarczający do przekazania oświadczenia.</p>`
      },
      {
        number: "19",
        title: "Otwartość stosowania",
        body: `
            <p>Notacja <code>+AI</code> jest przeznaczona do nieograniczonego stosowania publicznego.</p>
            <p>Stosowanie notacji NIE POWINNO wymagać:</p>
            <ul>
              <li>rejestracji;</li><li>członkostwa;</li><li>opłaty;</li><li>certyfikacji;</li>
              <li>zatwierdzenia;</li><li>ani korzystania z jakiegokolwiek określonego produktu lub dostawcy sztucznej inteligencji.</li>
            </ul>
            <p>Użyteczność notacji zależy od jej zdolności do działania jako konwencja powszechna.</p>`
      },
      {
        number: "20",
        title: "Neutralność",
        body: `
            <p>Notacja <code>+AI</code> nie wyraża aprobaty ani dezaprobaty wobec sztucznej inteligencji.</p>
            <p>Nie wskazuje ona, czy wykorzystanie sztucznej inteligencji było konieczne, pożądane lub lepsze od samodzielnej pracy człowieka.</p>
            <p>Odnotowuje ona wyłącznie istotny udział sztucznej inteligencji oraz rozliczalność człowieka lub organizacji.</p>`
      },
      {
        number: "21",
        title: "Wprowadzanie w błąd",
        body: `
            <p>Osoba lub organizacja NIE POWINNA stosować <code>+AI</code>, gdy:</p>
            <ul>
              <li>nie istnieje możliwa do zidentyfikowania strona odpowiedzialna;</li>
              <li>wskazana strona nie przyjęła wytworu;</li>
              <li>wytwór jest wydawany automatycznie, bez rzeczywistego umocowania człowieka;</li>
              <li>lub notacja jest stosowana w celu wywołania fałszywego wrażenia rozliczalności człowieka.</li>
            </ul>
            <p>Autonomiczne wyniki pracy sztucznej inteligencji bez rzeczywistego przyjęcia ich przez człowieka pozostają poza kanonicznym zakresem <code>+AI</code>.</p>
            <p>Przyszłe specyfikacje MOGĄ zdefiniować notację dla autonomicznych wyników pracy sztucznej inteligencji.</p>`
      },
      {
        number: "22",
        title: "Stosunek do autorstwa",
        body: `
            <p>Notacja <code>+AI</code> celowo nie przypisuje udziału procentowego w autorstwie.</p>
            <p>Wytwór MOŻE zawierać materiał w przeważającej części pochodzący od człowieka i nadal spełniać warunki jej stosowania.</p>
            <p>Wytwór MOŻE zawierać materiał w przeważającej części pochodzący od sztucznej inteligencji i nadal spełniać warunki jej stosowania.</p>
            <p>Rozstrzygające jest to, czy:</p>
            <p><strong>sztuczna inteligencja w istotny sposób wspomogła pracę, a wskazana strona przyjmuje odpowiedzialność za jej wynik.</strong></p>`
      },
      {
        number: "23",
        title: "Kanoniczne wyjaśnienie publiczne",
        body: `
            <p>Gdy wymagane jest krótkie wyjaśnienie, zalecane jest sformułowanie:</p>
            <p class="canonical">SI pomogła. Biorę odpowiedzialność.</p>
            <p>Gdy wymagane jest wyjaśnienie obszerniejsze:</p>
            <blockquote><strong>Notacja <code>+AI</code> oznacza, że sztuczna inteligencja w istotny sposób wspomogła tę pracę, a wskazana osoba lub organizacja przyjmuje odpowiedzialność za powstały wytwór.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Sprawdzenie zgodności z +AI",
        body: `
            <p>Przed zastosowaniem znaku osoba powinna być w stanie odpowiedzieć <strong>tak</strong> na oba pytania:</p>
            <p><strong>Czy sztuczna inteligencja w istotny sposób pomogła to wytworzyć?</strong></p>
            <p><strong>Czy jestem gotów przyjąć odpowiedzialność za udostępnienie tego?</strong></p>
            <p>Jeżeli obie odpowiedzi są twierdzące:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Przyszłe rozszerzenia",
        body: `
            <p>Przyszłe wersje MOGĄ zdefiniować dodatkową notację obejmującą:</p>
            <ul>
              <li>nieznaczne wspomożenie przez sztuczną inteligencję;</li><li>wytworzenie głównie przez sztuczną inteligencję;</li><li>pełną weryfikację przez człowieka;</li>
              <li>niezależne sprawdzenie;</li><li>działanie autonomicznych agentów;</li>
              <li>kryptograficzne potwierdzenie pochodzenia;</li><li>identyfikację systemu sztucznej inteligencji;</li>
              <li>identyfikację modelu;</li><li>lub łańcuchy wkładu człowieka i maszyny.</li>
            </ul>
            <p>Takie rozszerzenia POWINNY zachować <code>+AI</code> jako prosty znak kanoniczny oznaczający:</p>
            <p class="canonical">pracę wykonaną przy wspomożeniu sztucznej inteligencji, z możliwą do zidentyfikowania odpowiedzialnością człowieka.</p>`
      },
      {
        number: "26",
        title: "Oświadczenie kanoniczne",
        body: `
            <p>Osoba lub organizacja stosująca <code>+AI</code> składa następujące oświadczenie:</p>
            <blockquote><strong>Sztuczna inteligencja w istotny sposób wspomogła tę pracę. Postanowiłem przyjąć, opublikować, przekazać, wdrożyć lub w inny sposób udostępnić powstałą pracę i przyjmuję odpowiedzialność za tę decyzję oraz za pracę w przedstawionej postaci.</strong></blockquote>
            <p>Skrótowe sformułowanie publiczne brzmi:</p>
            <p class="canonical">SI pomogła. Biorę odpowiedzialność.</p>
            <p>Znak kanoniczny ma postać:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Specyfikacja +AI, wersja 0.1</p><p>Pochodzenie i rozliczalność w pracy człowieka i SI</p><strong>SI pomogła. Biorę odpowiedzialność.</strong>"
  });
})(window.PlusAISpecTranslations);
