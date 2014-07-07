(function () {
    "use strict";
    var NUMBER = 0;
    var RATING = 1;
    var PERCENTAGE = 2;




    // Code from TryWinJS

    var json = [{
        "Name": "BMW",
        "Year": "2011",
        "KPI": [
            ["profits", 2853, 0],
            ["salesVolume", 1461, 0],
            ["returnOnCapital", 19.1, 0],
            ["workforce", 95453, 0],
            ["womeWorkforceShare", 13.5, 0],
            ["averageTrainingHours", 3.6, 1],
            ["energyConsumptionPerVehicle", 2.75, 0],
            ["waterConsumptionPerVehicle", 2.31, 0],
            ["co2perVehicle", 0.86],
            ["revenueSum", 60447]

        ],
        "quarterRevenue": [11.75, 17.28, 18.34, 29.63],
        "logo": "/images/carLogos/bmw.png"
    },
            {

                "Name": "Volkswagen",
                "Year": "2011",
                "KPI": [
                    ["profits", 2853, 0],
                    ["salesVolume", 1461, 0],
                    ["returnOnCapital", 19.1, 0],
                    ["workforce", 95453, 0],
                    ["womeWorkforceShare", 13.5, 0],
                    ["averageTrainingHours", 3.6, 1],
                    ["energyConsumptionPerVehicle", 2.75, 0],
                    ["waterConsumptionPerVehicle", 2.31, 0],
                    ["co2perVehicle", 0.86],
                    ["revenueSum", 60447]

                ],
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/volkswagen.png"
            },
            {

                "Name": "Mazda",
                "Year": "2011",
                "KPI": [
				["profits", 2853, 0],
				["salesVolume", 1461, 0],
				["returnOnCapital", 19.1, 0],
				["workforce", 95453, 0],
				["womeWorkforceShare", 13.5, 0],
				["averageTrainingHours", 3.6, 1],
				["energyConsumptionPerVehicle", 2.75, 0],
				["waterConsumptionPerVehicle", 2.31, 0],
				["co2perVehicle", 0.86],
				["revenueSum", 60447]

                ],
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/mazda.png"
            },
            {

                "Name": "Ford",
                "Year": "2011",
                "KPI": [
				["profits", 2853, 0],
				["salesVolume", 1461, 0],
				["returnOnCapital", 19.1, 0],
				["workforce", 95453, 0],
				["womeWorkforceShare", 13.5, 0],
				["averageTrainingHours", 3.6, 1],
				["energyConsumptionPerVehicle", 2.75, 0],
				["waterConsumptionPerVehicle", 2.31, 0],
				["co2perVehicle", 0.86],
				["revenueSum", 60447]

                ],
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/ford.png"
            },
            {

                "Name": "Vauxhall",
                "Year": "2011",
                "KPI": [
				["profits", 2853, 0],
				["salesVolume", 1461, 0],
				["returnOnCapital", 19.1, 0],
				["workforce", 95453, 0],
				["womeWorkforceShare", 13.5, 0],
				["averageTrainingHours", 3.6, 1],
				["energyConsumptionPerVehicle", 2.75, 0],
				["waterConsumptionPerVehicle", 2.31, 0],
				["co2perVehicle", 0.86],
				["revenueSum", 60447]

                ],
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/vauxhall.png"
            },
            {

                "Name": "Skoda",
                "Year": "2011",
                "KPI": [
				["profits", 2853, 0],
				["salesVolume", 1461, 0],
				["returnOnCapital", 19.1, 0],
				["workforce", 95453, 0],
				["womeWorkforceShare", 13.5, 0],
				["averageTrainingHours", 3.6, 1],
				["energyConsumptionPerVehicle", 2.75, 0],
				["waterConsumptionPerVehicle", 2.31, 0],
				["co2perVehicle", 0.86],
				["revenueSum", 60447]

                ],
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/skoda.png"
            },
            {

                "Name": "Mini",
                "Year": "2011",
                "KPI": [
				["profits", 2853, 0],
				["salesVolume", 1461, 0],
				["returnOnCapital", 19.1, 0],
				["workforce", 95453, 0],
				["womeWorkforceShare", 13.5, 0],
				["averageTrainingHours", 3.6, 1],
				["energyConsumptionPerVehicle", 2.75, 0],
				["waterConsumptionPerVehicle", 2.31, 0],
				["co2perVehicle", 0.86],
				["revenueSum", 60447]

                ],
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/mini.png"
            },
            {

                "Name": "Seat",
                "Year": "2011",
                "KPI": [
				["profits", 2853, 0],
				["salesVolume", 1461, 0],
				["returnOnCapital", 19.1, 0],
				["workforce", 95453, 0],
				["womeWorkforceShare", 13.5, 0],
				["averageTrainingHours", 3.6, 1],
				["energyConsumptionPerVehicle", 2.75, 0],
				["waterConsumptionPerVehicle", 2.31, 0],
				["co2perVehicle", 0.86],
				["revenueSum", 60447]

                ],
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/seat.png"
            }
    ];

    function getCustomberIdByName(name) {
        var x = 0;
        var compareName = json[x].Name;
        while (name != compareName) {
            x++;
            compareName = json[x].Name;
            if (x > json.count)
                return -1;
        }
        return x;
    }

    function generateKPIDiv(name, value, type, top, nameDivWidth, valueDivWidth) {

        //     debugger;
        var newInnerHTML =
           '<div style="position: absolute; text-align: left; left:1px; top:' + top + 'px; width: ' + nameDivWidth
               + 'px; height:25px; background-color: #FFFFFF;"><b>' + name + '</b></div>';

        switch (type) {
            case PERCENTAGE:
                newInnerHTML += '<div style="position: absolute; text-align: left; left: ' + (nameDivWidth + 2) + 'px; top: ' + top
                    + 'px; width: ' + valueDivWidth + 'px; height: 25px; background-color: #FFFFFF;">' + value + '%</div>';
                break;
            case RATING:
                newInnerHTML += '<div style="position: absolute; text-align: left; left: ' + (nameDivWidth + 2) + 'px; top: ' + top
                    + 'px; width: ' + valueDivWidth + 'px; height: 25px; background-color: #FFFFFF;">';
                newInnerHTML += '<span class="win-small" data-win-control="WinJS.UI.Rating" data-win-options="{ userRating: ' + value
                    + ', disabled: true}"></span></div>';
                break;
            case NUMBER:
            default:
                newInnerHTML +=
                    '<div style="position: absolute; text-align: left; left: ' + (nameDivWidth + 2) + 'px; top: ' + top + 'px; width: '
                        + valueDivWidth + 'px; height: 25px; background-color: #FFFFFF;">' + value + '</div>';
                break;
        }

        return newInnerHTML;
    }


    var items = [];

    // Generate 160 items
    for (var i = 0; i < 1; i++) {
        json.forEach(function (item) {
            items.push(item);
        });
    }

    WinJS.Namespace.define("Sample.ListView", {
        data: new WinJS.Binding.List(items)
    });
    WinJS.UI.processAll();

    function handler(e) {

        var temp = e.srcElement.getElementsByClassName('itemid')[0];
        var target = e.target;

        // Load data to display
        var x = getCustomberIdByName(temp.value);
        var height = 20 + 2 + json[x].KPI.length * 26;
        var counter = 0;
        var flyOutContent = '<div style="width:420px; height:' + height + 'px; background-color:#000000; position:relative;">';
        flyOutContent += '<div style="position:absolute; background-color:#FFFFFF; left:1px; top:1px; width:418px; height:20px; text-align:center;">' +
            json[x].Name + '</div>';
        var top = 22;
        while ((counter < json[x].KPI.length)) {
            flyOutContent += generateKPIDiv(json[x].KPI[counter][0], json[x].KPI[counter][1], json[x].KPI[counter][2], top, 240, 177);
            counter++;
            top += 26;
        }

        flyOutContent += '</div>';

        var listFlyout = document.getElementById("confirmFlyout");

        listFlyout.innerHTML = flyOutContent;
        listFlyout.winControl.show(target);
    }


    function showTileComparison() {
        WinJS.Navigation.navigate("pages/TileComparison/TileComparison.html");
    }

    WinJS.UI.Pages.define("/pages/allCards/allCards.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            //    var item = HomescreenData.resolveItemReference(options.item);
            var slidingAppBar = document.getElementById("appBarAllCards").winControl;
            slidingAppBar.getCommandById("showTileComparison").addEventListener("click", function () { showTileComparison(); });
            // Parses the title of the subpage from the data file
            // element.querySelector(".titlearea .pagetitle").textContent = item.title;
            var listView = document.querySelector("#listView");

            listView.addEventListener("iteminvoked", handler);
            listView.oniteminvoked = handler;
        }
    });


})();
