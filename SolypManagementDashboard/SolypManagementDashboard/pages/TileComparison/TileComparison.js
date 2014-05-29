(function () {
    // "use strict";

    var customerCardsTileId = 0;
    function itemTemplateFunction(itemPromise) {

        return itemPromise.then(function (item) {

            //var handle = document.getElementById("#tileTemplate");
            customerCardsTileId = (customerCardsTileId + 1) % 4;


            var template = document.createElement("div");
            template.id = "tileTemplate";
            template.className = ".contentwrapper";
            template.setAttribute("data-win-control", "WinJS.Binding.Template");
            var handle = document.createElement("div");
            handle.id = "fdw-pricing-table";
            var classDiv = document.createElement("div");
            classDiv.className = "plan plan" + customerCardsTileId;
            var headerDiv = document.createElement("div");
            var unsortedList = document.createElement("ul");

            var kpi1 = document.createElement("li");
            var kpi1Block = document.createElement("b");
            var kpi1Span = document.createElement("span");
            kpi1.id = "KPI1";
            // kpi1.innerHTML = "<b>Profits</b><span style=\"position: relative; left: 75px;\">" + item.data.profits + "</span>";
            kpi1Block.innerText = "Profits";
            kpi1Block.className = "kpi";
            kpi1Span.className = "firstKPI";

            //kpi1Span.setAttribute("data-win-bind", "innerText: profits");
            kpi1Span.innerHTML = item.data.profits;
            kpi1.appendChild(kpi1Block);
            kpi1.appendChild(kpi1Span);
            unsortedList.appendChild(kpi1);

            // KPI2
            var kpi2 = document.createElement("li");
            var kpi2Block = document.createElement("b");
            var kpi2Span = document.createElement("div");
            kpi2.id = "KPI2";
            //kpi2.innerHTML = "<b>KPI 2</b><span style=\"position: relative; left: 75px;\">" + item.data.profits + "</span>";
            kpi2Block.innerText = "KPI 2";
            kpi2Span.className = "win-small secondKPI";


            kpi2Span.setAttribute("data-win-bind", "winControl.userRating: averageTrainingHours");
            //kpi2Span.innerHTML = item.data.averageTrainingHours;
            kpi2Span.setAttribute("data-win-control", "WinJS.UI.Rating");
            kpi2Span.setAttribute("data-win-options", "{ disabled: true}");
            kpi2.appendChild(kpi2Block);
            kpi2.appendChild(kpi2Span);

            unsortedList.appendChild(kpi2);

            // KPI3
            var kpi3 = document.createElement("li");
            var kpi3Block = document.createElement("b");
            var kpi3Span = document.createElement("span");
            kpi3.id = "KPI3";
            kpi3Block.innerText = "KPI 3";
            kpi3Span.className = "win-small thirdKPI";
            // kpi3Span.style = "position: relative; left: 85px;";
            kpi3Span.innerHTML = "58%";
            kpi3.appendChild(kpi3Block);
            kpi3.appendChild(kpi3Span);
            unsortedList.appendChild(kpi3);


            // chart
            var chart = document.createElement("div");
            var w = 160;
            var h = 70;
            var barpadding = 10;
            var four = [5, 10, 8, 12]
            var i = 0;
            //create the svg
            var svg = d3.select(chart)
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

            var div = document.createElement("div");
            div.innerText = "mediumListIconTextItem";

            var chartLi = document.createElement("li");
            chartLi.appendChild(chart);
            unsortedList.appendChild(chartLi);

            // Button
            var button = document.createElement("a");
            button.innerText = "More Info";
            button.className = "signup";
            button.href = "";

            headerDiv.className = "header";
            headerDiv.innerText = item.data.Name;
            classDiv.appendChild(headerDiv);
            classDiv.appendChild(unsortedList);
            classDiv.appendChild(button);
            handle.appendChild(classDiv);


            template.appendChild(handle);
            var toDebug = document.createElement("div");
            toDebug.appendChild(template);
            console.log(toDebug.innerHTML);

            return template;
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

    WinJS.UI.Pages.define("/pages/TileComparison/TileComparison.html", {

        ready: function (element, options) {
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

