/*!
 * +AI Specification — Cantonese/Yue (yue)
 * Status: reviewed translation.
 * Interface chrome: AI-generated, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → 必須
 *   MUST NOT   → 不得
 *   SHOULD     → 應該
 *   SHOULD NOT → 不應該
 *   MAY        → 可以
 *
 * Script note: Written Cantonese (traditional characters), using Cantonese
 * lexicon and particles (嘅、係、咗、嚟、幫手) in a formal documentary register.
 * Canonical slogan: 「AI 幫過手。責任由我承擔。」reused verbatim in sections 1,
 * 23, 26 and the closing panel.
 */
(function (registry) {
  registry.register("yue", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI 幫過手。責任由我承擔。",
      "description": "+AI 表示人工智能實質上幫過呢件工作，而具名嘅個人或機構接受對佢嘅責任。",
      "skip": "跳去解釋",
      "language": "語言",
      "languageAria": "選擇語言",
      "theme": "深色模式",
      "themeDark": "深色模式",
      "themeLight": "淺色模式",
      "themeDarkAria": "使用深色模式",
      "themeLightAria": "使用淺色模式",
      "highlight": "強調色",
      "highlightAria": "隨機選擇一種強調色",
      "followedLink": "+AI 後綴稱號說明",
      "heroTitle": "AI 幫過手。責任由我承擔。",
      "heroLead": "名字帶住呢條連結嘅個人或機構正作出一個簡單聲明：<strong>人工智能實質上幫過呢件工作，而佢哋接受發布佢嘅責任。</strong>",
      "readSpec": "閱讀規範",
      "meansHeading": "呢個標記講咩",
      "meaningOneTitle": "AI 有份參與",
      "meaningOneBody": "AI 實質上幫手創作、分析、轉化或者呈現呢件工作。",
      "meaningTwoTitle": "由人去揀",
      "meaningTwoBody": "個人或機構知情下採納同發布咗個結果。",
      "meaningThreeTitle": "責任仍然喺人度",
      "meaningThreeBody": "具名嘅一方唔會將問責轉移畀 AI 系統或者供應商。",
      "plainTitle": "透明嘅協助。可見嘅問責。",
      "plainLead": "呢個標記係問責聲明，唔係聲稱 AI 係作者，亦唔係保證件工作係啱嘅。",
      "plainBody": "佢冇講件工作有幾多嚟自 AI。佢講 AI 實質上影響咗個結果，而一個可以識別嘅個人或機構企喺使用 AI 嘅決定背後。",
      "plainQuote": "三個字元令參與同責任都可見。",
      "fullDocument": "完整文件",
      "specification": "規範",
      "statusLabel": "狀態",
      "statusValue": "草案",
      "versionLabel": "版本",
      "markLabel": "規範標記",
      "contents": "目錄",
      "footerLine": "開放標記。人類責任。",
      "versionFooter": "規範 v0.1",
      "translationNote": "呢個係參考譯本。如有出入，以英文原文為規範文件。",
      "colourChanged": "強調色已改為 {colour}。"
    },
    untranslatedNotice: {
      "badge": "未翻譯",
      "headline": "以下規範以英文顯示。",
      "detail": "呢種語言仲未翻譯。英文文本喺所有情況下都係規範版本。"
    },
    endonym: "粵語",
    sections: [
      {
        number: "1",
        title: "目的",
        body: `
            <p><code>+AI</code>記法提供一個簡潔嘅方法，用嚟表明一件成品係經人工智能實質幫手做出嚟，同時表明有邊個人或者邊個組織為呢件成品承擔責任。</p>
            <p>規範寫法係：</p>
            <p class="canonical"><code>&lt;責任方&gt; +AI</code></p>
            <p>例子：</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>最根本嘅意思係：</p>
            <p class="canonical">AI 幫過手。責任由我承擔。</p>`
      },
      {
        number: "2",
        title: "設計原則",
        body: `
            <p><code>+AI</code>並唔係要判定一件成品屬於「人類創作」抑或「人工智能創作」。</p>
            <p>當代嘅成品，在製作過程中可能在人類同人工智能系統之間來回傳遞好多次。</p>
            <p><code>+AI</code>要傳達嘅，係以下兩項事實：</p>
            <ol>
              <li>人工智能對呢項工作提供咗實質嘅幫手；以及</li>
              <li>有一個能夠識別嘅人或者組織，為由此產生嘅成品承擔責任。</li>
            </ol>
            <p>所以本標準所關注嘅係<strong>人工智能嘅參與同人類嘅問責</strong>，而唔係排他性嘅作者身分。</p>`
      },
      {
        number: "3",
        title: "規範性用語",
        body: `
            <p><strong>必須 (MUST)</strong>、<strong>不得 (MUST NOT)</strong>、<strong>應該 (SHOULD)</strong>、<strong>不應該 (SHOULD NOT)</strong>同<strong>可以 (MAY)</strong>呢幾個用語，在本規範裏面屬於規範性要求。</p>
            <p><strong>必須</strong>表示絕對嘅要求。</p>
            <p><strong>不得</strong>表示絕對嘅禁止。</p>
            <p><strong>應該</strong>表示強烈嘅建議；如果有正當理由，可以唔照跟。</p>
            <p><strong>不應該</strong>表示通常要避免嘅做法，但在特定情況下可能有正當理由。</p>
            <p><strong>可以</strong>表示屬於選擇性嘅做法。</p>`
      },
      {
        number: "4",
        title: "規範記法",
        body: `
            <p>規範標記係：</p>
            <p class="canonical"><code>+AI</code></p>
            <p>供人閱讀嘅規範形式係：</p>
            <p><strong><code>&lt;責任方&gt; +AI</code></strong></p>
            <p>例子：</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>呢個標記分大細寫。</p>
            <p>規範形式必須採用：</p>
            <ul>
              <li>一個加號<code>+</code>；</li>
              <li>之後緊接住大寫拉丁字母<code>AI</code>；</li>
              <li>中間唔准有任何空白。</li>
            </ul>
            <p>因此<code>+AI</code>係規範形式。</p>
            <p>以下嘅寫法都唔係規範上嘅等同形式：</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>本規範日後嘅擴充可以定義其他變體，但除咗經明確定義之外，不得推定佢哋帶有<code>+AI</code>嘅規範含義。</p>`
      },
      {
        number: "5",
        title: "標記嘅含義",
        body: `
            <p>使用<code>+AI</code>嘅責任方，聲明以下各項：</p>
            <h4>5.1 人工智能嘅參與</h4>
            <p>人工智能在創作、分析、轉換、生成、評估、組織或者呈現相關成品嘅過程中，提供咗實質嘅幫手。</p>
            <h4>5.2 知情</h4>
            <p>責任方知道，或者合理地相信，確實有實質嘅人工智能幫手。</p>
            <h4>5.3 授權</h4>
            <p>責任方授權、發起、指示，或者明知而採納咗相關嘅人工智能使用。</p>
            <h4>5.4 人類或者組織嘅控制</h4>
            <p>對於呢件成品會唔會發布、傳送、部署、提交、展示或者以其他方式對外發出，責任方保留決定權。</p>
            <h4>5.5 採納</h4>
            <p>責任方按呢件成品現時呈現嘅形態接受佢。</p>
            <h4>5.6 責任</h4>
            <p>責任方為發出、使用或者用呢件成品作出陳述嘅決定承擔責任。</p>
            <p>上述各項合埋一齊，就構成<code>+AI</code>聲明。</p>`
      },
      {
        number: "6",
        title: "實質幫手",
        body: `
            <p>當人工智能嘅參與對最終成品有實質影響嘅時候，應該使用呢個標記。</p>
            <p>實質幫手包括但不限於人工智能在以下方面嘅貢獻：</p>
            <ul>
              <li>寫作；</li><li>推理；</li><li>分析；</li><li>建議；</li>
              <li>研究綜述；</li><li>軟件程式碼；</li><li>數據解讀；</li>
              <li>設計；</li><li>圖像；</li><li>音頻；</li><li>視頻；</li>
              <li>涉及實質理解判斷嘅翻譯；</li><li>規劃；</li>
              <li>決策支援；</li><li>數學或者技術工作；</li>
              <li>令意思有實質改變嘅編輯；</li>
              <li>又或者其他實質嘅智力或者創作工作。</li>
            </ul>
            <p>附帶性或者純機械性嘅人工智能功能，唔一定需要用<code>+AI</code>。</p>
            <p>呢類例子包括自動拼寫更正、基本自動補全、例行排版格式處理，或者其他唔會對成品實質內容有實質影響嘅功能。</p>
            <p>判斷嘅關鍵，唔係內容裏面由人工智能做出嘅百分比。</p>
            <p>判斷嘅關鍵係：</p>
            <blockquote><strong>人工智能有冇對所呈現嘅成品造成實質影響？</strong></blockquote>`
      },
      {
        number: "7",
        title: "責任",
        body: `
            <p>責任係<code>+AI</code>嘅核心屬性。</p>
            <p>責任方使用呢個標記，並唔會因此將責任轉移去任何人工智能系統、模型、供應方、代理或者工具。</p>
            <p>類似以下意思嘅講法：</p>
            <blockquote>「係人工智能生成嘅，所以我唔須要負責。」</blockquote>
            <p>同<code>+AI</code>嘅既定含義並不相容。</p>
            <p>責任方可以高度依賴人工智能嘅幫手。</p>
            <p>責任方可以發布實質上由人工智能生成嘅內容。</p>
            <p>責任方可以接受自己本身冇能力獨立做出嘅建議。</p>
            <p>只要責任方明知而採納由此產生嘅成品，並且為將佢發出承擔責任，上述任何一種情況都唔會妨礙使用<code>+AI</code>。</p>`
      },
      {
        number: "8",
        title: "+AI 唔代表嘅意思",
        body: `
            <p>除咗另有明確聲明之外，<code>+AI</code>並唔主張：</p>
            <ul>
              <li>呢件成品完全冇錯；</li>
              <li>裏面每一項事實陳述都經過獨立核實；</li>
              <li>裏面每一處引註都經過獨立查核；</li>
              <li>呢件成品符合任何特定嘅專業標準；</li>
              <li>呢件成品在法律上正確；</li>
              <li>呢件成品在醫學上正確；</li>
              <li>呢件成品對任何特定用途而言係安全嘅；</li>
              <li>呢件成品完全冇幻覺內容；</li>
              <li>責任方親手寫咗其中每一個部分；</li>
              <li>呢件成品大部分由人工智能生成；</li>
              <li>呢件成品只有小部分由人工智能生成；</li>
              <li>呢件成品具有原創性；</li>
              <li>裏面冇任何第三方知識產權；</li>
              <li>從來冇向人工智能系統提供過機密資料；</li>
              <li>曾經使用過某一個特定嘅人工智能供應方、模型或者系統；</li>
              <li>責任方同意人工智能每一項中間輸出；</li>
              <li>又或者責任方有能力重現或者解釋該人工智能系統內部嘅推理過程。</li>
            </ul>
            <p><code>+AI</code>係一項<strong>問責聲明</strong>，而唔係對正確性嘅保證。</p>`
      },
      {
        number: "9",
        title: "人手審閱",
        body: `
            <p>0.1 版並唔要求對成品嘅每一個部分逐字或者逐項做人手審閱。</p>
            <p>不過，責任方必須明知而接受所發出嘅成品。</p>
            <p>在冇發生任何有意義嘅人類採納行為嘅情況下，盲目或者自動轉發未經審閱嘅人工智能輸出，不應該用<code>+AI</code>嚟表示。</p>
            <p>本規範日後嘅版本可以定義更強嘅保證標記，用嚟表示已經完成全面審閱或者獨立驗證。</p>`
      },
      {
        number: "10",
        title: "個人",
        body: `
            <p>個人可以將呢個記法放在自己姓名之後。</p>
            <p>例子：</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>意思係：</p>
            <blockquote>人工智能對相關工作提供咗實質嘅幫手，而 Eric Mourant 為將該項工作發出承擔責任。</blockquote>
            <p>呢個標記係指向與佢相關嘅成品或者通訊。</p>
            <p>佢唔一定表示該名個人所做嘅每一項活動都使用人工智能。</p>`
      },
      {
        number: "11",
        title: "組織",
        body: `
            <p>組織可以使用<code>+AI</code>。</p>
            <p data-company-example>例子：</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>意思係，該組織按其適用嘅治理同授權架構，為相關嘅人工智能輔助成品承擔責任。</p>
            <p>在有用嘅情況下，可以同時標明組織同負責嘅個人。</p>
            <p data-company-example>例子：</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "電子郵件同即時訊息",
        body: `
            <p>在私人通訊裏面，較適宜嘅呈現方式係：</p>
            <p><strong>敬祝安好，<br>Eric Mourant +AI</strong></p>
            <p>呢個標記可以加上超連結，指向對其含義嘅規範說明。</p>
            <p>超連結不得改變可見嘅記法。</p>
            <p>純文字必須始終足以表達呢項聲明。</p>`
      },
      {
        number: "13",
        title: "文件",
        body: `
            <p>呢個記法可以出現在作者、編製人、審閱人或者責任方等欄位裏面。</p>
            <p>例子：</p>
            <p><strong>作者：Eric Mourant +AI</strong></p>
            <p><strong>編製：Eric Mourant +AI</strong></p>
            <p data-company-example><strong>發出：JAPER Technology +AI</strong></p>
            <p>放置嘅位置應該清楚顯示係邊個人或者邊個組織承擔責任。</p>`
      },
      {
        number: "14",
        title: "軟件",
        body: `
            <p>呢個記法可以用在軟件程式碼庫、提交記錄、原始碼檔頭、文檔、版本說明同生成嘅成品裏面。</p>
            <p>例子：</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>專案亦可以另外聲明：</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>呢類專案層面嘅聲明，在可行嘅情況下應該標明負責嘅個人或者組織。</p>`
      },
      {
        number: "15",
        title: "創作成品",
        body: `
            <p>呢個記法可以隨同圖像、音頻、視頻、設計、插圖、演示材料同其他創作作品一齊使用。</p>
            <p>例子：</p>
            <p><strong>由 Eric Mourant 創作 +AI</strong></p>
            <p>呢個標記本身並唔會指明邊啲元素係由人工智能生成或者修改。</p>
            <p>更詳細嘅來源元數據可以另外附上。</p>`
      },
      {
        number: "16",
        title: "研究同技術工作",
        body: `
            <p>在適用嘅機構、出版或者專業要求所允許嘅範圍內，呢個標記可以用於研究、科學、工程或者技術工作。</p>
            <p>不得將<code>+AI</code>說成足以取代出版方、監管機構、僱主、專業團體或者法律所要求嘅任何更具體嘅披露。</p>
            <p>呢個記法可以作為該類披露嘅補充。</p>`
      },
      {
        number: "17",
        title: "機器可讀表示",
        body: `
            <p>系統可以用結構化元數據嚟表示呢項聲明。</p>
            <p>最簡嘅表示係：</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>較完整嘅表示係：</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>機器可讀形式應該保持同可見記法一樣嘅語義含義。</p>`
      },
      {
        number: "18",
        title: "延續性",
        body: `
            <p>在署名資料得以保留嘅情況下，<code>+AI</code>記法應該在成品經過合理轉換之後繼續存在。</p>
            <p>例子包括文件格式轉換、歸檔、列印、匯出、重新發布同傳送。</p>
            <p>如果元數據被剝除，可見嘅純文字標記應該仍然足以傳達呢項聲明。</p>`
      },
      {
        number: "19",
        title: "開放使用",
        body: `
            <p><code>+AI</code>記法旨在供公眾無限制地使用。</p>
            <p>使用呢個記法不應該要求：</p>
            <ul>
              <li>註冊；</li><li>會籍；</li><li>付費；</li><li>認證；</li>
              <li>批准；</li><li>又或者使用任何特定嘅人工智能產品或者供應方。</li>
            </ul>
            <p>呢個記法有幾有用，取決於佢能唔能夠作為一項通用嘅慣例發揮作用。</p>`
      },
      {
        number: "20",
        title: "中立性",
        body: `
            <p><code>+AI</code>並唔表達對人工智能嘅贊同或者反對。</p>
            <p>佢唔會表明使用人工智能係唔係必要、係唔係可取，或者係唔係優於冇輔助嘅人類工作。</p>
            <p>佢只係記錄人工智能嘅實質參與，以及人類或者組織嘅問責。</p>`
      },
      {
        number: "21",
        title: "虛假表述",
        body: `
            <p>在以下情況下，個人或者組織不應該使用<code>+AI</code>：</p>
            <ul>
              <li>並無能夠識別嘅責任方；</li>
              <li>被標明嘅一方並冇採納呢件成品；</li>
              <li>呢件成品係在冇有意義嘅人類授權之下自動發出；</li>
              <li>又或者使用呢個記法係為咗製造有人類問責嘅虛假印象。</li>
            </ul>
            <p>未經有意義嘅人類採納嘅自主人工智能輸出，唔屬於<code>+AI</code>嘅規範適用範圍。</p>
            <p>日後嘅規範可以為自主人工智能輸出定義相應嘅記法。</p>`
      },
      {
        number: "22",
        title: "同作者身分嘅關係",
        body: `
            <p><code>+AI</code>係有意唔去劃定作者身分嘅百分比。</p>
            <p>一件成品可以主要由人類原創嘅內容組成，而仍然符合適用條件。</p>
            <p>一件成品可以主要由人工智能原創嘅內容組成，而仍然符合適用條件。</p>
            <p>相關嘅檢驗標準在於：</p>
            <p><strong>人工智能提供咗實質嘅幫手，而被標明嘅一方為結果承擔責任。</strong></p>`
      },
      {
        number: "23",
        title: "規範嘅公開解釋",
        body: `
            <p>需要簡短說明嘅時候，較適宜嘅講法係：</p>
            <p class="canonical">AI 幫過手。責任由我承擔。</p>
            <p>需要較長說明嘅時候：</p>
            <blockquote><strong><code>+AI</code>表示人工智能對呢項工作提供咗實質嘅幫手，而被標明嘅個人或者組織為由此產生嘅成品承擔責任。</strong></blockquote>`
      },
      {
        number: "24",
        title: "+AI 檢驗",
        body: `
            <p>在使用呢個標記之前，使用者要有能力對以下兩個問題都答<strong>係</strong>：</p>
            <p><strong>人工智能有冇實質幫手做出呢件成品？</strong></p>
            <p><strong>我願唔願意為將佢發出承擔責任？</strong></p>
            <p>如果兩個答案都係「係」：</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "日後嘅擴充",
        body: `
            <p>日後嘅版本可以針對以下方面定義額外嘅記法：</p>
            <ul>
              <li>輕微嘅人工智能幫手；</li><li>以人工智能為主嘅生成；</li><li>全面嘅人手審閱；</li>
              <li>獨立驗證；</li><li>自主代理嘅活動；</li>
              <li>密碼學來源證明；</li><li>人工智能系統嘅識別；</li>
              <li>模型嘅識別；</li><li>又或者人類同機器貢獻嘅鏈條。</li>
            </ul>
            <p>該類擴充應該保持<code>+AI</code>作為簡單規範標記嘅地位，用嚟表示：</p>
            <p class="canonical">經人工智能幫手、而且有可識別人類責任嘅工作。</p>`
      },
      {
        number: "26",
        title: "規範聲明",
        body: `
            <p>使用<code>+AI</code>嘅個人或者組織，作出以下聲明：</p>
            <blockquote><strong>人工智能對呢項工作提供咗實質嘅幫手。我已經選擇接受、發布、傳送、部署或者以其他方式發出由此產生嘅作品，我為呢個決定，以及為所呈現嘅作品承擔責任。</strong></blockquote>
            <p>對外嘅簡短講法係：</p>
            <p class="canonical">AI 幫過手。責任由我承擔。</p>
            <p>規範標記係：</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI 規範 v0.1</p><p>人類與人工智能嘅來源同問責</p><strong>AI 幫過手。責任由我承擔。</strong>"
  });
})(window.PlusAISpecTranslations);
