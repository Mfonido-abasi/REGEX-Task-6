/* System to Validate the details of a Master card. 
This system is designed to validate only Mastercard. Any other card type would return null.*/

const cardNum = "2700 5678 9087 5432";
const masterCardNum = /^(?:5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[1]\d|27[0]\d|2720) ?\d{4} ?\d{4} ?\d{4}$/.exec(cardNum);
const cardName = /^\S+ ?\S+$/.exec ("Mfonido Codes");
const cardExpDate = /^(?:0[1-9]|1[0-2])[\/ ]\d{2}$/.exec ("12/25");
const cardSecurityNum = /^\d{3}$/.exec(123);

console.log("\nCard Type:");
if(masterCardNum){
    console.log("Mastercard");
}
else{
    console.log("Not Mastercard");
}

console.log("\nMaster Card Number:");
console.log(masterCardNum);
console.log("\nName on Card:");
console.log(cardName);
console.log("\n Card Expiry Date:");
console.log(cardExpDate);
console.log("\nCard Security Number:");
console.log(cardSecurityNum);
