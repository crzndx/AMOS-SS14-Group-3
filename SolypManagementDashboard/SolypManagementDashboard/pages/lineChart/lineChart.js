
    /*
     * Graph plotting with Flot
     * https://github.com/flot/
     */

    /*
     * Configurations for plotting
     */

    var canvasElementName = "#plottingarea"; //  where will be drawn
    var choices = $("#choices");

    var colors = ["#ff5959", "#f3ac00", "#99ff00", "#83d0f5", "#db65ef", "#ffbfbf", "#f1fa00", "#7fffa6", "#00b9ee", "#ff00b3", "#ffa680", "#ffff80", "#80ffff", "#bfc6ff", "#ff0066", "#ffd9bf", "#f2ffbf", "#00ccff", "#cc80ff", "#ff80b3"];
    var colorsChosen = [];

    var sourcePath = "";

    /*
     * Data for graphs to be plotted
     */
    var index = 0; // current index to show dataset #

    /*
    * Default dataset to show
    */
    var datasets = {
        0: {
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
            "kazakhstan": {
                label: "Kazhakztan",
                data: [[1988, 1982], [1989, 2217], [1990, 41296], [1991, 51248], [1992, 52460], [1993, 78633], [1994, 99579], [1995, 12418], [1996, 78554], [1997, 88876], [1998, 57551], [1999, 44429], [2000, 17778], [2001, 8760], [2002, 5000], [2003, 55452], [2004, 40234], [2005, 10276], [2006, 59283]]
            },
            "india": {
                label: "India",
                data: [[1988, 62982], [1989, 22027], [1990, 68696], [1991, 62348], [1992, 58560], [1993, 98393], [1994, 78879], [1995, 5418], [1996, 58854], [1997, 45676], [1998, 34591], [1999, 47529], [2000, 48878], [2001, 99960], [2002, 55749], [2003, 51112], [2004, 545234], [2005, 60076], [2006, 8783]]
            },
            "russia": {
                label: "Russia",
                data: [[1988, 62982], [1989, 12027], [1990, 40688], [1991, 62348], [1992, 58560], [1993, 87393], [1994, 77779], [1995, 22818], [1996, 58794], [1997, 44576], [1998, 12691], [1999, 48759], [2000, 66678], [2001, 48760], [2002, 45649], [2003, 55482], [2004, 33634], [2005, 60076], [2006, 78713]]
            },
            "mongolia": {
                label: "Mongolia",
                data: [[1988, 62982], [1989, 61527], [1990, 68888], [1991, 69999], [1992, 58790], [1993, 15493], [1994, 98779], [1995, 50818], [1996, 3694], [1997, 3676], [1998, 48881], [1999, 54829], [2000, 88778], [2001, 48760], [2002, 87649], [2003, 11452], [2004, 64834], [2005, 54076], [2006, 87213]]
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
     * Sales page dataset
     */ 

    var datasetsSales = {
        0: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data:  [[2004, 7890], [2005, 8123], [2006, 8456], [2007, 8490], [2008, 8590], [2009, 8345], [2010, 8933], [2011, 8945], [2012, 9078], [2013, 9034]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 3590], [2005, 4690], [2006, 3218], [2007, 3990], [2008, 1589], [2009, 3580], [2010, 4590], [2011, 4219], [2012, 4032], [2013, 4834]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 1392], [2005, 1990], [2006, 1840], [2007, 1850], [2008, 1730], [2009, 2124], [2010, 2432], [2011, 2510], [2012, 2310], [2013, 1380]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 2940], [2005, 2910], [2006, 2495], [2007, 2122], [2008, 2395], [2009, 2509], [2010, 3690], [2011, 2390], [2012, 2139], [2013, 2311]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 849], [2005, 829], [2006, 823], [2007, 869], [2008, 800], [2009, 734], [2010, 798], [2011, 8511], [2012, 8243], [2013, 8340]]
            },
            "metadata": {
                pagetitle: "Total Sales",
                title: "Global",
                xaxis: "Year",
                yaxis: "Euros (Million)"
            }
        },
        1: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 1656.9], [2005, 3655.35], [2006, 3381.2], [2007, 2377.2], [2008, 2920.6], [2009, 2503.5], [2010, 2590.57], [2011, 3130.75], [2012, 3721.98], [2013, 1806.8]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 1005.2], [2005, 1360.1], [2006, 772.32], [2007, 2114.7], [2008, 762.72], [2009, 1718.4], [2010, 2019.6], [2011, 2109.5], [2012, 1774.08], [2013, 1450.2]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 542.88], [2005, 557.2], [2006, 883.2], [2007, 758.5], [2008, 709.3], [2009, 531], [2010, 1143.04], [2011, 903.6], [2012, 808.5], [2013, 524.4]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 882], [2005, 1658.7], [2006, 823.35], [2007, 551.72], [2008, 670.6], [2009, 978.51], [2010, 2029.5], [2011, 908.2], [2012, 1283.4], [2013, 947.51]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 280.17], [2005, 306.73], [2006, 148.14], [2007, 243.32], [2008, 224], [2009, 205.52], [2010, 215.46], [2011, 3149.07], [2012, 2967.48], [2013, 3336]]
            },
            "metadata": {
                pagetitle: "Total Sales",
                title: "Western and Northern Europe",
                xaxis: "Year",
                yaxis: "Euros (Million)"
            }
        },
        2: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 1183.5], [2005, 487.38], [2006, 1352.48], [2007, 933.9], [2008, 1546.2], [2009, 1168.3], [2010, 1518.61], [2011, 1699.55], [2012, 1452.48], [2013, 1716.46]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 610.3], [2005, 938], [2006, 579.24], [2007, 239.4], [2008, 95.34], [2009, 465.4], [2010, 367.2], [2011, 379.71], [2012, 403.2], [2013, 435.06]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 125.28], [2005, 398], [2006, 110.4], [2007, 148], [2008, 190.3], [2009, 361.08], [2010, 437.76], [2011, 301.2], [2012, 277.2], [2013, 82.8]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 382.2], [2005, 145.5], [2006, 474.05], [2007, 339.52], [2008, 359.25], [2009, 326.17], [2010, 332.1], [2011, 239], [2012, 106.95], [2013, 392.87]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 101.88], [2005, 124.35], [2006, 164.6], [2007, 112.97], [2008, 152], [2009, 124.78], [2010, 143.64], [2011, 1446.87], [2012, 1401.31], [2013, 1584.6]]
            },
            "metadata": {
                pagetitle: "Total Sales",
                title: "Eastern Europe",
                xaxis: "Year",
                yaxis: "Euros (Million)"
            }
        },
        3: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004,2445.9],	[2005,2274.44],	[2006,2620.43],	[2007,2801.7],	[2008,2061.6],	[2009,2586.95],	[2010,3037.22],	[2011,2594.05],	[2012,1997.16],	[2013,3161.9]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 1148.8], [2005, 1407], [2006, 1126.3], [2007, 997.5], [2008, 413.14], [2009, 930.8], [2010, 1606.5], [2011, 1054.75], [2012, 1088.64], [2013, 1546.88]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 361.92], [2005, 457.7], [2006, 496.8], [2007, 592], [2008, 380.6], [2009, 700.92], [2010, 510.72], [2011, 727.9], [2012, 716.1], [2013, 455.4]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 882], [2005, 756.6], [2006, 798.4], [2007, 700.26], [2008, 814.3], [2009, 677.43], [2010, 811.8], [2011, 573.6], [2012, 427.8], [2013, 600.86]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004,220.74],	[2005,223.83],	[2006,271.59],	[2007,260.7],	[2008,272],	[2009,234.88],	[2010,183.54],	[2011,2468.19],	[2012,2637.76],	[2013,1918.2]]
            },
            "metadata": {
                pagetitle: "Total Sales",
                title: "Central and North America",
                xaxis: "Year",
                yaxis: "Euros (Million)"
            }
        }
    };





    /*
     * Grid navigation - called when listed page is being loaded
     */
    WinJS.UI.Pages.define("/pages/lineChart/lineChart.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            // get path of the source externally from homescreendata.js file
            sourcePath = options.sourcePath;
            // and refresh dataset with this now queried data
            //loadDataFromLocalFile(sourcePath);

            loadDataInFile(sourcePath);

            // eventListeners navigation buttons for Dataset changes
            document.getElementById("rightNav").addEventListener("click", function () { showNextDataset(index, datasets); });
            document.getElementById("leftNav").addEventListener("click", function () { showPreviousDataset(index, datasets); });
            document.getElementById("enableCrosshairX").addEventListener("click", function () { crosshairOptions(); });
            document.getElementById("enableCrosshairY").addEventListener("click", function () { crosshairOptions(); });

            // print initially
            printChoices(index, datasets);
            plotCheckedLines(index, datasets);

        }
    });

    

    /*
     * Temporary hack due to malfunction of external loading
     * gets string what to load from config file
     */
    function loadDataInFile(sourceVariable) {
        switch (sourceVariable) {
            // see homescreenData.js for linking of cases
            case "salesData":
                  datasets = datasetsSales; break;
            case "financeData":
                  datasets = datasetsFinance; break;
            case "projectsfinalData":
                  datasets = datasetsProjectsFinalData; break;
            default:
                  datasets = datasets;
        }
    }

    /*
    * load data externally (NOT WORKING, occasional errors!!!)
    * arguments: a by ms-appx defined URI string. e.g. "ms-appx:///data/sales/linechart_countries.txt"
    *
    * TODO: testing! NOT IN USE YET!
    */
    function loadDataFromLocalFile(sourceString) {

        var uri = new Windows.Foundation.Uri(sourceString);

        Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).then(function (file) {
            return Windows.Storage.FileIO.readTextAsync(file);
        }).done(function (text) {
            // overwrite / write into local variable
            // THROWS ERRORS on indexing !! cant figure out why & short on time, therefore data gathering from local variables (yes its ugly)
            // dataset = JSON.parse(text);
        });

    }


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

        printChoices(ind, data);
        plotCheckedLines(ind, data);

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

        printChoices(ind, data);
        plotCheckedLines(ind, data);

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
    * arguments: index (which dataset to plot), data d
    */
    function plotCheckedLines(index, d) {
        var data = [];

        choices.find("input:checked").each(function () {
            var key = $(this).attr("id");

            if (key && d[index][key]) {
                data.push(d[index][key]);
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
                     $("#mouseoverdata").text(d[index]['metadata']['xaxis'] + ": " + pos.x.toFixed(0) + ", " + d[index]['metadata']['yaxis'] + ": " + pos.y.toFixed(0));
                } else {
                    $("#mouseoverdata").text("");
                }

                // make position label disappear on mouseout of plotting area when there are no coordinates to show
                $("#plottingarea").mouseout(function () {
                    $("#mouseoverdata").text("");
                });

                // tooltip appears on click of a data point
                if ($("#enableHoverable:checked").length > 0) {
                    if (item) {
                        var x = item.datapoint[0],
                            y = item.datapoint[1];

                        $("#tooltip").html(item.series.label + ": <br> " + d[index]['metadata']['xaxis'] + ": " + x.toFixed(0) + "<br>" + d[index]['metadata']['yaxis'] + ": " + y.toFixed(0))
                            .css({ top: item.pageY + 5, left: item.pageX + 5 })
                            .fadeIn(400);
                    } else {
                        $("#tooltip").hide();
                    }
                }
                
            });

            // paint labels on x and y axis
            paintXlabel(d[index]['metadata']['xaxis']);
            paintYlabel(d[index]['metadata']['yaxis']);
          
        }
    }

    /*
     * Funciton responsible for printing the left side navigational menu.
     * Prints a toggling-functionality for the data being displayed as graphs on the canvas
     * arguments: index (which dataset is shown), dataset d
     */
    function printChoices(index, d) {

        // give every graph a unique color from config
        var j = 0;
        $.each(d[index], function (key, val) {
            //val.color = getRandomColor(colors);
            val.color = colors[j++];
        });

        choices = $("#choices");
        $.each(d[index], function (key, val) {
            if (key === "metadata") return;
            // why I hate Windows development... (unallowed operation throwing errors otherwise)
            MSApp.execUnsafeLocalFunction(function () {
                var untrusted = "<input type='checkbox' class='choice' checked='checked' id='" + key + "' style='display: inline;'>" +
                                "<label style='margin-left: 5px; color:" + val.color + " !important; text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.22); font-size: 16px;'>" + val.label + "</label><br>";
                    // @TODO create new dom element and append afterwards maybe doesnt need .execUnsafeLocal...
                choices.append(untrusted);
            });
        });

        printNavigationArrows(index, d);

        /* redefine onclick behaviour on newly printed input elements on each subpage -- important*/
        $(document).on("click", "input", function () {
            plotCheckedLines(index, d);
        });

    }

    /*
     *  define if navigation arrows make sense on a certain page (toggle them if needed)
     *  argument: ind is the indicator for the dataset to show (index), dataset d
     */
    function printNavigationArrows(ind, d) {

        if (ind < 0 || ind > d.length) {
            throw "indexError";
        }

        var r;
        if (d[ind - 1] == null) {
            // start
            $("#leftNav").hide();
            $("#rightNav").show();
            r = "right";
        } else if (d[ind + 1] == null) {
            // middle pages
            $("#leftNav").show();
            $("#rightNav").hide();
            r = "left";
        } else {
            // end
            $("#leftNav").show();
            $("#rightNav").show();
            r = "both";
        }

        // reprint chart title accordingly
        updateChartTitle(ind, d);
        updatePageTitle(ind, d);
        return r;
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
     *  Sets options for showing crosshairs on plot hover
     *  default shown is xy crosshair
     */
    function crosshairOptions() {
        // status of crosshair option inputs
        var x = document.getElementById("enableCrosshairX").checked;
        var y = document.getElementById("enableCrosshairY").checked;

        // translating for flot
        if(x == true && y == false) {
            options["crosshair"]["mode"] = "x";
            return "x";
        }
        if (x == false && y == true) {
            options["crosshair"]["mode"] = "y";
            return "y";
        }
        if (x == true && y == true) {
            options["crosshair"]["mode"] = "xy";
            return "xy";
        }
        if (x == false && y == false) {
            options["crosshair"]["mode"] = "none";
            return "none";
        }
    }

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

    function log(msg) {
        document.getElementById("status").innerHTML += msg;
    }