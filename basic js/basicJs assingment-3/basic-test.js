// kilometerToMeter
// 1 km = 1000 meter
function kilometerToMeter(kilometer) {
    let kmToMeter =  kilometer * 1000;
    return kmToMeter;
}
let result = kilometerToMeter(2);
console.log(result);

// budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    let watchPrice = 50;
    let phonePrice = 100;
    let laptopPrice = 500;

    let watchCost = watch * watchPrice;
    let phoneCost = phone * phonePrice;
    let laptopCost = laptop * laptopPrice;

    let totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
let finalAmount = budgetCalculator(2, 1, 1);
console.log(finalAmount);

// hotelCost

function hotelCost(days) {

    // set default cost
    var totalCost = 0;

    // calculate the total cost in different condition
    if (days <= 10) {
        // find cost if days less than or equal 10 days
        totalCost = days * 100;
    }
    else if (days <= 20) {
        // find cost if days less than or equal 20 days and greater than 10 days
        var remainingDays = days - 10;// find remaining days
        var costFirstTenDays = 10 * 100;// first 10 days cost
        var costSecondTenDays = remainingDays * 80;// second 10 days cost
        totalCost = costFirstTenDays + costSecondTenDays; 
    }
    else {
        // find if days greater than 20 days
        var remainingDays = days - 20;// find remaining days
        var costFirstTenDays = 10 * 100;// first 10 days cost
        var costSecondTenDays = 10 * 80;// second 10 days cost
        var costNextAllDays = remainingDays * 50; // next all days cost
        totalCost = costFirstTenDays + costSecondTenDays + costNextAllDays; 
    }
    return totalCost;
}
//call hotelCost function and store return value 
const totalHotelCost = hotelCost(21);
console.log( totalHotelCost);

// megaFriendName


let friendsName = ['Sadia', 'Srishty', 'Sudha', 'Tabassum', 'Himu'];
let bestFriend = friendsName[0];
for (let i = 0; i < friendsName.length; i++) {
    const element = friendsName[i];
    if (element > bestFriend) {
        bestFriend = element;
    }
    
}
console.log('My Bestie Is:', bestFriend);