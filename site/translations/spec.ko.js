/*!
 * +AI Specification — Korean (ko)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → ~해야 한다
 *   MUST NOT   → ~해서는 안 된다
 *   SHOULD     → ~하는 것이 바람직하다
 *   SHOULD NOT → ~하지 않는 것이 바람직하다
 *   MAY        → ~할 수 있다
 */
(function (registry) {
  registry.register("ko", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI가 도왔습니다. 책임은 제가 집니다.",
      "description": "+AI는 인공지능이 작업에 실질적으로 기여했으며, 명시된 개인 또는 조직이 그 결과에 대한 책임을 받아들인다는 의미입니다.",
      "skip": "설명으로 이동",
      "language": "언어",
      "languageAria": "언어 선택",
      "theme": "다크 모드",
      "themeDark": "다크 모드",
      "themeLight": "라이트 모드",
      "themeDarkAria": "다크 모드 사용",
      "themeLightAria": "라이트 모드 사용",
      "highlight": "강조 색상",
      "highlightAria": "무작위 강조 색상 선택",
      "followedLink": "+AI 후치 표기 설명",
      "heroTitle": "AI가 도왔습니다. 책임은 제가 집니다.",
      "heroLead": "이 링크가 이름에 표시된 개인 또는 조직은 다음과 같은 간단한 선언을 합니다. <strong>인공지능이 작업에 실질적으로 기여했으며, 해당 당사자가 그 결과를 공개한 책임을 받아들입니다.</strong>",
      "readSpec": "명세 읽기",
      "meansHeading": "이 표식이 의미하는 것",
      "meaningOneTitle": "AI가 참여했습니다",
      "meaningOneBody": "AI가 작업의 작성, 분석, 변환 또는 표현에 실질적으로 도움을 주었습니다.",
      "meaningTwoTitle": "사람이 선택했습니다",
      "meaningTwoBody": "개인 또는 조직이 결과를 인지한 상태에서 채택하고 공개했습니다.",
      "meaningThreeTitle": "책임은 사람에게 남습니다",
      "meaningThreeBody": "명시된 당사자는 AI 시스템이나 제공자에게 설명책임을 전가하지 않습니다.",
      "plainTitle": "투명한 지원. 명확한 설명책임.",
      "plainLead": "이 표식은 책임 선언이며, AI가 저자라는 주장도 아니고 작업의 정확성을 보장하는 것도 아닙니다.",
      "plainBody": "작업 중 어느 정도가 AI에서 비롯되었는지를 나타내지 않습니다. AI가 결과에 실질적인 영향을 미쳤으며, 식별 가능한 개인 또는 조직이 AI를 사용하기로 한 결정의 배후에 있다는 뜻입니다.",
      "plainQuote": "세 글자가 참여와 책임을 모두 드러냅니다.",
      "fullDocument": "전체 문서",
      "specification": "명세",
      "statusLabel": "상태",
      "statusValue": "초안",
      "versionLabel": "버전",
      "markLabel": "정규 표식",
      "contents": "목차",
      "footerLine": "열린 표기. 인간의 책임.",
      "versionFooter": "명세 v0.1",
      "translationNote": "이 번역은 참고용입니다. 내용에 차이가 있는 경우 영어 원문을 규범 문서로 합니다.",
      "colourChanged": "강조 색상이 {colour}(으)로 변경되었습니다."
    },
    untranslatedNotice: {
      "badge": "미번역",
      "headline": "아래 명세는 영어로 표시됩니다.",
      "detail": "이 언어는 아직 번역되지 않았습니다. 모든 경우에 영어 원문이 규범 버전입니다."
    },
    endonym: "한국어",
    sections: [
      {
        number: "1",
        title: "목적",
        body: `
            <p><code>+AI</code> 표기는 산출물이 인공지능의 실질적인 지원을 받았음을 나타내면서, 동시에 그 산출물에 대한 책임을 인수하는 개인 또는 조직을 특정하기 위한 간결한 방법을 제공합니다.</p>
            <p>정규 표현은 다음과 같습니다.</p>
            <p class="canonical"><code>&lt;책임 주체&gt; +AI</code></p>
            <p>예:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>근본적인 의미는 다음과 같습니다.</p>
            <p class="canonical">AI가 도왔습니다. 책임은 제가 집니다.</p>`
      },
      {
        number: "2",
        title: "설계 원칙",
        body: `
            <p><code>+AI</code>는 산출물이 “사람이 만든 것”인지 “AI가 만든 것”인지를 판정하려 하지 않습니다.</p>
            <p>현대의 산출물은 생성 과정에서 사람과 인공지능 시스템 사이를 여러 차례 오갈 수 있습니다.</p>
            <p>그 대신 <code>+AI</code>는 다음 두 가지 사실을 전달합니다.</p>
            <ol>
              <li>인공지능이 그 작업을 실질적으로 지원하였다는 사실. 그리고</li>
              <li>식별 가능한 개인 또는 조직이 그 산출물에 대한 책임을 인수한다는 사실.</li>
            </ol>
            <p>따라서 이 표준이 다루는 것은 배타적 저작자성이 아니라 <strong>AI의 관여와 사람의 설명책임</strong>입니다.</p>`
      },
      {
        number: "3",
        title: "규범 용어",
        body: `
            <p><strong>~해야 한다 (MUST)</strong>, <strong>~해서는 안 된다 (MUST NOT)</strong>, <strong>~하는 것이 바람직하다 (SHOULD)</strong>, <strong>~하지 않는 것이 바람직하다 (SHOULD NOT)</strong>, <strong>~할 수 있다 (MAY)</strong>라는 용어는 이 명세서에서 규범적 요구사항을 나타냅니다.</p>
            <p><strong>~해야 한다</strong>는 절대적 요구사항을 나타냅니다.</p>
            <p><strong>~해서는 안 된다</strong>는 절대적 금지를 나타냅니다.</p>
            <p><strong>~하는 것이 바람직하다</strong>는 정당한 이유가 있는 경우에는 따르지 않을 수도 있는 강한 권고를 나타냅니다.</p>
            <p><strong>~하지 않는 것이 바람직하다</strong>는 통상적으로 회피되지만 특정한 상황에서는 정당화될 수 있는 행위를 나타냅니다.</p>
            <p><strong>~할 수 있다</strong>는 선택적 행위를 나타냅니다.</p>`
      },
      {
        number: "4",
        title: "정규 표기",
        body: `
            <p>정규 표장은 다음과 같습니다.</p>
            <p class="canonical"><code>+AI</code></p>
            <p>사람이 읽을 수 있는 정규 형식은 다음과 같습니다.</p>
            <p><strong><code>&lt;책임 주체&gt; +AI</code></strong></p>
            <p>예:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>이 표장은 대문자와 소문자를 구별합니다.</p>
            <p>정규 형식은 다음을 사용해야 한다.</p>
            <ul>
              <li>더하기 기호 <code>+</code>.</li>
              <li>그 바로 뒤에 이어지는 대문자 라틴 문자 <code>AI</code>.</li>
              <li>내부에 공백을 포함하지 않을 것.</li>
            </ul>
            <p>따라서 <code>+AI</code>가 정규 형식입니다.</p>
            <p>다음은 정규 형식과 동등하지 않습니다.</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>이 명세서의 확장을 통하여 추후 변형을 정의할 수 있다. 다만 명시적으로 정의되지 않는 한, 그러한 변형이 <code>+AI</code>의 정규 의미를 갖는다고 간주해서는 안 된다.</p>`
      },
      {
        number: "5",
        title: "표장의 의미",
        body: `
            <p><code>+AI</code>를 사용하는 책임 주체는 다음 사항을 선언합니다.</p>
            <h4>5.1 AI의 관여</h4>
            <p>인공지능이 관련 산출물의 작성, 분석, 변환, 생성, 평가, 구조화 또는 제시를 실질적으로 지원하였습니다.</p>
            <h4>5.2 인지</h4>
            <p>책임 주체는 AI의 실질적인 지원이 있었음을 알고 있거나 합리적으로 그렇다고 믿고 있습니다.</p>
            <h4>5.3 권한</h4>
            <p>책임 주체는 해당 인공지능의 이용을 승인, 개시, 지시하였거나 이를 인지한 상태에서 채택하였습니다.</p>
            <h4>5.4 사람 또는 조직의 통제</h4>
            <p>책임 주체는 그 산출물을 공개, 전송, 배포, 제출, 제시 또는 그 밖의 방법으로 공표할 것인지에 대한 권한을 보유하고 있었습니다.</p>
            <h4>5.5 채택</h4>
            <p>책임 주체는 제시되고 있는 형태 그대로의 산출물을 받아들입니다.</p>
            <h4>5.6 책임</h4>
            <p>책임 주체는 그 산출물을 공표, 사용 또는 표시하기로 한 결정에 대한 책임을 인수합니다.</p>
            <p>이러한 요소들이 총체적으로 <code>+AI</code> 선언을 구성합니다.</p>`
      },
      {
        number: "6",
        title: "실질적 지원",
        body: `
            <p>AI의 관여가 결과 산출물에 실질적인 영향을 미친 경우에 이 표장을 사용하는 것이 바람직하다.</p>
            <p>실질적 지원에는 다음 사항에 대한 AI의 기여가 포함될 수 있습니다.</p>
            <ul>
              <li>집필.</li><li>추론.</li><li>분석.</li><li>권고.</li>
              <li>조사 결과의 종합.</li><li>소프트웨어 코드.</li><li>데이터 해석.</li>
              <li>설계.</li><li>이미지.</li><li>음성.</li><li>영상.</li>
              <li>실질적인 해석이 수반되는 번역.</li><li>기획.</li>
              <li>의사결정 지원.</li><li>수학적 또는 기술적 작업.</li>
              <li>의미를 실질적으로 변경하는 편집.</li>
              <li>그 밖의 실질적인 지적 또는 창작 작업.</li>
            </ul>
            <p>부수적이거나 순수하게 기계적인 AI 기능에는 반드시 <code>+AI</code>가 요구되지는 않습니다.</p>
            <p>예로는 자동 철자 교정, 기본적인 자동 완성, 정형적인 서식 지정, 그 밖에 산출물의 실질적 내용에 영향을 미치지 않는 기능을 들 수 있습니다.</p>
            <p>판단의 기준은 AI가 생성한 내용의 비율이 아닙니다.</p>
            <p>판단의 기준이 되는 질문은 다음과 같습니다.</p>
            <blockquote><strong>AI가 제시되는 산출물에 실질적인 영향을 미쳤는가?</strong></blockquote>`
      },
      {
        number: "7",
        title: "책임",
        body: `
            <p>책임은 <code>+AI</code>를 정의하는 본질적 속성입니다.</p>
            <p>책임 주체는 이 표장을 사용함으로써 인공지능 시스템, 모델, 제공자, 에이전트 또는 도구에 책임을 이전하지 않습니다.</p>
            <p>다음과 같은 취지의 진술은</p>
            <blockquote>“AI가 생성한 것이므로 나에게는 책임이 없다.”</blockquote>
            <p><code>+AI</code>가 의도하는 의미와 양립하지 않습니다.</p>
            <p>책임 주체는 AI의 지원에 크게 의존할 수 있다.</p>
            <p>책임 주체는 상당 부분이 AI에 의하여 생성된 내용을 공개할 수 있다.</p>
            <p>책임 주체는 스스로는 만들어낼 수 없었던 제안을 받아들일 수 있다.</p>
            <p>책임 주체가 그 결과 산출물을 인지한 상태에서 채택하고 이를 공표하는 데 대한 책임을 인수하는 한, 이러한 조건들은 어느 것도 <code>+AI</code>의 사용을 방해하지 않습니다.</p>`
      },
      {
        number: "8",
        title: "+AI가 의미하지 않는 것",
        body: `
            <p>추가적인 선언에서 명시적으로 달리 정하지 않는 한, <code>+AI</code>는 다음 사항을 주장하지 않습니다.</p>
            <ul>
              <li>산출물에 오류가 없다는 것.</li>
              <li>모든 사실 진술이 독립적으로 검증되었다는 것.</li>
              <li>모든 인용이 독립적으로 확인되었다는 것.</li>
              <li>산출물이 특정한 전문 기준을 충족한다는 것.</li>
              <li>산출물이 법적으로 정확하다는 것.</li>
              <li>산출물이 의학적으로 정확하다는 것.</li>
              <li>산출물이 특정한 목적에 대하여 안전하다는 것.</li>
              <li>산출물에 환각(할루시네이션)이 포함되어 있지 않다는 것.</li>
              <li>책임 주체가 모든 구성 요소를 직접 작성하였다는 것.</li>
              <li>AI가 산출물의 대부분을 생성하였다는 것.</li>
              <li>AI가 산출물의 일부만을 생성하였다는 것.</li>
              <li>산출물이 독창적이라는 것.</li>
              <li>제3자의 지식재산이 포함되어 있지 않다는 것.</li>
              <li>기밀정보가 AI 시스템에 제공되지 않았다는 것.</li>
              <li>특정한 AI 제공자, 모델 또는 시스템이 사용되었다는 것.</li>
              <li>책임 주체가 AI의 모든 중간 출력에 동의한다는 것.</li>
              <li>책임 주체가 AI 시스템의 내부 추론을 재현하거나 설명할 수 있다는 것.</li>
            </ul>
            <p><code>+AI</code>는 <strong>설명책임의 선언</strong>이며, 정확성의 보증이 아닙니다.</p>`
      },
      {
        number: "9",
        title: "사람의 검토",
        body: `
            <p>버전 0.1은 산출물의 모든 구성 요소를 단어 단위 또는 요소 단위로 사람이 직접 검토할 것을 요구하지 않습니다.</p>
            <p>그러나 책임 주체는 공표되는 산출물을 인지한 상태에서 받아들여야 한다.</p>
            <p>사람의 의미 있는 채택 행위가 없는 경우, 검토되지 않은 AI 출력을 그대로 또는 자동으로 전달하는 것을 <code>+AI</code>로 표시하지 않는 것이 바람직하다.</p>
            <p>이 명세서의 향후 버전에서는 완전한 검토 또는 독립적 검증을 나타내는 더 강한 보증 표장을 정의할 수 있다.</p>`
      },
      {
        number: "10",
        title: "개인",
        body: `
            <p>개인은 자신의 이름 뒤에 이 표기를 붙일 수 있다.</p>
            <p>예:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>이는 다음을 의미합니다.</p>
            <blockquote>인공지능이 관련 작업을 실질적으로 지원하였고, Eric Mourant가 그 작업을 공표하는 데 대한 책임을 인수합니다.</blockquote>
            <p>이 표장은 관련된 산출물 또는 의사소통에 관한 것입니다.</p>
            <p>해당 개인이 수행하는 모든 활동에 인공지능을 사용한다는 뜻은 아닙니다.</p>`
      },
      {
        number: "11",
        title: "조직",
        body: `
            <p>조직은 <code>+AI</code>를 사용할 수 있다.</p>
            <p data-company-example>예:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>이는 그 조직이 적용되는 지배구조 및 권한 체계에 따라 관련 AI 지원 산출물에 대한 책임을 부담한다는 것을 의미합니다.</p>
            <p>유용한 경우에는 조직과 책임을 부담하는 개인을 함께 특정할 수 있다.</p>
            <p data-company-example>예:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "전자우편 및 메시지",
        body: `
            <p>개인적인 의사소통에서 권장되는 제시 형식은 다음과 같습니다.</p>
            <p><strong>안부를 전하며,<br>Eric Mourant +AI</strong></p>
            <p>이 표장에는 그 의미를 설명하는 정규 문서로의 하이퍼링크를 설정할 수 있다.</p>
            <p>하이퍼링크가 가시적인 표기를 변경해서는 안 된다.</p>
            <p>일반 텍스트만으로도 그 선언을 표현하기에 충분해야 한다.</p>`
      },
      {
        number: "13",
        title: "문서",
        body: `
            <p>이 표기는 저자, 작성자, 검토자 또는 책임 주체 항목에 기재할 수 있다.</p>
            <p>예:</p>
            <p><strong>저자: Eric Mourant +AI</strong></p>
            <p><strong>작성자: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>발행자: JAPER Technology +AI</strong></p>
            <p>배치를 통하여 어느 개인 또는 조직이 책임을 부담하는지를 명확히 하는 것이 바람직하다.</p>`
      },
      {
        number: "14",
        title: "소프트웨어",
        body: `
            <p>이 표기는 소프트웨어 저장소, 커밋, 소스 코드 헤더, 문서, 릴리스 노트 및 생성된 산출물에 사용할 수 있다.</p>
            <p>예:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>프로젝트는 추가로 다음과 같이 선언할 수 있다.</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>그러한 프로젝트 단위의 선언에서는 실무상 가능한 경우 책임을 부담하는 개인 또는 조직을 특정하는 것이 바람직하다.</p>`
      },
      {
        number: "15",
        title: "창작 산출물",
        body: `
            <p>이 표기는 이미지, 음성, 영상, 디자인, 일러스트레이션, 프레젠테이션 및 그 밖의 창작물에 함께 표시할 수 있다.</p>
            <p>예:</p>
            <p><strong>작성: Eric Mourant +AI</strong></p>
            <p>이 표장 자체는 어떤 요소가 AI에 의하여 생성되거나 수정되었는지를 특정하지 않습니다.</p>
            <p>더 상세한 출처 메타데이터를 별도로 연결할 수 있다.</p>`
      },
      {
        number: "16",
        title: "연구 및 기술 작업",
        body: `
            <p>이 표장은 적용되는 기관, 출판 또는 전문직 요구사항이 허용하는 범위에서 연구, 과학, 공학 또는 기술 작업에 사용할 수 있다.</p>
            <p><code>+AI</code>가 출판사, 규제기관, 고용주, 전문직 단체 또는 법률이 요구하는 더 구체적인 공개를 대체하는 것으로 표시해서는 안 된다.</p>
            <p>이 표기는 그러한 공개를 보완하는 것으로 사용할 수 있다.</p>`
      },
      {
        number: "17",
        title: "기계 판독 가능 표현",
        body: `
            <p>시스템은 구조화된 메타데이터를 사용하여 그 선언을 표현할 수 있다.</p>
            <p>최소한의 표현은 다음과 같습니다.</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>더 상세한 표현은 다음과 같습니다.</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>기계 판독 가능 형식은 가시적인 표기와 동일한 의미를 유지하는 것이 바람직하다.</p>`
      },
      {
        number: "18",
        title: "지속성",
        body: `
            <p>출처 표시가 유지되는 경우, <code>+AI</code> 표기는 산출물의 합리적인 변환 후에도 존속하는 것이 바람직하다.</p>
            <p>예로는 문서 형식 간의 변환, 보존, 인쇄, 내보내기, 재공개 및 전송이 있습니다.</p>
            <p>메타데이터가 제거된 경우에도 가시적인 일반 텍스트 표장만으로 그 선언을 전달하기에 충분한 것이 바람직하다.</p>`
      },
      {
        number: "19",
        title: "자유로운 사용",
        body: `
            <p><code>+AI</code> 표기는 누구나 제한 없이 공개적으로 사용할 수 있도록 의도된 것입니다.</p>
            <p>이 표기의 사용에 다음 사항을 요구하지 않는 것이 바람직하다.</p>
            <ul>
              <li>등록.</li><li>회원 자격.</li><li>대가의 지급.</li><li>인증.</li>
              <li>승인.</li><li>특정한 AI 제품 또는 제공자의 사용.</li>
            </ul>
            <p>이 표기의 유용성은 보편적인 관행으로 기능할 수 있는지에 달려 있습니다.</p>`
      },
      {
        number: "20",
        title: "중립성",
        body: `
            <p><code>+AI</code>는 인공지능에 대한 찬성이나 반대를 표명하지 않습니다.</p>
            <p>또한 AI의 사용이 필요하였는지, 바람직하였는지, 또는 지원 없이 수행한 사람의 작업보다 우수하였는지를 나타내지 않습니다.</p>
            <p>이는 AI의 실질적인 관여와 사람 또는 조직의 설명책임만을 기록합니다.</p>`
      },
      {
        number: "21",
        title: "부실 표시",
        body: `
            <p>개인 또는 조직은 다음의 경우에 <code>+AI</code>를 사용하지 않는 것이 바람직하다.</p>
            <ul>
              <li>식별 가능한 책임 주체가 존재하지 않는 경우.</li>
              <li>기명된 주체가 그 산출물을 채택하지 않은 경우.</li>
              <li>사람의 의미 있는 권한 없이 산출물이 자동으로 발행되는 경우.</li>
              <li>사람이 설명책임을 부담한다는 허위 인상을 만들기 위하여 그 표기가 사용되는 경우.</li>
            </ul>
            <p>사람의 의미 있는 채택이 없는 자율적 AI 출력은 <code>+AI</code>의 정규 적용 범위 밖에 있습니다.</p>
            <p>향후의 명세서에서는 자율적 AI 출력에 대한 표기를 정의할 수 있다.</p>`
      },
      {
        number: "22",
        title: "저작자성과의 관계",
        body: `
            <p><code>+AI</code>는 의도적으로 저작자성의 비율을 정하지 않습니다.</p>
            <p>산출물이 주로 사람에게서 비롯된 내용으로 구성되어 있어도 요건을 충족할 수 있다.</p>
            <p>산출물이 주로 AI에서 비롯된 내용으로 구성되어 있어도 요건을 충족할 수 있다.</p>
            <p>관련된 판단 기준은 다음 사항의 충족 여부입니다.</p>
            <p><strong>AI가 실질적으로 지원하였고, 기명된 주체가 그 결과에 대한 책임을 진다.</strong></p>`
      },
      {
        number: "23",
        title: "정규 공개 설명",
        body: `
            <p>짧은 설명이 필요한 경우 권장되는 표현은 다음과 같습니다.</p>
            <p class="canonical">AI가 도왔습니다. 책임은 제가 집니다.</p>
            <p>더 긴 설명이 필요한 경우는 다음과 같습니다.</p>
            <blockquote><strong><code>+AI</code>는 인공지능이 이 작업을 실질적으로 지원하였고, 기명된 개인 또는 조직이 그 결과 산출물에 대한 책임을 인수한다는 것을 의미합니다.</strong></blockquote>`
      },
      {
        number: "24",
        title: "+AI 판정 기준",
        body: `
            <p>이 표장을 붙이기 전에, 다음 두 질문에 모두 <strong>예</strong>라고 답할 수 있어야 합니다.</p>
            <p><strong>AI가 이것을 만드는 데 실질적으로 도움을 주었는가?</strong></p>
            <p><strong>나는 이것을 공표하는 데 대한 책임을 질 의사가 있는가?</strong></p>
            <p>두 답이 모두 예라면 다음과 같습니다.</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "향후 확장",
        body: `
            <p>향후 버전에서는 다음 사항을 다루는 추가 표기를 정의할 수 있다.</p>
            <ul>
              <li>경미한 AI 지원.</li><li>AI 주도의 생성.</li><li>사람에 의한 완전한 검토.</li>
              <li>독립적 검증.</li><li>자율 에이전트의 활동.</li>
              <li>암호학적 출처 증명.</li><li>AI 시스템의 식별.</li>
              <li>모델의 식별.</li><li>사람과 기계의 기여 연쇄.</li>
            </ul>
            <p>그러한 확장에서도 다음을 나타내는 간결한 정규 표장으로서 <code>+AI</code>를 유지하는 것이 바람직하다.</p>
            <p class="canonical">식별 가능한 사람의 책임이 수반된 AI 지원 작업.</p>`
      },
      {
        number: "26",
        title: "정규 선언",
        body: `
            <p><code>+AI</code>를 붙이는 개인 또는 조직은 다음 선언을 합니다.</p>
            <blockquote><strong>인공지능이 이 작업을 실질적으로 지원하였습니다. 나는 그 결과 산출물을 받아들이고, 공개하거나 전송하거나 배포하거나 그 밖의 방법으로 공표하기로 선택하였으며, 그 결정과 제시된 그대로의 산출물에 대한 책임을 집니다.</strong></blockquote>
            <p>일반에 통용되는 간략한 표현은 다음과 같습니다.</p>
            <p class="canonical">AI가 도왔습니다. 책임은 제가 집니다.</p>
            <p>정규 표장은 다음과 같습니다.</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI 명세서 v0.1</p><p>사람과 AI의 출처 및 설명책임</p><strong>AI가 도왔습니다. 책임은 제가 집니다.</strong>"
  });
})(window.PlusAISpecTranslations);
