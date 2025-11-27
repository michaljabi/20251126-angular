// Dobry kodzik (korzystamy z Type Inferance):
let x = 0;

x = 10;
x = '11'; // tutaj TS powinien zgłosić Błąd i o to chodziło!

console.log(x);

// Zły kodzik:
let y;

y = 0;
y = '?';
y = {};

console.log(y);

// Dowolność JS 😭
