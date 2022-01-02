var Search = (function () {
    function Search(list) {
        this.list = list;
    }
    Search.prototype.linear = function (search) {
        for (var x in this.list) {
            if (this.list[x] === search)
                return true;
        }
        return false;
    };
    Search.prototype.binary = function (arr, search) {
        if (arr.length) {
            var mid = Math.floor((arr.length) / 2);
            console.log(mid, arr[mid]);
            if (arr[mid] === search) {
                return true;
            }
            if (arr[mid] < search) {
                return this.binary(arr.slice(mid + 1, arr.length), search);
            }
            if (arr[mid] > search) {
                return this.binary(arr.slice(0, mid), search);
            }
        }
        return false;
    };
    return Search;
}());
var searchArr = [6, 1, 2, 56, 12, 76, 4, 2, 10, 11, 99, 2800, 999, 111, 23, 7];
var s = new Search(searchArr);
console.log(s.binary(searchArr.sort(function (a, b) { return a - b; }), 6));
//# sourceMappingURL=search.js.map