
function reversString(string) {
    let reverse = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        reverse = char + reverse;
    }
    return reverse;
}

let statement = 'Hello Alien Bai Brothers';
let finalOutput = reversString(statement);
console.log(finalOutput);
