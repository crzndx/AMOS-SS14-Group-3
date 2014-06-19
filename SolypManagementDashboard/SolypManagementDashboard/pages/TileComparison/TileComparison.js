(function () {
    "use strict";

    var NUMBER = 0;
    var RATING = 1;
    var PERCENTAGE = 2;
   

    function showAllCards() {
        WinJS.Navigation.navigate("pages/allCards/allCards.html");
    }


    var customerCardsTileId = 0;
    function itemTemplateFunction(itemPromise) {

        return itemPromise.then(function (item) {

            //the id is not well defined it only counts 3 items and not four thats why one of the cards is black
            customerCardsTileId = (customerCardsTileId) % 4;
            customerCardsTileId++;

            var template = new WinJS.Binding.Template(document.getElementById("tiletemplate"));
            var tempCard = template.render(item.data, document.createElement("div"));
            
            var xLabels = ["Q1", "Q1", "Q2", "Q3", "Q4"];
            // chart
            var w = 160;
            var h = 120;
            var barpadding = 10;
            
            var marginTop = 30;
            
            //create the svg
            var svg = d3.select(tempCard._value.querySelector(".barchart"))
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);
            
            svg.append("text")
            .attr("x", (w / 2))
            .attr("y", (marginTop / 2))
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("text-decoration", "underline")
            .text("Quarter Revenue");
            
            //BARCHART starts here
            
            // we create a rectangle for each entry of the data
           
            svg.selectAll("rect")
                .data(item.data.quarterRevenue)
                .enter()
                .append("rect")
                //position on the x axis
                .attr("x", function(d, i) {
                    return i * (w / 4); //like this it adjust to the amount of

                })
                .attr("y", function(d) {
                    return h - d;
                })
                .attr("width", w / 4 - barpadding)
                .attr("height", function(d) {
                    return d;
                })
                .attr("fill", "teal");
      
    
            svg.selectAll("text")
                .data(xLabels)
                .enter()
                .append("text")
                .attr("x", function (d, z) { return z * (w / 4) - (w/4)/2-13; })
                .attr("y", function(d) {
                    return h+12;
                })
                .text(function (l) { return l; });
                
            svg.selectAll("p")
                .data(item.data.quarterRevenue)
                .enter()
                .append("text")
                .text(function(d) { return d; })
                .attr("x", function(d, z) { return z * (w / 4); })
                .attr("y", function (d) { return h - (d); })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill","teal");

          
            tempCard._value.querySelector("#plandiv").className = "plan plan" + customerCardsTileId;
            
            // Create KPI
            var newInnerHTML = '<input type="hidden" class="itemid" value="' + item.data.Name + '"></input>';
            var i = 0;
            for (i = 0; i < 3; i++) {
                newInnerHTML += generateKPIDiv(item.data.KPI[kpiBaseReference + i][0], item.data.KPI[kpiBaseReference + i][1], ((item.data.KPI[kpiBaseReference + i][2] == undefined) ? 0 : item.data.KPI[0][2]), i);
            }
            
            tempCard._value.querySelector(".kpiCanvas").innerHTML = window.toStaticHTML(newInnerHTML);
            return tempCard;
        });
    }

    function initTiles() {
        loadData();
       

    }

    
    function loadData() {


        var uri = new Windows.Foundation.Uri("ms-appx:///data/2011.txt");

        Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).then(function (file) {
            return Windows.Storage.FileIO.readTextAsync(file);
        }).done(function (text) {

            var temp = JSON.parse(text);
            data = temp;
            var tileData = new WinJS.Binding.List(temp);
            var list2 = document.getElementById("customerListView").winControl;
            list2.itemDataSource = tileData.dataSource;

            list2.forceLayout();
            customerCardsTileId = 0;
            


        });
       
    }

    function handler(eventInfo) {
        // Create Handles for all needed HTML-Elements
        var hndListView = document.querySelector("#customerListView").winControl;
        var hndMessageToTheUser = document.querySelector("#MessageToTheUser");
        var hndCompareButton = document.querySelector("#compareButton");

        // How many Items have been selected?
        var selectedItemsCount = hndListView.selection.getItems()._value.length;


        if (selectedItemsCount > 0) {
            if (selectedItemsCount == 1) {
                // Only one Element is selcted: ask for more

                hndMessageToTheUser.className = "MessageToTheUserVisible";
                hndCompareButton.className = "MessageToTheUserInvisible";
            } else {
                // Display Compare-Button and hide MessageToUser
                hndMessageToTheUser.className = "MessageToTheUserInvisible";
                hndCompareButton.className = "action secondary MessageToTheUserVisible";
            }
        } else {
            // Hide Message and Button
            hndMessageToTheUser.className = "MessageToTheUserInvisible";
            hndCompareButton.className = "action secondary MessageToTheUserInvisible";
        }
    }

    var rememberList;
    var rememberButtonText = "Remove Selection";
    var selectionMode = true;
    // Compare Tiles
    function compareTile() {
        var list2 = document.getElementById("customerListView").winControl;


        if (selectionMode) {
            // Get the control, itemDataSource and selected items

            var test = [];
            var selectedArray = [];
            rememberList = list2.itemDataSource;
            var selectedList = list2.selection.getItems();
            for (var i = 0; i < selectedList._value.length; i++) {
                selectedArray.push(selectedList._value[i].data);
            }

            var tempObj = new WinJS.Binding.List(selectedArray);
            // lettersList = new WinJS.Binding.List(letters);
            list2.itemDataSource = tempObj.dataSource;

            list2.forceLayout();
           

        } else {
            list2.itemDataSource = rememberList;
        }

        var compareButton = document.getElementById("compareButton");
        var temp = compareButton.innerHTML;
        compareButton.innerHTML = rememberButtonText;


        rememberButtonText = temp;

        selectionMode = !selectionMode;
    }
    

    var kpiBaseReference = 0;
    var data;
    function generateKPI() {
        var elems = document.getElementsByTagName('*'), i;
        
        for (i in elems) {
            if ((' ' + elems[i].className + ' ').indexOf(' kpiCanvas ') > -1) {

                var temp = elems[i].getElementsByClassName("itemid")[0];
                var x = 0;
                var a = temp.value;
                var newInnerHTML = '<input type="hidden" class="itemid" value="' + a + '"></input>';
                var b = data[x].Name;
              
                while (a != b) {
                    x++;
                    b = data[x].Name;
                    if (x > data.count)
                        a = b;
                }
                data[x].KPI[kpiBaseReference];

                var counter = 0;

                while (counter < 3 && (kpiBaseReference + counter) < data[x].KPI.length) {

                    var kpi_temp = data[x].KPI[kpiBaseReference + counter];
                    var kpi_type = (kpi_temp[2] == undefined) ? 0 : kpi_temp[2];
                    newInnerHTML += generateKPIDiv(kpi_temp[0], kpi_temp[1], kpi_type, counter);
                    
                    counter++;
                }
                elems[i].innerHTML = window.toStaticHTML(newInnerHTML);

            }
        }
    }
    
    function generateKPIDiv(name, value, type, counter) {
        var tops = [1, 27, 53];

        var newInnerHTML =
           '<div style="position: absolute; text-align: left; left:1px; top:' + tops[counter] + 'px; width: 80px; height:25px; background-color: #FFFFFF;"><b>' + name + '</b></div>';

        switch (type) {
            case PERCENTAGE:
                newInnerHTML += '<div style="position: absolute; text-align: left; left: 82px; top: ' + tops[counter] + 'px; width: 77px; height: 25px; background-color: #FFFFFF;">' + value + '%</div>';
                break;
            case RATING:
                newInnerHTML += '<div style="position: absolute; text-align: left; left: 82px; top: ' + tops[counter] + 'px; width: 77px; height: 25px; background-color: #FFFFFF;">';
                newInnerHTML += '<span class="win-small" data-win-control="WinJS.UI.Rating" data-win-options="{ userRating: ' + value + ', disabled: true}"></span></div>';
                break;
            case NUMBER:
            default:
                newInnerHTML +=
                    '<div style="position: absolute; text-align: left; left: 82px; top: ' + tops[counter] + 'px; width: 77px; height: 25px; background-color: #FFFFFF;">' + value + '</div>';
                break;
        }
        return newInnerHTML;
    }

    function kpiRight_Click() {
        if (kpiBaseReference < data[0].KPI.length - 3) {
            kpiBaseReference++;
            generateKPI();
        }

    }
    function kpiLeft_Click() {
        if (kpiBaseReference > 0) kpiBaseReference--;
        generateKPI();
    }
    WinJS.Namespace.define("TemplatingExample", { itemTemplateFunction: itemTemplateFunction });
    WinJS.Utilities.markSupportedForProcessing(TemplatingExample.itemTemplateFunction);
    /*declarating the sliding bar*/
    var slidingAppBar;
    /******/

    WinJS.UI.Pages.define("/pages/TileComparison/TileComparison.html", {

        ready: function (element, options) {

            /* Initialize App Bar */
            slidingAppBar = document.getElementById("appBar").winControl;

            slidingAppBar.getCommandById("showNextYear").addEventListener("click", function () { showNextYear(dimensionIndex); });
            slidingAppBar.getCommandById("showPreviousYear").addEventListener("click", function () { showPreviousYear(dimensionIndex); });
            slidingAppBar.getCommandById("showAllCards").addEventListener("click", function () { showAllCards(); });
            /*****************************************/
            customerCardsTileId = 0;
            document.body.querySelector("#compareButton").addEventListener("click", compareTile, false);
            document.body.querySelector("#kpiLeft").addEventListener("click", kpiLeft_Click, false);
            document.body.querySelector("#kpiRight").addEventListener("click", kpiRight_Click, false);

            var listView = document.querySelector("#customerListView");
            listView.addEventListener("iteminvoked", handler);
            initTiles();
            var listViewHost = element.querySelector("#customerListView");
            var lView = listViewHost.winControl;
            lView.itemTemplate = itemTemplateFunction;
        },

        onload: function (element, options) {
            customerCardsTileId = 0;
        }


    });





})();

