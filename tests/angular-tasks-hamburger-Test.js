var robot = require("robotjs");

describe("Verify the Tasks Hamburger and Links to MVC work correctly", function() {
    var testUrl = 'http://qc/eHR_Warehouse';
    var capturedUrls = [];
    var storedUrls = [];
    var length = 8;
    var hamburgerSelector = "//app-root/mat-toolbar/button[@class='mat-icon-button']//mat-icon[@role='img']";

    it("Check that the browser opens correctly", function(done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
    });
        browser.url('/enterprisehr/requisitions');
        //deal with the QC cert popup in chrome
        robot.keyTap('tab');
        robot.keyTap('tab');
        robot.keyTap('tab');
        robot.keyTap('enter');

        var title = browser.getTitle();
        expect(title).to.equal('EnterpriseHR');
    });

    it("Check that each 'Task' in Angular Navigates to the correct MVC Link", function(done) {
        //Expected URLs 
        storedUrls[0] = testUrl + "/Hierarchy/GetDashboardInfo";
        storedUrls[1] = testUrl + "/Training/TrainingIndex?tabIndex=0";
        storedUrls[2] = testUrl + "/Hierarchy/MissingReportsTo";
        storedUrls[3] = testUrl + "/Home/GetSyncLog";
        storedUrls[4] = testUrl + "/Hierarchy/OrgChartManagement";
        storedUrls[5] = testUrl + "/Hierarchy/PCNManagement";
        storedUrls[6] = testUrl + "/Hierarchy/PendingApprovalsDivisions";
        storedUrls[7] = testUrl + "/Hierarchy/RoleManagement";

        browser.url('/enterprisehr/requisitions');
        
        // Loop Logic: Check the Task Buttons and get the URLs from the MVC Application
        // 1. Click each "Task" button in the Hamburger
        // 2. Get the URL from the MVC Application
        // 3. Check the status of the page given the captured URL
        // 4. Save the MVC Url to CatpuredUrls[]
        // 5. Go back to the Angular App and Repeat the loop
        for (i = 0; i < length; i++){
            browser.click(hamburgerSelector);
            browser.pause(1000);

            // We will Loop though each Task by dynamically changing the xpath
            var taskItemSelector = "//mat-sidenav-container/mat-sidenav//mat-nav-list[@role='navigation']/div[" + (i + 1) + "]";
            browser.click(taskItemSelector);
            browser.pause(1000);
            
            //Capture the URL in the Browser -- it should be the MVC's URL
            capturedUrls[i] = browser.getUrl();

            //Assert that what we captured is what we expeceted
            expect(capturedUrls[i]).to.equal(storedUrls[i]);
            
            //TODO: Assert the page is returning a 200 status
            console.log(browser.status());

            browser.back();
        }
    });
});