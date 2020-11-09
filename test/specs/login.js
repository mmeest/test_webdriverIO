describe('Login to webpage', () => {
    it('should open the main url and verify the title', () => {
        browser.url('https://proovitoo.devel73.aedes.ee/')
        expect(browser).toHaveTitle('Avaleht');
    })

    it('should navigate to login page', () => {
        const loginLink = $('=Logi sisse');
        loginLink.click();

        expect(browser).toHaveTitle('Kontohaldus');
    })

    it('should log in as registered user', () => {
        const eMail = $('#email');
        const password = $('#pass');
        const okBtn = $('#send2');

        eMail.addValue('martin1tareg@gmail.com');
        password.addValue('testPW123');
        okBtn.click();

        expect(browser).toHaveTitle('Avaleht');
    })
});
