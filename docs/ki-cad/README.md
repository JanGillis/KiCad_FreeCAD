---
title: KiCad
---

# KiCad

Een dobbelsteen project bestaande uit een Attiny85.

## Dobbelsteen project

Maak een nieuw project aan in KiCad (Ctrl+N).

![Nieuw project Ctrl+N](./assets/nieuwproject.png)

## Schema

Open de schematic editor (Ctrl+E).

![Schema Layout Editor Ctrl+E](./assets/schemaEditor.png)

Teken het schema van het dobbelsteen project. 

![Place symbol](./assets/schemaDobbelsteen.png)

Via het place symbol icon (Shift+A) kan je symbolen toevoegen aan je schema. Klik met de muis in tekenvlak van de schematic editor om een symbool te kiezen.

![Place symbol Shift+A](./assets/placeSymbol.png)

### BOM

| Ref | Qnty | Value  |
|:-------------:|:-------------:|:-----:|
|BT1 | 1 | Battery_Cell holder 2032 |
|C1	| 1 | 100nF |
|D1, D2, D3, D4, D5, D6, D7	| 7	| LED |
|R1, R2, R3, R4, R5, R6, R7	| 7 | 180R |
|SW1 | 1 |	SW_Push_Dual_x2	|
|U1	| 1	| ATtiny85V-10PU DIP-8|

### Handige shortcuts zijn

Voor onderstaande shortcuts moet de muiscursor boven het symbool staan.

* c : kopieer symbool
* v : value symbool toevoegen
* m : symbool verplaatsen

## Waarde

Voeg voor elke component een waarde toe. Je kan dit doen door met je muiscursor boven een symbool te gaan staan en op v te drukken.

### Reference designator

Elk symbool in een schema moet een naam krijgen. Deze naam wordt de reference designator genoemd. Reference designator maken het veel gemakkelijker om over de verschillende componenten in het schema te praten. Het is een stuk gemakkelijker om R1, R2, Q1 te zeggen dan te verwijzen naar de tweede 1k weerstand van links in de schakeling in de rechterhoek. De reference designator is ook handig voor het koppelen van het schema naar de layout en vice versa en kan ook als tekst naast de component footprint op de silkscreen geplaatst worden. Zie de [Wikipedia Reference designator](https://en.wikipedia.org/wiki/Reference_designator) voor een lijst van veelgebruikte aanduidingen. 

KiCad maakt automatische de reference designator aan via de annotate schematic functie.

![Reference designator](./assets/referenceDesignator.png)

![Annotate schematic](./assets/annotate.png)

## Footprints

Voeg voor elk symbool een footprint toe.

![Footprint toevoegen](./assets/footprints.png)

### Demonstratie footprints toekennen

[![Footprints toevoegen aan symbolen](http://img.youtube.com/vi/Wyey4fHDD3Q/0.jpg)](http://www.youtube.com/watch?v=Wyey4fHDD3Q "Footprints toevoegen")

### Nieuwe footprint

Voor de batterijhouder moet er een nieuwe footprint gemaakt worden. Doe dit via de footprint editor.

![Footprint editor](./assets/footprintEditor.png)

[![Nieuwe footprint](./assets/batteryholder.png)](http://www.youtube.com/watch?v=HeSDCxtcB-A "Nieuwe footprint CR2032 batterijhouder")


### Overzicht footprint

![Footprint editor](./assets/footprintEditor_Symbols.png)