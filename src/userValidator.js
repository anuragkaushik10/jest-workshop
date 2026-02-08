function validateAge(age) {
    if (!age || age < 0) {
        throw new Error('Invalid age');
    }
    return true;
}

module.exports = { validateAge };
