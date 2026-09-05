/*!
 * +AI Specification — Javanese (jv)
 * Status: reviewed translation.
 * Interface chrome: AI-generated, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → KEDAH
 *   MUST NOT   → ORA KENGING
 *   SHOULD     → PRAYOGA
 *   SHOULD NOT → ORA PRAYOGA
 *   MAY        → KENGING
 *
 * Script note: Modern Latin-script Javanese, formal (krama) register. The
 * canonical slogan is rendered once as “AI mbiyantu. Kula ingkang tanggel
 * jawab.” and reused verbatim in sections 1, 23, 26 and the closing panel.
 */
(function (registry) {
  registry.register("jv", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI mbiyantu. Kula ingkang tanggel jawab.",
      "description": "+AI tegesipun kapinteran artifisial sampun mbiyantu kanthi wigati wonten ing karya punika, lan tiyang utawi organisasi ingkang kasebat nampi tanggel jawabipun.",
      "skip": "Menyang panjelasan",
      "language": "Basa",
      "languageAria": "Pilih basa",
      "theme": "Mode peteng",
      "themeDark": "Mode peteng",
      "themeLight": "Mode padhang",
      "themeDarkAria": "Anggen mode peteng",
      "themeLightAria": "Anggen mode padhang",
      "highlight": "Werna sorotan",
      "highlightAria": "Pilih werna sorotan kanthi acak",
      "followedLink": "Katrangan post-nominal +AI",
      "heroTitle": "AI mbiyantu. Kula ingkang tanggel jawab.",
      "heroLead": "Tiyang utawi organisasi ingkang namanipun nggadhahi pranala punika ngandharaken deklarasi prasaja: <strong>kapinteran artifisial sampun mbiyantu kanthi wigati wonten ing karya punika, lan piyambakipun nampi tanggel jawab kangge ngetokaken karya punika.</strong>",
      "readSpec": "Waca spesifikasi",
      "meansHeading": "Ingkang dipunandharaken tandha punika",
      "meaningOneTitle": "AI tumut",
      "meaningOneBody": "AI mbiyantu kanthi wigati wonten ing damel, nganalisis, ngowahi utawi nampilaken karya punika.",
      "meaningTwoTitle": "Manungsa ingkang milih",
      "meaningTwoBody": "Tiyang utawi organisasi kanthi sengaja nampi lan ngetokaken asilipun.",
      "meaningThreeTitle": "Tanggel jawab tetep wonten ing manungsa",
      "meaningThreeBody": "Pihak ingkang kasebat boten mindhahaken akuntabilitas dhateng sistem utawi panyedhiya AI.",
      "plainTitle": "Pitulungan ingkang transparan. Akuntabilitas ingkang katingal.",
      "plainLead": "Tandha punika deklarasi akuntabilitas, sanes pratelan bilih AI punika panganggit lan sanes jaminan bilih karya punika leres.",
      "plainBody": "Boten ngandharaken pira saking karya punika asalipun saking AI. Ngandharaken bilih AI mangaruhi asilipun kanthi wigati lan wonten tiyang utawi organisasi ingkang saged dipunmangertosi wonten ing wingkingipun putusan ngginakaken.",
      "plainQuote": "Tigang aksara ndadosaken partisipasi lan tanggel jawab sami katingal.",
      "fullDocument": "Dokumen jangkep",
      "specification": "Spesifikasi",
      "statusLabel": "Status",
      "statusValue": "Draf",
      "versionLabel": "Versi",
      "markLabel": "Tandha kanonik",
      "contents": "Isi",
      "footerLine": "Notasi kabikak. Tanggel jawab manungsa.",
      "versionFooter": "Spesifikasi v0.1",
      "translationNote": "Terjemahan punika namung kangge informasi. Menawi wonten benten, teks Inggris aslinipun ingkang dados dokumen normatif.",
      "colourChanged": "Werna sorotan sampun dipun-gantos dados {colour}."
    },
    untranslatedNotice: {
      "badge": "Dereng dipunjarwakaken",
      "headline": "Spesifikasi ing ngandhap dipun-tampilaken ing basa Inggris.",
      "detail": "Basa punika dereng dipunjarwakaken. Teks Inggris inggih versi normatif ing sedaya kawontenan."
    },
    endonym: "Basa Jawa",
    sections: [
      {
        number: "1",
        title: "Ancas",
        body: `
            <p>Notasi <code>+AI</code> nyediyakaken cara ingkang cekak kanggé nedahaken bilih satunggaling artefak dipunbiyantu kanthi wigati déning kapinteran artifisial, sinambi nyebutaken manungsa utawi organisasi ingkang nampi tanggel jawab tumrap artefak ingkang kadadosan.</p>
            <p>Ungkapan kanoniké inggih menika:</p>
            <p class="canonical"><code>&lt;Pihak Ingkang Tanggel Jawab&gt; +AI</code></p>
            <p>Tuladha:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Teges ingkang baku inggih menika:</p>
            <p class="canonical">AI mbiyantu. Kula ingkang tanggel jawab.</p>`
      },
      {
        number: "2",
        title: "Prinsip rancangan",
        body: `
            <p><code>+AI</code> boten ngudi netepaken punapa satunggaling artefak menika “karyaning manungsa” utawi “karyaning AI”.</p>
            <p>Artefak jaman samangké saged pindhah wongsal-wangsul antawisipun manungsa lan sistem kapinteran artifisial sadangunipun proses panyiptanipun.</p>
            <p>Kosokwangsulipun, <code>+AI</code> ngandharaken kalih kanyatan:</p>
            <ol>
              <li>kapinteran artifisial mbiyantu pakaryan menika kanthi wigati; saha</li>
              <li>manungsa utawi organisasi ingkang saged dipuntepangi nampi tanggel jawab tumrap artefak ingkang kadadosan.</li>
            </ol>
            <p>Mila standar menika gegayutan kaliyan <strong>katutsertaning AI saha akuntabilitas manungsa</strong>, sanès kapangaranganing tunggal.</p>`
      },
      {
        number: "3",
        title: "Terminologi normatif",
        body: `
            <p>Tembung <strong>KEDAH (MUST)</strong>, <strong>ORA KENGING (MUST NOT)</strong>, <strong>PRAYOGA (SHOULD)</strong>, <strong>ORA PRAYOGA (SHOULD NOT)</strong>, saha <strong>KENGING (MAY)</strong> minangka pasarat normatif ing salebeting spésifikasi menika.</p>
            <p><strong>KEDAH</strong> nedahaken pasarat ingkang mutlak.</p>
            <p><strong>ORA KENGING</strong> nedahaken pepacuh ingkang mutlak.</p>
            <p><strong>PRAYOGA</strong> nedahaken pamrayogi ingkang kiyat, ingkang saged dipunsimpangi menawi wonten alesan ingkang sah.</p>
            <p><strong>ORA PRAYOGA</strong> nedahaken lampah ingkang limrahipun dipunsingkiri, nanging saged ugi dipunwenangaken ing kawontenan tartamtu.</p>
            <p><strong>KENGING</strong> nedahaken lampah ingkang sipatipun pilihan.</p>`
      },
      {
        number: "4",
        title: "Notasi kanonik",
        body: `
            <p>Tandha kanoniké inggih menika:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Wangun kanonik ingkang kawaos manungsa inggih menika:</p>
            <p><strong><code>&lt;Pihak Ingkang Tanggel Jawab&gt; +AI</code></strong></p>
            <p>Tuladha:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Tandha menika sipatipun mbédakaken aksara ageng lan alit.</p>
            <p>Wangun kanonik KEDAH migunakaken:</p>
            <ul>
              <li>satunggaling tandha tambah <code>+</code>;</li>
              <li>ingkang lajeng dipunsusul aksara Latin kapital <code>AI</code>;</li>
              <li>tanpa spasi ing salebetipun.</li>
            </ul>
            <p>Mila <code>+AI</code> menika kanonik.</p>
            <p>Wangun-wangun ing ngandhap menika sanès padhanan kanonik:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Variyan KENGING dipuntetepaken ing wingking lumantar pangembangan spésifikasi menika, nanging variyan kasebut ORA KENGING dipunanggep ngemot teges kanonik <code>+AI</code> kajawi menawi katetepaken kanthi cetha.</p>`
      },
      {
        number: "5",
        title: "Tegesing tandha",
        body: `
            <p>Pihak ingkang tanggel jawab ingkang migunakaken <code>+AI</code> nyatakaken bilih:</p>
            <h4>5.1 Katutsertaning AI</h4>
            <p>Kapinteran artifisial mbiyantu kanthi wigati ing bab nyipta, nganalisis, ngowahi, ngasilaken, ngevaluasi, nyusun, utawi ngaturaken artefak ingkang gegayutan.</p>
            <h4>5.2 Kawruh</h4>
            <p>Pihak ingkang tanggel jawab mangertos utawi kanthi wicaksana pitados bilih sampun kadadosan pambiyantu AI ingkang wigati.</p>
            <h4>5.3 Wewenang</h4>
            <p>Pihak ingkang tanggel jawab sampun marengaken, miwiti, ngarahaken, utawi kanthi sadhar nampi panganggéning kapinteran artifisial ingkang gegayutan.</p>
            <h4>5.4 Pangendhalining manungsa utawi organisasi</h4>
            <p>Pihak ingkang tanggel jawab tetep nggadhahi wewenang netepaken punapa artefak kasebut badhé kaundhangaken, kakintunaken, kagelaraken, kaaturaken, kapitontonaken, utawi kawedalaken kanthi cara sanès.</p>
            <h4>5.5 Panampi</h4>
            <p>Pihak ingkang tanggel jawab nampi artefak kasebut ing wangun kados ingkang dipunaturaken.</p>
            <h4>5.6 Tanggel jawab</h4>
            <p>Pihak ingkang tanggel jawab nampi tanggel jawab tumrap putusan medalaken, migunakaken, utawi nedahaken artefak kasebut.</p>
            <p>Unsur-unsur menika sacara sesarengan mbentuk pratélan <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Pambiyantu ingkang wigati",
        body: `
            <p>Tandha menika PRAYOGA dipunginakaken menawi katutsertaning AI mangaribawani artefak ingkang kadadosan kanthi wigati.</p>
            <p>Pambiyantu ingkang wigati saged kalebet kontribusining AI tumrap:</p>
            <ul>
              <li>panulisan;</li><li>penalaran;</li><li>analisis;</li><li>pamrayogi;</li>
              <li>sintésis riset;</li><li>kode piranti lunak;</li><li>penafsiran data;</li>
              <li>rancangan;</li><li>gambar;</li><li>audio;</li><li>video;</li>
              <li>jarwan ingkang ing salebetipun kadadosan penafsiran substantif;</li><li>rancang-rancang;</li>
              <li>panyengkuyung putusan;</li><li>pakaryan matematis utawi téknis;</li>
              <li>panyuntingan ingkang ngowahi teges kanthi wigati;</li>
              <li>utawi pakaryan intelektual saha kreatif substantif sanèsipun.</li>
            </ul>
            <p>Fungsi AI ingkang namung sampiran utawi mligi mekanis boten mesthi mbetahaken <code>+AI</code>.</p>
            <p>Tuladhanipun saged kalebet koréksi éjaan otomatis, panglengkap otomatis prasaja, pamformatan lumrah, utawi fitur sanès ingkang boten mangaribawani wosing artefak kanthi wigati.</p>
            <p>Pitakèn ingkang nemtokaken sanès pinten persèn wosing ingkang dipunasilaken AI.</p>
            <p>Pitakèn ingkang nemtokaken inggih menika:</p>
            <blockquote><strong>Punapa AI mangaribawani artefak ingkang dipunaturaken menika kanthi wigati?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Tanggel jawab",
        body: `
            <p>Tanggel jawab menika sipat ingkang nemtokaken wujuding <code>+AI</code>.</p>
            <p>Kanthi migunakaken tandha menika, pihak ingkang tanggel jawab boten ngalihaken tanggel jawab dhateng sistem, modhèl, panyedhiya, agèn, utawi piranti kapinteran artifisial.</p>
            <p>Pratélan ingkang sami kaliyan:</p>
            <blockquote>“AI ingkang ngasilaken, mila kula boten tanggel jawab tumrap perkara menika.”</blockquote>
            <p>boten cundhuk kaliyan teges ingkang dipunkarsakaken <code>+AI</code>.</p>
            <p>Pihak ingkang tanggel jawab KENGING gumantung banget tumrap pambiyantu AI.</p>
            <p>Pihak ingkang tanggel jawab KENGING ngundhangaken wosing ingkang dipunasilaken AI kanthi wigati.</p>
            <p>Pihak ingkang tanggel jawab KENGING nampi pamrayogi ingkang boten saged dipunasilaken piyambak kanthi mandhiri.</p>
            <p>Boten wonten setunggal kawontenan kasebut ingkang ngalang-alangi panganggéning <code>+AI</code>, kanthi pasarat bilih pihak ingkang tanggel jawab kanthi sadhar nampi artefak ingkang kadadosan saha nampi tanggel jawab tumrap medalaken artefak menika.</p>`
      },
      {
        number: "8",
        title: "Bab ingkang boten dipuntegesi +AI",
        body: `
            <p>Kajawi menawi wonten pratélan tambahan ingkang nyatakaken kanthi cetha wonten bédanipun, <code>+AI</code> BOTEN negesaken bilih:</p>
            <ul>
              <li>artefak kasebut luput saking kalepatan;</li>
              <li>saben pratélan faktual sampun dipunverifikasi kanthi mandhiri;</li>
              <li>saben kutipan sampun dipunpriksa kanthi mandhiri;</li>
              <li>artefak kasebut netepi standar profesional tartamtu;</li>
              <li>artefak kasebut leres sacara hukum;</li>
              <li>artefak kasebut leres sacara médis;</li>
              <li>artefak kasebut aman kanggé ancas tartamtu;</li>
              <li>artefak kasebut boten ngemot halusinasi;</li>
              <li>pihak ingkang tanggel jawab nyerat piyambak saben komponènipun;</li>
              <li>AI ngasilaken perangan agengipun artefak kasebut;</li>
              <li>AI namung ngasilaken perangan alitipun artefak kasebut;</li>
              <li>artefak kasebut orisinal;</li>
              <li>boten wonten kagunan intelektual pihak katiga ing salebetipun;</li>
              <li>pawarta wados boten kaaturaken dhateng satunggaling sistem AI;</li>
              <li>panyedhiya, modhèl, utawi sistem AI tartamtu sampun dipunginakaken;</li>
              <li>pihak ingkang tanggel jawab sarujuk kaliyan saben wedalan AI ing tataran satengahan;</li>
              <li>utawi pihak ingkang tanggel jawab saged mbalèni utawi njlèntrèhaken penalaran internal sistem AI kasebut.</li>
            </ul>
            <p><code>+AI</code> menika <strong>pratélan akuntabilitas</strong>, sanès jaminan kaleresan.</p>`
      },
      {
        number: "9",
        title: "Panaliti déning manungsa",
        body: `
            <p>Vèrsi 0.1 boten mbetahaken saben komponèn artefak dipuntaliti kanthi manual tembung mbaka tembung utawi unsur mbaka unsur.</p>
            <p>Éwadéné makaten, pihak ingkang tanggel jawab KEDAH kanthi sadhar nampi artefak ingkang kawedalaken kasebut.</p>
            <p>Nerusaken wedalan AI ingkang durung dipuntaliti, kanthi wuta utawi otomatis, ORA PRAYOGA dipunwakili nganggé <code>+AI</code> menawi boten kadadosan tumindak panampi manungsa ingkang wigati.</p>
            <p>Vèrsi spésifikasi menika ing wingking KENGING netepaken tandha jaminan ingkang langkung kiyat, ingkang makili panaliti ingkang jangkep utawi verifikasi mandhiri.</p>`
      },
      {
        number: "10",
        title: "Pribadi",
        body: `
            <p>Satunggaling pribadi KENGING nyantunaken notasi menika sasampunipun asmanipun.</p>
            <p>Tuladha:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Menika ateges:</p>
            <blockquote>Kapinteran artifisial mbiyantu pakaryan ingkang gegayutan kanthi wigati, saha Eric Mourant nampi tanggel jawab tumrap medalaken pakaryan kasebut.</blockquote>
            <p>Tandha menika gegayutan kaliyan artefak utawi komunikasi ingkang kadhèrèkaken.</p>
            <p>Menika boten mesthi ateges bilih saben pakaryan ingkang katindakaken pribadi kasebut migunakaken kapinteran artifisial.</p>`
      },
      {
        number: "11",
        title: "Organisasi",
        body: `
            <p>Satunggaling organisasi KENGING migunakaken <code>+AI</code>.</p>
            <p data-company-example>Tuladha:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Menika ateges bilih organisasi kasebut mundhut tanggel jawab tumrap artefak gegayutan ingkang dipunbiyantu AI, miturut sistem tata kelola saha wewenang ingkang lumaku ing organisasi menika.</p>
            <p>Menawi migunani, organisasi saha pribadi ingkang tanggel jawab KENGING kasebutaken kekalihipun.</p>
            <p data-company-example>Tuladha:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Layang èlèktronik saha pesen",
        body: `
            <p>Ing komunikasi pribadi, panyajian ingkang dipunprayogakaken inggih menika:</p>
            <p><strong>Atur taklim kula,<br>Eric Mourant +AI</strong></p>
            <p>Tandha menika KENGING dipuntautaken dhateng katrangan kanonik ngéngingi tegesipun.</p>
            <p>Satunggaling tautan ORA KENGING ngowahi notasi ingkang katingal.</p>
            <p>Tèks lugu KEDAH tetep cekap kanggé ngandharaken pratélan kasebut.</p>`
      },
      {
        number: "13",
        title: "Dokumèn",
        body: `
            <p>Notasi menika KENGING kaserat ing kolom panyerat, panyusun, panaliti, utawi pihak ingkang tanggel jawab.</p>
            <p>Tuladha:</p>
            <p><strong>Panyerat: Eric Mourant +AI</strong></p>
            <p><strong>Dipunsusun déning: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Dipunwedalaken déning: JAPER Technology +AI</strong></p>
            <p>Panyèlèhipun PRAYOGA njlèntrèhaken sinten pribadi utawi organisasi ingkang mundhut tanggel jawab.</p>`
      },
      {
        number: "14",
        title: "Piranti lunak",
        body: `
            <p>Notasi menika KENGING dipunginakaken ing repositori piranti lunak, komit, tetenger kode sumber, dokumèntasi, cathetan riles, saha artefak ingkang dipunasilaken.</p>
            <p>Tuladha:</p>
            <pre><code>Panyerat: Eric Mourant +AI</code></pre>
            <p>Satunggaling proyèk KENGING nambahi pratélan makaten:</p>
            <pre><code>Proyèk menika ngginakaken +AI.</code></pre>
            <p>Pratélan ing tataran proyèk kados makaten PRAYOGA nyebutaken pribadi utawi organisasi ingkang tanggel jawab menawi saged katindakaken.</p>`
      },
      {
        number: "15",
        title: "Artefak kreatif",
        body: `
            <p>Notasi menika KENGING ndhèrèkaken gambar, audio, video, rancangan, ilustrasi, presèntasi, saha karya kreatif sanèsipun.</p>
            <p>Tuladha:</p>
            <p><strong>Dipundamel déning Eric Mourant +AI</strong></p>
            <p>Tandha menika piyambak boten nemtokaken unsur pundi ingkang dipunasilaken utawi dipunowahi AI.</p>
            <p>Métadata provenans ingkang langkung rinci KENGING kagandhèngaken kanthi pisah.</p>`
      },
      {
        number: "16",
        title: "Riset saha pakaryan téknis",
        body: `
            <p>Tandha menika KENGING dipunginakaken ing pakaryan riset, ilmiah, keteknikan, utawi téknis samangsa dipunkeparengaken déning pasarat kalembagan, pangundhangan, utawi kaprofesian ingkang lumaku.</p>
            <p><code>+AI</code> ORA KENGING dipunwakili minangka gantosipun pambukaan katrangan ingkang langkung mligi ingkang dipunwajibaken déning panerbit, regulator, majikan, badan profèsi, utawi angger-angger.</p>
            <p>Notasi menika KENGING nglengkapi pambukaan katrangan kados makaten.</p>`
      },
      {
        number: "17",
        title: "Wakil ingkang kawaos mesin",
        body: `
            <p>Sistem KENGING makili pratélan menika kanthi métadata kang katata.</p>
            <p>Wakil ingkang paling prasaja inggih menika:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Wakil ingkang langkung jangkep inggih menika:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Wangun ingkang kawaos mesin PRAYOGA njagi teges sémantik ingkang sami kaliyan notasi ingkang katingal.</p>`
      },
      {
        number: "18",
        title: "Kalestarèn",
        body: `
            <p>Notasi <code>+AI</code> PRAYOGA tetep lestari nglangkungi owah-owahan artefak ingkang lumrah, samangsa atribusinipun dipunjagi.</p>
            <p>Tuladhanipun kalebet konvèrsi antawis format dokumèn, pangarsipan, pangecapan, ékspor, pangundhangan malih, saha pangintunan.</p>
            <p>Menawi métadata kabusek, tandha ing tèks lugu ingkang katingal PRAYOGA tetep cekap kanggé ngandharaken pratélan kasebut.</p>`
      },
      {
        number: "19",
        title: "Panganggé kang mbukak",
        body: `
            <p>Notasi <code>+AI</code> dipunkarsakaken kanggé panganggé umum tanpa watesan.</p>
            <p>Panganggéning notasi menika ORA PRAYOGA mbetahaken:</p>
            <ul>
              <li>pandaftaran;</li><li>kaanggotan;</li><li>pambayaran;</li><li>sertifikasi;</li>
              <li>palilah;</li><li>utawi panganggéning produk utawi panyedhiya AI tartamtu.</li>
            </ul>
            <p>Kagunanipun notasi menika gumantung dhateng kasagedanipun makarya minangka konvènsi universal.</p>`
      },
      {
        number: "20",
        title: "Kanètralan",
        body: `
            <p><code>+AI</code> boten ngandharaken sarujuk utawi boten sarujuk tumrap kapinteran artifisial.</p>
            <p>Notasi menika boten nedahaken punapa panganggéning AI menika perlu, dipunkarsakaken, utawi langkung inggil tinimbang pakaryan manungsa tanpa pambiyantu.</p>
            <p>Notasi menika namung nyathet katutsertaning AI ingkang wigati saha akuntabilitas manungsa utawi organisasi.</p>`
      },
      {
        number: "21",
        title: "Pratélan ingkang nasaraken",
        body: `
            <p>Satunggaling pribadi utawi organisasi ORA PRAYOGA migunakaken <code>+AI</code> menawi:</p>
            <ul>
              <li>boten wonten pihak ingkang tanggel jawab ingkang saged dipuntepangi;</li>
              <li>pihak ingkang kasebutaken durung nampi artefak kasebut;</li>
              <li>artefak kasebut kawedalaken kanthi otomatis tanpa wewenang manungsa ingkang wigati;</li>
              <li>utawi notasi kasebut dipunginakaken kanggé nuwuhaken pangira goroh bab akuntabilitas manungsa.</li>
            </ul>
            <p>Wedalan AI otonom tanpa panampi manungsa ingkang wigati wonten ing sanjawining wewengkon kanonik <code>+AI</code>.</p>
            <p>Spésifikasi ing wingking KENGING netepaken notasi kanggé wedalan AI otonom.</p>`
      },
      {
        number: "22",
        title: "Gegayutan kaliyan kapangaranganing karya",
        body: `
            <p><code>+AI</code> kanthi jarag boten netepaken persèntase kapangaranganing karya.</p>
            <p>Satunggaling artefak KENGING ngemot bahan ingkang perangan agengipun saking manungsa lan tetep netepi pasarat.</p>
            <p>Satunggaling artefak KENGING ngemot bahan ingkang perangan agengipun saking AI lan tetep netepi pasarat.</p>
            <p>Ujian ingkang gegayutan inggih punapa:</p>
            <p><strong>AI mbiyantu kanthi wigati, saha pihak ingkang kasebutaken nampi tanggel jawab tumrap asilipun.</strong></p>`
      },
      {
        number: "23",
        title: "Katrangan umum kanonik",
        body: `
            <p>Menawi dipunbetahaken katrangan cekak, rumusan ingkang dipunprayogakaken inggih menika:</p>
            <p class="canonical">AI mbiyantu. Kula ingkang tanggel jawab.</p>
            <p>Menawi dipunbetahaken katrangan ingkang langkung panjang:</p>
            <blockquote><strong><code>+AI</code> ateges kapinteran artifisial mbiyantu pakaryan menika kanthi wigati saha pribadi utawi organisasi ingkang kasebutaken nampi tanggel jawab tumrap artefak ingkang kadadosan.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Ujian +AI",
        body: `
            <p>Sadèrèngipun nrapaken tandha menika, satunggaling pribadi kedahipun saged mangsuli <strong>inggih</strong> tumrap kalih pitakèn menika:</p>
            <p><strong>Punapa AI mbiyantu ngasilaken karya menika kanthi wigati?</strong></p>
            <p><strong>Punapa kula sumadya nampi tanggel jawab tumrap medalaken karya menika?</strong></p>
            <p>Menawi kalih wangsulanipun inggih:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Pangembangan ing wingking",
        body: `
            <p>Vèrsi ing wingking KENGING netepaken notasi tambahan ingkang ngrembag:</p>
            <ul>
              <li>pambiyantu AI ingkang alit;</li><li>pangasilan ingkang utaminipun déning AI;</li><li>panaliti manungsa ingkang jangkep;</li>
              <li>verifikasi mandhiri;</li><li>kagiyatan agèn otonom;</li>
              <li>provenans kriptografis;</li><li>panepangan sistem AI;</li>
              <li>panepangan modhèl;</li><li>utawi rantaman kontribusi manungsa saha mesin.</li>
            </ul>
            <p>Pangembangan kados makaten PRAYOGA njagi <code>+AI</code> minangka tandha kanonik ingkang prasaja kanggé:</p>
            <p class="canonical">karya ingkang dipunbiyantu AI kanthi tanggel jawab manungsa ingkang saged dipuntepangi.</p>`
      },
      {
        number: "26",
        title: "Pratélan kanonik",
        body: `
            <p>Satunggaling pribadi utawi organisasi ingkang nrapaken <code>+AI</code> ngaturaken pratélan makaten:</p>
            <blockquote><strong>Kapinteran artifisial mbiyantu pakaryan menika kanthi wigati. Kula sampun milih nampi, ngundhangaken, ngintunaken, nggelaraken, utawi kanthi cara sanès medalaken karya ingkang kadadosan, saha kula tanggel jawab tumrap putusan kasebut saha tumrap karya kados ingkang dipunaturaken.</strong></blockquote>
            <p>Rumusan cekak kanggé umum inggih menika:</p>
            <p class="canonical">AI mbiyantu. Kula ingkang tanggel jawab.</p>
            <p>Tandha kanoniké inggih menika:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Spésifikasi +AI v0.1</p><p>Provenans saha Akuntabilitas Manungsa-AI</p><strong>AI mbiyantu. Kula ingkang tanggel jawab.</strong>"
  });
})(window.PlusAISpecTranslations);
