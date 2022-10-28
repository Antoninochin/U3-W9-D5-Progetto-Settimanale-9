let minuti = new Date().getMinutes()


interface Smartphone{
    credito: number;
    numeroChiamate: number;
}

 class UserPhone implements Smartphone{
    // credito(): number{
    //     return this.credito()
    // }
    // numeroChiamate(): number{
    //     return 0
    // }credito: number;
    credito: number;
    numeroChiamate: number;
    constructor(credito:number, numeroChiamate:number){
        this.credito = credito;
        this.numeroChiamate = numeroChiamate
    }
    ricarica(): number{
        return 15
    }
    newCredito():number{
        return this.ricarica() + this.credito
    }
     chiamata(minuti:number):number{
        return minuti * 0.20
     }
     numero404(): number{
         return this.newCredito() - this.chiamata(minuti)  //((Math.floor(Math.random()*(10-1))))
     }
     getNumeroChiamate(): number {
        return this.numeroChiamate
     }
     azzeraChiamate():number{
        return this.getNumeroChiamate() * 0
     }
}

 let user1 = new UserPhone(15, 3)
 let user2 = new UserPhone(40, 5)
 let user3 = new UserPhone(35, 4)

 console.log(user1)
 console.log("Hai effettuato una ricarica di: "+user1.ricarica()+"€") 
 console.log("Il tuo saldo è di: "+user1.newCredito()+"€")
 console.log(`La tua ultima chiamata è stata di ${minuti} minuto/i, dal costo di: ${user1.chiamata(minuti)}€ al minuto`)
 console.log(`"Il tuo credito è di:"${user1.numero404()}€ Poveraccio`)
 console.log(`Hai effettuato ${user1.getNumeroChiamate()} chiamate`)
 console.log(`Hai ${user1.azzeraChiamate()} chiamate`)
 console.log(user2)
 console.log("Hai effettuato una ricarica di: "+user2.ricarica()+"€") 
 console.log("Il tuo saldo è di: "+user2.newCredito()+"€")
 console.log(`La tua ultima chiamata è stata di ${minuti} minuto/i, dal costo di: ${user2.chiamata(minuti)}€ al minuto`)
 console.log(`"Il tuo credito è di:"${user2.numero404()}€ Poveraccio`)
 console.log(`Hai effettuato ${user2.getNumeroChiamate()} chiamate`)
 console.log(`Hai ${user2.azzeraChiamate()} chiamate`)
 console.log(user3)
 console.log("Hai effettuato una ricarica di: "+user3.ricarica()+"€") 
 console.log("Il tuo saldo è di: "+user3.newCredito()+"€")
 console.log(`La tua ultima chiamata è stata di ${minuti} minuto/i, dal costo di: ${user3.chiamata(minuti)}€ al minuto`)
 console.log(`"Il tuo credito è di:"${user3.numero404()}€ Poveraccio`)
 console.log(`Hai effettuato ${user3.getNumeroChiamate()} chiamate`)
 console.log(`Hai ${user3.azzeraChiamate()} chiamate`)

 
//  function click(){
//     let usr1 = [user1]
//     console.log(usr1)
//     let box = document.querySelector("#box1") as HTMLElement;
//     // let div = document.createElement('div');
//     box.innerHTML = ''
//     for(let utente of usr1){
//         box.innerHTML += `<div>${utente.ricarica()} ${utente.newCredito()} ${utente.chiamata(minuti)} ${utente.numero404()} ${utente.getNumeroChiamate()} ${utente.azzeraChiamate()}</div>`
//     }
// }
         

