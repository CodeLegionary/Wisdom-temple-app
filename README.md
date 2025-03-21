# README: TSX Vite Meditation App

## Introduzione

Wisdom Temple è un'app meditativa progettata per aiutarti a rilassare, trovare il tuo equilibrio e praticare consapevolezza. Include un timer settabile per eventuali sessioni di meditazione predefinite.

## Tecnologie

React, Typescript, Vite, React-Router-Dom, Lodash, CSS.

## Caratteristiche

Alcune delle features principali:

- Un timer classico (i.e. modalità countdown) per ogni singola pagina, progettato per agire in sintonia con gli elementi presenti nella stessa.
- Notifiche sonore al termine del countdown (consiglio: controlla che il volume sia attivato sul dispositivo).
- Interfaccia completa, con navigazione gestita tramite React-Router-Dom e file _redirects.
- Home molto semplice e intuitiva per facilitare gli utenti da tutti i dispositivi, e fornire informazioni sulle singole pagine.
- Il sito è sviluppato in un inglese accessibile, rivolgendosi così ad un pubblico potenzialmente più ampio.

## Installazione

Seguire le seguenti istruzioni per installare e usufruire di una versione offline dell'app.

### Clona il repository
```sh
git clone https://github.com/CodeLegionary/Wisdom-temple-app.git
```

### Accedi alla directory del progetto
```sh
cd wisdom-temple-app
```

### Installa le dipendenze
```sh
npm install
```

### Avvia il server di sviluppo
```sh
npm run dev
```

## Distribuzione

### Deployment
Il sito è disponibile su [Netlify](https://wisdom-temple.netlify.app/), e include piccoli accorgimenti per il redirect contenuti nell'apposito file _redirects. In questo modo si evitano potenziali errori 404 in fase di navigazione.