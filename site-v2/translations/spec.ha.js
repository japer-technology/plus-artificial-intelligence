/*!
 * +AI Specification — Hausa (ha)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Script note: uses hooked characters ƙ ɓ ɗ; preserve them exactly.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → DOLE
 *   MUST NOT   → AN HANA
 *   SHOULD     → YA KAMATA
 *   SHOULD NOT → BAI KAMATA BA
 *   MAY        → ANA IYA
 */
(function (registry) {
  registry.register("ha", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI ya taimaka. Ni ke ɗaukar alhakin.",
      "description": "+AI yana nufin cewa hankalin wucin gadi ya taimaka sosai wajen aikin kuma wani mutum ko ƙungiya da aka bayyana suna karɓar alhakin sa.",
      "skip": "Tsallaka zuwa bayani",
      "language": "Harshe",
      "languageAria": "Zaɓi harshe",
      "theme": "Yanayin duhu",
      "themeDark": "Yanayin duhu",
      "themeLight": "Yanayin haske",
      "themeDarkAria": "Yi amfani da yanayin duhu",
      "themeLightAria": "Yi amfani da yanayin haske",
      "highlight": "Launin haskakawa",
      "highlightAria": "Zaɓi launin haskakawa bazuwar",
      "followedLink": "Bayanin ƙarin suna +AI",
      "heroTitle": "AI ya taimaka. Ni ke ɗaukar alhakin.",
      "heroLead": "Mutumin ko ƙungiyar da sunanta ke ɗauke da wannan mahaɗin suna yin bayani mai sauƙi: <strong>hankalin wucin gadi ya taimaka sosai wajen aikin, kuma suna karɓar alhakin fitar da shi.</strong>",
      "readSpec": "Karanta ƙayyadaddun bayanai",
      "meansHeading": "Abin da alamar ke faɗa",
      "meaningOneTitle": "AI ya shiga",
      "meaningOneBody": "AI ya taimaka sosai wajen ƙirƙira, nazari, sauyawa ko gabatar da aikin.",
      "meaningTwoTitle": "Mutum ne ya zaɓa",
      "meaningTwoBody": "Wani mutum ko ƙungiya sun amince da sakamakon da gangan kuma suka fitar da shi.",
      "meaningThreeTitle": "Alhaki yana nan a hannun ɗan Adam",
      "meaningThreeBody": "Wanda aka bayyana sunansa ba ya miƙa alhakin ga tsarin AI ko mai samar da shi.",
      "plainTitle": "Taimako a bayyane. Alhaki a bayyane.",
      "plainLead": "Alamar sanarwar ɗaukar alhaki ce, ba ikirarin cewa AI ne marubuci ba kuma ba garanti ba ne cewa aikin daidai ne.",
      "plainBody": "Ba ta bayyana yawan aikin da ya fito daga AI ba. Tana nuna cewa AI ya yi tasiri mai muhimmanci ga sakamakon kuma wani mutum ko ƙungiya da za a iya ganewa suna tsayawa bayan shawarar amfani da shi.",
      "plainQuote": "Haruffa uku suna bayyana shiga da alhaki.",
      "fullDocument": "Cikakken takarda",
      "specification": "Ƙayyadaddun bayanai",
      "statusLabel": "Matsayi",
      "statusValue": "Daftari",
      "versionLabel": "Sigar",
      "markLabel": "Alamar asali",
      "contents": "Abubuwan ciki",
      "footerLine": "Buɗaɗɗen tsari. Alhakin ɗan Adam.",
      "versionFooter": "Ƙayyadaddun bayanai v0.1",
      "translationNote": "Wannan fassara ce don bayani. Idan akwai saɓani, ainihin rubutun Turanci shi ne takardar hukuma.",
      "colourChanged": "An canza launin haskakawa zuwa {colour}."
    },
    untranslatedNotice: {
      "badge": "Ba a fassara ba",
      "headline": "Ƙayyadaddun bayanai a ƙasa an nuna su a Turanci.",
      "detail": "Ba a fassara wannan harshe ba tukuna. Rubutun Turanci shi ne sigar hukuma a kowane hali."
    },
    endonym: "Hausa",
    sections: [
      {
        number: "1",
        title: "Manufa",
        body: `
            <p>Alamar <code>+AI</code> tana samar da hanya mai sauƙi don nuna cewa wani abu da aka samar ya sami taimako mai muhimmanci daga hankalin wucin gadi, tare da nuna mutum ko ƙungiyar da ke ɗaukar alhakin abin da aka samar.</p>
            <p>Bayanin asali shi ne:</p>
            <p class="canonical"><code>&lt;Mai Ɗaukar Alhaki&gt; +AI</code></p>
            <p>Misali:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Ma'anarsa ta asali ita ce:</p>
            <p class="canonical">AI ya taimaka. Ni ke ɗaukar alhakin.</p>`
      },
      {
        number: "2",
        title: "Ƙa'idar ƙira",
        body: `
            <p><code>+AI</code> ba ya ƙoƙarin tantance ko abin da aka samar “ɗan adam ne ya ƙirƙira” ko kuwa “hankalin wucin gadi ne ya ƙirƙira.”</p>
            <p>Abubuwan zamani na iya wucewa sau da yawa tsakanin ɗan adam da tsarin hankalin wucin gadi a lokacin ƙirƙirar su.</p>
            <p>Maimakon haka, <code>+AI</code> yana isar da abubuwa biyu:</p>
            <ol>
              <li>hankalin wucin gadi ya taimaka a hanya mai muhimmanci ga aikin; kuma</li>
              <li>akwai mutum ko ƙungiya da za a iya ganewa wanda ke ɗaukar alhakin abin da aka samar.</li>
            </ol>
            <p>Saboda haka ƙa'idar tana da alaƙa da <strong>shiga na hankalin wucin gadi da ɗaukar alhaki na ɗan adam</strong>, ba wai marubucin keɓaɓɓe ba.</p>`
      },
      {
        number: "3",
        title: "Kalmomin ƙa'ida",
        body: `
            <p>Kalmomin <strong>DOLE (MUST)</strong>, <strong>AN HANA (MUST NOT)</strong>, <strong>YA KAMATA (SHOULD)</strong>, <strong>BAI KAMATA BA (SHOULD NOT)</strong>, da <strong>ANA IYA (MAY)</strong> su ne buƙatun ƙa'ida a cikin wannan takarda.</p>
            <p><strong>DOLE</strong> na nuna buƙata cikakkiya.</p>
            <p><strong>AN HANA</strong> na nuna haramci cikakke.</p>
            <p><strong>YA KAMATA</strong> na nuna shawara mai ƙarfi wadda za a iya barinta idan akwai dalili mai inganci.</p>
            <p><strong>BAI KAMATA BA</strong> na nuna al'amarin da ake guje wa a mafi yawan lokuta, amma wanda zai iya samun dalili a wasu yanayi na musamman.</p>
            <p><strong>ANA IYA</strong> na nuna al'amarin da ba wajibi ba.</p>`
      },
      {
        number: "4",
        title: "Rubutun asali",
        body: `
            <p>Alamar asali ita ce:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Tsarin asali wanda ɗan adam ke iya karantawa shi ne:</p>
            <p><strong><code>&lt;Mai Ɗaukar Alhaki&gt; +AI</code></strong></p>
            <p>Misalai:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Alamar tana kula da bambancin manyan baƙaƙe da ƙanana.</p>
            <p>Tsarin asali DOLE ya yi amfani da:</p>
            <ul>
              <li>alamar tarawa <code>+</code>;</li>
              <li>sannan nan da nan manyan baƙaƙen Latin <code>AI</code>;</li>
              <li>ba tare da wani fili a tsakiya ba.</li>
            </ul>
            <p>Saboda haka <code>+AI</code> shi ne na asali.</p>
            <p>Waɗannan ba daidai da tsarin asali ba:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>ANA IYA ayyana wasu bambance-bambance daga baya ta hanyar ƙari ga wannan takarda, amma AN HANA ɗaukar su a matsayin masu ɗauke da ma'anar asali ta <code>+AI</code> sai in an ayyana su a fili.</p>`
      },
      {
        number: "5",
        title: "Ma'anar alamar",
        body: `
            <p>Mai ɗaukar alhaki wanda ke amfani da <code>+AI</code> yana bayyana cewa:</p>
            <h4>5.1 Shiga na hankalin wucin gadi</h4>
            <p>Hankalin wucin gadi ya taimaka a hanya mai muhimmanci wajen ƙirƙira, nazari, sauyawa, samarwa, aunawa, tsarawa ko gabatar da abin da ake magana a kansa.</p>
            <h4>5.2 Sani</h4>
            <p>Mai ɗaukar alhaki ya sani ko yana da tabbaci mai ma'ana cewa an sami taimako mai muhimmanci daga hankalin wucin gadi.</p>
            <h4>5.3 Iko</h4>
            <p>Mai ɗaukar alhaki ya ba da izini, ya fara, ya jagoranci ko ya karɓi amfani da hankalin wucin gadi da sani.</p>
            <h4>5.4 Ikon ɗan adam ko ƙungiya</h4>
            <p>Mai ɗaukar alhaki ya riƙe ikon yanke shawara kan ko za a wallafa, aika, girka, miƙa, gabatar ko fitar da abin da aka samar.</p>
            <h4>5.5 Karɓa</h4>
            <p>Mai ɗaukar alhaki ya karɓi abin da aka samar a yadda ake gabatar da shi.</p>
            <h4>5.6 Ɗaukar alhaki</h4>
            <p>Mai ɗaukar alhaki yana ɗaukar alhakin shawarar fitarwa, amfani ko gabatar da abin da aka samar.</p>
            <p>Waɗannan abubuwa gaba ɗaya su ne bayanin <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Taimako mai muhimmanci",
        body: `
            <p>YA KAMATA a yi amfani da alamar idan shiga na hankalin wucin gadi ya shafi abin da aka samar a hanya mai muhimmanci.</p>
            <p>Taimako mai muhimmanci na iya haɗa da gudummawar hankalin wucin gadi ga:</p>
            <ul>
              <li>rubutu;</li><li>tunani;</li><li>nazari;</li><li>shawarwari;</li>
              <li>haɗa bincike;</li><li>lambar shirye-shirye;</li><li>fassarar bayanai;</li>
              <li>ƙira;</li><li>hotuna;</li><li>sauti;</li><li>bidiyo;</li>
              <li>fassara inda ake yin fassarar ma'ana mai zurfi;</li><li>tsarawa;</li>
              <li>taimakon yanke shawara;</li><li>aikin lissafi ko na fasaha;</li>
              <li>gyara wanda ke sauya ma'ana a hanya mai muhimmanci;</li>
              <li>ko wani aikin tunani ko ƙirƙira mai muhimmanci.</li>
            </ul>
            <p>Aikin hankalin wucin gadi na kaikaice ko na injina kaɗai ba lallai ne ya buƙaci <code>+AI</code> ba.</p>
            <p>Misalai na iya haɗa da gyaran rubutu ta atomatik, cikawa ta atomatik na yau da kullum, tsara rubutu na yau da kullum ko wasu abubuwa waɗanda ba sa shafar zubin abin da aka samar a hanya mai muhimmanci.</p>
            <p>Tambayar da ke yanke hukunci ba ita ce kaso nawa na abin da hankalin wucin gadi ya samar ba.</p>
            <p>Tambayar da ke yanke hukunci ita ce:</p>
            <blockquote><strong>Shin hankalin wucin gadi ya shafi abin da ake gabatarwa a hanya mai muhimmanci?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Ɗaukar alhaki",
        body: `
            <p>Ɗaukar alhaki shi ne ainihin siffar <code>+AI</code>.</p>
            <p>Ta amfani da alamar, mai ɗaukar alhaki ba ya mayar da alhakin ga wani tsarin hankalin wucin gadi, samfuri, mai bayarwa, wakili ko kayan aiki.</p>
            <p>Bayanin da yake daidai da:</p>
            <blockquote>“Hankalin wucin gadi ne ya samar da shi, saboda haka ba ni da alhakinsa.”</blockquote>
            <p>bai dace da ma'anar da <code>+AI</code> ke nufi ba.</p>
            <p>Mai ɗaukar alhaki ANA IYA dogara ƙwarai da gaske kan taimakon hankalin wucin gadi.</p>
            <p>Mai ɗaukar alhaki ANA IYA wallafa abin da hankalin wucin gadi ya samar a hanya mai muhimmanci.</p>
            <p>Mai ɗaukar alhaki ANA IYA karɓar shawarwarin da shi da kansa ba zai iya samar da su ba.</p>
            <p>Babu ɗaya daga cikin waɗannan yanayi da ke hana amfani da <code>+AI</code>, in dai mai ɗaukar alhaki ya karɓi abin da aka samar da sani kuma ya ɗauki alhakin fitar da shi.</p>`
      },
      {
        number: "8",
        title: "Abin da +AI ba ya nufi",
        body: `
            <p>Sai in wani ƙarin bayani ya faɗi akasin haka a fili, <code>+AI</code> BA ya tabbatar da cewa:</p>
            <ul>
              <li>abin da aka samar ba shi da kuskure;</li>
              <li>an tabbatar da kowane bayani na gaskiya da kansa;</li>
              <li>an duba kowace madogara da kanta;</li>
              <li>abin da aka samar ya cika wata ƙa'idar sana'a ta musamman;</li>
              <li>abin da aka samar daidai ne a fannin shari'a;</li>
              <li>abin da aka samar daidai ne a fannin likitanci;</li>
              <li>abin da aka samar yana da aminci ga wata manufa ta musamman;</li>
              <li>abin da aka samar ba shi da wani ƙirƙirarren bayani na ƙarya;</li>
              <li>mai ɗaukar alhaki shi da kansa ya rubuta kowane sashi;</li>
              <li>hankalin wucin gadi ya samar da mafi yawan abin;</li>
              <li>hankalin wucin gadi ya samar da ƙaramin sashi kaɗai na abin;</li>
              <li>abin da aka samar na asali ne;</li>
              <li>babu wata mallakar tunani ta wani ɓangare na uku a ciki;</li>
              <li>ba a ba wani tsarin hankalin wucin gadi bayanan sirri ba;</li>
              <li>an yi amfani da wani mai bayarwa, samfuri ko tsarin hankalin wucin gadi na musamman;</li>
              <li>mai ɗaukar alhaki ya yarda da kowane sakamako na tsaka-tsaki daga hankalin wucin gadi;</li>
              <li>ko kuma mai ɗaukar alhaki zai iya sake samarwa ko bayyana tunanin cikin gida na tsarin hankalin wucin gadi.</li>
            </ul>
            <p><code>+AI</code> <strong>bayanin ɗaukar alhaki</strong> ne, ba tabbacin daidaito ba.</p>`
      },
      {
        number: "9",
        title: "Dubawar ɗan adam",
        body: `
            <p>Sigar 0.1 ba ta buƙatar a duba kowane sashi na abin da aka samar da hannu kalma-kalma ko sashi-sashi ba.</p>
            <p>Amma DOLE mai ɗaukar alhaki ya karɓi abin da ake fitarwa da sani.</p>
            <p>BAI KAMATA BA a wakilta aikawa ta atomatik ko ta rashin dubawa na sakamakon hankalin wucin gadi da <code>+AI</code> inda babu wani aikin karɓa mai ma'ana daga ɗan adam.</p>
            <p>Sigogin nan gaba na wannan takarda ANA IYA ayyana alamun tabbaci masu ƙarfi da ke wakiltar cikakkiyar dubawa ko tabbatarwa mai zaman kanta.</p>`
      },
      {
        number: "10",
        title: "Mutane",
        body: `
            <p>Mutum ANA IYA sanya alamar bayan sunansa.</p>
            <p>Misali:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Wannan na nufin:</p>
            <blockquote>Hankalin wucin gadi ya taimaka a hanya mai muhimmanci ga aikin da ake magana a kansa, kuma Eric Mourant yana ɗaukar alhakin fitar da wannan aiki.</blockquote>
            <p>Alamar tana da alaƙa da abin ko saƙon da ake magana a kansa.</p>
            <p>Ba lallai ne ta nufi cewa kowane aikin da mutumin yake yi yana amfani da hankalin wucin gadi ba.</p>`
      },
      {
        number: "11",
        title: "Ƙungiyoyi",
        body: `
            <p>Ƙungiya ANA IYA amfani da <code>+AI</code>.</p>
            <p data-company-example>Misali:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Wannan na nufin cewa ƙungiyar tana ɗaukar alhakin abin da aka samar da taimakon hankalin wucin gadi bisa tsarin mulki da ikonta da suka dace.</p>
            <p>Inda ya dace, ANA IYA nuna ƙungiya da mutumin da ke ɗaukar alhaki gaba ɗaya.</p>
            <p data-company-example>Misali:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Imel da saƙonni",
        body: `
            <p>A cikin saƙon sirri, tsarin da aka fi so shi ne:</p>
            <p><strong>Gaisuwa mai yawa,<br>Eric Mourant +AI</strong></p>
            <p>ANA IYA haɗa alamar da mahaɗi zuwa bayanin asali na ma'anarta.</p>
            <p>AN HANA mahaɗi ya sauya alamar da ake gani.</p>
            <p>DOLE rubutu mai sauƙi ya ci gaba da isa don bayyana wannan bayani.</p>`
      },
      {
        number: "13",
        title: "Takardu",
        body: `
            <p>ANA IYA sanya alamar a filin marubuci, mai shiryawa, mai dubawa ko mai ɗaukar alhaki.</p>
            <p>Misalai:</p>
            <p><strong>Marubuci: Eric Mourant +AI</strong></p>
            <p><strong>Wanda ya shirya: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Wanda ya fitar: JAPER Technology +AI</strong></p>
            <p>YA KAMATA wurin da aka sanya ta ya bayyana a fili wane mutum ko ƙungiya ke ɗaukar alhaki.</p>`
      },
      {
        number: "14",
        title: "Shirye-shiryen kwamfuta",
        body: `
            <p>ANA IYA amfani da alamar a wuraren adana shirye-shirye, a rajistar sauye-sauye, a kan gaban lambar tushe, a takardun bayani, a bayanan sakin sigogi da abubuwan da aka samar.</p>
            <p>Misali:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Aiki ANA IYA ƙari da bayyana cewa:</p>
            <pre><code>Wannan aikin yana amfani da +AI.</code></pre>
            <p>YA KAMATA irin wannan bayani na matakin aiki ya nuna mutum ko ƙungiyar da ke ɗaukar alhaki inda hakan zai yiwu.</p>`
      },
      {
        number: "15",
        title: "Abubuwan ƙirƙira",
        body: `
            <p>ANA IYA sanya alamar tare da hotuna, sauti, bidiyo, ƙira, zane-zane, gabatarwa da sauran ayyukan ƙirƙira.</p>
            <p>Misali:</p>
            <p><strong>Wanda ya ƙirƙira Eric Mourant +AI</strong></p>
            <p>Alamar da kanta ba ta bayyana waɗanne sassa ne hankalin wucin gadi ya samar ko ya sauya ba.</p>
            <p>ANA IYA haɗa cikakkun bayanan asali daban.</p>`
      },
      {
        number: "16",
        title: "Bincike da aikin fasaha",
        body: `
            <p>ANA IYA amfani da alamar a cikin bincike, ayyukan kimiyya, injiniya ko fasaha inda buƙatun cibiyoyi, wallafa ko sana'a da suka dace suka ba da damar hakan.</p>
            <p>AN HANA gabatar da <code>+AI</code> a matsayin abin da ke maye gurbin wani bayani na musamman da mai wallafa, mai kula da doka, ma'aikaci, ƙungiyar sana'a ko doka ke buƙata.</p>
            <p>ANA IYA amfani da alamar don ƙara wa irin wannan bayani.</p>`
      },
      {
        number: "17",
        title: "Tsarin da injina ke iya karantawa",
        body: `
            <p>Tsare-tsare ANA IYA gabatar da bayanin ta hanyar bayanan da aka tsara.</p>
            <p>Mafi ƙarancin tsari shi ne:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Tsari mafi cikakke shi ne:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>YA KAMATA tsarin da injina ke iya karantawa ya riƙe ma'ana ɗaya da alamar da ake gani.</p>`
      },
      {
        number: "18",
        title: "Wanzuwa",
        body: `
            <p>YA KAMATA alamar <code>+AI</code> ta wanzu bayan sauye-sauye masu ma'ana na abin da aka samar inda aka riƙe nuna asalinsa.</p>
            <p>Misalai sun haɗa da sauya tsarin takardu, adanawa, bugawa, fitarwa, sake wallafawa da aikawa.</p>
            <p>Inda aka cire bayanan tsarin, YA KAMATA alamar rubutu mai sauƙi da ake gani ta ci gaba da isa don isar da wannan bayani.</p>`
      },
      {
        number: "19",
        title: "Amfani na kowa",
        body: `
            <p>An yi alamar <code>+AI</code> don amfanin jama'a ba tare da wani takunkumi ba.</p>
            <p>BAI KAMATA BA amfani da alamar ya buƙaci:</p>
            <ul>
              <li>rajista;</li><li>zama memba;</li><li>biyan kuɗi;</li><li>takardar shaida;</li>
              <li>izini;</li><li>ko amfani da wani samfuri ko mai bayar da hankalin wucin gadi na musamman.</li>
            </ul>
            <p>Amfanin alamar ya dogara kan iyawarta ta zama al'ada ta duniya.</p>`
      },
      {
        number: "20",
        title: "Tsaka-tsaki",
        body: `
            <p><code>+AI</code> ba ya nuna yarda ko rashin yarda da hankalin wucin gadi.</p>
            <p>Ba ya nuna ko amfani da hankalin wucin gadi ya zama dole, abin so ko mafi kyau daga aikin ɗan adam ba tare da taimako ba.</p>
            <p>Yana rubuta shiga mai muhimmanci na hankalin wucin gadi da ɗaukar alhaki na ɗan adam ko ƙungiya kaɗai.</p>`
      },
      {
        number: "21",
        title: "Gabatarwa ta ƙarya",
        body: `
            <p>BAI KAMATA BA mutum ko ƙungiya ta yi amfani da <code>+AI</code> inda:</p>
            <ul>
              <li>babu wani mai ɗaukar alhaki da za a iya ganewa;</li>
              <li>wanda aka ambata bai karɓi abin da aka samar ba;</li>
              <li>ana fitar da abin ta atomatik ba tare da wani iko mai ma'ana na ɗan adam ba;</li>
              <li>ko kuma ana amfani da alamar don ƙirƙirar tunanin ƙarya na ɗaukar alhaki na ɗan adam.</li>
            </ul>
            <p>Sakamakon hankalin wucin gadi mai zaman kansa ba tare da karɓa mai ma'ana daga ɗan adam ba yana wajen iyakar asali na <code>+AI</code>.</p>
            <p>Takardun nan gaba ANA IYA ayyana alama don sakamakon hankalin wucin gadi mai zaman kansa.</p>`
      },
      {
        number: "22",
        title: "Alaƙa da marubuciya",
        body: `
            <p><code>+AI</code> da gangan ba ya ba da kaso na marubuciya.</p>
            <p>Abin da aka samar ANA IYA ƙunshi mafi yawa abin da ɗan adam ya samar kuma har yanzu ya dace.</p>
            <p>Abin da aka samar ANA IYA ƙunshi mafi yawa abin da hankalin wucin gadi ya samar kuma har yanzu ya dace.</p>
            <p>Gwajin da ya dace shi ne ko:</p>
            <p><strong>hankalin wucin gadi ya taimaka a hanya mai muhimmanci, kuma wanda aka ambata yana ɗaukar alhakin sakamakon.</strong></p>`
      },
      {
        number: "23",
        title: "Bayani na asali ga jama'a",
        body: `
            <p>Inda ake buƙatar ɗan gajeren bayani, kalmomin da aka fi so su ne:</p>
            <p class="canonical">AI ya taimaka. Ni ke ɗaukar alhakin.</p>
            <p>Inda ake buƙatar bayani mai tsawo:</p>
            <blockquote><strong><code>+AI</code> na nufin cewa hankalin wucin gadi ya taimaka a hanya mai muhimmanci ga wannan aiki kuma mutum ko ƙungiyar da aka ambata tana ɗaukar alhakin abin da aka samar.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Gwajin +AI",
        body: `
            <p>Kafin sanya alamar, mutum zai iya amsa <strong>eh</strong> ga tambayoyi biyu:</p>
            <p><strong>Shin hankalin wucin gadi ya taimaka a hanya mai muhimmanci wajen samar da wannan?</strong></p>
            <p><strong>Shin ina son ɗaukar alhakin fitar da shi?</strong></p>
            <p>Idan amsoshin biyu eh ne:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Ƙari na nan gaba",
        body: `
            <p>Sigogin nan gaba ANA IYA ayyana ƙarin alamu da suka shafi:</p>
            <ul>
              <li>ƙaramin taimako na hankalin wucin gadi;</li><li>samarwa ta hankalin wucin gadi da farko;</li><li>cikakkiyar dubawar ɗan adam;</li>
              <li>tabbatarwa mai zaman kanta;</li><li>aikin wakili mai zaman kansa;</li>
              <li>asali ta hanyar sirrin lissafi;</li><li>nuna tsarin hankalin wucin gadi;</li>
              <li>nuna samfuri;</li><li>ko sarƙoƙi na gudummawar ɗan adam da na injina.</li>
            </ul>
            <p>YA KAMATA irin waɗannan ƙari su riƙe <code>+AI</code> a matsayin alamar asali mai sauƙi don:</p>
            <p class="canonical">Aiki da taimakon AI tare da alhakin ɗan adam da za a iya ganewa.</p>`
      },
      {
        number: "26",
        title: "Bayanin asali",
        body: `
            <p>Mutum ko ƙungiyar da ke sanya <code>+AI</code> tana yin wannan bayani:</p>
            <blockquote><strong>Hankalin wucin gadi ya taimaka a hanya mai muhimmanci ga wannan aiki. Na zaɓi karɓa, wallafa, aika, girka ko fitar da aikin da aka samar, kuma ina ɗaukar alhakin wannan shawara da kuma aikin yadda aka gabatar da shi.</strong></blockquote>
            <p>Taƙaitaccen bayani ga jama'a shi ne:</p>
            <p class="canonical">AI ya taimaka. Ni ke ɗaukar alhakin.</p>
            <p>Alamar asali ita ce:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Takardar +AI sigar 0.1</p><p>Asalin Ɗan Adam da AI da Ɗaukar Alhaki</p><strong>AI ya taimaka. Ni ke ɗaukar alhakin.</strong>"
  });
})(window.PlusAISpecTranslations);
