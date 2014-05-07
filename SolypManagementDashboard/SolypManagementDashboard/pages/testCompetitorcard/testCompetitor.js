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

            // some more librarys/js starts here
        }
    });


    var array = [
    { ownhtml: {header:"Competotor1", price:"20mE",monthly:"2014" }},
    {/* type: "item", title: "Cliff", picture: "/images/Cliff.jpg",*/ ownhtml: {text1: "text1", text2: "text2", text3: "text3"} },
    {/* type: "item", title: "Grapes", picture: "/images/Grapes.jpg",*/ ownhtml: { text1: "text4", text2: "text5", text3: "text6" } },
    {/* type: "item", title: "Rainier", picture: "/images/Rainier.jpg",*/ ownhtml: { text1: "text7", text2: "text8", text3: "text9" } },
    {/* type: "item", title: "Sunset", picture: "/images/Sunset.jpg",*/ ownhtml: { text1: "tile10", text2: "tile11", text3: "tile12" } },
    {/* type: "item", title: "Valley", picture: "/images/Valley.jpg",*/ ownhtml: { text1: "text13", text2: "text14", text3: "text15" } }
        ];
    var bindingList = new WinJS.Binding.List(array);

    WinJS.Namespace.define("DefaultData", {
        bindingList: bindingList,
        array: array
    });
    WinJS.UI.processAll();



})();
