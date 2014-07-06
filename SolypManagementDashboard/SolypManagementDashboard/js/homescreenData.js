(function () {

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

    // TODO: Replace the data with your real data.
    // You can add data from asynchronous sources whenever it becomes available.
    generateSampleData().forEach(function (item) {
        list.push(item);
    });

    WinJS.Namespace.define("HomescreenData", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemReference: getItemReference,
        getItemSourcePath: getItemSourcePath,
        getItemsFromGroup: getItemsFromGroup,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return item.path;
    }

    /* hack for getting the url of a datasource if available */
    function getItemSourcePath(item) {
            return item.sourcePath;
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    // Get the unique group corresponding to the provided group key.
    function resolveGroupReference(key) {
        return groupedItems.groups.getItemFromKey(key).data;
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

    // Returns an array of sample data that can be added to the application's
    // data list. 
    function generateSampleData() {
        var itemContent = "";
        var itemDescription = "";
        var groupDescription = "";

        // These three strings encode placeholder images. You will want to set the
        // backgroundImage property in your real data to be URLs to images.
        var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";
        var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
        var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";

        // Each of these sample groups must have a unique key to be displayed
        // separately.
        var sampleGroups = [
            { key: "group1", title: "Competitors", subtitle: "Aggregated Competitor data", backgroundImage: darkGray, description: groupDescription },
            { key: "group2", title: "Product Lines", subtitle: "Aggregated Product data", backgroundImage: lightGray, description: groupDescription },
            { key: "group3", title: "Research & Development", subtitle: "Investment dedicated to the R&D department", backgroundImage: mediumGray, description: groupDescription },
            { key: "group4", title: "Procurement", subtitle: "Aggregated Procurement data", backgroundImage: mediumGray, description: groupDescription },
            { key: "group5", title: "Production", subtitle: "Aggregated Producted data", backgroundImage: lightGray, description: groupDescription },
            { key: "group6", title: "Marketing", subtitle: "Customer Support data", backgroundImage: mediumGray, description: groupDescription },
            { key: "group7", title: "Finance", subtitle: "Aggregated finance data", backgroundImage: mediumGray, description: groupDescription },
            { key: "group8", title: "HR", subtitle: "Aggregated HR data", backgroundImage: mediumGray, description: groupDescription },
            { key: "group9", title: "PR", subtitle: "Aggregated PR data", backgroundImage: mediumGray, description: groupDescription },
        ];

        // Each of these sample items should have a reference to a particular
        // group.
        var sampleItems = [
            { group: sampleGroups[0], title: "Card Comparison", subtitle: "Compare different competitor cards with the comparing functionality", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/playingCards.jpg", path: "/pages/TileComparison/TileComparison.html" },
            { group: sampleGroups[0], title: "Showing all Cards", subtitle: "Shows all cards at once", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/playingCards.jpg", path: "/pages/allCards/allCards.html" },
            { group: sampleGroups[0], title: "Linecharts", subtitle: "Displays financial line charts e.g. sales", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[0], title: "Squares", subtitle: "Displays KPI in squares of different sizes", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },
            { group: sampleGroups[0], title: "Squares", subtitle: "Displays KPI in squares of different sizes", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares_zoom/squares.html" },
            { group: sampleGroups[0], title: "Dummy Page", subtitle: "This is a basic template site used for every new subpage", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/blankPage.jpg", path: "/pages/newPageDummy/newDummyHTML.html" },

            { group: sampleGroups[1], title: "Products", subtitle: "Detailed list of all our products", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/playingCards.jpg", path: "/pages/TileComparison/TileComparison.html" },
            /* <do not change> this is done*/
            { group: sampleGroups[2], title: "Total Sales", subtitle: "Sales figures worldwide and regional by departments", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html", sourcePath: "salesData" },
            /* </do not change> */
            { group: sampleGroups[1], title: "Treemap", subtitle: "Current investment/revenue on products", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[2], title: "Linecharts", subtitle: "Research and development over time", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[2], title: "Treemap", subtitle: "Investement in each project", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[3], title: "Linecharts", subtitle: "Procurement data is displayed over time", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[3], title: "Treemap", subtitle: "Different areas with their invesment", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

             /* <do not change> this is done*/
            { group: sampleGroups[3], title: "Total Costs", subtitle: "Global projects total cost aggregated data for 2004-2013", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart_global_project_total_cost.png", path: "/pages/lineChart/lineChart.html", sourcePath: "globalProjectsData" },
            /* </do not change> */  

            { group: sampleGroups[4], title: "Linecharts", subtitle: "Production line data, as timing and quality", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[4], title: "Treemap", subtitle: "Unit costs of every step in the production line", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[5], title: "Linecharts", subtitle: "Marketing campaigns data", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[5], title: "Treemap", subtitle: "Investment in different campaings", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[6], title: "Treemap", subtitle: "Sales by product line/country", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },
            /* <do not change> this is done*/
            { group: sampleGroups[6], title: "Net Profit Margins", subtitle: "Daimler and Mercedes financial data on net profit margins", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart_profit.jpg", path: "/pages/lineChart/lineChart.html", sourcePath: "financeData" },
             /* </do not change> */
            { group: sampleGroups[7], title: "Employees", subtitle: "Shows the development of headcount of employees and more useful content", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart_employee.png", path: "/pages/lineChart/lineChart.html", sourcePath: "hrData" },

            { group: sampleGroups[8], title: "Linecharts", subtitle: "PR data", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },

        ];

        return sampleItems;
    }
})();
