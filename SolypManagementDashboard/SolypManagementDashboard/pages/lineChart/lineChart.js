(function () {
    "use strict";

    /*
     * Graph plotting with Flot
     * https://github.com/flot/
     */

    /*
     * Configurations for plotting
     */

    var canvasElementName = "#plottingarea"; //  where will be drawn
    var choices = $("#choices");
    var colors = ["#ff0000", "#7A45D6", "#FFE840", "#78E700", "#FFAA00", "#6C8CD5", "#E93A90", "#B52D43","#DDAACC"];

    /*
     * Data for graphs to be plotted
     */
    var datasets = {
        "china": {
            label: "China",
            data: [[1988, 683994], [1989, 573060], [1990, 153631], [1991, 333349], [1992, 311705], [1993, 202111], [1994, 247867], [1995, 300382], [1996, 300046], [1997, 300000], [1998, 322611], [1999, 129421], [2000, 142172], [2001, 244932], [2002, 227303], [2003, 540813], [2004, 183451], [2005, 304638], [2006, 528692]]
        },
        "usa": {
            label: "USA",
            data: [[1988, 483994], [1989, 479060], [1990, 457648], [1991, 401949], [1992, 424705], [1993, 402375], [1994, 377867], [1995, 357382], [1996, 337946], [1997, 336185], [1998, 328611], [1999, 329421], [2000, 342172], [2001, 344932], [2002, 387303], [2003, 440813], [2004, 480451], [2005, 504638], [2006, 528692]]
        },
        "russia": {
            label: "Russia",
            data: [[1988, 218000], [1989, 203000], [1990, 171000], [1992, 42500], [1993, 37600], [1994, 36600], [1995, 21700], [1996, 19200], [1997, 21300], [1998, 13600], [1999, 14000], [2000, 19100], [2001, 21300], [2002, 23600], [2003, 25100], [2004, 26100], [2005, 31100], [2006, 34700]]
        },
        "uk": {
            label: "UK",
            data: [[1988, 62982], [1989, 62027], [1990, 60696], [1991, 62348], [1992, 58560], [1993, 56393], [1994, 54579], [1995, 50818], [1996, 50554], [1997, 48276], [1998, 47691], [1999, 47529], [2000, 47778], [2001, 48760], [2002, 50949], [2003, 57452], [2004, 60234], [2005, 60076], [2006, 59213]]
        },
        "germany": {
            label: "Germany",
            data: [[1988, 55627], [1989, 55475], [1990, 58464], [1991, 55134], [1992, 52436], [1993, 47139], [1994, 43962], [1995, 43238], [1996, 42395], [1997, 40854], [1998, 40993], [1999, 41822], [2000, 41147], [2001, 40474], [2002, 40604], [2003, 40044], [2004, 38816], [2005, 38060], [2006, 36984]]
        },
        "denmark": {
            label: "Denmark",
            data: [[1988, 3813], [1989, 3719], [1990, 3722], [1991, 3789], [1992, 3720], [1993, 3730], [1994, 3636], [1995, 3598], [1996, 3610], [1997, 3655], [1998, 3695], [1999, 3673], [2000, 3553], [2001, 3774], [2002, 3728], [2003, 3618], [2004, 3638], [2005, 3467], [2006, 3770]]
        },
        "sweden": {
            label: "Sweden",
            data: [[1988, 6402], [1989, 6474], [1990, 6605], [1991, 6209], [1992, 6035], [1993, 6020], [1994, 6000], [1995, 6018], [1996, 3958], [1997, 5780], [1998, 5954], [1999, 6178], [2000, 6411], [2001, 5993], [2002, 5833], [2003, 5791], [2004, 5450], [2005, 5521], [2006, 5271]]
        },
        "norway": {
            label: "Norway",
            data: [[1988, 4382], [1989, 4498], [1990, 4535], [1991, 4398], [1992, 4766], [1993, 4441], [1994, 4670], [1995, 4217], [1996, 4275], [1997, 4203], [1998, 4482], [1999, 4506], [2000, 4358], [2001, 4385], [2002, 5269], [2003, 5066], [2004, 5194], [2005, 4887], [2006, 4891]]
        },
        "canada": {
        label: "Canada",
        data: [[1988, 11982], [1989, 22027], [1990, 660696], [1991, 44348], [1992, 128560], [1993, 256393], [1994, 354579], [1995, 550818], [1996, 50554], [1997, 148276], [1998, 472691], [1999, 347529], [2000, 473778], [2001, 487160], [2002, 509249], [2003, 574521], [2004, 602334], [2005, 601076], [2006, 593213]]
        }
    };
    var datasets2 = {
        "brasil": {
            label: "Brasil",
            data: [[1988, 183194], [1989, 273030], [1990, 133631], [1991, 333349], [1992, 311105], [1993, 2111], [1994, 123717], [1995, 100382], [1996, 320046], [1997, 100000], [1998, 22611], [1999, 129421], [2000, 142172], [2001, 344932], [2002, 223303], [2003, 540813], [2004, 183451], [2005, 3034638], [2006, 528692]]
        },
        "egal": {
            label: "Egal",
            data: [[1988, 183994], [1989, 319030], [1990, 417648], [1991, 41949], [1992, 421705], [1993, 302375], [1994, 177867], [1995, 157382], [1996, 337946], [1997, 26185], [1998, 338611], [1999, 129421], [2000, 342172], [2001, 144932], [2002, 287303], [2003, 840813], [2004, 480351], [2005, 501638], [2006, 528692]]
        }
    };

    /*
     * Draws the canvas, adds labels, writes labels on axes
     */
    function plotCheckedLines() {
        var data = [];
        choices.find("input:checked").each(function () {
            var key = $(this).attr("id");

            if (key && datasets[key]) {
                data.push(datasets[key]);
            }
        });

        if (data.length > 0) {
            var options = {
                yaxis: {
                    min: 0
                    //color: "#ffffff" background
                },
                xaxis: {
                    tickDecimals: 0
                    //color: "#ffffff" background
                },
                legend: {
                    show: false
                },
                yaxisName: "in USD",
                xaxisName: "Years"
            };

            $.plot("#plottingarea", data, options);

            // add a label to y-axis
            var heightYAxis;
            MSApp.execUnsafeLocalFunction(function () {
                var elem = $(".yAxis");
                heightYAxis = elem.height();
                var widthYAxis = elem.width();
                var untrusted = "<div class='verticaltext' style='text-align: center; position: absolute; top: " + (heightYAxis / 2) + "px; left: -30px;'>" + options.yaxisName + "</div>";
                elem.append(untrusted);
            });

            // reposition the vertical label
            var elY = $(".verticaltext");
            var w = elY.height();
            $(".verticaltext").css("top", ((heightYAxis / 2) - w/2) );


            // add a label to x-axis
            var widthX;
            MSApp.execUnsafeLocalFunction(function () {
                var elem = $(".xAxis");
                var height = elem.height();
                widthX = elem.width();
                var untrusted = "<div class='horizontaltext' style='position: absolute; top: " + height + "px; left: " + (widthX / 2) + "px;'>" + options.xaxisName + "</div>";

                elem.append(untrusted);
            });

            // reposition the vertical label
            var elX = $(".horizontaltext");
            var h = elX.width();
            $(".horizontaltext").css("left", ((widthX / 2) - h / 2));


        }
    }


    /*
     * Grid navigation - called when listed page is being loaded
     */
    WinJS.UI.Pages.define("/pages/lineChart/lineChart.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            datasets = datasets2;
            
            /*
            WinJS.xhr({
                url: "/pages/lineChart/salesPerCountries.json",
                responseType: "json"
            }).done(
                function completed(response) {
                    var fixedResponse = response.responseText.replace(/\\'/g, "'");
                    var foo = JSON.stringify(fixedResponse)
                    var feed = JSON.parse(foo);
                    document.write(feed);
                }, 
                function error(request) {
                    // handle error conditions.
                }, 
                function progress(request) {
                   
                });
            */


            // give every graph a unique color from config
            var j = 0;
            
            $.each(datasets, function (key, val) {
                val.color = colors[(j%colors.length)];
                ++j;
            });


            choices = $("#choices");
            $.each(datasets, function (key, val) {

                MSApp.execUnsafeLocalFunction(function () {
                    var untrusted = "<br/><input type='checkbox' checked='checked' id='" + key + "'></input>" +
                                    "<label style='color:" + val.color +" !important;'>" + val.label + "</label>";

                    choices.append(untrusted);
                });
            });

            choices.find("input").click(plotCheckedLines);

            plotCheckedLines();


        }
    });

})();
