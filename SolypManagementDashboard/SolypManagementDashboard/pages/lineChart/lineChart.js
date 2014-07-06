
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
            "daimlerengineeringconsulting": {
                label: "Engineering & Consulting",
                data: [[2004, 799], [2005, 629], [2006, 723], [2007, 839], [2008, 830], [2009, 744], [2010, 728], [2011, 811], [2012, 823], [2013, 840]]
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
        },
        4: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 1814.7],[2005, 1218.45],[2006, 845.3],[2007, 1613.1],[2008, 1632.1],[2009, 1752.45],[2010, 1071.96],[2011, 894.5],[2012, 1089.36],[2013, 1897.14]]
            },
            "daimlermotorbikes": {
                label: "Daimler Motorbikes",
                data: [[2004, 502.6],[2005, 797.3],[2006, 579.24],[2007, 399],[2008, 158.9],[2009, 322.2],[2010, 413.1],[2011, 464.09],[2012, 564.48],[2013, 1063.48]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 222.72],[2005, 417.9],[2006, 294.4],[2007, 185],[2008, 311.4],[2009, 446.04],[2010, 243.2],[2011, 376.5],[2012, 277.2],[2013, 276]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 529.2],[2005, 261.9],[2006, 274.45],[2007, 403.18],[2008, 335.3],[2009, 451.62],[2010, 369],[2011, 501.9],[2012, 256.68],[2013, 277.32]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 169.8],[2005, 132.64],[2006, 172.83],[2007, 191.18],[2008, 120],[2009, 124.78],[2010, 183.54],[2011, 851.1],[2012, 824.3],[2013, 1000.8]]
            },
            "metadata": {
                pagetitle: "Total Sales",
                title: "Asia Pacific",
                xaxis: "Year",
                yaxis: "Euros (Million)"
            }
        },
        5: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 789],[2005, 487.38],[2006, 253.59],[2007, 764.1],[2008, 429.5],[2009, 333.8],[2010, 714.64],[2011, 626.15],[2012, 817.02],[2013, 451.7]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 323.1],[2005, 187.6],[2006, 160.9],[2007, 239.4],[2008, 158.9],[2009, 143.2],[2010, 183.6],[2011, 210.95],[2012, 201.6],[2013, 338.38]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 139.2],[2005, 159.2],[2006, 55.2],[2007, 166.5],[2008, 138.4],[2009, 84.96],[2010, 97.28],[2011, 200.8],[2012, 231],[2013, 41.4]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 264.6],[2005, 87.3],[2006, 124.75],[2007, 127.32],[2008, 215.55],[2009, 75.27],[2010, 147.6],[2011, 167.3],[2012, 64.17],[2013, 92.44]]
            },
            "metadata": {
                pagetitle: "Total Sales",
                title: "Africa",
                xaxis: "Year",
                yaxis: "Euros (Million)"
            }
        }
    };



    var datasetsFinance = {
        0: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 10], [2005, 11.5], [2006, 12.3], [2007, 13.1], [2008, 12.5], [2009, 10.9], [2010, 10.1], [2011, 11.7], [2012, 12.1], [2013, 13.1]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 8.1], [2005, 8.4], [2006, 7.9], [2007, 7.7], [2008, 7.9], [2009, 6.3], [2010, 6.4], [2011, 7.8], [2012, 7.4], [2013, 1, 8.6]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 14.1], [2005, 14.7], [2006, 16.1], [2007, 11.9], [2008, 10.1], [2009, 13.1], [2010, 11.3], [2011, 12.4], [2012, 13.6], [2013, 14.2]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 1.2], [2005, 1.3], [2006, 0.9], [2007, 1.1], [2008, 1.4], [2009, 1.2], [2010, 1.1], [2011, 1.4], [2012, 1.3], [2013, 1.2]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 8.1], [2005, 9.8], [2006, 9.9], [2007, 10.2], [2008, 8.9], [2009, 12.3], [2010, 14.1], [2011, 11.2], [2012, 11.8], [2013, 2.11]]
            },
            "metadata": {
                pagetitle: "Net Profit Margins",
                title: "Worldwide",
                xaxis: "Years",
                yaxis: "%"
            }
        },
        1: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 2.3], [2005, 2.645], [2006, 6.027], [2007, 5.633], [2008, 6.375], [2009, 3.27], [2010, 4.343], [2011, 4.797], [2012, 4.477], [2013, 4.716]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 4.131], [2005, 3.276], [2006, 2.528], [2007, 1.463], [2008, 3.081], [2009, 1.89], [2010, 2.88], [2011, 2.028], [2012, 3.626], [2013, 3.01]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 6.063], [2005, 3.528], [2006, 6.762], [2007, 5.117], [2008, 5.757], [2009, 7.205], [2010, 2.486], [2011, 3.596], [2012, 4.216], [2013, 3.408]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 0.504], [2005, 0.494], [2006, 0.216], [2007, 0.429], [2008, 0.392], [2009, 0.444], [2010, 0.297], [2011, 0.322], [2012, 0.65], [2013, 0.384]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 2.268], [2005, 3.92], [2006, 3.168], [2007, 3.366], [2008, 2.759], [2009, 3.813], [2010, 6.768], [2011, 4.928], [2012, 2.832], [2013, 5.83]]
            },
            "metadata": {
                pagetitle: "Net Profit Margins",
                title: "Western and Northern Europe",
                xaxis: "Years",
                yaxis: "%"
            }
        },
        2: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 1.6], [2005, 2.3], [2006, 0.615], [2007, 1.441], [2008, 1.25], [2009, 2.071], [2010, 0.606], [2011, 2.223], [2012, 2.057], [2013, 1.834]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 0.729], [2005, 1.344], [2006, 1.106], [2007, 1.386], [2008, 0.79], [2009, 1.071], [2010, 0.768], [2011, 1.326], [2012, 0.444], [2013, 1.462]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 0.846], [2005, 2.646], [2006, 1.61], [2007, 1.071], [2008, 0.808], [2009, 0.917], [2010, 2.26], [2011, 1.612], [2012, 0.952], [2013, 2.414]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 0.12], [2005, 0.234], [2006, 0.153], [2007, 0.055], [2008, 0.266], [2009, 0.228], [2010, 0.187], [2011, 0.252], [2012, 0.091], [2013, 0.216]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 1.539], [2005, 0.588], [2006, 1.089], [2007, 1.53], [2008, 1.068], [2009, 2.091], [2010, 1.128], [2011, 0.56], [2012, 1.652], [2013, 1.43]]
            },
            "metadata": {
                pagetitle: "Net Profit Margins",
                title: "Eastern Europe",
                xaxis: "Years",
                yaxis: "%"
            }
        },
        3: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 3.3], [2005, 3.795], [2006, 3.321], [2007, 3.406], [2008, 2.5], [2009, 2.289], [2010, 2.121], [2011, 2.808], [2012, 2.42], [2013, 4.323]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 1.782], [2005, 2.688], [2006, 1.975], [2007, 2.464], [2008, 2.133], [2009, 1.323], [2010, 1.344], [2011, 2.73], [2012, 2.22], [2013, 2.15]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 4.371], [2005, 3.969], [2006, 3.381], [2007, 2.618], [2008, 2.121], [2009, 3.275], [2010, 3.842], [2011, 4.092], [2012, 4.216], [2013, 4.686]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 0.324], [2005, 0.364], [2006, 0.279], [2007, 0.385], [2008, 0.392], [2009, 0.3], [2010, 0.33], [2011, 0.462], [2012, 0.312], [2013, 0.288]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 2.025], [2005, 2.94], [2006, 3.069], [2007, 3.162], [2008, 2.67], [2009, 3.198], [2010, 3.102], [2011, 3.472], [2012, 4.13], [2013, 2.2]]
            },
            "metadata": {
                pagetitle: "Net Profit Margins",
                title: "Central and North America",
                xaxis: "Years",
                yaxis: "%"
            }
        },
        3: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 2], [2005, 2.415], [2006, 1.23], [2007, 1.703], [2008, 1.625], [2009, 2.18], [2010, 2.02], [2011, 1.053], [2012, 2.541], [2013, 1.834]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 0.648], [2005, 0.84], [2006, 1.58], [2007, 1.771], [2008, 1.58], [2009, 1.449], [2010, 1.088], [2011, 1.482], [2012, 0.814], [2013, 1.29]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 2.115], [2005, 3.381], [2006, 3.381], [2007, 2.499], [2008, 0.808], [2009, 1.048], [2010, 1.582], [2011, 2.108], [2012, 2.992], [2013, 2.272]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 0.204], [2005, 0.156], [2006, 0.189], [2007, 0.165], [2008, 0.28], [2009, 0.168], [2010, 0.209], [2011, 0.224], [2012, 0.117], [2013, 0.252]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 1.458], [2005, 1.96], [2006, 1.782], [2007, 1.53], [2008, 1.958], [2009, 2.46], [2010, 1.974], [2011, 1.568], [2012, 2.36], [2013, 0.99]]
            },
            "metadata": {
                pagetitle: "Net Profit Margins",
                title: "Asia Pacific Region",
                xaxis: "Years",
                yaxis: "%"
            }
        },
        4: {
            "mercedes-benz-cars": {
                label: "Mercedes-Benz Cars",
                data: [[2004, 0.8], [2005, 0.345], [2006, 1.107], [2007, 0.917], [2008, 0.75], [2009, 1.09], [2010, 1.01], [2011, 0.819], [2012, 0.605], [2013, 0.393]]
            },
            "daimlertrucks": {
                label: "Daimler Trucks",
                data: [[2004, 0.81], [2005, 0.252], [2006, 0.711], [2007, 0.616], [2008, 0.316], [2009, 0.567], [2010, 0.32], [2011, 0.234], [2012, 0.296], [2013, 0.688]]
            },
            "mercedes-benz-vans": {
                label: "Mercedes-Benz Vans",
                data: [[2004, 0.705], [2005, 1.176], [2006, 0.966], [2007, 0.595], [2008, 0.606], [2009, 0.655], [2010, 1.13], [2011, 0.992], [2012, 1.224], [2013, 1.42]]
            },
            "daimlerbusses": {
                label: "Daimler Busses",
                data: [[2004, 0.048], [2005, 0.052], [2006, 0.063], [2007, 0.066], [2008, 0.07], [2009, 0.06], [2010, 0.077], [2011, 0.14], [2012, 0.13], [2013, 0.06]]
            },
            "daimlerfinancialservices": {
                label: "Daimler Financial Services",
                data: [[2004, 0.81], [2005, 0.392], [2006, 0.792], [2007, 0.612], [2008, 0.445], [2009, 0.738], [2010, 1.128], [2011, 0.672], [2012, 0.826], [2013, 0.55]]
            },
            "metadata": {
                pagetitle: "Net Profit Margins",
                title: "Middle East and Africa",
                xaxis: "Years",
                yaxis: "%"
            }
        },
    }


    var datasetsHR = {
        0: {
            "male": {
                label: "Males",
                data: [[2004, 54], [2005, 66], [2006, 77], [2007, 70], [2008, 72], [2009, 74], [2010, 77], [2011, 81], [2012, 90], [2013, 88]]
            },
            "female": {
                label: "Females",
                data: [[2004, 1], [2005, 1], [2006, 2], [2007, 2], [2008, 11], [2009, 13], [2010, 17], [2011, 21], [2012, 23], [2013, 1, 33]]
            },
            "metadata": {
                pagetitle: "Employee base",
                title: "by gender",
                xaxis: "Years",
                yaxis: "Sex"
            }
        },
        1: {
            "engineering": {
                label: "Engineering",
                data: [[2004, 8678], [2005, 8798], [2006, 8799], [2007, 8888], [2008, 8998], [2009, 9001], [2010, 8871], [2011, 8899], [2012, 8950], [2013, 9050]]
            },
            "hr": {
                label: "Human Resources",
                data: [[2004, 2031], [2005, 3010], [2006, 3811], [2007, 5823], [2008, 6215], [2009, 6489], [2010, 7033], [2011, 8131], [2012, 7010], [2013, 3666]]
            },
            "logistics": {
                label: "Logistics",
                data: [[2004, 3131], [2007, 5555], [2010, 6533], [2011, 6731], [2012, 7010], [2013, 8881]]
            },
            "interns": {
                label: "Interns",
                data: [[2004, 2210], [2013, 1531]]
            },
            "metadata": {
                pagetitle: "Employee wages",
                title: "Average wages per month (pre tax)",
                xaxis: "Years",
                yaxis: "Euros"
            }
        }
    }

    var datasetsGlobalProjects = {
        0: {
            "joinme": {
                label: "Joinme",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 270], [2009, 140], [2010, 100], [2011, 340], [2012, 103], [2013, 0]]
            },
            "marketv7": {
                label: "Market V7",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 12], [2008, 14], [2009, 18], [2010, 18], [2011, 11], [2012, 10], [2013, 4]]
            },
            "Crowsuite": {
                label: "Crowsuite",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 180], [2009, 200], [2010, 210], [2011, 401], [2012, 210], [2013, 230]]
            },
            "AntraDOB": {
                label: "Females",
                data: [[2004, 0], [2005, 0], [2006, 34], [2007, 44], [2008, 28], [2009, 55], [2010, 17], [2011, 0], [2012, 0], [2013, 0]]
            },
            "metadata": {
                pagetitle: "Global Projects",
                title: "Sales Projects",
                xaxis: "Years",
                yaxis: "Euros (thousand)"
            }
        },
        1: {
            "morman": {
                label: "Morman",
                data: [[2004, 0], [2005, 0], [2006, 93], [2007, 84], [2008, 43], [2009, 68], [2010, 69], [2011, 63], [2012, 43], [2013, 54]]
            },
            "impactdos": {
                label: "Impactdos",
                data: [[2004, 0], [2005, 17], [2006, 8], [2007, 19], [2008, 15], [2009, 10], [2010, 7], [2011, 18], [2012, 11], [2013, 0]]
            },
            "x2": {
                label: "X2",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 7], [2009, 4], [2010, 4], [2011, 6], [2012, 7], [2013, 2]]
            },
            "Trylog": {
                label: "trylog",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 100], [2008, 119], [2009, 137], [2010, 76], [2011, 40], [2012, 90], [2013, 55]]
            },
            "metadata": {
                pagetitle: "Global Projects",
                title: "Compliance Projects",
                xaxis: "Years",
                yaxis: "Euros (thousand)"
            }
        },
        2: {
            "ffmindia": {
                label: "FFM India Migration",
                data: [	[2004,0],	[2005,126],	[2006,132],	[2007,144],	[2008,158],	[2009,154],	[2010,130],	[2011,175],	[2012,0],[2013,0]]
            },
            "logis": {
                label: "Logis decomission",
                data: [[2004, 0], [2005, 23], [2006, 11], [2007, 27], [2008, 25], [2009, 17], [2010, 18], [2011, 0], [2012, 0], [2013, 0]]
            },
            "Backboneintegration": {
                label: "Backbone Integration",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 160], [2008, 230], [2009, 233], [2010, 225], [2011, 152], [2012, 189], [2013, 249]]
            },
            "axis": {
                label: "AXIS3000 Implementation",
                data: [[2004, 0], [2005, 0], [2006, 50], [2007, 53], [2008, 46], [2009, 68], [2010, 49], [2011, 65], [2012, 64], [2013, 0]]
            },
            "ibenz": {
                label: "iBenz 2.0",
                data: [[2004, 0], [2005, 0], [2006, 51], [2007, 84], [2008, 36], [2009, 96], [2010, 83], [2011, 81], [2012, 70], [2013, 52]]
            },
            "metadata": {
                pagetitle: "Global Projects",
                title: "IT Projects",
                xaxis: "Years",
                yaxis: "Euros (thousand)"
            }
        },
        3: {
            "Safetyfirst": {
                label: "Safety Fist",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 188], [2009, 151], [2010, 150], [2011, 128], [2012, 140], [2013, 159]]
            },
            "steer": {
                label: "Steering Assistance",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 92], [2009, 114], [2010, 128], [2011, 92], [2012, 156], [2013, 136]]
            },
            "brakectrl": {
                label: "Brake Control",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 0], [2009, 52], [2010, 58], [2011, 40], [2012, 154], [2013, 87]]
            },
            "360sense": {
                label: "360 sense",
                data: [[2004, 0], [2005, 183], [2006, 11], [2007, 243], [2008, 117], [2009, 203], [2010, 61], [2011, 65], [2012, 140], [2013, 127]]
            },
            "engineplus": {
                label: "engineplus",
                data: [[2004, 39], [2005, 47], [2006, 43], [2007, 65], [2008, 60], [2009, 54], [2010, 11], [2011, 57], [2012, 49], [2013, 77]]
            },
            "df": {
                label: "DF 4.7",
                data: [[2004, 19], [2005, 24], [2006, 11], [2007, 26], [2008, 21], [2009, 0], [2010, 0], [2011, 0], [2012, 0], [2013, 0]]
            },
            "metadata": {
                pagetitle: "Global Projects",
                title: "Car Trucks & Projects",
                xaxis: "Years",
                yaxis: "Euros (thousand)"
            }
        },
        4: {
            "prielli": {
                label: "Pirelli Six",
                data: [[2004, 112], [2005, 140], [2006, 145], [2007, 150], [2008, 195], [2009, 112], [2010, 0], [2011, 0], [2012, 0], [2013, 0]]
            },
            "door": {
                label: "Door 4x4",
                data: [[2004, 103], [2005, 93], [2006, 65], [2007, 72], [2008, 126], [2009, 58], [2010, 0], [2011, 0], [2012, 0], [2013, 0]]
            },
            "mgp": {
                label: "MGP",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 0], [2009, 27], [2010, 75], [2011, 83], [2012, 37], [2013, 29]]
            },
            "metadata": {
                pagetitle: "Global Projects",
                title: "Parts Management Projects",
                xaxis: "Years",
                yaxis: "Euros (thousand)"
            }
        },
        5: {
            "topseed": {
                label: "Topseed",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 125], [2008, 198], [2009, 0], [2010, 0], [2011, 0], [2012, 0], [2013, 0]]
            },
            "intel": {
                label: "Intel Lab",
                data: [[2004, 179], [2005, 186], [2006, 173], [2007, 87], [2008, 118], [2009, 135], [2010, 94], [2011, 89], [2012, 80], [2013, 88]]
            },
            "dhl": {
                label: "DHL RFID",
                data: [[2004, 0], [2005, 0], [2006, 0], [2007, 0], [2008, 0], [2009, 167], [2010, 156], [2011, 162], [2012, 0], [2013, 0]]
            },
            "customerfirst": {
                label: "CustomerFirst",
                data: [[2004, 0], [2005, 0], [2006, 67], [2007, 64], [2008, 55], [2009, 70], [2010, 63], [2011, 47], [2012, 42], [2013, 40]]
            },
            "metadata": {
                pagetitle: "Global Projects",
                title: "Warehouse Management Projects",
                xaxis: "Years",
                yaxis: "Euros (thousand)"
            }
        },

    }


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
            case "hrData":
                datasets = datasetsHR; break;
            case "globalProjectsData":
                  datasets = datasetsGlobalProjects; break;
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