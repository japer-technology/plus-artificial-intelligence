/*!
 * +AI Specification — Portuguese (pt)
 * Status: AI-generated translation, pending native-speaker review.
 * English remains the normative text. See TRANSLATIONS.md.
 *
 * Normative terms used throughout (section 3 defines them with the English
 * term in parentheses):
 *   MUST       → DEVE
 *   MUST NOT   → NÃO DEVE
 *   SHOULD     → DEVERIA
 *   SHOULD NOT → NÃO DEVERIA
 *   MAY        → PODE
 */
(function (registry) {
  registry.register("pt", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = A IA ajudou. Eu assumo a responsabilidade.",
      "description": "+AI significa que a inteligência artificial auxiliou materialmente o trabalho e que uma pessoa ou organização nomeada aceita a responsabilidade por ele.",
      "skip": "Ir para a explicação",
      "language": "Idioma",
      "languageAria": "Escolher idioma",
      "theme": "Modo escuro",
      "themeDark": "Modo escuro",
      "themeLight": "Modo claro",
      "themeDarkAria": "Usar o modo escuro",
      "themeLightAria": "Usar o modo claro",
      "highlight": "Destaque",
      "highlightAria": "Escolher uma cor de destaque aleatória",
      "followedLink": "Descrição do pós-nominal +AI",
      "heroTitle": "A IA ajudou. Eu assumo a responsabilidade.",
      "heroLead": "A pessoa ou organização cujo nome ostentava este link está a fazer uma declaração simples: <strong>a inteligência artificial auxiliou materialmente o trabalho e essa parte aceita a responsabilidade pela sua publicação.</strong>",
      "readSpec": "Ler a especificação",
      "meansHeading": "O que a marca declara",
      "meaningOneTitle": "A IA participou",
      "meaningOneBody": "A IA ajudou de forma material a criar, analisar, transformar ou apresentar o trabalho.",
      "meaningTwoTitle": "Um ser humano decidiu",
      "meaningTwoBody": "Uma pessoa ou organização adotou e publicou conscientemente o resultado.",
      "meaningThreeTitle": "A responsabilidade permanece humana",
      "meaningThreeBody": "A parte nomeada não transfere a responsabilização para um sistema ou fornecedor de IA.",
      "plainTitle": "Assistência transparente. Responsabilização visível.",
      "plainLead": "A marca é uma declaração de responsabilização, não uma afirmação de que a IA é a autora nem uma garantia de que o trabalho está correto.",
      "plainBody": "Não indica que proporção do trabalho veio da IA. Indica que a IA influenciou materialmente o resultado e que uma pessoa ou organização identificável se responsabiliza pela decisão de o utilizar.",
      "plainQuote": "Três caracteres tornam visíveis tanto a participação como a responsabilidade.",
      "fullDocument": "Documento completo",
      "specification": "Especificação",
      "statusLabel": "Estado",
      "statusValue": "Rascunho",
      "versionLabel": "Versão",
      "markLabel": "Marca canónica",
      "contents": "Conteúdo",
      "footerLine": "Notação aberta. Responsabilidade humana.",
      "versionFooter": "Especificação v0.1",
      "translationNote": "Esta tradução é fornecida para fins informativos. Em caso de divergência, o texto original em inglês constitui o documento normativo.",
      "colourChanged": "A cor de destaque foi alterada para {colour}."
    },
    untranslatedNotice: {
      "badge": "Não traduzido",
      "headline": "A especificação abaixo é apresentada em inglês.",
      "detail": "Este idioma ainda não foi traduzido. O texto em inglês é a versão normativa em todos os casos."
    },
    endonym: "Português",
    sections: [
      {
        number: "1",
        title: "Finalidade",
        body: `
            <p>A notação <code>+AI</code> oferece um método conciso para identificar um artefacto como tendo sido materialmente auxiliado por inteligência artificial, identificando simultaneamente uma pessoa ou organização que aceita a responsabilidade pelo artefacto resultante.</p>
            <p>A expressão canónica é:</p>
            <p class="canonical"><code>&lt;Parte responsável&gt; +AI</code></p>
            <p>Exemplo:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>O significado fundamental é:</p>
            <p class="canonical">A IA ajudou. Eu assumo a responsabilidade.</p>`
      },
      {
        number: "2",
        title: "Princípio de conceção",
        body: `
            <p><code>+AI</code> não procura determinar se um artefacto foi «criado por um ser humano» ou «criado por IA».</p>
            <p>Durante a sua criação, os artefactos actuais podem passar repetidamente entre seres humanos e sistemas de inteligência artificial.</p>
            <p>Em vez disso, <code>+AI</code> comunica dois factos:</p>
            <ol>
              <li>a inteligência artificial auxiliou materialmente o trabalho; e</li>
              <li>uma pessoa ou organização identificável aceita a responsabilidade pelo artefacto resultante.</li>
            </ol>
            <p>A norma diz portanto respeito à <strong>participação da IA e à responsabilização humana</strong>, e não à autoria exclusiva.</p>`
      },
      {
        number: "3",
        title: "Terminologia normativa",
        body: `
            <p>Os termos <strong>DEVE (MUST)</strong>, <strong>NÃO DEVE (MUST NOT)</strong>, <strong>DEVERIA (SHOULD)</strong>, <strong>NÃO DEVERIA (SHOULD NOT)</strong> e <strong>PODE (MAY)</strong> constituem requisitos normativos na presente especificação.</p>
            <p><strong>DEVE</strong> indica um requisito absoluto.</p>
            <p><strong>NÃO DEVE</strong> indica uma proibição absoluta.</p>
            <p><strong>DEVERIA</strong> indica uma recomendação forte da qual é possível afastar-se quando exista um motivo legítimo.</p>
            <p><strong>NÃO DEVERIA</strong> indica uma prática normalmente evitada, mas potencialmente justificada em circunstâncias específicas.</p>
            <p><strong>PODE</strong> indica uma prática facultativa.</p>`
      },
      {
        number: "4",
        title: "Notação canónica",
        body: `
            <p>A marca canónica é:</p>
            <p class="canonical"><code>+AI</code></p>
            <p>A forma canónica legível por seres humanos é:</p>
            <p><strong><code>&lt;Parte responsável&gt; +AI</code></strong></p>
            <p>Exemplos:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>A marca é sensível à distinção entre maiúsculas e minúsculas.</p>
            <p>A forma canónica DEVE utilizar:</p>
            <ul>
              <li>um sinal de mais <code>+</code>;</li>
              <li>imediatamente seguido dos caracteres latinos maiúsculos <code>AI</code>;</li>
              <li>sem qualquer espaço interior.</li>
            </ul>
            <p>Por conseguinte, <code>+AI</code> é canónica.</p>
            <p>As formas seguintes não são equivalentes canónicos:</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Variantes PODEM ser posteriormente definidas por extensões da presente especificação, mas NÃO DEVE presumir-se que transportam o significado canónico de <code>+AI</code>, salvo definição expressa.</p>`
      },
      {
        number: "5",
        title: "Significado da marca",
        body: `
            <p>Uma parte responsável que utiliza <code>+AI</code> declara que:</p>
            <h4>5.1 Participação da IA</h4>
            <p>A inteligência artificial auxiliou materialmente a criação, a análise, a transformação, a geração, a avaliação, a estruturação ou a apresentação do artefacto associado.</p>
            <h4>5.2 Conhecimento</h4>
            <p>A parte responsável sabe, ou acredita razoavelmente, que ocorreu auxílio material da IA.</p>
            <h4>5.3 Autoridade</h4>
            <p>A parte responsável autorizou, iniciou, dirigiu ou adoptou conscientemente a utilização de inteligência artificial em causa.</p>
            <h4>5.4 Controlo humano ou organizacional</h4>
            <p>A parte responsável conservou a autoridade para decidir se o artefacto seria publicado, transmitido, implementado, submetido, apresentado ou de outro modo divulgado.</p>
            <h4>5.5 Adopção</h4>
            <p>A parte responsável aceita o artefacto na forma em que está a ser apresentado.</p>
            <h4>5.6 Responsabilidade</h4>
            <p>A parte responsável aceita a responsabilidade pela decisão de divulgar, utilizar ou representar o artefacto.</p>
            <p>Estes elementos constituem, no seu conjunto, a declaração <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Auxílio material",
        body: `
            <p>A marca DEVERIA ser utilizada quando a participação da IA tenha afectado materialmente o artefacto resultante.</p>
            <p>O auxílio material pode incluir a contribuição da IA para:</p>
            <ul>
              <li>a redacção;</li><li>o raciocínio;</li><li>a análise;</li><li>as recomendações;</li>
              <li>a síntese de investigação;</li><li>o código informático;</li><li>a interpretação de dados;</li>
              <li>o design;</li><li>as imagens;</li><li>o áudio;</li><li>o vídeo;</li>
              <li>a tradução quando envolva interpretação substantiva;</li><li>o planeamento;</li>
              <li>o apoio à decisão;</li><li>o trabalho matemático ou técnico;</li>
              <li>a revisão que altere materialmente o significado;</li>
              <li>ou outro trabalho intelectual ou criativo substantivo.</li>
            </ul>
            <p>Funcionalidades de IA acessórias ou puramente mecânicas não exigem necessariamente <code>+AI</code>.</p>
            <p>Entre os exemplos podem contar-se a correcção ortográfica automática, o preenchimento automático elementar, a formatação de rotina ou outras funcionalidades que não afectem materialmente a substância de um artefacto.</p>
            <p>A questão determinante não é a percentagem de conteúdo produzido pela IA.</p>
            <p>A questão determinante é:</p>
            <blockquote><strong>A IA influenciou materialmente o artefacto que está a ser apresentado?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Responsabilidade",
        body: `
            <p>A responsabilidade é a propriedade definidora de <code>+AI</code>.</p>
            <p>Ao utilizar a marca, a parte responsável não transfere a responsabilidade para um sistema, modelo, fornecedor, agente ou ferramenta de inteligência artificial.</p>
            <p>Uma afirmação equivalente a:</p>
            <blockquote>«A IA gerou-o, logo não sou responsável por ele.»</blockquote>
            <p>é incompatível com o significado pretendido de <code>+AI</code>.</p>
            <p>A parte responsável PODE apoiar-se fortemente no auxílio da IA.</p>
            <p>A parte responsável PODE publicar conteúdo substancialmente gerado por IA.</p>
            <p>A parte responsável PODE aceitar sugestões que não conseguiria produzir de forma autónoma.</p>
            <p>Nenhuma destas condições impede a utilização de <code>+AI</code>, desde que a parte responsável adopte conscientemente o artefacto resultante e aceite a responsabilidade pela sua divulgação.</p>`
      },
      {
        number: "8",
        title: "O que +AI não significa",
        body: `
            <p>Salvo declaração adicional que expressamente disponha o contrário, <code>+AI</code> NÃO afirma que:</p>
            <ul>
              <li>o artefacto está isento de erros;</li>
              <li>todas as afirmações factuais foram verificadas de forma independente;</li>
              <li>todas as citações foram conferidas de forma independente;</li>
              <li>o artefacto satisfaz qualquer norma profissional específica;</li>
              <li>o artefacto é juridicamente correcto;</li>
              <li>o artefacto é medicamente correcto;</li>
              <li>o artefacto é seguro para qualquer fim específico;</li>
              <li>o artefacto não contém alucinações;</li>
              <li>a parte responsável redigiu pessoalmente cada componente;</li>
              <li>a IA gerou a maior parte do artefacto;</li>
              <li>a IA gerou apenas uma parte minoritária do artefacto;</li>
              <li>o artefacto é original;</li>
              <li>não está presente propriedade intelectual de terceiros;</li>
              <li>não foi fornecida informação confidencial a um sistema de IA;</li>
              <li>foi utilizado um fornecedor, modelo ou sistema de IA específico;</li>
              <li>a parte responsável concorda com cada resultado intermédio da IA;</li>
              <li>ou a parte responsável consegue reproduzir ou explicar o raciocínio interno do sistema de IA.</li>
            </ul>
            <p><code>+AI</code> é uma <strong>declaração de responsabilização</strong>, e não uma garantia de correcção.</p>`
      },
      {
        number: "9",
        title: "Revisão humana",
        body: `
            <p>A versão 0.1 não exige que cada componente de um artefacto seja revisto manualmente palavra por palavra ou elemento por elemento.</p>
            <p>A parte responsável DEVE, no entanto, aceitar conscientemente o artefacto que está a ser divulgado.</p>
            <p>O reencaminhamento cego ou automático de resultados de IA não revistos NÃO DEVERIA ser representado através de <code>+AI</code> quando não tenha ocorrido qualquer acto humano significativo de adopção.</p>
            <p>Versões futuras da presente especificação PODEM definir marcas de garantia mais exigentes, representativas de revisão completa ou de verificação independente.</p>`
      },
      {
        number: "10",
        title: "Pessoas individuais",
        body: `
            <p>Uma pessoa individual PODE apor a notação após o seu nome.</p>
            <p>Exemplo:</p>
            <p><strong>Eric Mourant +AI</strong></p>
            <p>Isto significa:</p>
            <blockquote>A inteligência artificial auxiliou materialmente o trabalho associado, e Eric Mourant aceita a responsabilidade pela divulgação desse trabalho.</blockquote>
            <p>A marca refere-se ao artefacto ou à comunicação associados.</p>
            <p>Não significa necessariamente que todas as actividades desenvolvidas por essa pessoa recorram a inteligência artificial.</p>`
      },
      {
        number: "11",
        title: "Organizações",
        body: `
            <p>Uma organização PODE utilizar <code>+AI</code>.</p>
            <p data-company-example>Exemplo:</p>
            <p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Isto significa que a organização assume a responsabilidade pelo artefacto associado, auxiliado por IA, de acordo com as suas estruturas de governação e de autoridade aplicáveis.</p>
            <p>Quando for útil, PODEM ser identificadas tanto uma organização como uma pessoa responsável.</p>
            <p data-company-example>Exemplo:</p>
            <p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Correio electrónico e mensagens",
        body: `
            <p>Na comunicação pessoal, a apresentação preferida é:</p>
            <p><strong>Com os melhores cumprimentos,<br>Eric Mourant +AI</strong></p>
            <p>A marca PODE conter uma hiperligação para uma explicação canónica do seu significado.</p>
            <p>Uma hiperligação NÃO DEVE alterar a notação visível.</p>
            <p>O texto simples DEVE permanecer suficiente para expressar a declaração.</p>`
      },
      {
        number: "13",
        title: "Documentos",
        body: `
            <p>A notação PODE figurar num campo de autor, de elaborador, de revisor ou de parte responsável.</p>
            <p>Exemplos:</p>
            <p><strong>Autor: Eric Mourant +AI</strong></p>
            <p><strong>Elaborado por: Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Emitido por: JAPER Technology +AI</strong></p>
            <p>A sua colocação DEVERIA tornar claro qual a pessoa ou organização que assume a responsabilidade.</p>`
      },
      {
        number: "14",
        title: "Software",
        body: `
            <p>A notação PODE ser utilizada em repositórios de software, commits, cabeçalhos de código-fonte, documentação, notas de lançamento e artefactos gerados.</p>
            <p>Exemplo:</p>
            <pre><code>Author: Eric Mourant +AI</code></pre>
            <p>Um projecto PODE ainda declarar:</p>
            <pre><code>This project uses +AI.</code></pre>
            <p>Tal declaração ao nível do projecto DEVERIA identificar a pessoa ou organização responsável, sempre que seja praticável.</p>`
      },
      {
        number: "15",
        title: "Artefactos criativos",
        body: `
            <p>A notação PODE acompanhar imagens, áudio, vídeo, projectos de design, ilustrações, apresentações e outras obras criativas.</p>
            <p>Exemplo:</p>
            <p><strong>Criado por Eric Mourant +AI</strong></p>
            <p>A marca não especifica, por si só, quais os elementos que foram gerados ou modificados por IA.</p>
            <p>Metadados de proveniência mais detalhados PODEM ser associados separadamente.</p>`
      },
      {
        number: "16",
        title: "Investigação e trabalho técnico",
        body: `
            <p>A marca PODE ser utilizada em trabalhos de investigação, científicos, de engenharia ou técnicos, quando os requisitos institucionais, editoriais ou profissionais aplicáveis o permitam.</p>
            <p><code>+AI</code> NÃO DEVE ser apresentada como substituindo qualquer divulgação mais específica exigida por um editor, entidade reguladora, empregador, organismo profissional ou pela lei.</p>
            <p>A notação PODE complementar tal divulgação.</p>`
      },
      {
        number: "17",
        title: "Representação legível por máquina",
        body: `
            <p>Os sistemas PODEM representar a declaração através de metadados estruturados.</p>
            <p>Uma representação mínima é:</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Uma representação mais completa é:</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>As formas legíveis por máquina DEVERIAM preservar o mesmo significado semântico da notação visível.</p>`
      },
      {
        number: "18",
        title: "Persistência",
        body: `
            <p>A notação <code>+AI</code> DEVERIA subsistir a transformações razoáveis de um artefacto sempre que a atribuição seja preservada.</p>
            <p>Entre os exemplos incluem-se a conversão entre formatos de documento, o arquivo, a impressão, a exportação, a republicação e a transmissão.</p>
            <p>Quando os metadados forem removidos, a marca visível em texto simples DEVERIA permanecer suficiente para comunicar a declaração.</p>`
      },
      {
        number: "19",
        title: "Utilização livre",
        body: `
            <p>A notação <code>+AI</code> destina-se a utilização pública sem restrições.</p>
            <p>A utilização da notação NÃO DEVERIA exigir:</p>
            <ul>
              <li>registo;</li><li>filiação;</li><li>pagamento;</li><li>certificação;</li>
              <li>aprovação;</li><li>nem a utilização de qualquer produto ou fornecedor de IA específico.</li>
            </ul>
            <p>A utilidade da notação depende da sua capacidade de funcionar como convenção universal.</p>`
      },
      {
        number: "20",
        title: "Neutralidade",
        body: `
            <p><code>+AI</code> não expressa aprovação nem desaprovação da inteligência artificial.</p>
            <p>Não indica se a utilização da IA foi necessária, desejável ou superior ao trabalho humano sem auxílio.</p>
            <p>Regista apenas a participação material da IA e a responsabilização humana ou organizacional.</p>`
      },
      {
        number: "21",
        title: "Representação falsa",
        body: `
            <p>Uma pessoa ou organização NÃO DEVERIA utilizar <code>+AI</code> quando:</p>
            <ul>
              <li>não exista uma parte responsável identificável;</li>
              <li>a parte nomeada não tenha adoptado o artefacto;</li>
              <li>o artefacto esteja a ser emitido automaticamente sem autoridade humana significativa;</li>
              <li>ou a notação esteja a ser usada para criar uma falsa impressão de responsabilização humana.</li>
            </ul>
            <p>Os resultados autónomos de IA sem adopção humana significativa situam-se fora do âmbito canónico de <code>+AI</code>.</p>
            <p>Especificações futuras PODEM definir uma notação para resultados autónomos de IA.</p>`
      },
      {
        number: "22",
        title: "Relação com a autoria",
        body: `
            <p><code>+AI</code> não atribui deliberadamente qualquer percentagem de autoria.</p>
            <p>Um artefacto PODE conter material predominantemente de origem humana e continuar a ser elegível.</p>
            <p>Um artefacto PODE conter material predominantemente originado por IA e continuar a ser elegível.</p>
            <p>O critério pertinente consiste em saber se:</p>
            <p><strong>a IA auxiliou materialmente e a parte nomeada assume a responsabilidade pelo resultado.</strong></p>`
      },
      {
        number: "23",
        title: "Explicação pública canónica",
        body: `
            <p>Quando for necessária uma explicação breve, a formulação preferida é:</p>
            <p class="canonical">A IA ajudou. Eu assumo a responsabilidade.</p>
            <p>Quando for necessária uma explicação mais extensa:</p>
            <blockquote><strong><code>+AI</code> significa que a inteligência artificial auxiliou materialmente este trabalho e que a pessoa ou organização nomeada aceita a responsabilidade pelo artefacto resultante.</strong></blockquote>`
      },
      {
        number: "24",
        title: "O teste +AI",
        body: `
            <p>Antes de apor a marca, uma pessoa deverá poder responder <strong>sim</strong> a ambas as perguntas:</p>
            <p><strong>A IA auxiliou materialmente a produção deste trabalho?</strong></p>
            <p><strong>Estou disposto a assumir a responsabilidade pela sua divulgação?</strong></p>
            <p>Se ambas as respostas forem afirmativas:</p>
            <p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Extensões futuras",
        body: `
            <p>Versões futuras PODEM definir notações adicionais que abranjam:</p>
            <ul>
              <li>auxílio menor da IA;</li><li>geração predominantemente por IA;</li><li>revisão humana completa;</li>
              <li>verificação independente;</li><li>actividade de agentes autónomos;</li>
              <li>proveniência criptográfica;</li><li>identificação do sistema de IA;</li>
              <li>identificação do modelo;</li><li>ou cadeias de contribuição humana e automática.</li>
            </ul>
            <p>Tais extensões DEVERIAM preservar <code>+AI</code> como a marca canónica simples para:</p>
            <p class="canonical">Trabalho auxiliado por IA com responsabilidade humana identificável.</p>`
      },
      {
        number: "26",
        title: "Declaração canónica",
        body: `
            <p>Uma pessoa ou organização que apõe <code>+AI</code> faz a seguinte declaração:</p>
            <blockquote><strong>A inteligência artificial auxiliou materialmente este trabalho. Optei por aceitar, publicar, transmitir, implementar ou de outro modo divulgar o trabalho resultante, e assumo a responsabilidade por essa decisão e pelo trabalho tal como é apresentado.</strong></blockquote>
            <p>A forma pública abreviada é:</p>
            <p class="canonical">A IA ajudou. Eu assumo a responsabilidade.</p>
            <p>A marca canónica é:</p>
            <p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Especificação +AI v0.1</p><p>Proveniência humano-IA e responsabilização</p><strong>A IA ajudou. Eu assumo a responsabilidade.</strong>"
  });
})(window.PlusAISpecTranslations);
