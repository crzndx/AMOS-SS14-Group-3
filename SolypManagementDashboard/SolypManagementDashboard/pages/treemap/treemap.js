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
 

            var w = 1100,
                h =550,
                x = d3.scale.linear().range([0, w]),
                y = d3.scale.linear().range([0, h]),
                color = d3.scale.category20c(),
                root,
                node;

            var treemap = d3.layout.treemap()
                .round(false)
                .size([w, h])
                .sticky(true)
                .value(function (d) { return d.investment; });

            var svg = d3.select(".contentwrapper").append("div")
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
                    .text(function (d) { return d.name; })
                    .style("opacity", function (d) { d.w = this.getComputedTextLength(); return d.dx > d.w ? 1 : 0; });

                d3.select(window).on("click", function () { zoom(root); });


                //adding button labels
                d3.select(".label_a").text(labela);
                d3.select(".label_b").text(labelb);


                d3.selectAll("input").on("change", function () {
                    treemap.value(this.value == "investment" ? investment : revenue).nodes(root);
                    zoom(node);
                });
                //adding title
                d3.select(".pagetitle").text(title);
              
            });

          

            function investment(d) {
                return d.investment;
            }

            function revenue(d) {
                return d.revenue;
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


})();
