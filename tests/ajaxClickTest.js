describe('Test that the button is clickable once ajax loader completes page load.', function() {
    it.skip('Attempt to click the button immediately', function(done) {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1');
    });

    it('Attempt to click the button after 7 seconds', function(done) {
        browser.url('/Ajax-Loader/index.html');
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(1000);
    });
});