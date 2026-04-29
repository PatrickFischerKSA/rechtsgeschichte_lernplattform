# Rechtsgeschichte Labor

Eine grosse statische Lern- und Repetitionsplattform für Rechtsgeschichte.

## Inhalt

- Stoffteil mit zwölf grossen Themenfeldern
- Lernkarte mit Vorlesungs- und Übungsstruktur
- animierter, filterbarer Zeitstrahl
- mnemotechnische Bildanker für die grossen Stoffblöcke
- siebenstufiger Übungspfad bis zur Quellenanalyse
- Materialbibliothek mit vollständigem Import aus dem Dokumentenordner
- Prüfungssimulator nach 60-Punkte-Logik
- Selbstkorrektur mit gewichteten Rubriken
- Karteikarten, Zuordnungstraining und Mini-Fälle
- Quellenmaterial im Ordner `assets/source`

## Importstand

- 104 `.goodnotes`-Dateien aus `/Users/patrickfischer/Documents/(1) Rechtsgeschichte-1` sind unter `assets/source/rechtsgeschichte-1/` eingebunden.
- Alle 104 Dateien sind in `assets/data/dropbox-materials.js` katalogisiert.
- Die Materialbibliothek ist nach Quellentexten, Lösungen/Kommentaren, Zeitstrahlen, Orientierung und Stoff filterbar.
- Die Ordnerstruktur bleibt erhalten, damit gleichnamige Dateien wie mehrere `Übersicht.goodnotes` nicht überschrieben werden.
- Der temporäre Download- und Entpackordner `_dropbox_import/` ist per `.gitignore` von GitHub ausgeschlossen.

## Lokal öffnen

Die Plattform benötigt keinen Build-Schritt. Öffne `index.html` im Browser oder starte einen einfachen lokalen Server:

```bash
python3 -m http.server 8080
```

Danach ist die Seite unter `http://localhost:8080` erreichbar.

## GitHub Pages

1. Repository erstellen.
2. Alle Dateien dieses Ordners in das Repository legen.
3. In den Repository-Einstellungen GitHub Pages für den Branch `main` und den Root-Ordner aktivieren.

## Struktur

```text
rechtsgeschichte_lernplattform/
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    └── source/
```

Die Anwendung speichert Lernstand, Kartenfortschritt und letzte Selbstkorrektur im Browser über `localStorage`.
