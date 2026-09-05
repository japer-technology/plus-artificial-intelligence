/*!
 * +AI Specification — Indonesian (id)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → HARUS
 *   MUST NOT   → TIDAK BOLEH
 *   SHOULD     → SEBAIKNYA
 *   SHOULD NOT → SEBAIKNYA TIDAK
 *   MAY        → DAPAT
 */
(function (registry) {
  registry.register("id", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI membantu. Saya bertanggung jawab.",
      "description": "+AI berarti kecerdasan buatan memberikan bantuan secara substansial pada suatu karya dan seseorang atau organisasi yang disebutkan menerima tanggung jawab atasnya.",
      "skip": "Lewati ke penjelasan",
      "language": "Bahasa",
      "languageAria": "Pilih bahasa",
      "theme": "Mode gelap",
      "themeDark": "Mode gelap",
      "themeLight": "Mode terang",
      "themeDarkAria": "Gunakan mode gelap",
      "themeLightAria": "Gunakan mode terang",
      "highlight": "Sorotan",
      "highlightAria": "Pilih warna sorotan secara acak",
      "followedLink": "Deskripsi post-nominal +AI",
      "heroTitle": "AI membantu. Saya bertanggung jawab.",
      "heroLead": "Orang atau organisasi yang namanya disertai tautan ini membuat pernyataan sederhana: <strong>kecerdasan buatan memberikan bantuan secara substansial pada karya tersebut, dan pihak itu menerima tanggung jawab untuk melepaskannya.</strong>",
      "readSpec": "Baca spesifikasi",
      "meansHeading": "Apa yang dinyatakan tanda ini",
      "meaningOneTitle": "AI berpartisipasi",
      "meaningOneBody": "AI membantu secara substansial dalam membuat, menganalisis, mengubah, atau menyajikan karya.",
      "meaningTwoTitle": "Manusia memilih",
      "meaningTwoBody": "Seseorang atau organisasi secara sadar mengadopsi dan melepas hasilnya.",
      "meaningThreeTitle": "Tanggung jawab tetap pada manusia",
      "meaningThreeBody": "Pihak yang disebutkan tidak mengalihkan akuntabilitas kepada sistem atau penyedia AI.",
      "plainTitle": "Bantuan transparan. Tanggung jawab terlihat.",
      "plainLead": "Tanda ini merupakan pernyataan tanggung jawab, bukan klaim bahwa AI adalah pengarang dan bukan jaminan bahwa karya tersebut benar.",
      "plainBody": "Tanda ini tidak menyatakan berapa banyak karya yang berasal dari AI. Tanda ini menyatakan bahwa AI secara substansial memengaruhi hasil dan seseorang atau organisasi yang dapat diidentifikasi bertanggung jawab atas keputusan untuk menggunakannya.",
      "plainQuote": "Tiga karakter membuat partisipasi dan tanggung jawab terlihat.",
      "fullDocument": "Dokumen lengkap",
      "specification": "Spesifikasi",
      "statusLabel": "Status",
      "statusValue": "Draf",
      "versionLabel": "Versi",
      "markLabel": "Tanda kanonis",
      "contents": "Daftar isi",
      "footerLine": "Notasi terbuka. Tanggung jawab manusia.",
      "versionFooter": "Spesifikasi v0.1",
      "translationNote": "Terjemahan ini disediakan untuk informasi. Jika terdapat perbedaan, teks asli dalam bahasa Inggris merupakan dokumen normatif.",
      "colourChanged": "Warna sorotan diubah menjadi {colour}."
    },
    untranslatedNotice: {
      "badge": "Belum diterjemahkan",
      "headline": "Spesifikasi di bawah ini ditampilkan dalam bahasa Inggris.",
      "detail": "Bahasa ini belum diterjemahkan. Teks bahasa Inggris adalah versi normatif dalam semua hal."
    },
    endonym: "Bahasa Indonesia",
    sections: [
      {
        number: "1",
        title: "Tujuan",
        body: `
            <p>Notasi <code>+AI</code> menyediakan cara ringkas untuk menyatakan bahwa suatu artefak dibantu secara substansial oleh kecerdasan buatan, sekaligus menyebutkan orang atau organisasi yang menerima tanggung jawab atas artefak yang dihasilkan.</p>
            <p>Ungkapan kanoniknya adalah:</p>
            <p class="canonical"><code>&lt;Pihak Bertanggung Jawab&gt; +AI</code></p>
            <p>Contoh:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Makna dasarnya adalah:</p>
            <p class="canonical">AI membantu. Saya bertanggung jawab.</p>`
      },
      {
        number: "2",
        title: "Prinsip perancangan",
        body: `
            <p><code>+AI</code> tidak berupaya menetapkan apakah suatu artefak “dibuat oleh manusia” atau “dibuat oleh AI”.</p>
            <p>Artefak masa kini dapat berpindah berulang kali antara manusia dan sistem kecerdasan buatan selama proses penciptaannya.</p>
            <p>Sebaliknya, <code>+AI</code> menyampaikan dua fakta:</p>
            <ol>
              <li>kecerdasan buatan membantu pekerjaan tersebut secara substansial; dan</li>
              <li>seorang manusia atau organisasi yang dapat diidentifikasi menerima tanggung jawab atas artefak yang dihasilkan.</li>
            </ol>
            <p>Oleh karena itu, standar ini berkenaan dengan <strong>keikutsertaan AI dan akuntabilitas manusia</strong>, bukan dengan kepengarangan eksklusif.</p>`
      },
      {
        number: "3",
        title: "Terminologi normatif",
        body: `
            <p>Istilah <strong>HARUS (MUST)</strong>, <strong>TIDAK BOLEH (MUST NOT)</strong>, <strong>SEBAIKNYA (SHOULD)</strong>, <strong>SEBAIKNYA TIDAK (SHOULD NOT)</strong>, dan <strong>DAPAT (MAY)</strong> merupakan persyaratan normatif dalam spesifikasi ini.</p>
            <p><strong>HARUS</strong> menyatakan persyaratan mutlak.</p>
            <p><strong>TIDAK BOLEH</strong> menyatakan larangan mutlak.</p>
            <p><strong>SEBAIKNYA</strong> menyatakan anjuran kuat yang dapat disimpangi apabila terdapat alasan yang sah.</p>
            <p><strong>SEBAIKNYA TIDAK</strong> menyatakan praktik yang pada umumnya dihindari, tetapi mungkin dapat dibenarkan dalam keadaan tertentu.</p>
            <p><strong>DAPAT</strong> menyatakan praktik yang bersifat pilihan.</p>`
      },
      {
        number: "4",
        title: "Notasi kanonik",
        body: `
            <p>Tanda kanoniknya adalah:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>Bentuk kanonik yang terbaca manusia adalah:</p>
            <p><strong><code>&lt;Pihak Bertanggung Jawab&gt; +AI</code></strong></p>
            <p>Contoh:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Tanda ini bersifat sensitif terhadap huruf besar dan kecil.</p>
            <p>Bentuk kanonik HARUS menggunakan:</p>
            <ul>
              <li>sebuah tanda tambah <code>+</code>;</li>
              <li>yang langsung diikuti huruf Latin kapital <code>AI</code>;</li>
              <li>tanpa spasi di dalamnya.</li>
            </ul>
            <p>Dengan demikian, <code>+AI</code> bersifat kanonik.</p>
            <p>Bentuk-bentuk berikut bukan padanan kanonik:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Varian DAPAT ditetapkan di kemudian hari melalui perluasan spesifikasi ini, tetapi varian tersebut TIDAK BOLEH dianggap membawa makna kanonik <code>+AI</code> kecuali jika ditetapkan secara tegas.</p>`
      },
      {
        number: "5",
        title: "Makna tanda",
        body: `
            <p>Pihak bertanggung jawab yang menggunakan <code>+AI</code> menyatakan bahwa:</p>
            <h4>5.1 Keikutsertaan AI</h4>
            <p>Kecerdasan buatan membantu secara substansial dalam menciptakan, menganalisis, mentransformasi, menghasilkan, mengevaluasi, menyusun, atau menyajikan artefak yang terkait.</p>
            <h4>5.2 Pengetahuan</h4>
            <p>Pihak bertanggung jawab mengetahui atau secara wajar meyakini bahwa telah terjadi bantuan AI yang substansial.</p>
            <h4>5.3 Kewenangan</h4>
            <p>Pihak bertanggung jawab telah mengizinkan, memulai, mengarahkan, atau dengan sadar mengadopsi penggunaan kecerdasan buatan yang bersangkutan.</p>
            <h4>5.4 Kendali manusia atau organisasi</h4>
            <p>Pihak bertanggung jawab tetap memegang kewenangan untuk menentukan apakah artefak tersebut akan diterbitkan, dikirimkan, digelar, diserahkan, disajikan, atau dilepas dengan cara lain.</p>
            <h4>5.5 Adopsi</h4>
            <p>Pihak bertanggung jawab menerima artefak dalam bentuk sebagaimana artefak itu disajikan.</p>
            <h4>5.6 Tanggung jawab</h4>
            <p>Pihak bertanggung jawab menerima tanggung jawab atas keputusan untuk melepas, menggunakan, atau merepresentasikan artefak tersebut.</p>
            <p>Unsur-unsur ini secara keseluruhan membentuk pernyataan <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Bantuan substansial",
        body: `
            <p>Tanda ini SEBAIKNYA digunakan apabila keikutsertaan AI memengaruhi artefak yang dihasilkan secara substansial.</p>
            <p>Bantuan substansial dapat mencakup kontribusi AI terhadap:</p>
            <ul>
              <li>penulisan;</li><li>penalaran;</li><li>analisis;</li><li>rekomendasi;</li>
              <li>sintesis riset;</li><li>kode perangkat lunak;</li><li>penafsiran data;</li>
              <li>perancangan;</li><li>gambar;</li><li>audio;</li><li>video;</li>
              <li>penerjemahan yang di dalamnya terjadi penafsiran substantif;</li><li>perencanaan;</li>
              <li>dukungan pengambilan keputusan;</li><li>pekerjaan matematis atau teknis;</li>
              <li>penyuntingan yang mengubah makna secara substansial;</li>
              <li>atau pekerjaan intelektual maupun kreatif substantif lainnya.</li>
            </ul>
            <p>Fungsi AI yang bersifat sampingan atau semata-mata mekanis tidak selalu mengharuskan penggunaan <code>+AI</code>.</p>
            <p>Contohnya dapat meliputi koreksi ejaan otomatis, pelengkapan otomatis sederhana, pemformatan rutin, atau fitur lain yang tidak memengaruhi substansi suatu artefak secara substansial.</p>
            <p>Pertanyaan penentunya bukanlah berapa persen isi yang dihasilkan oleh AI.</p>
            <p>Pertanyaan penentunya adalah:</p>
            <blockquote><strong>Apakah AI memengaruhi artefak yang disajikan ini secara substansial?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Tanggung jawab",
        body: `
            <p>Tanggung jawab adalah sifat yang menentukan hakikat <code>+AI</code>.</p>
            <p>Dengan menggunakan tanda ini, pihak bertanggung jawab tidak mengalihkan tanggung jawab kepada sistem, model, penyedia, agen, atau perkakas kecerdasan buatan.</p>
            <p>Pernyataan yang setara dengan:</p>
            <blockquote>“AI yang menghasilkannya, maka saya tidak bertanggung jawab atasnya.”</blockquote>
            <p>tidak sejalan dengan makna yang dimaksudkan oleh <code>+AI</code>.</p>
            <p>Pihak bertanggung jawab DAPAT sangat bergantung pada bantuan AI.</p>
            <p>Pihak bertanggung jawab DAPAT menerbitkan isi yang dihasilkan secara substansial oleh AI.</p>
            <p>Pihak bertanggung jawab DAPAT menerima saran yang tidak mampu ia hasilkan sendiri secara mandiri.</p>
            <p>Tidak satu pun keadaan tersebut menghalangi penggunaan <code>+AI</code>, dengan ketentuan bahwa pihak bertanggung jawab dengan sadar mengadopsi artefak yang dihasilkan dan menerima tanggung jawab atas pelepasannya.</p>`
      },
      {
        number: "8",
        title: "Hal yang tidak dimaksudkan oleh +AI",
        body: `
            <p>Kecuali jika suatu pernyataan tambahan menyatakan lain secara tegas, <code>+AI</code> TIDAK menegaskan bahwa:</p>
            <ul>
              <li>artefak tersebut bebas dari kesalahan;</li>
              <li>setiap pernyataan faktual telah diverifikasi secara independen;</li>
              <li>setiap kutipan telah diperiksa secara independen;</li>
              <li>artefak tersebut memenuhi standar profesional tertentu;</li>
              <li>artefak tersebut benar secara hukum;</li>
              <li>artefak tersebut benar secara medis;</li>
              <li>artefak tersebut aman untuk tujuan tertentu;</li>
              <li>artefak tersebut tidak memuat halusinasi AI;</li>
              <li>pihak bertanggung jawab menulis sendiri setiap komponennya;</li>
              <li>AI menghasilkan sebagian besar artefak tersebut;</li>
              <li>AI hanya menghasilkan sebagian kecil artefak tersebut;</li>
              <li>artefak tersebut orisinal;</li>
              <li>tidak terdapat kekayaan intelektual pihak ketiga di dalamnya;</li>
              <li>informasi rahasia tidak diberikan kepada suatu sistem AI;</li>
              <li>penyedia, model, atau sistem AI tertentu telah digunakan;</li>
              <li>pihak bertanggung jawab menyetujui setiap keluaran AI di tahap perantara;</li>
              <li>atau pihak bertanggung jawab mampu mereproduksi atau menjelaskan penalaran internal sistem AI tersebut.</li>
            </ul>
            <p><code>+AI</code> merupakan <strong>pernyataan akuntabilitas</strong>, bukan jaminan kebenaran.</p>`
      },
      {
        number: "9",
        title: "Peninjauan oleh manusia",
        body: `
            <p>Versi 0.1 tidak mengharuskan setiap komponen suatu artefak ditinjau secara manual kata demi kata atau unsur demi unsur.</p>
            <p>Namun, pihak bertanggung jawab HARUS dengan sadar menerima artefak yang dilepas tersebut.</p>
            <p>Penerusan keluaran AI yang belum ditinjau, secara buta atau otomatis, SEBAIKNYA TIDAK direpresentasikan dengan <code>+AI</code> apabila tidak terjadi tindakan adopsi manusia yang bermakna.</p>
            <p>Versi mendatang spesifikasi ini DAPAT menetapkan tanda jaminan yang lebih kuat, yang merepresentasikan peninjauan menyeluruh atau verifikasi independen.</p>`
      },
      {
        number: "10",
        title: "Perorangan",
        body: `
            <p>Seorang individu DAPAT mencantumkan notasi ini setelah namanya.</p>
            <p>Contoh:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Hal ini berarti:</p>
            <blockquote>Kecerdasan buatan membantu pekerjaan yang terkait secara substansial, dan Eric Mourant menerima tanggung jawab atas pelepasan pekerjaan tersebut.</blockquote>
            <p>Tanda ini berkaitan dengan artefak atau komunikasi yang terkait dengannya.</p>
            <p>Tanda ini tidak selalu berarti bahwa setiap kegiatan yang dilakukan oleh individu tersebut menggunakan kecerdasan buatan.</p>`
      },
      {
        number: "11",
        title: "Organisasi",
        body: `
            <p>Sebuah organisasi DAPAT menggunakan <code>+AI</code>.</p>
            <p data-company-example>Contoh:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Hal ini berarti bahwa organisasi tersebut memikul tanggung jawab atas artefak terkait yang dibantu AI, sesuai dengan struktur tata kelola dan kewenangan yang berlaku padanya.</p>
            <p>Apabila bermanfaat, organisasi dan individu yang bertanggung jawab DAPAT sekaligus disebutkan keduanya.</p>
            <p data-company-example>Contoh:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Surel dan pesan",
        body: `
            <p>Dalam komunikasi pribadi, penyajian yang dianjurkan adalah:</p>
            <p><strong>Hormat saya,<br>Eric Mourant +AI</strong></p>
            <p>Tanda ini DAPAT ditautkan ke penjelasan kanonik mengenai maknanya.</p>
            <p>Suatu tautan TIDAK BOLEH mengubah notasi yang tampak.</p>
            <p>Teks biasa HARUS tetap memadai untuk menyampaikan pernyataan tersebut.</p>`
      },
      {
        number: "13",
        title: "Dokumen",
        body: `
            <p>Notasi ini DAPAT dicantumkan pada kolom penulis, penyusun, peninjau, atau pihak bertanggung jawab.</p>
            <p>Contoh:</p>
            <p><strong>Penulis: Eric Mourant +AI</strong></p>
            <p><strong>Disusun oleh: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Diterbitkan oleh: JAPER Technology +AI</strong></p>
            <p>Penempatannya SEBAIKNYA memperjelas orang atau organisasi mana yang memikul tanggung jawab.</p>`
      },
      {
        number: "14",
        title: "Perangkat lunak",
        body: `
            <p>Notasi ini DAPAT digunakan dalam repositori perangkat lunak, komit, tajuk kode sumber, dokumentasi, catatan rilis, dan artefak yang dihasilkan.</p>
            <p>Contoh:</p>
            <pre><code>Penulis: Eric Mourant +AI</code></pre>
            <p>Suatu proyek DAPAT menyatakan tambahan berikut:</p>
            <pre><code>Proyek ini menggunakan +AI.</code></pre>
            <p>Pernyataan pada tingkat proyek seperti itu SEBAIKNYA menyebutkan orang atau organisasi yang bertanggung jawab apabila memungkinkan secara praktis.</p>`
      },
      {
        number: "15",
        title: "Artefak kreatif",
        body: `
            <p>Notasi ini DAPAT menyertai gambar, audio, video, rancangan, ilustrasi, presentasi, dan karya kreatif lainnya.</p>
            <p>Contoh:</p>
            <p><strong>Dibuat oleh Eric Mourant +AI</strong></p>
            <p>Tanda ini sendiri tidak merinci unsur mana yang dihasilkan atau diubah oleh AI.</p>
            <p>Metadata provenans yang lebih terperinci DAPAT dilekatkan secara terpisah.</p>`
      },
      {
        number: "16",
        title: "Riset dan pekerjaan teknis",
        body: `
            <p>Tanda ini DAPAT digunakan dalam pekerjaan riset, ilmiah, keteknikan, atau teknis sejauh diizinkan oleh persyaratan kelembagaan, penerbitan, atau keprofesian yang berlaku.</p>
            <p><code>+AI</code> TIDAK BOLEH direpresentasikan sebagai pengganti pengungkapan yang lebih khusus yang diwajibkan oleh penerbit, regulator, pemberi kerja, badan profesi, atau peraturan perundang-undangan.</p>
            <p>Notasi ini DAPAT melengkapi pengungkapan semacam itu.</p>`
      },
      {
        number: "17",
        title: "Representasi terbaca mesin",
        body: `
            <p>Sistem DAPAT merepresentasikan pernyataan ini menggunakan metadata terstruktur.</p>
            <p>Representasi minimalnya adalah:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Representasi yang lebih kaya adalah:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Bentuk terbaca mesin SEBAIKNYA mempertahankan makna semantik yang sama dengan notasi yang tampak.</p>`
      },
      {
        number: "18",
        title: "Ketahanan",
        body: `
            <p>Notasi <code>+AI</code> SEBAIKNYA tetap bertahan melalui transformasi artefak yang wajar, sejauh atribusinya dipertahankan.</p>
            <p>Contohnya meliputi konversi antarformat dokumen, pengarsipan, pencetakan, ekspor, penerbitan ulang, dan pengiriman.</p>
            <p>Apabila metadata terhapus, tanda dalam teks biasa yang tampak SEBAIKNYA tetap memadai untuk menyampaikan pernyataan tersebut.</p>`
      },
      {
        number: "19",
        title: "Penggunaan terbuka",
        body: `
            <p>Notasi <code>+AI</code> dimaksudkan untuk penggunaan publik tanpa pembatasan.</p>
            <p>Penggunaan notasi ini SEBAIKNYA TIDAK mensyaratkan:</p>
            <ul>
              <li>pendaftaran;</li><li>keanggotaan;</li><li>pembayaran;</li><li>sertifikasi;</li>
              <li>persetujuan;</li><li>atau penggunaan produk maupun penyedia AI tertentu.</li>
            </ul>
            <p>Kemanfaatan notasi ini bergantung pada kemampuannya berfungsi sebagai konvensi universal.</p>`
      },
      {
        number: "20",
        title: "Kenetralan",
        body: `
            <p><code>+AI</code> tidak menyatakan persetujuan maupun ketidaksetujuan terhadap kecerdasan buatan.</p>
            <p>Notasi ini tidak menunjukkan apakah penggunaan AI itu perlu, diinginkan, atau lebih unggul daripada pekerjaan manusia tanpa bantuan.</p>
            <p>Notasi ini hanya mencatat keikutsertaan AI yang substansial serta akuntabilitas manusia atau organisasi.</p>`
      },
      {
        number: "21",
        title: "Pernyataan yang menyesatkan",
        body: `
            <p>Seseorang atau organisasi SEBAIKNYA TIDAK menggunakan <code>+AI</code> apabila:</p>
            <ul>
              <li>tidak ada pihak bertanggung jawab yang dapat diidentifikasi;</li>
              <li>pihak yang disebutkan belum mengadopsi artefak tersebut;</li>
              <li>artefak tersebut diterbitkan secara otomatis tanpa kewenangan manusia yang bermakna;</li>
              <li>atau notasi tersebut digunakan untuk menimbulkan kesan palsu adanya akuntabilitas manusia.</li>
            </ul>
            <p>Keluaran AI otonom tanpa adopsi manusia yang bermakna berada di luar lingkup kanonik <code>+AI</code>.</p>
            <p>Spesifikasi mendatang DAPAT menetapkan notasi untuk keluaran AI otonom.</p>`
      },
      {
        number: "22",
        title: "Hubungan dengan kepengarangan",
        body: `
            <p><code>+AI</code> dengan sengaja tidak menetapkan persentase kepengarangan.</p>
            <p>Suatu artefak DAPAT memuat bahan yang sebagian besar berasal dari manusia dan tetap memenuhi syarat.</p>
            <p>Suatu artefak DAPAT memuat bahan yang sebagian besar berasal dari AI dan tetap memenuhi syarat.</p>
            <p>Ujian yang relevan adalah apakah:</p>
            <p><strong>AI membantu secara substansial, dan pihak yang disebutkan bertanggung jawab atas hasilnya.</strong></p>`
      },
      {
        number: "23",
        title: "Penjelasan publik kanonik",
        body: `
            <p>Apabila diperlukan penjelasan singkat, rumusan yang dianjurkan adalah:</p>
            <p class="canonical">AI membantu. Saya bertanggung jawab.</p>
            <p>Apabila diperlukan penjelasan yang lebih panjang:</p>
            <blockquote><strong><code>+AI</code> berarti kecerdasan buatan membantu pekerjaan ini secara substansial dan orang atau organisasi yang disebutkan menerima tanggung jawab atas artefak yang dihasilkan.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Uji +AI",
        body: `
            <p>Sebelum menerapkan tanda ini, seseorang seharusnya dapat menjawab <strong>ya</strong> atas kedua pertanyaan berikut:</p>
            <p><strong>Apakah AI membantu menghasilkan karya ini secara substansial?</strong></p>
            <p><strong>Apakah saya bersedia bertanggung jawab atas pelepasannya?</strong></p>
            <p>Jika kedua jawabannya ya:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Perluasan pada masa mendatang",
        body: `
            <p>Versi mendatang DAPAT menetapkan notasi tambahan yang menyangkut:</p>
            <ul>
              <li>bantuan AI yang kecil;</li><li>penghasilan yang terutama oleh AI;</li><li>peninjauan manusia yang menyeluruh;</li>
              <li>verifikasi independen;</li><li>kegiatan agen otonom;</li>
              <li>provenans kriptografis;</li><li>identifikasi sistem AI;</li>
              <li>identifikasi model;</li><li>atau rangkaian kontribusi manusia dan mesin.</li>
            </ul>
            <p>Perluasan semacam itu SEBAIKNYA mempertahankan <code>+AI</code> sebagai tanda kanonik yang sederhana untuk:</p>
            <p class="canonical">karya yang dibantu AI dengan tanggung jawab manusia yang dapat diidentifikasi.</p>`
      },
      {
        number: "26",
        title: "Pernyataan kanonik",
        body: `
            <p>Seseorang atau organisasi yang menerapkan <code>+AI</code> membuat pernyataan berikut:</p>
            <blockquote><strong>Kecerdasan buatan membantu pekerjaan ini secara substansial. Saya telah memilih untuk menerima, menerbitkan, mengirimkan, menggelar, atau dengan cara lain melepas karya yang dihasilkan, dan saya bertanggung jawab atas keputusan tersebut serta atas karya sebagaimana disajikan.</strong></blockquote>
            <p>Rumusan ringkas untuk publik adalah:</p>
            <p class="canonical">AI membantu. Saya bertanggung jawab.</p>
            <p>Tanda kanoniknya adalah:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Spesifikasi +AI v0.1</p><p>Provenans dan Akuntabilitas Manusia-AI</p><strong>AI membantu. Saya bertanggung jawab.</strong>"
  });
})(window.PlusAISpecTranslations);
