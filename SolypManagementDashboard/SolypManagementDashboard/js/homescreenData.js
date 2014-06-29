(function () {
    "use strict";

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
        getItemsFromGroup: getItemsFromGroup,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return item.path;
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
        var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";
        var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
        var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";

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
            { group: sampleGroups[0], title: "Squares_label", subtitle: "Displays KPI in squares of different sizes", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares_label/squares_label.html" },
            { group: sampleGroups[0], title: "Squares_zoom", subtitle: "Displays KPI in squares of different sizes", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares_zoom/squares_zoom.html" },
            { group: sampleGroups[0], title: "Dummy Page", subtitle: "This is a basic template site used for every new subpage", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/blankPage.jpg", path: "/pages/newPageDummy/newDummyHTML.html" },
            { group: sampleGroups[0], title: "Squares_original", subtitle: "Displays KPI in squares of different sizes", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares_original/squares_original.html" },

            { group: sampleGroups[1], title: "Products", subtitle: "Detailed list of all our products", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/playingCards.jpg", path: "/pages/TileComparison/TileComparison.html" },
            { group: sampleGroups[1], title: "Linecharts", subtitle: "How our products have evolve over time", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[1], title: "Treemap", subtitle: "Current investment/revenue on products", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[2], title: "Linecharts", subtitle: "Research and development over time", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[2], title: "Treemap", subtitle: "Investement in each project", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[3], title: "Linecharts", subtitle: "Procurement data is displayed over time", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[3], title: "Treemap", subtitle: "Different areas with their invesment", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[4], title: "Linecharts", subtitle: "Production line data, as timing and quality", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[4], title: "Treemap", subtitle: "Unit costs of every step in the production line", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[5], title: "Linecharts", subtitle: "Marketing campaigns data", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[5], title: "Treemap", subtitle: "Investment in different campaings", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[6], title: "Linecharts", subtitle: "Sales numbers", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
            { group: sampleGroups[6], title: "Treemap", subtitle: "Sales by product line/country", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/squares.jpg", path: "/pages/squares/squares.html" },

            { group: sampleGroups[7], title: "Linecharts", subtitle: "HR data ", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
           
            { group: sampleGroups[8], title: "Linecharts", subtitle: "PR data", description: itemDescription, content: itemContent, backgroundImage: "/images/groupedItems/lineChart.jpg", path: "/pages/lineChart/lineChart.html" },
           



        ];

        return sampleItems;
    }
})();
