(function () {
    

        
    
    WinJS.UI.Pages.define("/pages/squares_legend/squares_legend.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            // Add useful content here
            // what should be done after pageload? does more content need to be rendered?
            // start other js services?

            //Mike bostock's tree map
            // leaving 50 on top because we need to fit the form, we leave 10 on the sides to make it look more spacious but the truth is that the content wrapper already has margins
            var margin = { top: 50, right: 10, bottom: 10, left: 10 },
             width = 960 - margin.left - margin.right,
             height = 500 - margin.top - margin.bottom;

            var color = d3.scale.category20c();

            var treemap = d3.layout.treemap()
                .size([width, height])
                .sticky(true)
                .padding(4)
                .value(function (d) { return d.size; });

            var div = d3.selectAll(".contentwrapper").append("div")
                .style("position", "relative")
                .style("width", (width + margin.left + margin.right) + "px")
                .style("height", (height + margin.top + margin.bottom) + "px")
                .style("left", margin.left + "px")
                .style("top", margin.top + "px");

            d3.json("pages/squares_legend/squaresdata.json", function (error, root) {
                var node = div.datum(root).selectAll(".node")
                    .data(treemap.nodes)
                    .enter().append("div")
                    .attr("class", "node")
                    .call(position)
                    .style("background", function (d) { return d.children ? color(d.name) : null; })
                    .text(function (d) { return d.children ? null : d.name; });

                //tengo que añadir un square abajo con el nombre y el color

                var legend = div.datum(root).selectAll(".legend")
                    .data(treemap.nodes)
                    .enter().append("div")
                    .attr("class", "legend")
                    .style("background", function (d) { return d.children ? color(d.name) : null; })
                    .text(function (d) { return d.children ? null : d.name; });

                
                                

                d3.selectAll("input").on("change", function change() {
                    var count = this.value === "count"
                        ? function () { return 1; }
                        : function (d) { return d.size; };

                    node
                        .data(treemap.value(count).nodes)
                        .transition()
                        .duration(1500)
                        .call(position);
                });
            });

            function position() {
                this.style("left", function (d) { return d.x + "px"; })
                    .style("top", function (d) { return d.y + "px"; })
                    .style("width", function (d) { return Math.max(0, d.dx - 1) + "px"; })
                    .style("height", function (d) { return Math.max(0, d.dy - 1) + "px"; });
            }


        }
    });



    // some more librarys/js starts here


})();
