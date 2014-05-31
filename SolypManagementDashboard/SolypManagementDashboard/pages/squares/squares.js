(function () {
    "use strict";


    
    WinJS.UI.Pages.define("/pages/squares/squares.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            // Add useful content here
            // what should be done after pageload? does more content need to be rendered?
            // start other js services?

            //creating the squares, Im gonna try to do it without a function and later on if so create a function

            var data = [105, 8, 67, 17, 55, 32];

            //first I need to do is read the variable and sum all values so that later on I can get the percentages

            var sum = 0;
           
           
            for (var i in data) { sum += data[i]; }
         
            //I have the sum of the array in sum, now its time to create the percentages 
            //lets take for granted that the width is 600px (I need to check this later) * 500px
            var w = 600;
            var h = 500;
            //create somehow loop
            var handle = document.getElementById('squares');
            for (var i = 0; i < data.length; i++) {
                var customSquare = document.createElement("div");
                customSquare.style.width = w / sum * data[i]+"px";
                customSquare.style.height = h / sum * data[i]+"px";
                customSquare.style.background = "red";
                customSquare.style.position = "relative";
                customSquare.style.float = "left";
                customSquare.style.border = "solid";
                customSquare.style.borderWidth = "1px";
                customSquare.style.borderColor = "black";
                customSquare.innerHTML = "Hello";
                handle.appendChild(customSquare);
            }

        }
    });



    // some more librarys/js starts here


})();
