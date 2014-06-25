/// <reference path="../../lib/testing/jasmine-2.0.0/jasmine.js" />
/// <reference path="lineChart.js" />

/* 
 * wasted nearly 20 hours realizing reference paths are case-sensitive...
 * hint: use drag&drop from solution explorer to avoid wrongly spelled paths
 */

describe("General test", function () {
    it("just proves the proper work of Jasmine testing library", function () {
        expect(true).toBe(true);
    });
});


describe("add function", function () {
    it("test proper addition", function () {
        var a = 1;
        var b = 3;
        var res = addthis(a, b);
        expect(res).toBe(4);
    });
});

describe("string test", function () {
    it("tests string", function () {
        var name = "doesnotworkthatcrap";
        expect(name).not.toBe("thatcrapdoesnotwork");
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

    it("access nonsense negative index", function () {
        /* nonsense index */
        expect(data[-1]).toBe(undefined);
    });

    it("access very big (unprobable) index", function () {
        /* nonsense index */
        expect(data[31231231232222123311122131231]).toBe(undefined);
    });


    it("check json data array structure", function () {
        /* check proper structure index-name-(label,data[]) */
        expect(data[0]['myanmar']['label']).toBe("Myanmar");
        expect(data[0]['china']['label']).toBe("China");

    });
});
