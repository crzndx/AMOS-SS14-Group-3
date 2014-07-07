(function () {
    
       
    
    WinJS.UI.Pages.define("/pages/treemap/treemap.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            sourcePath = options.sourcePath;
            // Add useful content here
            // what should be done after pageload? does more content need to be rendered?
            // start other js services?
            
            /**********/
 
            var elem = document.getElementById("treemapContent");
            var treeHeight = elem.offsetHeight;
            var treeWidth = elem.offsetWidth;
            
            

            var w = treeWidth,
                h = treeHeight,
                x = d3.scale.linear().range([0, w]),
                y = d3.scale.linear().range([0, h]),
                color = d3.scale.category20c(),
                root,
                node;

            var treemap = d3.layout.treemap()
                .round(false)
                .size([w, h])
                .sticky(true)
                .value(function (d) { return d.a; });

            var svg = d3.select(".treemap").append("div")
                .attr("class", "chart")
                .style("width", w + "px")
                .style("height", h + "px")
              .append("svg:svg")
                .attr("width", w)
                .attr("height", h)
              .append("svg:g")
                .attr("transform", "translate(.5,.5)");


            d3.json(sourcePath, function (data) {
                node = root = data;

                var title = node.name;

                var labela = node.labela;
                var labelb = node.labelb;
           
                
            
                var nodes = treemap.nodes(root)
                    .filter(function (d) { return !d.children; });

                var cell = svg.selectAll("g")
                    .data(nodes)
                  .enter().append("svg:g")
                    .attr("class", "cell")
                    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
                    .on("click", function (d) { return zoom(node == d.parent ? root : d.parent); });

                cell.append("svg:rect")
                    .attr("width", function (d) { return d.dx - 1; })
                    .attr("height", function (d) { return d.dy - 1; })
                    .style("fill", function (d) { return color(d.parent.name); });

                cell.append("svg:text")
                    .attr("x", function (d) { return d.dx / 2; })
                    .attr("y", function (d) { return d.dy / 2; })
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .text(function (d) { return d.name })
                    /* these line down here shows the sizes of all elements (but does not distinguish between parent und child nodes!!!! needs to detect zoom()!!!
                    .text(function (d) {
                        if (node != d.parent) { // children
                            return d.name + " " + (d.dx * d.dy / (d.parent.dx * d.parent.dy) * 100).toFixed(1) + "%";
                        } else { // parent nodes
                            return d.name + " " + (d.dx * d.dy / (treeWidth*treeHeight) * 100).toFixed(1) + "%";;
                        }
                    }) */
                    .style("opacity", function (d) { d.w = this.getComputedTextLength(); return d.dx > d.w ? 1 : 0; });

                d3.select(window).on("click", function () { zoom(root); });


                //adding button labels
                d3.select(".label_a").text(labela);
                d3.select(".label_b").text(labelb);


                d3.selectAll("input").on("change", function () {
                    treemap.value(this.value == "value_a" ? value_a : value_b).nodes(root);
                    zoom(node);
                });
                //adding title
                d3.select("#treemap_title").text(title);
              
            });

          

            function value_a(d) {
                return d.a;
            }

            function value_b(d) {
                return d.b;
            }

            function zoom(d) {
                var kx = w / d.dx, ky = h / d.dy;
                x.domain([d.x, d.x + d.dx]);
                y.domain([d.y, d.y + d.dy]);

                var t = svg.selectAll("g.cell").transition()
                    .duration(d3.event.altKey ? 7500 : 750)
                    .attr("transform", function (d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

                t.select("rect")
                    .attr("width", function (d) { return kx * d.dx - 1; })
                    .attr("height", function (d) { return ky * d.dy - 1; })

                t.select("text")
                    .attr("x", function (d) { return kx * d.dx / 2; })
                    .attr("y", function (d) { return ky * d.dy / 2; })
                    .style("opacity", function (d) { return kx * d.dx > d.w ? 1 : 0; });

                node = d;
                d3.event.stopPropagation();
            }

        }
    });
    // some more librarys/js starts here
    function log(msg) {
        document.getElementById("status").innerHTML += msg;
    }

})();
