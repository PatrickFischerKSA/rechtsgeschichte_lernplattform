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
          <button class="button ${state.done.includes(index) ? "primary" : ""}" data-done="${index}" type="button">
            ${state.done.includes(index) ? "Gefestigt" : "Als gelernt markieren"}
          </button>
        </article>
      `)
      .join("");
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-done]");
    if (!button) return;
    const index = Number(button.dataset.done);
    state.done = state.done.includes(index) ? state.done.filter((item) => item !== index) : [...state.done, index];
    saveState();
    draw();
  });

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
    detail.innerHTML = `
      <div class="chapter-grid">
        <div>
          <p class="eyebrow">${escapeHtml(chapter.period)}</p>
          <h3>${escapeHtml(chapter.title)}</h3>
          <p>${escapeHtml(chapter.exam)}</p>
          <ul>${chapter.essentials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
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
      <ol>
        <li>${escapeHtml(chapter.memory)} zuerst vorstellen.</li>
        <li>Daran drei Begriffe befestigen: ${chapter.essentials.slice(0, 3).map((item) => escapeHtml(item.split(" ").slice(0, 4).join(" "))).join(" · ")}.</li>
        <li>Danach eine Prüfungsfrage formulieren: ${escapeHtml(chapter.exam)}</li>
      </ol>
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
          <span class="pill">${item.notes} Notizseiten</span>
          <span class="pill">${item.attachments} Anhänge</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="material-folder">${escapeHtml(item.folder || "Root")}</p>
        <details>
          <summary>Auszug anzeigen</summary>
          <p>${escapeHtml(item.excerpt || "Kein OCR-Auszug vorhanden, Quelldatei ist trotzdem vollständig eingebunden.")}</p>
        </details>
        <a class="button" href="${encodeURI(item.file)}">Quelldatei öffnen</a>
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
    sourceLink.href = item.file;
    sourceLink.textContent = solution ? "Text öffnen; Lösung in Bibliothek" : "Quelle öffnen";
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
