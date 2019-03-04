var robot = require("robotjs");

describe("Verify Recruitment page works correctly", function() {


    it("Check that the browser opens correctly", function(done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
    });
        browser.url('/enterprisehr/requisitions');
        robot.keyTap('tab');
        robot.keyTap('tab');
        robot.keyTap('tab');
        robot.keyTap('enter');
        var title = browser.getTitle();
        expect(title).to.equal('EnterpriseHR');
        console.log('Title is: ' + title);
    });

    it("Check that we can Navigate to Add Record Tab", function(done) {
        browser.url('/enterprisehr/requisitions');
        browser.click('/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-requisition/div[2]/div/mat-card');
        browser.click('#mat-tab-label-0-0');
        browser.pause(5000);

    });
});