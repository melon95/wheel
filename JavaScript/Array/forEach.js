// The forEach() method executes a provided function once for each array element.
/**
 *
 * @param callbackFn
 * @param thisArg
 */
Array.prototype.forEach = function(callbackFn, thisArg) {
    for (let i = 0; i < this.length; i++) {
        callbackFn.call(thisArg, this[i], i, this)
    }
}

const list = [1,2,3,5];

const obj = {
    a: 'woshi obj'
}
list.forEach(function (item) {
    console.log(this.a)
}, obj)