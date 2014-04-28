(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/newPageDummy/newDummyHTML.html", {  // Edit the link name
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = HomescreenData.resolveItemReference(options.item);

            // Add useful content here
            // what should be done after pageload? e.g. start d3.js or other services


            // deprecated. 
            //element.querySelector(".titlearea .pagetitle").textContent = item.title;

            // TODO: Initialize the page here.
        }
    });
})();
