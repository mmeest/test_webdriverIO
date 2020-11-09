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

    it('should add product to basket', () => {
        const quantity = $('/html/body/div[2]/main/div[3]/div/div[1]/div[2]/form/div[1]/table/tbody/tr[1]/td[2]/div/input');
        const addToCartBtn = $('/html/body/div[2]/main/div[3]/div/div[1]/div[2]/form/div[3]/div/div/button/span');
        const cart = $('/html/body/div[2]/header/div[2]/div[1]/a');        
        const checkout = $('//*[@id="top-cart-btn-checkout"]');

        quantity.addValue('1');
        addToCartBtn.click();
        cart.click();
        checkout.click();

        expect(browser).toHaveTitle('Vormista ost');
    })
    

    it('should finalize checkout', () => {
        const street = $('[name="street[0]"]');
        const city = $('[name="city"]');
        /* const county = $('[name="region_id]'); */
        const postcode = $('[name="postcode"]');
        const phone = $('[name="telephone"]');
        const nxtBtn = $('/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[2]/div/div[3]/form/div[3]/div/button/span');

        street.addValue('Metsa');
        city.addValue('Kapa-Kohila');
        $('//*[@id="Y4Y5Y7Q"]').selectByVisibleText('Harjumaa');
        postcode.addValue('12345');
        phone.addValue('55555555');

        nxtBtn.click();

        expect(browser).toHaveTitle('https://proovitoo.devel73.aedes.ee/et/checkout/#payment');
    })
});