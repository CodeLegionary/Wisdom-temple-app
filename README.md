# React README - TSX Vite Meditation App

## Introduction

Wisdom Temple è un'app meditativa progettata per aiutarti a rilassare, trovare il tuo equilibrio e praticare consapevolezza. Include un timer settabile per eventuali sessioni di meditazione predefinite.

## Features

Alcune delle caratteristiche principali:

- Timer in modalità classica (i.e. countdown) indipendente per ogni singola pagina, e che agisce in sinergia con gli altri elementi.
- Notifiche sonore e vocali al termine del countdown (consiglio: controlla il volume sia attivato sul dispositivo).
- Interfaccia completa, con navigazione gestita tramite React-Router-Dom e file _redirects.
- Home molto semplice e intuitiva per facilitare gli utenti da tutti i dispositivi, e fornire informazioni sulle singole pagine.
- Il sito è sviluppato in un inglese accessibile per raggiungere quanti più utenti possibili.

## Installation

Seguire le istruzioni di installazione qualora si volesse usufruire di una versione offline dell'app.

### Clona il repository
git clone https://github.com/tuo-repository/wisdom-temple.git

### Accedi alla directory del progetto
cd wisdom-temple

### Installa le dipendenze
npm install

### Avvia il server di sviluppo
npm run dev

## Distribution

### Deployment
Il sito è disponibile su [Netlify](https://wisdom-temple.netlify.app/), e include piccoli accorgimenti per il redirect contenuti nell'apposito file _redirects. In questo modo si risolvono possibili errori 404 in fase di navigazione.