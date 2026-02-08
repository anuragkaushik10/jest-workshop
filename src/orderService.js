async function processOrder(amount) {
    if (amount <= 0) {
        throw new Error('Invalid amount');
    }

    // simulate async work
    return 'processed';
}

module.exports = { processOrder };
