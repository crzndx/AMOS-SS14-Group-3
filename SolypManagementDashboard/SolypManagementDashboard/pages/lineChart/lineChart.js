
    /*
     * Graph plotting with Flot
     * https://github.com/flot/
     */

    /*
     * Configurations for plotting
     */

    var canvasElementName = "#plottingarea"; //  where will be drawn
    var choices = $("#choices");

    var colors = ["#ff0000", "#ff9900", "#99ff00", "#408cff", "#cc00ff", "#ffbfbf", "#ffcc00", "#7fffa6", "#4053ff", "#ff00b3", "#ffa680", "#ffff80", "#80ffff", "#bfc6ff", "#ff0066", "#ffd9bf", "#f2ffbf", "#00ccff", "#cc80ff", "#ff80b3"];
    var colorsChosen = [];

    /*
     * Data for graphs to be plotted
     */
    var index = 0; // current index to show dataset #

    // actual data being displayed
    // @TODO do it externally?
    var datasets = {
        0 : {
            "myanmar": {
                label: "Myanmar",
                data: [[1988, 683994], [1989, 573060], [1990, 153631], [1991, 333349], [1992, 311705], [1993, 202111], [1994, 247867], [1995, 300382], [1996, 300046], [1997, 300000], [1998, 322611], [1999, 129421], [2000, 142172], [2001, 244932], [2002, 227303], [2003, 540813], [2004, 183451], [2005, 304638], [2006, 528692]]
            },
            "china": {
                label: "China",
                data: [[1988, 483994], [1989, 479060], [1990, 457648], [1991, 401949], [1992, 424705], [1993, 402375], [1994, 377867], [1995, 357382], [1996, 337946], [1997, 336185], [1998, 328611], [1999, 329421], [2000, 342172], [2001, 344932], [2002, 387303], [2003, 440813], [2004, 480451], [2005, 504638], [2006, 528692]]
            },
            "saudiarabia": {
                label: "Saudi Arabia",
                data: [[1988, 218000], [1989, 203000], [1990, 171000], [1992, 42500], [1993, 37600], [1994, 36600], [1995, 21700], [1996, 19200], [1997, 21300], [1998, 13600], [1999, 14000], [2000, 19100], [2001, 21300], [2002, 23600], [2003, 25100], [2004, 26100], [2005, 31100], [2006, 34700]]
            },
            "thailand": {
                label: "Thailand",
                data: [[1988, 62982], [1989, 62027], [1990, 60696], [1991, 62348], [1992, 58560], [1993, 56393], [1994, 54579], [1995, 50818], [1996, 50554], [1997, 48276], [1998, 47691], [1999, 47529], [2000, 47778], [2001, 48760], [2002, 50949], [2003, 57452], [2004, 60234], [2005, 60076], [2006, 59213]]
            },
            "japan": {
                label: "Japan",
                data: [[1988, 11982], [1989, 22027], [1990, 660696], [1991, 44348], [1992, 128560], [1993, 256393], [1994, 354579], [1995, 550818], [1996, 50554], [1997, 148276], [1998, 472691], [1999, 347529], [2000, 473778], [2001, 487160], [2002, 509249], [2003, 574521], [2004, 602334], [2005, 601076], [2006, 593213]]
            },
            "metadata": {
                pagetitle: "Sales MEA",
                title: "Sales in Asia and Middle East",
                xaxis: "Year",
                yaxis: "Yen"
            }
        },
        1: {
            "uk": {
                label: "United Kingdom",
                data: [[1988, 183194], [1989, 273030], [1990, 133631], [1991, 333349], [1992, 311105], [1993, 2111], [1994, 123717], [1995, 100382], [1996, 320046], [1997, 100000], [1998, 22611], [1999, 129421], [2000, 142172], [2001, 344932], [2002, 223303], [2003, 540813], [2004, 183451], [2005, 303468], [2006, 458495]]
            },
            "italy": {
                label: "Italy",
                data: [[1988, 183994], [1989, 319030], [1990, 417648], [1991, 41949], [1992, 421705], [1993, 302375], [1994, 177867], [1995, 157382], [1996, 337946], [1997, 26185], [1998, 338611], [1999, 129421], [2000, 342172], [2001, 144932], [2002, 287303], [2003, 840813], [2004, 480351], [2005, 501638], [2006, 574692]]
            },
            "germany": {
                label: "Germany",
                data: [[1988, 55627], [1989, 55475], [1990, 58464], [1991, 55134], [1992, 52436], [1993, 47139], [1994, 43962], [1995, 43238], [1996, 42395], [1997, 40854], [1998, 40993], [1999, 41822], [2000, 41147], [2001, 40474], [2002, 40604], [2003, 40044], [2004, 38816], [2005, 38060], [2006, 36984]]
            },
            "metadata": {
                pagetitle: "Sales EU",
                title: "Sales in Europe",
                xaxis: "Year",
                yaxis: "Euro"
            }
            
        },
        2: {
            "denmark": {
                label: "Denmark",
                data: [[1988, 3813], [1989, 3719], [1990, 3722], [1991, 3789], [1992, 3720], [1993, 3730], [1994, 3636], [1995, 3598], [1996, 3610], [1997, 3655], [1998, 3695], [1999, 3673]]
            },
            "sweden": {
                label: "Sweden",
                data: [[1988, 6402], [1989, 6474], [1990, 6605], [1991, 6209], [1992, 6035], [1993, 6020], [1994, 6000], [1995, 6018], [1996, 3958], [1997, 5780], [1998, 5954], [1999, 6178]]
            },
            "norway": {
                label: "Norway",
                data: [[1988, 4382], [1989, 4498], [1990, 4535], [1991, 4398], [1992, 4766], [1993, 4441], [1994, 4670], [1995, 4217], [1996, 4275], [1997, 4203], [1998, 4482], [1999, 4506]]
            },
            "metadata": {
                pagetitle: "Customers",
                title: "Customers in Scandinavia",
                xaxis: "Year",
                yaxis: "Headcount"
            }
        }
    };

    // options to draw canvas
    var options = {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        yaxis: {
            min: 0
        },
        xaxis: {
            tickDecimals: 0
        },
        legend: {
            show: false
        },
        yaxisName: datasets[index]["metadata"]["xaxis"],
        xaxisName: datasets[index]["metadata"]["yaxis"],
        crosshair: {
            mode: "xy",
            color: "rgba(255, 255, 255, 0.30)",
            lineWidth: 1
        }
    };


    /*
    * get random color from defined list of good visible colors
    * arguments: a list of colors
    */
    function getRandomColor(colorList) {
        var l = colorList.length;
        var r = colorList[Math.floor(Math.random() * l)];

        // is color already in use?
        if (colorsChosen.indexOf(r) > -1) {
            if (colorList.length != colorsChosen.length) {
                return getRandomColor(colorList);
            } else {
                // when showing more than 20 graphs
                return "#ff0000";
            }
        } else {
            colorsChosen.push(r);
            return r;
        }
    }


    /*
     * Show Data one in front of actual displayed at the moment.
     * arguments: index, dataset
     */
    function showPreviousDataset(ind, data) {

        // decrease actualYear parameter if year is existent
        if (ind > 0) {
            ind = ind - 1;
        }

        choices.empty();
        var myNode = document.getElementById("plottingarea");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }

        printChoices(ind);
        plotCheckedLines(ind);

        // reset usable colors on next sheet @see getRandomColor function
        colorsChosen.length = 0;

        index = ind;
        return ind;
    }

    /*
     * Show Data one year in the future of actual displayed at the moment.
     * arguments: index, dataset
     */
    function showNextDataset(ind, data) {
      
        if (data[ind+1] != null) {
            ind = ind + 1;
        }

        choices.empty();
        var myNode = document.getElementById("plottingarea");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }

        printChoices(ind);
        plotCheckedLines(ind);

        // reset usable colors on next sheet @see getRandomColor function
        colorsChosen.length = 0;

        index = ind;
        return ind;
    }

    /*
    * Puts textual description underneath x axis
    */
    function paintXlabel(xaxisName) {
        // add a label to x-axis
        var widthX;
        MSApp.execUnsafeLocalFunction(function () {
            var elem = $(".xAxis");
            var height = elem.height();
            widthX = elem.width();
            var untrusted = "<div class='horizontaltext' style='position: absolute; top: " + height + "px; left: " + (widthX / 2) + "px;'>" + xaxisName + "</div>";

            elem.append(untrusted);
        });

        // reposition the horizontal label
        var elX = $(".horizontaltext");
        var h = elX.width();
        $(".horizontaltext").css("left", ((widthX / 2) - h / 2));
    }

    /*
     * Puts a textual description next to the y axis
     */
    function paintYlabel(yaxisName) {
        // add a label to y-axis
        var heightYAxis;
        MSApp.execUnsafeLocalFunction(function () {
            var elem = $(".yAxis");
            heightYAxis = elem.height();
            var widthYAxis = elem.width();
            var untrusted = "<div class='verticaltext' style='text-align: center; position: absolute; top: " + (heightYAxis / 2) + "px; left: -30px;'>" + yaxisName + "</div>";
            elem.append(untrusted);
        });

        // reposition the vertical label
        var elY = $(".verticaltext");
        var w = elY.height();
        $(".verticaltext").css("top", ((heightYAxis / 2) - w / 2));
    }

    /*
    * Actually plots the graphs at given data index number
    * arguments: index (which dataset to plot)
    */
    function plotCheckedLines(index) {
        var data = [];

        choices.find("input:checked").each(function () {
            var key = $(this).attr("id");

            if (key && datasets[index][key]) {
                data.push(datasets[index][key]);
            }
        });

        if (data.length > 0) {
            $("<div id='tooltip'></div>").css({
                position: "absolute",
                display: "none",
                border: "1px solid #fff",
                padding: "4px",
                "background-color": "grey",
                opacity: 0.80
            }).appendTo("body");

            $.plot("#plottingarea", data, options);

            $("#plottingarea").bind("plothover", function (event, pos, item) {

                // show actual position of crosshair
                if ($("#enablePosition:checked").length > 0 ) {
                    // $("#mouseoverdata").text(pos.x.toFixed(0) + ", " + pos.y.toFixed(0));
                     $("#mouseoverdata").text(datasets[index]['metadata']['xaxis'] + ": " + pos.x.toFixed(0) + ", " + datasets[index]['metadata']['yaxis'] + ": " + pos.y.toFixed(0));
                } else {
                    $("#mouseoverdata").text("");
                }

                // make position label disappear on mouseout of plotting area when there are no coordinates to show
                $("#plottingarea").mouseout(function () {
                    $("#mouseoverdata").text("");
                });

                // tooltip appears on click of a data point
                if (item) {
                        var x = item.datapoint[0],
                            y = item.datapoint[1];

                        $("#tooltip").html(item.series.label + ": <br> " + datasets[index]['metadata']['xaxis'] + ": " + x.toFixed(0) + "<br>" +datasets[index]['metadata']['yaxis'] + ": " + y.toFixed(0))
                            .css({ top: item.pageY + 5, left: item.pageX + 5 })
                            .fadeIn(400);
                    } else {
                        $("#tooltip").hide();
               }
                
            });

            // paint labels on x and y axis
            paintXlabel(datasets[index]['metadata']['xaxis']);
            paintYlabel(datasets[index]['metadata']['yaxis']);
          
        }
    }

    /*
     * Funciton responsible for printing the left side navigational menu.
     * Prints a toggling-functionality for the data being displayed as graphs on the canvas
     * arguments: index (which dataset is shown)
     */
    function printChoices(index) {
        // give every graph a unique color from config
        $.each(datasets[index], function (key, val) {
            val.color = getRandomColor(colors);
        });

        choices = $("#choices");
        $.each(datasets[index], function (key, val) {
            if (key === "metadata") return;
            // why I hate Windows development... (unallowed operation throwing errors otherwise)
            MSApp.execUnsafeLocalFunction(function () {
                var untrusted = "<input type='checkbox' class='choice' checked='checked' id='" + key + "' style='display: inline;'>" +
                                "<label style='margin-left: 5px; color:" + val.color + " !important; text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22); font-size: 16px;'>" + val.label + "</label><br>";
                    // @TODO create new dom element and append afterwards maybe doesnt need .execUnsafeLocal...
                choices.append(untrusted);
            });
        });

        printNavigationArrows(index);

        /* redefine onclick behaviour on newly printed input elements on each subpage -- important*/
        $(document).on("click", "input", function () {
            plotCheckedLines(index);
        });

    }

    /*
     *  define if navigation arrows make sense on a certain page (toggle them if needed)
     *  argument: ind is the indicator for the dataset to show (index)
     */
    function printNavigationArrows(ind) {
        if (datasets[ind - 1] == null) {
            // start
            $("#leftNav").hide();
            $("#rightNav").show();
        } else if (datasets[ind + 1] == null) {
            // middle pages
            $("#leftNav").show();
            $("#rightNav").hide();
        } else {
            // end
            $("#leftNav").show();
            $("#rightNav").show();
        }

        // reprint chart title accordingly
        updateChartTitle(ind, datasets);
        updatePageTitle(ind, datasets);
    }

    /*
     *  Reprints the title of the actual chart displayed.
     *  argument: ind is the indicator for the dataset to show (index), dataset d
     */
    function updateChartTitle(ind, d) {
        if (d[ind] != null) {
            document.getElementById("chartTitle").innerHTML = d[ind]["metadata"]["title"];
        } else {
            throw "updateChartError";
        }
    }

    function updatePageTitle(ind, d) {

        if (d[ind]["metadata"]["pagetitle"] == "") {
            // do not alter title if empty
            return;
        }

        if (d[ind]["metadata"]["pagetitle"] == null) {
            // do not alter title if empty
            throw "updateTitleError";
        }

        if (d[ind] != null) {
            document.getElementById("pageTitle").innerHTML = d[ind]["metadata"]["pagetitle"];
        } else {
            throw "updateTitleError";
        }
    }

    /*
     * Grid navigation - called when listed page is being loaded
     */
    WinJS.UI.Pages.define("/pages/lineChart/lineChart.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            // eventListeners navigation buttons for Dataset changes
            document.getElementById("rightNav").addEventListener("click", function () { showNextDataset(index, datasets); });
            document.getElementById("leftNav").addEventListener("click", function () { showPreviousDataset(index, datasets); });

            // print initially
            printChoices(index);
            plotCheckedLines(index);

        }
    });


    /*
     * Helper functions used to pass important global variable data for testing 
     */

    function getOptions() {
        return options;
    }

    function getDatasets() {
        return datasets;
    }

    function getCanvas() {
        return canvasElementName;
    }

    function getDocument() {
        return document;
    }

    function getColorList() {
        return colors;
    }

    function getColorsChosen() {
        return colorsChosen;
    }


    /*
     * Desperately needed debugging function...
     */
    function log(msg) {
        document.getElementById("status").innerHTML += msg;
    }