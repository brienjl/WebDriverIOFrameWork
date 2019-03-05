var robot = require("robotjs");

describe("Verify Basic Navigation to Accelerated Salaries works correctly", function() {
   var cardAcceleratedSalarySelector = "[routerlink='acceleratedsalaries']";
   var tabAddRecordSelector = "#mat-tab-label-0-0";
   var tabSearchRecordSelector = "#mat-tab-label-0-2";

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
    });

    it("Check that we can Navigate to Add Record Tab", function(done) {
        browser.url('/enterprisehr/requisitions');
        browser.click(cardAcceleratedSalarySelector);
        browser.click(tabAddRecordSelector);
        browser.pause(2000);
    });

    it("Check that we can Navigate Search Records", function(done) {
        browser.url('/enterprisehr/requisitions');
        browser.click(cardAcceleratedSalarySelector);
        browser.click(tabSearchRecordSelector);
        browser.pause(2000);
    });
});

describe("Verify Basic Navigation to Hiring Packets works correctly", function() {
    var cardHiringPacketSelector = "[routerlink='hiringpacket']";
    var tabHPSearchRecordsSelector = "#mat-tab-label-0-0";

    it("Check that the browser opens correctly", function(done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
    });
        browser.url('/enterprisehr/requisitions');
        var title = browser.getTitle();
        expect(title).to.equal('EnterpriseHR');
    });

    it("Check that we can Navigate to Search Packets", function(done) {
        browser.url('/enterprisehr/requisitions');
        browser.click(cardHiringPacketSelector);
        browser.pause(2000);
    });

    it("Check that we can Navigate Search Records", function(done) {
        browser.url('/enterprisehr/requisitions/hiringpacket');
        browser.click(tabHPSearchRecordsSelector);
        browser.pause(2000);
    });
});