/*!
 * +AI Specification — Turkish (tr)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → ZORUNLUDUR
 *   MUST NOT   → YASAKTIR
 *   SHOULD     → ÖNERİLİR
 *   SHOULD NOT → ÖNERİLMEZ
 *   MAY        → İSTEĞE BAĞLIDIR
 */
(function (registry) {
  registry.register("tr", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = YZ yardım etti. Sorumluluğu ben alıyorum.",
      "description": "+AI, yapay zekânın çalışmaya esaslı ölçüde katkıda bulunduğu ve adı belirtilen bir kişi veya kuruluşun bunun sorumluluğunu kabul ettiği anlamına gelir.",
      "skip": "Açıklamaya geç",
      "language": "Dil",
      "languageAria": "Dil seç",
      "theme": "Koyu mod",
      "themeDark": "Koyu mod",
      "themeLight": "Açık mod",
      "themeDarkAria": "Koyu modu kullan",
      "themeLightAria": "Açık modu kullan",
      "highlight": "Vurgu",
      "highlightAria": "Rastgele bir vurgu rengi seç",
      "followedLink": "+AI ad sonrası gösteriminin açıklaması",
      "heroTitle": "YZ yardım etti. Sorumluluğu ben alıyorum.",
      "heroLead": "Adının yanında bu bağlantı bulunan kişi veya kuruluş basit bir beyanda bulunmaktadır: <strong>yapay zekâ çalışmaya esaslı ölçüde katkıda bulunmuş ve söz konusu taraf çalışmayı yayımlamanın sorumluluğunu kabul etmiştir.</strong>",
      "readSpec": "Belirtimi oku",
      "meansHeading": "Bu işaret ne söylüyor",
      "meaningOneTitle": "Yapay zekâ katıldı",
      "meaningOneBody": "Yapay zekâ çalışmanın oluşturulmasına, analizine, dönüştürülmesine veya sunulmasına esaslı ölçüde yardımcı oldu.",
      "meaningTwoTitle": "İnsan karar verdi",
      "meaningTwoBody": "Bir kişi veya kuruluş sonucu bilinçli olarak benimsedi ve yayımladı.",
      "meaningThreeTitle": "Sorumluluk insanda kalır",
      "meaningThreeBody": "Adı belirtilen taraf hesap verebilirliği bir yapay zekâ sistemine veya sağlayıcısına devretmez.",
      "plainTitle": "Şeffaf destek. Görünür hesap verebilirlik.",
      "plainLead": "Bu işaret bir hesap verebilirlik beyanıdır; yapay zekânın yazar olduğu iddiası veya çalışmanın doğru olduğuna dair bir garanti değildir.",
      "plainBody": "Çalışmanın ne kadarının yapay zekâdan geldiğini söylemez. Yapay zekânın sonucu esaslı ölçüde etkilediğini ve tanımlanabilir bir kişi veya kuruluşun yapay zekâyı kullanma kararının arkasında durduğunu ifade eder.",
      "plainQuote": "Üç karakter hem katılımı hem de sorumluluğu görünür kılar.",
      "fullDocument": "Tam belge",
      "specification": "Belirtim",
      "statusLabel": "Durum",
      "statusValue": "Taslak",
      "versionLabel": "Sürüm",
      "markLabel": "Kanonik işaret",
      "contents": "İçindekiler",
      "footerLine": "Açık gösterim. İnsan sorumluluğu.",
      "versionFooter": "Belirtim v0.1",
      "translationNote": "Bu çeviri bilgilendirme amacıyla sunulmuştur. Herhangi bir farklılık durumunda özgün İngilizce metin normatif belgedir.",
      "colourChanged": "Vurgu rengi {colour} olarak değiştirildi."
    },
    untranslatedNotice: {
      "badge": "Çevrilmedi",
      "headline": "Aşağıdaki belirtim İngilizce olarak gösterilmektedir.",
      "detail": "Bu dil henüz çevrilmedi. İngilizce metin her durumda normatif sürümdür."
    },
    endonym: "Türkçe",
    sections: [
      {
        number: "1",
        title: "Amaç",
        body: `
            <p><code>+AI</code> gösterimi, bir yapıtın yapay zekâ tarafından esaslı ölçüde desteklendiğini belirtmek ve aynı zamanda ortaya çıkan yapıtın sorumluluğunu kabul eden kişiyi veya kuruluşu tanımlamak için özlü bir yöntem sağlar.</p>
            <p>Kanonik ifade şudur:</p>
            <p class="canonical"><code>&lt;Sorumlu Taraf&gt; +AI</code></p>
            <p>Örnek:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Temel anlamı şudur:</p>
            <p class="canonical">YZ yardım etti. Sorumluluğu ben alıyorum.</p>`
      },
      {
        number: "2",
        title: "Tasarım ilkesi",
        body: `
            <p><code>+AI</code>, bir yapıtın “insan tarafından oluşturulmuş” mu yoksa “yapay zekâ tarafından oluşturulmuş” mu olduğunu belirlemeyi amaçlamaz.</p>
            <p>Günümüz yapıtları, oluşturulma süreçlerinde insan ile yapay zekâ sistemleri arasında birçok kez el değiştirebilir.</p>
            <p><code>+AI</code> bunun yerine iki olguyu bildirir:</p>
            <ol>
              <li>yapay zekâ, çalışmaya esaslı ölçüde katkıda bulunmuştur; ve</li>
              <li>kimliği belirlenebilir bir kişi veya kuruluş, ortaya çıkan yapıtın sorumluluğunu kabul etmektedir.</li>
            </ol>
            <p>Bu nedenle standart, münhasır eser sahipliğinden ziyade <strong>yapay zekâ katılımı ile insanın hesap verebilirliğini</strong> konu alır.</p>`
      },
      {
        number: "3",
        title: "Normatif terminoloji",
        body: `
            <p><strong>ZORUNLUDUR (MUST)</strong>, <strong>YASAKTIR (MUST NOT)</strong>, <strong>ÖNERİLİR (SHOULD)</strong>, <strong>ÖNERİLMEZ (SHOULD NOT)</strong> ve <strong>İSTEĞE BAĞLIDIR (MAY)</strong> terimleri, bu belirtim kapsamında normatif gereklilikleri ifade eder.</p>
            <p><strong>ZORUNLUDUR</strong>, mutlak bir gerekliliği belirtir.</p>
            <p><strong>YASAKTIR</strong>, mutlak bir yasağı belirtir.</p>
            <p><strong>ÖNERİLİR</strong>, meşru bir gerekçenin bulunduğu hâllerde kendisinden ayrılınabilecek güçlü bir tavsiyeyi belirtir.</p>
            <p><strong>ÖNERİLMEZ</strong>, olağan koşullarda kaçınılan, ancak belirli durumlarda gerekçelendirilebilecek bir uygulamayı belirtir.</p>
            <p><strong>İSTEĞE BAĞLIDIR</strong>, seçimlik bir uygulamayı belirtir.</p>`
      },
      {
        number: "4",
        title: "Kanonik gösterim",
        body: `
            <p>Kanonik işaret şudur:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>İnsan tarafından okunabilir kanonik biçim şudur:</p>
            <p><strong><code>&lt;Sorumlu Taraf&gt; +AI</code></strong></p>
            <p>Örnekler:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>İşaret, büyük-küçük harf duyarlıdır.</p>
            <p>Kanonik biçimde aşağıdakilerin kullanılması ZORUNLUDUR:</p>
            <ul>
              <li>bir artı işareti <code>+</code>;</li>
              <li>hemen ardından büyük harfli Latin karakterleri <code>AI</code>;</li>
              <li>aralarında hiçbir boşluk bulunmaksızın.</li>
            </ul>
            <p>Dolayısıyla <code>+AI</code> kanoniktir.</p>
            <p>Aşağıdakiler kanonik eşdeğer değildir:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Bu belirtime yapılacak eklentilerle sonradan başka varyantların tanımlanması İSTEĞE BAĞLIDIR; ancak açıkça tanımlanmadıkça bu varyantların kanonik <code>+AI</code> anlamını taşıdığının varsayılması YASAKTIR.</p>`
      },
      {
        number: "5",
        title: "İşaretin anlamı",
        body: `
            <p><code>+AI</code> kullanan bir sorumlu taraf, aşağıdakileri beyan etmiş olur:</p>
            <h4>5.1 Yapay zekâ katılımı</h4>
            <p>İlgili yapıtın oluşturulmasında, çözümlenmesinde, dönüştürülmesinde, üretilmesinde, değerlendirilmesinde, yapılandırılmasında veya sunulmasında yapay zekâ esaslı ölçüde katkıda bulunmuştur.</p>
            <h4>5.2 Bilgi</h4>
            <p>Sorumlu taraf, esaslı bir yapay zekâ katkısının gerçekleştiğini bilmektedir veya makul olarak buna inanmaktadır.</p>
            <h4>5.3 Yetki</h4>
            <p>Sorumlu taraf, yapay zekânın ilgili kullanımına izin vermiş, bunu başlatmış, yönlendirmiş veya bilerek benimsemiştir.</p>
            <h4>5.4 İnsan veya kurumsal denetim</h4>
            <p>Sorumlu taraf, yapıtın yayımlanıp yayımlanmayacağı, iletilip iletilmeyeceği, dağıtılıp dağıtılmayacağı, teslim edilip edilmeyeceği, sunulup sunulmayacağı veya başka bir biçimde ortaya konulup konulmayacağı konusundaki yetkiyi elinde tutmuştur.</p>
            <h4>5.5 Benimseme</h4>
            <p>Sorumlu taraf, yapıtı sunulduğu biçimiyle kabul eder.</p>
            <h4>5.6 Sorumluluk</h4>
            <p>Sorumlu taraf, yapıtı ortaya koyma, kullanma veya temsil etme kararının sorumluluğunu kabul eder.</p>
            <p>Bu unsurlar bir bütün olarak <code>+AI</code> beyanını oluşturur.</p>`
      },
      {
        number: "6",
        title: "Esaslı katkı",
        body: `
            <p>Yapay zekâ katılımının ortaya çıkan yapıtı esaslı ölçüde etkilediği hâllerde işaretin kullanılması ÖNERİLİR.</p>
            <p>Esaslı katkı, yapay zekânın aşağıdakilere ilişkin katkısını içerebilir:</p>
            <ul>
              <li>yazma;</li><li>akıl yürütme;</li><li>çözümleme;</li><li>öneriler;</li>
              <li>araştırma sentezi;</li><li>yazılım kodu;</li><li>veri yorumlama;</li>
              <li>tasarım;</li><li>görseller;</li><li>ses;</li><li>video;</li>
              <li>esaslı yorum gerektiren çeviri;</li><li>planlama;</li>
              <li>karar desteği;</li><li>matematiksel veya teknik çalışma;</li>
              <li>anlamı esaslı biçimde değiştiren düzenleme;</li>
              <li>veya diğer esaslı zihinsel ya da yaratıcı çalışmalar.</li>
            </ul>
            <p>Arızi veya tümüyle mekanik yapay zekâ işlevleri, <code>+AI</code> kullanımını zorunlu olarak gerektirmez.</p>
            <p>Buna örnek olarak otomatik yazım düzeltmesi, temel otomatik tamamlama, olağan biçimlendirme veya bir yapıtın özünü esaslı ölçüde etkilemeyen diğer işlevler verilebilir.</p>
            <p>Belirleyici soru, içeriğin yapay zekâ tarafından üretilen yüzdesi değildir.</p>
            <p>Belirleyici soru şudur:</p>
            <blockquote><strong>Yapay zekâ, sunulan yapıtı esaslı ölçüde etkiledi mi?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Sorumluluk",
        body: `
            <p>Sorumluluk, <code>+AI</code> işaretinin belirleyici niteliğidir.</p>
            <p>Sorumlu taraf, işareti kullanmakla sorumluluğu herhangi bir yapay zekâ sistemine, modeline, sağlayıcısına, etmenine veya aracına devretmiş olmaz.</p>
            <p>Şu ifadeye denk düşen bir beyan:</p>
            <blockquote>“Bunu yapay zekâ üretti; dolayısıyla ben sorumlu değilim.”</blockquote>
            <p><code>+AI</code> işaretinin amaçlanan anlamıyla bağdaşmaz.</p>
            <p>Sorumlu tarafın yapay zekâ desteğine yoğun biçimde dayanması İSTEĞE BAĞLIDIR.</p>
            <p>Sorumlu tarafın önemli ölçüde yapay zekâ tarafından üretilmiş içerik yayımlaması İSTEĞE BAĞLIDIR.</p>
            <p>Sorumlu tarafın, kendi başına üretemeyeceği önerileri kabul etmesi İSTEĞE BAĞLIDIR.</p>
            <p>Sorumlu tarafın ortaya çıkan yapıtı bilerek benimsemesi ve onu ortaya koymanın sorumluluğunu kabul etmesi koşuluyla, bu hâllerin hiçbiri <code>+AI</code> kullanımına engel değildir.</p>`
      },
      {
        number: "8",
        title: "+AI işaretinin anlamına gelmeyenler",
        body: `
            <p>Ek bir beyanla açıkça aksi belirtilmedikçe, <code>+AI</code> aşağıdakilerin hiçbirini ileri sürmez:</p>
            <ul>
              <li>yapıtın hatasız olduğu;</li>
              <li>her olgusal ifadenin bağımsız olarak doğrulandığı;</li>
              <li>her atfın bağımsız olarak denetlendiği;</li>
              <li>yapıtın herhangi bir belirli meslekî standardı karşıladığı;</li>
              <li>yapıtın hukuken doğru olduğu;</li>
              <li>yapıtın tıbben doğru olduğu;</li>
              <li>yapıtın herhangi bir belirli amaç için güvenli olduğu;</li>
              <li>yapıtın hiçbir halüsinasyon içermediği;</li>
              <li>sorumlu tarafın her bileşeni bizzat yazdığı;</li>
              <li>yapıtın büyük bölümünü yapay zekânın ürettiği;</li>
              <li>yapıtın yalnızca küçük bir bölümünü yapay zekânın ürettiği;</li>
              <li>yapıtın özgün olduğu;</li>
              <li>üçüncü kişilere ait hiçbir fikrî mülkiyetin bulunmadığı;</li>
              <li>bir yapay zekâ sistemine gizli bilgi verilmediği;</li>
              <li>belirli bir yapay zekâ sağlayıcısının, modelinin veya sisteminin kullanıldığı;</li>
              <li>sorumlu tarafın her ara yapay zekâ çıktısına katıldığı;</li>
              <li>veya sorumlu tarafın, yapay zekâ sisteminin içsel akıl yürütmesini yeniden üretebileceği ya da açıklayabileceği.</li>
            </ul>
            <p><code>+AI</code> bir <strong>hesap verebilirlik beyanıdır</strong>; doğruluk garantisi değildir.</p>`
      },
      {
        number: "9",
        title: "İnsan incelemesi",
        body: `
            <p>Sürüm 0.1, bir yapıtın her bileşeninin sözcük sözcük veya öge öge elle incelenmesini gerektirmez.</p>
            <p>Bununla birlikte, sorumlu tarafın ortaya konulan yapıtı bilerek kabul etmesi ZORUNLUDUR.</p>
            <p>Anlamlı bir insan benimseme eyleminin gerçekleşmediği hâllerde, incelenmemiş yapay zekâ çıktısının körü körüne veya otomatik olarak iletilmesinin <code>+AI</code> ile temsil edilmesi ÖNERİLMEZ.</p>
            <p>Bu belirtimin gelecek sürümlerinde eksiksiz incelemeyi veya bağımsız doğrulamayı temsil eden daha güçlü güvence işaretlerinin tanımlanması İSTEĞE BAĞLIDIR.</p>`
      },
      {
        number: "10",
        title: "Bireyler",
        body: `
            <p>Bir bireyin gösterimi adının ardına eklemesi İSTEĞE BAĞLIDIR.</p>
            <p>Örnek:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Bunun anlamı şudur:</p>
            <blockquote>Yapay zekâ, ilgili çalışmaya esaslı ölçüde katkıda bulunmuştur ve Eric Mourant söz konusu çalışmayı ortaya koymanın sorumluluğunu kabul etmektedir.</blockquote>
            <p>İşaret, ilgili yapıt veya iletişimle ilgilidir.</p>
            <p>Bireyin gerçekleştirdiği her etkinlikte yapay zekâ kullanıldığı anlamına zorunlu olarak gelmez.</p>`
      },
      {
        number: "11",
        title: "Kuruluşlar",
        body: `
            <p>Bir kuruluşun <code>+AI</code> kullanması İSTEĞE BAĞLIDIR.</p>
            <p data-company-example>Örnek:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Bu, kuruluşun ilgili yapay zekâ destekli yapıtın sorumluluğunu, kendisine uygulanan yönetişim ve yetki yapıları uyarınca üstlendiği anlamına gelir.</p>
            <p>Yararlı olduğu hâllerde hem kuruluşun hem de sorumlu bireyin belirtilmesi İSTEĞE BAĞLIDIR.</p>
            <p data-company-example>Örnek:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "E-posta ve mesajlaşma",
        body: `
            <p>Kişisel iletişimde tercih edilen sunum şudur:</p>
            <p><strong>Saygılarımla,<br>Eric Mourant +AI</strong></p>
            <p>İşaretin, anlamına ilişkin kanonik bir açıklamaya köprü verilmesi İSTEĞE BAĞLIDIR.</p>
            <p>Bir köprünün görünür gösterimi değiştirmesi YASAKTIR.</p>
            <p>Beyanı ifade etmek için düz metnin yeterli kalması ZORUNLUDUR.</p>`
      },
      {
        number: "13",
        title: "Belgeler",
        body: `
            <p>Gösterimin yazar, hazırlayan, inceleyen veya sorumlu taraf alanında yer alması İSTEĞE BAĞLIDIR.</p>
            <p>Örnekler:</p>
            <p><strong>Yazar: Eric Mourant +AI</strong></p>
            <p><strong>Hazırlayan: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Yayımlayan: JAPER Technology +AI</strong></p>
            <p>Yerleşimin, sorumluluğu hangi kişinin veya kuruluşun üstlendiğini açıkça göstermesi ÖNERİLİR.</p>`
      },
      {
        number: "14",
        title: "Yazılım",
        body: `
            <p>Gösterimin yazılım depolarında, işlemelerde, kaynak kod başlıklarında, belgelendirmede, sürüm notlarında ve üretilen yapıtlarda kullanılması İSTEĞE BAĞLIDIR.</p>
            <p>Örnek:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Bir projenin ayrıca şu beyanda bulunması İSTEĞE BAĞLIDIR:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Proje düzeyindeki böyle bir beyanın, uygulanabilir olduğu hâllerde sorumlu kişiyi veya kuruluşu belirtmesi ÖNERİLİR.</p>`
      },
      {
        number: "15",
        title: "Yaratıcı yapıtlar",
        body: `
            <p>Gösterimin görsellere, ses kayıtlarına, videolara, tasarımlara, çizimlere, sunumlara ve diğer yaratıcı çalışmalara eşlik etmesi İSTEĞE BAĞLIDIR.</p>
            <p>Örnek:</p>
            <p><strong>Oluşturan: Eric Mourant +AI</strong></p>
            <p>İşaretin kendisi, hangi ögelerin yapay zekâ tarafından üretildiğini veya değiştirildiğini belirtmez.</p>
            <p>Daha ayrıntılı köken üstverisinin ayrıca ilişkilendirilmesi İSTEĞE BAĞLIDIR.</p>`
      },
      {
        number: "16",
        title: "Araştırma ve teknik çalışmalar",
        body: `
            <p>İlgili kurumsal, yayın veya meslekî gerekliliklerin izin verdiği ölçüde işaretin araştırma, bilimsel, mühendislik veya teknik çalışmalarda kullanılması İSTEĞE BAĞLIDIR.</p>
            <p><code>+AI</code> işaretinin, bir yayıncı, düzenleyici kurum, işveren, meslek kuruluşu veya mevzuat tarafından istenen daha özel herhangi bir açıklamanın yerine geçtiği biçiminde sunulması YASAKTIR.</p>
            <p>Gösterimin böyle bir açıklamayı tamamlayıcı nitelikte kullanılması İSTEĞE BAĞLIDIR.</p>`
      },
      {
        number: "17",
        title: "Makine tarafından okunabilir gösterim",
        body: `
            <p>Sistemlerin beyanı yapılandırılmış üstveri kullanarak temsil etmesi İSTEĞE BAĞLIDIR.</p>
            <p>Asgari bir gösterim şudur:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Daha ayrıntılı bir gösterim şudur:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Makine tarafından okunabilir biçimlerin, görünür gösterimle aynı anlamsal içeriği korumaları ÖNERİLİR.</p>`
      },
      {
        number: "18",
        title: "Kalıcılık",
        body: `
            <p>Atfın korunduğu hâllerde <code>+AI</code> gösteriminin, bir yapıtın makul dönüşümleri boyunca varlığını sürdürmesi ÖNERİLİR.</p>
            <p>Buna belge biçimleri arasında dönüştürme, arşivleme, yazdırma, dışa aktarma, yeniden yayımlama ve iletim örnek olarak verilebilir.</p>
            <p>Üstverinin kaldırıldığı hâllerde, görünür düz metin işaretinin beyanı iletmeye yeterli kalması ÖNERİLİR.</p>`
      },
      {
        number: "19",
        title: "Serbest kullanım",
        body: `
            <p><code>+AI</code> gösterimi, kamunun kısıtlamasız kullanımı için tasarlanmıştır.</p>
            <p>Gösterimin kullanımının aşağıdakileri gerektirmesi ÖNERİLMEZ:</p>
            <ul>
              <li>kayıt;</li><li>üyelik;</li><li>ödeme;</li><li>belgelendirme;</li>
              <li>onay;</li><li>veya belirli bir yapay zekâ ürününün ya da sağlayıcısının kullanımı.</li>
            </ul>
            <p>Gösterimin yararı, evrensel bir uzlaşım olarak işleyebilme yeteneğine bağlıdır.</p>`
      },
      {
        number: "20",
        title: "Tarafsızlık",
        body: `
            <p><code>+AI</code>, yapay zekâya ilişkin bir onay veya onaylamama ifade etmez.</p>
            <p>Yapay zekâ kullanımının gerekli, arzu edilir ya da yapay zekâdan yararlanmayan insan çalışmasından üstün olup olmadığını belirtmez.</p>
            <p>Yalnızca esaslı yapay zekâ katılımını ve insanın ya da kuruluşun hesap verebilirliğini kayda geçirir.</p>`
      },
      {
        number: "21",
        title: "Yanlış temsil",
        body: `
            <p>Bir kişinin veya kuruluşun aşağıdaki hâllerde <code>+AI</code> kullanması ÖNERİLMEZ:</p>
            <ul>
              <li>kimliği belirlenebilir bir sorumlu tarafın bulunmadığı hâllerde;</li>
              <li>adı belirtilen tarafın yapıtı benimsememiş olduğu hâllerde;</li>
              <li>yapıtın anlamlı bir insan yetkisi olmaksızın otomatik olarak yayımlandığı hâllerde;</li>
              <li>veya gösterimin, insanın hesap verebilirliğine ilişkin yanlış bir izlenim yaratmak amacıyla kullanıldığı hâllerde.</li>
            </ul>
            <p>Anlamlı bir insan benimsemesi olmaksızın ortaya çıkan özerk yapay zekâ çıktısı, <code>+AI</code> işaretinin kanonik kapsamı dışındadır.</p>
            <p>Gelecek belirtimlerde özerk yapay zekâ çıktısı için bir gösterim tanımlanması İSTEĞE BAĞLIDIR.</p>`
      },
      {
        number: "22",
        title: "Eser sahipliğiyle ilişkisi",
        body: `
            <p><code>+AI</code>, bilinçli olarak herhangi bir eser sahipliği yüzdesi atfetmez.</p>
            <p>Bir yapıt, ağırlıklı olarak insan kaynaklı içerik barındırsa bile yine de kapsama girebilir.</p>
            <p>Bir yapıt, ağırlıklı olarak yapay zekâ kaynaklı içerik barındırsa bile yine de kapsama girebilir.</p>
            <p>İlgili ölçüt şudur:</p>
            <p><strong>Yapay zekâ esaslı ölçüde katkıda bulunmuş olmalı ve adı belirtilen taraf sonucun sorumluluğunu almalıdır.</strong></p>`
      },
      {
        number: "23",
        title: "Kanonik kamuya açık açıklama",
        body: `
            <p>Kısa bir açıklamanın gerektiği hâllerde tercih edilen ifade şudur:</p>
            <p class="canonical">YZ yardım etti. Sorumluluğu ben alıyorum.</p>
            <p>Daha uzun bir açıklamanın gerektiği hâllerde:</p>
            <blockquote><strong><code>+AI</code>, yapay zekânın bu çalışmaya esaslı ölçüde katkıda bulunduğu ve adı belirtilen kişinin ya da kuruluşun ortaya çıkan yapıtın sorumluluğunu kabul ettiği anlamına gelir.</strong></blockquote>`
      },
      {
        number: "24",
        title: "+AI ölçütü",
        body: `
            <p>İşareti kullanmadan önce kişinin her iki soruya da <strong>evet</strong> yanıtını verebilmesi gerekir:</p>
            <p><strong>Bunun üretilmesinde yapay zekâ esaslı ölçüde yardımcı oldu mu?</strong></p>
            <p><strong>Bunu ortaya koymanın sorumluluğunu almaya hazır mıyım?</strong></p>
            <p>Her iki yanıt da evet ise:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Gelecek eklentiler",
        body: `
            <p>Gelecek sürümlerde aşağıdaki konulara ilişkin ek gösterimlerin tanımlanması İSTEĞE BAĞLIDIR:</p>
            <ul>
              <li>küçük ölçekli yapay zekâ katkısı;</li><li>ağırlıklı olarak yapay zekâ tarafından üretim;</li><li>eksiksiz insan incelemesi;</li>
              <li>bağımsız doğrulama;</li><li>özerk etmen etkinliği;</li>
              <li>kriptografik köken;</li><li>yapay zekâ sisteminin kimliği;</li>
              <li>model kimliği;</li><li>veya insan ve makine katkılarının zincirleri.</li>
            </ul>
            <p>Bu tür eklentilerin <code>+AI</code> işaretini aşağıdaki durum için yalın kanonik işaret olarak korumaları ÖNERİLİR:</p>
            <p class="canonical">Kimliği belirlenebilir insan sorumluluğunun bulunduğu, yapay zekâ destekli çalışma.</p>`
      },
      {
        number: "26",
        title: "Kanonik beyan",
        body: `
            <p><code>+AI</code> işaretini kullanan bir kişi veya kuruluş aşağıdaki beyanda bulunur:</p>
            <blockquote><strong>Yapay zekâ bu çalışmaya esaslı ölçüde katkıda bulunmuştur. Ortaya çıkan çalışmayı kabul etmeyi, yayımlamayı, iletmeyi, dağıtmayı veya başka bir biçimde ortaya koymayı seçtim ve bu kararın ve çalışmanın sunulduğu hâlinin sorumluluğunu alıyorum.</strong></blockquote>
            <p>Kamuya yönelik kısa ifade şudur:</p>
            <p class="canonical">YZ yardım etti. Sorumluluğu ben alıyorum.</p>
            <p>Kanonik işaret şudur:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI Belirtimi v0.1</p><p>İnsan-Yapay Zekâ Kökeni ve Hesap Verebilirlik</p><strong>YZ yardım etti. Sorumluluğu ben alıyorum.</strong>"
  });
})(window.PlusAISpecTranslations);
