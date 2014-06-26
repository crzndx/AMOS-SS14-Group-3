(function () {
    

        
    
    WinJS.UI.Pages.define("/pages/squares/squares.html", {
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

            var w = 960;
            var h = 550;
            var paddingAllowance = 2;
            var color = d3.scale.category20c();

            var treemap = d3.layout.treemap()
                .size([w, h])
                .padding([20, 4, 4, 4])
                .value(function(d) {
                    return d.investment;
                });

            var svg = d3.select(".contentwrapper").append("svg")
                .style("position", "relative")
                .style("width", w + "px")
                .style("height", h + "px")
                .append("g")
                .attr("transform", "translate(-.5,-.5)");

            d3.json("pages/squares/squaresdata.json", function(json) {
                var cell = svg.data([json]).selectAll("g")
                    .data(treemap)
                    .enter().append("g")
                    .attr("class", "cell")
                    .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";});

                cell.append("rect")
                    .attr("width", function(d) { return d.dx;})
                    .attr("height", function(d) { return d.dy;})
                    .style("fill", function(d) {return d.children ? color(d.name) : null;});

                //the application environment works as if it a internet explorer browser, so I have to achieve that the labels wrap manually as I get to truncate manually the labels

                cell.append("text")
              .attr("class", "foreignObject")
              .attr("transform", "translate(3, 13)")
              .text(function (d) { return (d.dy < 16 ? "" : d.name); })
              .filter(function (d) { d.tw = this.getComputedTextLength();
                  return d.dx < d.tw;})
              .each(function (d) { // ridiculous routine where we test to see if label is short enough to fit
                  var proposedLabel = d.name;
                  var proposedLabelArray = proposedLabel.split('');
                  while (d.tw > d.dx && proposedLabelArray.length) {
                      // pull out 3 chars at a time to speed things up (one at a time is too slow)
                      proposedLabelArray.pop(); proposedLabelArray.pop(); proposedLabelArray.pop();
                      if (proposedLabelArray.length === 0) {
                          proposedLabel = "";
                      } else {
                          proposedLabel = proposedLabelArray.join('') + "..."; // manually truncate with ellipsis
                      }
                      d3.select(this).text(proposedLabel);
                      d.tw = this.getComputedTextLength();
                  }
              });

                d3.selectAll("input").on("change", function change() {
                    var value = this.value === "count"
                        ? function () { return 1; }
                        : function (d) { return d.investment; };

                    cell
                        .data(treemap.value(value).nodes)
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
