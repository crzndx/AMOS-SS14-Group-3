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

    WinJS.UI.Pages.define("/pages/competitorCards_function/competitorCards_function.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            /* Initialize App Bar */
            slidingAppBar = document.getElementById("appBar").winControl;

            slidingAppBar.getCommandById("showNextYear").addEventListener("click", function () { showNextYear(actualYear); });
            slidingAppBar.getCommandById("showPreviousYear").addEventListener("click", function () { showPreviousYear(actualYear); });
            slidingAppBar.getCommandById("showAllCards").addEventListener("click", function () { showAllCards(); });

            /* Initialize Competitor Cards Content with d3.js */
            var dataset = [1, 2];
            drawCardsContent(dataset);
            //chart1
            var data = [5, 8, 12, 15];

            drawbarchart(data);
        }

    });

    /*
     * Directs the user to another subpage where all cards are shown at once.
     * Page to navigate to must be provided.
     */
    function showAllCards() {
        WinJS.Navigation.navigate("/pages/competitorCards_function/competitorCards_function.html"); //TODO set correct link @ramni
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

    
    function drawCardsContent(data) {
        
        var firstdiv = d3.select(".contentwrapper")
                            .append("div")
                            .attr("id", "fdw-pricing-table");

        var seconddiv = firstdiv.selectAll("div")
                           .data(data)
                           .enter()
                           .append("div")
                           .attr("class", function (d) {
                               if (d == 4) { d = 0;}
                               d++;
                               return "plan plan" + d;
                           });

            seconddiv.append("div")
                        .attr("class", "header")
                        .text("blabla");

                 var ulist = seconddiv.append("ul");
                 /*I create three list item because we want to display 3 KPI (bear in mind that the one in the middle has the stars and needs to be changed*/
                        ulist.append("li")
                             .attr("id", "kpi")
                        .text("blabla")
                        .append("span")
                        .text("blabla");

                        ulist.append("li")
                            .attr("id", "kpi")
                            .text("blabla")
                            .append("span")
                            .text("blabla");

                        ulist.append("li")
                            .attr("id", "kpi")
                        .text("blabla")
                        .append("span")
                        .text("blabla");

                        ulist.append("li")
                            .attr("class", "barchart");

        seconddiv.append("div")
                 .attr("class", "signup")
                 .text("blabla");

    }
    /*
     * Responsible for generating all d3 related graphical elements on the cards dashboard.
     */
    function drawbarchart(data) {
        

        //size of the bar chart 70*160
        var w = 160;
        var h = 70;
        var barpadding = 10;

        //create the svg
        var svg = d3.select(".barchart")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);
        // we create a rectangle for each entry of the data
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            //position on the x axis
            .attr("x", function (d, i) {
                return i * (w / data.length); //like this it adjust to the amount of data we have
            })
            .attr("y", function (d) {
                return h - d;
            })
            .attr("width", w / data.length - barpadding)
            .attr("height", function (d) {
                return d;
            })
            .attr("fill", "teal");


    }


})();
