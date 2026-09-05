/*!
 * +AI Specification — Dutch (nl)
 * Status: reviewed translation.
 * Interface chrome: AI-generated, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → MOET (plural: MOETEN)
 *   MUST NOT   → MAG NIET (plural: MOGEN NIET)
 *   SHOULD     → ZOU MOETEN (plural: ZOUDEN MOETEN)
 *   SHOULD NOT → ZOU NIET MOETEN (plural: ZOUDEN NIET MOETEN)
 *   MAY        → MAG (plural: MOGEN)
 */
(function (registry) {
  registry.register("nl", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI heeft geholpen. Ik neem de verantwoordelijkheid.",
      "description": "+AI betekent dat kunstmatige intelligentie wezenlijk heeft bijgedragen aan het werk en dat een genoemde persoon of organisatie er de verantwoordelijkheid voor aanvaardt.",
      "skip": "Ga naar de uitleg",
      "language": "Taal",
      "languageAria": "Kies een taal",
      "theme": "Donkere modus",
      "themeDark": "Donkere modus",
      "themeLight": "Lichte modus",
      "themeDarkAria": "Donkere modus gebruiken",
      "themeLightAria": "Lichte modus gebruiken",
      "highlight": "Accent",
      "highlightAria": "Kies een willekeurige accentkleur",
      "followedLink": "Beschrijving van de postnominale toevoeging +AI",
      "heroTitle": "AI heeft geholpen. Ik neem de verantwoordelijkheid.",
      "heroLead": "De persoon of organisatie wiens naam deze link droeg, doet een eenvoudige verklaring: <strong>kunstmatige intelligentie heeft wezenlijk bijgedragen aan het werk, en die partij aanvaardt de verantwoordelijkheid voor het publiceren ervan.</strong>",
      "readSpec": "Lees de specificatie",
      "meansHeading": "Wat het merkteken zegt",
      "meaningOneTitle": "AI deed mee",
      "meaningOneBody": "AI heeft wezenlijk geholpen bij het maken, analyseren, transformeren of presenteren van het werk.",
      "meaningTwoTitle": "Een mens koos",
      "meaningTwoBody": "Een persoon of organisatie heeft het resultaat bewust aanvaard en gepubliceerd.",
      "meaningThreeTitle": "De verantwoordelijkheid blijft bij de mens",
      "meaningThreeBody": "De genoemde partij draagt de verantwoordingsplicht niet over aan een AI-systeem of -aanbieder.",
      "plainTitle": "Transparante hulp. Zichtbare verantwoordingsplicht.",
      "plainLead": "Het merkteken is een verklaring van verantwoordingsplicht, geen bewering dat AI de auteur is en geen garantie dat het werk correct is.",
      "plainBody": "Het zegt niet hoeveel van het werk van AI kwam. Het zegt dat AI het resultaat wezenlijk heeft beïnvloed en dat een identificeerbare persoon of organisatie achter de beslissing staat om AI te gebruiken.",
      "plainQuote": "Drie tekens maken zowel deelname als verantwoordelijkheid zichtbaar.",
      "fullDocument": "Volledig document",
      "specification": "Specificatie",
      "statusLabel": "Status",
      "statusValue": "Concept",
      "versionLabel": "Versie",
      "markLabel": "Canoniek merkteken",
      "contents": "Inhoud",
      "footerLine": "Open notatie. Menselijke verantwoordelijkheid.",
      "versionFooter": "Specificatie v0.1",
      "translationNote": "Dit is een informatieve vertaling. Bij afwijkingen is de oorspronkelijke Engelse tekst het normatieve document.",
      "colourChanged": "De accentkleur is gewijzigd naar {colour}."
    },
    untranslatedNotice: {
      "badge": "Niet vertaald",
      "headline": "De onderstaande specificatie wordt in het Engels weergegeven.",
      "detail": "Deze taal is nog niet vertaald. De Engelse tekst is in alle gevallen de normatieve versie."
    },
    endonym: "Nederlands",
    sections: [
      {
        number: "1",
        title: "Doel",
        body: `
            <p>De notatie <code>+AI</code> biedt een compacte methode om een artefact aan te merken als wezenlijk ondersteund door kunstmatige intelligentie, terwijl daarbij een persoon of organisatie wordt genoemd die de verantwoordelijkheid voor het resulterende artefact aanvaardt.</p>
            <p>De canonieke uitdrukking is:</p>
            <p class="canonical"><code>&lt;Verantwoordelijke partij&gt; +AI</code></p>
            <p>Voorbeeld:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>De grondbetekenis is:</p>
            <p class="canonical">AI heeft geholpen. Ik neem de verantwoordelijkheid.</p>`
      },
      {
        number: "2",
        title: "Ontwerpbeginsel",
        body: `
            <p><code>+AI</code> probeert niet vast te stellen of een artefact “door mensen gemaakt” of “door AI gemaakt” is.</p>
            <p>Moderne artefacten kunnen tijdens hun totstandkoming herhaaldelijk heen en weer gaan tussen mensen en systemen van kunstmatige intelligentie.</p>
            <p>In plaats daarvan brengt <code>+AI</code> twee feiten tot uitdrukking:</p>
            <ol>
              <li>kunstmatige intelligentie heeft het werk wezenlijk ondersteund; en</li>
              <li>een identificeerbare persoon of organisatie aanvaardt de verantwoordelijkheid voor het resulterende artefact.</li>
            </ol>
            <p>De standaard betreft daarom <strong>de betrokkenheid van AI en de verantwoordingsplicht van de mens</strong>, en niet het exclusieve auteurschap.</p>`
      },
      {
        number: "3",
        title: "Normatieve terminologie",
        body: `
            <p>De termen <strong>MOET (MUST)</strong>, <strong>MAG NIET (MUST NOT)</strong>, <strong>ZOU MOETEN (SHOULD)</strong>, <strong>ZOU NIET MOETEN (SHOULD NOT)</strong> en <strong>MAG (MAY)</strong> zijn normatieve vereisten binnen deze specificatie.</p>
            <p><strong>MOET</strong> duidt op een absolute verplichting.</p>
            <p><strong>MAG NIET</strong> duidt op een absoluut verbod.</p>
            <p><strong>ZOU MOETEN</strong> duidt op een krachtige aanbeveling waarvan kan worden afgeweken wanneer daarvoor een gerechtvaardigde reden bestaat.</p>
            <p><strong>ZOU NIET MOETEN</strong> duidt op een handelwijze die normaliter wordt vermeden, maar die in bijzondere omstandigheden gerechtvaardigd kan zijn.</p>
            <p><strong>MAG</strong> duidt op een facultatieve handelwijze.</p>`
      },
      {
        number: "4",
        title: "Canonieke notatie",
        body: `
            <p>Het canonieke merkteken is:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>De canonieke, voor mensen leesbare vorm is:</p>
            <p><strong><code>&lt;Verantwoordelijke partij&gt; +AI</code></strong></p>
            <p>Voorbeelden:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Het merkteken is gevoelig voor onderscheid tussen hoofdletters en kleine letters.</p>
            <p>De canonieke vorm MOET gebruikmaken van:</p>
            <ul>
              <li>een plusteken <code>+</code>;</li>
              <li>onmiddellijk gevolgd door de Latijnse hoofdletters <code>AI</code>;</li>
              <li>zonder tussenliggende witruimte.</li>
            </ul>
            <p>Daarom is <code>+AI</code> canoniek.</p>
            <p>De volgende vormen zijn geen canonieke equivalenten:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Varianten MOGEN later worden gedefinieerd door uitbreidingen op deze specificatie, maar er MAG NIET van worden uitgegaan dat zij de canonieke betekenis van <code>+AI</code> dragen, tenzij dat uitdrukkelijk is bepaald.</p>`
      },
      {
        number: "5",
        title: "Betekenis van het merkteken",
        body: `
            <p>Een verantwoordelijke partij die <code>+AI</code> gebruikt, verklaart dat:</p>
            <h4>5.1 Betrokkenheid van AI</h4>
            <p>Kunstmatige intelligentie heeft wezenlijk ondersteund bij het creëren, analyseren, transformeren, genereren, beoordelen, structureren of presenteren van het bijbehorende artefact.</p>
            <h4>5.2 Wetenschap</h4>
            <p>De verantwoordelijke partij weet of neemt redelijkerwijs aan dat er wezenlijke ondersteuning door AI heeft plaatsgevonden.</p>
            <h4>5.3 Bevoegdheid</h4>
            <p>De verantwoordelijke partij heeft het betreffende gebruik van kunstmatige intelligentie toegestaan, geïnitieerd, gestuurd of bewust overgenomen.</p>
            <h4>5.4 Menselijke of organisatorische controle</h4>
            <p>De verantwoordelijke partij heeft de beslissingsbevoegdheid behouden over de vraag of het artefact zou worden gepubliceerd, verzonden, ingezet, ingediend, gepresenteerd of anderszins vrijgegeven.</p>
            <h4>5.5 Overname</h4>
            <p>De verantwoordelijke partij aanvaardt het artefact in de vorm waarin het wordt gepresenteerd.</p>
            <h4>5.6 Verantwoordelijkheid</h4>
            <p>De verantwoordelijke partij aanvaardt de verantwoordelijkheid voor de beslissing om het artefact vrij te geven, te gebruiken of weer te geven.</p>
            <p>Deze elementen vormen samen de verklaring <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Wezenlijke ondersteuning",
        body: `
            <p>Het merkteken ZOU MOETEN worden gebruikt wanneer de betrokkenheid van AI het resulterende artefact wezenlijk heeft beïnvloed.</p>
            <p>Wezenlijke ondersteuning kan een bijdrage van AI omvatten aan:</p>
            <ul>
              <li>het schrijven;</li><li>het redeneren;</li><li>de analyse;</li><li>aanbevelingen;</li>
              <li>de synthese van onderzoek;</li><li>softwarecode;</li><li>de interpretatie van gegevens;</li>
              <li>het ontwerp;</li><li>afbeeldingen;</li><li>audio;</li><li>video;</li>
              <li>vertaling waarbij inhoudelijke interpretatie plaatsvindt;</li><li>planning;</li>
              <li>beslissingsondersteuning;</li><li>wiskundig of technisch werk;</li>
              <li>bewerking die de betekenis wezenlijk verandert;</li>
              <li>of ander inhoudelijk intellectueel of creatief werk.</li>
            </ul>
            <p>Bijkomstige of louter mechanische AI-functionaliteit vereist niet noodzakelijk <code>+AI</code>.</p>
            <p>Voorbeelden kunnen zijn: automatische spellingcorrectie, eenvoudige automatische woordvoltooiing, routinematige opmaak of andere functies die de inhoud van een artefact niet wezenlijk beïnvloeden.</p>
            <p>Bepalend is niet het percentage van de door AI voortgebrachte inhoud.</p>
            <p>Bepalend is de vraag:</p>
            <blockquote><strong>Heeft AI het gepresenteerde artefact wezenlijk beïnvloed?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Verantwoordelijkheid",
        body: `
            <p>Verantwoordelijkheid is de bepalende eigenschap van <code>+AI</code>.</p>
            <p>Door het merkteken te gebruiken draagt de verantwoordelijke partij de verantwoordelijkheid niet over aan een systeem, model, aanbieder, agent of hulpmiddel van kunstmatige intelligentie.</p>
            <p>Een uitspraak van de strekking:</p>
            <blockquote>“De AI heeft het voortgebracht, dus ben ik er niet verantwoordelijk voor.”</blockquote>
            <p>is onverenigbaar met de bedoelde betekenis van <code>+AI</code>.</p>
            <p>De verantwoordelijke partij MAG in aanzienlijke mate vertrouwen op ondersteuning door AI.</p>
            <p>De verantwoordelijke partij MAG inhoud publiceren die in wezenlijke mate door AI is voortgebracht.</p>
            <p>De verantwoordelijke partij MAG suggesties aanvaarden die zij zelf niet zelfstandig had kunnen voortbrengen.</p>
            <p>Geen van deze omstandigheden staat het gebruik van <code>+AI</code> in de weg, mits de verantwoordelijke partij het resulterende artefact bewust overneemt en de verantwoordelijkheid voor de vrijgave ervan aanvaardt.</p>`
      },
      {
        number: "8",
        title: "Wat +AI niet betekent",
        body: `
            <p>Tenzij een aanvullende verklaring uitdrukkelijk anders bepaalt, stelt <code>+AI</code> NIET dat:</p>
            <ul>
              <li>het artefact foutloos is;</li>
              <li>elke feitelijke bewering onafhankelijk is gecontroleerd;</li>
              <li>elke bronvermelding onafhankelijk is nagegaan;</li>
              <li>het artefact aan een bepaalde beroepsnorm voldoet;</li>
              <li>het artefact juridisch juist is;</li>
              <li>het artefact medisch juist is;</li>
              <li>het artefact veilig is voor een bepaald doel;</li>
              <li>het artefact geen hallucinaties bevat;</li>
              <li>de verantwoordelijke partij elk onderdeel persoonlijk heeft geschreven;</li>
              <li>AI het grootste deel van het artefact heeft voortgebracht;</li>
              <li>AI slechts een klein deel van het artefact heeft voortgebracht;</li>
              <li>het artefact oorspronkelijk is;</li>
              <li>er geen intellectuele eigendom van derden aanwezig is;</li>
              <li>er geen vertrouwelijke informatie aan een AI-systeem is verstrekt;</li>
              <li>een bepaalde AI-aanbieder, een bepaald model of een bepaald systeem is gebruikt;</li>
              <li>de verantwoordelijke partij instemt met elk tussentijds resultaat van de AI;</li>
              <li>of de verantwoordelijke partij de interne gedachtegang van het AI-systeem kan reproduceren of uitleggen.</li>
            </ul>
            <p><code>+AI</code> is een <strong>verklaring van verantwoordingsplicht</strong>, geen garantie van juistheid.</p>`
      },
      {
        number: "9",
        title: "Menselijke toetsing",
        body: `
            <p>Versie 0.1 vereist niet dat elk onderdeel van een artefact woord voor woord of element voor element handmatig wordt getoetst.</p>
            <p>De verantwoordelijke partij MOET echter het vrijgegeven artefact bewust aanvaarden.</p>
            <p>Het blindelings of automatisch doorsturen van niet-getoetste AI-uitvoer ZOU NIET MOETEN worden aangeduid met <code>+AI</code> wanneer er geen wezenlijke menselijke handeling van overname heeft plaatsgevonden.</p>
            <p>Toekomstige versies van deze specificatie MOGEN sterkere waarborgtekens definiëren die een volledige toetsing of een onafhankelijke verificatie tot uitdrukking brengen.</p>`
      },
      {
        number: "10",
        title: "Natuurlijke personen",
        body: `
            <p>Een natuurlijke persoon MAG de notatie achter zijn of haar naam plaatsen.</p>
            <p>Voorbeeld:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Dit betekent:</p>
            <blockquote>Kunstmatige intelligentie heeft het bijbehorende werk wezenlijk ondersteund, en Eric Mourant aanvaardt de verantwoordelijkheid voor de vrijgave van dat werk.</blockquote>
            <p>Het merkteken heeft betrekking op het bijbehorende artefact of de bijbehorende mededeling.</p>
            <p>Het betekent niet noodzakelijk dat bij elke activiteit van die persoon kunstmatige intelligentie wordt gebruikt.</p>`
      },
      {
        number: "11",
        title: "Organisaties",
        body: `
            <p>Een organisatie MAG <code>+AI</code> gebruiken.</p>
            <p data-company-example>Voorbeeld:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Dit betekent dat de organisatie de verantwoordelijkheid aanvaardt voor het bijbehorende, met AI ondersteunde artefact overeenkomstig haar toepasselijke governance- en bevoegdheidsstructuren.</p>
            <p>Waar dat nuttig is, MOGEN zowel een organisatie als een verantwoordelijke persoon worden genoemd.</p>
            <p data-company-example>Voorbeeld:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "E-mail en berichtenverkeer",
        body: `
            <p>In persoonlijke communicatie is de voorkeursweergave:</p>
            <p><strong>Met vriendelijke groet,<br>Eric Mourant +AI</strong></p>
            <p>Het merkteken MAG worden gekoppeld aan een canonieke uitleg van de betekenis ervan.</p>
            <p>Een hyperlink MAG NIET de zichtbare notatie wijzigen.</p>
            <p>Platte tekst MOET toereikend blijven om de verklaring uit te drukken.</p>`
      },
      {
        number: "13",
        title: "Documenten",
        body: `
            <p>De notatie MAG voorkomen in een veld voor auteur, opsteller, toetser of verantwoordelijke partij.</p>
            <p>Voorbeelden:</p>
            <p><strong>Auteur: Eric Mourant +AI</strong></p>
            <p><strong>Opgesteld door: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Uitgegeven door: JAPER Technology +AI</strong></p>
            <p>De plaatsing ZOU duidelijk MOETEN maken welke persoon of organisatie de verantwoordelijkheid aanvaardt.</p>`
      },
      {
        number: "14",
        title: "Software",
        body: `
            <p>De notatie MAG worden gebruikt in softwarerepository's, commits, headers van broncode, documentatie, releasenotities en voortgebrachte artefacten.</p>
            <p>Voorbeeld:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Een project MAG daarnaast verklaren:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Een dergelijke verklaring op projectniveau ZOU, waar dat praktisch haalbaar is, de verantwoordelijke persoon of organisatie MOETEN noemen.</p>`
      },
      {
        number: "15",
        title: "Creatieve artefacten",
        body: `
            <p>De notatie MAG afbeeldingen, audio, video, ontwerpen, illustraties, presentaties en andere creatieve werken begeleiden.</p>
            <p>Voorbeeld:</p>
            <p><strong>Gemaakt door Eric Mourant +AI</strong></p>
            <p>Het merkteken geeft zelf niet aan welke elementen door AI zijn voortgebracht of gewijzigd.</p>
            <p>Meer gedetailleerde metagegevens over de herkomst MOGEN afzonderlijk worden gekoppeld.</p>`
      },
      {
        number: "16",
        title: "Onderzoek en technisch werk",
        body: `
            <p>Het merkteken MAG worden gebruikt bij wetenschappelijk, onderzoeks-, ingenieurs- of technisch werk, voor zover de toepasselijke institutionele, publicatiegebonden of beroepsmatige vereisten dat toestaan.</p>
            <p><code>+AI</code> MAG NIET worden voorgesteld als vervanging van een meer specifieke openbaarmaking die door een uitgever, een toezichthouder, een werkgever, een beroepsorganisatie of de wet wordt verlangd.</p>
            <p>De notatie MAG een dergelijke openbaarmaking aanvullen.</p>`
      },
      {
        number: "17",
        title: "Machineleesbare weergave",
        body: `
            <p>Systemen MOGEN de verklaring weergeven met behulp van gestructureerde metagegevens.</p>
            <p>Een minimale weergave is:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Een uitgebreidere weergave is:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Machineleesbare vormen ZOUDEN dezelfde semantische betekenis MOETEN behouden als de zichtbare notatie.</p>`
      },
      {
        number: "18",
        title: "Bestendigheid",
        body: `
            <p>De notatie <code>+AI</code> ZOU redelijke bewerkingen van een artefact MOETEN overleven wanneer de naamsvermelding behouden blijft.</p>
            <p>Voorbeelden zijn omzetting tussen documentformaten, archivering, afdrukken, export, herpublicatie en verzending.</p>
            <p>Wanneer metagegevens worden verwijderd, ZOU het zichtbare merkteken in platte tekst toereikend MOETEN blijven om de verklaring over te brengen.</p>`
      },
      {
        number: "19",
        title: "Vrij gebruik",
        body: `
            <p>De notatie <code>+AI</code> is bedoeld voor onbeperkt openbaar gebruik.</p>
            <p>Het gebruik van de notatie ZOU NIET MOETEN vereisen:</p>
            <ul>
              <li>registratie;</li><li>lidmaatschap;</li><li>betaling;</li><li>certificering;</li>
              <li>goedkeuring;</li><li>of het gebruik van een bepaald AI-product of een bepaalde AI-aanbieder.</li>
            </ul>
            <p>Het nut van de notatie hangt af van haar vermogen om als universele afspraak te werken.</p>`
      },
      {
        number: "20",
        title: "Neutraliteit",
        body: `
            <p><code>+AI</code> drukt geen goedkeuring of afkeuring van kunstmatige intelligentie uit.</p>
            <p>Het geeft niet aan of het gebruik van AI noodzakelijk, wenselijk of beter was dan onbijgestaan menselijk werk.</p>
            <p>Het legt uitsluitend wezenlijke betrokkenheid van AI en menselijke of organisatorische verantwoordingsplicht vast.</p>`
      },
      {
        number: "21",
        title: "Onjuiste voorstelling",
        body: `
            <p>Een persoon of organisatie ZOU <code>+AI</code> NIET MOETEN gebruiken wanneer:</p>
            <ul>
              <li>er geen identificeerbare verantwoordelijke partij is;</li>
              <li>de genoemde partij het artefact niet heeft overgenomen;</li>
              <li>het artefact automatisch wordt uitgegeven zonder wezenlijke menselijke bevoegdheid;</li>
              <li>of de notatie wordt gebruikt om een valse indruk van menselijke verantwoordingsplicht te wekken.</li>
            </ul>
            <p>Autonome AI-uitvoer zonder wezenlijke menselijke overname valt buiten het canonieke toepassingsgebied van <code>+AI</code>.</p>
            <p>Toekomstige specificaties MOGEN een notatie voor autonome AI-uitvoer definiëren.</p>`
      },
      {
        number: "22",
        title: "Verhouding tot auteurschap",
        body: `
            <p><code>+AI</code> kent bewust geen percentage van het auteurschap toe.</p>
            <p>Een artefact MAG overwegend materiaal van menselijke oorsprong bevatten en toch in aanmerking komen.</p>
            <p>Een artefact MAG overwegend materiaal van AI-oorsprong bevatten en toch in aanmerking komen.</p>
            <p>De relevante toets is of:</p>
            <p><strong>AI wezenlijk heeft ondersteund en de genoemde partij de verantwoordelijkheid voor het resultaat neemt.</strong></p>`
      },
      {
        number: "23",
        title: "Canonieke openbare uitleg",
        body: `
            <p>Wanneer een korte uitleg vereist is, is de voorkeursformulering:</p>
            <p class="canonical">AI heeft geholpen. Ik neem de verantwoordelijkheid.</p>
            <p>Wanneer een langere uitleg vereist is:</p>
            <blockquote><strong><code>+AI</code> betekent dat kunstmatige intelligentie dit werk wezenlijk heeft ondersteund en dat de genoemde persoon of organisatie de verantwoordelijkheid voor het resulterende artefact aanvaardt.</strong></blockquote>`
      },
      {
        number: "24",
        title: "De +AI-toets",
        body: `
            <p>Voordat iemand het merkteken aanbrengt, zou die persoon beide vragen met <strong>ja</strong> moeten kunnen beantwoorden:</p>
            <p><strong>Heeft AI wezenlijk geholpen dit voort te brengen?</strong></p>
            <p><strong>Ben ik bereid de verantwoordelijkheid voor de vrijgave ervan te nemen?</strong></p>
            <p>Als beide antwoorden ja zijn:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Toekomstige uitbreidingen",
        body: `
            <p>Toekomstige versies MOGEN aanvullende notaties definiëren die betrekking hebben op:</p>
            <ul>
              <li>geringe ondersteuning door AI;</li><li>overwegend door AI voortgebrachte inhoud;</li><li>volledige menselijke toetsing;</li>
              <li>onafhankelijke verificatie;</li><li>activiteit van autonome agenten;</li>
              <li>cryptografische herkomst;</li><li>identificatie van het AI-systeem;</li>
              <li>identificatie van het model;</li><li>of ketens van menselijke en machinale bijdragen.</li>
            </ul>
            <p>Dergelijke uitbreidingen ZOUDEN <code>+AI</code> MOETEN behouden als het eenvoudige canonieke merkteken voor:</p>
            <p class="canonical">met AI ondersteund werk met identificeerbare menselijke verantwoordelijkheid.</p>`
      },
      {
        number: "26",
        title: "Canonieke verklaring",
        body: `
            <p>Een persoon of organisatie die <code>+AI</code> aanbrengt, legt de volgende verklaring af:</p>
            <blockquote><strong>Kunstmatige intelligentie heeft dit werk wezenlijk ondersteund. Ik heb ervoor gekozen het resulterende werk te aanvaarden, te publiceren, te verzenden, in te zetten of anderszins vrij te geven, en ik neem de verantwoordelijkheid voor die beslissing en voor het werk zoals het wordt gepresenteerd.</strong></blockquote>
            <p>De publieke kernzin is:</p>
            <p class="canonical">AI heeft geholpen. Ik neem de verantwoordelijkheid.</p>
            <p>Het canonieke merkteken is:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI-specificatie v0.1</p><p>Herkomst en verantwoordingsplicht bij mens en AI</p><strong>AI heeft geholpen. Ik neem de verantwoordelijkheid.</strong>"
  });
})(window.PlusAISpecTranslations);
