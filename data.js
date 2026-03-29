// ================================================================
// TRAINING DATA MODEL — Tim's Trainingsschema
// ================================================================

var EXERCISE_DB = {
  'chest-press': {
    id: 'chest-press',
    name: 'Chest press',
    apparaat: 'Multipress \u2013 liggend',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 20,
    rest: 60,
    tip: 'Langzaam omhoog duwen, niet de armen volledig strekken',
    videoUrl: 'videos/chest-press.mp4',
    youtubeId: 'xUm0BiZCWlQ',
    instruction: {
      goal: 'Borst en voorkant van de armen trainen.',
      steps: [
        'Ga met je rug plat tegen de leuning zitten.',
        'Pak de handgrepen vast op schouderhoogte.',
        'Duw de grepen naar voren tot je armen b\u00edjna gestrekt zijn.',
        'Laat langzaam en gecontroleerd terugkomen.'
      ],
      focus: 'Schouders laag houden, niet ophalen richting je oren. Adem uit bij het duwen, adem in bij het terugkomen.',
      mistake: 'Armen helemaal op slot duwen. Houd altijd een kleine buiging in je ellebogen.'
    }
  },
  'incline-press': {
    id: 'incline-press',
    name: 'Incline chest press',
    apparaat: 'Multipress \u2013 half liggend',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 15,
    rest: 60,
    phase: 2,
    tip: 'Zelfde beweging als chest press, iets meer schouder-activatie',
    videoUrl: 'videos/incline-press.mp4',
    youtubeId: '8iPEnn-ltC8',
    instruction: {
      goal: 'Bovenste deel van de borst en voorkant schouders trainen.',
      steps: [
        'Zet de stoel in de half liggende stand.',
        'Ga met je rug plat tegen de leuning zitten.',
        'Pak de handgrepen vast en duw naar voren en iets omhoog.',
        'Laat langzaam terugkomen tot je handen op borsthoogte zijn.'
      ],
      focus: 'Dezelfde beweging als chest press, maar door de hoek voelt het iets meer in je schouders. Dat is normaal.',
      mistake: 'Je rug van de leuning halen om meer kracht te zetten. Houd je rug altijd tegen de leuning.'
    }
  },
  'shoulder-press': {
    id: 'shoulder-press',
    name: 'Shoulder press',
    apparaat: 'Multipress \u2013 rechtop',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 12.5,
    rest: 60,
    tip: 'Niet hoger duwen dan comfortabel. Let op bij nekklachten.',
    videoUrl: 'videos/shoulder-press.mp4',
    youtubeId: 'qEwKCR5JCog',
    instruction: {
      goal: 'Schouders en bovenste deel van de armen trainen.',
      steps: [
        'Zet de stoel rechtop.',
        'Ga zitten met je rug tegen de leuning.',
        'Pak de handgrepen vast op schouderhoogte.',
        'Duw omhoog tot je armen b\u00edjna gestrekt zijn, laat langzaam zakken.'
      ],
      focus: 'Schouders bewust laag houden. Duw recht omhoog, niet naar voren. Bij nekklachten: niet te hoog duwen, stop als het oncomfortabel wordt.',
      mistake: 'Te hoog duwen of met je rug meehelpen. Houd je rug tegen de leuning en stop voordat je armen volledig gestrekt zijn.'
    }
  },
  'dumbbell-row': {
    id: 'dumbbell-row',
    name: 'Dumbbell row',
    apparaat: 'Dumbbell + bankje',
    reps: '8\u201312 per arm',
    defaultReps: 8,
    defaultWeight: 10,
    rest: 60,
    tip: 'Beide armen doen = 1 set. Rug recht, elleboog langs lichaam.',
    videoUrl: 'videos/dumbbell-row.mp4',
    youtubeId: 'pYcpY20QaE8',
    instruction: {
      goal: 'Rug en achterkant van de armen trainen. Goed voor rugbreedte (V-vorm).',
      steps: [
        'Zet \u00e9\u00e9n knie en hand op het bankje, andere voet op de grond.',
        'Pak de dumbbell met je vrije hand.',
        'Trek de dumbbell omhoog door je elleboog langs je lichaam te trekken.',
        'Doe 8\u201312 herhalingen, wissel dan van arm. Beide armen = 1 set.'
      ],
      focus: 'Rug recht en stil houden. De beweging komt uit je arm en rug, niet uit je romp. Denk aan "elleboog naar het plafond trekken".',
      mistake: 'Je romp meedraaien om de dumbbell omhoog te krijgen. Als dat gebeurt, is het gewicht te zwaar.'
    }
  },
  'dumbbell-pullover': {
    id: 'dumbbell-pullover',
    name: 'Dumbbell pullover',
    apparaat: 'Verstelbaar bankje + dumbbell',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 7.5,
    rest: 60,
    tip: 'Armen licht gebogen houden, gecontroleerd bewegen',
    videoUrl: 'videos/dumbbell-pullover.mp4',
    youtubeId: 'tpLnfSQJ0gg',
    instruction: {
      goal: 'Brede rugspieren (lats) trainen voor V-vorm. Vervangt de lat pulldown.',
      steps: [
        'Ga op je rug op het bankje liggen.',
        'Houd een dumbbell met beide handen boven je borst, armen licht gebogen.',
        'Laat de dumbbell langzaam achter je hoofd zakken tot je een rek voelt.',
        'Trek de dumbbell terug naar boven je borst.'
      ],
      focus: 'Houd je armen licht gebogen \u2014 niet strekken. De beweging komt uit je schouders en rug, niet uit je armen. Adem in bij het zakken, uit bij het terugtrekken.',
      mistake: 'Te ver naar achteren laten zakken waardoor je onderrug van het bankje komt. Houd je onderrug plat op het bankje.'
    }
  },
  'reverse-fly': {
    id: 'reverse-fly',
    name: 'Reverse dumbbell fly',
    apparaat: 'Dumbbells + bankje',
    reps: '12\u201315',
    defaultReps: 12,
    defaultWeight: 4,
    rest: 45,
    tip: 'Licht gewicht, focus op knijpen tussen schouderbladen',
    videoUrl: '',
    youtubeId: 'ttvfGg9d76c',
    instruction: {
      goal: 'Achterste schouders en bovenrug (rhombo\u00efden) trainen. Voorkomt bovenrug- en nekpijn door push/pull balans.',
      steps: [
        'Ga op de rand van het bankje zitten, buig voorover met je borst richting je knie\u00ebn.',
        'Laat de dumbbells onder je benen hangen, handpalmen naar elkaar.',
        'Spreid je armen naar buiten en omhoog, alsof je vleugels uitslaat.',
        'Knijp bovenaan je schouderbladen naar elkaar, houd 1 seconde vast.',
        'Laat langzaam en gecontroleerd terugzakken.'
      ],
      focus: 'Denk aan "schouderbladen naar elkaar toe knijpen". Houd je armen licht gebogen. Het gewicht hoeft niet zwaar \u2014 het gaat om controle en squeeze.',
      mistake: 'Te zwaar gewicht pakken en met momentum slingeren. Dit is een isolatie-oefening: langzaam en gecontroleerd.'
    }
  },
  'prone-y-raise': {
    id: 'prone-y-raise',
    name: 'Prone Y-raise',
    apparaat: 'Bankje + lichte dumbbells',
    reps: '10\u201312',
    defaultReps: 10,
    defaultWeight: 2,
    rest: 45,
    tip: 'Heel licht gewicht! Focus op lage traps activeren',
    videoUrl: '',
    youtubeId: 'IVEteqJkMtc',
    instruction: {
      goal: 'Lage trapezius en bovenrug versterken. Verbetert houding en vermindert nekpijn.',
      steps: [
        'Ga op je buik op het bankje liggen, hoofd net over de rand.',
        'Laat de dumbbells recht naar beneden hangen, duimen omhoog.',
        'Til je armen omhoog in een Y-vorm (schuin naar voren).',
        'Houd bovenaan 2 seconden vast, knijp je schouderbladen samen.',
        'Laat langzaam zakken en herhaal.'
      ],
      focus: 'Duimen wijzen omhoog. Til niet te hoog \u2014 tot schouderhoogte is genoeg. Houd je nek neutraal (kijk naar de grond, niet omhoog).',
      mistake: 'Te zwaar gewicht of je nek omhoog tillen. Begin met 1\u20132 kg, dit is zwaarder dan je denkt!'
    }
  },
  'bicep-curl': {
    id: 'bicep-curl',
    name: 'Bicep curl',
    apparaat: 'Dumbbells',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 5,
    rest: 45,
    tip: 'Ellebogen stil houden, niet meeswingen',
    videoUrl: 'videos/bicep-curl.mp4',
    youtubeId: 'ICAXJVmOJik',
    instruction: {
      goal: 'Biceps (voorkant bovenarm) trainen.',
      steps: [
        'Sta rechtop, dumbbells langs je lichaam, handpalmen naar voren.',
        'Buig je armen omhoog door alleen je onderarmen te bewegen.',
        'Draai de dumbbells niet \u2014 houd je handpalmen naar boven gericht.',
        'Laat langzaam en gecontroleerd zakken.'
      ],
      focus: 'Ellebogen blijven stil naast je lichaam. Alleen je onderarmen bewegen. Niet je lichaam meeswingen.',
      mistake: 'Je hele lichaam gebruiken om de dumbbells omhoog te krijgen (meeswingen). Als dat nodig is, is het gewicht te zwaar.'
    }
  },
  'leg-ext': {
    id: 'leg-ext',
    name: 'Leg extension',
    apparaat: 'Leg extension apparaat',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 20,
    rest: 45,
    tip: 'Langzaam omhoog, gecontroleerd terug laten zakken',
    videoUrl: 'videos/leg-ext.mp4',
    youtubeId: 'YyvSfVjQeL0',
    instruction: {
      goal: 'Voorkant van de bovenbenen (quadriceps) trainen.',
      steps: [
        'Ga zitten met je rug tegen de leuning.',
        'Plaats je enkels achter het kussentje.',
        'Strek je benen langzaam naar voren tot ze bijna recht zijn.',
        'Laat langzaam en gecontroleerd terugkomen.'
      ],
      focus: 'Langzaam bewegen, vooral bij het terug laten zakken. Niet met een ruk omhoog schoppen.',
      mistake: 'Te snel bewegen of het gewicht "laten vallen" op de terugweg. De terugweg is net zo belangrijk als het strekken.'
    }
  },
  'leg-curl': {
    id: 'leg-curl',
    name: 'Leg curl',
    apparaat: 'Leg curl apparaat',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 15,
    rest: 45,
    tip: 'Langzaam buigen, niet met een ruk',
    videoUrl: 'videos/leg-curl.mp4',
    youtubeId: 'ELOCsoDSmrg',
    instruction: {
      goal: 'Achterkant van de bovenbenen (hamstrings) trainen.',
      steps: [
        'Ga zitten met je rug tegen de leuning.',
        'Plaats je enkels boven het kussentje.',
        'Buig je benen langzaam naar achteren (richting je billen).',
        'Laat langzaam terugkomen tot je benen bijna gestrekt zijn.'
      ],
      focus: 'Gecontroleerd bewegen. Houd je bovenlichaam stil en ontspannen.',
      mistake: 'Met een ruk buigen of je lichaam naar voren kantelen om mee te helpen. Houd je rug tegen de leuning.'
    }
  },
  'goblet-squat': {
    id: 'goblet-squat',
    name: 'Goblet squat',
    apparaat: 'Dumbbell',
    reps: '8\u201312',
    defaultReps: 8,
    defaultWeight: 8,
    rest: 60,
    tip: 'Rug recht, knie\u00ebn in lijn met tenen. Stop bij rugklachten.',
    videoUrl: 'videos/goblet-squat.mp4',
    youtubeId: 'MeIiIdhvXT4',
    instruction: {
      goal: 'Benen, billen en core trainen met \u00e9\u00e9n oefening.',
      steps: [
        'Houd een dumbbell met beide handen tegen je borst.',
        'Voeten op schouderbreedte, tenen iets naar buiten.',
        'Zak door je knie\u00ebn alsof je op een stoel gaat zitten.',
        'Duw je heupen naar achteren, rug recht. Duw vanuit je hakken omhoog.'
      ],
      focus: 'Rug recht houden! Knie\u00ebn wijzen dezelfde kant op als je tenen. Ga zo diep als comfortabel is voor je onderrug.',
      mistake: 'Knie\u00ebn naar binnen laten vallen of je rug ronden. Als je onderrug pijn doet, ga dan minder diep of sla de oefening over.'
    }
  },
  'glute-bridge': {
    id: 'glute-bridge',
    name: 'Glute bridge',
    apparaat: 'Op de grond',
    reps: '10\u201315',
    defaultReps: 10,
    rest: 45,
    isBodyweight: true,
    tip: 'Knijp billen samen bovenaan, onderrug niet overmatig hollen',
    videoUrl: 'videos/glute-bridge.mp4',
    youtubeId: '8bbE64NuDTU',
    instruction: {
      goal: 'Bilspieren activeren en bekkenstand verbeteren. Corrigeert anterior pelvic tilt.',
      steps: [
        'Ga op je rug liggen, knie\u00ebn gebogen, voeten plat op de grond.',
        'Duw je heupen omhoog tot je lichaam een rechte lijn vormt.',
        'Knijp je billen stevig samen bovenaan.',
        'Houd 2 seconden en laat langzaam zakken.'
      ],
      focus: 'De kracht komt uit je billen, niet uit je onderrug. Span je buik licht aan.',
      mistake: 'Je onderrug overmatig hollen bovenaan. Je lichaam moet een rechte lijn vormen.'
    }
  },
  'plank': {
    id: 'plank',
    name: 'Plank',
    apparaat: 'Op de grond',
    reps: '20\u201330 sec',
    defaultReps: 0,
    rest: 45,
    tip: 'Lichaam recht, billen niet omhoog of omlaag',
    isPlank: true,
    videoUrl: 'videos/plank.mp4',
    youtubeId: 'pSHjTRCQxIw',
    instruction: {
      goal: 'Core sterker maken. Traint de diepe spieren die de buik naar binnen trekken.',
      steps: [
        'Ga op je onderarmen en tenen liggen, gezicht naar de grond.',
        'Houd je lichaam in \u00e9\u00e9n rechte lijn van hoofd tot voeten.',
        'Span je buik aan alsof iemand er tegenaan duwt.',
        'Houd deze positie aan en adem rustig door.'
      ],
      focus: 'Billen niet omhoog steken en niet laten doorzakken. Begin met 20 seconden.',
      mistake: 'Adem inhouden. Blijf rustig doorademen.'
    }
  },
  'dead-bug': {
    id: 'dead-bug',
    name: 'Dead bug',
    apparaat: 'Op de grond',
    reps: '8 per kant',
    defaultReps: 8,
    rest: 45,
    isBodyweight: true,
    tip: 'Rechts + links = 1 herhaling. Onderrug blijft op de grond!',
    videoUrl: 'videos/dead-bug.mp4',
    youtubeId: 'x-BStnplCYg',
    instruction: {
      goal: 'Diepe core-stabiliteit. Topexercise voor rug-stabiliteit.',
      steps: [
        'Ga op je rug liggen, armen recht omhoog, knie\u00ebn op 90 graden.',
        'Strek tegelijkertijd je rechterarm achter je hoofd en je linkerbeen naar voren.',
        'Kom terug en wissel: linkerarm + rechterbeen. Rechts + links = 1 herhaling.',
        'Houd je onderrug plat op de grond \u2014 dat is het belangrijkste.'
      ],
      focus: 'Je onderrug mag NIET van de grond komen. Als dat wel gebeurt, maak de beweging kleiner. Tip: als je merkt dat je andere knie mee intrekt als compensatie, begin dan met alleen je been strekken (armen blijven omhoog) of alleen je arm strekken (benen op 90\u00b0). Zodra dat lukt zonder compensatie, combineer je arm + been.',
      mistake: 'Onderrug laten opkomen van de grond, of de andere knie naar je borst trekken om te compenseren. Maak de beweging kleiner totdat je het gecontroleerd kunt.'
    }
  },
  'bird-dog': {
    id: 'bird-dog',
    name: 'Bird-dog',
    apparaat: 'Op de grond',
    reps: '8 per kant',
    defaultReps: 8,
    rest: 45,
    isBodyweight: true,
    tip: 'Rechts + links = 1 herhaling. Rug stil houden!',
    videoUrl: 'videos/bird-dog.mp4',
    youtubeId: 'vtwhC3tfVow',
    instruction: {
      goal: 'Rug-stabiliteit. De oefening die je rug het meest helpt.',
      steps: [
        'Ga op handen en knie\u00ebn zitten.',
        'Strek tegelijkertijd je rechterarm naar voren en je linkerbeen naar achteren.',
        'Houd 2\u20133 seconden stil, rug blijft recht.',
        'Kom terug en wissel: linkerarm + rechterbeen. Rechts + links = 1 herhaling.'
      ],
      focus: 'Je rug en heupen blijven stil \u2014 niet meedraaien of kantelen. Span je buik licht aan.',
      mistake: 'Je heup laten zakken naar de kant van het opgetilde been. Houd je heupen evenwijdig aan de grond.'
    }
  },
  'cat-cow': {
    id: 'cat-cow',
    name: 'Cat-cow',
    apparaat: 'Op de grond',
    reps: '10',
    defaultReps: 10,
    rest: 30,
    isBodyweight: true,
    tip: 'Langzaam wisselen, niet forceren',
    videoUrl: 'videos/cat-cow.mp4',
    youtubeId: '2of247Kt0tU',
    instruction: {
      goal: 'Rugmobiliteit verbeteren en pijn verlichten.',
      steps: [
        'Ga op handen en knie\u00ebn zitten.',
        'KAT: Duw je rug omhoog (bol), laat je hoofd hangen.',
        'KOE: Laat je rug zakken (hol), kijk omhoog.',
        'Wissel langzaam tussen beide posities.'
      ],
      focus: 'Langzaam en vloeiend bewegen. Adem in bij koe (rug hol), adem uit bij kat (rug bol).',
      mistake: 'Te snel bewegen of te ver doorduwen. Ga alleen zo ver als comfortabel is.'
    }
  },
  'neck-mobility': {
    id: 'neck-mobility',
    name: 'Nekmobiliteit',
    apparaat: 'Zonder gewicht',
    reps: '5 per richting',
    defaultReps: 5,
    rest: 30,
    isBodyweight: true,
    tip: 'Nooit forceren. Stoppen bij pijn.',
    videoUrl: 'https://musclewiki.com/media/uploads/videos/branded/male-bodyweight-neck-rotation-front.mp4',
    youtubeId: 'G-VYVMmIhMQ',
    instruction: {
      goal: 'Nekmobiliteit behouden en nekklachten voorkomen. Je doet 3 oefeningen achter elkaar.',
      steps: [
        '<strong>Oefening 1 — Chin Tuck (dubbelkin)</strong>: Ga rechtop zitten, kijk recht vooruit. Schuif je kin recht naar achteren (alsof je een dubbelkin maakt). Je hoofd gaat NIET omlaag — alleen naar achteren. Je voelt een stretch achter in je nek. Houd 3 seconden vast, ontspan. Herhaal 5x.',
        '<strong>Oefening 2 — Nekrotatie (nee-schudden)</strong>: Kijk recht vooruit. Draai je hoofd langzaam naar links, alsof je over je schouder kijkt. Ga zo ver als comfortabel is. Kom terug naar het midden. Draai dan naar rechts. Herhaal 5x per kant.',
        '<strong>Oefening 3 — Zijwaartse kanteling (oor naar schouder)</strong>: Kijk recht vooruit. Kantel je hoofd naar links — breng je linkeroor richting je linkerschouder. Je schouders blijven STIL (niet optrekken!). Kom terug naar het midden. Kantel dan naar rechts. Herhaal 5x per kant.'
      ],
      focus: 'Alle bewegingen langzaam en gecontroleerd. Schouders laag en ontspannen. Nooit forceren — ga alleen zo ver als comfortabel is.',
      mistake: 'Nekrollen maken (volledige cirkels met je hoofd) — dit kan nekklachten verergeren. Ook: schouders optrekken tijdens de oefeningen.'
    }
  },
  'shoulder-mobility': {
    id: 'shoulder-mobility',
    name: 'Schoudermobiliteit',
    apparaat: 'Zonder gewicht',
    reps: '10',
    defaultReps: 10,
    rest: 30,
    isBodyweight: true,
    tip: 'Ontspannen bewegen, niet forceren',
    videoUrl: 'https://musclewiki.com/media/uploads/videos/branded/male-bodyweight-arm-circles-front.mp4',
    youtubeId: 'bqMsBSFCwBQ',
    instruction: {
      goal: 'Schoudermobiliteit verbeteren. Je doet 2 oefeningen achter elkaar.',
      steps: [
        '<strong>Oefening 1 — Armcirkels</strong>: Sta rechtop. Strek je armen zijwaarts uit op schouderhoogte (T-vorm). Maak in deze positie kleine cirkels. Maak de cirkels langzaam groter. Doe 10 cirkels vooruit, dan 10 cirkels achteruit.',
        '<strong>Oefening 2 — Armen omhoog</strong>: Sta rechtop, armen langs je lichaam. Breng beide armen langzaam omhoog (via de zijkant) tot boven je hoofd. Laat ze langzaam weer zakken. Herhaal 10x. Adem in als je armen omhoog gaan, adem uit als ze zakken.'
      ],
      focus: 'Ontspannen bewegen. Schouders laag houden — niet optrekken naar je oren.',
      mistake: 'Te snel of te groot beginnen met de cirkels. Start klein en bouw langzaam op.'
    }
  },
  'superman': {
    id: 'superman',
    name: 'Superman',
    apparaat: 'Op de grond',
    reps: '10\u201315',
    defaultReps: 10,
    rest: 45,
    isBodyweight: true,
    tip: 'Til armen en benen tegelijk op. Houd 2 sec vast bovenaan.',
    videoUrl: 'videos/superman.mp4',
    youtubeId: 'J9zXkxUAfUA',
    instruction: {
      goal: 'Onderrug (erector spinae) en houdingsspieren versterken. Helpt tegen rugklachten bij zitten.',
      steps: [
        'Ga op je buik liggen, armen gestrekt voor je uit.',
        'Til tegelijkertijd je armen, borst en benen van de grond.',
        'Houd 2 seconden vast bovenaan \u2014 knijp je billen en onderrug samen.',
        'Laat langzaam zakken en herhaal.'
      ],
      focus: 'Gecontroleerd bewegen, niet met een ruk omhoog. Kijk naar de grond (nek neutraal).',
      mistake: 'Je hoofd in je nek gooien. Houd je nek in het verlengde van je rug.'
    }
  },
  'back-extension': {
    id: 'back-extension',
    name: 'Rugextensie (bankje)',
    apparaat: 'Back extension bankje',
    reps: '10\u201315',
    defaultReps: 10,
    defaultWeight: 0,
    rest: 45,
    isBodyweight: true,
    tip: 'Armen gekruist voor je borst. Langzaam op en neer.',
    videoUrl: 'videos/back-extension.mp4',
    youtubeId: 'ph3pddpKzzw',
    instruction: {
      goal: 'Onderrug en houdingsspieren versterken. Sterk alternatief voor superman met meer range of motion.',
      steps: [
        'Ga in het back extension bankje staan, heupen tegen het kussen.',
        'Kruis je armen voor je borst (of handen achter je hoofd).',
        'Laat je bovenlichaam langzaam zakken tot je een rek voelt in je hamstrings.',
        'Kom gecontroleerd terug omhoog tot je lichaam een rechte lijn vormt \u2014 niet verder.'
      ],
      focus: 'Niet te ver doorbuigen naar achteren. Stop als je lichaam recht is. Span je billen aan bovenaan.',
      mistake: 'Te ver naar achteren doorgaan (holle rug). Je rug moet recht zijn bovenaan, niet gebogen.'
    }
  },
  'lower-back-ext': {
    id: 'lower-back-ext',
    name: 'Rugextensie (grond)',
    apparaat: 'Op de grond',
    reps: '10\u201315',
    defaultReps: 10,
    rest: 45,
    isBodyweight: true,
    tip: 'Vergelijkbaar met superman, maar met handen bij je slapen.',
    videoUrl: 'videos/lower-back-ext.mp4',
    youtubeId: 'cZxtPxeR2H8',
    instruction: {
      goal: 'Onderrug versterken zonder apparaat. Kan overal, goede aanvulling op de superman.',
      steps: [
        'Ga op je buik liggen, benen gestrekt.',
        'Handen bij je slapen of langs je lichaam.',
        'Til je bovenlichaam van de grond door je onderrug aan te spannen.',
        'Houd kort vast bovenaan, laat langzaam zakken.'
      ],
      focus: 'Houd je blik naar de grond (nek neutraal). Beweeg gecontroleerd, niet met een ruk.',
      mistake: 'Je hoofd in je nek gooien. Kijk naar de grond, niet omhoog.'
    }
  }
};

// Phase configuration
var PHASE_CONFIG = {
  1: {
    name: 'Fase 1 \u2014 Basis',
    description: 'Basistechnieken leren, lichaam laten wennen',
    unlockRequirement: null,
    krachtBoven: ['chest-press', 'shoulder-press', 'dumbbell-row', 'reverse-fly', 'dumbbell-pullover', 'bicep-curl', 'plank', 'dead-bug'],
    krachtOnder: ['leg-ext', 'leg-curl', 'goblet-squat', 'glute-bridge', 'superman', 'lower-back-ext', 'bird-dog', 'cat-cow'],
    krachtCompound: ['chest-press', 'dumbbell-row', 'reverse-fly', 'goblet-squat', 'shoulder-press', 'glute-bridge', 'plank', 'dead-bug']
  },
  2: {
    name: 'Fase 2 \u2014 Uitbreiding',
    description: 'Meer variatie, hogere gewichten, extra oefeningen',
    unlockRequirement: { sessions: 18, weeks: 6 },
    krachtBoven: ['chest-press', 'incline-press', 'shoulder-press', 'dumbbell-row', 'reverse-fly', 'prone-y-raise', 'dumbbell-pullover', 'bicep-curl', 'plank', 'dead-bug'],
    krachtOnder: ['leg-ext', 'leg-curl', 'goblet-squat', 'glute-bridge', 'superman', 'back-extension', 'lower-back-ext', 'bird-dog', 'cat-cow'],
    krachtCompound: ['chest-press', 'incline-press', 'dumbbell-row', 'reverse-fly', 'prone-y-raise', 'goblet-squat', 'shoulder-press', 'glute-bridge', 'plank', 'dead-bug']
  }
};

var TRAINING_DATA = {
  krachtBoven: {
    id: 'kracht-boven',
    name: 'Kracht: bovenlichaam + core',
    description: 'Focus op borst, schouders, rug en armen. Core stabiliteit met plank en dead bug.',
    type: 'kracht',
    warmup: { apparaat: 'Loopband', duur: '5\u20138 min', detail: '5.5\u20136.0 km/u, licht joggen of stevig wandelen' },
    cooldown: '5 min rustig wandelen, daarna deze stretches:',
    cooldownStretches: ['chest-doorway', 'hip-flexor', 'rug-stretch'],
    exerciseIds: ['chest-press', 'shoulder-press', 'dumbbell-row', 'dumbbell-pullover', 'bicep-curl', 'plank', 'dead-bug']
  },
  krachtOnder: {
    id: 'kracht-onder',
    name: 'Kracht: onderlichaam + rug',
    description: 'Focus op benen, billen en onderrug. Stabiliteit met core oefeningen.',
    type: 'kracht',
    warmup: { apparaat: 'Loopband', duur: '5\u20138 min', detail: '5.5\u20136.0 km/u, licht joggen of stevig wandelen' },
    cooldown: '5 min rustig wandelen, daarna deze stretches:',
    cooldownStretches: ['hamstrings', 'quads', 'glutes', 'hip-flexor'],
    exerciseIds: ['leg-ext', 'leg-curl', 'goblet-squat', 'glute-bridge', 'superman', 'lower-back-ext', 'bird-dog', 'cat-cow']
  },
  krachtCompound: {
    id: 'kracht-compound',
    name: 'Kracht: compound power',
    description: 'Zware samengestelde oefeningen voor maximale spiergroei. Boven + onder in \u00e9\u00e9n sessie.',
    type: 'kracht',
    warmup: { apparaat: 'Loopband', duur: '5\u20138 min', detail: '5.5\u20136.0 km/u, licht joggen of stevig wandelen' },
    cooldown: '5 min rustig wandelen, daarna volledige stretchroutine:',
    cooldownStretches: ['hip-flexor', 'hamstrings', 'quads', 'chest-doorway', 'rug-stretch', 'glutes'],
    exerciseIds: ['chest-press', 'dumbbell-row', 'goblet-squat', 'shoulder-press', 'glute-bridge', 'plank', 'dead-bug']
  },
  loopband: {
    id: 'loopband',
    name: 'Loopband sessie',
    type: 'cardio',
    options: [
      {
        name: 'Wandelen/joggen (aanbevolen)',
        totalMin: 34,
        isPrimary: true,
        phases: [
          { name: 'Warming-up', duur: 5, detail: '5.5 km/u, incline 1%', intensity: 'low' },
          { name: 'Hoofddeel', duur: 24, detail: '6 rondes: 3 min wandelen (5.5 km/u) + 1 min joggen (7.0 km/u). Incline 1\u20132%.', intensity: 'medium' },
          { name: 'Cooldown', duur: 5, detail: '5.0\u20135.5 km/u, incline 0%', intensity: 'low' }
        ],
        interval: { fast: 60, slow: 180, fastDetail: '7.0\u20138.0 km/u, incline 1% (joggen)', slowDetail: '5.5 km/u, incline 1\u20132% (wandelen)' }
      },
      {
        name: 'Stevig wandelen',
        totalMin: 40,
        phases: [
          { name: 'Warming-up', duur: 5, detail: '5.0\u20135.5 km/u, incline 0%', intensity: 'low' },
          { name: 'Hoofddeel', duur: 30, detail: '5.5\u20136.0 km/u, incline 1\u20132%', intensity: 'medium' },
          { name: 'Cooldown', duur: 5, detail: '5.0 km/u, incline 0%', intensity: 'low' }
        ],
        interval: null
      },
      {
        name: 'Interval joggen',
        totalMin: 30,
        phase2Only: true,
        phases: [
          { name: 'Warming-up', duur: 5, detail: '5.5 km/u, incline 0\u20131%', intensity: 'low' },
          { name: 'Intervals', duur: 20, detail: 'Wissel: 1 min stevig joggen (8.0 km/u) / 2 min wandelen (5.5 km/u)', intensity: 'high' },
          { name: 'Cooldown', duur: 5, detail: '5.0 km/u, incline 0%', intensity: 'low' }
        ],
        interval: { fast: 60, slow: 120, fastDetail: '8.0\u20139.0 km/u', slowDetail: '5.5 km/u' }
      }
    ]
  },
  cardioVariatie: {
    id: 'cardio-variatie',
    name: 'Cardio variatie',
    type: 'cardio',
    options: [
      {
        name: 'Crosstrainer (aanbevolen)',
        totalMin: 40,
        isPrimary: true,
        phases: [
          { name: 'Warming-up', duur: 5, detail: 'Laag tempo, lichte weerstand', intensity: 'low' },
          { name: 'Hoofddeel', duur: 30, detail: 'Matig tempo, weerstand 5\u20137', intensity: 'medium' },
          { name: 'Cooldown', duur: 5, detail: 'Laag tempo, lichte weerstand', intensity: 'low' }
        ],
        interval: null
      },
      {
        name: 'Recumbent bike',
        totalMin: 35,
        phases: [
          { name: 'Warming-up', duur: 5, detail: 'Laag tempo, lichte weerstand', intensity: 'low' },
          { name: 'Hoofddeel', duur: 25, detail: 'Matig tempo, weerstand 4\u20136', intensity: 'medium' },
          { name: 'Cooldown', duur: 5, detail: 'Laag tempo, lichte weerstand', intensity: 'low' }
        ],
        interval: null
      }
    ]
  },
  cardioLicht: {
    id: 'cardio-licht',
    name: 'Lichte cardio',
    type: 'cardio',
    options: [
      {
        name: 'Loopband rustig (aanbevolen)',
        totalMin: 30,
        isPrimary: true,
        phases: [
          { name: 'Warming-up', duur: 5, detail: '5.0 km/u, incline 0%', intensity: 'low' },
          { name: 'Hoofddeel', duur: 20, detail: '5.5 km/u, incline 0\u20131%', intensity: 'low' },
          { name: 'Cooldown', duur: 5, detail: '5.0 km/u, incline 0%', intensity: 'low' }
        ],
        interval: null
      },
      {
        name: 'Hometrainer',
        totalMin: 30,
        phases: [
          { name: 'Warming-up', duur: 5, detail: 'Laag tempo, lichte weerstand', intensity: 'low' },
          { name: 'Hoofddeel', duur: 20, detail: 'Matig tempo, weerstand 3\u20135', intensity: 'low' },
          { name: 'Cooldown', duur: 5, detail: 'Laag tempo, lichte weerstand', intensity: 'low' }
        ],
        interval: null
      }
    ]
  }
};

function getExercise(id) {
  var baseId = id.replace(/-[of]$/, '');
  return EXERCISE_DB[baseId] || EXERCISE_DB[id] || null;
}

// ================================================================
// DAILY ROUTINE (mobiliteit & core — elke dag)
// ================================================================
var DAILY_ROUTINE = [
  { id: 'cat-cow', name: 'Cat-cow', target: '10x', type: 'reps', totalTime: 30 },
  { id: 'dead-bug', name: 'Dead bug', target: '10/kant', type: 'reps', totalTime: 40 },
  { id: 'bird-dog', name: 'Bird-dog', target: '10/kant', type: 'reps', totalTime: 40 },
  { id: 'plank', name: 'Plank', target: '30 sec', type: 'timed', totalTime: 45 },
  { id: 'glute-bridge', name: 'Glute bridge', target: '15x', type: 'reps', totalTime: 30 },
  { id: 'neck-mobility', name: 'Neck mobility', target: '5/richting', type: 'reps', totalTime: 20 },
  { id: 'shoulder-mobility', name: 'Shoulder mobility', target: '10x', type: 'reps', totalTime: 20 }
];

// ================================================================
// STRETCH ROUTINES (cooldown & rustdagen)
// ================================================================
var STRETCH_ROUTINES = [
  {
    id: 'hip-flexor',
    name: 'Heup stretch (staand)',
    duur: 30,
    perKant: true,
    instruction: 'Sta rechtop, houd je ergens aan vast. Zet een voet een stap naar achteren. Buig je voorste knie licht en duw je heup van het achterste been naar voren. Je voelt een rek aan de voorkant van je heup. Houd 30 seconden per kant.',
    videoUrl: 'videos/hip-flexor.mp4',
    focus: 'Rug recht houden, niet voorover leunen.'
  },
  {
    id: 'hamstrings',
    name: 'Achterbeen stretch (staand)',
    duur: 30,
    perKant: true,
    instruction: 'Zet een voet een kleine stap naar voren, hiel op de grond, tenen omhoog. Buig licht door je achterste knie en leun met rechte rug voorover. Je voelt een rek achter in je bovenbeen. Houd 30 seconden, wissel dan.',
    videoUrl: 'videos/hamstrings.mp4',
    focus: 'Rug recht houden, niet afronden.'
  },
  {
    id: 'quads',
    name: 'Bovenbeen stretch',
    duur: 30,
    perKant: true,
    instruction: 'Sta rechtop (houd je ergens aan vast). Pak je enkel en trek je hiel naar je billen. Knie wijst naar de grond. Houd 30 seconden, wissel dan.',
    videoUrl: 'videos/quads.mp4',
    focus: 'Knie\u00ebn naast elkaar houden'
  },
  {
    id: 'chest-doorway',
    name: 'Borst & schouders stretch',
    duur: 30,
    perKant: true,
    instruction: 'Ga bij een muur staan. Plaats je arm in een 90-graden hoek tegen de muur. Leun naar voren tot je een rek voelt in je borst. Houd 30 seconden, wissel.',
    videoUrl: 'videos/chest-doorway.mp4',
    focus: 'Niet te ver doorduwen, rustig ademen'
  },
  {
    id: 'rug-stretch',
    name: 'Rug stretch (staand)',
    duur: 30,
    perKant: false,
    instruction: 'Sta rechtop. Leg je handen op je onderrug. Leun rustig naar achteren en duw je heupen licht naar voren. Je voelt een zachte rek in je onderrug. Houd 30 seconden.',
    videoUrl: 'videos/rug-stretch.mp4',
    focus: 'Niet te ver, rustig ademen. Knieën licht gebogen houden.'
  },
  {
    id: 'glutes',
    name: 'Billen stretch (zittend)',
    duur: 30,
    perKant: true,
    instruction: 'Ga op een stoel of bankje zitten. Leg je rechterenkel op je linkerknie (figuur-4 houding). Leun rustig voorover tot je een rek voelt in je rechterbil. Houd 30 seconden, wissel dan.',
    videoUrl: 'videos/glutes.mp4',
    focus: 'Rug recht houden, rustig ademen.'
  }
];

function getSchedule(weekType) {
  // Tim: 3x kracht (di-do-za), wo optioneel wandelen, rest = rust
  // Focus: body recompositie (massa opbouwen + vetpercentage verlagen)
  return {
    0: null,             // Zondag: rust
    1: null,             // Maandag: rust
    2: 'krachtBoven',    // Dinsdag: kracht bovenlichaam
    3: null,             // Woensdag: rust (optioneel licht wandelen)
    4: 'krachtOnder',    // Donderdag: kracht onderlichaam
    5: null,             // Vrijdag: rust
    6: 'krachtCompound'  // Zaterdag: compound/power
  };
}
