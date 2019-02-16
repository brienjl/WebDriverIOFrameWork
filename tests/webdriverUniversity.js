var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe("Verify whether webdriveruniversity link on homepage works correctly", function() {
        it("Checks that the contact us button opens the contact us page", function(done) {
            browser.setViewportSize({
                width: 1200,
                height: 800
        });
            browser.url('/');
            var title = browser.getTitle();
            assert.equal(title, 'WebDriverUniversity.com');
            expect(title).to.equal('WebDriverUniversity.com');
            title.should.equal('WebDriverUniversity.com');
            console.log('Title is: ' + title);
            browser.click("#contact-us");
            browser.pause(3000);
        });

        it("Checks that the login button opens the login portal page", function(done) {
            browser.url('/');
            browser.click('#login-portal');
            var title = browser.getTitle();
            assert.equal(title, 'WebDriverUniversity.com');
            expect(title).to.equal('WebDriverUniversity.com');
            title.should.equal('WebDriverUniversity.com');
            console.log('Title is: ' + title);
            browser.pause(3000);
        });
});