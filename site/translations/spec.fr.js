/*!
 * +AI Specification — French (fr)
 * Status: reviewed human translation (migrated from website-v6.html)
 * English remains the normative text. See TRANSLATIONS.md.
 */
(function (registry) {
  registry.register("fr", {
    status: "reviewed",
    interfaceCopy: {
      "documentTitle": "+AI = L’IA m’a aidé. J’en assume la responsabilité.",
      "description": "+AI signifie que l’intelligence artificielle a apporté une aide substantielle au travail et qu’une personne ou organisation nommée en assume la responsabilité.",
      "skip": "Aller à l’explication",
      "language": "Langue",
      "languageAria": "Choisir la langue",
      "theme": "Mode sombre",
      "themeDark": "Mode sombre",
      "themeLight": "Mode clair",
      "themeDarkAria": "Utiliser le mode sombre",
      "themeLightAria": "Utiliser le mode clair",
      "highlight": "Couleur",
      "highlightAria": "Choisir une couleur d’accentuation aléatoire",
      "followedLink": "Description du postnominal +AI",
      "heroTitle": "L’IA m’a aidé. J’en assume la responsabilité.",
      "heroLead": "La personne ou l’organisation dont le nom portait ce lien fait une déclaration simple : <strong>l’intelligence artificielle a contribué de manière substantielle au travail, et cette partie assume la responsabilité de sa diffusion.</strong>",
      "readSpec": "Lire la spécification",
      "meansHeading": "Ce que déclare la marque",
      "meaningOneTitle": "L’IA a participé",
      "meaningOneBody": "L’IA a contribué de manière substantielle à créer, analyser, transformer ou présenter le travail.",
      "meaningTwoTitle": "Un humain a choisi",
      "meaningTwoBody": "Une personne ou organisation a sciemment adopté et diffusé le résultat.",
      "meaningThreeTitle": "La responsabilité reste humaine",
      "meaningThreeBody": "La partie nommée ne transfère pas la responsabilité à un système ou fournisseur d’IA.",
      "plainTitle": "Une aide transparente. Une responsabilité visible.",
      "plainLead": "La marque est une déclaration de responsabilité, non l’affirmation que l’IA est l’auteur, ni une garantie que le travail est exact.",
      "plainBody": "Elle ne précise pas quelle part du travail provient de l’IA. Elle indique que l’IA a influencé substantiellement le résultat et qu’une personne ou organisation identifiable assume la décision de l’utiliser.",
      "plainQuote": "Trois caractères rendent visibles à la fois la participation et la responsabilité.",
      "fullDocument": "Document complet",
      "specification": "Spécification",
      "statusLabel": "Statut",
      "statusValue": "Projet",
      "versionLabel": "Version",
      "markLabel": "Marque canonique",
      "contents": "Sommaire",
      "footerLine": "Notation ouverte. Responsabilité humaine.",
      "versionFooter": "Spécification v0.1",
      "translationNote": "Traduction fournie à titre informatif. En cas de divergence, le texte anglais original constitue le document normatif.",
      "colourChanged": "La couleur d’accentuation est maintenant {colour}."
    },
    untranslatedNotice: {
      "badge": "Non traduit",
      "headline": "La spécification ci-dessous est affichée en anglais.",
      "detail": "Cette langue n’a pas encore été traduite. Le texte anglais constitue la version normative dans tous les cas."
    },
    endonym: "Français",
    sections: [
      {
        number: "1",
        title: "Objet",
        body: `
            <p>La notation <code>+AI</code> fournit un moyen concis d’indiquer qu’un objet a bénéficié d’une aide substantielle de l’intelligence artificielle, tout en identifiant une personne ou organisation qui assume la responsabilité de l’objet obtenu.</p>
            <p>L’expression canonique est :</p>
            <p class="canonical"><code>&lt;Partie responsable&gt; +AI</code></p>
            <p>Exemple :</p><p><strong>Eric Mourant +AI</strong></p>
            <p>Le sens fondamental est :</p>
            <p class="canonical">L’IA m’a aidé. J’en assume la responsabilité.</p>`
      },
      {
        number: "2",
        title: "Principe de conception",
        body: `
            <p><code>+AI</code> ne cherche pas à déterminer si un objet est « créé par un humain » ou « créé par une IA ».</p>
            <p>Lors de leur création, les objets modernes peuvent passer à plusieurs reprises entre des humains et des systèmes d’intelligence artificielle.</p>
            <p><code>+AI</code> communique plutôt deux faits :</p>
            <ol><li>l’intelligence artificielle a apporté une aide substantielle au travail ; et</li><li>une personne ou organisation identifiable assume la responsabilité de l’objet obtenu.</li></ol>
            <p>La norme concerne donc la <strong>participation de l’IA et la responsabilité humaine</strong>, et non la paternité exclusive.</p>`
      },
      {
        number: "3",
        title: "Terminologie normative",
        body: `
            <p>Les termes <strong>DOIT (MUST)</strong>, <strong>NE DOIT PAS (MUST NOT)</strong>, <strong>DEVRAIT (SHOULD)</strong>, <strong>NE DEVRAIT PAS (SHOULD NOT)</strong> et <strong>PEUT (MAY)</strong> expriment des exigences normatives dans la présente spécification.</p>
            <p><strong>DOIT</strong> indique une exigence absolue.</p>
            <p><strong>NE DOIT PAS</strong> indique une interdiction absolue.</p>
            <p><strong>DEVRAIT</strong> indique une recommandation forte à laquelle il est possible de déroger pour un motif légitime.</p>
            <p><strong>NE DEVRAIT PAS</strong> indique une pratique normalement évitée, mais potentiellement justifiée dans certaines circonstances.</p>
            <p><strong>PEUT</strong> indique une pratique facultative.</p>`
      },
      {
        number: "4",
        title: "Notation canonique",
        body: `
            <p>La marque canonique est :</p><p class="canonical"><code>+AI</code></p>
            <p>La forme canonique lisible par l’humain est :</p><p><strong><code>&lt;Partie responsable&gt; +AI</code></strong></p>
            <p>Exemples :</p><p><strong>Eric Mourant +AI</strong></p><p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>La marque est sensible à la casse.</p>
            <p>La forme canonique DOIT utiliser :</p>
            <ul><li>un signe plus <code>+</code> ;</li><li>immédiatement suivi des caractères latins majuscules <code>AI</code> ;</li><li>sans espace intérieur.</li></ul>
            <p><code>+AI</code> est donc canonique.</p>
            <p>Les formes suivantes ne sont pas des équivalents canoniques :</p>
            <p><code>+Ai</code> &nbsp; <code>+aI</code> &nbsp; <code>+ ai</code> &nbsp; <code>AI+</code> &nbsp; <code>AI assisted</code></p>
            <p>Des variantes PEUVENT être définies ultérieurement par des extensions de la présente spécification, mais elles NE DOIVENT PAS être considérées comme porteuses du sens canonique de <code>+AI</code> sauf définition explicite.</p>`
      },
      {
        number: "5",
        title: "Signification de la marque",
        body: `
            <p>Une partie responsable utilisant <code>+AI</code> déclare que :</p>
            <h4>5.1 Participation de l’IA</h4><p>L’intelligence artificielle a contribué de manière substantielle à la création, l’analyse, la transformation, la génération, l’évaluation, la structuration ou la présentation de l’objet associé.</p>
            <h4>5.2 Connaissance</h4><p>La partie responsable sait ou estime raisonnablement qu’une aide substantielle de l’IA a eu lieu.</p>
            <h4>5.3 Autorité</h4><p>La partie responsable a autorisé, initié, dirigé ou sciemment adopté l’utilisation concernée de l’intelligence artificielle.</p>
            <h4>5.4 Contrôle humain ou organisationnel</h4><p>La partie responsable a conservé le pouvoir de décider si l’objet serait publié, transmis, déployé, soumis, présenté ou autrement diffusé.</p>
            <h4>5.5 Adoption</h4><p>La partie responsable accepte l’objet sous la forme dans laquelle il est présenté.</p>
            <h4>5.6 Responsabilité</h4><p>La partie responsable assume la responsabilité de la décision de diffuser, utiliser ou présenter l’objet.</p>
            <p>Ces éléments constituent collectivement la déclaration <code>+AI</code>.</p>`
      },
      {
        number: "6",
        title: "Aide substantielle",
        body: `
            <p>La marque DEVRAIT être utilisée lorsque la participation de l’IA a eu une incidence substantielle sur l’objet obtenu.</p>
            <p>L’aide substantielle peut inclure une contribution de l’IA à :</p>
            <ul>
              <li>la rédaction ;</li><li>le raisonnement ;</li><li>l’analyse ;</li><li>les recommandations ;</li>
              <li>la synthèse de recherches ;</li><li>le code logiciel ;</li><li>l’interprétation des données ;</li>
              <li>la conception ;</li><li>les images ;</li><li>l’audio ;</li><li>la vidéo ;</li>
              <li>la traduction lorsqu’elle implique une interprétation substantielle ;</li><li>la planification ;</li>
              <li>l’aide à la décision ;</li><li>les travaux mathématiques ou techniques ;</li>
              <li>la révision qui modifie substantiellement le sens ;</li><li>ou tout autre travail intellectuel ou créatif substantiel.</li>
            </ul>
            <p>Une fonction d’IA accessoire ou purement mécanique n’impose pas nécessairement l’emploi de <code>+AI</code>.</p>
            <p>Il peut s’agir de la correction orthographique automatique, de la saisie semi-automatique élémentaire, de la mise en forme courante ou d’autres fonctions qui ne modifient pas substantiellement le contenu d’un objet.</p>
            <p>La question déterminante n’est pas le pourcentage de contenu produit par l’IA.</p>
            <p>La question déterminante est :</p>
            <blockquote><strong>L’IA a-t-elle influencé de manière substantielle l’objet présenté ?</strong></blockquote>`
      },
      {
        number: "7",
        title: "Responsabilité",
        body: `
            <p>La responsabilité est la caractéristique essentielle de <code>+AI</code>.</p>
            <p>En utilisant la marque, la partie responsable ne transfère pas sa responsabilité à un système, modèle, fournisseur, agent ou outil d’intelligence artificielle.</p>
            <p>Une déclaration équivalente à :</p>
            <blockquote>« L’IA l’a généré, je n’en suis donc pas responsable. »</blockquote>
            <p>est incompatible avec le sens voulu de <code>+AI</code>.</p>
            <p>La partie responsable PEUT s’appuyer fortement sur l’aide de l’IA.</p>
            <p>La partie responsable PEUT publier un contenu substantiellement généré par l’IA.</p>
            <p>La partie responsable PEUT accepter des suggestions qu’elle n’aurait pas pu produire de manière autonome.</p>
            <p>Aucune de ces conditions n’empêche l’utilisation de <code>+AI</code>, à condition que la partie responsable adopte sciemment l’objet obtenu et assume la responsabilité de sa diffusion.</p>`
      },
      {
        number: "8",
        title: "Ce que +AI ne signifie pas",
        body: `
            <p>Sauf indication contraire explicite dans une déclaration complémentaire, <code>+AI</code> n’affirme PAS que :</p>
            <ul>
              <li>l’objet est exempt d’erreurs ;</li><li>chaque affirmation factuelle a été vérifiée indépendamment ;</li>
              <li>chaque citation a été contrôlée indépendamment ;</li><li>l’objet répond à une norme professionnelle particulière ;</li>
              <li>l’objet est juridiquement exact ;</li><li>l’objet est médicalement exact ;</li>
              <li>l’objet est sûr pour un usage particulier ;</li><li>l’objet ne contient aucune hallucination ;</li>
              <li>la partie responsable a personnellement rédigé chaque composant ;</li><li>l’IA a généré la majorité de l’objet ;</li>
              <li>l’IA n’a généré qu’une minorité de l’objet ;</li><li>l’objet est original ;</li>
              <li>aucun élément de propriété intellectuelle appartenant à un tiers n’est présent ;</li>
              <li>aucune information confidentielle n’a été fournie à un système d’IA ;</li>
              <li>un fournisseur, modèle ou système d’IA particulier a été utilisé ;</li>
              <li>la partie responsable approuve chaque résultat intermédiaire de l’IA ;</li>
              <li>ou la partie responsable peut reproduire ou expliquer le raisonnement interne du système d’IA.</li>
            </ul>
            <p><code>+AI</code> est une <strong>déclaration de responsabilité</strong>, et non une garantie d’exactitude.</p>`
      },
      {
        number: "9",
        title: "Examen humain",
        body: `
            <p>La version 0.1 n’exige pas que chaque composant d’un objet soit examiné manuellement mot par mot ou élément par élément.</p>
            <p>La partie responsable DOIT cependant accepter en connaissance de cause l’objet diffusé.</p>
            <p>La transmission aveugle ou automatique d’un résultat d’IA non examiné NE DEVRAIT PAS être représentée par <code>+AI</code> lorsqu’aucun acte humain significatif d’adoption n’a eu lieu.</p>
            <p>Les versions futures de cette spécification PEUVENT définir des marques d’assurance plus fortes représentant un examen complet ou une vérification indépendante.</p>`
      },
      {
        number: "10",
        title: "Personnes physiques",
        body: `
            <p>Une personne PEUT apposer la notation après son nom.</p>
            <p>Exemple :</p><p><strong>Eric Mourant +AI</strong></p>
            <p>Cela signifie :</p>
            <blockquote>L’intelligence artificielle a apporté une aide substantielle au travail associé, et Eric Mourant assume la responsabilité de la diffusion de ce travail.</blockquote>
            <p>La marque se rapporte à l’objet ou à la communication associés.</p>
            <p>Elle ne signifie pas nécessairement que l’intelligence artificielle intervient dans toutes les activités de cette personne.</p>`
      },
      {
        number: "11",
        title: "Organisations",
        body: `
            <p>Une organisation PEUT utiliser <code>+AI</code>.</p>
            <p data-company-example>Exemple :</p><p data-company-example><strong>JAPER Technology +AI</strong></p>
            <p>Cela signifie que l’organisation assume la responsabilité de l’objet associé assisté par l’IA selon ses structures de gouvernance et d’autorité applicables.</p>
            <p>Lorsqu’il est utile, une organisation et une personne responsable PEUVENT toutes deux être identifiées.</p>
            <p data-company-example>Exemple :</p><p data-company-example><strong>JAPER Technology<br>Eric Mourant +AI</strong></p>`
      },
      {
        number: "12",
        title: "Courriel et messagerie",
        body: `
            <p>Dans une communication personnelle, la présentation privilégiée est :</p>
            <p><strong>Bien cordialement,<br>Eric Mourant +AI</strong></p>
            <p>La marque PEUT comporter un lien hypertexte vers une explication canonique de sa signification.</p>
            <p>Un lien hypertexte NE DOIT PAS modifier la notation visible.</p>
            <p>Le texte brut DOIT rester suffisant pour exprimer la déclaration.</p>`
      },
      {
        number: "13",
        title: "Documents",
        body: `
            <p>La notation PEUT figurer dans un champ indiquant l’auteur, le préparateur, le réviseur ou la partie responsable.</p>
            <p>Exemples :</p>
            <p><strong>Auteur : Eric Mourant +AI</strong></p>
            <p><strong>Préparé par : Eric Mourant +AI</strong></p>
            <p data-company-example><strong>Publié par : JAPER Technology +AI</strong></p>
            <p>Son emplacement DEVRAIT indiquer clairement la personne ou l’organisation qui assume la responsabilité.</p>`
      },
      {
        number: "14",
        title: "Logiciels",
        body: `
            <p>La notation PEUT être utilisée dans les dépôts logiciels, les commits, les en-têtes de code source, la documentation, les notes de version et les objets générés.</p>
            <p>Exemple :</p><pre><code>Auteur : Eric Mourant +AI</code></pre>
            <p>Un projet PEUT également déclarer :</p><pre><code>Ce projet utilise +AI.</code></pre>
            <p>Une telle déclaration au niveau du projet DEVRAIT, dans la mesure du possible, identifier la personne ou l’organisation responsable.</p>`
      },
      {
        number: "15",
        title: "Objets créatifs",
        body: `
            <p>La notation PEUT accompagner des images, des contenus audio ou vidéo, des conceptions, des illustrations, des présentations et d’autres œuvres créatives.</p>
            <p>Exemple :</p><p><strong>Créé par Eric Mourant +AI</strong></p>
            <p>La marque ne précise pas à elle seule quels éléments ont été générés ou modifiés par l’IA.</p>
            <p>Des métadonnées de provenance plus détaillées PEUVENT être associées séparément.</p>`
      },
      {
        number: "16",
        title: "Recherche et travaux techniques",
        body: `
            <p>La marque PEUT être utilisée dans des travaux de recherche, scientifiques, d’ingénierie ou techniques lorsque les exigences institutionnelles, éditoriales ou professionnelles applicables le permettent.</p>
            <p><code>+AI</code> NE DOIT PAS être présenté comme remplaçant une divulgation plus précise exigée par un éditeur, une autorité de réglementation, un employeur, un organisme professionnel ou la loi.</p>
            <p>La notation PEUT compléter une telle divulgation.</p>`
      },
      {
        number: "17",
        title: "Représentation lisible par machine",
        body: `
            <p>Les systèmes PEUVENT représenter la déclaration au moyen de métadonnées structurées.</p>
            <p>Une représentation minimale est :</p>
            <pre><code>{
  "provenance": "+AI"
}</code></pre>
            <p>Une représentation plus riche est :</p>
            <pre data-json-example><code>{
  "ai_assistance": {
    "material": true,
    "responsibility": "human",
    "responsible_party": "Eric Mourant",
    "notation": "+AI"
  }
}</code></pre>
            <p>Les formes lisibles par machine DEVRAIENT conserver la même signification sémantique que la notation visible.</p>`
      },
      {
        number: "18",
        title: "Persistance",
        body: `
            <p>La notation <code>+AI</code> DEVRAIT survivre aux transformations raisonnables d’un objet lorsque l’attribution est conservée.</p>
            <p>Il peut s’agir notamment de la conversion entre formats de documents, de l’archivage, de l’impression, de l’exportation, de la republication et de la transmission.</p>
            <p>Lorsque les métadonnées sont supprimées, la marque visible en texte brut DEVRAIT rester suffisante pour communiquer la déclaration.</p>`
      },
      {
        number: "19",
        title: "Libre utilisation",
        body: `
            <p>La notation <code>+AI</code> est destinée à être librement utilisée par le public.</p>
            <p>L’utilisation de la notation NE DEVRAIT PAS exiger :</p>
            <ul><li>un enregistrement ;</li><li>une adhésion ;</li><li>un paiement ;</li><li>une certification ;</li><li>une autorisation ;</li><li>ni l’utilisation d’un produit ou fournisseur d’IA particulier.</li></ul>
            <p>L’utilité de la notation dépend de sa capacité à fonctionner comme une convention universelle.</p>`
      },
      {
        number: "20",
        title: "Neutralité",
        body: `
            <p><code>+AI</code> n’exprime ni approbation ni désapprobation de l’intelligence artificielle.</p>
            <p>La marque n’indique pas si l’utilisation de l’IA était nécessaire, souhaitable ou supérieure à un travail humain sans assistance.</p>
            <p>Elle consigne uniquement la participation substantielle de l’IA et la responsabilité humaine ou organisationnelle.</p>`
      },
      {
        number: "21",
        title: "Présentation trompeuse",
        body: `
            <p>Une personne ou organisation NE DEVRAIT PAS utiliser <code>+AI</code> lorsque :</p>
            <ul><li>aucune partie responsable n’est identifiable ;</li><li>la partie nommée n’a pas adopté l’objet ;</li><li>l’objet est diffusé automatiquement sans autorité humaine significative ;</li><li>ou la notation sert à créer une fausse impression de responsabilité humaine.</li></ul>
            <p>Un résultat autonome d’IA sans adoption humaine significative ne relève pas du champ canonique de <code>+AI</code>.</p>
            <p>De futures spécifications PEUVENT définir une notation pour les résultats autonomes de l’IA.</p>`
      },
      {
        number: "22",
        title: "Rapport avec la paternité",
        body: `
            <p><code>+AI</code> n’attribue délibérément aucun pourcentage de paternité.</p>
            <p>Un objet PEUT contenir une majorité de contenu d’origine humaine et rester admissible.</p>
            <p>Un objet PEUT contenir une majorité de contenu issu de l’IA et rester admissible.</p>
            <p>Le critère pertinent consiste à savoir si :</p>
            <p><strong>l’IA a apporté une aide substantielle et la partie nommée assume la responsabilité du résultat.</strong></p>`
      },
      {
        number: "23",
        title: "Explication publique canonique",
        body: `
            <p>Lorsqu’une explication courte est requise, la formulation privilégiée est :</p>
            <p class="canonical">L’IA m’a aidé. J’en assume la responsabilité.</p>
            <p>Lorsqu’une explication plus longue est requise :</p>
            <blockquote><strong><code>+AI</code> signifie que l’intelligence artificielle a apporté une aide substantielle à ce travail et que la personne ou organisation nommée assume la responsabilité de l’objet obtenu.</strong></blockquote>`
      },
      {
        number: "24",
        title: "Le test +AI",
        body: `
            <p>Avant d’apposer la marque, une personne devrait pouvoir répondre <strong>oui</strong> aux deux questions suivantes :</p>
            <p><strong>L’IA a-t-elle apporté une aide substantielle à la production de ceci ?</strong></p>
            <p><strong>Suis-je disposé à assumer la responsabilité de sa diffusion ?</strong></p>
            <p>Si les deux réponses sont affirmatives :</p><p class="canonical">+AI</p>`
      },
      {
        number: "25",
        title: "Extensions futures",
        body: `
            <p>Les versions futures PEUVENT définir des notations supplémentaires concernant :</p>
            <ul><li>l’aide mineure de l’IA ;</li><li>la génération principalement par l’IA ;</li><li>l’examen humain complet ;</li><li>la vérification indépendante ;</li><li>l’activité d’agents autonomes ;</li><li>la provenance cryptographique ;</li><li>l’identification du système d’IA ;</li><li>l’identification du modèle ;</li><li>ou les chaînes de contributions humaines et automatiques.</li></ul>
            <p>Ces extensions DEVRAIENT préserver <code>+AI</code> comme marque canonique simple pour :</p>
            <p class="canonical">Un travail assisté par l’IA avec une responsabilité humaine identifiable.</p>`
      },
      {
        number: "26",
        title: "Déclaration canonique",
        body: `
            <p>Une personne ou organisation qui appose <code>+AI</code> fait la déclaration suivante :</p>
            <blockquote><strong>L’intelligence artificielle a apporté une aide substantielle à ce travail. J’ai choisi d’accepter, publier, transmettre, déployer ou autrement diffuser le travail obtenu, et j’assume la responsabilité de cette décision et du travail tel qu’il est présenté.</strong></blockquote>
            <p>La forme publique abrégée est :</p>
            <p class="canonical">L’IA m’a aidé. J’en assume la responsabilité.</p>
            <p>La marque canonique est :</p><p class="canonical">+AI</p>`
      }
    ],
    end: "<p>Spécification +AI v0.1</p><p>Provenance humain-IA et responsabilité</p><strong>L’IA m’a aidé. J’en assume la responsabilité.</strong>"
  });
})(window.PlusAISpecTranslations);
