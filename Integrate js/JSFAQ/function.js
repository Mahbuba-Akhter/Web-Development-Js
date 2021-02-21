function evenify_all(numbs) {
    for (let i = 0; i < numbs.length; i++) {
        const num = numbs[i];
        if (num % 2 == 0) {
            console.log(num, ': is even number');
        }
        else{
            console.log(num, ': is odd number');
        }      
    }
}
numbs = [5, 6, 7, 8, 9, 10, 11, 12, 13];
evenify_all(numbs);

friend_age = [12, 13, 14, 15, 16, 17];
evenify_all(friend_age);
