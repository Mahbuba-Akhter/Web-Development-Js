let name = [3, 6, 3, 5, 2, 1, 9, 11, 56, 3, 2, 5, 1, 11, 60, 56];
let uniqueName = [];
for (let i = 0; i < name.length; i++) {
    const element = name[i];
    let index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
    
}
console.log(uniqueName);