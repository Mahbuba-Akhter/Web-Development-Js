let speech = 'I am a good person. I dont snore at night.';
// console.log(speech.length);
// console.log(speech [2]);
let count = 0;
for (let i = 0; i < speech.length; i++) {
    const latter = speech[i];
    if (latter == ' ') {
        count ++;
    } 
}
count ++;
console.log(count);
