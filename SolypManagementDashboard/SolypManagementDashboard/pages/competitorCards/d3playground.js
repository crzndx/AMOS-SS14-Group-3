(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/competitorCards/competitorCards.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

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
    });
})();
