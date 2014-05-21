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
    var canvasElementName = "#plottingarea"; //  @important

    // additional styling and axis, labelling, etc.  @important
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
        },
        colors: ["#ff0000", "#7A45D6", "#FFE840"]
    };


    /*
     * Data for graphs to be plotted
     */
    var d1 = [];
    for (var i = 0; i < 21; i += 0.5) {
        d1.push([i, Math.sin(i)]);
    }

    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13],[10,17]];

    // A null signifies separate line segments

    var d3 = [[0, 1], [7, 12], null, [7, 5], [12, 3]];

    // what will be fed into the tool to draw it @important
    var data = [d1,d2];
    var graphsData = {
        "graph1label": "Titel Graph 1",
        "graph1color": "#FF0000"
    }

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

            //document.write("blabla <span style='color: "+ graphsData.graph1color +";'>" + graphsData.graph1label + " </span> xxx");
            //var mytext = document.createTextNode("<span style='color: " + graphsData.graph1color + ";'>" + graphsData.graph1label + " </span>");

        }
    });

})();
