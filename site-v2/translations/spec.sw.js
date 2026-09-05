/*!
 * +AI Specification — Swahili (sw)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → LAZIMA
 *   MUST NOT   → NI MARUFUKU
 *   SHOULD     → INAPASWA
 *   SHOULD NOT → HAIPENDEKEZWI
 *   MAY        → INAWEZA
 */
(function (registry) {
  registry.register("sw", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI ilisaidia. Mimi ninachukua jukumu.",
      "description": "+AI inamaanisha kuwa akili bandia ilisaidia kwa kiwango cha maana katika kazi na mtu au shirika lililotajwa linakubali kuwajibika kwa kazi hiyo.",
      "skip": "Ruka hadi maelezo",
      "language": "Lugha",
      "languageAria": "Chagua lugha",
      "theme": "Hali ya giza",
      "themeDark": "Hali ya giza",
      "themeLight": "Hali ya mwanga",
      "themeDarkAria": "Tumia hali ya giza",
      "themeLightAria": "Tumia hali ya mwanga",
      "highlight": "Kuangazia",
      "highlightAria": "Chagua rangi ya kuangazia bila mpangilio",
      "followedLink": "Maelezo ya +AI baada ya jina",
      "heroTitle": "AI ilisaidia. Mimi ninachukua jukumu.",
      "heroLead": "Mtu au shirika ambalo jina lake lilikuwa na kiungo hiki linatoa tamko rahisi: <strong>akili bandia ilisaidia kwa kiwango cha maana katika kazi, na upande huo unakubali kuwajibika kwa kuitoa.</strong>",
      "readSpec": "Soma vipimo",
      "meansHeading": "Alama hii inasema nini",
      "meaningOneTitle": "AI ilishiriki",
      "meaningOneBody": "AI ilisaidia kwa kiwango cha maana kuunda, kuchambua, kubadilisha au kuwasilisha kazi.",
      "meaningTwoTitle": "Binadamu alichagua",
      "meaningTwoBody": "Mtu au shirika lilikubali na kutoa matokeo kwa uamuzi wa kufahamu.",
      "meaningThreeTitle": "Uwajibikaji unabaki kwa binadamu",
      "meaningThreeBody": "Upande uliotajwa hauhamishi uwajibikaji kwa mfumo wa AI au mtoa huduma wake.",
      "plainTitle": "Msaada wa wazi. Uwajibikaji unaoonekana.",
      "plainLead": "Alama hii ni tamko la uwajibikaji, si dai kwamba AI ndiyo mwandishi wala si dhamana kwamba kazi ni sahihi.",
      "plainBody": "Haielezi ni kiasi gani cha kazi kilitokana na AI. Inaeleza kuwa AI iliathiri matokeo kwa kiwango cha maana na mtu au shirika linaloweza kutambulika linasimama nyuma ya uamuzi wa kuitumia AI.",
      "plainQuote": "Herufi tatu zinafanya ushiriki na uwajibikaji vionekane.",
      "fullDocument": "Hati kamili",
      "specification": "Vipimo",
      "statusLabel": "Hali",
      "statusValue": "Rasimu",
      "versionLabel": "Toleo",
      "markLabel": "Alama ya kikanuni",
      "contents": "Yaliyomo",
      "footerLine": "Nukuu huria. Uwajibikaji wa binadamu.",
      "versionFooter": "Vipimo v0.1",
      "translationNote": "Tafsiri hii imetolewa kwa taarifa. Iwapo kuna tofauti, maandishi asilia ya Kiingereza ndiyo hati ya kikanuni.",
      "colourChanged": "Rangi ya kuangazia imebadilishwa kuwa {colour}."
    },
    untranslatedNotice: {
      "badge": "Hakijatafsiriwa",
      "headline": "Vipimo vilivyo hapa chini vimeonyeshwa kwa Kiingereza.",
      "detail": "Lugha hii haijatafsiriwa bado. Maandishi ya Kiingereza ni toleo la kikanuni katika hali zote."
    },
    endonym: "Kiswahili",
    sections: [
      {
        number: "1",
        title: "Madhumuni",
        body: `
            <p>Nukuu <code>+AI</code> hutoa njia fupi ya kubainisha kwamba bidhaa imesaidiwa kwa kiwango cha maana na akili bandia, na wakati huo huo kumtaja mtu au shirika linalochukua jukumu la bidhaa inayotokana na kazi hiyo.</p>
            <p>Usemi wa kikanuni ni:</p>
            <p class="canonical"><code>&lt;Mwenye Uwajibikaji&gt; +AI</code></p>
            <p>Mfano:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Maana ya msingi ni:</p>
            <p class="canonical">AI ilisaidia. Mimi ninachukua jukumu.</p>`
      },
      {
        number: "2",
        title: "Kanuni ya muundo",
        body: `
            <p><code>+AI</code> haijaribu kubainisha kama bidhaa “imeundwa na mwanadamu” au “imeundwa na akili bandia.”</p>
            <p>Bidhaa za kisasa zinaweza kupishana mara kwa mara kati ya mwanadamu na mifumo ya akili bandia wakati wa uundaji wake.</p>
            <p>Badala yake, <code>+AI</code> huwasilisha mambo mawili:</p>
            <ol>
              <li>akili bandia ilisaidia kazi hiyo kwa kiwango cha maana; na</li>
              <li>mtu au shirika linalotambulika hukubali jukumu la bidhaa inayotokana na kazi hiyo.</li>
            </ol>
            <p>Kwa hiyo kiwango hiki kinahusu <strong>ushiriki wa akili bandia na uwajibikaji wa mwanadamu</strong>, na si utunzi wa pekee.</p>`
      },
      {
        number: "3",
        title: "Istilahi za kikanuni",
        body: `
            <p>Maneno <strong>LAZIMA (MUST)</strong>, <strong>NI MARUFUKU (MUST NOT)</strong>, <strong>INAPASWA (SHOULD)</strong>, <strong>HAIPENDEKEZWI (SHOULD NOT)</strong>, na <strong>INAWEZA (MAY)</strong> ni masharti ya kikanuni katika vipimo hivi.</p>
            <p><strong>LAZIMA</strong> huonyesha sharti la lazima kabisa.</p>
            <p><strong>NI MARUFUKU</strong> huonyesha zuio kamili.</p>
            <p><strong>INAPASWA</strong> huonyesha pendekezo lenye uzito ambalo linaweza kuachwa pale sababu halali inapokuwepo.</p>
            <p><strong>HAIPENDEKEZWI</strong> huonyesha utendaji ambao kwa kawaida huepukwa, lakini unaweza kuhalalishwa katika mazingira maalum.</p>
            <p><strong>INAWEZA</strong> huonyesha utendaji wa hiari.</p>`
      },
      {
        number: "4",
        title: "Nukuu ya kikanuni",
        body: `
            <p>Alama ya kikanuni ni:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Muundo wa kikanuni unaosomeka na mwanadamu ni:</p>
            <p><strong><code>&lt;Mwenye Uwajibikaji&gt; +AI</code></strong></p>
            <p>Mifano:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Alama hii huzingatia ukubwa na udogo wa herufi.</p>
            <p>Muundo wa kikanuni LAZIMA utumie:</p>
            <ul>
              <li>alama ya kujumlisha <code>+</code>;</li>
              <li>ikifuatwa mara moja na herufi kubwa za Kilatini <code>AI</code>;</li>
              <li>bila nafasi yoyote ndani yake.</li>
            </ul>
            <p>Kwa hiyo <code>+AI</code> ni ya kikanuni.</p>
            <p>Zifuatazo si sawa na muundo wa kikanuni:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Miundo mingine INAWEZA kufafanuliwa baadaye kwa nyongeza za vipimo hivi, lakini NI MARUFUKU kudhania kwamba miundo hiyo ina maana ya kikanuni ya <code>+AI</code> isipokuwa imefafanuliwa waziwazi.</p>`
      },
      {
        number: "5",
        title: "Maana ya alama",
        body: `
            <p>Mwenye uwajibikaji anayetumia <code>+AI</code> anatangaza kwamba:</p>
            <h4>5.1 Ushiriki wa akili bandia</h4>
            <p>Akili bandia ilisaidia kwa kiwango cha maana katika kuunda, kuchambua, kubadilisha, kuzalisha, kutathmini, kupanga muundo au kuwasilisha bidhaa inayohusika.</p>
            <h4>5.2 Ufahamu</h4>
            <p>Mwenye uwajibikaji anajua au anaamini kwa msingi wa kutosha kwamba msaada wa maana wa akili bandia ulitokea.</p>
            <h4>5.3 Mamlaka</h4>
            <p>Mwenye uwajibikaji aliidhinisha, alianzisha, aliongoza au alikubali kwa ufahamu matumizi husika ya akili bandia.</p>
            <h4>5.4 Udhibiti wa mwanadamu au wa shirika</h4>
            <p>Mwenye uwajibikaji alibaki na mamlaka juu ya kuamua kama bidhaa itachapishwa, itatumwa, itasambazwa, itawasilishwa, itaonyeshwa au itatolewa kwa njia nyingine yoyote.</p>
            <h4>5.5 Ukubalifu</h4>
            <p>Mwenye uwajibikaji anakubali bidhaa katika muundo ambao inawasilishwa.</p>
            <h4>5.6 Jukumu</h4>
            <p>Mwenye uwajibikaji anachukua jukumu la uamuzi wa kutoa, kutumia au kuwakilisha bidhaa hiyo.</p>
            <p>Vipengele hivi kwa jumla vinaunda tangazo la <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Msaada wa maana",
        body: `
            <p>Alama hii INAPASWA kutumika pale ushiriki wa akili bandia ulipoathiri bidhaa inayotokana kwa kiwango cha maana.</p>
            <p>Msaada wa maana unaweza kujumuisha mchango wa akili bandia katika:</p>
            <ul>
              <li>uandishi;</li><li>ufikiri wa kimantiki;</li><li>uchambuzi;</li><li>mapendekezo;</li>
              <li>ujumuishaji wa utafiti;</li><li>msimbo wa programu;</li><li>tafsiri ya data;</li>
              <li>usanifu;</li><li>picha;</li><li>sauti;</li><li>video;</li>
              <li>tafsiri ya lugha ambapo ufasiri wa kimaudhui hutokea;</li><li>upangaji;</li>
              <li>usaidizi wa maamuzi;</li><li>kazi za kihisabati au za kiufundi;</li>
              <li>uhariri unaobadilisha maana kwa kiwango cha maana;</li>
              <li>au kazi nyingine ya kiakili au ya ubunifu yenye maudhui.</li>
            </ul>
            <p>Utendaji wa akili bandia wa kando au wa kimekanika tu si lazima uhitaji <code>+AI</code>.</p>
            <p>Mifano inaweza kujumuisha usahihishaji wa tahajia wa kiotomatiki, ukamilishaji wa msingi wa maneno, upangaji wa mpangilio wa kawaida au vipengele vingine visivyoathiri maudhui ya bidhaa kwa kiwango cha maana.</p>
            <p>Swali la kuamua si asilimia ya maudhui yaliyozalishwa na akili bandia.</p>
            <p>Swali la kuamua ni:</p>
            <blockquote><strong>Je, akili bandia iliathiri kwa kiwango cha maana bidhaa inayowasilishwa?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Jukumu",
        body: `
            <p>Jukumu ni sifa bainifu ya <code>+AI</code>.</p>
            <p>Kwa kutumia alama hii, mwenye uwajibikaji hahamishii jukumu kwa mfumo, modeli, mtoa huduma, wakala au zana ya akili bandia.</p>
            <p>Kauli inayolingana na:</p>
            <blockquote>“Akili bandia ilitengeneza, kwa hiyo mimi si mwajibikaji kwa hilo.”</blockquote>
            <p>haipatani na maana iliyokusudiwa ya <code>+AI</code>.</p>
            <p>Mwenye uwajibikaji INAWEZA kutegemea sana msaada wa akili bandia.</p>
            <p>Mwenye uwajibikaji INAWEZA kuchapisha maudhui yaliyozalishwa kwa kiasi kikubwa na akili bandia.</p>
            <p>Mwenye uwajibikaji INAWEZA kukubali mapendekezo ambayo hangeweza kuyatoa mwenyewe.</p>
            <p>Hakuna hali yoyote ya hizi inayozuia matumizi ya <code>+AI</code>, ikiwa mwenye uwajibikaji anakubali kwa ufahamu bidhaa inayotokana na kazi hiyo na anachukua jukumu la kuitoa.</p>`
      },
      {
        number: "8",
        title: "Kile ambacho +AI haimaanishi",
        body: `
            <p>Isipokuwa tangazo la nyongeza linaeleza vinginevyo waziwazi, <code>+AI</code> HAIDAI kwamba:</p>
            <ul>
              <li>bidhaa haina makosa;</li>
              <li>kila kauli ya kiuhalisia imethibitishwa kwa kujitegemea;</li>
              <li>kila rejeleo limehakikiwa kwa kujitegemea;</li>
              <li>bidhaa inakidhi kiwango chochote mahususi cha kitaaluma;</li>
              <li>bidhaa ni sahihi kisheria;</li>
              <li>bidhaa ni sahihi kitabibu;</li>
              <li>bidhaa ni salama kwa madhumuni yoyote mahususi;</li>
              <li>bidhaa haina uzushi wa akili bandia;</li>
              <li>mwenye uwajibikaji aliandika mwenyewe kila kipengele;</li>
              <li>akili bandia ilizalisha sehemu kubwa ya bidhaa;</li>
              <li>akili bandia ilizalisha sehemu ndogo tu ya bidhaa;</li>
              <li>bidhaa ni ya asili;</li>
              <li>hakuna miliki bunifu ya mtu wa tatu iliyomo;</li>
              <li>habari za siri hazikupelekwa kwa mfumo wa akili bandia;</li>
              <li>mtoa huduma, modeli au mfumo mahususi wa akili bandia ulitumika;</li>
              <li>mwenye uwajibikaji anakubaliana na kila matokeo ya kati ya akili bandia;</li>
              <li>au mwenye uwajibikaji anaweza kurudufu au kueleza mantiki ya ndani ya mfumo wa akili bandia.</li>
            </ul>
            <p><code>+AI</code> ni <strong>tangazo la uwajibikaji</strong>, na si dhamana ya usahihi.</p>`
      },
      {
        number: "9",
        title: "Ukaguzi wa mwanadamu",
        body: `
            <p>Toleo la 0.1 halihitaji kwamba kila kipengele cha bidhaa kikaguliwe kwa mkono neno kwa neno au kipengele kwa kipengele.</p>
            <p>Hata hivyo, mwenye uwajibikaji LAZIMA akubali kwa ufahamu bidhaa inayotolewa.</p>
            <p>Kupitisha kwa upofu au kwa kiotomatiki matokeo ya akili bandia yasiyokaguliwa HAIPENDEKEZWI kuwakilishwa kwa <code>+AI</code> pale hakuna tendo la mwanadamu la ukubalifu lenye maana lililotokea.</p>
            <p>Matoleo yajayo ya vipimo hivi INAWEZA kufafanua alama zenye uhakikisho mkubwa zaidi zinazowakilisha ukaguzi kamili au uthibitishaji wa kujitegemea.</p>`
      },
      {
        number: "10",
        title: "Watu binafsi",
        body: `
            <p>Mtu binafsi INAWEZA kuweka nukuu hii baada ya jina lake.</p>
            <p>Mfano:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Hii inamaanisha:</p>
            <blockquote>Akili bandia ilisaidia kazi inayohusika kwa kiwango cha maana, na Eric Mourant anachukua jukumu la kutoa kazi hiyo.</blockquote>
            <p>Alama hii inahusiana na bidhaa au mawasiliano yanayohusika.</p>
            <p>Si lazima imaanishe kwamba kila shughuli inayofanywa na mtu huyo inatumia akili bandia.</p>`
      },
      {
        number: "11",
        title: "Mashirika",
        body: `
            <p>Shirika INAWEZA kutumia <code>+AI</code>.</p>
            <p data-company-example>Mfano:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Hii inamaanisha kwamba shirika linachukua jukumu la bidhaa inayohusika iliyosaidiwa na akili bandia kulingana na mifumo yake ya utawala na mamlaka inayotumika.</p>
            <p>Pale inapofaa, shirika na mtu mwenye uwajibikaji INAWEZA kutajwa wote wawili.</p>
            <p data-company-example>Mfano:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Barua pepe na ujumbe",
        body: `
            <p>Katika mawasiliano ya kibinafsi, uwasilishaji unaopendelewa ni:</p>
            <p><strong>Wako mwaminifu,<br>Eric Mourant +AI</strong></p>
            <p>Alama hii INAWEZA kuunganishwa kwa kiungo hadi maelezo ya kikanuni ya maana yake.</p>
            <p>Kiungo NI MARUFUKU kubadilisha nukuu inayoonekana.</p>
            <p>Maandishi ya kawaida LAZIMA yabaki yanatosha kueleza tangazo hili.</p>`
      },
      {
        number: "13",
        title: "Hati",
        body: `
            <p>Nukuu hii INAWEZA kuonekana katika sehemu ya mwandishi, mtayarishaji, mkaguzi au mwenye uwajibikaji.</p>
            <p>Mifano:</p>
            <p><strong>Mwandishi: Eric Mourant +AI</strong></p>
            <p><strong>Imetayarishwa na: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Imetolewa na: JAPER Technology +AI</strong></p>
            <p>Mahali pa kuiweka INAPASWA kuweka wazi ni mtu au shirika lipi linalochukua jukumu.</p>`
      },
      {
        number: "14",
        title: "Programu",
        body: `
            <p>Nukuu hii INAWEZA kutumika katika hazina za programu, michango ya msimbo, vichwa vya msimbo chanzi, nyaraka, madokezo ya matoleo na bidhaa zinazozalishwa.</p>
            <p>Mfano:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Mradi INAWEZA kutangaza zaidi:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Kauli ya aina hiyo ya kiwango cha mradi INAPASWA kumtaja mtu au shirika lenye uwajibikaji pale inapowezekana.</p>`
      },
      {
        number: "15",
        title: "Bidhaa za ubunifu",
        body: `
            <p>Nukuu hii INAWEZA kuambatana na picha, sauti, video, michoro ya usanifu, michoro, mawasilisho na kazi nyingine za ubunifu.</p>
            <p>Mfano:</p>
            <p><strong>Imeundwa na Eric Mourant +AI</strong></p>
            <p>Alama hii yenyewe haibainishi vipengele vipi vilizalishwa au vilirekebishwa na akili bandia.</p>
            <p>Data ya asili yenye maelezo zaidi INAWEZA kuambatanishwa kwa njia tofauti.</p>`
      },
      {
        number: "16",
        title: "Utafiti na kazi za kiufundi",
        body: `
            <p>Alama hii INAWEZA kutumika katika kazi za utafiti, kisayansi, kihandisi au kiufundi pale inaruhusiwa na masharti yanayotumika ya taasisi, ya uchapishaji au ya kitaaluma.</p>
            <p><code>+AI</code> NI MARUFUKU kuwasilishwa kama kinachochukua nafasi ya ufichuzi wowote mahususi zaidi unaohitajika na mchapishaji, mdhibiti, mwajiri, chombo cha kitaaluma au sheria.</p>
            <p>Nukuu hii INAWEZA kuongezea ufichuzi wa aina hiyo.</p>`
      },
      {
        number: "17",
        title: "Uwakilishi unaosomeka na mashine",
        body: `
            <p>Mifumo INAWEZA kuwakilisha tangazo hili kwa kutumia data ya kimuundo.</p>
            <p>Uwakilishi wa kiwango cha chini ni:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Uwakilishi wenye maelezo zaidi ni:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Miundo inayosomeka na mashine INAPASWA kuhifadhi maana ile ile ya kisemantiki kama nukuu inayoonekana.</p>`
      },
      {
        number: "18",
        title: "Udumu",
        body: `
            <p>Nukuu <code>+AI</code> INAPASWA kudumu katika mabadiliko ya kawaida ya bidhaa pale utambulisho wa mtunzi unahifadhiwa.</p>
            <p>Mifano inajumuisha ubadilishaji kati ya miundo ya hati, uhifadhi wa kumbukumbu, uchapishaji kwa karatasi, uhamishaji, uchapishaji upya na utumaji.</p>
            <p>Pale data ya kimuundo inaondolewa, alama inayoonekana ya maandishi ya kawaida INAPASWA kubaki inatosha kuwasilisha tangazo hili.</p>`
      },
      {
        number: "19",
        title: "Matumizi ya wazi",
        body: `
            <p>Nukuu <code>+AI</code> imekusudiwa kwa matumizi ya umma bila vikwazo.</p>
            <p>Matumizi ya nukuu hii HAIPENDEKEZWI kuhitaji:</p>
            <ul>
              <li>usajili;</li><li>uanachama;</li><li>malipo;</li><li>uthibitisho wa cheti;</li>
              <li>idhini;</li><li>au matumizi ya bidhaa au mtoa huduma mahususi wa akili bandia.</li>
            </ul>
            <p>Manufaa ya nukuu hii yanategemea uwezo wake wa kufanya kazi kama kaida ya kimataifa.</p>`
      },
      {
        number: "20",
        title: "Kutokuwa na upande",
        body: `
            <p><code>+AI</code> haielezi kuunga mkono au kupinga akili bandia.</p>
            <p>Haionyeshi kama matumizi ya akili bandia yalikuwa ya lazima, yanayofaa au bora kuliko kazi ya mwanadamu isiyosaidiwa.</p>
            <p>Hurekodi tu ushiriki wa maana wa akili bandia na uwajibikaji wa mwanadamu au wa shirika.</p>`
      },
      {
        number: "21",
        title: "Uwakilishi wa uongo",
        body: `
            <p>Mtu au shirika HAIPENDEKEZWI kutumia <code>+AI</code> pale:</p>
            <ul>
              <li>hakuna mwenye uwajibikaji anayetambulika;</li>
              <li>mtu aliyetajwa hajakubali bidhaa hiyo;</li>
              <li>bidhaa inatolewa kiotomatiki bila mamlaka ya mwanadamu yenye maana;</li>
              <li>au nukuu inatumika kutengeneza dhana ya uongo ya uwajibikaji wa mwanadamu.</li>
            </ul>
            <p>Matokeo ya akili bandia yanayojiendesha bila ukubalifu wenye maana wa mwanadamu yapo nje ya upeo wa kikanuni wa <code>+AI</code>.</p>
            <p>Vipimo vijavyo INAWEZA kufafanua nukuu kwa matokeo ya akili bandia yanayojiendesha.</p>`
      },
      {
        number: "22",
        title: "Uhusiano na utunzi",
        body: `
            <p><code>+AI</code> kwa makusudi haigawi asilimia ya utunzi.</p>
            <p>Bidhaa INAWEZA kuwa na maudhui yaliyotoka zaidi kwa mwanadamu na bado ikafaa kutumia alama hii.</p>
            <p>Bidhaa INAWEZA kuwa na maudhui yaliyotoka zaidi kwa akili bandia na bado ikafaa kutumia alama hii.</p>
            <p>Kipimo kinachohusika ni kama:</p>
            <p><strong>akili bandia ilisaidia kwa kiwango cha maana, na mtu aliyetajwa anachukua jukumu la matokeo.</strong></p>`
      },
      {
        number: "23",
        title: "Maelezo ya kikanuni kwa umma",
        body: `
            <p>Pale maelezo mafupi yanahitajika, maneno yanayopendelewa ni:</p>
            <p class="canonical">AI ilisaidia. Mimi ninachukua jukumu.</p>
            <p>Pale maelezo marefu yanahitajika:</p>
            <blockquote><strong><code>+AI</code> inamaanisha kwamba akili bandia ilisaidia kazi hii kwa kiwango cha maana na mtu au shirika lililotajwa hukubali jukumu la bidhaa inayotokana na kazi hiyo.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Kipimo cha +AI",
        body: `
            <p>Kabla ya kuweka alama hii, mtu anapaswa kuwa na uwezo wa kujibu <strong>ndiyo</strong> kwa maswali yote mawili:</p>
            <p><strong>Je, akili bandia ilisaidia kwa kiwango cha maana kutengeneza hii?</strong></p>
            <p><strong>Je, niko tayari kuchukua jukumu la kuitoa?</strong></p>
            <p>Ikiwa majibu yote mawili ni ndiyo:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Nyongeza za baadaye",
        body: `
            <p>Matoleo yajayo INAWEZA kufafanua nukuu za ziada zinazohusu:</p>
            <ul>
              <li>msaada mdogo wa akili bandia;</li><li>uzalishaji unaoongozwa na akili bandia;</li><li>ukaguzi kamili wa mwanadamu;</li>
              <li>uthibitishaji wa kujitegemea;</li><li>shughuli za wakala anayejiendesha;</li>
              <li>asili ya kriptografia;</li><li>utambulisho wa mfumo wa akili bandia;</li>
              <li>utambulisho wa modeli;</li><li>au minyororo ya michango ya mwanadamu na ya mashine.</li>
            </ul>
            <p>Nyongeza za aina hiyo INAPASWA kuhifadhi <code>+AI</code> kama alama rahisi ya kikanuni ya:</p>
            <p class="canonical">kazi iliyosaidiwa na akili bandia yenye jukumu la mwanadamu linalotambulika.</p>`
      },
      {
        number: "26",
        title: "Tangazo la kikanuni",
        body: `
            <p>Mtu au shirika linalotumia <code>+AI</code> hufanya tangazo lifuatalo:</p>
            <blockquote><strong>Akili bandia ilisaidia kazi hii kwa kiwango cha maana. Nimechagua kukubali, kuchapisha, kutuma, kusambaza au kwa njia nyingine kutoa kazi inayotokana na hiyo, na ninachukua jukumu la uamuzi huo na la kazi kama inavyowasilishwa.</strong></blockquote>
            <p>Ufupisho wa umma ni:</p>
            <p class="canonical">AI ilisaidia. Mimi ninachukua jukumu.</p>
            <p>Alama ya kikanuni ni:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Vipimo vya +AI toleo la 0.1</p><p>Asili na Uwajibikaji kati ya Mwanadamu na Akili Bandia</p><strong>AI ilisaidia. Mimi ninachukua jukumu.</strong>"
  });
})(window.PlusAISpecTranslations);
