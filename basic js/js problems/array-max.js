let marks = [45, 67, 82, 50, 98, 34, 32, 75];
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log('Highest Value Is:', max);

let friendsName = ['Sadia', 'Srishty', 'Sudha', 'Tabassum', 'Himu'];
let bestFriend = friendsName[0];
for (let i = 0; i < friendsName.length; i++) {
    const element = friendsName[i];
    if (element > bestFriend) {
        bestFriend = element;
    }
    
}
console.log('My Bestie Is:', bestFriend);