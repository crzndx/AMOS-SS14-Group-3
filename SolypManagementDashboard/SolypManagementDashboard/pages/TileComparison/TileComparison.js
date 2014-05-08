(function () {
    "use strict";
    var selectionMode = true;
    var tIndex = 0;
    //Create an array of the letters in the alphabet
    var letterSrc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // Our Binding.List
    var lettersList = {};

    // Initializes the first set of tiles
    // Uses an array that will be converted into a Binding.List
    function initTiles() {
        var letters = [];
        for (var i = 0; i < 20; i++) {
            
            letters[i] = generateTile(tIndex, letterSrc[Math.floor(Math.random() * letterSrc.length)]);
            tIndex++;
        }
        lettersList = new WinJS.Binding.List(letters);

        var list2 = document.getElementById("listView2").winControl;
        list2.itemDataSource = lettersList.dataSource;
        list2.itemTemplate = document.getElementById("tileTemplate");
        list2.forceLayout();
    }

    // Generates a tile with a random letter and counter
    function generateTile(strIndex, strLetter) {
        var tile = {
            letter: strLetter,
            counter: strIndex
        };
        return tile;
    }

    var rememberList;
    var rememberButtonText = "Remove Selection";
    // Compare Tiles
    function compareTile() {
        var list2 = document.getElementById("listView2").winControl;
        
        
        if(selectionMode){
            // Get the control, itemDataSource and selected items
            
            var test = [];
            var selectedArray = [];
            rememberList = list2.itemDataSource;
            var selectedList = list2.selection.getItems();
            for (var i = 0; i < selectedList._value.length; i++) {
                selectedArray.push(generateTile(selectedList._value[i].key, selectedList._value[i].data.letter));
            }
        
            var tempObj = new WinJS.Binding.List(selectedArray);
            // lettersList = new WinJS.Binding.List(letters);
            list2.itemDataSource = tempObj.dataSource;
        
            list2.forceLayout();
            
        } else {
            list2.itemDataSource = rememberList;            
        }
        
        var compareButton = document.getElementById("compareTile");
        var temp = compareButton.innerHTML;
        compareButton.innerHTML = rememberButtonText;


        rememberButtonText = temp;

        selectionMode = !selectionMode;
    }


    WinJS.UI.Pages.define("/pages/TileComparison/TileComparison.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            var element = document.body;
           
            element.querySelector("#compareTile").addEventListener("click", compareTile, false)
            initTiles();

        }
    });

})();

