(function () {
    "use strict";

    /*
     * Graph plotting with Flot
     * https://github.com/flot/
     */

    /*
     * Configurations for plotting
     */

    // where will be drawn
    var canvasElementName = "#plottingarea";

    // additional styling and axis, labelling, etc.
    var drawingOptions = {
        xaxis: {
            color: "#ffffff"
        },
        yaxis: {
            color: "#ffffff"
        },
        grid: {
            show: true,
            //color: "#ffffff",
            //borderColor: "#ffffff"
        }
    };


    /*
     * Data for graphs to be plotted
     */
    var d1 = [];
    for (var i = 0; i < 14; i += 0.5) {
        d1.push([i, Math.sin(i)]);
    }

    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

    // A null signifies separate line segments

    var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];

    // what will be fed into the tool to draw it
    var data = [d1,d2];
   

    /*
     * Actual drawing function
     * needs reference to DOM element, data source to plot and options how graphs are displayed.
     */
    function drawLineChart(canvasElementName, data, drawingOptions) {
        $.plot(canvasElementName, data, drawingOptions);
    }

    /*
     *  Show and unshow graphs on button click.
     *  Rewrites button's text to show or hide graphs and repaints the drawing area
     *  so that actual selection willl be shown.
     */

    function toggleGraph(event) {
        if (event.target.textContent === "Anzeigen") {
            // Show a graph, and set text to possible action
            event.target.textContent = "Ausblenden";
            data = [d1, d2, d3];
            drawLineChart(canvasElementName, data, drawingOptions);
        } else {
            // hide a graph, and set text to opposite
            event.target.textContent = "Anzeigen";
            data = [d1,d2];
            drawLineChart(canvasElementName, data, drawingOptions);
        }
    }


    /*
     * Grid navigation - called when listed page is being loaded
     */
    WinJS.UI.Pages.define("/pages/lineChart/lineChart.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            document.getElementById("button1").addEventListener("click", toggleGraph, false);
            // invoke plotting function
            drawLineChart(canvasElementName, data, drawingOptions);

        }
    });

})();
