/// <reference path="../../lib/testing/jasmine-2.0.0/jasmine.js" />
/// <reference path="lineChart.js" />

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
        }
    },
    1: {
        "uk": {
            label: "United Kingdom",
            data: [[1988, 183194], [2005, 303468], [2006, 458495]]
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
        }
    },
    1: {
        "Poland": {
            label: "Poland&/=)?)(?)(/&$§",
            data: [[1988, 183194], [2105, 123465], [2104, 458335]]
        }
    },
    2: {
        "Bosnia": {
            label: "Bosnia",
            data: [[1288, 13394], [45, 1441], [1144, 35]]
    }
}
};

// for later use testing different datasets
var datasets = [dataset1, dataset2];


describe("General test", function () {
    it("just proves the proper work of Jasmine testing library", function () {
        expect(true).toBe(true);
    });
});


describe("update title", function () {
    it("test updating title", function () {
        // old title
        var elem = document.getElementById("chartTitle").innerHTML;
        updateChartTitle();
        // updated title
        var elemNew = document.getElementById("chartTitle").innerHTML;
        expect(elem).not.toBe(elemNew);
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
