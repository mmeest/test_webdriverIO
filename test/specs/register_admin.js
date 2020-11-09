describe('Register to webstore', () => {
    it('should open the main url and verify the title', () => {
        browser.url('https://proovitoo.devel73.aedes.ee/haldus/admin/index/index/key/014a768d2c9f63c003ef3fe8d707902ae4cfec1e03c493a9964df4bc7f0f4d98/');
        expect(browser).toHaveTitle('Magento Admin');
    });

    it('should enter creditentials on text fields', () => {
        const username = $('#username');
        const password = $('#login');

        username.setValue('testUser');
        password.setValue('testingPW');

        expect(username).toHaveValue('testUser');
        expect(password).toHaveValue('testingPW');
    })

    /* it('should register new user and navigate to new page', () => {
        const loginBtn = $('.action-login');
        loginBtn.click();

        expect(browser).not.toHaveTitle('Magento Admin');
    }) */
});