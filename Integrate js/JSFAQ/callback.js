function explain_callback(name, age, task) {
    console.log('Hello,', name);
    console.log('Your age:', age);
    task();
}

function washHand() {
    console.log('Wash Hand With Soap');
}
function takeSower() {
    console.log('Take Shower');
}
function scrollFacebook() {
    console.log('Scroll Facebook All The Time');
}
explain_callback('mahbuba akhter', 23, washHand);
explain_callback('Saima Akhter', 21, takeSower);
explain_callback('Bushra Akhter', 19, scrollFacebook)