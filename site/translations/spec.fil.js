/*!
 * +AI Specification — Filipino (fil)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms: MUST → KINAKAILANGAN, MUST NOT → IPINAGBABAWAL,
 * SHOULD → DAPAT, SHOULD NOT → HINDI DAPAT, MAY → MAAARI
 */
(function (registry) {
  registry.register("fil", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = Tumulong ang AI. Ako ang may pananagutan.",
      "description": "Ang +AI ay nangangahulugang may mahalagang ambag ang artificial intelligence sa gawain at isang kinikilalang tao o organisasyon ang tumatanggap ng pananagutan para rito.",
      "skip": "Pumunta sa paliwanag",
      "language": "Wika",
      "languageAria": "Pumili ng wika",
      "theme": "Madilim na mode",
      "themeDark": "Madilim na mode",
      "themeLight": "Maliwanag na mode",
      "themeDarkAria": "Gamitin ang dark mode",
      "themeLightAria": "Gamitin ang light mode",
      "highlight": "Kulay ng highlight",
      "highlightAria": "Pumili ng random na kulay ng highlight",
      "followedLink": "Paglalarawan ng post-nominal na +AI",
      "heroTitle": "Tumulong ang AI. Ako ang may pananagutan.",
      "heroLead": "Ang tao o organisasyong may pangalang may kasamang link na ito ay gumagawa ng isang simpleng pahayag: <strong>may mahalagang ambag ang artificial intelligence sa gawain, at tinatanggap nila ang pananagutan sa pagpapalabas nito.</strong>",
      "readSpec": "Basahin ang espesipikasyon",
      "meansHeading": "Ang sinasabi ng marka",
      "meaningOneTitle": "Lumahok ang AI",
      "meaningOneBody": "Malaki ang naitulong ng AI sa paglikha, pagsusuri, pagbabago o paglalahad ng gawain.",
      "meaningTwoTitle": "Tao ang pumili",
      "meaningTwoBody": "Sadyang pinagtibay at inilabas ng isang tao o organisasyon ang resulta.",
      "meaningThreeTitle": "Nananatiling tao ang may pananagutan",
      "meaningThreeBody": "Hindi inililipat ng pinangalanang panig ang kapanagutan sa isang AI system o provider.",
      "plainTitle": "Malinaw na tulong. Nakikitang kapanagutan.",
      "plainLead": "Ang marka ay isang deklarasyon ng kapanagutan, hindi isang pag-aangking AI ang may-akda at hindi rin garantiya na tama ang gawain.",
      "plainBody": "Hindi nito sinasabi kung gaano kalaking bahagi ng gawain ang nagmula sa AI. Sinasabi nitong may mahalagang impluwensiya ang AI sa resulta at may isang makikilalang tao o organisasyong naninindigan sa desisyong gamitin ito.",
      "plainQuote": "Tatlong karakter ang nagpapakita ng parehong pakikilahok at pananagutan.",
      "fullDocument": "Buong dokumento",
      "specification": "Espesipikasyon",
      "statusLabel": "Katayuan",
      "statusValue": "Borador",
      "versionLabel": "Bersyon",
      "markLabel": "Kanonikal na marka",
      "contents": "Nilalaman",
      "footerLine": "Bukas na notasyon. Pananagutang pantao.",
      "versionFooter": "Espesipikasyon v0.1",
      "translationNote": "Ang saling ito ay para sa impormasyon. Kung may pagkakaiba, ang orihinal na tekstong Ingles ang normatibong dokumento.",
      "colourChanged": "Ang kulay ng highlight ay ginawang {colour}."
    },
    untranslatedNotice: {
      "badge": "Hindi pa isinalin",
      "headline": "Ang espesipikasyon sa ibaba ay nasa Ingles.",
      "detail": "Hindi pa naisalin ang wikang ito. Ang tekstong Ingles ang normatibong bersyon sa lahat ng pagkakataon."
    },
    endonym: "Filipino",
    sections: [
      {
        number: "1",
        title: "Layunin",
        body: `
            <p>Ang notasyong <code>+AI</code> ay nagbibigay ng maikli at siksik na paraan upang matukoy na ang isang artipakto ay tinulungan nang substansyal ng artipisyal na katalinuhan, habang tinutukoy din ang tao o organisasyong tumatanggap ng pananagutan sa naging resulta ng artipakto.</p>
            <p>Ang kanonikal na pagpapahayag ay:</p>
            <p class="canonical"><code>&lt;Partidong May Pananagutan&gt; +AI</code></p>
            <p>Halimbawa:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Ang pangunahing kahulugan nito ay:</p>
            <p class="canonical">Tumulong ang AI. Ako ang may pananagutan.</p>`
      },
      {
        number: "2",
        title: "Prinsipyo ng disenyo",
        body: `
            <p>Ang <code>+AI</code> ay hindi nagtatangkang tukuyin kung ang isang artipakto ay “likha ng tao” o “likha ng AI.”</p>
            <p>Ang mga modernong artipakto ay maaaring paulit-ulit na dumaan sa pagitan ng tao at ng mga sistema ng artipisyal na katalinuhan habang isinasagawa ang paglikha.</p>
            <p>Sa halip, ang <code>+AI</code> ay naghahatid ng dalawang katotohanan:</p>
            <ol>
              <li>ang artipisyal na katalinuhan ay tumulong nang substansyal sa gawain; at</li>
              <li>may natutukoy na tao o organisasyong tumatanggap ng pananagutan sa naging resulta ng artipakto.</li>
            </ol>
            <p>Kaya naman, ang pamantayang ito ay tumutukoy sa <strong>paglahok ng AI at kapanagutan ng tao</strong>, at hindi sa eksklusibong pagka-may-akda.</p>`
      },
      {
        number: "3",
        title: "Normatibong terminolohiya",
        body: `
            <p>Ang mga terminong <strong>KINAKAILANGAN (MUST)</strong>, <strong>IPINAGBABAWAL (MUST NOT)</strong>, <strong>DAPAT (SHOULD)</strong>, <strong>HINDI DAPAT (SHOULD NOT)</strong>, at <strong>MAAARI (MAY)</strong> ay mga normatibong kahingian sa loob ng espesipikasyong ito.</p>
            <p>Ang <strong>KINAKAILANGAN (MUST)</strong> ay nagsasaad ng ganap na kahingian.</p>
            <p>Ang <strong>IPINAGBABAWAL (MUST NOT)</strong> ay nagsasaad ng ganap na pagbabawal.</p>
            <p>Ang <strong>DAPAT (SHOULD)</strong> ay nagsasaad ng mariing rekomendasyon na maaaring lihisan kung may lehitimong kadahilanan.</p>
            <p>Ang <strong>HINDI DAPAT (SHOULD NOT)</strong> ay nagsasaad ng kagawiang karaniwang iniiwasan ngunit posibleng mabigyang-katwiran sa ilang partikular na pagkakataon.</p>
            <p>Ang <strong>MAAARI (MAY)</strong> ay nagsasaad ng opsyonal na kagawian.</p>`
      },
      {
        number: "4",
        title: "Kanonikal na notasyon",
        body: `
            <p>Ang kanonikal na marka ay:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Ang kanonikal na anyong nababasa ng tao ay:</p>
            <p><strong><code>&lt;Partidong May Pananagutan&gt; +AI</code></strong></p>
            <p>Mga halimbawa:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Ang marka ay sensitibo sa laki ng titik.</p>
            <p>Ang kanonikal na anyo ay KINAKAILANGAN gumamit ng:</p>
            <ul>
              <li>tandang plus <code>+</code>;</li>
              <li>na agad na sinusundan ng malalaking titik Latin <code>AI</code>;</li>
              <li>na walang panloob na espasyo.</li>
            </ul>
            <p>Kaya naman, ang <code>+AI</code> ay kanonikal.</p>
            <p>Ang mga sumusunod ay hindi kanonikal na katumbas:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Ang mga baryante ay MAAARI na tukuyin sa hinaharap sa pamamagitan ng mga ekstensyon ng espesipikasyong ito, ngunit IPINAGBABAWAL na ipagpalagay na taglay nila ang kanonikal na kahulugan ng <code>+AI</code> maliban kung tahasang tinukoy.</p>`
      },
      {
        number: "5",
        title: "Kahulugan ng marka",
        body: `
            <p>Ang partidong may pananagutan na gumagamit ng <code>+AI</code> ay nagdedeklara na:</p>
            <h4>5.1 Paglahok ng AI</h4>
            <p>Ang artipisyal na katalinuhan ay tumulong nang substansyal sa paglikha, pagsusuri, pagbabago, pagbuo, pagtatasa, pagbabalangkas o paglalahad ng kaugnay na artipakto.</p>
            <h4>5.2 Kaalaman</h4>
            <p>Alam ng partidong may pananagutan o may sapat siyang batayan upang manalig na naganap ang substansyal na pagtulong ng AI.</p>
            <h4>5.3 Awtoridad</h4>
            <p>Ang partidong may pananagutan ay nagpahintulot, nagpasimula, nagdirekta o may kaalamang tinanggap ang kaugnay na paggamit ng artipisyal na katalinuhan.</p>
            <h4>5.4 Kontrol ng tao o organisasyon</h4>
            <p>Pinanatili ng partidong may pananagutan ang awtoridad kung ang artipakto ay ilalathala, ipapadala, ipapatupad, isusumite, ilalahad o kung hindi man ay ipapalabas.</p>
            <h4>5.5 Pagtanggap</h4>
            <p>Tinatanggap ng partidong may pananagutan ang artipakto sa anyong ipinapakita ito.</p>
            <h4>5.6 Pananagutan</h4>
            <p>Tinatanggap ng partidong may pananagutan ang pananagutan sa pasyang ipalabas, gamitin o iprisinta ang artipakto.</p>
            <p>Ang mga elementong ito, sa kabuuan, ang bumubuo sa deklarasyong <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Substansyal na pagtulong",
        body: `
            <p>Ang marka ay DAPAT gamitin kapag ang paglahok ng AI ay substansyal na nakaapekto sa naging resulta ng artipakto.</p>
            <p>Ang substansyal na pagtulong ay maaaring may kinalaman sa kontribusyon ng AI sa:</p>
            <ul>
              <li>pagsulat;</li><li>pangangatwiran;</li><li>pagsusuri;</li><li>mga rekomendasyon;</li>
              <li>sintesis ng pananaliksik;</li><li>kodigo ng software;</li><li>interpretasyon ng datos;</li>
              <li>disenyo;</li><li>mga larawan;</li><li>audio;</li><li>bidyo;</li>
              <li>pagsasalin kung saan naganap ang substantibong interpretasyon;</li><li>pagpaplano;</li>
              <li>suporta sa pagpapasya;</li><li>gawaing matematikal o teknikal;</li>
              <li>pag-edit na substansyal na nagbabago ng kahulugan;</li>
              <li>o iba pang substantibong gawaing intelektwal o malikhain.</li>
            </ul>
            <p>Ang insidental o purong mekanikal na gamit ng AI ay hindi laging nangangailangan ng <code>+AI</code>.</p>
            <p>Ang mga halimbawa ay maaaring kabilangan ng awtomatikong pagwawasto ng ispeling, pangunahing autocomplete, karaniwang pagpormat o iba pang tampok na hindi substansyal na nakaaapekto sa nilalaman ng isang artipakto.</p>
            <p>Ang mapagpasyang tanong ay hindi ang porsyento ng nilalamang ginawa ng AI.</p>
            <p>Ang mapagpasyang tanong ay:</p>
            <blockquote><strong>Substansyal ba ang naging impluwensya ng AI sa artipaktong inilalahad?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Pananagutan",
        body: `
            <p>Ang pananagutan ang tumutukoy sa likas na katangian ng <code>+AI</code>.</p>
            <p>Sa paggamit ng marka, ang partidong may pananagutan ay hindi naglilipat ng pananagutan sa isang sistema, modelo, tagapaglaan, ahente o kasangkapan ng artipisyal na katalinuhan.</p>
            <p>Ang pahayag na katumbas ng:</p>
            <blockquote>“Ang AI ang gumawa nito, kaya hindi ako ang may pananagutan dito.”</blockquote>
            <p>ay hindi katugma sa nilalayong kahulugan ng <code>+AI</code>.</p>
            <p>Ang partidong may pananagutan ay MAAARI na umasa nang malaki sa pagtulong ng AI.</p>
            <p>Ang partidong may pananagutan ay MAAARI na maglathala ng nilalamang may malaking impluwensiya mula sa AI.</p>
            <p>Ang partidong may pananagutan ay MAAARI na tanggapin ang mga mungkahing hindi niya magagawa nang mag-isa.</p>
            <p>Wala sa mga kalagayang ito ang humahadlang sa paggamit ng <code>+AI</code>, sa kondisyong ang partidong may pananagutan ay may kaalamang tumatanggap sa naging resulta ng artipakto at tumatanggap ng pananagutan sa paglalabas nito.</p>`
      },
      {
        number: "8",
        title: "Ang hindi kahulugan ng +AI",
        body: `
            <p>Maliban kung may karagdagang deklarasyong tahasang nagsasaad ng iba, ang <code>+AI</code> ay HINDI naninindigan na:</p>
            <ul>
              <li>ang artipakto ay walang kamalian;</li>
              <li>ang bawat pahayag na pangkatotohanan ay naberipika nang independyente;</li>
              <li>ang bawat sipi ay natiyak nang independyente;</li>
              <li>ang artipakto ay tumutugon sa anumang partikular na propesyonal na pamantayan;</li>
              <li>ang artipakto ay wasto sa aspetong legal;</li>
              <li>ang artipakto ay wasto sa aspetong medikal;</li>
              <li>ang artipakto ay ligtas para sa anumang partikular na layunin;</li>
              <li>ang artipakto ay walang taglay na alusinasyon;</li>
              <li>ang partidong may pananagutan ay personal na sumulat ng bawat sangkap;</li>
              <li>ang AI ang bumuo ng mayorya ng artipakto;</li>
              <li>ang AI ay bumuo lamang ng maliit na bahagi ng artipakto;</li>
              <li>ang artipakto ay orihinal;</li>
              <li>walang taglay na intelektwal na ari-arian ng ibang partido;</li>
              <li>walang kompidensyal na impormasyong ibinigay sa isang sistema ng AI;</li>
              <li>isang partikular na tagapaglaan, modelo o sistema ng AI ang ginamit;</li>
              <li>ang partidong may pananagutan ay sumasang-ayon sa bawat panandaliang produkto ng AI;</li>
              <li>o ang partidong may pananagutan ay kayang muling gawin o ipaliwanag ang panloob na pangangatwiran ng sistema ng AI.</li>
            </ul>
            <p>Ang <code>+AI</code> ay isang <strong>deklarasyon ng kapanagutan</strong>, hindi isang garantiya ng kawastuhan.</p>`
      },
      {
        number: "9",
        title: "Pagsusuri ng tao",
        body: `
            <p>Ang Bersyon 0.1 ay hindi humihingi na ang bawat sangkap ng isang artipakto ay manwal na suriin nang salita-sa-salita o elemento-sa-elemento.</p>
            <p>Gayunpaman, KINAKAILANGAN ng partidong may pananagutan na may kaalamang tanggapin ang artipaktong ipapalabas.</p>
            <p>Ang bulag o awtomatikong pagpapasa ng hindi nasuring produkto ng AI ay HINDI DAPAT iprisinta gamit ang <code>+AI</code> kung walang naganap na makabuluhang gawa ng pagtanggap ng tao.</p>
            <p>Ang mga bersyon sa hinaharap ng espesipikasyong ito ay MAAARI na magtakda ng mas mahigpit na mga markang panagarantiya na kumakatawan sa lubusang pagsusuri o independyenteng pagbeberipika.</p>`
      },
      {
        number: "10",
        title: "Mga indibidwal",
        body: `
            <p>Ang isang indibidwal ay MAAARI na ilapat ang notasyon pagkatapos ng kaniyang pangalan.</p>
            <p>Halimbawa:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Ang kahulugan nito ay:</p>
            <blockquote>Ang artipisyal na katalinuhan ay tumulong nang substansyal sa kaugnay na gawain, at tinatanggap ni Eric Mourant ang pananagutan sa paglalabas ng gawaing iyon.</blockquote>
            <p>Ang marka ay may kaugnayan sa kaakibat na artipakto o komunikasyon.</p>
            <p>Hindi ito nangangahulugang bawat aktibidad na isinasagawa ng indibidwal ay gumagamit ng artipisyal na katalinuhan.</p>`
      },
      {
        number: "11",
        title: "Mga organisasyon",
        body: `
            <p>Ang isang organisasyon ay MAAARI na gumamit ng <code>+AI</code>.</p>
            <p data-company-example>Halimbawa:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Ang kahulugan nito ay tinatanggap ng organisasyon ang pananagutan sa kaugnay na artipaktong tinulungan ng AI ayon sa naaangkop na mga estruktura ng pamamahala at awtoridad nito.</p>
            <p>Kung kapaki-pakinabang, MAAARI na tukuyin ang organisasyon at ang indibidwal na may pananagutan.</p>
            <p data-company-example>Halimbawa:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Email at pagmemensahe",
        body: `
            <p>Sa personal na komunikasyon, ang mas kanais-nais na paglalahad ay:</p>
            <p><strong>Lubos na gumagalang,<br>Eric Mourant +AI</strong></p>
            <p>Ang marka ay MAAARI na i-hyperlink sa isang kanonikal na paliwanag ng kahulugan nito.</p>
            <p>IPINAGBABAWAL na baguhin ng hyperlink ang nakikitang notasyon.</p>
            <p>KINAKAILANGAN na manatiling sapat ang payak na teksto upang maipahayag ang deklarasyon.</p>`
      },
      {
        number: "13",
        title: "Mga dokumento",
        body: `
            <p>Ang notasyon ay MAAARI na lumitaw sa isang patlang para sa may-akda, naghanda, tagasuri o partidong may pananagutan.</p>
            <p>Mga halimbawa:</p>
            <p><strong>May-akda: Eric Mourant +AI</strong></p>
            <p><strong>Inihanda ni: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Inilabas ng: JAPER Technology +AI</strong></p>
            <p>Ang paglalagay ay DAPAT maglinaw kung sinong tao o organisasyon ang tumatanggap ng pananagutan.</p>`
      },
      {
        number: "14",
        title: "Software",
        body: `
            <p>Ang notasyon ay MAAARI na gamitin sa mga repositoryo ng software, mga commit, mga header ng source code, dokumentasyon, mga tala sa paglabas at mga nabuong artipakto.</p>
            <p>Halimbawa:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Ang isang proyekto ay MAAARI na karagdagang magdeklara ng:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Ang gayong pahayag sa antas ng proyekto ay DAPAT tumukoy sa tao o organisasyong may pananagutan kung praktikal.</p>`
      },
      {
        number: "15",
        title: "Mga malikhaing artipakto",
        body: `
            <p>Ang notasyon ay MAAARI na kasama ng mga larawan, audio, bidyo, disenyo, ilustrasyon, presentasyon at iba pang malikhaing akda.</p>
            <p>Halimbawa:</p>
            <p><strong>Ginawa ni Eric Mourant +AI</strong></p>
            <p>Ang marka sa kaniyang sarili ay hindi tumutukoy kung aling mga elemento ang binuo o binago ng AI.</p>
            <p>Ang mas detalyadong metadata ng probenansa ay MAAARI na iugnay nang hiwalay.</p>`
      },
      {
        number: "16",
        title: "Pananaliksik at teknikal na gawain",
        body: `
            <p>Ang marka ay MAAARI na gamitin sa pananaliksik, siyentipiko, inhinyeriya o teknikal na gawain kung pinahihintulutan ng naaangkop na mga kahingiang institusyonal, pampublikasyon o propesyonal.</p>
            <p>IPINAGBABAWAL na iprisinta ang <code>+AI</code> bilang pamalit sa anumang mas tiyak na paghahayag na hinihingi ng isang publisher, regulator, employer, propesyonal na katawan o batas.</p>
            <p>Ang notasyon ay MAAARI na maging karagdagan sa gayong paghahayag.</p>`
      },
      {
        number: "17",
        title: "Representasyong nababasa ng makina",
        body: `
            <p>Ang mga sistema ay MAAARI na iprisinta ang deklarasyon gamit ang estrukturadong metadata.</p>
            <p>Ang pinakasimpleng representasyon ay:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Ang mas mayamang representasyon ay:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Ang mga anyong nababasa ng makina ay DAPAT mapanatili ang parehong semantikong kahulugan ng nakikitang notasyon.</p>`
      },
      {
        number: "18",
        title: "Pagpapatuloy",
        body: `
            <p>Ang notasyong <code>+AI</code> ay DAPAT makaligtas sa mga makatwirang pagbabago ng isang artipakto kung napapanatili ang atribusyon.</p>
            <p>Kabilang sa mga halimbawa ang pagpapalit sa pagitan ng mga pormat ng dokumento, pag-aarkibo, pag-iimprenta, pag-eksport, muling paglalathala at pagpapadala.</p>
            <p>Kung tinanggal ang metadata, ang nakikitang markang payak na teksto ay DAPAT manatiling sapat upang maiparating ang deklarasyon.</p>`
      },
      {
        number: "19",
        title: "Bukas na paggamit",
        body: `
            <p>Ang notasyong <code>+AI</code> ay nilalayon para sa walang-hadlang na pampublikong paggamit.</p>
            <p>Ang paggamit ng notasyon ay HINDI DAPAT mangailangan ng:</p>
            <ul>
              <li>pagpapatala;</li><li>pagkakasapi;</li><li>bayad;</li><li>sertipikasyon;</li>
              <li>pag-aapruba;</li><li>o paggamit ng anumang partikular na produkto o tagapaglaan ng AI.</li>
            </ul>
            <p>Ang pakinabang ng notasyon ay nakasalalay sa kakayahan nitong gumanap bilang pangkalahatang kombensiyon.</p>`
      },
      {
        number: "20",
        title: "Neutralidad",
        body: `
            <p>Ang <code>+AI</code> ay hindi nagpapahayag ng pagsang-ayon o pagtutol sa artipisyal na katalinuhan.</p>
            <p>Hindi ito nagsasaad kung ang paggamit ng AI ay kinakailangan, kanais-nais o higit na mainam kaysa sa gawaing tao na walang tulong.</p>
            <p>Itinatala lamang nito ang substansyal na paglahok ng AI at ang kapanagutan ng tao o organisasyon.</p>`
      },
      {
        number: "21",
        title: "Maling representasyon",
        body: `
            <p>Ang isang tao o organisasyon ay HINDI DAPAT gumamit ng <code>+AI</code> kung:</p>
            <ul>
              <li>walang natutukoy na partidong may pananagutan;</li>
              <li>ang pinangalanang partido ay hindi tumanggap sa artipakto;</li>
              <li>ang artipakto ay inilalabas nang awtomatiko na walang makabuluhang awtoridad ng tao;</li>
              <li>o ang notasyon ay ginagamit upang lumikha ng maling impresyon ng kapanagutan ng tao.</li>
            </ul>
            <p>Ang awtonomong produkto ng AI na walang makabuluhang pagtanggap ng tao ay nasa labas ng kanonikal na saklaw ng <code>+AI</code>.</p>
            <p>Ang mga espesipikasyon sa hinaharap ay MAAARI na magtakda ng notasyon para sa awtonomong produkto ng AI.</p>`
      },
      {
        number: "22",
        title: "Kaugnayan sa pagka-may-akda",
        body: `
            <p>Ang <code>+AI</code> ay sinasadyang hindi nagtatakda ng porsyento ng pagka-may-akda.</p>
            <p>Ang isang artipakto ay MAAARI na maglaman ng nangingibabaw na materyal na nagmula sa tao at kwalipikado pa rin.</p>
            <p>Ang isang artipakto ay MAAARI na maglaman ng nangingibabaw na materyal na nagmula sa AI at kwalipikado pa rin.</p>
            <p>Ang mahalagang pagsusulit ay kung:</p>
            <p><strong>Ang AI ay tumulong nang substansyal, at ang pinangalanang partido ay tumatanggap ng pananagutan sa resulta.</strong></p>`
      },
      {
        number: "23",
        title: "Kanonikal na pampublikong paliwanag",
        body: `
            <p>Kung kinakailangan ang maikling paliwanag, ang mas kanais-nais na pananalita ay:</p>
            <p class="canonical">Tumulong ang AI. Ako ang may pananagutan.</p>
            <p>Kung kinakailangan ang mas mahabang paliwanag:</p>
            <blockquote><strong>Ang <code>+AI</code> ay nangangahulugang ang artipisyal na katalinuhan ay tumulong nang substansyal sa gawaing ito at ang pinangalanang tao o organisasyon ay tumatanggap ng pananagutan sa naging resulta ng artipakto.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Ang pagsusulit sa +AI",
        body: `
            <p>Bago ilapat ang marka, ang isang tao ay kailangang makasagot ng <strong>oo</strong> sa dalawang tanong:</p>
            <p><strong>Substansyal ba ang naging tulong ng AI sa paggawa nito?</strong></p>
            <p><strong>Nakahanda ba akong tumanggap ng pananagutan sa paglalabas nito?</strong></p>
            <p>Kung oo ang dalawang sagot:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Mga ekstensyon sa hinaharap",
        body: `
            <p>Ang mga bersyon sa hinaharap ay MAAARI na magtakda ng karagdagang notasyon na tumutugon sa:</p>
            <ul>
              <li>maliit na pagtulong ng AI;</li><li>pangunahing pagbuo ng AI;</li><li>lubusang pagsusuri ng tao;</li>
              <li>independyenteng pagbeberipika;</li><li>gawain ng awtonomong ahente;</li>
              <li>kriptograpikong probenansa;</li><li>pagtukoy sa sistema ng AI;</li>
              <li>pagtukoy sa modelo;</li><li>o mga tanikala ng kontribusyon ng tao at makina.</li>
            </ul>
            <p>Ang gayong mga ekstensyon ay DAPAT mapanatili ang <code>+AI</code> bilang simpleng kanonikal na marka para sa:</p>
            <p class="canonical">Gawaing tinulungan ng AI na may natutukoy na pananagutan ng tao.</p>`
      },
      {
        number: "26",
        title: "Kanonikal na deklarasyon",
        body: `
            <p>Ang tao o organisasyong naglalapat ng <code>+AI</code> ay gumagawa ng sumusunod na deklarasyon:</p>
            <blockquote><strong>Ang artipisyal na katalinuhan ay tumulong nang substansyal sa gawaing ito. Pinili kong tanggapin, ilathala, ipadala, ipatupad o kung hindi man ay ipalabas ang naging resulta ng gawain, at tinatanggap ko ang pananagutan sa pasyang iyon at sa gawain sa anyong inilalahad ito.</strong></blockquote>
            <p>Ang pampublikong pagpapaikli nito ay:</p>
            <p class="canonical">Tumulong ang AI. Ako ang may pananagutan.</p>
            <p>Ang kanonikal na marka ay:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI Espesipikasyon Bersyon 0.1</p><p>Probenansa at Kapanagutan ng Tao at AI</p><strong>Tumulong ang AI. Ako ang may pananagutan.</strong>"
  });
})(window.PlusAISpecTranslations);
