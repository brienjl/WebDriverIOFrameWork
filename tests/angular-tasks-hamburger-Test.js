var robot = require("robotjs");

describe("Verify the Tasks Hamburger and Links to MVC work correctly", function() {
   
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
        var testUrl = 'http://qc/eHR_Warehouse';
        var capturedUrls = [];
        var length = 8;

        var storedUrls = [];
        storedUrls[0] = testUrl + "/Hierarchy/GetDashboardInfo";
        storedUrls[1] = testUrl + "/Training/TrainingIndex?tabIndex=0";
        storedUrls[2] = testUrl + "/Hierarchy/MissingReportsTo";
        storedUrls[3] = testUrl + "/Home/GetSyncLog";
        storedUrls[4] = testUrl + "/Hierarchy/OrgChartManagement";
        storedUrls[5] = testUrl + "/Hierarchy/PCNManagement";
        storedUrls[6] = testUrl + "/Hierarchy/PendingApprovalsDivisions";
        storedUrls[7] = testUrl + "/Hierarchy/RoleManagement";


        browser.url('/enterprisehr/requisitions');
        
        for (i = 0; i < length; i++){
            browser.click('/html/body/app-root/mat-toolbar/button/span/mat-icon');
            browser.pause(1000);
            var taskItem = "body > app-root > mat-sidenav-container > mat-sidenav > div > mat-nav-list > div:nth-child(" + (i + 2) + ") > a > div";
            browser.click(taskItem);
            browser.pause(5000);
        }

    });
});