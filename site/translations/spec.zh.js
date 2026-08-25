/*!
 * +AI Specification — Simplified Chinese (zh)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → 必须
 *   MUST NOT   → 不得
 *   SHOULD     → 应
 *   SHOULD NOT → 不应
 *   MAY        → 可以
 */
(function (registry) {
  registry.register("zh", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI 提供了帮助。我承担责任。",
      "description": "+AI表示人工智能对该作品提供了实质性协助，并由具名的个人或组织对其承担责任。",
      "skip": "跳到说明",
      "language": "语言",
      "languageAria": "选择语言",
      "theme": "深色模式",
      "themeDark": "深色模式",
      "themeLight": "浅色模式",
      "themeDarkAria": "使用深色模式",
      "themeLightAria": "使用浅色模式",
      "highlight": "强调色",
      "highlightAria": "随机选择一种强调色",
      "followedLink": "+AI后置名衔说明",
      "heroTitle": "AI 提供了帮助。我承担责任。",
      "heroLead": "姓名旁带有此链接的个人或组织正在作出一项简单声明：<strong>人工智能对该作品提供了实质性协助，而该个人或组织承担发布该作品的责任。</strong>",
      "readSpec": "阅读规范",
      "meansHeading": "该标记所表达的含义",
      "meaningOneTitle": "AI参与了工作",
      "meaningOneBody": "AI对作品的创建、分析、转换或呈现提供了实质性帮助。",
      "meaningTwoTitle": "由人作出选择",
      "meaningTwoBody": "个人或组织在知情的情况下采纳并发布了该结果。",
      "meaningThreeTitle": "责任仍由人承担",
      "meaningThreeBody": "具名方不会将责任转移给AI系统或其提供商。",
      "plainTitle": "透明的协助。明确的问责。",
      "plainLead": "该标记是一项责任声明，并非声称AI是作者，也不保证作品正确无误。",
      "plainBody": "它并不说明作品中有多少内容来自AI。它说明AI对结果产生了实质性影响，并且有可识别的个人或组织站在使用人工智能这一决定的背后。",
      "plainQuote": "三个字符，同时体现参与和责任。",
      "fullDocument": "完整文档",
      "specification": "规范",
      "statusLabel": "状态",
      "statusValue": "草案",
      "versionLabel": "版本",
      "markLabel": "规范标记",
      "contents": "目录",
      "footerLine": "开放标记。人类责任。",
      "versionFooter": "规范 v0.1",
      "translationNote": "本译文仅供参考。如有任何差异，以英文原文作为规范性文件。",
      "colourChanged": "强调色已更改为{colour}。"
    },
    untranslatedNotice: {
      "badge": "未翻译",
      "headline": "以下规范以英文显示。",
      "detail": "此语言尚未翻译。在任何情况下，英文文本均为规范版本。"
    },
    endonym: "中文",
    sections: [
      {
        number: "1",
        title: "目的",
        body: `
            <p><code>+AI</code>表示法提供了一种简洁的方法，用以标明某一成果物在实质上得到了人工智能的协助，同时标明对该成果物承担责任的个人或组织。</p>
            <p>规范表达形式为：</p>
            <p class="canonical"><code>&lt;责任主体&gt; +AI</code></p>
            <p>示例：</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>其基本含义为：</p>
            <p class="canonical">AI 提供了帮助。我承担责任。</p>`
      },
      {
        number: "2",
        title: "设计原则",
        body: `
            <p><code>+AI</code>并不试图判定某一成果物属于“人类创作”还是“人工智能创作”。</p>
            <p>当代成果物在其创作过程中，可能在人类与人工智能系统之间反复流转。</p>
            <p><code>+AI</code>所传达的，是以下两项事实：</p>
            <ol>
              <li>人工智能对该工作提供了实质性协助；以及</li>
              <li>存在可识别的个人或组织，对由此产生的成果物承担责任。</li>
            </ol>
            <p>因此，本标准所关注的是<strong>人工智能的参与与人类的问责</strong>，而非排他性的作者身份。</p>`
      },
      {
        number: "3",
        title: "规范性术语",
        body: `
            <p><strong>必须 (MUST)</strong>、<strong>不得 (MUST NOT)</strong>、<strong>应 (SHOULD)</strong>、<strong>不应 (SHOULD NOT)</strong>、<strong>可以 (MAY)</strong>等术语在本规范中表示规范性要求。</p>
            <p><strong>必须</strong>表示绝对要求。</p>
            <p><strong>不得</strong>表示绝对禁止。</p>
            <p><strong>应</strong>表示强烈推荐；在存在正当理由的情形下，可以不予遵循。</p>
            <p><strong>不应</strong>表示通常应避免的做法，但在特定情形下可能具有正当理由。</p>
            <p><strong>可以</strong>表示可选的做法。</p>`
      },
      {
        number: "4",
        title: "规范表示法",
        body: `
            <p>规范标记为：</p>
            <p class="canonical"><code>+AI</code></p>
            <p>供人阅读的规范形式为：</p>
            <p><strong><code>&lt;责任主体&gt; +AI</code></strong></p>
            <p>示例：</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>该标记区分大小写。</p>
            <p>规范形式必须采用：</p>
            <ul>
              <li>一个加号<code>+</code>；</li>
              <li>其后紧接大写拉丁字母<code>AI</code>；</li>
              <li>其间不含任何空白字符。</li>
            </ul>
            <p>因此，<code>+AI</code>为规范形式。</p>
            <p>下列各项均不构成规范等价形式：</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>本规范的扩展文件日后可以定义其他变体形式，但除经明确定义者外，不得推定其具有<code>+AI</code>的规范含义。</p>`
      },
      {
        number: "5",
        title: "标记的含义",
        body: `
            <p>使用<code>+AI</code>的责任主体声明如下事项：</p>
            <h4>5.1 人工智能的参与</h4>
            <p>人工智能在相关成果物的创作、分析、转换、生成、评估、组织或呈现过程中提供了实质性协助。</p>
            <h4>5.2 知情</h4>
            <p>责任主体知悉或合理地相信，存在实质性的人工智能协助。</p>
            <h4>5.3 授权</h4>
            <p>责任主体授权、发起、指示或明知而采纳了相关的人工智能使用行为。</p>
            <h4>5.4 人类或组织的控制</h4>
            <p>对于该成果物是否发布、传输、部署、提交、展示或以其他方式对外发出，责任主体保有决定权。</p>
            <h4>5.5 采纳</h4>
            <p>责任主体以该成果物所呈现的形式予以接受。</p>
            <h4>5.6 责任</h4>
            <p>责任主体对发出、使用或以该成果物作出表述的决定承担责任。</p>
            <p>上述各要素共同构成<code>+AI</code>声明。</p>`
      },
      {
        number: "6",
        title: "实质性协助",
        body: `
            <p>当人工智能的参与对最终成果物产生了实质性影响时，应使用该标记。</p>
            <p>实质性协助可包括人工智能对下列方面的贡献：</p>
            <ul>
              <li>写作；</li><li>推理；</li><li>分析；</li><li>建议；</li>
              <li>研究综述；</li><li>软件代码；</li><li>数据释读；</li>
              <li>设计；</li><li>图像；</li><li>音频；</li><li>视频；</li>
              <li>涉及实质性理解判断的翻译；</li><li>规划；</li>
              <li>决策支持；</li><li>数学或技术工作；</li>
              <li>实质性改变含义的编辑；</li>
              <li>以及其他实质性的智力或创造性工作。</li>
            </ul>
            <p>附带性的或纯机械性的人工智能功能，不必然要求使用<code>+AI</code>。</p>
            <p>此类示例可包括自动拼写纠正、基本自动补全、常规格式处理，以及其他不对成果物实质内容产生实质性影响的功能。</p>
            <p>判定的关键问题并非内容中由人工智能产生的比例。</p>
            <p>判定的关键问题是：</p>
            <blockquote><strong>人工智能是否对所呈现的成果物产生了实质性影响？</strong></blockquote>`
      },
      {
        number: "7",
        title: "责任",
        body: `
            <p>责任是<code>+AI</code>的核心属性。</p>
            <p>责任主体使用该标记，并不因此将责任转移给任何人工智能系统、模型、提供方、代理或工具。</p>
            <p>下述意旨的陈述：</p>
            <blockquote>“内容由人工智能生成，故本人对其不负责任。”</blockquote>
            <p>与<code>+AI</code>的既定含义不相容。</p>
            <p>责任主体可以高度依赖人工智能的协助。</p>
            <p>责任主体可以发布实质性由人工智能生成的内容。</p>
            <p>责任主体可以接受其自身无法独立产出的建议。</p>
            <p>只要责任主体明知而采纳所产生的成果物，并对将其发出承担责任，上述任一情形均不妨碍使用<code>+AI</code>。</p>`
      },
      {
        number: "8",
        title: "+AI 不表示的含义",
        body: `
            <p>除另有明确声明外，<code>+AI</code>并不主张：</p>
            <ul>
              <li>该成果物没有错误；</li>
              <li>其中每一项事实陈述均经过独立核实；</li>
              <li>其中每一处引注均经过独立查核；</li>
              <li>该成果物符合任何特定的专业标准；</li>
              <li>该成果物在法律上正确；</li>
              <li>该成果物在医学上正确；</li>
              <li>该成果物对任何特定用途而言是安全的；</li>
              <li>该成果物不含任何幻觉内容；</li>
              <li>责任主体亲自撰写了其中的每一部分；</li>
              <li>该成果物的多数部分由人工智能生成；</li>
              <li>该成果物仅有少数部分由人工智能生成；</li>
              <li>该成果物具有原创性；</li>
              <li>其中不含任何第三方知识产权；</li>
              <li>未曾向人工智能系统提供保密信息；</li>
              <li>使用了某一特定的人工智能提供方、模型或系统；</li>
              <li>责任主体认同人工智能的每一项中间输出；</li>
              <li>或责任主体能够复现或解释该人工智能系统的内部推理过程。</li>
            </ul>
            <p><code>+AI</code>是一项<strong>问责声明</strong>，而非对正确性的保证。</p>`
      },
      {
        number: "9",
        title: "人工审查",
        body: `
            <p>0.1 版并不要求对成果物的每一组成部分逐字或逐项进行人工审查。</p>
            <p>但责任主体必须明知而接受所发出的成果物。</p>
            <p>在未发生有意义的人类采纳行为的情况下，对未经审查的人工智能输出进行盲目或自动转发，不应以<code>+AI</code>加以表示。</p>
            <p>本规范的后续版本可以定义更强的保证标记，用以表示已完成全面审查或独立验证。</p>`
      },
      {
        number: "10",
        title: "个人",
        body: `
            <p>个人可以将该表示法置于其姓名之后。</p>
            <p>示例：</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>其含义为：</p>
            <blockquote>人工智能对相关工作提供了实质性协助，且 Eric Mourant 对该工作的发出承担责任。</blockquote>
            <p>该标记指向与其相关的成果物或通信。</p>
            <p>它并不必然意味着该个人所从事的每一项活动均使用人工智能。</p>`
      },
      {
        number: "11",
        title: "组织",
        body: `
            <p>组织可以使用<code>+AI</code>。</p>
            <p data-company-example>示例：</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>其含义为：该组织依其适用的治理与授权结构，对相关的人工智能协助成果物承担责任。</p>
            <p>在有助益的情况下，可以同时标明组织与负责的个人。</p>
            <p data-company-example>示例：</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "电子邮件与即时消息",
        body: `
            <p>在个人通信中，宜采用的呈现方式为：</p>
            <p><strong>顺致敬意，<br>Eric Mourant +AI</strong></p>
            <p>该标记可以设置超链接，指向对其含义的规范说明。</p>
            <p>超链接不得改变可见的表示法。</p>
            <p>纯文本必须始终足以表达该声明。</p>`
      },
      {
        number: "13",
        title: "文档",
        body: `
            <p>该表示法可以出现在作者、编制人、审查人或责任主体等字段中。</p>
            <p>示例：</p>
            <p><strong>作者：Eric Mourant +AI</strong></p>
            <p><strong>编制：Eric Mourant +AI</strong></p>
            <p data-company-example><strong>发布：JAPER Technology +AI</strong></p>
            <p>其位置安排应清楚表明由何人或何组织承担责任。</p>`
      },
      {
        number: "14",
        title: "软件",
        body: `
            <p>该表示法可以用于软件代码仓库、提交记录、源代码文件头、文档、发布说明及生成的成果物之中。</p>
            <p>示例：</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>项目还可以另行声明：</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>此类项目层面的声明，在可行时应标明负责的个人或组织。</p>`
      },
      {
        number: "15",
        title: "创造性成果物",
        body: `
            <p>该表示法可以随同图像、音频、视频、设计、插图、演示材料及其他创造性作品一并使用。</p>
            <p>示例：</p>
            <p><strong>由 Eric Mourant 创作 +AI</strong></p>
            <p>该标记本身并不指明哪些要素由人工智能生成或修改。</p>
            <p>更为详尽的溯源元数据可以单独附加。</p>`
      },
      {
        number: "16",
        title: "研究与技术工作",
        body: `
            <p>在适用的机构、出版或专业要求允许的范围内，该标记可以用于研究、科学、工程或技术工作。</p>
            <p>不得将<code>+AI</code>表述为可替代出版方、监管机构、雇主、专业团体或法律所要求的任何更为具体的披露。</p>
            <p>该表示法可以作为此类披露的补充。</p>`
      },
      {
        number: "17",
        title: "机器可读表示",
        body: `
            <p>系统可以采用结构化元数据表示该声明。</p>
            <p>最简表示为：</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>更为完整的表示为：</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>机器可读形式应保持与可见表示法相同的语义含义。</p>`
      },
      {
        number: "18",
        title: "持续性",
        body: `
            <p>在归属信息得以保留的情况下，<code>+AI</code>表示法应能在成果物的合理转换过程中继续存在。</p>
            <p>此类情形包括文档格式转换、归档、打印、导出、再次发布以及传输。</p>
            <p>在元数据被剥除的情况下，可见的纯文本标记应仍足以传达该声明。</p>`
      },
      {
        number: "19",
        title: "开放使用",
        body: `
            <p><code>+AI</code>表示法旨在供公众无限制地使用。</p>
            <p>使用该表示法不应要求：</p>
            <ul>
              <li>注册；</li><li>会员资格；</li><li>付费；</li><li>认证；</li>
              <li>批准；</li><li>或使用任何特定的人工智能产品或提供方。</li>
            </ul>
            <p>该表示法的价值，取决于其能否作为一项普遍通行的约定发挥作用。</p>`
      },
      {
        number: "20",
        title: "中立性",
        body: `
            <p><code>+AI</code>不表达对人工智能的赞同或反对。</p>
            <p>它不表明使用人工智能是否必要、是否可取，或是否优于无辅助的人类工作。</p>
            <p>它所记录的，仅为人工智能的实质性参与以及人类或组织的问责。</p>`
      },
      {
        number: "21",
        title: "虚假表示",
        body: `
            <p>在下列情形下，个人或组织不应使用<code>+AI</code>：</p>
            <ul>
              <li>不存在可识别的责任主体；</li>
              <li>被标明的主体并未采纳该成果物；</li>
              <li>该成果物系在缺乏有意义的人类授权的情况下自动发出；</li>
              <li>或使用该表示法意在造成存在人类问责的虚假印象。</li>
            </ul>
            <p>未经有意义的人类采纳的自主人工智能输出，不属于<code>+AI</code>的规范适用范围。</p>
            <p>后续规范可以为自主人工智能输出定义相应的表示法。</p>`
      },
      {
        number: "22",
        title: "与作者身份的关系",
        body: `
            <p><code>+AI</code>有意不划定作者身份的比例。</p>
            <p>成果物可以以人类原创内容为主，而仍然符合适用条件。</p>
            <p>成果物可以以人工智能原创内容为主，而仍然符合适用条件。</p>
            <p>相关的判定标准在于：</p>
            <p><strong>人工智能提供了实质性协助，且被标明的主体对其结果承担责任。</strong></p>`
      },
      {
        number: "23",
        title: "规范的公开释义",
        body: `
            <p>在需要简短说明的场合，宜采用的表述为：</p>
            <p class="canonical">AI 提供了帮助。我承担责任。</p>
            <p>在需要较详细说明的场合：</p>
            <blockquote><strong><code>+AI</code>表示人工智能对本项工作提供了实质性协助，且被标明的个人或组织对由此产生的成果物承担责任。</strong></blockquote>`
      },
      {
        number: "24",
        title: "+AI 检验",
        body: `
            <p>在使用该标记之前，使用者应能够对下列两个问题均作出<strong>肯定</strong>回答：</p>
            <p><strong>人工智能是否对本成果物的产生提供了实质性帮助？</strong></p>
            <p><strong>本人是否愿意为将其发出承担责任？</strong></p>
            <p>若两项回答均为肯定：</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "未来的扩展",
        body: `
            <p>后续版本可以针对下列方面定义附加的表示法：</p>
            <ul>
              <li>轻微的人工智能协助；</li><li>以人工智能为主的生成；</li><li>完整的人工审查；</li>
              <li>独立验证；</li><li>自主代理的活动；</li>
              <li>密码学溯源；</li><li>人工智能系统的标识；</li>
              <li>模型的标识；</li><li>或人类与机器贡献的链条。</li>
            </ul>
            <p>此类扩展应保持<code>+AI</code>作为简明规范标记的地位，用以表示：</p>
            <p class="canonical">经人工智能协助且具有可识别人类责任的工作。</p>`
      },
      {
        number: "26",
        title: "规范声明",
        body: `
            <p>使用<code>+AI</code>的个人或组织，作出如下声明：</p>
            <blockquote><strong>人工智能对本项工作提供了实质性协助。本人已选择接受、发布、传输、部署或以其他方式发出由此产生的成果物，并对该项决定以及所呈现的成果物承担责任。</strong></blockquote>
            <p>对公众的简明表述为：</p>
            <p class="canonical">AI 提供了帮助。我承担责任。</p>
            <p>规范标记为：</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI 规范 v0.1</p><p>人类与人工智能的溯源与问责</p><strong>AI 提供了帮助。我承担责任。</strong>"
  });
})(window.PlusAISpecTranslations);
