/*!
 * +AI Specification — English (en)
 * Status: reviewed human translation (migrated from website-v6.html)
 * English remains the normative text. See TRANSLATIONS.md.
 */
(function (registry) {
  registry.register("en", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = AI helped. I take responsibility.",
      "description": "+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.",
      "skip": "Skip to the explanation",
      "language": "Language",
      "languageAria": "Choose language",
      "fontLabel": "Font",
      "fontCurrent": "Current Font",
      "fontAria": "Choose a font",
      "theme": "Dark mode",
      "themeDark": "Dark mode",
      "themeLight": "Light mode",
      "themeDarkAria": "Use dark mode",
      "themeLightAria": "Use light mode",
      "highlight": "Highlight",
      "highlightAria": "Choose a random highlight colour",
      "followedLink": "+AI Post Nominal Description",
      "heroTitle": "AI helped. I take responsibility.",
      "heroLead": "The person or organisation whose name carried this link is making a simple declaration: <strong>artificial intelligence materially assisted the work, and they accept responsibility for releasing it.</strong>",
      "readSpec": "Read the specification",
      "meansHeading": "What the mark says",
      "meaningOneTitle": "AI participated",
      "meaningOneBody": "AI materially helped create, analyse, transform or present the work.",
      "meaningTwoTitle": "A human chose",
      "meaningTwoBody": "A person or organisation knowingly adopted and released the result.",
      "meaningThreeTitle": "Responsibility stays human",
      "meaningThreeBody": "The named party does not transfer accountability to an AI system or provider.",
      "plainTitle": "Transparent assistance. Visible accountability.",
      "plainLead": "The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.",
      "plainBody": "It does not say how much of the work came from AI. It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.",
      "plainQuote": "Three characters make both participation and responsibility visible.",
      "fullDocument": "Full document",
      "specification": "Specification",
      "statusLabel": "Status",
      "statusValue": "Draft",
      "versionLabel": "Version",
      "markLabel": "Canonical mark",
      "contents": "Contents",
      "footerLine": "Open notation. Human responsibility.",
      "versionFooter": "Specification v0.1",
      "translationNote": "",
      "colourChanged": "Highlight colour changed to {colour}.",
      "fontChanged": "Font changed to {font}."
    },
    untranslatedNotice: {
      "badge": "Not translated",
      "headline": "The specification below is shown in English.",
      "detail": "This language has not been translated yet. The English text is the normative version in all cases."
    },
    endonym: "English",
    sections: [
      {
        number: "1",
        title: "Purpose",
        body: `
            <p>The <code>+AI</code> notation provides a compact method for identifying an artifact as materially assisted by artificial intelligence while identifying a human or organisation that accepts responsibility for the resulting artifact.</p>
            <p>The canonical expression is:</p>
            <p class="canonical"><code>&lt;Responsible Party&gt; +AI</code></p>
            <p>Example:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>The fundamental meaning is:</p>
            <p class="canonical">AI helped. I take responsibility.</p>`
      },
      {
        number: "2",
        title: "Design principle",
        body: `
            <p><code>+AI</code> does not attempt to determine whether an artifact is “human-created” or “AI-created.”</p>
            <p>Modern artifacts may pass repeatedly between human and artificial intelligence systems during their creation.</p>
            <p>Instead, <code>+AI</code> communicates two facts:</p>
            <ol>
              <li>artificial intelligence materially assisted the work; and</li>
              <li>an identifiable human or organisation accepts responsibility for the resulting artifact.</li>
            </ol>
            <p>The standard therefore concerns <strong>AI participation and human accountability</strong>, rather than exclusive authorship.</p>`
      },
      {
        number: "3",
        title: "Normative terminology",
        body: `
            <p>The terms <strong>MUST</strong>, <strong>MUST NOT</strong>, <strong>SHOULD</strong>, <strong>SHOULD NOT</strong>, and <strong>MAY</strong> are normative requirements within this specification.</p>
            <p><strong>MUST</strong> indicates an absolute requirement.</p>
            <p><strong>MUST NOT</strong> indicates an absolute prohibition.</p>
            <p><strong>SHOULD</strong> indicates a strong recommendation that may be departed from where a legitimate reason exists.</p>
            <p><strong>SHOULD NOT</strong> indicates a practice normally avoided but potentially justified in particular circumstances.</p>
            <p><strong>MAY</strong> indicates an optional practice.</p>`
      },
      {
        number: "4",
        title: "Canonical notation",
        body: `
            <p>The canonical mark is:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>The canonical human-readable form is:</p>
            <p><strong><code>&lt;Responsible Party&gt; +AI</code></strong></p>
            <p>Examples:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>The mark is case-sensitive.</p>
            <p>The canonical form MUST use:</p>
            <ul>
              <li>a plus sign <code>+</code>;</li>
              <li>followed immediately by uppercase Latin characters <code>AI</code>;</li>
              <li>with no internal whitespace.</li>
            </ul>
            <p>Therefore <code>+AI</code> is canonical.</p>
            <p>The following are not canonical equivalents:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Variants MAY later be defined by extensions to this specification, but they MUST NOT be assumed to carry the canonical <code>+AI</code> meaning unless explicitly defined.</p>`
      },
      {
        number: "5",
        title: "Meaning of the mark",
        body: `
            <p>A responsible party using <code>+AI</code> declares that:</p>
            <h4>5.1 AI participation</h4>
            <p>Artificial intelligence materially assisted in creating, analysing, transforming, generating, evaluating, structuring or presenting the associated artifact.</p>
            <h4>5.2 Knowledge</h4>
            <p>The responsible party knows or reasonably believes that material AI assistance occurred.</p>
            <h4>5.3 Authority</h4>
            <p>The responsible party authorised, initiated, directed or knowingly adopted the relevant use of artificial intelligence.</p>
            <h4>5.4 Human or organisational control</h4>
            <p>The responsible party retained authority over whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.</p>
            <h4>5.5 Adoption</h4>
            <p>The responsible party accepts the artifact in the form in which it is being presented.</p>
            <h4>5.6 Responsibility</h4>
            <p>The responsible party accepts responsibility for the decision to release, use or represent the artifact.</p>
            <p>These elements collectively constitute the <code>+AI</code> declaration.</p>`
      },
      {
        number: "6",
        title: "Material assistance",
        body: `
            <p>The mark SHOULD be used when AI participation materially affected the resulting artifact.</p>
            <p>Material assistance may include AI contribution to:</p>
            <ul>
              <li>writing;</li><li>reasoning;</li><li>analysis;</li><li>recommendations;</li>
              <li>research synthesis;</li><li>software code;</li><li>data interpretation;</li>
              <li>design;</li><li>images;</li><li>audio;</li><li>video;</li>
              <li>translation where substantive interpretation occurs;</li><li>planning;</li>
              <li>decision support;</li><li>mathematical or technical work;</li>
              <li>editing that materially changes meaning;</li>
              <li>or other substantive intellectual or creative work.</li>
            </ul>
            <p>Incidental or purely mechanical AI functionality does not necessarily require <code>+AI</code>.</p>
            <p>Examples may include automatic spelling correction, basic autocomplete, routine formatting or other features that do not materially affect the substance of an artifact.</p>
            <p>The determining question is not the percentage of content produced by AI.</p>
            <p>The determining question is:</p>
            <blockquote><strong>Did AI materially influence the artifact being presented?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Responsibility",
        body: `
            <p>Responsibility is the defining property of <code>+AI</code>.</p>
            <p>By using the mark, the responsible party does not transfer responsibility to an artificial intelligence system, model, provider, agent or tool.</p>
            <p>A statement equivalent to:</p>
            <blockquote>“The AI generated it, therefore I am not responsible for it.”</blockquote>
            <p>is incompatible with the intended meaning of <code>+AI</code>.</p>
            <p>The responsible party MAY rely heavily on AI assistance.</p>
            <p>The responsible party MAY publish content substantially generated by AI.</p>
            <p>The responsible party MAY accept suggestions that they could not independently have produced.</p>
            <p>None of these conditions prevents use of <code>+AI</code>, provided that the responsible party knowingly adopts the resulting artifact and accepts responsibility for releasing it.</p>`
      },
      {
        number: "8",
        title: "What +AI does not mean",
        body: `
            <p>Unless an additional declaration explicitly states otherwise, <code>+AI</code> does NOT assert that:</p>
            <ul>
              <li>the artifact is error-free;</li>
              <li>every factual statement has been independently verified;</li>
              <li>every citation has been independently checked;</li>
              <li>the artifact satisfies any particular professional standard;</li>
              <li>the artifact is legally correct;</li>
              <li>the artifact is medically correct;</li>
              <li>the artifact is safe for any particular purpose;</li>
              <li>the artifact contains no hallucinations;</li>
              <li>the responsible party personally wrote every component;</li>
              <li>AI generated the majority of the artifact;</li>
              <li>AI generated only a minority of the artifact;</li>
              <li>the artifact is original;</li>
              <li>no third-party intellectual property is present;</li>
              <li>confidential information was not supplied to an AI system;</li>
              <li>a particular AI provider, model or system was used;</li>
              <li>the responsible party agrees with every intermediate AI output;</li>
              <li>or the responsible party can reproduce or explain the internal reasoning of the AI system.</li>
            </ul>
            <p><code>+AI</code> is an <strong>accountability declaration</strong>, not a warranty of correctness.</p>`
      },
      {
        number: "9",
        title: "Human review",
        body: `
            <p>Version 0.1 does not require that every component of an artifact be manually reviewed word-by-word or element-by-element.</p>
            <p>The responsible party MUST, however, knowingly accept the artifact being released.</p>
            <p>Blind or automatic forwarding of unreviewed AI output SHOULD NOT be represented using <code>+AI</code> where no meaningful human act of adoption has occurred.</p>
            <p>Future versions of this specification MAY define stronger assurance marks representing complete review or independent verification.</p>`
      },
      {
        number: "10",
        title: "Individuals",
        body: `
            <p>An individual MAY apply the notation after their name.</p>
            <p>Example:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>This means:</p>
            <blockquote>Artificial intelligence materially assisted the associated work, and Eric Mourant accepts responsibility for releasing that work.</blockquote>
            <p>The mark relates to the associated artifact or communication.</p>
            <p>It does not necessarily mean that every activity undertaken by the individual uses artificial intelligence.</p>`
      },
      {
        number: "11",
        title: "Organisations",
        body: `
            <p>An organisation MAY use <code>+AI</code>.</p>
            <p data-company-example>Example:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>This means that the organisation assumes responsibility for the associated AI-assisted artifact according to its applicable governance and authority structures.</p>
            <p>Where useful, both an organisation and responsible individual MAY be identified.</p>
            <p data-company-example>Example:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Email and messaging",
        body: `
            <p>In personal communication, the preferred presentation is:</p>
            <p><strong>Kindest regards,<br>Eric Mourant +AI</strong></p>
            <p>The mark MAY be hyperlinked to a canonical explanation of its meaning.</p>
            <p>A hyperlink MUST NOT alter the visible notation.</p>
            <p>Plain text MUST remain sufficient to express the declaration.</p>`
      },
      {
        number: "13",
        title: "Documents",
        body: `
            <p>The notation MAY appear in an author, preparer, reviewer or responsible-party field.</p>
            <p>Examples:</p>
            <p><strong>Author: Eric Mourant +AI</strong></p>
            <p><strong>Prepared by: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Issued by: JAPER Technology +AI</strong></p>
            <p>Placement SHOULD make clear which person or organisation is assuming responsibility.</p>`
      },
      {
        number: "14",
        title: "Software",
        body: `
            <p>The notation MAY be used in software repositories, commits, source-code headers, documentation, release notes and generated artifacts.</p>
            <p>Example:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>A project MAY additionally declare:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Such a project-level statement SHOULD identify the responsible person or organisation where practical.</p>`
      },
      {
        number: "15",
        title: "Creative artifacts",
        body: `
            <p>The notation MAY accompany images, audio, video, designs, illustrations, presentations and other creative works.</p>
            <p>Example:</p>
            <p><strong>Created by Eric Mourant +AI</strong></p>
            <p>The mark does not itself specify which elements were generated or modified by AI.</p>
            <p>More detailed provenance metadata MAY be associated separately.</p>`
      },
      {
        number: "16",
        title: "Research and technical work",
        body: `
            <p>The mark MAY be used in research, scientific, engineering or technical work where permitted by applicable institutional, publication or professional requirements.</p>
            <p><code>+AI</code> MUST NOT be represented as replacing any more specific disclosure required by a publisher, regulator, employer, professional body or law.</p>
            <p>The notation MAY supplement such disclosure.</p>`
      },
      {
        number: "17",
        title: "Machine-readable representation",
        body: `
            <p>Systems MAY represent the declaration using structured metadata.</p>
            <p>A minimal representation is:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>A richer representation is:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Machine-readable forms SHOULD preserve the same semantic meaning as the visible notation.</p>`
      },
      {
        number: "18",
        title: "Persistence",
        body: `
            <p>The <code>+AI</code> notation SHOULD survive reasonable transformations of an artifact where attribution is preserved.</p>
            <p>Examples include conversion between document formats, archival, printing, export, republication and transmission.</p>
            <p>Where metadata is stripped, the visible plain-text mark SHOULD remain sufficient to communicate the declaration.</p>`
      },
      {
        number: "19",
        title: "Open use",
        body: `
            <p>The <code>+AI</code> notation is intended for unrestricted public use.</p>
            <p>Use of the notation SHOULD NOT require:</p>
            <ul>
              <li>registration;</li><li>membership;</li><li>payment;</li><li>certification;</li>
              <li>approval;</li><li>or use of any particular AI product or provider.</li>
            </ul>
            <p>The usefulness of the notation depends upon its ability to function as a universal convention.</p>`
      },
      {
        number: "20",
        title: "Neutrality",
        body: `
            <p><code>+AI</code> does not express approval or disapproval of artificial intelligence.</p>
            <p>It does not indicate whether use of AI was necessary, desirable or superior to unaided human work.</p>
            <p>It records only material AI participation and human or organisational accountability.</p>`
      },
      {
        number: "21",
        title: "Misrepresentation",
        body: `
            <p>A person or organisation SHOULD NOT use <code>+AI</code> where:</p>
            <ul>
              <li>there is no identifiable responsible party;</li>
              <li>the named party has not adopted the artifact;</li>
              <li>the artifact is being issued automatically without meaningful human authority;</li>
              <li>or the notation is being used to create a false impression of human accountability.</li>
            </ul>
            <p>Autonomous AI output without meaningful human adoption is outside the canonical scope of <code>+AI</code>.</p>
            <p>Future specifications MAY define notation for autonomous AI output.</p>`
      },
      {
        number: "22",
        title: "Relationship to authorship",
        body: `
            <p><code>+AI</code> deliberately does not assign a percentage of authorship.</p>
            <p>An artifact MAY contain predominantly human-originated material and still qualify.</p>
            <p>An artifact MAY contain predominantly AI-originated material and still qualify.</p>
            <p>The relevant test is whether:</p>
            <p><strong>AI materially assisted, and the named party takes responsibility for the result.</strong></p>`
      },
      {
        number: "23",
        title: "Canonical public explanation",
        body: `
            <p>Where a short explanation is required, the preferred language is:</p>
            <p class="canonical">AI helped. I take responsibility.</p>
            <p>Where a longer explanation is required:</p>
            <blockquote><strong><code>+AI</code> means artificial intelligence materially assisted this work and the named person or organisation accepts responsibility for the resulting artifact.</strong></blockquote>`
      },
      {
        number: "24",
        title: "The +AI test",
        body: `
            <p>Before applying the mark, a person should be able to answer <strong>yes</strong> to both questions:</p>
            <p><strong>Did AI materially help produce this?</strong></p>
            <p><strong>Am I willing to take responsibility for releasing it?</strong></p>
            <p>If both answers are yes:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Future extensions",
        body: `
            <p>Future versions MAY define additional notation addressing:</p>
            <ul>
              <li>minor AI assistance;</li><li>AI-primary generation;</li><li>complete human review;</li>
              <li>independent verification;</li><li>autonomous agent activity;</li>
              <li>cryptographic provenance;</li><li>AI system identification;</li>
              <li>model identification;</li><li>or chains of human and machine contribution.</li>
            </ul>
            <p>Such extensions SHOULD preserve <code>+AI</code> as the simple canonical mark for:</p>
            <p class="canonical">AI-assisted work with identifiable human responsibility.</p>`
      },
      {
        number: "26",
        title: "Canonical declaration",
        body: `
            <p>A person or organisation applying <code>+AI</code> makes the following declaration:</p>
            <blockquote><strong>Artificial intelligence materially assisted this work. I have chosen to accept, publish, transmit, deploy or otherwise release the resulting work, and I take responsibility for that decision and for the work as presented.</strong></blockquote>
            <p>The public shorthand is:</p>
            <p class="canonical">AI helped. I take responsibility.</p>
            <p>The canonical mark is:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>+AI Specification v0.1</p><p>Human-AI Provenance and Accountability</p><strong>AI helped. I take responsibility.</strong>"
  });
})(window.PlusAISpecTranslations);
