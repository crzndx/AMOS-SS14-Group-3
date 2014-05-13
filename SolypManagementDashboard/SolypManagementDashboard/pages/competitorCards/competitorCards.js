(function () {
    "use strict";

    // sample data provided by wikipedia

    var data = loadDataFromSource();
    var dimensionIndex = 2011; // start at the first array section array[0]

    var slidingAppBar;

    WinJS.UI.Pages.define("/pages/competitorCards/competitorCards.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            /* Initialize App Bar */
            slidingAppBar = document.getElementById("appBar").winControl;

            slidingAppBar.getCommandById("showNextYear").addEventListener("click", function () { showNextYear(dimensionIndex); });
            slidingAppBar.getCommandById("showPreviousYear").addEventListener("click", function () { showPreviousYear(dimensionIndex); });
            slidingAppBar.getCommandById("showAllCards").addEventListener("click", function () { showAllCards(); });

            /* Initialize Competitor Cards Content with d3.js */
            drawCardsContent();

            //log(data[dimensionIndex]["profits"]["BMW"]);
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
    function showPreviousYear(index) {
        // decrease actualYear parameter if year is existent
        
        if (data[index - 1] != null) {
            dimensionIndex--;
            log(data[dimensionIndex]["profits"]["BMW"]);
        }

    }

    /*
     * Show Data one year in the future of actual year displayed at the moment.
     */
    function showNextYear(index) {
        if (data[index + 1] != null) {
            dimensionIndex++;
            log(data[dimensionIndex]["profits"]["BMW"]);
        }
    }

    /*
     * Just a debugging function which displays text
     */
    function log(msg) {
        document.getElementById("status").innerHTML += msg;
    }


    /*
     * loads the page's data from a given source. this will have to be readjusted in some time
     * as we have a defined data strategy. As long as this is not the case, this is just a 
     * function returning the actual data.
     *
     * Possible future scenario: call a JS method in default.js which acts like an data-API
     * to query the data you need.
     */

    function loadDataFromSource() {

        var theData = {
            "2010": {
                "profits": [
                    {
                        "BMW": 4853
                    },
                    {
                        "DaimlerAG": 14692
                    },
                    {
                        "Ford": 22637
                    },
                    {
                        "Honda": 6015
                    },
                    {
                        "Nissan": 4912
                    },
                    {
                        "Toyota": 7946
                    },
                    {
                        "Volkswagen": 9338
                    }
                ],
                "salesVolume": [
                    {
                        "BMW": 1461
                    },
                    {
                        "DaimlerAG": 2757
                    },
                    {
                        "Ford": 3588
                    },
                    {
                        "Honda": 1663
                    },
                    {
                        "Nissan": 1448
                    },
                    {
                        "Toyota": 2297
                    },
                    {
                        "Volkswagen": 2520
                    }
                ],
                "returnOnCapital": [
                    {
                        "BMW": 19.1
                    },
                    {
                        "DaimlerAG": 17.01
                    },
                    {
                        "Ford": 25.53
                    },
                    {
                        "Honda": 13.33
                    },
                    {
                        "Nissan": 18.94
                    },
                    {
                        "Toyota": 8.95
                    },
                    {
                        "Volkswagen": 18.99
                    }
                ],
                "workforce": [
                    {
                        "BMW": 95453
                    },
                    {
                        "DaimlerAG": 272408
                    },
                    {
                        "Ford": 182993
                    },
                    {
                        "Honda": 195258
                    },
                    {
                        "Nissan": 149305
                    },
                    {
                        "Toyota": 299005
                    },
                    {
                        "Volkswagen": 310565
                    }
                ],
                "womenWorkforceShare": [
                    {
                        "BMW": 13.5
                    },
                    {
                        "DaimlerAG": 18.1
                    },
                    {
                        "Ford": 11.54
                    },
                    {
                        "Honda": 12.22
                    },
                    {
                        "Nissan": 17.73
                    },
                    {
                        "Toyota": 10.73
                    },
                    {
                        "Volkswagen": 13.12
                    }
                ],
                "averageTrainingDays": [
                    {
                        "BMW": 3.6
                    },
                    {
                        "DaimlerAG": 2.18
                    },
                    {
                        "Ford": 3.94
                    },
                    {
                        "Honda": 3.4
                    },
                    {
                        "Nissan": 5.2
                    },
                    {
                        "Toyota": 1.15
                    },
                    {
                        "Volkswagen": 4.47
                    }
                ],
                "energyConsumptionPerVehicle": [
                    {
                        "BMW": 2.75
                    },
                    {
                        "DaimlerAG": 3.11
                    },
                    {
                        "Ford": 2.3
                    },
                    {
                        "Honda": 2.01
                    },
                    {
                        "Nissan": 2.31
                    },
                    {
                        "Toyota": 2.6
                    },
                    {
                        "Volkswagen": 2.96
                    }
                ],
                "waterConsumptionPerVehicle": [
                    {
                        "BMW": 2.31
                    },
                    {
                        "DaimlerAG": 1.87
                    },
                    {
                        "Ford": 1.99
                    },
                    {
                        "Honda": 2.45
                    },
                    {
                        "Nissan": 2.01
                    },
                    {
                        "Toyota": 2.24
                    },
                    {
                        "Volkswagen": 1.89
                    }
                ],
                "co2perVehicle": [
                    {
                        "BMW": 0.86
                    },
                    {
                        "DaimlerAG": 0.93
                    },
                    {
                        "Ford": 0.73
                    },
                    {
                        "Honda": 1
                    },
                    {
                        "Nissan": 1.35
                    },
                    {
                        "Toyota": 0.98
                    },
                    {
                        "Volkswagen": 0.85
                    }
                ],
                "revenueSum": [
                    {
                        "BMW": 60447
                    },
                    {
                        "DaimlerAG": 114184
                    },
                    {
                        "Ford": 147124
                    },
                    {
                        "Honda": 68224
                    },
                    {
                        "Nissan": 62351
                    },
                    {
                        "Toyota": 94209
                    },
                    {
                        "Volkswagen": 103022
                    }
                ],
                "revenueQ1": [
                    {
                        "BMW": 15111.75
                    },
                    {
                        "DaimlerAG": 27404
                    },
                    {
                        "Ford": 32367
                    },
                    {
                        "Honda": 17056
                    },
                    {
                        "Nissan": 13717
                    },
                    {
                        "Toyota": 28263
                    },
                    {
                        "Volkswagen": 27816
                    }
                ],
                "revenueQ2": [
                    {
                        "BMW": 14507.28
                    },
                    {
                        "DaimlerAG": 34255
                    },
                    {
                        "Ford": 36781
                    },
                    {
                        "Honda": 16374
                    },
                    {
                        "Nissan": 12470
                    },
                    {
                        "Toyota": 24494
                    },
                    {
                        "Volkswagen": 23695
                    }
                ],
                "revenueQ3": [
                    {
                        "BMW": 13298.34
                    },
                    {
                        "DaimlerAG": 33113
                    },
                    {
                        "Ford": 42666
                    },
                    {
                        "Honda": 17056
                    },
                    {
                        "Nissan": 18705
                    },
                    {
                        "Toyota": 19784
                    },
                    {
                        "Volkswagen": 22665
                    }
                ],
                "revenueQ4": [
                    {
                        "BMW": 17529.63
                    },
                    {
                        "DaimlerAG": 19411
                    },
                    {
                        "Ford": 35310
                    },
                    {
                        "Honda": 17738
                    },
                    {
                        "Nissan": 17458
                    },
                    {
                        "Toyota": 21668
                    },
                    {
                        "Volkswagen": 28846
                    }
                ]
            },
            "2011": {
                "profits": [
                    {
                        "BMW": 7383
                    },
                    {
                        "DaimlerAG": 14648
                    },
                    {
                        "Ford": 22751
                    },
                    {
                        "Honda": 6015
                    },
                    {
                        "Nissan": 5163
                    },
                    {
                        "Toyota": 8113
                    },
                    {
                        "Volkswagen": 9263
                    }
                ],
                "salesVolume": [
                    {
                        "BMW": 1669
                    },
                    {
                        "DaimlerAG": 2749
                    },
                    {
                        "Ford": 3606
                    },
                    {
                        "Honda": 1664
                    },
                    {
                        "Nissan": 1522
                    },
                    {
                        "Toyota": 2346
                    },
                    {
                        "Volkswagen": 2500
                    }
                ],
                "returnOnCapital": [
                    {
                        "BMW": 25.4
                    },
                    {
                        "DaimlerAG": 16.96
                    },
                    {
                        "Ford": 25.66
                    },
                    {
                        "Honda": 13.33
                    },
                    {
                        "Nissan": 19.9
                    },
                    {
                        "Toyota": 9.14
                    },
                    {
                        "Volkswagen": 18.84
                    }
                ],
                "workforce": [
                    {
                        "BMW": 100306
                    },
                    {
                        "DaimlerAG": 271591
                    },
                    {
                        "Ford": 183908
                    },
                    {
                        "Honda": 195258
                    },
                    {
                        "Nissan": 156920
                    },
                    {
                        "Toyota": 305284
                    },
                    {
                        "Volkswagen": 308081
                    }
                ],
                "womenWorkforceShare": [
                    {
                        "BMW": 13.5
                    },
                    {
                        "DaimlerAG": 18.05
                    },
                    {
                        "Ford": 11.6
                    },
                    {
                        "Honda": 12.22
                    },
                    {
                        "Nissan": 18.63
                    },
                    {
                        "Toyota": 10.96
                    },
                    {
                        "Volkswagen": 13.02
                    }
                ],
                "averageTrainingDays": [
                    {
                        "BMW": 3.6
                    },
                    {
                        "DaimlerAG": 2.17
                    },
                    {
                        "Ford": 3.96
                    },
                    {
                        "Honda": 3.4
                    },
                    {
                        "Nissan": 5.46
                    },
                    {
                        "Toyota": 1.17
                    },
                    {
                        "Volkswagen": 4.44
                    }
                ],
                "energyConsumptionPerVehicle": [
                    {
                        "BMW": 2.46
                    },
                    {
                        "DaimlerAG": 3.1
                    },
                    {
                        "Ford": 2.31
                    },
                    {
                        "Honda": 2.01
                    },
                    {
                        "Nissan": 2.43
                    },
                    {
                        "Toyota": 2.65
                    },
                    {
                        "Volkswagen": 2.94
                    }
                ],
                "waterConsumptionPerVehicle": [
                    {
                        "BMW": 2.12
                    },
                    {
                        "DaimlerAG": 1.86
                    },
                    {
                        "Ford": 1.99
                    },
                    {
                        "Honda": 2.45
                    },
                    {
                        "Nissan": 2.11
                    },
                    {
                        "Toyota": 2.29
                    },
                    {
                        "Volkswagen": 1.87
                    }
                ],
                "co2perVehilce": [
                    {
                        "BMW": 0.71
                    },
                    {
                        "DaimlerAG": 0.93
                    },
                    {
                        "Ford": 0.73
                    },
                    {
                        "Honda": 1
                    },
                    {
                        "Nissan": 1.41
                    },
                    {
                        "Toyota": 1
                    },
                    {
                        "Volkswagen": 0.85
                    }
                ],
                "revenueSum": [
                    {
                        "BMW": 68828
                    },
                    {
                        "DaimlerAG": 113842
                    },
                    {
                        "Ford": 147860
                    },
                    {
                        "Honda": 68224
                    },
                    {
                        "Nissan": 63036
                    },
                    {
                        "Toyota": 96187
                    },
                    {
                        "Volkswagen": 102507
                    }
                ],
                "revenueQ1": [
                    {
                        "BMW": 14453.88
                    },
                    {
                        "DaimlerAG": 29599
                    },
                    {
                        "Ford": 42879
                    },
                    {
                        "Honda": 17056
                    },
                    {
                        "Nissan": 15759
                    },
                    {
                        "Toyota": 24047
                    },
                    {
                        "Volkswagen": 25627
                    }
                ],
                "revenueQ2": [
                    {
                        "BMW": 16518.72
                    },
                    {
                        "DaimlerAG": 29599
                    },
                    {
                        "Ford": 44358
                    },
                    {
                        "Honda": 15691
                    },
                    {
                        "Nissan": 12607
                    },
                    {
                        "Toyota": 25970
                    },
                    {
                        "Volkswagen": 22552
                    }
                ],
                "revenueQ3": [
                    {
                        "BMW": 19271.84
                    },
                    {
                        "DaimlerAG": 33014
                    },
                    {
                        "Ford": 41401
                    },
                    {
                        "Honda": 17738
                    },
                    {
                        "Nissan": 16389
                    },
                    {
                        "Toyota": 26932
                    },
                    {
                        "Volkswagen": 28702
                    }
                ],
                "revenueQ4": [
                    {
                        "BMW": 18583.56
                    },
                    {
                        "DaimlerAG": 21630
                    },
                    {
                        "Ford": 19222
                    },
                    {
                        "Honda": 17738
                    },
                    {
                        "Nissan": 18281
                    },
                    {
                        "Toyota": 19237
                    },
                    {
                        "Volkswagen": 25627
                    }
                ]
            },
            "2012": {
                "profits": [
                    {
                        "BMW": 7819
                    },
                    {
                        "DaimlerAG": 14853
                    },
                    {
                        "Ford": 22432
                    },
                    {
                        "Honda": 6021
                    },
                    {
                        "Nissan": 5292
                    },
                    {
                        "Toyota": 8291
                    },
                    {
                        "Volkswagen": 9393
                    }
                ],
                "salesVolume": [
                    {
                        "BMW": 1845.2
                    },
                    {
                        "DaimlerAG": 2788
                    },
                    {
                        "Ford": 3556
                    },
                    {
                        "Honda": 1666
                    },
                    {
                        "Nissan": 1561
                    },
                    {
                        "Toyota": 2398
                    },
                    {
                        "Volkswagen": 2535
                    }
                ],
                "returnOnCapital": [
                    {
                        "BMW": 23.1
                    },
                    {
                        "DaimlerAG": 17.2
                    },
                    {
                        "Ford": 25.3
                    },
                    {
                        "Honda": 13.34
                    },
                    {
                        "Nissan": 20.4
                    },
                    {
                        "Toyota": 9.34
                    },
                    {
                        "Volkswagen": 19.1
                    }
                ],
                "workforce": [
                    {
                        "BMW": 105876
                    },
                    {
                        "DaimlerAG": 275393
                    },
                    {
                        "Ford": 181333
                    },
                    {
                        "Honda": 195453
                    },
                    {
                        "Nissan": 160843
                    },
                    {
                        "Toyota": 312000
                    },
                    {
                        "Volkswagen": 312394
                    }
                ],
                "womenWorkforceShare": [
                    {
                        "BMW": 14.2
                    },
                    {
                        "DaimlerAG": 18.3
                    },
                    {
                        "Ford": 11.44
                    },
                    {
                        "Honda": 12.23
                    },
                    {
                        "Nissan": 19.1
                    },
                    {
                        "Toyota": 11.2
                    },
                    {
                        "Volkswagen": 13.2
                    }
                ],
                "averageTrainingDays": [
                    {
                        "BMW": 3.7
                    },
                    {
                        "DaimlerAG": 2.2
                    },
                    {
                        "Ford": 3.9
                    },
                    {
                        "Honda": 3.4
                    },
                    {
                        "Nissan": 5.6
                    },
                    {
                        "Toyota": 1.2
                    },
                    {
                        "Volkswagen": 4.5
                    }
                ],
                "energyConsumptionPerVehicle": [
                    {
                        "BMW": 2.44
                    },
                    {
                        "DaimlerAG": 3.14
                    },
                    {
                        "Ford": 2.28
                    },
                    {
                        "Honda": 2.01
                    },
                    {
                        "Nissan": 2.49
                    },
                    {
                        "Toyota": 2.71
                    },
                    {
                        "Volkswagen": 2.98
                    }
                ],
                "waterConsumptionPerVehicle": [
                    {
                        "BMW": 2.1
                    },
                    {
                        "DaimlerAG": 1.89
                    },
                    {
                        "Ford": 1.96
                    },
                    {
                        "Honda": 2.45
                    },
                    {
                        "Nissan": 2.16
                    },
                    {
                        "Toyota": 2.34
                    },
                    {
                        "Volkswagen": 1.9
                    }
                ],
                "co2perVehicle": [
                    {
                        "BMW": 0.68
                    },
                    {
                        "DaimlerAG": 0.94
                    },
                    {
                        "Ford": 0.72
                    },
                    {
                        "Honda": 1
                    },
                    {
                        "Nissan": 1.45
                    },
                    {
                        "Toyota": 1.02
                    },
                    {
                        "Volkswagen": 0.86
                    }
                ],
                "revenueSum": [
                    {
                        "BMW": 76848
                    },
                    {
                        "DaimlerAG": 114297
                    },
                    {
                        "Ford": 145790
                    },
                    {
                        "Honda": 68292
                    },
                    {
                        "Nissan": 63982
                    },
                    {
                        "Toyota": 98303
                    },
                    {
                        "Volkswagen": 103942
                    }
                ],
                "revenueQ1": [
                    {
                        "BMW": 16138.08
                    },
                    {
                        "DaimlerAG": 27431
                    },
                    {
                        "Ford": 29158
                    },
                    {
                        "Honda": 20488
                    },
                    {
                        "Nissan": 12796
                    },
                    {
                        "Toyota": 19661
                    },
                    {
                        "Volkswagen": 21828
                    }
                ],
                "revenueQ2": [
                    {
                        "BMW": 17675.04
                    },
                    {
                        "DaimlerAG": 22859
                    },
                    {
                        "Ford": 43737
                    },
                    {
                        "Honda": 15707
                    },
                    {
                        "Nissan": 14716
                    },
                    {
                        "Toyota": 27525
                    },
                    {
                        "Volkswagen": 23907
                    }
                ],
                "revenueQ3": [
                    {
                        "BMW": 16138.08
                    },
                    {
                        "DaimlerAG": 24002
                    },
                    {
                        "Ford": 36448
                    },
                    {
                        "Honda": 19805
                    },
                    {
                        "Nissan": 17915
                    },
                    {
                        "Toyota": 19661
                    },
                    {
                        "Volkswagen": 29104
                    }
                ],
                "revenueQ4": [
                    {
                        "BMW": 26896.8
                    },
                    {
                        "DaimlerAG": 40004
                    },
                    {
                        "Ford": 36448
                    },
                    {
                        "Honda": 12293
                    },
                    {
                        "Nissan": 18555
                    },
                    {
                        "Toyota": 31457
                    },
                    {
                        "Volkswagen": 29104
                    }
                ]
            }
        };

        return theData;
    }



    /*
     * Responsible for generating all d3 related graphical elements on the cards dashboard.
     */
    function drawCardsContent() {
        //chart1
        var data = [21, 25, 19, 32];


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

        //chart2
        var data = [15, 12, 19, 14];


        //size of the bar chart 70*160
        var w = 160;
        var h = 70;
        var barpadding = 10;

        //create the svg
        var svg = d3.select(".barchart2")
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

        //chart3
        var data = [11, 13, 19, 21];


        //size of the bar chart 70*160
        var w = 160;
        var h = 70;
        var barpadding = 10;

        //create the svg
        var svg = d3.select(".barchart3")
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

        //chart4
        var data = [18, 25, 19, 31];


        //size of the bar chart 70*160
        var w = 160;
        var h = 70;
        var barpadding = 10;

        //create the svg
        var svg = d3.select(".barchart4")
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
