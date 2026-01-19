# 🚴 RIDER TRACKER PRO 1.1
**Controllo reale del guadagno per Rider professionisti**

---

## 📌 COS'È RIDER TRACKER PRO
**Rider Tracker Pro** è una Progressive Web App (PWA) pensata per Rider professionisti che vogliono capire **quanto guadagnano davvero**, non solo quanto incassano.

Il "Lordo" è un numero incompleto.  
Questa app calcola il **Netto Economico Reale**, sottraendo:
- tasse (configurabili tramite percentuale)
- costo carburante imputato ai turni

Tutti i dati restano **esclusivamente sul tuo dispositivo** tramite **LocalStorage**.  
Nessun account, nessun cloud, nessuna dipendenza esterna.

---

## 🎯 FILOSOFIA DEL PROGETTO
Rider Tracker Pro **non è un gestionale fiscale** e non vuole esserlo.

È uno strumento di:
- **controllo di gestione personale**
- **analisi dell'efficienza lavorativa**
- **supporto decisionale**

L'obiettivo non è la precisione "da commercialista", ma:
> **evitare decisioni sbagliate basate su numeri ingannevoli**

---

## 🧠 COME FUNZIONA IL MODELLO DI CALCOLO

### 🔹 Turni
Ogni turno registra:
- lordo (€ incassati)
- ore lavorate
- chilometri percorsi
- consumo del veicolo (L/100km)
- **mezzo utilizzato** (🚗 Auto, 🛵 Moto, 🚲 Bici)

Il consumo è **dichiarativo**:
- se il veicolo non lo fornisce → il campo può restare vuoto
- per le **bici** il consumo carburante è **automaticamente 0**
- il sistema usa solo dati realmente inseriti dall'utente

---

### 🔹 Selezione Mezzo di Trasporto

**Nuova funzionalità v1.1:**

Ogni turno può essere associato a un mezzo specifico:

**Mezzi disponibili:**
- 🚗 **Auto** - richiede consumo carburante
- 🛵 **Moto** - richiede consumo carburante
- 🚲 **Bici** - NO consumo carburante (zero automatico)

**Come funziona:**

Quando registri un turno:
1. Clicca sul selettore mezzo (mostra "🚗 Auto" di default)
2. Appare un modal con le 3 opzioni
3. Scegli il mezzo utilizzato
4. Se scegli **Bici**:
   - Il campo "Consumo L/100km" viene nascosto
   - Il consumo viene impostato automaticamente a 0
   - Il costo carburante per quel turno sarà 0
5. Se scegli **Auto** o **Moto**:
   - Il campo consumo rimane visibile
   - Devi inserire il consumo reale

**Benefici:**
- Tracciamento accurato per rider multi-veicolo
- Nessun costo benzina per turni in bici
- Calcoli netti più precisi
- Statistiche separate per mezzo

**Visualizzazione nello storico:**
- I turni mostrano l'icona del mezzo utilizzato
- Nella label "TURNO" viene aggiunta l'emoji corrispondente

---

### 🔹 Rifornimenti (⛽)
I rifornimenti **NON vengono scaricati direttamente sul netto**.

Servono a:
- definire il **prezzo al litro valido** nel periodo
- che viene associato automaticamente ai turni successivi

Il costo carburante viene calcolato come:

**litri stimati × prezzo €/L del periodo**

Questo evita:
- mesi falsamente "in perdita"
- distorsioni dovute ai pieni anticipati

**IMPORTANTE per turni in bici:**
- I turni in bici hanno consumo 0
- Quindi il costo carburante è sempre 0 indipendentemente dal prezzo al litro

---

### 🔹 Prezzo iniziale
Se il mese inizia senza rifornimenti registrati:
- l'app chiede il **prezzo dell'ultimo rifornimento noto**
- garantendo continuità di calcolo tra i mesi
- **ECCEZIONE**: se il primo turno è in bici, NON chiede il prezzo (non serve)

---

### 🔹 Gestione Tassazione
La percentuale di tasse è **personalizzabile** nel campo "TAX %":
- si applica automaticamente al lordo di ogni turno
- il calcolo è: **Netto = Lordo - (Lordo × TAX%) - Costo Benzina**
- modificabile in qualsiasi momento per adattarsi al proprio regime fiscale
- valore predefinito: 20%

---

### 🔹 Sistema Target
Imposta un obiettivo mensile di guadagno netto:
- visualizzazione percentuale obiettivo raggiunto
- calcolo automatico dell'importo lordo mancante
- barra di progresso visiva
- motivazione continua durante il mese

---

### ℹ️ DIFFERENZA TRA "SPESA BENZINA" E "RIFORNIMENTI"

**SPESA BENZINA** (mostrata nel dashboard):
- è il **costo stimato del carburante consumato durante i turni**
- calcolato come: km percorsi × consumo × prezzo/litro del periodo
- rappresenta il costo **imputabile all'attività lavorativa**
- **i turni in bici hanno costo 0** e non influenzano questo valore

**RIFORNIMENTI** (visibili nel report):
- sono gli **importi reali pagati al distributore**
- servono solo come **marcatori di prezzo** per calcolare i costi dei turni
- vengono tracciati separatamente

È **normale** che questi due valori siano diversi:
- se fai un pieno prima dell'inizio del mese, quella spesa non impatta il calcolo del mese corrente
- se finisci il mese con il serbatoio mezzo pieno, quella benzina verrà "pagata" economicamente nei turni già registrati
- i turni in bici riducono la spesa benzina totale

**Esempio pratico:**

Turni di gennaio:
- 600 km in moto con consumo 4L/100km a prezzo €1.85/L = €44.40
- 200 km in bici senza consumo carburante = €0.00
- TOTALE SPESA BENZINA: €44.40

Rifornimenti di gennaio: 
- €35 pagati il 10 gennaio
- €40 pagati il 28 gennaio
- TOTALE RIFORNIMENTI REALI: €75

La differenza dipende da:
- pieno fatto a fine dicembre
- serbatoio non completamente vuoto a fine gennaio
- turni in bici che non consumano carburante

Il modello **"imputazione al consumo"** è più corretto economicamente rispetto al modello **"cassa"** (pago → scarico).

---

## 📊 ANALISI EFFICIENZA OPERATIVA

Nel **Report PDF** è presente una sezione di analisi avanzata che segmenta automaticamente il mese in periodi omogenei.

### 🔍 Come Funziona
Il sistema:
- analizza i turni in ordine cronologico
- individua **cambi strutturali di consumo** (variazioni superiori al 10%)
- segmenta automaticamente il mese in **periodi omogenei**
- richiede almeno 3 turni per creare un periodo

Per ogni periodo vengono calcolati:
- numero turni
- km totali
- consumo medio (km/l)
- costo carburante totale
- netto del periodo
- netto orario (€/h)

### 📈 Utilità Pratica
Questa analisi permette di:
- individuare cali di efficienza (es. problema meccanico, cambio percorsi)
- confrontare performance in condizioni diverse (meteo, orari, zone)
- ottimizzare strategie di lavoro basandosi su dati oggettivi
- identificare il periodo più profittevole del mese
- **vedere l'impatto dei turni in bici sul consumo medio**

**Importante**: questa analisi è **diagnostica** e **non modifica** i calcoli economici del dashboard.

---

## 🚗 GESTIONE KM EXTRA

La funzione **KM EXTRA** permette di registrare chilometri percorsi **fuori dall'attività lavorativa**.

### A cosa serve
- Monitorare l'uso personale del veicolo
- Calcolare i consumi reali complessivi
- Separare km lavorativi da km privati
- Tracciare il chilometraggio totale per manutenzioni

### Come funziona
- I km extra vengono registrati con data
- Sono visibili nello storico separatamente dai turni
- NON influenzano i calcoli economici
- Servono solo per monitoraggio personale

### Utilità
- Capire se i consumi dichiarati nei turni sono realistici
- Individuare anomalie nel consumo (es. perdite, problemi meccanici)
- Pianificare manutenzioni basandosi sul chilometraggio totale
- Distinguere uso lavorativo da uso personale del veicolo
- ## 📱 INTERFACCIA E FUNZIONALITÀ

### Dashboard Principale
La schermata principale mostra in tempo reale:

**Prima riga (metriche principali):**
- **LORDO**: totale incassato nel mese corrente
- **NETTO**: guadagno reale dopo tasse e benzina
- **ORE**: ore totali lavorate

**Seconda riga (efficienza):**
- **LITRI STIM.**: litri di carburante consumati (stimati, esclusi turni bici)
- **KM/L**: efficienza media del veicolo
- **SPESA BENZ.**: costo carburante imputato ai turni (esclusi turni bici)

**Terza riga (configurazione):**
- **TARGET**: obiettivo mensile netto (campo modificabile)
- **TAX %**: percentuale tasse (campo modificabile)
- **MANCANTE**: quanto manca in lordo per raggiungere il target

**Barra di progresso:**
- Mostra percentuale obiettivo raggiunto
- Colore gradiente da turchese a giallo-verde
- Aggiornamento in tempo reale

**Informazioni live:**
- **Orologio**: data e ora corrente (GG/MM/AA HH:MM:SS)
- **MEDIA**: guadagno orario medio (€/h)

### Pulsanti Azione Principale
Nella parte inferiore dello schermo, 4 pulsanti colorati:

1. **TURNO** (verde turchese)
   - Icona: portafoglio
   - Funzione: registra nuovo turno di lavoro

2. **BENZINA** (arancione)
   - Icona: pompa di benzina
   - Funzione: registra rifornimento

3. **EXTRA** (rosso)
   - Icona: strada
   - Funzione: registra km non lavorativi

4. **STORICO** (bianco)
   - Icona: orologio storico
   - Funzione: visualizza tutti i dati inseriti

### Pulsante Multi-Funzione
Un grande pulsante turchese diviso in 3 sezioni:

**RIEPILOGO | GRAFICO | STAMPA**

Apre la vista Report completa con accesso a:
- Report PDF dettagliato del mese
- Grafici di analisi resa (€/ora e €/km)
- Funzione stampa/salvataggio PDF
- Export/Import database

### Pulsante Reset
Un pulsante rosso scuro in fondo:
- **AZZERA DATABASE**
- Elimina completamente tutti i dati
- Richiede doppia conferma
- Usa con estrema cautela

---

## 📈 GRAFICI DI ANALISI RESA

Accessibili dal Report PDF tramite il pulsante **"GRAFICO RESA"**.

### Due Grafici Interattivi

**1. € / ORA (NETTO)**
- Linea continua color turchese
- Mostra il guadagno orario netto per ogni turno
- Evidenzia trend dell'efficienza temporale
- Identifica i turni più profittevoli per ora lavorata

**2. € / KM (NETTO)**
- Linea tratteggiata color rosso
- Mostra il guadagno per chilometro percorso
- Evidenzia l'efficienza operativa per distanza
- Identifica le zone/percorsi più redditizi
- **Turni in bici mostrano null** (non ha senso €/km senza costo carburante)

### Come Interpretarli

**Grafico €/Ora:**
- Valori alti = turno molto profittevole per tempo investito
- Valori bassi = molte ore con poco guadagno
- Trend crescente = efficienza in miglioramento
- Trend decrescente = possibile saturazione o zone meno profittevoli
- **I turni in bici possono avere €/h più alti** (zero costo carburante)

**Grafico €/Km:**
- Valori alti = percorsi brevi ma remunerativi
- Valori bassi = molti km con poche consegne
- Utile per capire se vale la pena fare lunghe distanze
- **Turni in bici non compaiono** (non applicabile)

### Utilizzo Pratico
- Confronta turni dello stesso giorno della settimana
- Identifica fasce orarie più profittevoli
- Ottimizza zone di lavoro
- Decidi se accettare ordini lunghi o corti
- **Confronta redditività tra mezzi diversi**

### Caratteristiche Tecniche
- Costruiti con Chart.js
- Responsive e ottimizzati per mobile
- Interpolazione smooth per linee fluide
- Scale automatiche basate sui dati reali
- Legenda sempre visibile
- Gestione valori null per turni senza km validi

---

## 🔔 GESTIONE FINE MESE

L'app riconosce automaticamente l'inizio di un nuovo mese.

### Cosa Succede il Giorno 1
Quando apri l'app il primo giorno del mese:
- Dopo 2 secondi appare un **popup di notifica**
- Titolo: "🔔 FINE MESE"
- Messaggio: "Il mese è terminato. Vuoi stampare il Report PDF delle tue attività?"
- Due opzioni: **CHIUDI** o **STAMPA ORA**

### Se Scegli "STAMPA ORA"
- Il popup si chiude
- Si apre automaticamente la vista Report
- Viene mostrato il report completo del mese appena concluso
- Puoi stamparlo o salvarlo come PDF

### Se Scegli "CHIUDI"
- Il popup si chiude
- Puoi stampare il report in qualsiasi momento manualmente
- L'avviso non si ripresenterà fino al prossimo mese

### Continuità Dati
- L'ultimo prezzo benzina viene mantenuto per il mese successivo
- I totali del dashboard vengono azzerati automaticamente
- Lo storico completo rimane disponibile
- Nessuna perdita di dati

---

## 💾 SISTEMA DI BACKUP AUTOMATICO

### Proposta Backup Dopo Ogni Salvataggio
Ogni volta che salvi un elemento (turno, benzina, km extra):
- Appare un popup: "💾 ESPORTA DATABASE"
- Messaggio: "Vuoi esportare un backup del database aggiornato?"
- Due opzioni: **NO** o **SI**

Questo garantisce che tu abbia sempre un backup recente prima di chiudere l'app.

### Come Funziona
**Se scegli SI:**
- Viene generato un file JSON
- Il browser scarica automaticamente il file
- Nome file: backup_rider_AAAA-MM-GG.json

**Se scegli NO:**
- Il popup si chiude
- Puoi continuare a usare l'app normalmente
- Il backup può essere fatto manualmente in seguito

### Struttura File Backup
Il file contiene:
- Timestamp del backup
- Nome app e versione
- Tutti i turni registrati
- Tutti i rifornimenti
- Tutti i km extra
- Target mensili impostati
- Percentuale tasse

---

## 📥 IMPORTAZIONE DATABASE

### Come Ripristinare un Backup

**Dal Report PDF:**
1. Clicca sul pulsante **"IMPORTA BACKUP"**
2. Seleziona il file .json salvato in precedenza
3. L'app valida il file
4. Se valido: sovrascrive completamente il database locale
5. La pagina si ricarica automaticamente
6. Tutti i dati vengono ripristinati

### Validazione File
L'app controlla che il file contenga:
- Il campo db obbligatorio
- Struttura dati valida
- Formato JSON corretto

Se il file non è valido:
- Appare un alert: "File di backup non valido"
- Nessun dato viene modificato
- Puoi ritentare con un file diverso

### Quando Usarlo
- Cambio dispositivo
- Ripristino dopo reset accidentale
- Trasferimento dati tra browser
- Recupero da cancellazione cache

**ATTENZIONE**: L'importazione **sovrascrive completamente** i dati attuali. Assicurati di avere un backup del database corrente prima di importare.

---

## 🗑️ ELIMINAZIONE ELEMENTI

### Come Eliminare un Elemento
Nello **Storico**:
1. Trova l'elemento da eliminare
2. Clicca sul pulsante **×** rosso a destra
3. Appare un popup di conferma
4. Due opzioni: **ANNULLA** o **ELIMINA**

### Conferma Eliminazione
**Popup:**
- Titolo: "Conferma Eliminazione"
- Messaggio: "Sei sicuro di voler eliminare questo elemento dallo storico?"
- Pulsante grigio: **ANNULLA** (chiude il popup)
- Pulsante rosso: **ELIMINA** (rimuove l'elemento)

### Cosa Succede Dopo
Se confermi l'eliminazione:
- L'elemento viene rimosso dal database
- Tutti i calcoli vengono ricalcolati automaticamente
- Il dashboard si aggiorna in tempo reale
- Lo storico si riorganizza
- Il popup si chiude automaticamente

### Elementi Eliminabili
- ✅ Turni (tutti i dati del turno, incluso il mezzo)
- ✅ Rifornimenti (spesa e prezzo)
- ✅ KM Extra (chilometri extra)

### Sicurezza
- Ogni elemento ha un ID univoco
- Doppia conferma sempre richiesta
- Nessuna eliminazione accidentale possibile
- **L'azione è irreversibile** - fai backup regolari

**IMPORTANTE**: Non esiste funzione di modifica diretta. Per correggere un dato errato:
1. Elimina l'elemento sbagliato
2. Ricrealo con i dati corretti
## 📜 STORICO COMPLETO

### Accesso allo Storico
Clicca sul pulsante **STORICO** (bianco, icona orologio) nella barra inferiore.

### Cosa Visualizza
Lo storico mostra **tutti gli elementi** registrati in ordine cronologico inverso (più recenti prima):
- Turni (con indicazione mezzo utilizzato)
- Rifornimenti
- KM Extra

Ogni elemento è identificabile visivamente da colore e icona.

### Tipologie di Elementi

**🔷 TURNO (bordo turchese)**
- Icona: portafoglio
- Etichetta: "TURNO" in turchese
- Data e ora del turno
- Valore principale: 
  - **Lordo (L)** in €
  - **Netto (N)** in € con **colore dinamico**:
    - 🟢 Verde = resa ottima (≥ media mensile)
    - 🟡 Arancione = resa buona (≥ 80% media mensile)
    - 🔴 Rosso = resa sotto media (< 80% media mensile)
- Dettagli:
  - Chilometri percorsi
  - Ore lavorate
  - Consumo dichiarato (L/100km) con km/l effettivi
  - Litri stimati consumati
  - Prezzo carburante del periodo
  - **Per bici: consumo 0/100 (∞ km/l)**

**🟠 BENZINA (bordo arancione)**
- Icona: pompa benzina
- Etichetta: "BENZINA" in arancione
- Data e ora del rifornimento
- Valore principale: Spesa in €
- Dettagli:
  - Prezzo al litro (€/L con 3 decimali)
  - Litri riforniti (calcolati automaticamente)

**🔴 EXTRA (bordo rosso)**
- Icona: strada
- Etichetta: "EXTRA" in rosso
- Data del tragitto
- Valore principale: Chilometri percorsi
- Dettagli: "Chilometri extra isolati"

### Sistema di Colori Netto Turno

Il netto di ogni turno viene colorato in base alla sua **resa oraria** rispetto alla **media mensile**:

**Calcolo:**
1. Media oraria mese = Netto totale ÷ Ore totali
2. Resa turno = Netto turno ÷ Ore turno
3. Confronto: resa turno vs media mese

**Colori:**
- 🟢 **Verde**: Turno ottimo, resa ≥ 100% media
- 🟡 **Arancione**: Turno accettabile, resa ≥ 80% media
- 🔴 **Rosso**: Turno sotto media, resa < 80% media

**Utilità:**
- Identificare a colpo d'occhio i turni migliori e peggiori
- Capire quali turni abbassano la media
- Ottimizzare orari e zone di lavoro
- **I turni in bici spesso sono verdi** (zero costo carburante)

### Pulsante Elimina
Ogni elemento ha un pulsante **×** rosso sulla destra:
- Clicca per aprire conferma eliminazione
- Vedi sezione "Eliminazione Elementi"

### Chiudere lo Storico
In fondo alla lista:
- Pulsante grigio **"CHIUDI"**
- Riporta al dashboard principale

---

## 🧾 REPORT PDF COMPLETO

### Accesso al Report
Clicca sul grande pulsante **RIEPILOGO | GRAFICO | STAMPA** nella barra inferiore.

### Struttura del Report

**INTESTAZIONE**
- Titolo: "RIEPILOGO MESE DI [MESE] [ANNO]"
- Es. "RIEPILOGO MESE DI GENNAIO 2025"
- Formattazione professionale per stampa

---

**SEZIONE 1: DETTAGLIO TURNI**

Tabella con le seguenti colonne:
- **DATA**: giorno/mese/anno del turno
- **LORDO**: importo lordo in €
- **NETTO**: importo netto dopo tasse e benzina
- **ORE**: ore lavorate
- **KM**: chilometri percorsi
- **L/100**: consumo dichiarato (0 per bici)
- **KM/L**: efficienza effettiva (∞ per bici)
- **LITRI**: litri stimati consumati (0.00L per bici)

**Riga finale (bordo doppio):**
- Totali di tutte le colonne
- In grassetto per evidenziare

---

**SEZIONE 2: DETTAGLIO RIFORNIMENTI**

Tabella con le seguenti colonne:
- **DATA**: giorno/mese/anno del rifornimento
- **SPESA**: importo pagato in €
- **PREZZO/L**: prezzo al litro (3 decimali)
- **LITRI**: litri riforniti

**Riga finale (bordo doppio):**
- Totale spesa sostenuta
- Totale litri riforniti
- In grassetto

---

**SEZIONE 3: ANALISI EFFICIENZA OPERATIVA**

Tabella con periodi automatici:
- **PERIODO**: es. "P1 - 15/01 → 20/01" (su 2 righe)
- **TURNI**: numero turni nel periodo
- **CHILOMETRI**: km totali del periodo
- **MEDIA**: consumo medio km/l
- **BENZINA**: costo carburante totale
- **NETTO**: guadagno netto del periodo
- **€/H**: guadagno orario medio

**Nota**: Le date sono compatte senza anno completo per risparmiare spazio.

---

**SEZIONE 4: RIEPILOGO FINALE**

Box riepilogativo con:

**Metriche operative:**
- Ore totali lavorate
- Kilometri turni
- Media consumo (KM/L)

**Separatore visivo (linea doppia)**

**Calcolo economico:**
- Lordo totale
- Tasse pagate (con percentuale)
- Benzina turni stimata
- **NETTO FINALE** (evidenziato in grassetto)

**Separatore**

**Monitoraggio aggiuntivo:**
- Totale chilometri extra
- Totale km complessivi (extra + turni)
- Monitoraggio rifornimenti (spesa reale pagata)

---

### Azioni Disponibili dal Report

**BARRA INFERIORE (4 pulsanti in griglia):**

**Prima riga:**
- **ESPORTA BACKUP** (turchese)
  - Icona: file-export
  - Scarica database JSON

- **IMPORTA BACKUP** (turchese)
  - Icona: file-import
  - Carica database JSON

**Seconda riga:**
- **STAMPA** (nero)
  - Icona: stampante
  - Apre dialog stampa browser

- **GRAFICO RESA** (rosso)
  - Icona: grafico a linee
  - Apre i grafici €/ora e €/km

**Terza riga:**
- **CHIUDI** (grigio scuro, occupa 2 colonne)
  - Icona: X
  - Torna al dashboard

---

## 🖨️ STAMPA E SALVATAGGIO PDF

### Metodo 1: Stampa da Fine Mese
1. Si apre automaticamente il primo giorno del mese
2. Clicca **"STAMPA ORA"** nel popup
3. Si apre la vista Report
4. La finestra di stampa si apre automaticamente

### Metodo 2: Stampa Manuale
1. Apri il Report dal pulsante principale
2. Clicca **"STAMPA"** nella barra inferiore
3. Si apre la finestra di stampa del browser

### Finestra di Stampa
Opzioni disponibili:
- **Destinazione**: Stampante fisica o "Salva come PDF"
- **Layout**: Verticale (consigliato)
- **Margini**: Predefiniti
- **Scala**: 100%
- **Pagine**: Tutte

### Ottimizzazioni Automatiche
Quando stampi, l'app nasconde automaticamente:
- Pulsanti di navigazione
- Barra inferiore con azioni
- Popup e modal
- Elementi interattivi

Rimane visibile solo:
- Il report completo
- Tutte le tabelle
- Tutti i dati

### Salvataggio PDF
**Da Computer:**
- Seleziona "Salva come PDF" come destinazione
- Clicca "Salva"
- Scegli nome e posizione

**Da Mobile:**
- Seleziona "Salva come PDF"
- Il file viene salvato nella cartella Download
- Puoi condividerlo via email, WhatsApp, Drive, ecc.

### Formato Ottimale
- **Dimensione**: A4
- **Orientamento**: Verticale
- **Font**: Leggibili anche stampati
- **Tabelle**: Bordi netti
- **Layout**: Professionale
## ⚙️ REGISTRAZIONE NUOVO TURNO

### Apertura Modal Turno
Clicca sul pulsante **TURNO** (verde) nella barra inferiore.

### Selezione Data
Tre menu a tendina già pre-compilati con la data odierna:
- **Giorno**: 1-31 (giorno corrente selezionato)
- **Mese**: Gen-Dic (mese corrente selezionato)
- **Anno**: 2024-2030 (anno corrente selezionato)

Puoi modificare qualsiasi valore per registrare turni retroattivi.

### Selezione Mezzo di Trasporto

**Nuovo campo v1.1:**

Prima di compilare i dati del turno, seleziona il mezzo utilizzato:

**Selettore visivo:**
- Appare come un campo con icona a discesa
- Default: 🚗 Auto
- Clicca per aprire il modal di selezione

**Modal Selezione Mezzo:**
- **🚗 Auto** - pulsante con emoji auto
- **🛵 Moto** - pulsante con emoji moto
- **🚲 Bici** - pulsante con emoji bici
- Pulsante ANNULLA per chiudere

**Comportamento:**
- Selezioni il mezzo → il modal si chiude
- L'icona nel selettore si aggiorna
- Se scegli **Bici**: il campo "Consumo L/100km" **si nasconde automaticamente**
- Se scegli **Auto/Moto**: il campo consumo **riappare**

### Campi da Compilare

**LORDO (€)**
- Importo lordo incassato
- Formato: numero con punto decimale
- Esempio: 45.50
- Campo obbligatorio

**ORE LAVORATE**
- Ore di lavoro effettive
- Formato: numero con decimale
- Esempio: 4.5 (4 ore e 30 minuti)
- Campo obbligatorio

**CHILOMETRI PERCORSI**
- Km totali del turno
- Formato: numero intero
- Esempio: 85
- Campo obbligatorio

**CONSUMO L/100KM**
- Consumo del veicolo
- Formato: numero con decimale
- Esempio: 4.2
- Campo opzionale (se non disponibile lascia vuoto)
- **Nascosto automaticamente se mezzo = Bici**

### Gestione Prezzo Carburante

**Se è il primo turno del mese:**
- Dopo aver cliccato "SALVA TURNO"
- **Se mezzo = Bici**: il turno viene salvato direttamente (non serve prezzo)
- **Se mezzo = Auto/Moto** e non ci sono rifornimenti registrati:
  - Appare un popup: "⛽ ULTIMO PREZZO"
  - Messaggio: "Database vuoto. Inserisci il prezzo dell'ultimo rifornimento:"
  - Campo input con formattazione automatica
  - Digita il prezzo (es. 1850 diventa 1.850)
  - Clicca **"IMPOSTA E SALVA TURNO"**

**Se ci sono già rifornimenti:**
- Il prezzo viene preso automaticamente dall'ultimo rifornimento
- Nessun popup appare
- Il turno viene salvato immediatamente

### Salvataggio
Clicca **"SALVA TURNO"** (pulsante turchese):
- Il turno viene aggiunto al database
- Tutti i calcoli si aggiornano
- Il modal si chiude
- Appare il popup di proposta backup
- Torni al dashboard aggiornato

### Annullamento
Clicca **"ANNULLA"** (pulsante grigio):
- Il modal si chiude
- Nessun dato viene salvato
- Torni al dashboard

---

## ⛽ REGISTRAZIONE RIFORNIMENTO

### Apertura Modal Benzina
Clicca sul pulsante **BENZINA** (arancione) nella barra inferiore.

### Selezione Data
Tre menu a tendina pre-compilati con la data odierna:
- Giorno, Mese, Anno
- Funzionamento identico al modal Turno

### Campi da Compilare

**EURO SPESI (€)**
- Importo pagato alla pompa
- Formato: numero con punto decimale
- Esempio: 35.00
- Campo obbligatorio

**PREZZO (€/L)**
- Prezzo al litro
- Formattazione automatica speciale
- Digita solo numeri: 1850 → diventa 1.850
- Prima cifra = parte intera
- Successive 3 cifre = decimali
- Campo obbligatorio

### Formattazione Automatica Prezzo

**Come digitare:**
- Digita: 1850 → Appare: 1.850
- Digita: 2 → Appare: 2
- Digita: 2005 → Appare: 2.005
- Digita: 1749 → Appare: 1.749

Il sistema:
- Accetta solo cifre (0-9)
- Rimuove automaticamente caratteri non numerici
- Formatta mentre digiti
- Massimo 4 cifre totali (1 intera + 3 decimali)

### Calcolo Litri Automatico
L'app calcola automaticamente:
- Litri riforniti = Euro spesi ÷ Prezzo al litro
- Viene mostrato nel report e nello storico

### Salvataggio
Clicca **"SALVA BENZINA"** (pulsante arancione):
- Il rifornimento viene aggiunto al database
- Il prezzo diventa valido per i turni successivi
- Il modal si chiude
- Appare il popup di proposta backup
- Torni al dashboard

### Annullamento
Clicca **"ANNULLA"** (pulsante grigio):
- Il modal si chiude senza salvare

---

## 🛣️ REGISTRAZIONE KM EXTRA

### Apertura Modal Extra
Clicca sul pulsante **EXTRA** (rosso) nella barra inferiore.

### Selezione Data
Tre menu a tendina pre-compilati con la data odierna:
- Giorno, Mese, Anno
- Funzionamento identico agli altri modal

### Campo da Compilare

**CHILOMETRI PERCORSI**
- Km percorsi fuori dall'attività lavorativa
- Formato: numero intero
- Esempio: 50
- Campo obbligatorio

### A Cosa Servono
I km extra:
- NON influenzano i calcoli economici
- Servono solo per monitoraggio personale
- Aiutano a tracciare l'uso totale del veicolo
- Utili per programmare manutenzioni
- Permettono di calcolare consumi reali complessivi

### Salvataggio
Clicca **"SALVA EXTRA"** (pulsante rosso con testo bianco):
- I km extra vengono aggiunti al database
- Sono visibili nello storico
- Il totale appare nel riepilogo finale del report
- Il modal si chiude
- Appare il popup di proposta backup

### Annullamento
Clicca **"ANNULLA"** (pulsante grigio):
- Il modal si chiude senza salvare

---

## 🎯 CONFIGURAZIONE TARGET E TASSE

### Impostazione Target Mensile

**Dove si trova:**
- Dashboard principale
- Card con etichetta "TARGET"
- Campo input numerico

**Come usarlo:**
1. Clicca nel campo TARGET
2. Digita l'importo netto che vuoi guadagnare
3. Esempio: 1200 (per €1200 netti)
4. Il valore si salva automaticamente mentre digiti
5. Nessun pulsante "salva" necessario

**Cosa succede:**
- La barra di progresso si aggiorna
- Appare la percentuale raggiunta
- Il campo "MANCANTE" mostra quanto lordo serve ancora
- Il calcolo è: quanto lordo devi fare per raggiungere quel netto, considerando tasse e benzina

### Impostazione Percentuale Tasse

**Dove si trova:**
- Dashboard principale
- Card con etichetta "TAX %"
- Campo input numerico

**Come usarlo:**
1. Clicca nel campo TAX %
2. Digita la percentuale (solo numero)
3. Esempio: 20 (per 20%)
4. Il valore si salva automaticamente
5. Valore predefinito: 20%

**Cosa succede:**
- Tutti i calcoli si aggiornano immediatamente
- Il netto viene ricalcolato con la nuova percentuale
- La formula è sempre: Netto = Lordo - (Lordo × TAX%) - Benzina

### Quando Modificare la TAX %
- Regime forfettario: imposta la tua aliquota reale
- Partita IVA ordinaria: considera IRPEF + contributi
- Regime dei minimi: usa la percentuale effettiva
- Cambi di regime fiscale durante l'anno

**Nota**: Il calcolo è semplificato e non sostituisce la consulenza fiscale professionale.
## 📲 INSTALLAZIONE COME APP

### 📱 Android (Chrome o Edge)

**Metodo 1: Banner Automatico**
1. Apri l'app con Chrome o Edge
2. Cerca il banner "Installa Rider Tracker Pro" che appare automaticamente
3. Tocca **"Installa"**
4. L'app si installa sulla schermata Home

**Metodo 2: Menu Browser**
1. Apri l'app con Chrome o Edge
2. Tocca il menu (⋮ tre puntini) in alto a destra
3. Cerca e tocca **"Aggiungi a schermata Home"** o **"Installa app"**
4. Nella finestra che appare, tocca **"Aggiungi"** o **"Installa"**
5. L'icona "Rider Tracker Pro" appare nella schermata Home
6. Toccala per aprire l'app a schermo intero

**Risultato:**
- Icona dedicata sulla Home
- Apertura a schermo intero senza barra browser
- Funziona offline come app nativa
- Più veloce e fluida

---

### 🍎 iPhone/iPad (Solo Safari)

**IMPORTANTE**: L'installazione PWA su iOS funziona **solo con Safari**. Se usi Chrome, Firefox o altri browser, non potrai installarla come app.

**Procedura:**
1. Apri l'app con **Safari**
2. Tocca l'icona **Condividi** (quadrato con freccia ↑) in basso al centro
3. Scorri il menu verso il basso
4. Trova e tocca **"Aggiungi a Home"**
5. (Opzionale) Modifica il nome in "Rider Pro" o lascia "Rider Tracker Pro"
6. Tocca **"Aggiungi"** in alto a destra
7. L'icona appare nella schermata Home del tuo iPhone/iPad
8. Toccala per aprire l'app

**Risultato:**
- Icona dedicata sulla Home come le app native
- Schermo intero senza barre Safari
- Funzionamento offline completo
- Padding automatico per il notch/Dynamic Island
- Esperienza identica a un'app dello Store

**Verifica modalità standalone:**
- Se vedi la scritta "RIDER TRACKER PRO V1.1" un po' più in alto del normale, sei in modalità app
- Non vedrai più la barra Safari in basso
- L'app occupa tutto lo schermo disponibile

---

### 🖥️ Desktop (Windows/Mac)

**Chrome o Edge:**
1. Apri l'app con Chrome o Edge sul computer
2. Guarda la barra degli indirizzi
3. Cerca l'icona **"Installa"** (⊕ o +) a destra
4. Clicca sull'icona
5. Nella finestra popup, clicca **"Installa"**
6. L'app si apre in una finestra dedicata
7. Viene creata un'icona sul desktop e nel menu Start/Applicazioni

**Risultato:**
- Finestra dedicata senza barra browser
- Icona nel menu Start (Windows) o Dock (Mac)
- Avvio rapido come programma installato
- Funziona offline

---

### ✅ Vantaggi dell'Installazione

**Esperienza Migliorata:**
- 🚀 Avvio più rapido
- 📱 Schermo intero
- 🎨 Interfaccia pulita senza barre browser
- 💾 Funzionamento offline garantito
- 🔔 Notifiche (se implementate in futuro)

**Praticità:**
- Icona sempre visibile nella Home
- Non devi cercare il link nel browser
- Non rischi di chiudere accidentalmente la tab
- Esperienza identica a un'app nativa

**Performance:**
- Caricamento più veloce
- Uso ottimizzato della RAM
- Migliore gestione cache

---

## 💡 CASI D'USO PRATICI

### Scenario 1: Monitoraggio Giornaliero

**Situazione:**
Sei un rider che lavora 5-6 giorni a settimana e vuoi sapere quanto stai guadagnando realmente.

**Come usare l'app:**
1. **Ogni sera dopo il turno:**
   - Apri l'app
   - Clicca TURNO
   - Seleziona il mezzo utilizzato (auto/moto/bici)
   - Inserisci: lordo del giorno, ore lavorate, km fatti
   - Se auto/moto: inserisci consumo
   - Salva
   
2. **Quando fai benzina:**
   - Apri l'app
   - Clicca BENZINA
   - Inserisci: quanto hai speso, prezzo al litro
   - Salva

3. **Durante il mese:**
   - Controlla il dashboard ogni giorno
   - Vedi quanto hai fatto di netto reale
   - Monitora la barra di progresso verso il target

4. **A fine mese:**
   - Stampa il report PDF
   - Archivia per confronti futuri

**Risultato:**
Sai sempre esattamente quanto stai guadagnando, non quanto incassi.

---

### Scenario 2: Ottimizzazione Zone e Orari

**Situazione:**
Vuoi capire quali zone e fasce orarie sono più profittevoli.

**Come usare l'app:**
1. **Registra ogni turno con precisione:**
   - Anche se lavori più volte al giorno, registra turni separati
   - Esempio: pranzo (12-15) e cena (19-23) come 2 turni distinti
   - Indica sempre il mezzo corretto

2. **Dopo 2 settimane:**
   - Apri Report → Grafico Resa
   - Guarda il grafico €/Ora
   - Identifica i picchi (turni più profittevoli)
   
3. **Analizza i pattern:**
   - Weekend vs infrasettimanali
   - Pranzo vs cena
   - Maltempo vs bel tempo
   - Auto/moto vs bici

4. **Consulta l'Analisi Efficienza:**
   - Vedi se ci sono periodi con resa diversa
   - Confronta il €/H tra periodi

**Risultato:**
Sai quando conviene lavorare e quando no, basandoti su dati reali.

---

### Scenario 3: Rider Multi-Veicolo

**Situazione:**
Lavori sia in bici che in moto/auto a seconda delle condizioni meteo o della zona.

**Come usare l'app:**
1. **Registra sempre il mezzo corretto:**
   - Seleziona 🚲 Bici per turni in bicicletta
   - Seleziona 🛵 Moto o 🚗 Auto per turni motorizzati

2. **Osserva i netti colorati nello storico:**
   - I turni in bici sono spesso verdi (resa alta, zero benzina)
   - Confronta la redditività effettiva

3. **Analizza i grafici:**
   - Grafico €/Ora: confronta resa oraria tra mezzi
   - I turni in bici potrebbero sorprenderti positivamente

4. **Decisioni strategiche:**
   - Capire quando conviene usare la bici
   - Bilanciare velocità vs costi
   - Ottimizzare in base al meteo e alle distanze

**Risultato:**
Scegli consapevolmente quale mezzo usare basandoti su dati economici reali.

---

### Scenario 4: Verifica Problema Meccanico

**Situazione:**
Noti che stai spendendo troppo in benzina o che i consumi sono aumentati.

**Come usare l'app:**
1. **Controlla il KM/L nel dashboard:**
   - Se è molto più basso del dichiarato dal costruttore → possibile problema

2. **Apri il Report:**
   - Vai all'Analisi Efficienza Operativa
   - Vedi se c'è un periodo con consumo peggiore

3. **Registra i km extra:**
   - Quando usi la moto per uso personale, registra i km
   - Aiuta a capire se il problema è nel lavoro o generale

4. **Confronta i dati:**
   - Il consumo medio del periodo dovrebbe essere coerente
   - Un cambio brusco (>10%) indica un problema

**Risultato:**
Identifichi subito anomalie e puoi portare il veicolo in officina prima che peggiori.

---

### Scenario 5: Cambio Dispositivo

**Situazione:**
Hai comprato un nuovo smartphone e vuoi trasferire tutti i dati.

**Come procedere:**
1. **Sul vecchio smartphone:**
   - Apri l'app
   - Vai su Report
   - Clicca **"ESPORTA BACKUP"**
   - Salva il file backup_rider_2025-01-15.json
   - Invialo a te stesso via email o salvalo su Google Drive

2. **Sul nuovo smartphone:**
   - Installa l'app (vedi sezione Installazione)
   - Apri l'app per la prima volta
   - Vai su Report
   - Clicca **"IMPORTA BACKUP"**
   - Seleziona il file salvato
   - Attendi il caricamento

3. **Verifica:**
   - Controlla che i dati nel dashboard siano corretti
   - Apri lo Storico e verifica che ci siano tutti gli elementi
   - Verifica che i mezzi siano salvati correttamente

**Risultato:**
Tutti i dati trasferiti in meno di 2 minuti, nessuna perdita.

---

### Scenario 6: Decisione su Target Mensile

**Situazione:**
Devi decidere quanto lavorare per raggiungere un obiettivo economico.

**Come usare l'app:**
1. **A inizio mese:**
   - Decidi quanto vuoi guadagnare di netto (es. €1200)
   - Inserisci 1200 nel campo TARGET
   
2. **Imposta la tua TAX% reale:**
   - Se sei in forfettario al 15%: inserisci 15
   - L'app calcola quanto lordo serve

3. **Durante il mese:**
   - Controlla la barra di progresso
   - Guarda il campo MANCANTE
   - Saprai sempre quanto lordo ti serve ancora

4. **Pianifica i turni restanti:**
   - Se mancano €300 lordi
   - E fai mediamente €50 lordi a turno
   - Ti servono 6 turni

**Risultato:**
Decisioni consapevoli basate su matematica, non su sensazioni.
## ❓ DOMANDE FREQUENTI

### Dati e Sicurezza

**Q: Dove vengono salvati i miei dati?**
A: Solo sul tuo dispositivo, nel LocalStorage del browser. Nessun dato viene inviato online.

**Q: Posso perdere i dati?**
A: Sì, se cancelli i dati del browser o disinstalli l'app senza aver fatto backup. Esporta regolarmente il database.

**Q: I dati sono sincronizzati tra dispositivi?**
A: No, sono locali. Devi usare Export/Import per trasferirli manualmente.

**Q: Qualcuno può vedere i miei dati?**
A: No, restano solo sul tuo dispositivo. Nemmeno noi sviluppatori li vediamo.

---

### Funzionalità

**Q: Posso modificare un turno già inserito?**
A: No, al momento devi eliminarlo e ricrearlo. In futuro potrebbe esserci la modifica diretta.

**Q: Posso tenere lo storico di più mesi?**
A: Sì, lo storico è cumulativo. Ma il report e i grafici mostrano solo il mese corrente.

**Q: Come confronto mesi diversi?**
A: Stampa il report PDF a fine di ogni mese e confronta i file salvati.

**Q: Posso usare l'app per più veicoli?**
A: Sì! Seleziona il mezzo corretto (auto/moto/bici) per ogni turno. L'app gestisce automaticamente i consumi.

**Q: Se uso solo la bici devo registrare rifornimenti?**
A: No, se lavori solo in bici non serve mai inserire rifornimenti. Il costo carburante sarà sempre 0.

---

### Calcoli

**Q: Perché Spesa Benzina è diversa da Rifornimenti?**
A: Spesa Benzina = consumo stimato dei turni. Rifornimenti = soldi realmente pagati alla pompa. Vedi sezione dedicata nel manuale.

**Q: I turni in bici influenzano i calcoli?**
A: Sì, ma positivamente: hanno costo benzina 0, quindi il netto è più alto. Non falsano i consumi medi.

**Q: Il netto calcolato è quello che mi arriva in banca?**
A: No, è una stima. Non considera contributi INPS, altre spese, deduzioni fiscali. Consulta un commercialista per i calcoli ufficiali.

**Q: Posso fidarmi dei calcoli?**
A: I calcoli matematici sono corretti, MA dipendono dai dati che inserisci. Garbage in, garbage out.

**Q: Che percentuale di tasse devo mettere?**
A: Dipende dal tuo regime fiscale. Forfettario 5%/15%, Ordinario considera IRPEF+contributi. Chiedi al commercialista.

---

### Uso Pratico

**Q: Devo registrare ogni rifornimento?**
A: Sì, se usi auto o moto. Ogni rifornimento aggiorna il prezzo del carburante per i calcoli futuri. Se usi solo bici, non serve.

**Q: Cosa succede se dimentico di inserire un turno?**
A: Puoi inserirlo in seguito cambiando la data nel modal. L'app non blocca date passate.

**Q: Posso usare virgola per i decimali?**
A: Solo nel campo prezzo benzina (auto-formattato). Per tutti gli altri usa il punto (es. 4.5 non 4,5).

**Q: L'app funziona senza internet?**
A: Sì, completamente. Serve internet solo per il primo caricamento e per scaricare Chart.js e icone.

**Q: Cosa succede se dimentico di selezionare il mezzo?**
A: Il default è "Auto". Se dimentichi, elimina il turno e ricrealo con il mezzo corretto.

---

### Installazione

**Q: Devo installarla o posso usarla da browser?**
A: Funziona in entrambi i modi, ma installandola è più comoda e veloce.

**Q: Su iPhone non trovo "Installa app"**
A: iOS richiede Safari e il procedimento è diverso (Condividi → Aggiungi a Home). Vedi sezione Installazione.

**Q: Occupa molto spazio sul telefono?**
A: No, circa 50KB più i dati che inserisci (solitamente < 1MB).

**Q: Posso disinstallarla?**
A: Sì, come qualsiasi app. I dati verranno persi se non fai backup prima.

---

### Problemi Tecnici

**Q: Il pulsante "Salva" non funziona**
A: Controlla di aver compilato tutti i campi obbligatori. Se il problema persiste, ricarica la pagina.

**Q: I grafici non si vedono**
A: Serve connessione internet per caricare Chart.js la prima volta. Dopo funziona offline.

**Q: L'orologio live non si aggiorna**
A: Ricarica la pagina. Potrebbe essere un problema JavaScript temporaneo.

**Q: Il backup non si scarica**
A: Controlla le impostazioni download del browser. Potrebbe essere bloccato.

**Q: Il campo consumo non scompare quando scelgo Bici**
A: Ricarica la pagina. Se persiste, cancella cache del browser.

---

## 🔒 PRIVACY E SICUREZZA

### Cosa Raccoglie l'App

**NESSUN DATO.**

L'app:
- ❌ NON richiede registrazione
- ❌ NON richiede email
- ❌ NON usa cookies di tracciamento
- ❌ NON invia analytics
- ❌ NON comunica con server (eccetto CDN per librerie)
- ❌ NON ha accesso alla tua posizione
- ❌ NON ha accesso ai tuoi contatti

### Dove Sono i Tuoi Dati

**LocalStorage del browser:**
- Salvati solo sul tuo dispositivo
- Accessibili solo dall'app
- Non condivisi tra siti
- Cancellabili in qualsiasi momento da te

**File di backup:**
- Quando esporti, crei un file JSON
- Il file resta sul tuo dispositivo
- Sei tu a decidere dove salvarlo (Drive, email, ecc.)
- Sei responsabile della sua sicurezza

### Connessioni Esterne

L'app si collega a:
1. **cdn.jsdelivr.net** - per caricare Chart.js (grafici)
2. **cdnjs.cloudflare.com** - per caricare Font Awesome (icone)

Dopo il primo caricamento, **tutto funziona offline**.

### GDPR Compliance

L'app è conforme GDPR perché:
- Non raccoglie dati personali identificativi
- Non usa cookies di profilazione
- Non trasferisce dati a terzi
- L'utente ha pieno controllo (export, delete)
- I dati restano sempre sul dispositivo dell'utente

### Responsabilità dell'Utente

**Sei responsabile di:**
- Fare backup regolari del database
- Proteggere il tuo dispositivo con password/PIN
- Non condividere file backup contenenti dati sensibili
- Conservare i backup in luoghi sicuri

**Suggerimenti:**
- Esporta backup almeno una volta a settimana
- Salva backup su cloud privato (Drive, Dropbox)
- Non inviare backup via WhatsApp o email non criptate
- Elimina backup vecchi dal telefono

---

## 🆘 SUPPORTO E AIUTO

### Problema Tecnico

**Prima di contattare, prova:**

1. **Ricarica la pagina**
   - Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)
   - Forza il ricaricamento completo

2. **Svuota cache**
   - Impostazioni browser → Privacy → Cancella dati
   - Seleziona solo "Cache" non "Cookies"

3. **Disabilita estensioni**
   - Alcune estensioni possono interferire
   - Prova in modalità incognito

4. **Aggiorna browser**
   - Usa l'ultima versione di Chrome, Firefox o Safari

5. **Esporta backup**
   - Prima di qualsiasi azione drastica
   - Salva i dati in un luogo sicuro

**Se il problema persiste:**
- Contatta l'autore
- Descrivi il problema dettagliatamente
- Indica browser e sistema operativo
- Allega screenshot se possibile

---

### Richiesta Feature

**Hai un'idea per migliorare l'app?**

1. Contatta l'autore
2. Descrivi la funzionalità che vorresti
3. Spiega perché sarebbe utile
4. Fornisci un esempio di caso d'uso

**Ricorda:**
- L'app è sviluppata nel tempo libero
- Non ci sono garanzie sui tempi di rilascio
- Alcune feature potrebbero non essere implementabili
- La priorità è la semplicità d'uso

---

### Bug e Segnalazioni

**Hai trovato un bug?**

1. Verifica che sia riproducibile
2. Annota i passaggi esatti per riprodurlo
3. Fai screenshot del problema
4. Contatta l'autore con tutti i dettagli

**Informazioni utili da includere:**
- Dispositivo (es. iPhone 12, Samsung Galaxy S21)
- Sistema operativo (es. iOS 17, Android 13)
- Browser (es. Safari 17, Chrome 119)
- Modalità (browser o app installata)
- Cosa stavi facendo quando è successo
## 👤 AUTORE E CONTATTI

**Progettato e sviluppato da:**  
**Marco Carbone**

**Contatti:**

- GitHub: madcarbone-ctrl

**Motivazione del progetto:**

Rider Tracker Pro è nato da un'esigenza personale: capire quanto guadagno realmente, non solo quanto incasso.

Le app di delivery mostrano solo il lordo, ma il lordo non è il guadagno reale. Bisogna togliere tasse e benzina.

Ho creato questa app per me, poi ho deciso di condividerla gratuitamente per aiutare altri rider a fare scelte informate.

**Filosofia:**
- Gratis per sempre
- Nessun account richiesto
- Privacy totale
- Semplicità d'uso
- Open source nello spirito

---

## ☕ SUPPORTA IL PROGETTO

Se questa app ti è utile e vuoi supportare il lavoro di sviluppo:

**[☕ Offrimi un caffè su PayPal](https://www.paypal.com/paypalme/madcarbone)**

### Perché Donare

Rider Tracker Pro è **gratuita e sempre lo sarà**.

Ma il tuo supporto aiuta a:
- ⏰ Dedicare più tempo al progetto
- 🐛 Correggere bug più velocemente
- ✨ Sviluppare nuove funzionalità
- 📱 Testare su più dispositivi
- 📚 Migliorare la documentazione

### Anche Senza Donare

Puoi supportare il progetto:
- 🌟 Condividendolo con altri rider
- 💬 Lasciando feedback costruttivo
- 🐛 Segnalando bug e problemi
- 💡 Proponendo miglioramenti
- ⭐ Stellina su GitHub (se verrà pubblicato)

**Ogni contributo, anche solo una parola di incoraggiamento, è apprezzato! 🙏**

---

## 📝 DISCLAIMER LEGALE

### Limitazioni d'Uso

Questo software fornisce **stime economiche operative** e **non sostituisce** strumenti fiscali professionali o consulenza di un commercialista.

**L'app NON considera:**
- Deduzioni fiscali specifiche
- Contributi previdenziali INPS/INAIL
- Ammortamenti del veicolo
- Svalutazioni patrimoniali
- Altre spese deducibili
- Specifiche normative locali

**Per obblighi fiscali reali, consulta sempre un commercialista abilitato.**

### Responsabilità

**L'autore NON è responsabile per:**
- Perdita di dati dovuta a malfunzionamenti
- Decisioni economiche basate sui calcoli dell'app
- Errori nei calcoli dovuti a dati errati inseriti dall'utente
- Problemi fiscali derivanti dall'uso dell'app
- Interpretazioni fiscali errate

### Utilizzo a Proprio Rischio

L'app è fornita **"così com'è"** senza garanzie di alcun tipo, esplicite o implicite.

L'utente si assume **piena responsabilità** dell'utilizzo e delle conseguenze.

### Licenza

**Uso personale gratuito**

Vietata:
- Rivendita commerciale
- Distribuzione con modifiche senza autorizzazione
- Uso per scopi commerciali senza accordo

Consentito:
- Uso personale illimitato
- Condivisione del link originale
- Studio del codice per scopi educativi

---

## 🔄 CRONOLOGIA VERSIONI

### v1.1 - Gennaio 2025 (Versione Corrente)

**Nuove Funzionalità:**
- ✅ **Selezione mezzo di trasporto (Auto/Moto/Bici)** con gestione intelligente consumo
- ✅ Grafici di analisi resa (€/ora e €/km) con Chart.js
- ✅ Analisi efficienza operativa con segmentazione automatica periodi
- ✅ Alert automatico fine mese con proposta stampa PDF
- ✅ Sistema target personalizzabile
- ✅ Percentuale tasse configurabile (campo TAX %)
- ✅ Export/Import database JSON con timestamp
- ✅ Eliminazione elementi storici con doppia conferma
- ✅ Gestione KM extra separati dai turni
- ✅ Orologio live in tempo reale
- ✅ Proposta backup automatica dopo ogni salvataggio
- ✅ **Colori dinamici netto nello storico** (verde/arancione/rosso)

**Miglioramenti UI/UX:**
- ✅ Modal con spostamento automatico per tastiera mobile
- ✅ Auto-formattazione prezzo benzina (X.XXX)
- ✅ Selezione data con pre-compilazione automatica
- ✅ Pulsante multi-funzione "RIEPILOGO | GRAFICO | STAMPA"
- ✅ Righe totale con bordo doppio nelle tabelle report
- ✅ Ottimizzazione layout report efficienza
- ✅ Feedback visivo su pulsanti (animazione scale)
- ✅ **Modal selezione mezzo con pulsanti grandi**
- ✅ **Campo consumo nascosto/visibile automaticamente**
- ✅ **Gestione prezzo carburante intelligente per bici**

**Miglioramenti Tecnici:**
- ✅ Calcolo consumo medio reale (KM/L)
- ✅ Gestione istanze Chart.js (no memory leak)
- ✅ Validazione file backup prima import
- ✅ Sistema logging prezzo benzina per periodo
- ✅ **Salvataggio mezzo utilizzato per ogni turno**
- ✅ **Calcolo litri e costi 0 per turni in bici**
- ✅ **Gestione valori null/infinito nei grafici**
- ✅ **Calcolo resa oraria con comparazione per colori**

### v1.0 - Dicembre 2024 (Prima Release)

- ✅ Gestione turni base
- ✅ Registrazione rifornimenti
- ✅ Calcolo netto con tasse fisse 20%
- ✅ Storico mensile
- ✅ Report PDF base
- ✅ Dashboard metriche
- ✅ Target fisso
- ✅ LocalStorage
- ✅ PWA installabile

---

## 🌍 LICENZA E DISTRIBUZIONE

**Versione:** 1.1.0  
**Stato:** Stabile, production-ready  
**Licenza:** Uso personale gratuito  
**Codice:** Disponibile per consultazione educativa  
**Contributi:** Benvenuti (contatta l'autore)
## 🆕 AGGIORNAMENTO 18 GENNAIO 2026

### Nuove Funzionalità

**🚗🛵🚲 SELEZIONE MEZZO DI TRASPORTO**

Ogni turno può ora essere associato a un mezzo specifico con gestione intelligente del consumo carburante.

**Mezzi disponibili:**
- 🚗 **Auto** - richiede consumo carburante
- 🛵 **Moto** - richiede consumo carburante  
- 🚲 **Bici** - consumo automaticamente a 0

**Come funziona:**

Quando registri un nuovo turno:

1. **Selezione del mezzo:**
   - Nel modal "Nuovo Turno" trovi un selettore con l'icona del mezzo
   - Mostra "🚗 Auto" di default
   - Clicca sul selettore per cambiare mezzo

2. **Modal di selezione:**
   - Si apre una finestra con 3 grandi pulsanti:
     - 🚗 Auto
     - 🛵 Moto  
     - 🚲 Bici
   - Clicca sul mezzo che hai utilizzato
   - Il modal si chiude automaticamente

3. **Se selezioni Bici:**
   - Il campo "Consumo L/100km" **scompare automaticamente**
   - Il consumo viene impostato a **0**
   - Il costo carburante per quel turno sarà **0€**
   - NON ti verrà mai chiesto il prezzo benzina (nemmeno al primo turno del mese)
   - Il turno non influenzerà il calcolo "SPESA BENZ." nel dashboard

4. **Se selezioni Auto o Moto:**
   - Il campo "Consumo L/100km" rimane visibile
   - Funzionamento normale con calcolo del costo carburante
   - Se è il primo turno del mese, ti verrà chiesto il prezzo benzina

**Vantaggi:**

- **Calcoli più precisi**: i turni in bici non falsano i consumi medi
- **Netto reale**: il guadagno dei turni in bici è più alto (zero spesa carburante)
- **Analisi efficienza**: puoi confrontare la redditività tra mezzi diversi
- **Flessibilità**: supporto per rider multi-veicolo

**Visualizzazione nello storico:**

- Ogni turno mostra l'icona del mezzo utilizzato nella label
- I turni in bici mostrano "Cons. 0/100 (∞ km/l)" nei dettagli
- Il calcolo del netto tiene conto del mezzo (bici = zero costo benzina)

**Impatto sui grafici:**

- **Grafico €/Ora**: i turni in bici spesso hanno valori più alti (zero costo carburante)
- **Grafico €/Km**: i turni in bici mostrano null (non applicabile senza consumo)

**Calcolo intelligente:**

L'app riconosce automaticamente che:
- Turni in bici → Litri consumati = 0
- Turni in bici → Costo benzina turno = 0€
- Turni in bici → KM/L = ∞ (infinito)
- Il netto è più alto perché non viene sottratto alcun costo carburante

**Interfaccia utente:**

- Design coerente con il resto dell'app
- Pulsanti grandi e facilmente cliccabili
- Icone emoji per immediata riconoscibilità
- Feedback visivo immediato sulla selezione
- Campo consumo che appare/scompare dinamicamente

**Compatibilità:**

- Funziona con tutto il sistema esistente
- I backup includono l'informazione sul mezzo
- L'importazione mantiene la compatibilità con versioni precedenti
- I vecchi turni (senza mezzo) vengono gestiti come "auto" di default

---

**🎨 SISTEMA COLORI NETTO DINAMICO**

Lo storico ora mostra il netto di ogni turno con **colori intelligenti** basati sulla resa oraria.

**Come funziona:**

Il sistema calcola:
1. **Media oraria mensile** = Netto totale ÷ Ore totali del mese
2. **Resa del singolo turno** = Netto turno ÷ Ore turno
3. **Confronto** automatico tra le due

**Codifica colori:**

- 🟢 **Verde**: Turno eccellente
  - Resa ≥ 100% della media mensile
  - Sopra o in linea con la media del mese

- 🟡 **Arancione**: Turno accettabile
  - Resa ≥ 80% della media mensile
  - Leggermente sotto media ma ancora buono

- 🔴 **Rosso**: Turno sotto media
  - Resa < 80% della media mensile
  - Significativamente sotto la media

**Vantaggi pratici:**

- **Identificazione immediata**: a colpo d'occhio vedi quali turni sono stati più profittevoli
- **Ottimizzazione strategica**: capisci quali fasce orarie/zone evitare
- **Motivazione**: i turni verdi ti danno conferma che stai lavorando bene
- **Alert rossi**: i turni rossi ti fanno capire quando qualcosa non ha funzionato

**Casi d'uso:**

- **Turni in bici spesso verdi**: zero costo carburante = resa alta
- **Turni lunghi con poche consegne**: spesso rossi o arancioni
- **Fasce orarie di punta**: dovrebbero essere verdi
- **Zone periferiche**: potresti notare più rossi (tanti km, poco guadagno)

**Visualizzazione:**

Nel tuo storico vedrai:
- L: €45.50 | N: €32.80 ← se verde: ottimo turno
- L: €38.20 | N: €25.10 ← se arancione: turno ok
- L: €52.00 | N: €28.50 ← se rosso: turno inefficiente

Il colore del valore netto cambia dinamicamente in base alla performance del turno rispetto alla tua media personale.

---

**Fine della documentazione - Rider Tracker Pro v1.1**

**Data ultimo aggiornamento:** 18 Gennaio 2026

---

**Grazie per aver scelto Rider Tracker Pro! 🚴💨**
