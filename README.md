# vue-email-list

## consegna:
*** Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
### Bonus: 
*** Far comparire gli indirizzi email solamente quando sono stati tutti generati.


#### pseudocodice: 
1. Creare template di html e inserire i collegamenti necessari.
2. Definire l'oggetto data con le seguenti proprietà:
- apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
- arrEmails: -- qui abbiamo un array vuoto
- emails: 10    -- numero di email da stampare
3. Definire il metodo getApi che prende il numero di email da recuperare.
4. Eseguire un ciclo for da 0 a emails.
5. Eseguire una richiesta Axios (axios.get"link Api") per ottenere un'email casuale utilizzando.
6. Verificare se la richiesta ha successo, quindi, aggiungere l'email alla arrEmails, altrimenti, se la richiesta fallisce gestire l'errore.
7. Chiamare il metodo getApi nel metodo mounted() per ottenere le email una volta che l'app è pronta per l'uso.





