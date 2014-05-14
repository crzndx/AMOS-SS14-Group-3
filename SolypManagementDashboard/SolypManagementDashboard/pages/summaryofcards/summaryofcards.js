(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/itemDetail/itemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = HomescreenData.resolveItemReference(options.item);

            // Parses the title of the subpage from the data file
            element.querySelector(".titlearea .pagetitle").textContent = item.title;

            // Add useful content here
            // what should be done after pageload? does more content need to be rendered?
            // start other js services?
            // implementing Izoomable interface
            var ZoomableView = WinJS.Class.define(function (timeline) {
                // Constructor
                this._timeline = timeline;
            }, {
                // Public methods
                getPanAxis: function () {
                    return this._timeline._getPanAxis();
                },
                configureForZoom: function (isZoomedOut, isCurrentView, triggerZoom, prefetchedPages) {
                    this._timeline._configureForZoom(isZoomedOut, isCurrentView, triggerZoom, prefetchedPages);
                },
                setCurrentItem: function (x, y) {
                    this._timeline._setCurrentItem(x, y);
                },
                getCurrentItem: function () {
                    return this._timeline._getCurrentItem();
                },
                beginZoom: function () {
                    this._timeline._beginZoom();
                },
                positionItem: function (/*@override*/item, position) {
                    return this._timeline._positionItem(item, position);
                },
                endZoom: function (isCurrentView) {
                    this._timeline._endZoom(isCurrentView);
                },
                handlePointer: function (pointerId) {
                    this._timeline._handlePointer(pointerId);
                }
            });


            // Define custom control for semantic zoom
            WinJS.Namespace.define("CustomControls", {
                Timeline: WinJS.Class.define(function (element, options) {
                    this._element = element;
                    if (options) {
                        if (typeof options.initialView === "boolean") {
                            this._initialView = options.initialView;
                        }
                    }
                    this._viewport = document.createElement("div");
                    this._viewport.className = "viewportStyle";
                    this._element.appendChild(this._viewport);
                    this._canvas = document.createElement("div");
                    this._canvas.className = "canvasStyle";
                    this._viewport.appendChild(this._canvas);
                    var viewportWidth = this._element.offsetWidth;
                    var viewportHeight = this._element.offsetHeight;
                    var that = this;

                    // If current view is initial view then create ZoomedIn view
                    if (this._initialView) {
                        this._element.className = "timeline-zoomed-in";
                        var zoomedInPointsArray = ["timeline-1.png", "timeline-2.png", "timeline-3.png", "timeline-4.png", "timeline-5.png"]
                        var itemHeightArray = [537, 800, 537, 777, 833];
                        var itemPositionArray = [470, 220, -110, -95, -200];

                        // Create items for the zoomed in view
                        for (var i = 0; i <= zoomedInPointsArray.length - 1; i++) {
                            var item = document.createElement("div");
                            item.className = "zoomedInItem";
                            item.style.backgroundImage = "url(/images/timeline/" + zoomedInPointsArray[i] + ")";
                            item.style.marginLeft = itemPositionArray[i] + "px";
                            item.style.height = itemHeightArray[i] + "px";

                            // Add click event handler to navigate from page
                            item.addEventListener("click", function () {
                                WinJS.Navigation.navigate("/pages/detail/detail.html");
                            }, false);
                            this._canvas.appendChild(item);
                        }

                        // Create bottom timeline scale
                        var timelineScale = document.createElement("div");
                        timelineScale.className = "scaleStyle";
                        this._canvas.appendChild(timelineScale);
                    }

                        // Create zoomedOut view
                    else {
                        this._element.className = "timeline-zoomed-out";
                        var zoomedOutPointsArray = ["sezo-1.png", "sezo-2.png", "sezo-3.png", "sezo-4.png", "sezo-5.png"]
                        var itemWidthArray = [280, 280, 280, 267, 226];

                        // Create items for the zoomed out view
                        for (var i = 0; i <= zoomedOutPointsArray.length - 1; i++) {
                            var item = document.createElement("div");
                            item.className = "zoomedOutItem";
                            item.style.backgroundImage = "url(/images/timeline/" + zoomedOutPointsArray[i] + ")";
                            item.style.width = itemWidthArray[i] + "px";

                            // Add click event handler to trigger zoom
                            item.addEventListener("click", function () {
                                if (that._isZoomedOut) {
                                    that._triggerZoom();
                                }
                            }, false);
                            this._canvas.appendChild(item);
                        }
                    }
                    this._element.winControl = this;
                },
             {

                 // Public properties
                 zoomableView: {
                     get: function () {
                         if (!this._zoomableView) {
                             this._zoomableView = new ZoomableView(this);
                         }
                         return this._zoomableView;
                     }
                 },

                 // Private properties
                 _getPanAxis: function () {
                     return "horizontal";
                 },

                 _configureForZoom: function (isZoomedOut, isCurrentView, triggerZoom, prefectchedPages) {
                     this._isZoomedOut = isZoomedOut;
                     this._triggerZoom = triggerZoom;
                 },

                 _setCurrentItem: function (x, y) {
                     // Here set the position and focus of the current element
                 },

                 _beginZoom: function () {
                     // Hide the scrollbar and extend the content beyond the viewport
                     var scrollOffset = -this._viewport.scrollLeft;
                     this._viewport.style.overflowX = "visible";
                     this._canvas.style.left = scrollOffset + "px";
                     this._viewport.style.overflowY = "visible";
                 },

                 _getCurrentItem: function () {
                     // Get the element with focus
                     var focusedElement = document.activeElement;
                     focusedElement = this._canvas.firstElementChild;

                     // Get the corresponding item for the element
                     var /*@override*/item = 1;
                     // Get the position of the element with focus
                     var pos = {
                         left: focusedElement.offsetLeft + parseInt(this._canvas.style.left, 10),
                         top: focusedElement.offsetTop,
                         width: focusedElement.offsetWidth,
                         height: focusedElement.offsetHeight
                     };
                     return WinJS.Promise.wrap({ item: item, position: pos });
                 },

                 _positionItem: function (/*@override*/item, position) {
                     // Get the corresponding item for the element
                     var year = Math.max(this._start, Math.min(this._end, item)),
                     element = this._canvas.children[item];

                     //Ensure the element ends up within the viewport
                     var viewportWidth = this._viewport.offsetWidth,
                     offset = Math.max(0, Math.min(viewportWidth - element.offsetWidth, position.left));

                     var scrollPosition = element.offsetLeft - offset;

                     // Ensure the scroll position is valid
                     var adjustedScrollPosition = Math.max(0, Math.min(this._canvas.offsetWidth - viewportWidth, scrollPosition));

                     // Since a zoom is in progress, adjust the div position
                     this._canvas.style.left = -adjustedScrollPosition + "px";
                     element.focus();

                     // Return the adjustment that will be needed to align the item
                     return WinJS.Promise.wrap({ x: adjustedScrollPosition - scrollPosition, y: 0 });
                 },

                 _endZoom: function (isCurrentView, setFocus) {
                     // Crop the content again and re-enable the scrollbar
                     var scrollOffset = parseInt(this._canvas.style.left, 10);
                     this._viewport.style.overflowX = "auto";
                     this._canvas.style.left = "0px";
                     this._viewport.style.overflowY = "hidden";
                     this._viewport.scrollLeft = -scrollOffset;
                 },

                 _handlePointer: function (pointerId) {
                     // Let the viewport handle panning gestures
                     this._viewport.msSetPointerCapture(pointerId);
                 }
             })
            })
        }
        //2nd copy here
        // Define custom control for semantic zoom  
    })
    WinJS.Namespace.define("CustomControls", {
        Timeline: WinJS.Class.define(function (element, options) {
            this._element = element;
            if (options) {
                if (typeof options.initialView === "boolean") {
                    this._initialView = options.initialView;
                }
            }
            this._viewport = document.createElement("div");
            this._viewport.className = "viewportStyle";
            this._element.appendChild(this._viewport);
            this._canvas = document.createElement("div");
            this._canvas.className = "canvasStyle";
            this._viewport.appendChild(this._canvas);
            var viewportWidth = this._element.offsetWidth;
            var viewportHeight = this._element.offsetHeight;
            var that = this;

            // If current view is initial view then create ZoomedIn view
            if (this._initialView) {
                this._element.className = "timeline-zoomed-in";
                var zoomedInPointsArray = ["timeline-1.png", "timeline-2.png", "timeline-3.png", "timeline-4.png", "timeline-5.png"]
                var itemHeightArray = [537, 800, 537, 777, 833];
                var itemPositionArray = [470, 220, -110, -95, -200];

                // Create items for the zoomed in view
                for (var i = 0; i <= zoomedInPointsArray.length - 1; i++) {
                    var item = document.createElement("div");
                    item.className = "zoomedInItem";
                    item.style.backgroundImage = "url(/images/timeline/" + zoomedInPointsArray[i] + ")";
                    item.style.marginLeft = itemPositionArray[i] + "px";
                    item.style.height = itemHeightArray[i] + "px";

                    // Add click event handler to navigate from page
                    item.addEventListener("click", function () {
                        WinJS.Navigation.navigate("/pages/detail/detail.html");
                    }, false);
                    this._canvas.appendChild(item);
                }

                // Create bottom timeline scale
                var timelineScale = document.createElement("div");
                timelineScale.className = "scaleStyle";
                this._canvas.appendChild(timelineScale);
            }

                // Create zoomedOut view
            else {
                this._element.className = "timeline-zoomed-out";
                var zoomedOutPointsArray = ["sezo-1.png", "sezo-2.png", "sezo-3.png", "sezo-4.png", "sezo-5.png"]
                var itemWidthArray = [280, 280, 280, 267, 226];

                // Create items for the zoomed out view
                for (var i = 0; i <= zoomedOutPointsArray.length - 1; i++) {
                    var item = document.createElement("div");
                    item.className = "zoomedOutItem";
                    item.style.backgroundImage = "url(/images/timeline/" + zoomedOutPointsArray[i] + ")";
                    item.style.width = itemWidthArray[i] + "px";

                    // Add click event handler to trigger zoom
                    item.addEventListener("click", function () {
                        if (that._isZoomedOut) {
                            that._triggerZoom();
                        }
                    }, false);
                    this._canvas.appendChild(item);
                }
            }
            this._element.winControl = this;
        },
     {

         // Public properties
         zoomableView: {
             get: function () {
                 if (!this._zoomableView) {
                     this._zoomableView = new ZoomableView(this);
                 }
                 return this._zoomableView;
             }
         },

         // Private properties
         _getPanAxis: function () {
             return "horizontal";
         },

         _configureForZoom: function (isZoomedOut, isCurrentView, triggerZoom, prefectchedPages) {
             this._isZoomedOut = isZoomedOut;
             this._triggerZoom = triggerZoom;
         },

         _setCurrentItem: function (x, y) {
             // Here set the position and focus of the current element
         },

         _beginZoom: function () {
             // Hide the scrollbar and extend the content beyond the viewport
             var scrollOffset = -this._viewport.scrollLeft;
             this._viewport.style.overflowX = "visible";
             this._canvas.style.left = scrollOffset + "px";
             this._viewport.style.overflowY = "visible";
         },

         _getCurrentItem: function () {
             // Get the element with focus
             var focusedElement = document.activeElement;
             focusedElement = this._canvas.firstElementChild;

             // Get the corresponding item for the element
             var /*@override*/item = 1;
             // Get the position of the element with focus
             var pos = {
                 left: focusedElement.offsetLeft + parseInt(this._canvas.style.left, 10),
                 top: focusedElement.offsetTop,
                 width: focusedElement.offsetWidth,
                 height: focusedElement.offsetHeight
             };
             return WinJS.Promise.wrap({ item: item, position: pos });
         },

         _positionItem: function (/*@override*/item, position) {
             // Get the corresponding item for the element
             var year = Math.max(this._start, Math.min(this._end, item)),
             element = this._canvas.children[item];

             //Ensure the element ends up within the viewport
             var viewportWidth = this._viewport.offsetWidth,
             offset = Math.max(0, Math.min(viewportWidth - element.offsetWidth, position.left));

             var scrollPosition = element.offsetLeft - offset;

             // Ensure the scroll position is valid
             var adjustedScrollPosition = Math.max(0, Math.min(this._canvas.offsetWidth - viewportWidth, scrollPosition));

             // Since a zoom is in progress, adjust the div position
             this._canvas.style.left = -adjustedScrollPosition + "px";
             element.focus();

             // Return the adjustment that will be needed to align the item
             return WinJS.Promise.wrap({ x: adjustedScrollPosition - scrollPosition, y: 0 });
         },

         _endZoom: function (isCurrentView, setFocus) {
             // Crop the content again and re-enable the scrollbar
             var scrollOffset = parseInt(this._canvas.style.left, 10);
             this._viewport.style.overflowX = "auto";
             this._canvas.style.left = "0px";
             this._viewport.style.overflowY = "hidden";
             this._viewport.scrollLeft = -scrollOffset;
         },

         _handlePointer: function (pointerId) {
             // Let the viewport handle panning gestures
             this._viewport.msSetPointerCapture(pointerId);
         }
     })
    })
}


);



// some more librarys/js starts here
}); 
