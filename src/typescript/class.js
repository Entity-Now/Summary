/*
 * @作者: 14770137
 * @Date: 2022-10-15 17:03:13
 */
var Test = /** @class */ (function () {
    function Test(a) {
    }
    Test.prototype.get = function () {
        return this.fish;
    };
    Test.prototype.set = function (val) {
        this.fish = val;
    };
    return Test;
}());
var run = new Test('asd');
run.get();
