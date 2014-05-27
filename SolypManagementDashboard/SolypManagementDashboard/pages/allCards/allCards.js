(function () {
    "use strict";

    // Code from TryWinJS
    var itemArray = [
       { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
       { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
       { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
       { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
       { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
       { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
       { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
       { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" }
    ];
    var items = [];

    // Generate 160 items
    for (var i = 0; i < 20; i++) {
        itemArray.forEach(function (item) {
            items.push(item);
        });
    }

    WinJS.Namespace.define("Sample.ListView", {
        data: new WinJS.Binding.List(items)
    });
    WinJS.UI.processAll();



    WinJS.UI.Pages.define("/pages/allCards/allCards.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            //    var item = HomescreenData.resolveItemReference(options.item);

            // Parses the title of the subpage from the data file
            // element.querySelector(".titlearea .pagetitle").textContent = item.title;

        }
    });



})();
