function makeChange(amount) {
    const change = { q: 0, d: 0, n: 0, p: 0 };

    // Calculate quarters
    change.q = Math.floor(amount / 25);
    amount %= 25;

    // Calculate dimes
    change.d = Math.floor(amount / 10);
    amount %= 10;

    // Calculate nickels
    change.n = Math.floor(amount / 5);
    amount %= 5;

    // Calculate pennies
    change.p = amount;

    return change;
}

// Test cases
console.log(makeChange(47)); // Expected output: { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // Expected output: { q: 0, d: 2, n: 0, p: 4 }
