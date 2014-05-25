(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = HomescreenData.resolveItemReference(options.item);

            // Parses the title of the subpage from the data file
            element.querySelector(".titlearea .pagetitle").textContent = item.title;

            /* Initialize App Bar */
            slidingAppBar = document.getElementById("appBar").winControl;

            slidingAppBar.getCommandById("showNextYear").addEventListener("click", function () { showNextYear(actualYear); });
            slidingAppBar.getCommandById("showPreviousYear").addEventListener("click", function () { showPreviousYear(actualYear); });
            slidingAppBar.getCommandById("showAllCards").addEventListener("click", function () { showAllCards(); });
            
            /*End of the slideBar*/

            //listview
            var myData = new WinJS.Binding.List([
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" }
            ]);

            showAllCards(myData);

        }
    });


    // some more librarys/js starts here
    function showAllCards(data) {

        var grouped = data.createGrouped(function (item) {
            return item.title.toUpperCase().charAt(0);
        }, function (item) {
            return {
                title: item.title.toUpperCase().charAt(0)
            };
        }, function (left, right) {
            return left.charCodeAt(0) - right.charCodeAt(0);
        });

        WinJS.Namespace.define("Sample.ListView", {
            data: grouped
        });
        WinJS.UI.processAll();
    }



})();
