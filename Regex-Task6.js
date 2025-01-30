/* System to Validate the details of a Master card. 
This system is designed to validate only Mastercard. Any other card type would return null.*/

const cardNum = "5234 5678 9087 5432";
const masterCardNum = /^(?:2|5)\d{3} ?\d{4} ?\d{4} ?\d{4}$/.exec(cardNum);
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
