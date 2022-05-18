/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indical
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inseritè, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo:24,50
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/

/*
Passaggi:
- fare questo
- fare quest'altro
SE succede questo
faccio questo
Altrimenti
*/

const nomeUtente = prompt ("Qual è il tuo nome?") ;

const cognomeUtente = prompt ("Quale è il tuo cognome?") ;

const etaUtente = prompt ("Quanti anni hai?") ;

const kilometriUtente = prompt ("Quanti km devi percorrere per arrivare alla tua destinazione?");


const prezzoAlKm = "0.21";

const scontoGiovani = "0.2";

const calcoloPrezzoBiglietto = kilometriUtente * prezzoAlKm

const scontoAnziani = "0.4";

let prezzoScontatoAnziani =  calcoloPrezzoBiglietto - ( calcoloPrezzoBiglietto * scontoAnziani )

let prezzoScontatoGiovani =  calcoloPrezzoBiglietto - ( calcoloPrezzoBiglietto * scontoGiovani )

/* se la persona ha meno di 18 anni applica sconto */

if(etaUtente < 18){
    prezzoScontatoGiovani
}else if(etaUtente > 65){
    prezzoScontatoAnziani
}

const liNomeCognomeUtente = document.getElementById("nome-cognome-utente");

liNomeCognomeUtente.innerHTML = `<strong class="text-danger">
                                    <small class="text-dark">NOME e COGNOME :</small>${nomeUtente} ${cognomeUtente}
                                </strongs>`;


const liEtaUtente = document.getElementById("eta-utente")

liEtaUtente.innerHTML = `<strong class="text-danger">
                            <small class="text-dark">ETA' :</small>${etaUtente} 
                        </strongs>`;


const liKmUtente = document.getElementById("kilometri-utente")

liKmUtente.innerHTML = `<strong class="text-danger">
                            <small class="text-dark">KM DA PERCORRERE :</small>${kilometriUtente} 
                        </strongs>`;




const liPrezzoBiglietto = document.getElementById("prezzo-biglietto")

liPrezzoBiglietto.innerHTML = `<strong class="text-danger">
                                    <small class="text-dark">PREZZO BIGLIETTO :</small>${calcoloPrezzoBiglietto} $
                                </strongs>`;


const liPrezzoScontato = document.getElementById("prezzo-biglietto-scontato")

liPrezzoScontato.innerHTML = `<strong class="text-danger">
                                    <small class="text-dark">PREZZO SCONTATO :</small>${prezzoScontatoAnziani} ${prezzoScontatoGiovani}
                                </strongs>`;
