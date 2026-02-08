function signup(emailService) {
    emailService.send();
    return true;
}

module.exports = { signup };
