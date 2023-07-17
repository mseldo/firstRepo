console.clear();
let accnumber = 50449921;
let balance = 250;

const cashWithdrawal = (amount, accnum) => {
    if (amount > fundsCheck()){
        console.log("insufficient funds")
    }else{
        balance = balance - amount;
        console.log(`withdrawing ${amount} from ${accnum}`);
        console.log(`your new balance is ${balance}`)
    }
    

}

const fundsCheck =() =>{
    return balance;
}
cashWithdrawal(350, accnumber);
