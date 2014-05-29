(function () {
    "use strict";

   


    // Code from TryWinJS
    var itemArray = [
       { title: "Volkswagen", text: "Gelato", picture: "/images/carLogos/volkswagen.png" },
       { title: "Ford", text: "Sorbet", picture: "/images/carLogos/ford.png" },
       { title: "BMW", text: "Low-fat frozen yogurt", picture: "/images/carLogos/bmw.png" },
       { title: "MINI", text: "Sorbet", picture: "/images/carLogos/mini.png" },
       { title: "Skoda", text: "Sorbet", picture: "/images/carLogos/skoda.png" },
       { title: "Seat", text: "Ice Cream", picture: "/images/carLogos/seat.png" },
       { title: "Mazda", text: "Low-fat frozen yogurt", picture: "/images/carLogos/mazda.png" },
       { title: "Vauxhall", text: "Sorbet", picture: "/images/carLogos/vauxhall.png" }
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
