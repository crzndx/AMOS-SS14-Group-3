(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = HomescreenData.resolveItemReference(options.item);

            // Parses the title of the subpage from the data file
            element.querySelector(".titlearea .pagetitle").textContent = item.title;

            // Add useful content here
            // what should be done after pageload? does more content need to be rendered?
            // start other js services?

        }
    });


    // some more librarys/js starts here


})();
