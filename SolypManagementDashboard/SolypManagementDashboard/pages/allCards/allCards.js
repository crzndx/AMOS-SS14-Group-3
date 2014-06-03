(function () {
    "use strict";

   


    // Code from TryWinJS
   
    var json = [{
            "Name": "BMW",
            "Year": "2011",
            "profits": 2853,
            "salesVolume": 1461,
            "returnOnCapital": 19.1,
            "workforce": 95453,
            "womenWorkforceShare": 13.5,
            "averageTrainingHours": 3.6,
            "energyConsumptionPerVehicle": 2.75,
            "waterConsumptionPerVehicle": 2.31,
            "co2perVehicle": 0.86,
            "revenueSum": 60447,
            "quarterRevenue": [11.75, 17.28, 18.34, 29.63],
            "logo": "/images/carLogos/bmw.png",
            },
            {

            "Name": "Volkswagen",
            "Year": "2011",
            "profits": 4853,
            "salesVolume": 1461,
            "returnOnCapital": 19.1,
            "workforce": 95453,
            "womenWorkforceShare": 13.5,
            "averageTrainingHours": 1.6,
            "energyConsumptionPerVehicle": 2.75,
            "waterConsumptionPerVehicle": 2.31,
            "co2perVehicle": 0.86,
            "revenueSum": 60447,
            "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
            "logo": "/images/carLogos/volkswagen.png",
            },
            {

                "Name": "Mazda",
                "Year": "2011",
                "profits": 4853,
                "salesVolume": 1461,
                "returnOnCapital": 19.1,
                "workforce": 95453,
                "womenWorkforceShare": 13.5,
                "averageTrainingHours": 1.6,
                "energyConsumptionPerVehicle": 2.75,
                "waterConsumptionPerVehicle": 2.31,
                "co2perVehicle": 0.86,
                "revenueSum": 60447,
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/mazda.png",
            },
            {

                "Name": "Ford",
                "Year": "2011",
                "profits": 4853,
                "salesVolume": 1461,
                "returnOnCapital": 19.1,
                "workforce": 95453,
                "womenWorkforceShare": 13.5,
                "averageTrainingHours": 1.6,
                "energyConsumptionPerVehicle": 2.75,
                "waterConsumptionPerVehicle": 2.31,
                "co2perVehicle": 0.86,
                "revenueSum": 60447,
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/ford.png",
            },
            {

                "Name": "Vauxhall",
                "Year": "2011",
                "profits": 4853,
                "salesVolume": 1461,
                "returnOnCapital": 19.1,
                "workforce": 95453,
                "womenWorkforceShare": 13.5,
                "averageTrainingHours": 1.6,
                "energyConsumptionPerVehicle": 2.75,
                "waterConsumptionPerVehicle": 2.31,
                "co2perVehicle": 0.86,
                "revenueSum": 60447,
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/vauxhall.png",
            },
            {

                "Name": "Skoda",
                "Year": "2011",
                "profits": 4853,
                "salesVolume": 1461,
                "returnOnCapital": 19.1,
                "workforce": 95453,
                "womenWorkforceShare": 13.5,
                "averageTrainingHours": 1.6,
                "energyConsumptionPerVehicle": 2.75,
                "waterConsumptionPerVehicle": 2.31,
                "co2perVehicle": 0.86,
                "revenueSum": 60447,
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/skoda.png",
            },
            {

                "Name": "Mini",
                "Year": "2011",
                "profits": 4853,
                "salesVolume": 1461,
                "returnOnCapital": 19.1,
                "workforce": 95453,
                "womenWorkforceShare": 13.5,
                "averageTrainingHours": 1.6,
                "energyConsumptionPerVehicle": 2.75,
                "waterConsumptionPerVehicle": 2.31,
                "co2perVehicle": 0.86,
                "revenueSum": 60447,
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/mini.png",
            },
            {

                "Name": "Seat",
                "Year": "2011",
                "profits": 4853,
                "salesVolume": 1461,
                "returnOnCapital": 19.1,
                "workforce": 95453,
                "womenWorkforceShare": 13.5,
                "averageTrainingHours": 1.6,
                "energyConsumptionPerVehicle": 2.75,
                "waterConsumptionPerVehicle": 2.31,
                "co2perVehicle": 0.86,
                "revenueSum": 60447,
                "quarterRevenue": [12.75, 13.28, 14.34, 25.63],
                "logo": "/images/carLogos/seat.png",
            },
    ];

    var items = [];

    // Generate 160 items
    for (var i = 0; i < 20; i++) {
        json.forEach(function (item) {
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
