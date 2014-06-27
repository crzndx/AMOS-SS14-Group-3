﻿/// <reference path="../../lib/testing/jasmine-2.0.0/jasmine.js" />
/// <reference path="lineChart.js" />
/// <reference path="lineChart.html" />

/* 
 * wasted nearly 20 hours realizing reference paths are case-sensitive...
 * hint: use drag&drop from solution explorer to avoid wrongly spelled paths
 */


var dataset1 = {
    0: {
        "myanmar": {
            label: "Myanmar",
            data: [[1988, 683994], [2006, 528692]]
        },
        "china": {
            label: "China",
            data: [[2004, 480451], [2005, 504638], [2006, 528692]]
        },
        "metadata": {
            title: "Sales in Europe",
            xaxis: "Whatever",
            yaxis: "Bla"
        }
    },
    1: {
        "uk": {
            label: "United Kingdom",
            data: [[1988, 183194], [2005, 303468], [2006, 458495]]
        },
        "metadata": {
            title: "Sales in America",
            xaxis: "Sometext",
            yaxis: "yaxisname"
        }
    }
};

var dataset2 = {
    0: {
        "Germany": {
            label: "germany",
            data: [[2011, 68394], [2031, 11191]]
        },
        "France": {
            label: "France",
            data: [[2034, 481451], [2005, 504631], [2026, 512312]]
        },
        "metadata": {
            title: "the title",
            xaxis: "xaxis name",
            yaxis: "yaxis name"
        }
    },
    1: {
        "Poland": {
            label: "Poland&/=)?)(?)(/&$§",
            data: [[1988, 183194], [2105, 123465], [2104, 458335]]
        },
        "metadata": {
            title: "Poland data",
            xaxis: "Yrs",
            yaxis: "Nonsense text"
        }
    },
    2: {
        "Bosnia": {
            label: "Bosnia",
            data: [[1288, 13394], [45, 1441], [1144, 35]]
        },
        "metadata": {
            title: "Sales in Europe",
            xaxis: "Years",
            yaxis: "in EUR"
        }
}
};

// for later use testing different datasets
var datasets = [dataset1, dataset2];

/* Test Template
describe("General test", function () {
    it("just proves the proper work of Jasmine testing library", function () {
        expect(true).toBe(true);
    });
});
*/

describe("General test", function () {
    it("just proves the proper work of Jasmine testing library", function () {
        expect(true).toBe(true);
    });
});

describe("addition", function () {
    it("test", function () {
        // test how to invoke function in other JS file 
        var x = addthis(3,2);
        expect(x).toBe(5);
    });
});


describe("update Chart title", function () {

    it("check if DOM manipulation happens", function () {
        // old title
        var elem = document.getElementById('chartTitle').innerText;
        updateChartTitle(1, dataset1);
        // updated title
        var elemNew = document.getElementById('chartTitle').innerText;
        expect(elem).not.toBe(elemNew);
    });

    it("test index correctness", function () {
        expect(function () {
            updateChartTitle(-1, dataset1);
        }).toThrow("updateChartError");
        expect(function () {
            updateChartTitle(3331, dataset1);
        }).toThrow("updateChartError");
    });

    it("test passed dataset", function () {
        expect(
            function () {
                updateChartTitle(1, notguiltyreference);
            }).toThrow();
        // catch reference error
    });
});



describe("showNext/Prev test", function () {
    it("tests showPrevious function", function () {
        var i = -13;
        while (i < 70) {
            it("showNext test", function () {
                // todo 
                expect(true).toBe(true);
            });

            it("showPrevious test", function () {
                // todo
                expect(true).toBe(true);
            });
            i++;
        }

    });
});



describe("test data validation", function () {

    var data;
    it("if undefinded", function () {
        var data;
        expect(data).toBe(undefined);
    });

    /* define dataset afterwards */
    data = {
        0: {
            "myanmar": {
                label: "Myanmar",
                data: [[1988, 683994], [2006, 528692]]
            },
            "china": {
                label: "China",
                data: [[2004, 480451], [2005, 504638], [2006, 528692]]
            }
        },
        1: {
            "uk": {
                label: "United Kingdom",
                data: [[1988, 183194], [2005, 303468], [2006, 458495]]
            }
        }
    };

    it("check if data array got filled", function () {
        /* after filling*/
        expect(data.length).not.toBe(0);
    });

    it("access nonsense index", function () {
        /* nonsense index */
        expect(data[-1]).toBe(undefined);
        expect(data[3.141]).toBe(undefined);
        expect(data[-312]).toBe(undefined);
        expect(data["idonotexist"]).toBe(undefined);
    });

    it("access very big (unprobable) index", function () {
        /* nonsense index */
        expect(data[31231231232222123311122131231]).toBe(undefined);
        expect(data[1337131121]).toBe(undefined);
    });


    it("check json data array structure", function () {
        /* check proper structure index-name-(label,data[]) */
        expect(data[0]['myanmar']['label']).toBe("Myanmar");
        expect(data[0]['china']['label']).toBe("China");

    });
});
