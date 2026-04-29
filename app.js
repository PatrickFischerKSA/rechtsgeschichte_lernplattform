const modules = [
  {
    title: "Rechtshistorische Methode",
    epoch: "Methode",
    focus: "Quellen lesen, nicht bloss wiedergeben.",
    points: [
      "Textgestalt, Normadressaten, Autorität, Regelungsziel und Sanktionsmechanismus trennen.",
      "Sachliche Aussagen mit Stoffwissen erklären und stets am Text belegen.",
      "Verortung über Sprache, Institutionen, Begriffe, Machtträger und bekannte Eckdaten begründen.",
      "Gegenwartsbezug als strukturelle Parallele formulieren, nicht als Gleichsetzung."
    ]
  },
  {
    title: "Stammesrechte und Frühmittelalter",
    epoch: "Mittelalter",
    focus: "Pluralität, Personalitätsprinzip und frühe Schriftlichkeit.",
    points: [
      "Lex Salica und Lex Alamannorum stehen für Recht als gruppenbezogene Ordnung.",
      "Herrschaft wird über Personenverbände, Sanktionen, Busssysteme und kirchliche Einflüsse stabilisiert.",
      "Karolingische Reformen verbinden Kapitularien, Gerichtswesen und Reichsorganisation.",
      "Schriftliche Fixierung bedeutet nicht moderne Kodifikation, sondern Sicherung und Herrschaftstechnik."
    ]
  },
  {
    title: "Kirche, Reich und Investiturstreit",
    epoch: "Mittelalter",
    focus: "Kompetenzkonflikte zwischen geistlicher und weltlicher Gewalt.",
    points: [
      "Zwei-Schwerter-Lehre, Papstwahlordnung, Canossa und Wormser Konkordat zeigen den Kampf um Vorrang.",
      "Der Streit betrifft Ämterbesetzung, Sakralität von Herrschaft und autonome Kompetenzbereiche.",
      "Kirchliche Gerichtsbarkeit und Kanonistik gewinnen organisatorische und dogmatische Schärfe.",
      "Das Konkordat entschärft den Konflikt durch Unterscheidung geistlicher und weltlicher Elemente."
    ]
  },
  {
    title: "Lehnswesen und Grundherrschaft",
    epoch: "Mittelalter",
    focus: "Herrschaft als personal gebundene und dinglich vermittelte Ordnung.",
    points: [
      "Lehen verbinden Schutz, Treue, Dienst und Nutzungsrechte.",
      "Libri Feudorum, Sachsenspiegel und Heerschildordnung strukturieren adlige Rang- und Bindungsverhältnisse.",
      "Grundherrschaft umfasst Herrschaft über Land, Abgaben, Gericht und abhängige Personen.",
      "Für Quellen wichtig: keine Trennung von Privatrecht, öffentlicher Gewalt und sozialer Ordnung voraussetzen."
    ]
  },
  {
    title: "Stadt- und Wirtschaftsrecht",
    epoch: "Mittelalter",
    focus: "Kommunale Autonomie, Marktordnung und Genossenschaftlichkeit.",
    points: [
      "Stadtrechtsprivilegien schaffen Gerichts-, Markt-, Steuer- und Befestigungsrechte.",
      "Zünfte, Gilden und Innungen ordnen Arbeit, Ausbildung, Qualität, Zugang und politische Beteiligung.",
      "Zürcher Zunftrevolution 1336: Konflikt zwischen Patriziat, Handwerk und städtischer Verfassung.",
      "Handelsorganisationen wie die Hanse zeigen überlokale Koordination ohne modernen Staat."
    ]
  },
  {
    title: "Universitäten und gelehrtes Recht",
    epoch: "Mittelalter",
    focus: "Bologna, Kanonistik, Legistik und ius commune.",
    points: [
      "Das Studium generale ist privilegierte Körperschaft mit Lehrbetrieb, Schutzrechten und eigenem Status.",
      "Glossatoren und Kommentatoren entwickeln methodische Textarbeit am Corpus Iuris Civilis.",
      "Kanonisches und weltliches Recht bilden europäische Wissens- und Praxisräume.",
      "Gelehrte Juristen werden für Gerichte, Verwaltung, Städte und Territorialherren zentral."
    ]
  },
  {
    title: "Humanismus, Reformation und gute Policey",
    epoch: "Frühe Neuzeit",
    focus: "Textkritik, Konfessionalisierung und dichte Normsetzung.",
    points: [
      "Mos gallicus und humanistische Philologie stellen Autoritäten historisch-kritisch neu zur Diskussion.",
      "Reformation und Augsburger Religionsfrieden verbinden Bekenntnis, Territorium und Staatlichkeit.",
      "Gute Policey zielt auf Ordnung, Sittlichkeit, Versorgung, Wirtschaft, Gesundheit und Sicherheit.",
      "Normdichte wächst, ohne dass bereits ein moderner Verwaltungsstaat vorausgesetzt werden darf."
    ]
  },
  {
    title: "Strafrecht und Verfahren",
    epoch: "Frühe Neuzeit",
    focus: "Vom Gottesurteil zur geregelten Strafverfolgung.",
    points: [
      "Viertes Laterankonzil 1215 schwächt Gottesurteile als Beweisform.",
      "Constitutio Criminalis Bambergensis und Carolina stehen für prozessuale Vereinheitlichung.",
      "Inquisitionsprozess, Folter, Indizienlehre und körperliche Strafen müssen historisch eingeordnet werden.",
      "Salvatorische Klauseln zeigen die Spannung zwischen Reichsrecht und lokalen Rechten."
    ]
  },
  {
    title: "Absolutismus und Souveränität",
    epoch: "Frühe Neuzeit",
    focus: "Verdichtung von Herrschaft, Verwaltung und Normsetzung.",
    points: [
      "Bodin denkt Souveränität als höchste, dauerhafte und ungeteilte Gewalt.",
      "Hobbes begründet starke Herrschaft aus Sicherheitsbedürfnis und Bürgerkriegserfahrung.",
      "Kriege, Konfessionalisierung, Finanzbedarf und stehende Heere fördern Zentralisierung.",
      "Konsequenzen: Bürokratie, Gesetzgebung, Staatswirtschaft, Militär, Zurückdrängung ständischer Mitwirkung."
    ]
  },
  {
    title: "Naturrecht, Aufklärung und Kodifikation",
    epoch: "Neuzeit",
    focus: "Rationalisierung des Rechts und Anspruch auf systematische Ordnung.",
    points: [
      "Vernunftrecht arbeitet universal, säkular, autonom und rational.",
      "Montesquieu, Locke, Pufendorf und Kant prägen Freiheit, Gewaltenteilung, Pflicht und Legitimität.",
      "ALR, ABGB, Code civil und später BGB zeigen verschiedene Modelle kodifizierter Rechtsordnung.",
      "Kodifikationsstreit Savigny/Thibaut fragt nach Gesetzgebung, Volksgeist, Wissenschaft und historischer Reife."
    ]
  },
  {
    title: "Revolution, Industrialisierung und Nationalstaat",
    epoch: "Neuzeit",
    focus: "Doppelte Revolution als rechtlicher Beschleuniger.",
    points: [
      "Menschenrechtserklärungen 1776 und 1789 formulieren Freiheit, Gleichheit, Eigentum und politische Teilhabe.",
      "Französische Revolution wirkt in die Schweiz: Helvetik, Freiheitsversprechen, Besatzung, Zentralisierung.",
      "Industrialisierung verändert Arbeit, Familie, Haftung, soziale Frage und staatliche Intervention.",
      "Historische Rechtsschule, Germanistik, Pandektistik und Positivismus prägen das 19. Jahrhundert."
    ]
  },
  {
    title: "20. Jahrhundert: Recht und Unrecht",
    epoch: "Moderne",
    focus: "Rechtsstaat, Ideologie, Gewalt und Menschenrechte.",
    points: [
      "Weimar, Versailler Vertrag, Wirtschaftskrise und politische Radikalisierung bilden den Kontext ab 1919.",
      "NS-Herrschaft: Ermächtigungsgesetz, Führerprinzip, Gleichschaltung, Sonderrecht, Aufhebung des Analogieverbots.",
      "Antisemitismus wird rassistisch-biologistisch aufgeladen und durch Nürnberger Gesetze rechtlich operationalisiert.",
      "Nach 1945: UNO, Menschenrechte, europäische Integration und Radbruch-Formel als Reaktionen auf extremes Unrecht."
    ]
  }
];

const moduleControlSets = {
  "Rechtshistorische Methode": [
    { label: "Methodische Zerlegung", minWords: 90, prompt: "Zerlege eine unbekannte Rechtsquelle in Textgestalt, Normadressaten, Autorität, Regelungsziel und Sanktion. Erkläre, weshalb diese fünf Ebenen getrennt werden müssen, bevor Stoffwissen eingesetzt wird.", expected: ["textgestalt", "normadressaten", "autorität", "regelungsziel", "sanktion", "stoffwissen", "quelle", "methode"] },
    { label: "Textbefund vs. Kontextwissen", minWords: 100, prompt: "Formuliere eine Antwortstrategie, die verhindert, dass du bloss Vorlesungswissen reproduzierst. Zeige an einem selbst gewählten Beispiel, wie ein Textbefund in eine sachliche Aussage überführt wird.", expected: ["textbefund", "sachliche", "aussage", "stoffwissen", "beleg", "quelle", "kontext", "argument"] },
    { label: "Historische Verortung", minWords: 100, prompt: "Entwirf ein Schema zur Verortung einer Quelle. Welche Indizien sind stärker als andere, und wie gehst du mit unsicheren Datierungen um?", expected: ["sprache", "institution", "begriff", "machttraeger", "zeitspanne", "indiz", "datierung", "verortung"] },
    { label: "Gegenwartsbezug", minWords: 90, prompt: "Erkläre, wie ein Gegenwartsbezug anspruchsvoll formuliert wird, ohne anachronistisch zu werden. Nenne zwei zulässige und zwei unzulässige Formen des Vergleichs.", expected: ["gegenwartsbezug", "struktur", "vergleich", "anachronismus", "differenz", "parallele", "kontext", "gleichsetzung"] },
    { label: "Prüfungsarchitektur", minWords: 110, prompt: "Baue eine vollständige Gliederung für Teil A der Prüfung. Begründe die Gewichtung der Abschnitte und zeige, wo die grössten Bewertungsrisiken liegen.", expected: ["zusammenfassung", "themenkreise", "verortung", "gegenwartsbezüge", "punkte", "gewichtung", "textbelege", "bewertung"] }
  ],
  "Stammesrechte und Frühmittelalter": [
    { label: "Personalität und Pluralität", minWords: 100, prompt: "Erkläre, weshalb frühmittelalterliche Stammesrechte nicht wie moderne staatliche Gesetzbücher gelesen werden dürfen. Arbeite Personalitätsprinzip, Gruppenbindung und Sanktionsordnung heraus.", expected: ["stammesrechte", "personalitaetsprinzip", "gruppe", "lex", "salica", "alamannorum", "sanktion", "pluralitaet"] },
    { label: "Identitätsbildung", minWords: 100, prompt: "Zeige, wie Leges kollektive Identität erzeugen oder stabilisieren. Verbinde Normtext, Herrschaft und soziale Zugehörigkeit.", expected: ["leges", "identitaet", "kollektiv", "herrschaft", "zugehörigkeit", "norm", "volk", "kirche"] },
    { label: "Karolingische Reformen", minWords: 110, prompt: "Baue ein Kausalmodell von Karl dem Grossen zu Kapitularien, Gerichtswesen und Reichsorganisation. Wo liegen Reichweite und Grenzen dieser Normsetzung?", expected: ["karolingisch", "karl", "kapitularien", "gericht", "reich", "organisation", "schriftlichkeit", "grenze"] },
    { label: "Unrechtsausgleich", minWords: 100, prompt: "Vergleiche Busse, Fehde und Gericht als Formen des Unrechtsausgleichs. Welche Funktion erfüllt jede Form in einer noch wenig verdichteten Herrschaftsordnung?", expected: ["busse", "fehde", "gericht", "unrechtsausgleich", "sanktion", "herrschaft", "ordnung", "gewalt"] },
    { label: "Quellenindizien", minWords: 90, prompt: "Welche fünf Textsignale würden dich auf frühmittelalterliche Normbildung führen? Begründe jedes Signal historisch.", expected: ["lex", "busse", "sippe", "kirche", "herzog", "volk", "sanktion", "stammesrecht"] }
  ],
  "Kirche, Reich und Investiturstreit": [
    { label: "Zwei Gewalten", minWords: 100, prompt: "Erkläre die Zwei-Schwerter-Lehre als Denkfigur politisch-rechtlicher Ordnung. Wo trennt sie, wo verschränkt sie geistliche und weltliche Gewalt?", expected: ["zwei", "schwerter", "geistlich", "weltlich", "gewalt", "kirche", "reich", "ordnung"] },
    { label: "Investiturstreit", minWords: 110, prompt: "Analysiere den Investiturstreit nicht als Personenstreit, sondern als Kompetenzkonflikt. Welche Rechte, Ämter und Legitimationsformen stehen auf dem Spiel?", expected: ["investiturstreit", "kompetenz", "amt", "bischof", "papst", "koenig", "legitimation", "canossa"] },
    { label: "Wormser Konkordat", minWords: 100, prompt: "Zeige, weshalb das Wormser Konkordat eine Entschärfung, aber keine vollständige Trennung von Kirche und Reich bedeutet.", expected: ["wormser", "konkordat", "laieninvestitur", "geistlich", "weltlich", "anerkennung", "kompetenz", "konflikt"] },
    { label: "Kirchliche Gerichtsbarkeit", minWords: 110, prompt: "Erkläre Aufbau und Bedeutung kirchlicher Gerichtsbarkeit. Beziehe Papst, Bischof, Appellation, Exkommunikation und weltlichen Arm ein.", expected: ["gerichtsbarkeit", "papst", "bischof", "appellation", "exkommunikation", "weltlicher", "arm", "kanonistik"] },
    { label: "Quellenanalyse", minWords: 100, prompt: "Eine lateinische Quelle droht mit kirchlichen Sanktionen und ruft bei Bedarf weltliche Hilfe an. Entwickle daraus zwei sachliche Aussagen und eine historische Verortung.", expected: ["latein", "sanktion", "kirchlich", "weltlich", "quelle", "verortung", "mittelalter", "autorität"] }
  ],
  "Lehnswesen und Grundherrschaft": [
    { label: "Lehen vs. Grundherrschaft", minWords: 110, prompt: "Grenze Lehnswesen und Grundherrschaft systematisch ab: Akteure, Rechtsbindung, wirtschaftliche Grundlage, Gericht und soziale Funktion.", expected: ["lehen", "grundherrschaft", "treue", "schutz", "dienst", "abgaben", "gericht", "soziale"] },
    { label: "Lehnspyramide", minWords: 100, prompt: "Erkläre die Heerschildordnung als Modell adliger Rang- und Bindungsverhältnisse. Was leistet das Modell, und wo vereinfacht es zu stark?", expected: ["heerschildordnung", "lehnspyramide", "rang", "adel", "bindung", "sachsenspiegel", "libri", "feudorum"] },
    { label: "Vilikation und Rentengrundherrschaft", minWords: 110, prompt: "Vergleiche Villikationsverfassung, Rentengrundherrschaft und Gutsherrschaft als Entwicklungsformen. Welche Veränderungen in Herrschaft und Wirtschaft werden sichtbar?", expected: ["vilikation", "rentengrundherrschaft", "gutsherrschaft", "hof", "abgaben", "wirtschaft", "herrschaft", "abhängigkeit"] },
    { label: "Keine moderne Trennung", minWords: 100, prompt: "Erkläre anhand dieses Themenfelds, warum Privatrecht, öffentliches Recht, Wirtschaft und Sozialordnung analytisch getrennt, historisch aber verschränkt sind.", expected: ["privatrecht", "öffentlich", "wirtschaft", "sozialordnung", "herrschaft", "land", "gericht", "personenstatus"] },
    { label: "Quellenindizien", minWords: 90, prompt: "Welche Textmerkmale sprechen für Lehnsrecht, welche für Grundherrschaft? Formuliere je drei Indizien mit Begründung.", expected: ["treue", "vasall", "lehen", "zins", "fron", "hof", "abgabe", "gericht"] }
  ],
  "Stadt- und Wirtschaftsrecht": [
    { label: "Städtische Freiheit", minWords: 100, prompt: "Erkläre städtische Freiheit als rechtlich gebundene Autonomie, nicht als schrankenlose Freiheit. Beziehe Privileg, Gericht, Markt und Bürgerschaft ein.", expected: ["stadt", "freiheit", "autonomie", "privileg", "gericht", "markt", "bürger", "stadtrecht"] },
    { label: "Zunftverfassung", minWords: 110, prompt: "Analysiere Zünfte als wirtschaftliche, soziale und politische Ordnung. Welche Funktionen erfüllen Zugangsbeschränkung, Qualitätskontrolle und Beteiligung?", expected: ["zunft", "gilde", "innung", "arbeit", "qualitaet", "zugang", "politik", "beteiligung"] },
    { label: "Zürich 1336", minWords: 100, prompt: "Nutze die Zürcher Zunftrevolution als Beispiel für Konflikte zwischen Patriziat, Handwerk und städtischer Verfassung.", expected: ["zuerich", "1336", "zunftrevolution", "patriziat", "handwerk", "brun", "verfassung", "emanzipation"] },
    { label: "Legal Transfer", minWords: 100, prompt: "Erkläre Stadtrechtsfamilien als Form von Legal Transfer. Was wird übertragen, was verändert sich lokal?", expected: ["legal", "transfer", "stadtrechtsfamilien", "privileg", "lokal", "uebertragung", "rezeption", "autonomie"] },
    { label: "Handel und Ordnung", minWords: 90, prompt: "Zeige am Beispiel von Handelsorganisationen, warum Wirtschaftsrecht im Mittelalter ohne modernen Staat funktionieren konnte.", expected: ["handel", "hanse", "organisation", "markt", "recht", "stadt", "koordination", "konflikt"] }
  ],
  "Universitäten und gelehrtes Recht": [
    { label: "Studium generale", minWords: 100, prompt: "Erkläre das Studium generale als privilegierte Körperschaft. Beziehe Lehrbetrieb, Schutzrechte, Status und Gerichtsbarkeit ein.", expected: ["studium", "generale", "privileg", "koerperschaft", "lehre", "schutz", "status", "gerichtsbarkeit"] },
    { label: "Bologna und Methode", minWords: 110, prompt: "Zeige, weshalb Bologna für die Entstehung juristischer Wissenschaft zentral ist. Erkläre Glossatoren, Glossa ordinaria und scholastische Methode.", expected: ["bologna", "glossatoren", "glossa", "scholastik", "corpus", "iuris", "methode", "textarbeit"] },
    { label: "Kanonistik und Legistik", minWords: 100, prompt: "Vergleiche Kanonistik und Legistik. Welche Texte, Institutionen und Praxisfelder prägen beide Wissensformen?", expected: ["kanonistik", "legistik", "kanonisch", "roemisch", "corpus", "decretum", "gratian", "praxis"] },
    { label: "Ius commune", minWords: 110, prompt: "Erkläre das ius commune als europäische Rechtsschicht. Wie verbindet es gelehrte Methode, Gerichtspraxis und Bedarf an Juristen?", expected: ["ius", "commune", "europa", "juristen", "gericht", "verwaltung", "gelehrt", "praxis"] },
    { label: "Quellenanalyse", minWords: 100, prompt: "Eine Quelle spricht von Privilegien für Magister und Studenten. Entwickle zwei Themenkreise und eine plausible Verortung.", expected: ["privilegien", "magister", "studenten", "universität", "mittelalter", "papst", "gelehrtes", "recht"] }
  ],
  "Humanismus, Reformation und gute Policey": [
    { label: "Humanistische Textkritik", minWords: 100, prompt: "Erkläre, wie Humanismus und mos gallicus den Umgang mit Rechtstexten verändern. Was bedeutet historisch-kritische Lektüre hier?", expected: ["humanismus", "mos", "gallicus", "textkritik", "philologie", "quelle", "renaissance", "rechtstext"] },
    { label: "Reformation und Territorium", minWords: 110, prompt: "Analysiere den Zusammenhang von Reformation, Augsburger Religionsfrieden und konfessioneller Staatlichkeit.", expected: ["reformation", "augsburger", "religionsfrieden", "konfession", "territorium", "cuius", "regio", "staatlichkeit"] },
    { label: "Gute Policey", minWords: 110, prompt: "Erkläre gute Policey als Ordnungskonzept. Beziehe Sittlichkeit, Versorgung, Wirtschaft, Gesundheit und Sicherheit ein.", expected: ["policey", "ordnung", "sittlichkeit", "versorgung", "wirtschaft", "gesundheit", "sicherheit", "gemeinwohl"] },
    { label: "Normdichte", minWords: 100, prompt: "Zeige, weshalb frühneuzeitliche Normdichte nicht automatisch modernen Verwaltungsstaat bedeutet. Welche Zwischenformen sind sichtbar?", expected: ["normdichte", "frühe", "neuzeit", "verwaltung", "obrigkeit", "sozialdisziplinierung", "territorium", "ordnung"] },
    { label: "Gewalt und Ordnung", minWords: 90, prompt: "Erkläre, wie konfessionelle Gewalt und Ordnungsbedürfnis neue Formen von Rechtserzeugung begünstigen.", expected: ["gewalt", "konfessionalisierung", "ordnung", "herrschaft", "rechtserzeugung", "territorial", "reformation", "policey"] }
  ],
  "Strafrecht und Verfahren": [
    { label: "Gottesurteil und Beweis", minWords: 100, prompt: "Erkläre die Bedeutung des Vierten Laterankonzils für Beweisformen. Warum ist das Verbot der Gottesurteile verfahrensgeschichtlich wichtig?", expected: ["laterankonzil", "gottesurteil", "beweis", "verfahren", "kirche", "1215", "rationalisierung", "gericht"] },
    { label: "Carolina", minWords: 110, prompt: "Analysiere die Carolina als Straf- und Prozessordnung. Beziehe Vereinheitlichung, Indizienlehre, Folter und körperliche Strafen ein.", expected: ["carolina", "strafrecht", "prozess", "indizien", "folter", "strafe", "vereinheitlichung", "reich"] },
    { label: "Inquisitionsprozess", minWords: 100, prompt: "Erkläre den Inquisitionsprozess als Veränderung der Strafverfolgung. Welche Rolle spielen Amtsermittlung, Geständnis und Wahrheitssuche?", expected: ["inquisitionsprozess", "amtsermittlung", "gestaendnis", "wahrheit", "verfahren", "richter", "beweis", "verfolgung"] },
    { label: "Salvatorische Klausel", minWords: 90, prompt: "Warum ist die salvatorische Klausel der Carolina rechtshistorisch aussagekräftig? Erkläre Reichsrecht, lokale Rechte und politische Kompromisse.", expected: ["salvatorische", "klausel", "reichsrecht", "lokal", "partikular", "kompromiss", "carolina", "geltung"] },
    { label: "Historische Bewertung", minWords: 100, prompt: "Bewerte frühneuzeitliches Strafrecht differenziert: Wo sieht man Rationalisierung, wo Gewaltintensivierung?", expected: ["rationalisierung", "gewalt", "strafe", "verfahren", "folter", "beweis", "ordnung", "frühe"] }
  ],
  "Absolutismus und Souveränität": [
    { label: "Herrschaftsform", minWords: 100, prompt: "Beschreibe absolutistische Herrschaft nicht als Karikatur, sondern als Struktur von Normsetzung, Verwaltung, Rechtsprechung und Wirtschaftslenkung.", expected: ["absolutismus", "normsetzung", "verwaltung", "rechtsprechung", "wirtschaft", "zentralisierung", "monarch", "stände"] },
    { label: "Entstehungsbedingungen", minWords: 110, prompt: "Erkläre die Entstehungsbedingungen des Absolutismus aus Konfessionalisierung, Krieg, Finanzbedarf, stehenden Heeren und Territorialisierung.", expected: ["konfessionalisierung", "krieg", "finanz", "heer", "territorium", "zentralisierung", "obrigkeit", "sozialdisziplinierung"] },
    { label: "Bodin und Hobbes", minWords: 110, prompt: "Vergleiche Bodin und Hobbes als Begründungen starker Herrschaft. Welche Probleme lösen sie jeweils, und welche Risiken entstehen?", expected: ["bodin", "hobbes", "souveränität", "leviathan", "vertrag", "sicherheit", "bürgerkrieg", "herrschaft"] },
    { label: "Konsequenzen", minWords: 100, prompt: "Zeige drei rechtliche oder politische Konsequenzen absolutistischer Herrschaft und erkläre jeweils den Mechanismus.", expected: ["buerokratie", "gesetzgebung", "policey", "merkantilismus", "militär", "stände", "zentral", "staat"] },
    { label: "Quellenbezug", minWords: 90, prompt: "Welche Textsignale sprechen für absolutistisches Herrschaftsdenken? Formuliere eine sachliche Aussage mit Gegenwartsbezug.", expected: ["souverän", "monarch", "ordnung", "sicherheit", "verwaltung", "staat", "gesetz", "gegenwartsbezug"] }
  ],
  "Naturrecht, Aufklärung und Kodifikation": [
    { label: "Vernunftrecht", minWords: 100, prompt: "Erkläre Vernunftrecht mit den Merkmalen universal, säkular, autonom und rational. Warum verändert das die Begründung von Recht?", expected: ["vernunftrecht", "universal", "säkular", "autonom", "rational", "begründung", "naturrecht", "individuum"] },
    { label: "Aufklärung und Herrschaft", minWords: 110, prompt: "Vergleiche Montesquieu, Locke, Pufendorf und Kant als Denkfiguren rechtlicher und politischer Ordnung.", expected: ["montesquieu", "locke", "pufendorf", "kant", "gewaltenteilung", "eigentum", "pflicht", "freiheit"] },
    { label: "Kodifikationen", minWords: 110, prompt: "Vergleiche ALR, ABGB, Code civil und BGB als unterschiedliche Kodifikationsmodelle. Welche Ordnungsvorstellungen stehen dahinter?", expected: ["alr", "abgb", "code", "civil", "bgb", "kodifikation", "system", "ordnung"] },
    { label: "Kodifikationsstreit", minWords: 100, prompt: "Erkläre den Kodifikationsstreit zwischen Savigny und Thibaut. Was sagt der Streit über Gesetzgebung und Rechtswissenschaft?", expected: ["savigny", "thibaut", "kodifikationsstreit", "volksgeist", "gesetzgebung", "rechtswissenschaft", "historisch", "reife"] },
    { label: "Strafrechtsreform", minWords: 90, prompt: "Zeige, wie Aufklärung und Vernunftrecht strafrechtliche Reformen ermöglichen. Welche Kritik richtet sich gegen ältere Strafpraktiken?", expected: ["aufklaerung", "strafrecht", "reform", "vernunft", "folter", "verhältnismässigkeit", "gesetzlichkeit", "kritik"] }
  ],
  "Revolution, Industrialisierung und Nationalstaat": [
    { label: "Doppelte Revolution", minWords: 100, prompt: "Erkläre die doppelte Revolution als Verbindung politischer und industrieller Umbrüche. Warum beschleunigt sie Rechtsentwicklung?", expected: ["doppelte", "revolution", "politisch", "industriell", "rechtsentwicklung", "arbeit", "staat", "gesellschaft"] },
    { label: "Menschenrechte", minWords: 100, prompt: "Vergleiche Virginia Bill of Rights und französische Menschenrechtserklärung. Welche Rechtsideen werden formuliert, und wo bleiben Grenzen?", expected: ["virginia", "menschenrechte", "frankreich", "freiheit", "gleichheit", "eigentum", "bürger", "grenzen"] },
    { label: "Schweiz und Helvetik", minWords: 110, prompt: "Bewerte die Folgen der Französischen Revolution für die Schweiz als Ambivalenz von Freiheit, Besatzung, Zentralisierung und autoritärer Herrschaft.", expected: ["schweiz", "helvetik", "freiheit", "besatzung", "zentralisierung", "franzoesisch", "untertan", "ambivalent"] },
    { label: "Industrialisierung", minWords: 100, prompt: "Zeige, welche neuen Rechtsprobleme Industrialisierung hervorbringt: Arbeit, Haftung, soziale Frage, Familie und staatliche Intervention.", expected: ["industrialisierung", "arbeit", "haftung", "soziale", "frage", "familie", "intervention", "fabrik"] },
    { label: "Nationalstaat und Rechtsvereinheitlichung", minWords: 100, prompt: "Erkläre, wie Nationalstaatlichkeit, Konstitutionalismus und Rechtsvereinheitlichung zusammenhängen, ohne sie gleichzusetzen.", expected: ["nationalstaat", "konstitutionalismus", "rechtsvereinheitlichung", "verfassung", "staat", "gesetz", "bürger", "einheit"] }
  ],
  "20. Jahrhundert: Recht und Unrecht": [
    { label: "Weimar und Anfälligkeit", minWords: 100, prompt: "Erkläre die Anfälligkeit Deutschlands nach 1919 aus Verfassung, Versailles, Krisenerfahrung und politischer Radikalisierung.", expected: ["weimar", "versailles", "krise", "radikalisierung", "verfassung", "inflation", "arbeitslosigkeit", "nationalismus"] },
    { label: "NS-Staat als Rechtsumbau", minWords: 110, prompt: "Beschreibe die rechtliche Umwandlung ab 1933 mit Ermächtigungsgesetz, Führerprinzip, Gleichschaltung, Sonderrecht und Einheitspartei.", expected: ["ermaechtigungsgesetz", "fuehrerprinzip", "gleichschaltung", "sonderrecht", "einheitspartei", "1933", "recht", "staat"] },
    { label: "Antisemitismus", minWords: 110, prompt: "Zeichne die historischen Wurzeln des modernen Antisemitismus nach und erkläre den Übergang zu rassistisch-biologistischer Rechtsausgrenzung.", expected: ["antisemitismus", "rassenlehre", "sozialdarwinismus", "gobineau", "biologisch", "ausgrenzung", "jüdisch", "ideologie"] },
    { label: "Normiertes Unrecht", minWords: 100, prompt: "Analysiere zwei Beispiele, wie antisemitische Ideologie in die Rechtsordnung des NS-Staates eingeht.", expected: ["nürnberger", "gesetze", "reichsbürger", "blutschutz", "ehe", "staatsangehörigkeit", "recht", "ausgrenzung"] },
    { label: "Nach 1945", minWords: 100, prompt: "Erkläre UNO, Menschenrechte, europäische Integration und Radbruch-Formel als Reaktionen auf extremes Unrecht. Wo liegen Unterschiede der Reaktionen?", expected: ["uno", "menschenrechte", "europäische", "integration", "radbruch", "formel", "unrecht", "1945"] }
  ]
};

const timeline = [
  ["ca. 400 v. Chr.", "Nikomachische Ethik und Politica", "work", "Aristoteles; frühe naturrechtliche und politische Grundfragen."],
  ["391", "Christentum als Staatsreligion", "event", "Theodosius I. verbindet Reich und christliche Ordnung."],
  ["494", "Zwei-Schwerter-Lehre", "work", "Gelasius unterscheidet geistliche und weltliche Gewalt."],
  ["510", "Lex Salica", "law", "Fränkisches Stammesrecht."],
  ["529/533", "Corpus Iuris Civilis", "law", "Justinianische Rechtssammlung als spätere Grundlage gelehrten Rechts."],
  ["720", "Lex Alamannorum", "law", "Kirche, Herzog und Volk in einem Sanktionskatalog."],
  ["800", "Kaiserkrönung Karls des Grossen", "event", "Wiederherstellung westlicher Kaiseridee."],
  ["802/803", "Aachener Reichstag", "law", "Karolingische Stammesrechtsredaktionen."],
  ["1059", "Papstwahlordnung", "law", "Papstwahl durch Kardinalbischöfe."],
  ["1076-1122", "Investiturstreit", "event", "Konflikt um Ämterbesetzung und Vorrang."],
  ["1088", "Bologna", "event", "Entstehung eines prägenden Zentrums gelehrten Rechts."],
  ["1122", "Wormser Konkordat", "law", "Entschärfung des Machtkonflikts zwischen Kirche und Reich."],
  ["1140", "Decretum Gratiani", "law", "Grundlage der Kanonistik."],
  ["1215", "Viertes Laterankonzil", "law", "Verbot der Gottesurteile."],
  ["1230", "Glossa ordinaria", "work", "Accursius bündelt Glossen zum römischen Recht."],
  ["1235", "Sachsenspiegel", "law", "Land- und Lehnrecht mit imperialer Deutung."],
  ["1356", "Goldene Bulle", "law", "Grundordnung der Königswahl und Kurfürstenstellung."],
  ["1495", "Reichstag zu Worms", "event", "Ewiger Landfriede und Reform des Reichskammergerichts."],
  ["1532", "Constitutio Criminalis Carolina", "law", "Straf- und Prozessordnung Karls V."],
  ["1555", "Augsburger Religionsfrieden", "law", "Konfessionelle Staatlichkeit im Reich."],
  ["1576", "Les six livres de la République", "work", "Bodins Souveränitätslehre."],
  ["1625", "De iure belli ac pacis", "work", "Grotius und das Recht von Krieg und Frieden."],
  ["1648", "Westfälischer Frieden", "law", "Friedensordnung nach dem Dreissigjährigen Krieg."],
  ["1689", "Two Treatises of Government", "work", "Locke über Regierung, Eigentum und Widerstand."],
  ["1748", "Vom Geist der Gesetze", "work", "Montesquieu und Gewaltenteilung."],
  ["1776", "Virginia Bill of Rights", "law", "Menschenrechtliche Verfassungsgrundlagen."],
  ["1789", "Déclaration des droits de l'homme", "law", "Französische Menschen- und Bürgerrechte."],
  ["1794", "ALR", "law", "Allgemeines Landrecht für die Preussischen Staaten."],
  ["1804", "Code civil", "law", "Privatrechtskodifikation unter Napoleon."],
  ["1814", "Kodifikationsstreit", "event", "Savigny gegen Thibaut."],
  ["1848", "Bundesstaat Schweiz", "event", "Verfassungsstaatliche Neuordnung."],
  ["1900", "BGB", "law", "Deutsche Privatrechtskodifikation."],
  ["1912", "ZGB", "law", "Schweizerisches Zivilgesetzbuch."],
  ["1919", "Weimarer Verfassung", "law", "Republikanische Verfassung nach dem Ersten Weltkrieg."],
  ["1933", "NS-Machtübernahme", "event", "Ermächtigungsgesetz, Führerprinzip, Sonderrecht."],
  ["1935", "Nürnberger Gesetze", "law", "Antisemitische Ideologie als Rechtsordnung."],
  ["1945", "UNO", "event", "Internationale Ordnung nach dem Zweiten Weltkrieg."],
  ["1957", "Römische Verträge", "law", "EWG und Euratom."],
  ["1991", "Maastricht", "law", "Gründung der Europäischen Union."]
];

const rubrics = {
  source: [
    ["Zusammenfassung", 3, ["päpstliche", "bulle", "studium generale", "privileg", "immunität", "apostolisch", "schutz"]],
    ["Sachliche Aussage: Universität und gelehrtes Recht", 9, ["universität", "bologna", "kanonisch", "weltlich", "gloss", "ius commune", "legistik", "kanonistik", "corpus iuris"]],
    ["Sachliche Aussage: Gerichtsbarkeit", 9, ["gericht", "appellation", "bischof", "papst", "exkommunikation", "weltlicher arm", "diözese", "geistlich"]],
    ["Historische Verortung", 3, ["mittelalter", "latein", "bonifaz", "1456", "greifswald", "papst", "studium generale"]],
    ["Gegenwartsbezüge", 6, ["wissenschaftsfreiheit", "bildung", "sozial", "aufstieg", "zuständigkeit", "international", "autonomie", "schutz"]]
  ],
  absolutism: [
    ["Herrschaftsform", 2, ["absolut", "souverän", "zentral", "verwaltung", "ständ", "gesetzgebung"]],
    ["Entstehungsbedingungen", 3, ["konfession", "krieg", "finanz", "heer", "territorial", "westfälisch"]],
    ["Philosophie", 4, ["bodin", "hobbes", "leviathan", "souveränität", "sicherheit", "machiavelli"]],
    ["Konsequenzen", 3, ["bürokratie", "policey", "merkantil", "kodifikation", "staat", "militär"]]
  ],
  revolution: [
    ["Frankreich nach 1789", 2, ["menschenrechte", "monarchie", "republik", "terror", "napoleon", "verfassung"]],
    ["Folgen für die Schweiz", 2, ["helvetik", "französisch", "freiheitsbaum", "untertan", "basel", "schwyz"]],
    ["Stellungnahme", 4, ["freiheit", "gleichheit", "zentral", "besatzung", "autorität", "ambivalent", "emanzipation"]]
  ],
  ns: [
    ["Anfälligkeit nach 1919", 2, ["versailles", "weimar", "krise", "inflation", "arbeitslos", "nationalismus"]],
    ["Rechtliche Umwandlung", 4, ["ermächtigungsgesetz", "führerprinzip", "gleichschaltung", "sonderrecht", "analogieverbot", "einheitspartei"]],
    ["Antisemitismus", 4, ["rassenlehre", "sozialdarwinismus", "gobineau", "nürnberger", "reichsbürger", "blutschutz", "ausgrenzung"]]
  ]
};

const cards = [
  ["Was prüft die historische Verortung?", "Sie ordnet den Text anhand von Sprache, Institutionen, Begriffen, Akteuren und Eckdaten in einen plausiblen Zeitraum ein."],
  ["Was bedeutet ius commune?", "Eine europaweit wirksame Rechtsschicht aus römischem und kanonischem gelehrtem Recht."],
  ["Warum ist Bologna wichtig?", "Bologna steht für institutionalisierte Rechtslehre, Glossatoren und den Aufstieg gelehrter Juristen."],
  ["Was leistet die Glosse?", "Sie erklärt, verknüpft und harmonisiert Rechtstexte; die Glossa ordinaria bündelt autoritative Kommentierung."],
  ["Was ist gute Policey?", "Frühneuzeitliche Ordnungsgesetzgebung für Sicherheit, Sittlichkeit, Wirtschaft, Versorgung und Gemeinwohl."],
  ["Kern von Bodins Souveränität?", "Höchste, dauerhafte und prinzipiell ungeteilte Herrschaftsgewalt."],
  ["Kodifikationsstreit 1814?", "Thibaut fordert ein einheitliches Gesetzbuch; Savigny betont historische Entwicklung, Volksgeist und Rechtswissenschaft."],
  ["Radbruch-Formel?", "Extrem ungerechtes positives Recht kann seinen Rechtscharakter verlieren."],
  ["Warum zählt der Gegenwartsbezug?", "Er zeigt, ob ein historisches Problem strukturell erkannt und differenziert in heutige Konflikte übersetzt wird."],
  ["Was war die Carolina?", "Eine peinliche Gerichtsordnung von 1532 mit Bedeutung für Strafverfahren und Strafrecht im Reich."]
];

const matchPool = [
  ["Wormser Konkordat", "Beilegung des Investiturstreits"],
  ["Sachsenspiegel", "Land- und Lehnrechtsbuch"],
  ["Carolina", "Straf- und Prozessordnung"],
  ["Bodin", "Souveränitätslehre"],
  ["Code civil", "Privatrechtskodifikation"],
  ["Nürnberger Gesetze", "rassistische Rechtsausgrenzung"],
  ["Glossa ordinaria", "Sammlung von Glossen"],
  ["Westfälischer Frieden", "Friedensordnung 1648"]
];

const cases = [
  {
    text: "Eine Quelle erwähnt den weltlichen Arm als Vollstreckungshilfe kirchlicher Sanktionen. Welcher Themenkreis liegt nahe?",
    options: ["Gerichtsbarkeit", "Industrialisierung", "Pandektistik"],
    answer: "Gerichtsbarkeit"
  },
  {
    text: "Ein Text argumentiert mit Sicherheit nach Bürgerkrieg und verlangt eine ungeteilte starke Gewalt.",
    options: ["Hobbes und Absolutismus", "Zunftrecht", "Stammesrechte"],
    answer: "Hobbes und Absolutismus"
  },
  {
    text: "Eine Norm hebt Gleichheit hervor, beseitigt Untertanenverhältnisse, geht aber mit Besatzung einher.",
    options: ["Helvetik und Revolution", "Investiturstreit", "Lehnswesen"],
    answer: "Helvetik und Revolution"
  }
];

const materials = window.dropboxMaterials || [];
const chapters = [
  {
    key: "(1) Einfu",
    title: "Perspektive, Methode, Zeitstrahl",
    period: "Orientierung",
    memory: "Landkarte",
    exam: "Für Verortung: erst Epoche, dann Institution, dann Textfunktion.",
    essentials: ["Recht als historisch gewachsene Ordnung lesen.", "Quellen nicht modernisieren, sondern aus ihrem Konflikt heraus verstehen.", "Zeitstrahl als Prüfungsanker benutzen."]
  },
  {
    key: "(2) Weltliche Normbildung",
    title: "Weltliche Normbildung im Frühmittelalter",
    period: "5.-9. Jahrhundert",
    memory: "Drei Schilde",
    exam: "Stammesrechte, Kapitularien und frühe Gerichte liefern Themenkreise für Ordnung, Busse und Herrschaft.",
    essentials: ["Völkerwanderung als Neuordnung, nicht als einfacher Bruch.", "Leges bilden Identität und Sanktionsordnungen.", "Karolingische Reformen verbinden Herrschaft, Schriftlichkeit und Gericht."]
  },
  {
    key: "(3) Funktion der Religion",
    title: "Kirche und weltliche Herrschaft",
    period: "5.-13. Jahrhundert",
    memory: "Zwei Schwerter",
    exam: "Bei päpstlichen Schreiben immer Autorität, Gerichtsbarkeit, Sanktion und weltlichen Arm prüfen.",
    essentials: ["Amtskirche und Reich sind verflochten.", "Investiturstreit trennt und ordnet Kompetenzen.", "Libertas Ecclesiae erklärt kirchliche Autonomieansprüche."]
  },
  {
    key: "(4) Grundherrschaft",
    title: "Grundherrschaft",
    period: "Mittelalter",
    memory: "Hof mit Abgabenwegen",
    exam: "Quellen zu Land, Abgaben, Gericht und Personenstatus sachlich auseinanderlegen.",
    essentials: ["Vilikationsverfassung als Organisationsform.", "Rentengrundherrschaft und Gutsherrschaft unterscheiden.", "Recht, Wirtschaft und soziale Ordnung sind verschränkt."]
  },
  {
    key: "(5) Rechtliche Strukturen",
    title: "Lehnswesen, Territorium, Eidgenossenschaft",
    period: "12.-15. Jahrhundert",
    memory: "Lehnspyramide",
    exam: "Bei Treue, Schutz, Dienst, Bündnis und Landesherrschaft an personale Herrschaft denken.",
    essentials: ["Lehen organisieren adlige Bindungen.", "Territorialisierung verdichtet Herrschaft räumlich.", "Eidgenössische Normbildung entsteht über Bündnisse und Konflikte."]
  },
  {
    key: "(6) Stadt - Wirtschaftsrecht",
    title: "Stadt- und Wirtschaftsrecht",
    period: "12.-15. Jahrhundert",
    memory: "Stadttor mit Werkbank",
    exam: "Städtische Quellen auf Privilegien, Markt, Gericht, Zunft und Autonomie lesen.",
    essentials: ["Stadtrechte erzeugen Freiheit und Ordnung zugleich.", "Zünfte regulieren Arbeit, Qualität und politische Teilhabe.", "Legal Transfer erklärt Stadtrechtsfamilien."]
  },
  {
    key: "(7) Entstehung von Rechtswissenschaft",
    title: "Gelehrtes Recht",
    period: "11.-15. Jahrhundert",
    memory: "Glossenrad",
    exam: "Bei Studium generale, Privilegien und Latein: gelehrtes Recht, Kanonistik, Legistik, ius commune.",
    essentials: ["Scholastik schärft juristische Textarbeit.", "Bologna und Glossen machen Recht wissenschaftlich bearbeitbar.", "Juristen werden für Verwaltung und Gerichtspraxis zentral."]
  },
  {
    key: "(8) Humanismus",
    title: "Humanismus, mos gallicus, Usus modernus",
    period: "15.-18. Jahrhundert",
    memory: "Druckerpresse",
    exam: "Textkritik, Quellenphilologie und praktische Rezeption auseinanderhalten.",
    essentials: ["Renaissance und Humanismus historisieren Rechtstexte.", "Mos gallicus arbeitet kritisch-philologisch.", "Usus modernus verbindet römisches Recht mit Praxis."]
  },
  {
    key: "(9) Territorialstaat",
    title: "Reformation, Gewaltexzesse, Absolutismus",
    period: "16.-18. Jahrhundert",
    memory: "Krone und Verwaltungsnetz",
    exam: "Absolutismus immer mit Entstehungsbedingungen, Theorie und Konsequenzen beantworten.",
    essentials: ["Konfessionalisierung und Gewalt fördern Ordnungsbedürfnisse.", "Bodin und Hobbes legitimieren starke Herrschaft verschieden.", "Policey, Verwaltung und Zentralisierung verdichten Staatlichkeit."]
  },
  {
    key: "(10) Natur- und Vernunftrecht",
    title: "Naturrecht, Aufklärung, Kodifikation",
    period: "17.-19. Jahrhundert",
    memory: "Kompass über Gesetzbuch",
    exam: "Bei rationaler Ordnung an Vernunftrecht, Menschenrechte, Strafrechtsreform und Kodifikation denken.",
    essentials: ["Vernunftrecht wird universal, säkular, autonom, rational.", "Aufklärung verändert Strafrecht und Herrschaftsbegründung.", "Kodifikationen ordnen Recht systematisch."]
  },
  {
    key: "(11) Historische Rechtsschule",
    title: "Historische Rechtsschule und Kodifikationen",
    period: "19. Jahrhundert",
    memory: "Wurzelbaum",
    exam: "Savigny/Thibaut, Germanistik/Pandektistik und 1900er Kodifikationen als Zusammenhang lernen.",
    essentials: ["Recht wird aus historischer Entwicklung erklärt.", "Pandektistik systematisiert römischrechtliche Dogmatik.", "BGB und ZGB stehen am Ende langer Wissenschafts- und Gesetzgebungsprozesse."]
  },
  {
    key: "(12) Rechtsbildung im Spannungsfeld",
    title: "Industrialisierung, Konstitutionalismus, Nationalstaat",
    period: "19. Jahrhundert",
    memory: "Fabrik und Verfassung",
    exam: "Soziale Frage, Grundrechte, Nation und Gesetzgebung miteinander verbinden.",
    essentials: ["Industrialisierung erzeugt neue Rechtsprobleme.", "Konstitutionalismus begrenzt und organisiert Staatsgewalt.", "Nationalstaatlichkeit verändert Rechtsvereinheitlichung."]
  },
  {
    key: "(13) Krieg",
    title: "Krieg, Diktatur, Recht und Unrecht",
    period: "20. Jahrhundert",
    memory: "Gebrochene Waage",
    exam: "Bei NS-Themen nie nur Ereignisse nennen: rechtliche Umwandlung und ideologische Normsetzung zeigen.",
    essentials: ["Weimar, Versailles und Krisen erklären Anfälligkeiten.", "Ermächtigungsgesetz, Führerprinzip und Sonderrecht formen den NS-Staat.", "Nach 1945 reagieren Menschenrechte und internationale Ordnung auf extremes Unrecht."]
  }
];

const chapterRepeatQuestions = {
  "Perspektive, Methode, Zeitstrahl": [
    "Wie würdest du eine unbekannte Quelle so zerlegen, dass Textbefund, historische Erklärung und Gegenwartsbezug nicht ineinanderfallen?",
    "Welche Indizien sind bei der Verortung stärker: Sprache, Institution, Autorität, Sanktion oder Begriffswahl? Begründe eine Rangfolge.",
    "Warum ist eine zeitliche Einordnung ohne Textfunktion prüfungsgefährlich? Zeige es an einem kurzen Beispiel."
  ],
  "Weltliche Normbildung im Frühmittelalter": [
    "Warum darf eine Lex Salica oder Lex Alamannorum nicht als modernes Gesetzbuch gelesen werden?",
    "Wie hängen Personalitätsprinzip, Busssysteme und Herrschaftsstabilisierung zusammen?",
    "Welche Veränderungen bringen karolingische Kapitularien gegenüber Stammesrechten, und wo bleiben Grenzen der Durchsetzung?"
  ],
  "Kirche und weltliche Herrschaft": [
    "Wie trennt und verschränkt die Zwei-Schwerter-Lehre geistliche und weltliche Kompetenz zugleich?",
    "Warum ist der Investiturstreit ein Kompetenzkonflikt und nicht bloss ein Machtkampf zwischen Personen?",
    "Welche Rolle spielen Exkommunikation, Appellation und weltlicher Arm in einer Quellenanalyse zur kirchlichen Gerichtsbarkeit?"
  ],
  "Grundherrschaft": [
    "Wie unterscheidest du Vilikationsverfassung, Rentengrundherrschaft und Gutsherrschaft anhand einer Quelle?",
    "Warum sind Abgaben, Gericht und Personenstatus zusammen zu lesen und nicht als getrennte Rechtsgebiete?",
    "Welche Hinweise zeigen, ob eine Quelle wirtschaftliche Nutzung, soziale Abhängigkeit oder Herrschaftsausübung betont?"
  ],
  "Lehnswesen, Territorium, Eidgenossenschaft": [
    "Wie unterscheiden sich Lehnsbindung, Landesherrschaft und eidgenössisches Bündnis als Ordnungsformen?",
    "Was leistet die Lehnspyramide als Modell, und warum kann sie reale Herrschaftsverhältnisse verzerren?",
    "Welche Quellenbegriffe deuten auf Treue, Schutz, Dienst, Territorialisierung oder bündische Konfliktregelung?"
  ],
  "Stadt- und Wirtschaftsrecht": [
    "Warum bedeutet städtische Freiheit zugleich Autonomie und verdichtete Ordnung? Beziehe Privilegien, Markt, Gericht und Bürgerschaft ein.",
    "Wie regulieren Zünfte Wirtschaft, Sozialstatus und politische Teilhabe in einem einzigen Ordnungsmodell?",
    "Wie würdest du Legal Transfer bei Stadtrechtsfamilien nachweisen, ohne lokale Anpassungen zu übersehen?"
  ],
  "Gelehrtes Recht": [
    "Warum verändert die scholastische Methode den Umgang mit Normtexten grundlegend?",
    "Wie unterscheiden sich Legistik und Kanonistik hinsichtlich Textgrundlagen, Institutionen und Praxisnähe?",
    "Weshalb wird das ius commune zur europäischen Rechtsschicht, obwohl lokale Rechte weiterbestehen?"
  ],
  "Humanismus, mos gallicus, Usus modernus": [
    "Was ändert der mos gallicus gegenüber glossatorischer Textarbeit, und welche Prüfungsindizien zeigen diese Verschiebung?",
    "Wie verbinden Humanismus, Philologie und historische Kritik die Arbeit am Recht mit Quellenkritik?",
    "Warum ist der Usus modernus keine blosse Rückkehr zum römischen Recht, sondern praktische Anpassung?"
  ],
  "Reformation, Gewaltexzesse, Absolutismus": [
    "Wie führen Konfessionalisierung, Gewalt und Ordnungsbedürfnis zu dichterer Normsetzung?",
    "Vergleiche Bodin und Hobbes: Welches Problem starker Herrschaft lösen sie jeweils, und welches Risiko entsteht?",
    "Welche Textsignale sprechen für Policey, Zentralisierung oder absolutistisches Souveränitätsdenken?"
  ],
  "Naturrecht, Aufklärung, Kodifikation": [
    "Wie verändern Universalität, Säkularität, Autonomie und Rationalität die Begründung von Recht?",
    "Warum gehören Menschenrechte, Strafrechtsreform und Kodifikation in dieselbe Denkbewegung, aber nicht in dasselbe Schema?",
    "Vergleiche ALR, ABGB, Code civil und BGB: Welche Ordnungsvorstellungen unterscheiden sich?"
  ],
  "Historische Rechtsschule und Kodifikationen": [
    "Was steht im Kodifikationsstreit zwischen Savigny und Thibaut wirklich auf dem Spiel?",
    "Wie hängen Historische Rechtsschule, Germanistik, Romanistik und Pandektistik zusammen?",
    "Warum sind BGB und ZGB nicht einfach Endpunkte des Fortschritts, sondern Ergebnisse bestimmter Wissenschafts- und Staatsvorstellungen?"
  ],
  "Industrialisierung, Konstitutionalismus, Nationalstaat": [
    "Welche neuen Rechtsprobleme erzeugt Industrialisierung in Arbeit, Haftung, Familie und sozialer Sicherung?",
    "Wie begrenzt Konstitutionalismus Staatsgewalt, während Nationalstaatlichkeit Rechtsvereinheitlichung fördert?",
    "Warum darf man Grundrechte, Nation und soziale Frage in Quellen des 19. Jahrhunderts nicht isoliert behandeln?"
  ],
  "Krieg, Diktatur, Recht und Unrecht": [
    "Wie wird Recht im NS-Staat durch Ermächtigungsgesetz, Führerprinzip, Gleichschaltung und Sonderrecht umgebaut?",
    "Wie geht antisemitische Ideologie in konkrete Rechtsnormen wie Reichsbürgerrecht oder Blutschutz ein?",
    "Welche unterschiedlichen Reaktionen auf extremes Unrecht zeigen Menschenrechte, UNO, europäische Integration und Radbruch-Formel?"
  ]
};

const examLadder = [
  ["1", "Zeitanker setzen", "Ordne eine Quelle zunächst grob ein: Antike, Mittelalter, Frühe Neuzeit, 19. Jahrhundert, 20. Jahrhundert.", "Nenne drei Indizien aus Sprache, Institution, Begriffen oder Sanktionen."],
  ["2", "Text zusammenfassen", "Verdichte den Inhalt ohne Vorwissen: Wer ordnet was, gegenüber wem, mit welchem Zweck?", "Schreibe vier Sätze ohne Datierung und ohne Bewertung."],
  ["3", "Themenkreise finden", "Markiere zwei tragende Sachthemen: z.B. Gerichtsbarkeit, gelehrtes Recht, Policey, Kodifikation, Herrschaft.", "Formuliere beide Themen als prüfbare Überschrift."],
  ["4", "Historisch erklären", "Baue Stoffwissen um die Textstelle herum auf und erkläre Entwicklung, Institutionen und Begriffe.", "Verknüpfe jedes Thema mit mindestens drei Fachbegriffen."],
  ["5", "Verorten", "Leite aus Indizien eine Zeitspanne ab und nenne eine plausible Unter- und Obergrenze.", "Begründe, weshalb frühere/spätere Epochen weniger passen."],
  ["6", "Gegenwartsbezug", "Zeige eine strukturelle Parallele: Schutz, Zuständigkeit, Autonomie, Gleichheit, Rechtssicherheit.", "Formuliere differenziert: ähnlich in der Struktur, anders im historischen Kontext."],
  ["7", "Klausurantwort bauen", "Setze alles in die Gewichtung: 3 Punkte Zusammenfassung, 2 x 9 Punkte Sachthemen, 3 Punkte Verortung, 3 x 2 Punkte Gegenwartsbezüge.", "Schreibe mit Textbelegen, nicht mit Stichwortwolken."]
];

const state = JSON.parse(localStorage.getItem("rg-lab-state") || '{"done":[],"cards":0,"lastExam":null}');

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeGerman(value) {
  return String(value)
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function saveState() {
  localStorage.setItem("rg-lab-state", JSON.stringify(state));
  updateStats();
}

function updateStats() {
  document.querySelector("#progress-score").textContent = `${Math.round((state.done.length / modules.length) * 100)}%`;
  document.querySelector("#card-score").textContent = state.cards;
  document.querySelector("#exam-score").textContent = state.lastExam === null ? "-" : `${state.lastExam} P`;
  document.querySelector("#material-count").textContent = materials.length;
  document.querySelector("#material-total").textContent = materials.length;
}

function moduleKeywordPool(module) {
  const stop = new Set(["diese", "dieser", "dieses", "einer", "einem", "einen", "nicht", "oder", "und", "recht", "rechts", "werden", "durch", "thema", "quellen", "historisch"]);
  const text = `${module.title} ${module.focus} ${module.points.join(" ")}`.toLowerCase();
  const words = text.match(/[a-zäöüß]{6,}/g) || [];
  return [...new Set(words.filter((word) => !stop.has(word)))].slice(0, 18);
}

function fallbackControlQuestions(module) {
  const keywords = moduleKeywordPool(module);
  const fallbackTypes = [
    { label: "Abgrenzungsanalyse", minWords: 90, prompt: `Arbeite für "${module.title}" eine präzise Abgrenzung heraus: Was unterscheidet dieses Thema von der unmittelbar vorhergehenden oder nachfolgenden Entwicklungsstufe?` },
    { label: "Quellenindizien", minWords: 100, prompt: `Nenne fünf Indizien, an denen du eine unbekannte Quelle zu "${module.title}" erkennen würdest, und begründe jedes Indiz.` },
    { label: "Kausalmodell", minWords: 110, prompt: "Baue ein Kausalmodell mit Voraussetzungen, rechtlichen Formen, Institutionen, Konflikten und Grenzen." },
    { label: "Prüfungsbaustein", minWords: 120, prompt: "Schreibe einen ausformulierten Baustein für eine sachliche Aussage in der Quellenanalyse." },
    { label: "Fehlerdiagnose", minWords: 100, prompt: `Korrigiere die Aussage: "${module.title} ist vor allem wichtig, weil es später moderner wurde."` }
  ];
  return fallbackTypes.map((type, index) => ({
    ...type,
    expected: keywords.slice(index * 2, index * 2 + 8).concat(keywords.slice(0, 4))
  }));
}

function buildControlQuestions(module) {
  return moduleControlSets[module.title] || fallbackControlQuestions(module);
}

function correctionMessage(score, maxScore, hits, missing, wordCount) {
  if (score >= maxScore - 1) {
    return `Stark. ${wordCount} Wörter, tragende Begriffe erkannt (${hits.join(", ")}). Jetzt noch knapper und mit einem expliziten Textsignal formulieren.`;
  }
  if (score >= Math.ceil(maxScore / 2)) {
    return `Teilweise tragfähig. Treffer: ${hits.join(", ") || "wenige"}. Nachschärfen: ${missing.join(", ")}. Achte auf Kausalität, Abgrenzung und konkrete historische Begriffe.`;
  }
  return `Noch nicht prüfungsfest. ${wordCount} Wörter; es fehlen zentrale Begriffe wie ${missing.join(", ")}. Baue zuerst eine klare These, dann Begründung, dann Rückbindung an eine Quelle.`;
}

function evaluateControlQuestion(button) {
  const moduleIndex = Number(button.dataset.module);
  const questionIndex = Number(button.dataset.question);
  const module = modules[moduleIndex];
  const question = buildControlQuestions(module)[questionIndex];
  const textarea = document.querySelector(`[data-control-answer="${moduleIndex}-${questionIndex}"]`);
  const feedback = document.querySelector(`#control-feedback-${moduleIndex}-${questionIndex}`);
  const answer = normalizeGerman(textarea.value);
  const words = answer.match(/[a-zäöüß]{2,}/g) || [];
  const uniqueHits = [...new Set(question.expected.filter((keyword) => answer.includes(normalizeGerman(keyword))))];
  const missing = question.expected.filter((keyword) => !uniqueHits.includes(keyword)).slice(0, 5);
  const hasCausal = /\b(weil|deshalb|daher|folglich|fuehrt|bedingt|voraussetzung|konsequenz|wirkung)\b/.test(answer);
  const hasContrast = /\b(hingegen|waehrend|anders|aber|jedoch|demgegenueber|nicht nur|sondern)\b/.test(answer);
  const hasSourceLogic = /\b(quelle|text|indiz|begriff|institution|autoritaet|sanktion|verortung)\b/.test(answer);
  let score = 0;
  if (words.length >= question.minWords) score += 2;
  if (uniqueHits.length >= 3) score += 1;
  if (uniqueHits.length >= 6) score += 1;
  if (hasCausal) score += 1;
  if (hasContrast || hasSourceLogic) score += 1;
  const maxScore = 6;
  feedback.innerHTML = `
    <strong>${score}/${maxScore} Kriterien erfüllt</strong>
    <p>${escapeHtml(correctionMessage(score, maxScore, uniqueHits, missing, words.length))}</p>
    <ul>
      <li>Mindestumfang: ${words.length}/${question.minWords} Wörter</li>
      <li>Fachbegriffe: ${uniqueHits.length ? escapeHtml(uniqueHits.join(", ")) : "noch keine tragenden Treffer"}</li>
      <li>Argumentationsstruktur: ${hasCausal ? "Kausalität vorhanden" : "Kausalität fehlt"}; ${hasContrast ? "Abgrenzung vorhanden" : "Abgrenzung schwach"}; ${hasSourceLogic ? "Quellenlogik vorhanden" : "Quellenlogik fehlt"}</li>
    </ul>
  `;
}

function renderModules() {
  const grid = document.querySelector("#module-grid");
  const filter = document.querySelector("#epoch-filter");
  const epochs = [...new Set(modules.map((module) => module.epoch))];
  filter.innerHTML = '<option value="all">Alle Epochen</option>' + epochs.map((epoch) => `<option>${epoch}</option>`).join("");

  const draw = () => {
    const q = document.querySelector("#module-search").value.toLowerCase();
    const selected = filter.value;
    grid.innerHTML = modules
      .filter((module) => selected === "all" || module.epoch === selected)
      .filter((module) => `${module.title} ${module.focus} ${module.points.join(" ")}`.toLowerCase().includes(q))
      .map((module, index) => `
        <article class="module-card">
          <header>
            <h3>${module.title}</h3>
            <span class="pill">${module.epoch}</span>
          </header>
          <p>${module.focus}</p>
          <ul>${module.points.map((point) => `<li>${point}</li>`).join("")}</ul>
          <details class="control-block">
            <summary>5 schwierige Kontrollfragen mit Sofortkorrektur</summary>
            ${buildControlQuestions(module).map((question, questionIndex) => `
              <section class="control-question">
                <p class="eyebrow">${question.label}</p>
                <h4>Aufgabe ${questionIndex + 1}</h4>
                <p>${escapeHtml(typeof question.prompt === "function" ? question.prompt(module) : question.prompt)}</p>
                <textarea data-control-answer="${index}-${questionIndex}" rows="5" placeholder="Ausformulierte Antwort schreiben..."></textarea>
                <button class="button primary" data-check-control data-module="${index}" data-question="${questionIndex}" type="button">Sofort korrigieren</button>
                <div id="control-feedback-${index}-${questionIndex}" class="control-feedback" aria-live="polite"></div>
              </section>
            `).join("")}
          </details>
          <button class="button ${state.done.includes(index) ? "primary" : ""}" data-done="${index}" type="button">
            ${state.done.includes(index) ? "Gefestigt" : "Als gelernt markieren"}
          </button>
        </article>
      `)
      .join("");
  };

  if (!grid.dataset.listenersBound) {
    grid.addEventListener("click", (event) => {
      const doneButton = event.target.closest("[data-done]");
      if (doneButton) {
        const index = Number(doneButton.dataset.done);
        state.done = state.done.includes(index) ? state.done.filter((item) => item !== index) : [...state.done, index];
        saveState();
        draw();
        return;
      }
      const controlButton = event.target.closest("[data-check-control]");
      if (controlButton) evaluateControlQuestion(controlButton);
    });
    grid.dataset.listenersBound = "true";
  }

  document.querySelector("#module-search").addEventListener("input", draw);
  filter.addEventListener("change", draw);
  draw();
}

function materialMatchesChapter(item, chapter) {
  return `${item.folder || ""}/${item.title}`.toLowerCase().includes(chapter.key.toLowerCase());
}

function memorySvg(label) {
  const colors = ["#163f73", "#2f765f", "#a97826", "#9f3f3f"];
  const pick = colors[Math.abs([...label].reduce((sum, char) => sum + char.charCodeAt(0), 0)) % colors.length];
  const icon = {
    "Landkarte": `<path d="M45 138l45-18 45 18 45-18 45 18v112l-45-18-45 18-45-18-45 18z" fill="#fff" stroke="${pick}" stroke-width="8"/><path d="M90 120v112M135 138v112M180 120v112" stroke="${pick}" stroke-width="5"/><circle cx="150" cy="178" r="18" fill="${pick}"/>`,
    "Drei Schilde": `<path d="M75 78h52v78c0 36-26 58-52 70-26-12-52-34-52-70V78z" fill="#fff" stroke="${pick}" stroke-width="7"/><path d="M158 78h52v78c0 36-26 58-52 70-26-12-52-34-52-70V78z" fill="#fff" stroke="#2f765f" stroke-width="7"/><path d="M116 126h52v78c0 36-26 58-52 70-26-12-52-34-52-70v-78z" fill="#fff" stroke="#a97826" stroke-width="7"/>`,
    "Zwei Schwerter": `<path d="M75 230L205 70M205 230L75 70" stroke="${pick}" stroke-width="12" stroke-linecap="round"/><path d="M62 213l35 35M188 248l35-35" stroke="#a97826" stroke-width="13" stroke-linecap="round"/><circle cx="140" cy="150" r="35" fill="#fff" stroke="${pick}" stroke-width="7"/>`,
    "Hof mit Abgabenwegen": `<rect x="64" y="128" width="150" height="92" fill="#fff" stroke="${pick}" stroke-width="7"/><path d="M64 128l75-58 75 58M104 220v-54h70v54M40 252c55-30 142-30 200 0" fill="none" stroke="#2f765f" stroke-width="8"/><path d="M140 70v176" stroke="#a97826" stroke-width="5" stroke-dasharray="8 8"/>`,
    "Lehnspyramide": `<path d="M140 54l106 196H34z" fill="#fff" stroke="${pick}" stroke-width="8"/><path d="M78 168h124M56 210h168M111 112h58" stroke="#a97826" stroke-width="7"/><circle cx="140" cy="86" r="16" fill="${pick}"/>`,
    "Stadttor mit Werkbank": `<path d="M56 236V112h168v124" fill="#fff" stroke="${pick}" stroke-width="8"/><path d="M91 236v-72c0-28 20-47 49-47s49 19 49 47v72M46 112h188M82 86h24M174 86h24" fill="none" stroke="${pick}" stroke-width="7"/><path d="M78 258h124M98 258v-32M182 258v-32" stroke="#a97826" stroke-width="7"/>`,
    "Glossenrad": `<circle cx="140" cy="150" r="84" fill="#fff" stroke="${pick}" stroke-width="8"/><circle cx="140" cy="150" r="30" fill="${pick}"/><path d="M140 66v168M56 150h168M82 92l116 116M198 92L82 208" stroke="#a97826" stroke-width="5"/><rect x="122" y="132" width="36" height="36" fill="#fff"/>`,
    "Druckerpresse": `<rect x="70" y="78" width="140" height="160" fill="#fff" stroke="${pick}" stroke-width="8"/><path d="M92 128h96M92 158h96M92 188h66M116 58h48v40M92 238h96" stroke="#a97826" stroke-width="8"/><circle cx="214" cy="108" r="22" fill="#2f765f"/>`,
    "Krone und Verwaltungsnetz": `<path d="M62 116l40 35 38-62 38 62 40-35-18 92H80z" fill="#fff" stroke="${pick}" stroke-width="8"/><path d="M140 208v50M82 258h116M94 258l-32 28M186 258l32 28" stroke="#2f765f" stroke-width="7"/><circle cx="62" cy="286" r="10" fill="#a97826"/><circle cx="218" cy="286" r="10" fill="#a97826"/>`,
    "Kompass über Gesetzbuch": `<rect x="54" y="170" width="172" height="72" fill="#fff" stroke="${pick}" stroke-width="8"/><circle cx="140" cy="104" r="52" fill="#fff" stroke="#2f765f" stroke-width="8"/><path d="M140 62l18 48-58 34 22-56z" fill="#a97826"/><path d="M82 204h116" stroke="${pick}" stroke-width="6"/>`,
    "Wurzelbaum": `<path d="M140 78v104M140 122c-38 0-58-22-74-50M140 122c38 0 58-22 74-50" stroke="${pick}" stroke-width="10" stroke-linecap="round"/><path d="M140 182c-38 18-55 40-70 72M140 182c38 18 55 40 70 72M140 182v82" stroke="#a97826" stroke-width="7" stroke-linecap="round"/><circle cx="66" cy="72" r="24" fill="#2f765f"/><circle cx="214" cy="72" r="24" fill="#2f765f"/><circle cx="140" cy="58" r="28" fill="#2f765f"/>`,
    "Fabrik und Verfassung": `<path d="M52 234V126l46 28v-28l48 28v-46h84v126z" fill="#fff" stroke="${pick}" stroke-width="8"/><path d="M82 190h28M132 190h28M182 190h28M184 82h40M74 250h132" stroke="#a97826" stroke-width="7"/><rect x="95" y="72" width="76" height="52" fill="#fff" stroke="#2f765f" stroke-width="7"/>`,
    "Gebrochene Waage": `<path d="M140 64v174M86 104h108M86 104l-38 74h76zM194 104l-38 74h76z" fill="#fff" stroke="${pick}" stroke-width="8"/><path d="M132 236h16M86 178l38-36M156 178l76-36" stroke="#9f3f3f" stroke-width="7"/><path d="M126 104l28 134" stroke="#9f3f3f" stroke-width="6"/>`
  }[label] || `<circle cx="140" cy="150" r="90" fill="#fff" stroke="${pick}" stroke-width="8"/><text x="140" y="160" text-anchor="middle" font-size="34" font-weight="800" fill="${pick}">RG</text>`;
  return `<svg viewBox="0 0 280 320" role="img" aria-label="${escapeHtml(label)}">${icon}<text x="140" y="300" text-anchor="middle" font-size="18" font-weight="800" fill="#172033">${escapeHtml(label)}</text></svg>`;
}

function renderLearningMap() {
  const list = document.querySelector("#chapter-list");
  const detail = document.querySelector("#chapter-detail");

  const drawDetail = (chapter) => {
    const linked = materials.filter((item) => materialMatchesChapter(item, chapter));
    const repeatQuestions = chapterRepeatQuestions[chapter.title] || [];
    detail.innerHTML = `
      <div class="chapter-grid">
        <div>
          <p class="eyebrow">${escapeHtml(chapter.period)}</p>
          <h3>${escapeHtml(chapter.title)}</h3>
          <p>${escapeHtml(chapter.exam)}</p>
          <ul>${chapter.essentials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <section class="repeat-box">
            <h4>Repetitionsfragen</h4>
            <ol>${repeatQuestions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ol>
          </section>
          <a class="button primary" href="#training">Dazu üben</a>
        </div>
        <div>
          <div class="memory-scene">${memorySvg(chapter.memory)}</div>
          <h4>Verknüpfte Unterlagen</h4>
          <div class="material-mini-list">
            ${linked.slice(0, 10).map((item) => `<a href="${encodeURI(item.file)}">${escapeHtml(item.title)}</a>`).join("") || "<p>Noch keine direkt zugeordneten Unterlagen.</p>"}
          </div>
        </div>
      </div>
    `;
  };

  list.innerHTML = chapters.map((chapter, index) => `
    <button class="chapter-button ${index === 0 ? "active" : ""}" data-chapter="${index}" type="button">
      <strong>${escapeHtml(chapter.title)}</strong>
      <span>${escapeHtml(chapter.period)} · ${escapeHtml(chapter.memory)}</span>
    </button>
  `).join("");
  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-chapter]");
    if (!button) return;
    list.querySelectorAll(".chapter-button").forEach((item) => item.classList.toggle("active", item === button));
    drawDetail(chapters[Number(button.dataset.chapter)]);
  });
  drawDetail(chapters[0]);
}

function renderTimeline() {
  const timelineEl = document.querySelector("#timeline");
  const detail = document.querySelector("#timeline-detail");
  const draw = (filter = "all") => {
    const visible = timeline.filter(([, , type]) => filter === "all" || type === filter);
    timelineEl.innerHTML = visible
      .map(([year, title, type, note], index) => `
      <button class="timeline-item" data-timeline-index="${timeline.indexOf(visible[index])}" type="button">
        <div class="timeline-year">${year}</div>
        <i class="timeline-pin ${type}"></i>
        <div>
          <div class="timeline-title">${escapeHtml(title)}</div>
          <div class="timeline-note">${escapeHtml(note)}</div>
        </div>
      </button>
    `)
    .join("");
  };
  const showDetail = (item = timeline[0]) => {
    const [year, title, type, note] = item;
    const related = chapters.filter((chapter) => `${chapter.title} ${chapter.essentials.join(" ")}`.toLowerCase().includes(title.split(" ")[0].toLowerCase())).slice(0, 2);
    detail.innerHTML = `
      <strong>${escapeHtml(year)} · ${escapeHtml(title)}</strong>
      <p>${escapeHtml(note)}</p>
      <p class="timeline-note">Typ: ${type === "law" ? "Rechtsquelle" : type === "work" ? "Werk" : "Ereignis"}. Lernfrage: Welche Institution oder welches Rechtsproblem wird dadurch sichtbar?</p>
      ${related.length ? `<p>${related.map((chapter) => escapeHtml(chapter.title)).join(" · ")}</p>` : ""}
    `;
  };
  document.querySelectorAll("[data-timeline-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-timeline-filter]").forEach((item) => item.classList.toggle("active", item === button));
      draw(button.dataset.timelineFilter);
    });
  });
  timelineEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-timeline-index]");
    if (!button) return;
    showDetail(timeline[Number(button.dataset.timelineIndex)]);
  });
  draw();
  showDetail();
}

function renderMnemonics() {
  document.querySelector("#mnemonic-grid").innerHTML = chapters.map((chapter) => `
    <article class="mnemonic-card">
      <div class="memory-scene">${memorySvg(chapter.memory)}</div>
      <p class="eyebrow">${escapeHtml(chapter.period)}</p>
      <h3>${escapeHtml(chapter.title)}</h3>
      <div class="memory-hooks">
        <span><b>Bild</b>${escapeHtml(chapter.memory)}</span>
        <span><b>Problem</b>${escapeHtml(chapter.essentials[0])}</span>
        <span><b>Rechtsform</b>${escapeHtml(chapter.essentials[1])}</span>
        <span><b>Prüfung</b>${escapeHtml(chapter.exam)}</span>
      </div>
      <section class="repeat-box compact">
        <h4>Repetitionsfragen</h4>
        <ol>${(chapterRepeatQuestions[chapter.title] || []).map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ol>
      </section>
    </article>
  `).join("");
}

function renderTrainingLadder() {
  document.querySelector("#training-ladder").innerHTML = examLadder.map(([number, title, instruction, task]) => `
    <article class="training-step">
      <span class="step-number">${number}</span>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(instruction)}</p>
        <strong>${escapeHtml(task)}</strong>
      </div>
      <label>
        Arbeitsnotiz
        <textarea data-ladder="${number}" placeholder="Hier üben..."></textarea>
      </label>
    </article>
  `).join("");
}

function renderMaterials() {
  const grid = document.querySelector("#material-grid");
  const filter = document.querySelector("#material-filter");
  const visible = document.querySelector("#material-visible");
  const categories = [...new Set(materials.map((item) => item.category))].sort();
  filter.innerHTML = '<option value="all">Alle Materialien</option>' + categories.map((category) => `<option>${category}</option>`).join("");

  const draw = () => {
    const q = document.querySelector("#material-search").value.toLowerCase();
    const selected = filter.value;
    const list = materials
      .filter((item) => selected === "all" || item.category === selected)
      .filter((item) => `${item.title} ${item.category} ${item.keywords.join(" ")} ${item.excerpt}`.toLowerCase().includes(q));
    visible.textContent = list.length;
    grid.innerHTML = list.map((item) => `
      <article class="material-card">
        <div class="material-meta">
          <span class="pill">${escapeHtml(item.category)}</span>
          ${item.viewFile ? '<span class="pill">PDF-Ansicht</span>' : '<span class="pill">GoodNotes</span>'}
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="material-folder">${escapeHtml(item.folder || "Root")}</p>
        ${item.excerpt ? `<details><summary>Auszug anzeigen</summary><p>${escapeHtml(item.excerpt)}</p></details>` : '<p>Für dieses Material ist keine zuverlässige Textvorschau verfügbar. Die Datei ist dennoch vollständig eingebunden.</p>'}
        <div class="material-actions">
          ${item.viewFile ? `<a class="button primary" href="${encodeURI(item.viewFile)}">PDF ansehen</a>` : ""}
          <a class="button subtle" href="${encodeURI(item.file)}" download>GoodNotes herunterladen</a>
        </div>
        <div class="keyword-row">
          ${item.keywords.slice(0, 6).map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("")}
        </div>
      </article>
    `).join("");
  };

  document.querySelector("#material-search").addEventListener("input", draw);
  filter.addEventListener("change", draw);
  draw();
}

function evaluate(key) {
  const feedback = document.querySelector(`#feedback-${key}`);
  const scope = document.querySelector(`#${key}`);
  const text = [...scope.querySelectorAll("textarea")].map((area) => area.value.toLowerCase()).join(" ");
  const rubric = rubrics[key];
  let total = 0;
  const max = rubric.reduce((sum, item) => sum + item[1], 0);
  const cards = rubric.map(([label, points, words]) => {
    const hits = words.filter((word) => text.includes(word.toLowerCase()));
    const score = Math.min(points, Math.round((hits.length / Math.max(3, words.length * 0.55)) * points));
    total += score;
    const missing = words.filter((word) => !hits.includes(word)).slice(0, 4);
    return `
      <div class="feedback-card">
        <strong>${label}: ${score}/${points}</strong>
        <div class="meter"><span style="width:${Math.round((score / points) * 100)}%"></span></div>
        <p>Treffer: ${hits.length ? hits.join(", ") : "noch keine tragenden Begriffe erkannt"}.</p>
        <p>Nachschärfen: ${missing.length ? missing.join(", ") : "Argumentation verdichten und Textbelege setzen"}.</p>
      </div>
    `;
  });
  const scaled = key === "source" ? total : Math.round((total / max) * (key === "absolutism" ? 12 : key === "revolution" ? 8 : 10));
  const examEquivalent = key === "source" ? total : scaled;
  state.lastExam = key === "source" ? total : Math.max(state.lastExam || 0, examEquivalent);
  saveState();
  feedback.innerHTML = `
    <div class="feedback-card">
      <strong>Ergebnis: ${total}/${max} Rohpunkte</strong>
      <p>Diese Selbstkorrektur erkennt tragende Stichworte und Themenfelder. Für eine starke Antwort brauchst du zusätzlich Textbelege, klare Gewichtung und saubere Übergänge.</p>
    </div>
    ${cards.join("")}
  `;
}

function setupExam() {
  const sourceSelect = document.querySelector("#source-select");
  const sourceText = document.querySelector("#dynamic-source");
  const sourceLink = document.querySelector("#source-link");
  const importedSources = materials
    .filter((item) => item.category === "Quellentext")
    .sort((a, b) => a.title.localeCompare(b.title, "de", { numeric: true }));
  sourceSelect.innerHTML = '<option value="exam">FS 2025: Studium generale</option>' + importedSources
    .map((item, index) => `<option value="${index}">${escapeHtml(item.title)}</option>`)
    .join("");
  sourceSelect.addEventListener("change", () => {
    if (sourceSelect.value === "exam") {
      sourceText.textContent = "Der Text begründet die Wissenschaft als Gabe Gottes, ordnet mit apostolischer Autorität ein Studium generale mit Theologie, kanonischem und weltlichem Recht an, gewährt Privilegien, Freiheiten und Immunitäten für Lehrende und Studierende und droht kirchliche Sanktionen gegen Störungen an. Bei Bedarf kann der weltliche Arm zur Durchsetzung beigezogen werden.";
      sourceLink.href = "assets/source/sachverhalt-fs-2025.pdf";
      sourceLink.textContent = "Quelle öffnen";
      return;
    }
    const item = importedSources[Number(sourceSelect.value)];
    const solution = materials.find((candidate) => candidate.title === item.title.replace("Text ", "Zu Text "));
    sourceText.textContent = item.excerpt || "Dieser Quellentext ist vollständig eingebunden. Öffne die Datei für die Arbeit am Original.";
    sourceLink.href = item.viewFile || item.file;
    sourceLink.textContent = item.viewFile ? "PDF ansehen" : "GoodNotes herunterladen";
  });

  document.querySelectorAll("[data-exam-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-exam-tab]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".exam-pane").forEach((pane) => pane.classList.toggle("active", pane.id === button.dataset.examTab));
    });
  });
  document.querySelectorAll("[data-evaluate]").forEach((button) => {
    button.addEventListener("click", () => evaluate(button.dataset.evaluate));
  });
}

function setupTimer() {
  let remaining = 180 * 60;
  let active = false;
  let interval = null;
  const label = document.querySelector("#timer-label");
  const button = document.querySelector("#timer-toggle");
  const draw = () => {
    const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
    const seconds = String(remaining % 60).padStart(2, "0");
    label.textContent = `${minutes}:${seconds}`;
  };
  button.addEventListener("click", () => {
    active = !active;
    button.textContent = active ? "Ⅱ" : "▶";
    if (active) {
      interval = setInterval(() => {
        remaining = Math.max(0, remaining - 1);
        draw();
        if (remaining === 0) clearInterval(interval);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  });
  draw();
}

function setupCards() {
  let index = 0;
  let flipped = false;
  const card = document.querySelector("#flashcard");
  const draw = () => {
    card.textContent = flipped ? cards[index][1] : cards[index][0];
  };
  document.querySelector("#flip-card").addEventListener("click", () => {
    flipped = !flipped;
    draw();
  });
  document.querySelector("#known-card").addEventListener("click", () => {
    state.cards += 1;
    saveState();
    index = (index + 1) % cards.length;
    flipped = false;
    draw();
  });
  document.querySelector("#next-card").addEventListener("click", () => {
    index = (index + 1) % cards.length;
    flipped = false;
    draw();
  });
  draw();
}

function setupMatch() {
  const area = document.querySelector("#match-area");
  const draw = () => {
    const round = [...matchPool].sort(() => Math.random() - 0.5).slice(0, 4);
    const answers = round.map((item) => item[1]).sort(() => Math.random() - 0.5);
    area.innerHTML = round.map(([term], index) => `
      <div class="match-row">
        <strong>${term}</strong>
        <select data-answer="${round[index][1]}">
          <option value="">Zuordnung wählen</option>
          ${answers.map((answer) => `<option>${answer}</option>`).join("")}
        </select>
      </div>
    `).join("");
  };
  area.addEventListener("change", (event) => {
    const select = event.target.closest("select");
    if (!select) return;
    select.style.borderColor = select.value === select.dataset.answer ? "var(--green)" : "var(--red)";
  });
  document.querySelector("#new-match").addEventListener("click", draw);
  draw();
}

function setupCases() {
  const box = document.querySelector("#case-drill");
  const current = cases[Math.floor(Math.random() * cases.length)];
  box.innerHTML = `
    <p>${current.text}</p>
    ${current.options.map((option) => `
      <label class="case-option">
        <input type="radio" name="case" value="${option}" /> ${option}
      </label>
    `).join("")}
    <p id="case-feedback"></p>
  `;
  document.querySelector("#case-check").addEventListener("click", () => {
    const chosen = document.querySelector('input[name="case"]:checked');
    document.querySelector("#case-feedback").textContent = chosen?.value === current.answer
      ? "Richtig. Jetzt mit zwei historischen Stichworten begründen."
      : `Noch nicht. Tragender Themenkreis: ${current.answer}.`;
  });
}

document.querySelector("#reset-progress").addEventListener("click", () => {
  state.done = [];
  state.cards = 0;
  state.lastExam = null;
  saveState();
  renderModules();
});

renderModules();
renderLearningMap();
renderMaterials();
renderTimeline();
renderMnemonics();
renderTrainingLadder();
setupExam();
setupTimer();
setupCards();
setupMatch();
setupCases();
updateStats();
