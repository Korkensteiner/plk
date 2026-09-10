<a id="plk-start"></a>

# 📚 PLK

🌐 **[Deutsch](#deutsch) · [English](#english)**

---

<a id="deutsch"></a>

## 🇩🇪 Deutsch

### 🧭 Inhaltsverzeichnis

- [🎯 Vision](#vision-de)
- [🧩 Grundprinzipien](#prinzipien-de)
- [💭 Noch offene Entscheidungen](#offen-de)

<a id="vision-de"></a>

### 🎯 Vision

PLK soll eine React-Seite werden, die Wissen zu verschiedensten Coding-Themen vermittelt. Markdown-Dateien bilden die zentrale Inhaltsquelle. Die Inhalte sollen kurz und knapp sein und durch gut durchdachte Codebeispiele verständlich werden.

Diese README hält die gemeinsame Projektvision fest. Sie beschreibt das Zielbild, nicht den bereits implementierten Funktionsumfang.

<a id="prinzipien-de"></a>

### 🧩 Grundprinzipien

- 📄 **Markdown als Quelle:** Die Inhalte werden in Markdown-Dateien gepflegt und vom Frontend ausgelesen.
- 📐 **Einheitliches Schema:** Alle Markdown-Dateien folgen demselben Schema, damit ihre einzelnen Elemente zuverlässig ausgelesen und verarbeitet werden können.
- 🌍 **Immer zweisprachig:** Jeder Markdown-Inhalt existiert auf Deutsch und Englisch. Beide Sprachversionen werden immer geladen.
- 🗣️ **Automatische Standardsprache:** Die Standardsprache wird automatisch anhand der Browsersprache oder einer vergleichbaren Spracheinstellung ermittelt.
- ⚡ **Caching der Dateien:** Das Frontend liest die Markdown-Dateien ein und cached sie.
- 🧱 **Eigene Frontend-Elemente:** Jedes ausgelesene Markdown-Element erhält ein eigenes Frontend-Element. Die Darstellung erfolgt über passende React-Komponenten für die jeweiligen Elementtypen.
- 🗂️ **Topic-Auswahl:** Nutzer können Themen auswählen. Wie diese Auswahl aussieht, wird später festgelegt.
- 💡 **Kompakte Wissensvermittlung:** Erklärungen konzentrieren sich auf das Wesentliche. Codebeispiele sind bewusst gewählt, nachvollziehbar und passend zum jeweiligen Thema.

<a id="offen-de"></a>

### 💭 Noch offene Entscheidungen

- Das konkrete Markdown-Schema und die unterstützten Elementtypen.
- Die Ablage und Zuordnung zusammengehöriger deutscher und englischer Dateien.
- Die Caching-Strategie und die Aktualisierung zwischengespeicherter Inhalte.
- Die genaue Spracherkennung und die Ersatzsprache bei nicht unterstützten Browsersprachen.
- Das Aussehen und die Bedienung der Topic-Auswahl.
- Die Gestaltung der einzelnen Frontend-Elemente.

Diese Details werden gemeinsam konkretisiert, bevor die jeweilige Funktion umgesetzt wird.

[↑ Zur Sprachauswahl](#plk-start)

---

<a id="english"></a>

## 🇬🇧 English

### 🧭 Contents

- [🎯 Vision](#vision-en)
- [🧩 Core principles](#principles-en)
- [💭 Decisions still open](#open-en)

<a id="vision-en"></a>

### 🎯 Vision

PLK is intended to become a React site that shares knowledge across a wide range of coding topics. Markdown files are the central content source. Content should be short and concise, supported by carefully thought-out code examples that make it easy to understand.

This README records the shared project vision. It describes the intended outcome, not the functionality already implemented.

<a id="principles-en"></a>

### 🧩 Core principles

- 📄 **Markdown as the source:** Content is maintained in Markdown files and read by the frontend.
- 📐 **Consistent schema:** All Markdown files follow the same schema so their individual elements can be reliably extracted and processed.
- 🌍 **Always bilingual:** Every Markdown entry exists in German and English. Both language versions are always loaded.
- 🗣️ **Automatic default language:** The default language is automatically determined from the browser language or a comparable language setting.
- ⚡ **File caching:** The frontend reads the Markdown files and caches them.
- 🧱 **Dedicated frontend elements:** Each parsed Markdown element receives its own frontend element. Appropriate React components render the respective element types.
- 🗂️ **Topic selection:** Users can select topics. The appearance of this selection will be decided later.
- 💡 **Concise learning content:** Explanations focus on the essentials. Code examples are deliberately chosen, easy to follow, and relevant to the topic.

<a id="open-en"></a>

### 💭 Decisions still open

- The exact Markdown schema and supported element types.
- How matching German and English files are stored and associated.
- The caching strategy and how cached content is refreshed.
- The exact language detection method and fallback language for unsupported browser languages.
- The appearance and interaction of the topic selection.
- The design of the individual frontend elements.

These details will be refined together before implementing the respective feature.

[↑ Back to language selection](#plk-start)
