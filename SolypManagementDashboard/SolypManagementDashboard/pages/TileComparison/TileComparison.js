(function () {
    "use strict";


   

    function showAllCards() {
        WinJS.Navigation.navigate("pages/allCards/allCards.html");
    }


    var customerCardsTileId = 0;
    function itemTemplateFunction(itemPromise) {

        return itemPromise.then(function (item) {

            //the id is not well defined it only counts 3 items and not four thats why one of the cards is black
            customerCardsTileId = (customerCardsTileId) % 4;
            customerCardsTileId++;

            //var outerDiv = document.createElement("div");
            //outerDiv.id = "customercard";

            var template = new WinJS.Binding.Template(document.getElementById("tiletemplate"));
            var tempCard = template.render(item.data, document.createElement("div"));
            //debugger;
            //outerDiv.appendChild(tempCard);


            // chart
            var w = 160;
            var h = 70;
            var barpadding = 10;
            var i = 0;

            //create the svg
            var svg = d3.select(tempCard._value.querySelector(".barchart"))
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);
            // we create a rectangle for each entry of the data
            svg.selectAll("rect")
                .data(item.data.quarterRevenue)
                .enter()
                .append("rect")
                //position on the x axis
                .attr("x", function (d, i) {
                    return i * (w / 4); //like this it adjust to the amount of

                })
                .attr("y", function (d) {
                    return h - d;
                })
                .attr("width", w / 4 - barpadding)
                .attr("height", function (d) {
                    return d;
                })
                .attr("fill", "teal");

            tempCard._value.querySelector("#plandiv").className = "plan plan" +customerCardsTileId;

            return tempCard;
        });
    }

    function initTiles() {



        var temp = loadData();


    }

    function loadData() {



        var uri = new Windows.Foundation.Uri("ms-appx:///data/2011.txt")

        Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).then(function (file) {
            return Windows.Storage.FileIO.readTextAsync(file);
        }).done(function (text) {

            var temp = JSON.parse(text);

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
            document.body.querySelector("#compareButton").addEventListener("click", compareTile, false)

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

