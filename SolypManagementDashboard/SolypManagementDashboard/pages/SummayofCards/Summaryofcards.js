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
    // Start of data.js
    (function () {
        "use strict";



        var listLogo = [
        { title: "Competitor1", text: "IBM", picture: "images/Logo1.png" },
        { title: "Competitor2", text: "MICROSOFT", picture: "images/Logo2.png" },
        { title: "Competitor3", text: "SAP", picture: "images/Logo3.png" },
        { title: "Competitor4", text: "ACCENTURE", picture: "images/Logo4.png" },
        { title: "Competitor5", text: "INTEL", picture: "images/Logo5.png" },
        { title: "Competitor6", text: "COGNIZANT", picture: "images/Logo6.png" },
  
        ];

        // Create a WinJS.Binding.List from the array. 
        var itemsList = new WinJS.Binding.List(listLogo);


        // Sorts the groups.
        function compareGroups(leftKey, rightKey) {
            return leftKey.charCodeAt(0) - rightKey.charCodeAt(0);
        }

        // Returns the group key that an item belongs to.
        function getGroupKey(dataItem) {
            return dataItem.title.toUpperCase().charAt(0);
        }

        // Returns the title for a group.
        function getGroupData(dataItem) {
            return {
                title: dataItem.title.toUpperCase().charAt(0)
            };
        }

        // Create the groups for the ListView from the item data and the grouping functions
        var groupedItemsList = itemsList.createGrouped(getGroupKey, getGroupData, compareGroups);

        WinJS.Namespace.define("listLogo",
       {
           groupedItemsList: groupedItemsList
       }); 


    })(); // End of data.js





        // some more librarys/js starts here


    })
});