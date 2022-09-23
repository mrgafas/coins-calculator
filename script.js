function minCoins(montant){

    const coins = [1,2,5,10,20];
    let nbrCoins = [];

    for(let i= coins.length-1; i>=0; i-- ){

        nbrCoins[i] = Math.floor(montant/coins[i]);
       montant = Math.floor(montant % coins[i]);


    }
return nbrCoins;


}

console.log(minCoins(80));


























































































