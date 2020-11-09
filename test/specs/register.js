describe('Register to webstore', () => {
    it('should open the main url and verify the title', () => {
        browser.url('https://proovitoo.devel73.aedes.ee/');
        expect(browser).toHaveTitle('Avaleht');
    });

    it('should navigate to register page', () => {
        const registerLink = $('=Loo konto');
        registerLink.click();

        expect(browser).toHaveTitle('Loo endale konto');
    })

    it('should enter creditentials and register new user', () => {
        const firstName = $('#firstname');
        const lastName = $('#lastname');
        const eMail = $('#email_address');
        const pw = $('#password');
        const pwC = $('#password-confirmation')
        const okBtn = $('/html/body/div[2]/main/div[3]/div/form/div/div[1]/button')

        firstName.addValue('Martin');
        lastName.addValue('Maasik');
        eMail.addValue('martin1tareg@gmail.com');
        pw.addValue('testPW123');
        pwC.addValue('testPW123');
        okBtn.click();

        expect(browser).toHaveTitle('Minu konto');
    })
});