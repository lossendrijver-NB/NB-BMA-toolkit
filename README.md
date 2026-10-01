# NOBEARS Knowledge Hub

# Build a searchable knowledge system for NOBEARS

Je bent een ervaren product designer en senior frontend developer. Je gaat een interne webapplicatie ontwerpen en bouwen voor NOBEARS, een digitaal bureau dat werkt aan merkstrategie, branding, campagnes en digitale ervaringen.

Ik heb twee screenshots uit Figma toegevoegd als visuele referentie en een bestaande applicatie als conceptuele inspiratie:

https://askus.dixonbaxi.com/

Gebruik AskUs als inspiratie voor de manier waarop gebruikers kennis kunnen ontdekken via een toegankelijke, zoekgerichte interface. Kopieer het ontwerp niet letterlijk.

De Figma-screenshots zijn leidend voor de visuele richting, compositie, typografie, kleuren, componenten en layout.

**Bouw een daadwerkelijk werkende applicatie, geen statische mock-up.**

---

# 1. Het concept

De applicatie is een interne kennisbank waarmee collega's binnen NOBEARS snel inzicht krijgen in de ambities van onze klanten, de diensten die we aanbieden en de projecten waarin we die diensten hebben toegepast.

Het doel is om collega's te helpen begrijpen:

- Welke klantambities we kennen en begrijpen.
- Welke diensten we kunnen inzetten om deze ambities waar te maken.
- In welke projecten we deze diensten al hebben toegepast.
- Bij welke collega ze terechtkunnen voor meer informatie.

De applicatie moet bijdragen aan kennisdeling, interne onboarding en het benutten van de expertise die binnen NOBEARS aanwezig is.

De primaire doelgroep is iedereen binnen NOBEARS. Ga er niet vanuit dat iedere gebruiker alle diensten, disciplines en cases kent.

## Het centrale principe

Dit is geen traditionele website met een zoekfunctie.

**This is a searchable knowledge system with a visual interface.**

De gebruiker moet op een laagdrempelige manier kunnen ontdekken wat NOBEARS doet, zonder eerst de interne organisatiestructuur, diensten of terminologie te hoeven kennen.

De onderliggende datastructuur mag relationeel en uitgebreid zijn. De gebruikerservaring moet juist eenvoudig, overzichtelijk en intuïtief aanvoelen.

De zoekfunctie is de primaire navigatie.

De applicatie heeft twee primaire ingangen:

1. Vanuit een klantambitie ontdekken welke diensten relevant zijn.
2. Rechtstreeks een dienst ontdekken en bekijken in welke cases deze is toegepast.

De inhoudelijke structuur is:

Ambitie ↔ Dienst ↔ Case

Contactpersonen zijn gekoppeld aan ambities en/of diensten.

Belangrijk: dit is een inhoudelijk model, geen strikt hiërarchische boom. Een dienst kan bij meerdere ambities horen en een case kan meerdere diensten demonstreren.

---

# 2. De drie contenttypen

De applicatie bevat drie primaire contenttypen: Ambities, Diensten en Cases.

## 2.1 Ambities

Een ambitie beschrijft wat een klant wil bereiken, verbeteren of veranderen.

Voorbeelden uit het huidige concept:

- Een sterk merk neerzetten
- Een nieuw product of dienst lanceren
- Mijn merkbekendheid vergroten
- Een nieuwe doelgroep bereiken
- Een nieuwe markt betreden
- Mijn marketingverhaal beter vertellen
- De customer journey verbeteren
- Meer en/of betere leads genereren
- Nieuwe medewerkers werven
- Mijn merk intern laten doorleven
- Mijn aanbod beter onder de aandacht brengen

Dit zijn voorbeelden van content. Zorg dat de datastructuur eenvoudig uitbreidbaar is.

Een ambitie bevat minimaal:

- Unieke ID
- Titel
- Slug
- Korte beschrijving
- Uitgebreide toelichting
- Zoektermen, synoniemen of alternatieve formuleringen
- Gekoppelde diensten
- Optionele toegewezen contactpersoon

### Ambitie-detailpagina

De ambitiepagina helpt de gebruiker begrijpen wat de klant probeert te bereiken en welke diensten NOBEARS hiervoor kan inzetten.

De pagina bevat:

- Een terugknop
- Een titel
- Een korte introductie
- Een uitgebreide toelichting
- Een overzicht van de direct gekoppelde diensten
- Optioneel een contactblok met de toegewezen contactpersoon

De sectie met diensten krijgt bijvoorbeeld de titel:

"Onze diensten die op deze ambitie aansluiten"

Toon uitsluitend diensten die expliciet aan de betreffende ambitie zijn gekoppeld.

Toon op de ambitiepagina geen cases.

De ambitie is het startpunt om het vraagstuk te begrijpen. De diensten zijn de vervolgstap.

## 2.2 Diensten

Een dienst beschrijft wat NOBEARS daadwerkelijk aanbiedt.

Voorbeelden:

- Merkstrategie & positionering
- Huisstijl
- Campagne
- Digitale strategie
- UX/UI design

Gebruik deze voorbeelden als startpunt voor realistische demo-content. De uiteindelijke diensten moeten eenvoudig te beheren en uit te breiden zijn.

Een dienst bevat minimaal:

- Unieke ID
- Titel
- Slug
- Korte beschrijving
- Uitgebreide toelichting
- Omslagafbeelding of visual
- Zoektermen, synoniemen of alternatieve formuleringen
- Gekoppelde ambities
- Gekoppelde cases
- Optionele toegewezen contactpersoon

### Dienst-detailpagina

De dienstpagina helpt de gebruiker begrijpen wat de dienst inhoudt en laat zien hoe NOBEARS deze in de praktijk heeft toegepast.

De pagina bevat:

- Een terugknop
- Een titel
- Een korte introductie
- Een uitgebreide toelichting
- Een optioneel contactblok met de toegewezen contactpersoon
- Een overzicht van de gekoppelde cases

De sectie met cases krijgt bijvoorbeeld de titel:

"Cases waarin we deze dienst hebben ingezet"

Toon uitsluitend cases die expliciet aan de betreffende dienst zijn gekoppeld.

Een dienst kan bij meerdere ambities horen. De gebruiker hoeft deze kruisverbanden niet actief te ontdekken via aanvullende navigatie. Houd de interface gericht op de huidige taak.

## 2.3 Cases

Een case is een concreet project waarin NOBEARS een of meerdere diensten heeft toegepast.

Een case bevat minimaal:

- Unieke ID
- Klantnaam
- Titel
- Slug
- Omslagfoto
- Korte beschrijving
- Gekoppelde diensten

Een case kan aan meerdere diensten gekoppeld zijn.

### Caseweergave

Cases worden in V1 uitsluitend als kaarten op een dienst-detailpagina getoond.

Een casekaart bevat:

- Omslagfoto
- Klantnaam
- Titel
- Korte beschrijving

Een aparte case-detailpagina valt buiten de scope van V1.

Maak de datastructuur wel geschikt om deze mogelijkheid later toe te voegen.

---

# 3. Contactpersonen

Contactpersonen vormen een belangrijk onderdeel van de applicatie.

Het doel is dat collega's niet alleen relevante informatie kunnen vinden, maar ook weten bij wie ze terechtkunnen met vragen over een ambitie of dienst.

Een contactpersoon kan aan één of meerdere ambities en/of diensten gekoppeld zijn.

Per ambitie en per dienst kan maximaal één contactpersoon worden toegewezen.

Een contactpersoon bevat minimaal:

- Unieke ID
- Naam
- Functie of rol
- Profielfoto
- E-mailadres
- Telefoonnummer (optioneel)
- Eventuele aanvullende contactinformatie

### Contactblok

Wanneer een ambitie of dienst een toegewezen contactpersoon heeft, toon dan een contactblok op de betreffende detailpagina.

Het blok bevat:

- Profielfoto
- Naam
- Functie of rol
- Contactgegevens
- Een duidelijke actie om contact op te nemen

Gebruik voor e-mail een werkende mailto-link. Gebruik voor een telefoonnummer, wanneer aanwezig, een werkende tel-link.

Het contactblok moet passen binnen de bestaande visuele stijl en mag de primaire inhoud niet overheersen.

Als er geen contactpersoon is toegewezen, toon dan geen leeg of kapot contactblok.

### Contactpersonen in het contentmodel

Maak contactpersonen een zelfstandig contenttype, met relaties naar ambities en diensten.

Voorkom dat contactgegevens op meerdere plekken als losse tekst worden opgeslagen. Wanneer een contactpersoon verandert, moet de wijziging op alle gekoppelde plekken doorwerken.

---

# 4. Home: de zoekervaring

De homepagina is het centrale startpunt en de belangrijkste interface van de applicatie.

Gebruik het eerste Figma-ontwerp als visuele basis.

De pagina bevat:

- NOBEARS-branding
- Een grote centrale zoekbalk
- Een geïntegreerde switcher voor Ambities en Diensten
- Een overzicht met voorgestelde zoektermen
- Een subtiele visuele achtergrond met gradient en dot pattern

De gebruiker moet direct begrijpen dat hij of zij hier kennis kan vinden.

## 4.1 De zoekbalk

De zoekbalk bevat:

- Een tekstveld
- Een placeholder die aansluit op de actieve zoekmodus
- Een geïntegreerde switcher tussen Ambities en Diensten

De switcher heeft twee standen:

- Ambitie
- Dienst

De switcher maakt duidelijk binnen welk contenttype de gebruiker zoekt.

De gebruiker kan op elk moment tussen beide typen wisselen.

## 4.2 Voorgestelde zoektermen

Wanneer de homepagina wordt geopend en het zoekveld leeg is, toon je alle voorgestelde zoektermen voor de actieve zoekmodus.

Bij de modus Ambitie toon je de beschikbare ambities.

Bij de modus Dienst toon je de beschikbare diensten.

Gebruik hiervoor klikbare chips, zoals in het Figma-ontwerp.

Wanneer de gebruiker begint te typen:

- Filter de voorgestelde zoektermen direct.
- Toon uitsluitend resultaten van de actieve zoekmodus.
- Filter op basis van de titel en relevante zoektermen, synoniemen en alternatieve formuleringen.
- Maak de filtering niet hoofdlettergevoelig.
- Gebruik een tolerante matchingstrategie die kleine typefouten kan opvangen.
- Houd de resultaten overzichtelijk.

Toon dus niet standaard alle ambities én diensten tegelijk. Dit is een bewuste keuze om visuele ruis te beperken.

## 4.3 Automatische herkenning van het contenttype

Hoewel de gebruiker met de switcher een zoekmodus kiest, moet de applicatie herkennen wanneer de zoekopdracht waarschijnlijk bij het andere contenttype hoort.

Voorbeeld:

De gebruiker staat op Ambitie en typt:

"Huisstijl"

Huisstijl is een dienst. De applicatie herkent dit en schakelt automatisch over naar de modus Dienst.

De suggesties worden vervolgens gevuld met relevante diensten.

Ander voorbeeld:

De gebruiker staat op Dienst en typt:

"Een sterk merk neerzetten"

Dit is een ambitie. De applicatie schakelt automatisch naar de modus Ambitie.

### Regels voor automatische herkenning

Gebruik voor V1 een voorspelbare, lokale zoeklogica op basis van de beschikbare content.

Gebruik geen externe AI-API, LLM of embedding-infrastructuur.

De herkenning mag gebruikmaken van:

- Exacte titels
- Slugs
- Zoektermen
- Synoniemen
- Alternatieve formuleringen
- Fuzzy matching

Een sterke match op een ander contenttype mag de actieve modus automatisch wijzigen.

Voorkom onnodig heen en weer schakelen tijdens het typen.

Gebruik bijvoorbeeld een korte debounce of een duidelijke matchdrempel als dat nodig is.

Wanneer de zoekterm zowel bij een ambitie als een dienst past, behoud dan de huidige modus, tenzij er een duidelijk sterkere match is voor het andere type.

Een onzekere match mag niet tot willekeurig wisselen leiden.

De zoekfunctie moet eenvoudig uit te breiden zijn met semantische of AI-ondersteunde zoekmogelijkheden in een latere versie.

## 4.4 Zoeken en navigeren

De gebruiker kan een voorgestelde zoekterm aanklikken om direct naar de bijbehorende detailpagina te navigeren.

Wanneer de gebruiker een zoekopdracht invoert en op Enter drukt:

- Navigeer bij een duidelijke match naar de bijbehorende detailpagina.
- Gebruik de automatische herkenning om het juiste contenttype te bepalen.
- Bij meerdere mogelijke resultaten: toon de relevante suggesties en laat de gebruiker kiezen.
- Bij geen bruikbaar resultaat: toon de no-results state.

Voorkom dat Enter zonder duidelijke match willekeurig een pagina opent.

De zoekbalk moet bruikbaar zijn met muis, toetsenbord en touch.

---

# 5. Geen zoekresultaten: de no-results state

Wanneer de applicatie geen geschikte match vindt, toon je een ontworpen no-results state.

Dit is geen generieke browser-404 en ook geen technische foutmelding.

De interface moet behulpzaam en menselijk aanvoelen.

Gebruik het principe:

"We herkennen je zoekopdracht niet."

Daaronder:

"Bedoel je soms..."

Toon vervolgens een beperkt aantal voorgestelde diensten die op basis van de zoekterm mogelijk relevant zijn.

Deze suggesties moeten aanklikbaar zijn en leiden naar de betreffende dienst-detailpagina.

Als er geen relevante diensten gevonden kunnen worden, toon dan een passende fallback in plaats van willekeurige aanbevelingen.

### Contactmogelijkheid

De no-results state bevat daarnaast een contactblok.

Bijvoorbeeld:

"Niet gevonden wat je zoekt? Neem contact op met [naam]."

Toon in dit blok:

- Profielfoto
- Naam
- Functie of rol
- E-mailadres
- Eventueel telefoonnummer

De contactpersoon moet centraal configureerbaar zijn. Gebruik hiervoor een expliciete standaardcontactpersoon of een andere eenvoudige, beheerbare fallback.

Maak de contactpersoon niet afhankelijk van toevallige zoekresultaten of willekeurige selectie.

Als er geen relevante contactpersoon beschikbaar is, toon dan een nette fallback zonder fictieve contactgegevens.

Gebruik het contactblok als een uitnodiging om intern verder te komen, niet als een opdringerige conversiecomponent.

---

# 6. Navigatie en gebruikersflow

De applicatie heeft drie primaire paginatypen:

- Home
- Ambitie-detailpagina
- Dienst-detailpagina

De gebruiker kan twee routes volgen.

## Flow A: rechtstreeks naar een dienst

Home → Dienst

Op de dienstpagina gaat de terugknop terug naar Home.

## Flow B: via een ambitie naar een dienst

Home → Ambitie → Dienst

Op de ambitiepagina gaat de terugknop altijd terug naar Home.

Op de dienstpagina gaat de terugknop terug naar de ambitiepagina waar de gebruiker vandaan kwam.

Dit betekent dat dezelfde dienst via meerdere ambities geopend kan worden. De terugknop moet dan terugkeren naar de juiste context.

### NOBEARS-logo

Het NOBEARS-logo is op iedere pagina een home-link.

Klikken op het logo brengt de gebruiker altijd terug naar Home, ongeacht de navigatiegeschiedenis.

### Technische implementatie

Gebruik routing die directe URL's, browsernavigatie en refreshes ondersteunt.

Bewaar de relevante navigatiecontext wanneer een dienst vanuit een ambitie wordt geopend.

Gebruik bij voorkeur normale routegeschiedenis waar dit logisch is, zodat de browserknoppen Back en Forward zich voorspelbaar gedragen.

De expliciete terugknop moet het hierboven beschreven gedrag volgen.

Zorg ervoor dat een dienstpagina ook rechtstreeks geopend kan worden via een URL, zonder dat er een eerdere ambitie nodig is.

Voorkom dat de terugknop kapotgaat wanneer iemand een URL rechtstreeks opent of de pagina ververst.

---

# 7. De detailpagina's: visuele opbouw

Gebruik het tweede Figma-ontwerp als basis voor de ambitie- en dienst-detailpagina's.

De belangrijkste kenmerken zijn:

- NOBEARS-branding linksboven
- Een terugknop
- Een duidelijke contentkolom links
- Een overzicht met gekoppelde kaarten rechts
- Een donkere achtergrond
- Een subtiele dot pattern
- Een warme gradient/glow achter de content
- Donkere kaarten met subtiele borders
- Afbeeldingen met afgeronde hoeken
- Heldere typografische hiërarchie

### Ambitiepagina

Links staat de titel en toelichting van de ambitie.

Rechts staat het overzicht met direct gekoppelde diensten.

### Dienstpagina

Links staat de titel en toelichting van de dienst.

Rechts staat het overzicht met gekoppelde cases.

Een contactblok kan onderdeel zijn van de linker contentkolom of een logisch aanvullend element vormen.

Behoud de algemene compositie van het ontwerp, maar zorg dat de content ook bij langere titels, beschrijvingen en verschillende aantallen kaarten goed werkt.

Op desktop mag de layout bestaan uit een introductiekolom links en een grid rechts.

Op mobiel stapelen de contentkolom en het grid onder elkaar.

---

# 8. Visuele identiteit en art direction

De Figma-screenshots zijn leidend.

De applicatie moet aanvoelen als een moderne, hoogwaardige NOBEARS-tool. Vermijd de uitstraling van een generiek SaaS-dashboard, standaard CMS of templatewebsite.

Belangrijke visuele kenmerken:

- Donkere, bijna zwarte achtergrond
- Subtiele grid- of dot-texture
- Grote warme rood/oranje gradient
- Donkere contentvlakken en kaarten
- Subtiele borders
- Afgeronde hoeken
- Witte en lichtgrijze typografie
- Warme accentkleur
- Duidelijke typografische hiërarchie
- Ruimte en rust
- Sterke beeldverhoudingen
- Een centrale, prominente zoekervaring

De gradient en dot pattern moeten de interface ondersteunen, niet concurreren met de content.

Gebruik de gradient als een subtiele ambient achtergrond. Voorkom dat deze de leesbaarheid vermindert of onnodig veel visuele aandacht opeist.

Gebruik consistente spacing, radii, typografie en kleuren via herbruikbare design tokens.

### Motion

Gebruik subtiele interacties waar ze de ervaring versterken:

- Hover states op kaarten en chips
- Focus states op de zoekbalk
- Vloeiende overgangen bij het filteren
- Subtiele feedback bij het wisselen van zoekmodus
- Kleine opacity- of transformtransities

Vermijd overdreven animaties en lange overgangstijden.

Respecteer `prefers-reduced-motion`.

---

# 9. Content en datamodel

De content moet data-driven zijn.

Plaats content niet rechtstreeks in individuele UI-componenten.

Gebruik een centrale datastructuur voor:

- Ambities
- Diensten
- Cases
- Contactpersonen

Gebruik unieke ID's voor relaties en slugs voor URL's.

Een ambitie verwijst naar één of meerdere diensten.

Een dienst verwijst naar één of meerdere ambities, cases en optioneel één contactpersoon.

Een case verwijst naar één of meerdere diensten.

Een contactpersoon kan aan meerdere ambities en diensten gekoppeld zijn.

Gebruik relaties die eenvoudig uit te breiden zijn. Vermijd duplicatie van volledige objecten.

### Voorbeeld van de datastructuur

Ambition:

{
id,
title,
slug,
shortDescription,
description,
searchTerms,
serviceIds,
contactPersonId
}

Service:

{
id,
title,
slug,
shortDescription,
description,
image,
searchTerms,
ambitionIds,
caseIds,
contactPersonId
}

Case:

{
id,
clientName,
title,
slug,
image,
shortDescription,
serviceIds
}

ContactPerson:

{
id,
name,
role,
photo,
email,
phone
}

Dit is een conceptueel voorbeeld. Pas de exacte implementatie aan de bestaande codebase en gekozen architectuur aan.

### Contentbeheer en toekomstige uitbreidbaarheid

Voor V1 gebruiken we een lokale dataset, bijvoorbeeld JSON- of TypeScript-bestanden.

De content wordt uiteindelijk beheerd door een teamleider, die input verzamelt bij collega's.

Later kan de content mogelijk worden ondergebracht in Supabase of een CMS.

Bouw daarom een eenvoudige data-accesslaag, zodat de UI niet rechtstreeks afhankelijk is van de manier waarop de data wordt opgeslagen.

Bijvoorbeeld:

- Een repository of service voor ambities
- Een repository of service voor diensten
- Een repository of service voor cases
- Een repository of service voor contactpersonen

Houd deze laag eenvoudig. Bouw geen uitgebreide backend-abstractie voor een nog niet bestaande backend.

Maak de datastructuur en de toegang tot data wel zo dat een overstap naar Supabase of een CMS later geen volledige herschrijving van de UI vereist.

**Bouw in V1 geen adminpanel of CMS.** Dat valt buiten de scope.

---

# 10. Search architectuur

De zoekfunctie moet een eigen, herbruikbare module zijn.

Scheid de zoeklogica van de UI.

De zoekmodule moet minimaal ondersteunen:

- Zoeken binnen ambities
- Zoeken binnen diensten
- Herkennen van het juiste contenttype
- Exacte matching
- Matching op alternatieve zoektermen
- Fuzzy matching
- Relevantievolgorde
- Het bepalen van de beste match
- Het teruggeven van relevante suggesties

Gebruik voor V1 een lokale, voorspelbare implementatie.

Begin bij voorkeur met een eenvoudige eigen oplossing. Gebruik alleen een extra dependency als die aantoonbaar waarde toevoegt.

De zoekresultaten moeten reproduceerbaar zijn: dezelfde query op dezelfde dataset levert dezelfde resultaten op.

### Zoekrelevantie

Geef bij voorkeur prioriteit aan:

1. Exacte titelmatch
2. Sterke titelmatch
3. Exacte match op een synoniem of zoekterm
4. Gedeeltelijke match op titel of zoekterm
5. Fuzzy match

Gebruik de beschrijving alleen als aanvullend zoekveld, zodat een algemene term niet onnodig veel irrelevante resultaten oplevert.

Voorkom dat de applicatie bij iedere toetsaanslag willekeurig een andere pagina kiest.

Houd de zoekarchitectuur uitbreidbaar voor een toekomstige versie met semantische zoekmogelijkheden, zonder deze functionaliteit nu te bouwen.

---

# 11. Componentstructuur

Bouw herbruikbare componenten met een duidelijke verantwoordelijkheid.

Denk minimaal aan:

- AppShell
- Header
- NobearsLogo
- SearchPage
- SearchBar
- SearchModeSwitcher
- SearchSuggestions
- SuggestionChip
- NoResults
- ContactCard
- DetailPageLayout
- PageHeader
- BackButton
- ServiceCard
- CaseCard
- CardGrid
- AmbientBackground
- DotPattern

Voeg alleen componenten toe wanneer dat de code daadwerkelijk overzichtelijker maakt.

Vermijd zowel één grote component als een onnodig versnipperde componentstructuur.

Houd content, zoeklogica, routing en presentatie van elkaar gescheiden.

---

# 12. Responsive gedrag en toegankelijkheid

Desktop is de primaire ontwerpcontext, maar de applicatie moet goed werken op tablet en mobiel.

Denk aan:

- Een flexibele zoekbalk
- Een bruikbare switcher op kleine schermen
- Een kolom kaarten op mobiel
- Leesbare tekstgroottes
- Passende spacing
- Afbeeldingen met consistente verhoudingen
- Contactblokken die op mobiel goed leesbaar zijn

Zorg voor:

- Semantische HTML
- Correcte headingstructuur
- Toegankelijke knoppen en links
- Keyboard navigation
- Duidelijke focus states
- Voldoende kleurcontrast
- Ondersteuning voor screenreaders
- Reduced motion

De zoekbalk moet ook zonder muis bruikbaar zijn.

Ondersteun minimaal:

- Tab en Shift+Tab
- Enter
- Escape
- Pijltjestoetsen wanneer er een actieve suggestielijst is

Zorg dat toetsenbordinteracties intuïtief zijn en dat de focus niet onverwacht verloren gaat.

---

# 13. Technische uitgangspunten

Inspecteer eerst de bestaande codebase.

Als er al een project bestaat:

- Gebruik de bestaande stack.
- Behoud de bestaande architectuur waar dat logisch is.
- Hergebruik bestaande componenten en dependencies.
- Introduceer geen nieuwe framework- of stylinglaag zonder goede reden.

Als het project volledig leeg is, gebruik dan bij voorkeur:

- Next.js
- React
- TypeScript
- Tailwind CSS

Kies een aanpak die past bij de bestaande omgeving.

Voeg geen database, authenticatiesysteem, externe AI-service of CMS toe voor V1, tenzij dit al onderdeel is van het project.

Bouw geen functionaliteit die niet nodig is voor de beschreven gebruikerservaring.

---

# 14. Wat expliciet buiten scope valt

Houd V1 bewust klein.

Bouw niet:

- Een AI-chatbot
- Een LLM- of embedding-gebaseerde zoekmachine
- Een adminpanel
- Een CMS
- Een authenticatiesysteem, tenzij de bestaande applicatie dit al vereist
- Een aparte case-detailpagina
- Een dashboard met statistieken
- Een uitgebreide filterinterface
- Een netwerk van extra kruisverwijzingen tussen alle contenttypen
- Een complexe aanbevelingsengine

De focus ligt op de zoekervaring, de drie contenttypen, de relaties tussen content en de contactpersonen.

Houd wel rekening met mogelijke toekomstige uitbreidingen.

---

# 15. Demo-content

Gebruik realistische, Nederlandstalige demo-content.

Vermijd Lorem ipsum.

Gebruik de genoemde ambities als basis en maak voldoende diensten en cases om de verschillende relaties en zoekscenario's te demonstreren.

Zorg ervoor dat:

- Meerdere ambities dezelfde dienst kunnen gebruiken.
- Een dienst meerdere cases kan bevatten.
- Een case aan meerdere diensten gekoppeld kan zijn.
- Sommige ambities en diensten een contactpersoon hebben.
- Sommige content geen toegewezen contactpersoon heeft.
- De zoekfunctie verschillende typen matches kan demonstreren.
- Er ook een bruikbare no-results state is.

Gebruik waar mogelijk bestaande project- of beeldassets uit de codebase.

Als deze niet beschikbaar zijn, gebruik passende tijdelijke afbeeldingen. Zorg dat deze eenvoudig vervangbaar zijn en voorkom kapotte afbeeldingslinks.

Gebruik geen verzonnen echte contactgegevens van NOBEARS-medewerkers. Maak voor demo-contactpersonen duidelijk dat het om placeholdercontent gaat.

---

# 16. Acceptance criteria

De applicatie is klaar wanneer alle onderstaande punten werken.

## Home en zoeken

- De homepagina sluit visueel aan op het Figma-ontwerp.
- De zoekbalk is de primaire navigatie.
- De switcher wisselt tussen Ambities en Diensten.
- De initiële suggesties tonen alle items van de actieve modus.
- De suggesties filteren direct wanneer de gebruiker typt.
- De zoekfunctie ondersteunt alternatieve zoektermen en fuzzy matching.
- De applicatie herkent wanneer een query waarschijnlijk bij het andere contenttype hoort.
- De switcher schakelt automatisch wanneer er een duidelijke match is.
- De applicatie schakelt niet voortdurend heen en weer bij onduidelijke invoer.
- Een gebruiker kan rechtstreeks een dienst openen.
- Enter opent alleen een pagina wanneer er een duidelijke match is.
- Meerdere mogelijke matches blijven selecteerbaar.

## Ambities

- Een ambitie heeft een eigen detailpagina.
- De pagina toont de juiste titel en beschrijving.
- Alleen direct gekoppelde diensten worden getoond.
- Er worden geen cases getoond.
- De toegewezen contactpersoon wordt getoond wanneer die bestaat.

## Diensten

- Een dienst heeft een eigen detailpagina.
- De pagina toont de juiste titel en beschrijving.
- De juiste cases worden getoond.
- De toegewezen contactpersoon wordt getoond wanneer die bestaat.
- Een dienst kan via verschillende ambities worden geopend.
- De dienst werkt ook wanneer deze rechtstreeks via een URL wordt geopend.

## Cases en contactpersonen

- Casekaarten tonen klantnaam, titel, afbeelding en korte beschrijving.
- Dezelfde case kan aan meerdere diensten gekoppeld zijn.
- Contactpersonen zijn zelfstandige contentobjecten.
- Contactgegevens worden niet onnodig gedupliceerd.
- E-mail- en telefoonlinks werken.
- Ontbrekende optionele content veroorzaakt geen kapotte layout.

## No-results state

- Er verschijnt een ontworpen no-results state bij een niet-herkende zoekopdracht.
- De interface gebruikt een begrijpelijke, menselijke boodschap.
- Er worden relevante voorgestelde diensten getoond wanneer mogelijk.
- De gebruiker kan vanuit de suggesties rechtstreeks navigeren.
- Het contactblok toont een expliciete contactpersoon met beschikbare gegevens.
- Er worden geen willekeurige of fictieve contactgegevens getoond.

## Navigatie

- Home → Ambitie werkt.
- Home → Dienst werkt.
- Ambitie → Dienst werkt.
- Terug vanaf een ambitie gaat naar Home.
- Terug vanaf een rechtstreeks geopende dienst gaat naar Home.
- Terug vanaf een dienst die vanuit een ambitie is geopend gaat terug naar die ambitie.
- Het NOBEARS-logo brengt de gebruiker altijd naar Home.
- Directe URL's en browsernavigatie werken.

## Kwaliteit

- De applicatie is responsive.
- De interface sluit visueel aan op de Figma-referenties.
- De belangrijkste interacties werken met toetsenbord en muis.
- Er zijn geen onnodige dependencies.
- Er zijn geen console errors of onopgeloste TypeScript-errors.
- De code is overzichtelijk en onderhoudbaar.
- De content is data-driven.
- De data-accesslaag maakt een latere overstap naar een CMS of Supabase mogelijk.

---

# 17. Werkwijze

Werk in de volgende volgorde.

1. Inspecteer de volledige bestaande codebase en projectstructuur.
2. Identificeer de gebruikte stack, dependencies en bestaande componenten.
3. Bekijk de Figma-screenshots en bepaal hoe de visuele principes vertaald moeten worden naar de bestaande applicatie.
4. Bepaal het datamodel en de relaties tussen ambities, diensten, cases en contactpersonen.
5. Bouw de visuele basis en herbruikbare componenten.
6. Bouw de homepagina en de zoekervaring.
7. Implementeer de zoeklogica en automatische herkenning van het contenttype.
8. Bouw de ambitie-detailpagina.
9. Bouw de dienst-detailpagina.
10. Implementeer de navigatie en het teruggedrag.
11. Bouw de no-results state en contactblokken.
12. Voeg realistische demo-content toe.
13. Controleer responsive gedrag en toegankelijkheid.
14. Test alle beschreven gebruikersflows.
15. Los fouten en visuele inconsistenties op.

Neem zelfstandig beslissingen over kleine implementatiedetails. Vraag niet voortdurend om bevestiging wanneer de gewenste richting al duidelijk is.

Wanneer je tijdens de implementatie een belangrijke onduidelijkheid tegenkomt die de architectuur of gebruikerservaring wezenlijk beïnvloedt, benoem die dan gericht.

**Begin met het inspecteren van de codebase. Geef vervolgens een korte samenvatting van je aanpak en bouw daarna de applicatie daadwerkelijk.**

Lever geen uitsluitend theoretisch plan of losse codevoorbeelden op. Implementeer de applicatie in het bestaande project en controleer dat de belangrijkste flows werken.

Als referentie voor de visuele richting heb je een Figma-export (HTML/CSS) toegevoegd, en als demo-dataset een export uit de bestaande Notion-database (ambities, diensten, cases, contactpersonen, inclusief afbeeldingen). Gebruik die waar nuttig en bouw verder met realistische Nederlandstalige demo-content.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://nobears-bma.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b24a8739-4200-47bb-aa4f-8d66d90acaa2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
