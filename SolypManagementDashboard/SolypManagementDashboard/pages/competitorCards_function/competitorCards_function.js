(function () {
    "use strict";

    // sample data provided by wikipedia

    var actualYear = 0; // array index
    // data created by phillip

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

            var jsoncompetitors = [{
                "Name": "BMW",
                "Period1": {

                    "Year": "2011",
                    "profits": 4853,
                    "salesVolume": 1461,
                    "returnOnCapital": 19.1,
                    "workforce": 95453,
                    "womenWorkforceShare": 13.5,
                    "averageTrainingHours": 3.6,
                    "energyConsumptionPerVehicle": 2.75,
                    "waterConsumptionPerVehicle": 2.31,
                    "co2perVehicle": 0.86,
                    "revenueSum": 60447,
                    "quarterRevenue": {
                        "Q1": 15111.75,
                        "Q2": 14507.28,
                        "Q3": 13298.34,
                        "Q4": 17529.63
                    }
                },
                "Period2": {

                    "Year": "2010",
                    "profits": 4853,
                    "salesVolume": 1461,
                    "returnOnCapital": 19.1,
                    "workforce": 95453,
                    "womenWorkforceShare": 13.5,
                    "averageTrainingHours": 3.6,
                    "energyConsumptionPerVehicle": 2.75,
                    "waterConsumptionPerVehicle": 2.31,
                    "co2perVehicle": 0.86,
                    "revenueSum": 60447,
                    "revenueQ1": 15111.75,
                    "revenueQ2": 14507.28,
                    "revenueQ3": 13298.34,
                    "revenueQ4": 17529.63,
                }
            },
                    {

                        "Name": "Volkswagen",
                        "Period1": {

                            "Year": "2011",
                            "profits": 4853,
                            "salesVolume": 1461,
                            "returnOnCapital": 19.1,
                            "workforce": 95453,
                            "womenWorkforceShare": 13.5,
                            "averageTrainingHours": 3.6,
                            "energyConsumptionPerVehicle": 2.75,
                            "waterConsumptionPerVehicle": 2.31,
                            "co2perVehicle": 0.86,
                            "revenueSum": 60447,
                            "quarterRevenue": {
                                "Q1": 15111.75,
                                "Q2": 14507.28,
                                "Q3": 13298.34,
                                "Q4": 17529.63
                            }
                        },
                        "Period2": {

                            "Year": "2010",
                            "profits": 4853,
                            "salesVolume": 1461,
                            "returnOnCapital": 19.1,
                            "workforce": 95453,
                            "womenWorkforceShare": 13.5,
                            "averageTrainingHours": 3.6,
                            "energyConsumptionPerVehicle": 2.75,
                            "waterConsumptionPerVehicle": 2.31,
                            "co2perVehicle": 0.86,
                            "revenueSum": 60447,
                            "revenueQ1": 15111.75,
                            "revenueQ2": 14507.28,
                            "revenueQ3": 13298.34,
                            "revenueQ4": 17529.63,
                        }
                    }

            ];

            drawCardsContent(jsoncompetitors);
            //chart1
            var data = [5, 8, 12, 15];

            
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

        var counter = 0;
        
        var firstdiv = d3.select(".contentwrapper")
                            .append("div")
                            .attr("id", "fdw-pricing-table");

        var seconddiv = firstdiv.selectAll("div")
                           .data(data)
                           .enter()
                           .append("div")
                           .attr("class", function (d) {
                               counter++;
                               if (counter == 4) { counter = 0;}
                               return "plan plan" + counter;});

            seconddiv.append("div")
                        .attr("class", "header")
                        .text(function (d) { return d.Name;});


        /*I create three list item because we want to display 3 KPI (bear in mind that the one in the middle has the stars and needs to be changed*/
                var ulist = seconddiv.append("ul");
               
                        ulist.append("li")
                                .attr("id", "kpi")
                                .text("Profits")
                                .append("span")
                                .style("position", "relative")
                                .style("left", "70px")
                                .style("font-weight", "normal")
                                .text(function (d) { return d.Period1.profits; });

                        ulist.append("li")
                                .attr("id", "kpi")
                                .text("Sales Volume")
                                .append("span")
                                .style("position", "relative")
                                .style("left", "70px")
                                .style("font-weight", "normal")
                                .text(function (d) { return d.Period1.salesVolume; });

                        ulist.append("li")
                                .attr("id", "kpi")
                                .text("Workforce")
                                .append("span")
                                .style("position", "relative")
                                .style("left", "70px")
                                .style("font-weight", "normal")
                                .text(function (d) { return d.Period1.workforce; });

                        ulist.append("li")
                                .attr("class", "barchart");

                 seconddiv.append("div")
                          .attr("class", "signup")
                          .text("More Info");

                


                 

        } //here the card display ends
    
   
    function createbarchart(data) {
        //drawing the barchart

        //size of the bar chart 70*160

        var w = 160;
        var h = 70;
        var barpadding = 10;
        var four = [0, 0, 0, 0]

        //create the svg
        var svg = d3.select(".barchart")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);
        // we create a rectangle for each entry of the data
        svg.selectAll("rect")
            .data(d.Period1.quarterRevenue)
            .enter()
            .append("rect")
            //position on the x axis
            .attr("x", function (d, i) {
                return i * (w / 4); //like this it adjust to the amount of data we have
            })
            .attr("y", function (d) {
                return h - d;
            })
            .attr("width", w / 4 - barpadding)
            .attr("height", function (d) { return d.Period1.quarterRevenue.Q1; })
            .attr("fill", "teal");
    }

})();
