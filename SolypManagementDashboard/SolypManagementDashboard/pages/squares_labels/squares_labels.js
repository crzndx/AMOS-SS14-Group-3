(function () {
    

        
    
    WinJS.UI.Pages.define("/pages/squares_labels/squares_labels.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            // Add useful content here
            // what should be done after pageload? does more content need to be rendered?
            // start other js services?

            //Mike bostock's tree map
            // leaving 50 on top because we need to fit the form, we leave 10 on the sides to make it look more spacious but the truth is that the content wrapper already has margins
            

            /**********/
            var width = 960,
                height = 500,
                color = d3.scale.category20c();

            var treemap = d3.layout.treemap()
                .padding(4)
                .size([width, height])
                .value(function(d) { return d.size; });

            var svg = d3.select(".contentwrapper").append("svg")
                .attr("width", width)
                .attr("height", height)
              .append("g")
                .attr("transform", "translate(-.5,-.5)");

            d3.json("pages/squares_labels/squaresdata.json", function(error, json) {
                var cell = svg.data([json]).selectAll("g")
                    .data(treemap.nodes)
                    .enter().append("g")
                    .attr("class", "cell")
                    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

                cell.append("rect")
                    .attr("width", function(d) { return d.dx; })
                    .attr("height", function(d) { return d.dy; })
                    .style("fill", function(d) { return d.children ? color(d.name) : null; });

                cell.append("text")
                    .attr("x", function(d) { return d.dx / 2; })
                    .attr("y", function(d) { return d.dy / 2; })
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .text(function(d) { return d.children ? null : d.name; });
            });
            

        }
    });



    // some more librarys/js starts here


})();
