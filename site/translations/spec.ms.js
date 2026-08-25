/*!
 * +AI Specification — Malay (ms)
 * Status: reviewed translation.
 * Interface chrome: AI-generated, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → MESTI
 *   MUST NOT   → TIDAK BOLEH
 *   SHOULD     → SEPATUTNYA
 *   SHOULD NOT → TIDAK SEPATUTNYA
 *   MAY        → BOLEH
 *
 * Canonical slogan: "AI membantu. Saya bertanggungjawab." — used verbatim in
 * sections 1, 23, 26 and the closing panel.
 */
(function (registry) {
  registry.register("ms", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI membantu. Saya bertanggungjawab.",
      "description": "+AI bermaksud kecerdasan buatan telah membantu secara material dalam kerja itu, dan seseorang atau organisasi yang dinamakan menerima tanggungjawab terhadapnya.",
      "skip": "Langkau ke penjelasan",
      "language": "Bahasa",
      "languageAria": "Pilih bahasa",
      "theme": "Mod gelap",
      "themeDark": "Mod gelap",
      "themeLight": "Mod terang",
      "themeDarkAria": "Guna mod gelap",
      "themeLightAria": "Guna mod terang",
      "highlight": "Warna sorotan",
      "highlightAria": "Pilih warna sorotan secara rawak",
      "followedLink": "Penerangan post-nominal +AI",
      "heroTitle": "AI membantu. Saya bertanggungjawab.",
      "heroLead": "Orang atau organisasi yang namanya disertakan dengan pautan ini membuat satu kenyataan mudah: <strong>kecerdasan buatan telah membantu secara material dalam kerja itu, dan pihak tersebut menerima tanggungjawab untuk menerbitkannya.</strong>",
      "readSpec": "Baca spesifikasi",
      "meansHeading": "Apa yang dinyatakan oleh tanda ini",
      "meaningOneTitle": "AI turut serta",
      "meaningOneBody": "AI membantu secara material dalam mencipta, menganalisis, mengubah atau membentangkan kerja itu.",
      "meaningTwoTitle": "Manusia yang memilih",
      "meaningTwoBody": "Seseorang atau organisasi dengan sedar menerima pakai dan menerbitkan hasil itu.",
      "meaningThreeTitle": "Tanggungjawab kekal pada manusia",
      "meaningThreeBody": "Pihak yang dinamakan tidak memindahkan kebertanggungjawaban kepada sistem atau pembekal AI.",
      "plainTitle": "Bantuan yang telus. Kebertanggungjawaban yang jelas.",
      "plainLead": "Tanda ini ialah pengisytiharan kebertanggungjawaban, bukan dakwaan bahawa AI ialah pengarang dan bukan jaminan bahawa kerja itu betul.",
      "plainBody": "Ia tidak menyatakan berapa banyak kerja itu datang daripada AI. Ia menyatakan AI mempengaruhi hasil secara material dan seseorang atau organisasi yang boleh dikenal pasti berdiri di belakang keputusan untuk menggunakannya.",
      "plainQuote": "Tiga aksara menjadikan penyertaan dan tanggungjawab kelihatan.",
      "fullDocument": "Dokumen penuh",
      "specification": "Spesifikasi",
      "statusLabel": "Status",
      "statusValue": "Draf",
      "versionLabel": "Versi",
      "markLabel": "Tanda kanonik",
      "contents": "Kandungan",
      "footerLine": "Notasi terbuka. Tanggungjawab manusia.",
      "versionFooter": "Spesifikasi v0.1",
      "translationNote": "Terjemahan ini disediakan untuk maklumat. Sekiranya terdapat percanggahan, teks asal bahasa Inggeris ialah dokumen normatif.",
      "colourChanged": "Warna sorotan telah ditukar kepada {colour}."
    },
    untranslatedNotice: {
      "badge": "Belum diterjemah",
      "headline": "Spesifikasi di bawah dipaparkan dalam bahasa Inggeris.",
      "detail": "Bahasa ini belum diterjemahkan. Teks bahasa Inggeris ialah versi normatif dalam semua keadaan."
    },
    endonym: "Bahasa Melayu",
    sections: [
      {
        number: "1",
        title: "Tujuan",
        body: `
            <p>Notasi <code>+AI</code> menyediakan kaedah yang ringkas untuk menyatakan bahawa suatu artifak telah dibantu secara material oleh kecerdasan buatan, sambil menyatakan individu atau organisasi yang menerima tanggungjawab terhadap artifak yang terhasil.</p>
            <p>Ungkapan kanonikalnya ialah:</p>
            <p class="canonical"><code>&lt;Pihak Bertanggungjawab&gt; +AI</code></p>
            <p>Contoh:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Maksud asasnya ialah:</p>
            <p class="canonical">AI membantu. Saya bertanggungjawab.</p>`
      },
      {
        number: "2",
        title: "Prinsip reka bentuk",
        body: `
            <p><code>+AI</code> tidak berusaha menentukan sama ada suatu artifak itu “dihasilkan oleh manusia” atau “dihasilkan oleh AI.”</p>
            <p>Artifak masa kini mungkin berulang kali beralih antara manusia dan sistem kecerdasan buatan sepanjang proses penghasilannya.</p>
            <p>Sebaliknya, <code>+AI</code> menyampaikan dua fakta:</p>
            <ol>
              <li>kecerdasan buatan telah membantu kerja itu secara material; dan</li>
              <li>seorang manusia atau organisasi yang dapat dikenal pasti menerima tanggungjawab terhadap artifak yang terhasil.</li>
            </ol>
            <p>Oleh itu, standard ini berkenaan dengan <strong>penyertaan AI dan kebertanggungjawaban manusia</strong>, bukan pengarangan eksklusif.</p>`
      },
      {
        number: "3",
        title: "Terminologi normatif",
        body: `
            <p>Istilah <strong>MESTI (MUST)</strong>, <strong>TIDAK BOLEH (MUST NOT)</strong>, <strong>SEPATUTNYA (SHOULD)</strong>, <strong>TIDAK SEPATUTNYA (SHOULD NOT)</strong>, dan <strong>BOLEH (MAY)</strong> merupakan keperluan normatif dalam spesifikasi ini.</p>
            <p><strong>MESTI</strong> menunjukkan keperluan yang mutlak.</p>
            <p><strong>TIDAK BOLEH</strong> menunjukkan larangan yang mutlak.</p>
            <p><strong>SEPATUTNYA</strong> menunjukkan saranan yang kuat yang boleh dikecualikan apabila terdapat alasan yang sah.</p>
            <p><strong>TIDAK SEPATUTNYA</strong> menunjukkan amalan yang lazimnya dielakkan tetapi berkemungkinan wajar dalam keadaan tertentu.</p>
            <p><strong>BOLEH</strong> menunjukkan amalan yang bersifat pilihan.</p>`
      },
      {
        number: "4",
        title: "Notasi kanonikal",
        body: `
            <p>Tanda kanonikalnya ialah:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Bentuk kanonikal yang boleh dibaca manusia ialah:</p>
            <p><strong><code>&lt;Pihak Bertanggungjawab&gt; +AI</code></strong></p>
            <p>Contoh:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Tanda ini sensitif terhadap huruf besar dan huruf kecil.</p>
            <p>Bentuk kanonikal MESTI menggunakan:</p>
            <ul>
              <li>satu tanda tambah <code>+</code>;</li>
              <li>diikuti terus dengan huruf Latin huruf besar <code>AI</code>;</li>
              <li>tanpa ruang kosong di dalamnya.</li>
            </ul>
            <p>Oleh itu, <code>+AI</code> adalah kanonikal.</p>
            <p>Yang berikut bukan padanan kanonikal:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Varian BOLEH ditetapkan kelak melalui sambungan kepada spesifikasi ini, tetapi varian tersebut TIDAK BOLEH dianggap membawa makna kanonikal <code>+AI</code> melainkan ia ditetapkan secara nyata.</p>`
      },
      {
        number: "5",
        title: "Makna tanda ini",
        body: `
            <p>Pihak bertanggungjawab yang menggunakan <code>+AI</code> mengisytiharkan bahawa:</p>
            <h4>5.1 Penyertaan AI</h4>
            <p>Kecerdasan buatan telah membantu secara material dalam menghasilkan, menganalisis, mengubah, menjana, menilai, menstruktur atau mempersembahkan artifak yang berkaitan.</p>
            <h4>5.2 Pengetahuan</h4>
            <p>Pihak bertanggungjawab mengetahui atau secara wajar mempercayai bahawa bantuan AI yang material telah berlaku.</p>
            <h4>5.3 Kewenangan</h4>
            <p>Pihak bertanggungjawab telah membenarkan, memulakan, mengarahkan atau dengan sedar menerima penggunaan kecerdasan buatan yang berkaitan.</p>
            <h4>5.4 Kawalan manusia atau organisasi</h4>
            <p>Pihak bertanggungjawab mengekalkan kewenangan untuk menentukan sama ada artifak itu akan diterbitkan, dihantar, ditempatkan, diserahkan, dipersembahkan atau dikeluarkan dengan cara lain.</p>
            <h4>5.5 Penerimaan</h4>
            <p>Pihak bertanggungjawab menerima artifak itu dalam bentuk sebagaimana ia dipersembahkan.</p>
            <h4>5.6 Tanggungjawab</h4>
            <p>Pihak bertanggungjawab menerima tanggungjawab terhadap keputusan untuk mengeluarkan, menggunakan atau mewakilkan artifak itu.</p>
            <p>Unsur-unsur ini secara keseluruhan membentuk perisytiharan <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Bantuan material",
        body: `
            <p>Tanda ini SEPATUTNYA digunakan apabila penyertaan AI mempengaruhi artifak yang terhasil secara material.</p>
            <p>Bantuan material boleh merangkumi sumbangan AI terhadap:</p>
            <ul>
              <li>penulisan;</li><li>penaakulan;</li><li>analisis;</li><li>saranan;</li>
              <li>sintesis penyelidikan;</li><li>kod perisian;</li><li>tafsiran data;</li>
              <li>reka bentuk;</li><li>imej;</li><li>audio;</li><li>video;</li>
              <li>penterjemahan yang melibatkan tafsiran substantif;</li><li>perancangan;</li>
              <li>sokongan keputusan;</li><li>kerja matematik atau teknikal;</li>
              <li>penyuntingan yang mengubah makna secara material;</li>
              <li>atau kerja intelektual mahupun kreatif substantif yang lain.</li>
            </ul>
            <p>Fungsi AI yang bersifat sampingan atau semata-mata mekanikal tidak semestinya memerlukan <code>+AI</code>.</p>
            <p>Contohnya termasuk pembetulan ejaan automatik, autolengkap asas, pemformatan rutin atau ciri lain yang tidak mempengaruhi isi suatu artifak secara material.</p>
            <p>Soalan penentunya bukanlah peratusan kandungan yang dihasilkan oleh AI.</p>
            <p>Soalan penentunya ialah:</p>
            <blockquote><strong>Adakah AI mempengaruhi artifak yang dipersembahkan ini secara material?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Tanggungjawab",
        body: `
            <p>Tanggungjawab ialah sifat yang menentukan hakikat <code>+AI</code>.</p>
            <p>Dengan menggunakan tanda ini, pihak bertanggungjawab tidak memindahkan tanggungjawab kepada mana-mana sistem, model, penyedia, agen atau alat kecerdasan buatan.</p>
            <p>Suatu pernyataan yang seumpama:</p>
            <blockquote>“AI yang menghasilkannya, maka saya tidak bertanggungjawab terhadapnya.”</blockquote>
            <p>tidak selaras dengan makna yang dihasratkan oleh <code>+AI</code>.</p>
            <p>Pihak bertanggungjawab BOLEH sangat bergantung pada bantuan AI.</p>
            <p>Pihak bertanggungjawab BOLEH menerbitkan kandungan yang dijana secara material oleh AI.</p>
            <p>Pihak bertanggungjawab BOLEH menerima cadangan yang tidak mampu dihasilkannya sendiri.</p>
            <p>Tiada satu pun keadaan ini menghalang penggunaan <code>+AI</code>, dengan syarat pihak bertanggungjawab dengan sedar menerima artifak yang terhasil dan menerima tanggungjawab terhadap pengeluarannya.</p>`
      },
      {
        number: "8",
        title: "Apa yang tidak dimaksudkan oleh +AI",
        body: `
            <p>Melainkan suatu perisytiharan tambahan menyatakan sebaliknya secara nyata, <code>+AI</code> TIDAK menegaskan bahawa:</p>
            <ul>
              <li>artifak itu bebas daripada kesilapan;</li>
              <li>setiap pernyataan fakta telah disahkan secara bebas;</li>
              <li>setiap sitasi telah diperiksa secara bebas;</li>
              <li>artifak itu memenuhi mana-mana standard profesional tertentu;</li>
              <li>artifak itu betul di sisi undang-undang;</li>
              <li>artifak itu betul di sisi perubatan;</li>
              <li>artifak itu selamat bagi mana-mana tujuan tertentu;</li>
              <li>artifak itu tidak mengandungi halusinasi;</li>
              <li>pihak bertanggungjawab menulis sendiri setiap komponennya;</li>
              <li>AI menjana sebahagian besar artifak itu;</li>
              <li>AI menjana hanya sebahagian kecil artifak itu;</li>
              <li>artifak itu asli;</li>
              <li>tiada harta intelek pihak ketiga terkandung di dalamnya;</li>
              <li>maklumat sulit tidak dibekalkan kepada suatu sistem AI;</li>
              <li>suatu penyedia, model atau sistem AI tertentu telah digunakan;</li>
              <li>pihak bertanggungjawab bersetuju dengan setiap keluaran AI di peringkat perantaraan;</li>
              <li>atau pihak bertanggungjawab mampu menghasilkan semula atau menerangkan penaakulan dalaman sistem AI itu.</li>
            </ul>
            <p><code>+AI</code> ialah suatu <strong>perisytiharan kebertanggungjawaban</strong>, bukan jaminan ketepatan.</p>`
      },
      {
        number: "9",
        title: "Semakan manusia",
        body: `
            <p>Versi 0.1 tidak menuntut supaya setiap komponen suatu artifak disemak secara manual perkataan demi perkataan atau unsur demi unsur.</p>
            <p>Namun demikian, pihak bertanggungjawab MESTI menerima dengan sedar artifak yang dikeluarkan itu.</p>
            <p>Penyaluran keluaran AI yang belum disemak, secara buta atau automatik, TIDAK SEPATUTNYA diwakilkan dengan <code>+AI</code> apabila tiada tindakan penerimaan oleh manusia yang bermakna berlaku.</p>
            <p>Versi akan datang bagi spesifikasi ini BOLEH menetapkan tanda jaminan yang lebih kuat, yang mewakili semakan menyeluruh atau pengesahan bebas.</p>`
      },
      {
        number: "10",
        title: "Individu",
        body: `
            <p>Seorang individu BOLEH mencatatkan notasi ini selepas namanya.</p>
            <p>Contoh:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Ini bermaksud:</p>
            <blockquote>Kecerdasan buatan telah membantu kerja yang berkaitan itu secara material, dan Eric Mourant menerima tanggungjawab terhadap pengeluaran kerja tersebut.</blockquote>
            <p>Tanda ini berkaitan dengan artifak atau komunikasi yang berkenaan dengannya.</p>
            <p>Ia tidak semestinya bermaksud bahawa setiap aktiviti yang dijalankan oleh individu itu menggunakan kecerdasan buatan.</p>`
      },
      {
        number: "11",
        title: "Organisasi",
        body: `
            <p>Sebuah organisasi BOLEH menggunakan <code>+AI</code>.</p>
            <p data-company-example>Contoh:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Ini bermaksud bahawa organisasi itu memikul tanggungjawab terhadap artifak berkaitan yang dibantu AI, menurut struktur tadbir urus dan kewenangan yang terpakai baginya.</p>
            <p>Apabila berfaedah, organisasi dan individu yang bertanggungjawab BOLEH dinyatakan kedua-duanya.</p>
            <p data-company-example>Contoh:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "E-mel dan pemesejan",
        body: `
            <p>Dalam komunikasi peribadi, persembahan yang diutamakan ialah:</p>
            <p><strong>Salam hormat,<br>Eric Mourant +AI</strong></p>
            <p>Tanda ini BOLEH dipautkan kepada penerangan kanonikal tentang maknanya.</p>
            <p>Suatu pautan TIDAK BOLEH mengubah notasi yang kelihatan.</p>
            <p>Teks biasa MESTI kekal mencukupi untuk menyampaikan perisytiharan itu.</p>`
      },
      {
        number: "13",
        title: "Dokumen",
        body: `
            <p>Notasi ini BOLEH dicatatkan dalam medan pengarang, penyedia, penyemak atau pihak bertanggungjawab.</p>
            <p>Contoh:</p>
            <p><strong>Pengarang: Eric Mourant +AI</strong></p>
            <p><strong>Disediakan oleh: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Dikeluarkan oleh: JAPER Technology +AI</strong></p>
            <p>Penempatannya SEPATUTNYA menjelaskan individu atau organisasi mana yang memikul tanggungjawab.</p>`
      },
      {
        number: "14",
        title: "Perisian",
        body: `
            <p>Notasi ini BOLEH digunakan dalam repositori perisian, komit, pengepala kod sumber, dokumentasi, nota keluaran dan artifak terjana.</p>
            <p>Contoh:</p>
            <pre><code>Pengarang: Eric Mourant +AI</code></pre>
            <p>Suatu projek BOLEH turut mengisytiharkan:</p>
            <pre><code>Projek ini menggunakan +AI.</code></pre>
            <p>Pernyataan pada peringkat projek sedemikian SEPATUTNYA menyatakan individu atau organisasi yang bertanggungjawab apabila hal itu praktikal.</p>`
      },
      {
        number: "15",
        title: "Artifak kreatif",
        body: `
            <p>Notasi ini BOLEH mengiringi imej, audio, video, reka bentuk, ilustrasi, persembahan dan karya kreatif yang lain.</p>
            <p>Contoh:</p>
            <p><strong>Dihasilkan oleh Eric Mourant +AI</strong></p>
            <p>Tanda ini dengan sendirinya tidak menyatakan unsur mana yang dijana atau diubah oleh AI.</p>
            <p>Metadata asal usul yang lebih terperinci BOLEH dikaitkan secara berasingan.</p>`
      },
      {
        number: "16",
        title: "Penyelidikan dan kerja teknikal",
        body: `
            <p>Tanda ini BOLEH digunakan dalam kerja penyelidikan, saintifik, kejuruteraan atau teknikal apabila dibenarkan oleh keperluan institusi, penerbitan atau profesional yang terpakai.</p>
            <p><code>+AI</code> TIDAK BOLEH diwakilkan sebagai pengganti kepada mana-mana pendedahan yang lebih khusus yang dituntut oleh penerbit, pengawal selia, majikan, badan profesional atau undang-undang.</p>
            <p>Notasi ini BOLEH melengkapkan pendedahan sedemikian.</p>`
      },
      {
        number: "17",
        title: "Perwakilan boleh baca mesin",
        body: `
            <p>Sistem BOLEH mewakilkan perisytiharan ini menggunakan metadata berstruktur.</p>
            <p>Perwakilan yang minimum ialah:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Perwakilan yang lebih kaya ialah:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Bentuk boleh baca mesin SEPATUTNYA mengekalkan makna semantik yang sama dengan notasi yang kelihatan.</p>`
      },
      {
        number: "18",
        title: "Kekekalan",
        body: `
            <p>Notasi <code>+AI</code> SEPATUTNYA kekal bertahan melalui transformasi artifak yang wajar apabila atribusi dikekalkan.</p>
            <p>Contohnya termasuk penukaran antara format dokumen, pengarkiban, pencetakan, pengeksportan, penerbitan semula dan penghantaran.</p>
            <p>Apabila metadata dilucutkan, tanda teks biasa yang kelihatan SEPATUTNYA kekal mencukupi untuk menyampaikan perisytiharan itu.</p>`
      },
      {
        number: "19",
        title: "Penggunaan terbuka",
        body: `
            <p>Notasi <code>+AI</code> dihasratkan untuk penggunaan umum tanpa sekatan.</p>
            <p>Penggunaan notasi ini TIDAK SEPATUTNYA menuntut:</p>
            <ul>
              <li>pendaftaran;</li><li>keanggotaan;</li><li>bayaran;</li><li>pensijilan;</li>
              <li>kelulusan;</li><li>atau penggunaan mana-mana produk atau penyedia AI tertentu.</li>
            </ul>
            <p>Kegunaan notasi ini bergantung pada keupayaannya berfungsi sebagai suatu konvensyen universal.</p>`
      },
      {
        number: "20",
        title: "Kenetralan",
        body: `
            <p><code>+AI</code> tidak menyatakan persetujuan mahupun ketidaksetujuan terhadap kecerdasan buatan.</p>
            <p>Ia tidak menunjukkan sama ada penggunaan AI itu perlu, wajar atau lebih baik daripada kerja manusia tanpa bantuan.</p>
            <p>Ia hanya merekodkan penyertaan AI yang material serta kebertanggungjawaban manusia atau organisasi.</p>`
      },
      {
        number: "21",
        title: "Perwakilan palsu",
        body: `
            <p>Seseorang individu atau organisasi TIDAK SEPATUTNYA menggunakan <code>+AI</code> apabila:</p>
            <ul>
              <li>tiada pihak bertanggungjawab yang dapat dikenal pasti;</li>
              <li>pihak yang dinamakan itu belum menerima artifak tersebut;</li>
              <li>artifak itu dikeluarkan secara automatik tanpa kewenangan manusia yang bermakna;</li>
              <li>atau notasi itu digunakan untuk menimbulkan tanggapan palsu tentang adanya kebertanggungjawaban manusia.</li>
            </ul>
            <p>Keluaran AI berautonomi tanpa penerimaan manusia yang bermakna berada di luar lingkungan kanonikal <code>+AI</code>.</p>
            <p>Spesifikasi akan datang BOLEH menetapkan notasi bagi keluaran AI berautonomi.</p>`
      },
      {
        number: "22",
        title: "Hubungan dengan pengarangan",
        body: `
            <p><code>+AI</code> dengan sengaja tidak menetapkan peratusan pengarangan.</p>
            <p>Suatu artifak BOLEH mengandungi bahan yang sebahagian besarnya berasal daripada manusia dan tetap memenuhi syarat.</p>
            <p>Suatu artifak BOLEH mengandungi bahan yang sebahagian besarnya berasal daripada AI dan tetap memenuhi syarat.</p>
            <p>Ujian yang berkaitan ialah sama ada:</p>
            <p><strong>AI telah membantu secara material, dan pihak yang dinamakan memikul tanggungjawab terhadap hasilnya.</strong></p>`
      },
      {
        number: "23",
        title: "Penerangan awam kanonikal",
        body: `
            <p>Apabila penerangan yang ringkas diperlukan, rumusan yang diutamakan ialah:</p>
            <p class="canonical">AI membantu. Saya bertanggungjawab.</p>
            <p>Apabila penerangan yang lebih panjang diperlukan:</p>
            <blockquote><strong><code>+AI</code> bermaksud kecerdasan buatan telah membantu kerja ini secara material dan individu atau organisasi yang dinamakan menerima tanggungjawab terhadap artifak yang terhasil.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Ujian +AI",
        body: `
            <p>Sebelum menggunakan tanda ini, seseorang sepatutnya dapat menjawab <strong>ya</strong> kepada kedua-dua soalan berikut:</p>
            <p><strong>Adakah AI membantu menghasilkan kerja ini secara material?</strong></p>
            <p><strong>Adakah saya bersedia memikul tanggungjawab terhadap pengeluarannya?</strong></p>
            <p>Jika kedua-dua jawapannya ya:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Sambungan akan datang",
        body: `
            <p>Versi akan datang BOLEH menetapkan notasi tambahan yang menangani:</p>
            <ul>
              <li>bantuan AI yang kecil;</li><li>penjanaan yang terutamanya oleh AI;</li><li>semakan manusia yang menyeluruh;</li>
              <li>pengesahan bebas;</li><li>aktiviti agen berautonomi;</li>
              <li>asal usul kriptografi;</li><li>pengenalpastian sistem AI;</li>
              <li>pengenalpastian model;</li><li>atau rantaian sumbangan manusia dan mesin.</li>
            </ul>
            <p>Sambungan sedemikian SEPATUTNYA mengekalkan <code>+AI</code> sebagai tanda kanonikal yang sederhana bagi:</p>
            <p class="canonical">kerja yang dibantu AI dengan tanggungjawab manusia yang dapat dikenal pasti.</p>`
      },
      {
        number: "26",
        title: "Perisytiharan kanonikal",
        body: `
            <p>Seseorang individu atau organisasi yang menggunakan <code>+AI</code> membuat perisytiharan yang berikut:</p>
            <blockquote><strong>Kecerdasan buatan telah membantu kerja ini secara material. Saya telah memilih untuk menerima, menerbitkan, menghantar, menempatkan atau dengan cara lain mengeluarkan kerja yang terhasil, dan saya memikul tanggungjawab terhadap keputusan itu serta terhadap kerja sebagaimana ia dipersembahkan.</strong></blockquote>
            <p>Rumusan ringkas untuk umum ialah:</p>
            <p class="canonical">AI membantu. Saya bertanggungjawab.</p>
            <p>Tanda kanonikalnya ialah:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Spesifikasi +AI v0.1</p><p>Asal Usul dan Kebertanggungjawaban Manusia-AI</p><strong>AI membantu. Saya bertanggungjawab.</strong>"
  });
})(window.PlusAISpecTranslations);
