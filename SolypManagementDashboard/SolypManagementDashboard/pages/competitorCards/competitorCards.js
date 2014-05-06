(function () {
    "use strict";

    // sample data provided by wikipedia

    var actualYear = 0; // array index

    var data = [
    {
        "make": "Ford",
        "model": "E350",
        "price": "3000.00"
    },
    {
        "make": "Chevy",
        "model": "Venture \"Extended Edition\"",
        "price": "4900.00"
    },
    {
        "make": "BMW",
        "model": "Venture \"Extended Edition, Very Large\"",
        "price": "5000.00"
    },
    {
        "make": "Jeep",
        "model": "Grand Cherokee",
        "price": "4799.00"
    }
    ];

    var slidingAppBar;

    WinJS.UI.Pages.define("/pages/competitorCards/competitorCards.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            slidingAppBar = document.getElementById("appBar").winControl;

            slidingAppBar.getCommandById("showNextYear").addEventListener("click", function () { showNextYear(actualYear); });
            slidingAppBar.getCommandById("showPreviousYear").addEventListener("click", function () { showPreviousYear(actualYear); });
            slidingAppBar.getCommandById("showAllCards").addEventListener("click", function () { showAllCards(); });
        }

    });



    /*
     * Directs the user to another subpage where all cards are shown at once.
     * Page to navigate to must be provided.
     */
    function showAllCards() {
        WinJS.Navigation.navigate("/pages/d3playground/d3playground.html"); //TODO set correct link @ramni
    }

    /*
     * Show Data one in front of actual year displayed at the moment.
     */
    function showPreviousYear(year) {
        // decrease actualYear parameter if year is existent
        if (data[year - 1] != null) {
            actualYear--;
            log(data[actualYear].make);
        }

    }

    /*
     * Show Data one year in the future of actual year displayed at the moment.
     */
    function showNextYear(year) {
        if (data[year + 1] != null) {
            actualYear++;
            log(data[actualYear].make);
        }
    }

    function log(msg) {
        document.getElementById("status").innerHTML += msg;
    }



})();
