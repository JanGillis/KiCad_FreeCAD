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

Voeg voor elke component de juiste waarde toe. Je kan dit doen door met je muiscursor boven een symbool te gaan staan en op v te drukken.

### Reference designator

Elk symbool in een schema moet een naam krijgen. Deze naam wordt de reference designator genoemd. Reference designator maken het veel gemakkelijker om over de verschillende componenten in het schema te praten. Het is een stuk gemakkelijker om R1, R2, Q1 te zeggen dan te verwijzen naar de tweede 1k weerstand van links in de schakeling in de rechterhoek. De reference designator is ook handig voor het koppelen van het schema naar de layout en vice versa en kan ook als tekst naast de component footprint op de silkscreen geplaatst worden. Zie de [Wikipedia Reference designator](https://en.wikipedia.org/wiki/Reference_designator) voor een lijst van veelgebruikte aanduidingen. 

KiCad maakt automatisch de reference designator aan via de annotate schematic functie.

![Reference designator](./assets/referenceDesignator.png)

![Annotate schematic](./assets/annotate.png)

# Footprints

Voeg voor elk symbool een footprint toe.

![Footprint toevoegen](./assets/footprints.png)

## Demonstratie footprints toekennen

[![Footprints toevoegen aan symbolen](http://img.youtube.com/vi/Wyey4fHDD3Q/0.jpg)](http://www.youtube.com/watch?v=Wyey4fHDD3Q "Footprints toevoegen")

## Nieuwe footprint

Voor de batterijhouder moet er een nieuwe footprint gemaakt worden. Doe dit via de footprint editor.

![Footprint editor](./assets/footprintEditor.png)

[![Nieuwe footprint](./assets/batteryholder.png)](http://www.youtube.com/watch?v=HeSDCxtcB-A "Nieuwe footprint CR2032 batterijhouder")

## Overzicht footprint

![Footprint editor](./assets/footprintEditor_Symbols.png)

# Layout

Open de layout editor Pcbnew.

![Pcbnew](./assets/PCBnew.png)

Importeer de componenten van het schema in de layout via Update PCB from schematic.

![Import netlist](./assets/GetNetlist.png)

Plaats de componenten zodanig dat er zo min mogelijk ratsnets kruisen. Verander desnoods de aansluitingen naar de Attiny85.

![Componenten geplaatst](./assets/ratsnetsBeforeAdjustmentSchematic.png)

## Tracks

Teken de PCB tracks (traces) met een geschikte trace breedte.

![Track breedte](./assets/traceBreedte.png)

Tekenen alle pcb banen behalve GND met het Route Tracks commando (Shift+X).

![Alle nets behalve GND](./assets/AlleNetsGetekend.png)

## Edge cut

Teken een board outline op de edge cuts layer met de Add graphics line tool.

![Add graphics line tool](./assets/Polyline.png)

Teken een grondvlak op de F.Cu layer met de Add filled zones tool. Teken het grondvlak net iets groter dan de board outline.

![Add filled zones tool](./assets/filled.png)

Gebruik de instellingen weergegeven op de volgende figuur.

![Add filled zones tool](./assets/filled_prop.png)

## Resultaat

![Add filled zones tool](./assets/filled_zone.png)

::: warning
Om de pcb te kunnen importeren in FreeCAD en terug te kunnen exporten moet er een grid origin worden geplaatst in de board outline.

![Grid origin](./assets/gridOrigin.png)
:::

# 3D viewer

Controleer de layout in de 3D viewer van Pcbnew.

![Grid origin](./assets/Dobbelsteen3D.png)

Voeg een dip socket toe aan de 3D weergave van de Attiny85. Open hiervoor de properties van de Attiny85 component. Ga naar de 3D Settings en voeg een 8 pin socket toe uit de ${KISYS3DMOD}/Package_DIP.3dshapes/DIP-8_W7.62mm_Socket.step folder.

![Grid origin](./assets/Socket.png)

Verplaats de dip-8 verpakking, zodat de verpakking zich in de socket bevindt.

![Grid origin](./assets/Socket_dip.png)

## 3D weergave

![Grid origin](./assets/Dobbelsteen3D_volledig.png)



