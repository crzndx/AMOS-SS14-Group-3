(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/d3playground/d3playground.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
 
            var data = [21, 25, 19, 22];

            d3.select(".contentwrapper")
                .data(data)
                .enter()
                .append("div")
                .attr("class", "bar")
                .style("height", function (d) {
                    var barheight = d * 5;
                    return barheight
                    "px";
                });
            //size of the bar chart 70*170
            var w = 160;
            var h = 70;
            var barpadding = 10;

            //create the svg
            var svg = d3.select(".contentwrapper")
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

            //adding labels to each bar
           
        }
    });
})();
