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

    it('should navigate to products page', () => {
        const productsPage = $('span=Peakategooria 1');
        productsPage.click();

        expect(browser).toHaveTitle('Peakategooria 1');
    })

    it('should navigate to selected product page', () => {
        const product = $('.product-image-photo');
        product.click();
        
        expect(browser).toHaveTitle('Grouped product');
    })

    it('should add selected product to wishbasket', () => {
        const addToWishBasket = $('/html/body/div[2]/main/div[3]/div/div[1]/div[3]/div/a[1]');
        addToWishBasket.click();

        expect(browser).toHaveTitle('Minu soovikorv');
    })

    it('should share wishBasket', () => {
        const shareWishBasket = $('span=Jaga soovikorvi');

        shareWishBasket.click();

        expect(browser).toHaveTitle('Soovinimekirja jagamine');
    })

    it('should send out messages', () => {
        const emails = $('#email_address');
        const message = $('#message');
        const submitBtn = $('/html/body/div[2]/main/div[3]/div[1]/form/div/div[1]/button/span');
        
        emails.addValue('test@email.xx');
        message.addValue('Hello World!');
        submitBtn.click();

        const greenMessage = $('/html/body/div[2]/main/div[2]/div[2]/div/div/div')

        expect(browser).toHaveTitle('Minu soovikorv');
    })
});